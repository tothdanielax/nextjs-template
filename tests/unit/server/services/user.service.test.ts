import type {
	AddCompletedGameInputType,
	CreateUserInputType,
	DeleteUserInputType,
} from '#models/user/users.schema';
import type { Session } from 'next-auth';

import { TRPCError } from '@trpc/server';
import { ObjectId } from 'mongodb';
import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';

import { userService } from '#server/services/user.service';

test('userService', () => {
	expect(userService).toBeDefined();
});

describe('userService.create', () => {
	expect(userService.create).toBeDefined();
	expectTypeOf(userService.create).parameter(0).toEqualTypeOf<CreateUserInputType>();

	test('should create and return a user', async () => {
		const result = await userService.create({
			confirmPassword: 'password',
			password: 'password',
			username: 'username',
		} as CreateUserInputType);

		expect(result).toBeDefined();
		expect(result).toHaveProperty('user');
		expect(result).toHaveProperty('message');
		expect(result).toHaveProperty(['user', '_id']);

		await userService.delete({ _id: result.user!._id as string, shouldArchive: false });
	});

	test('throw if username is already taken', async () => {
		await expect(
			userService.create({
				confirmPassword: 'admin',
				password: 'admin',
				username: 'admin',
			}),
		).rejects.toThrowError();
	});
});

describe('userService.delete', () => {
	expect(userService.delete).toBeDefined();
	expectTypeOf(userService.delete).parameter(0).toEqualTypeOf<DeleteUserInputType>();

	test('should archive a user', async () => {
		const createResult = await userService.create({
			confirmPassword: 'password',
			password: 'password',
			username: 'userToArchive',
		} as CreateUserInputType);

		expect(createResult).toBeDefined();
		expect(createResult).not.toBeNull();

		const archiveResult = await userService.delete({
			_id: createResult.user!._id,
			shouldArchive: true,
		} as DeleteUserInputType);

		expect(archiveResult).toBeDefined();
		expect(archiveResult).toHaveProperty('message');

		const getUserResult = await userService.getByUsername(createResult.user!.username);
		expect(getUserResult).toBeDefined();
		expect(getUserResult).toHaveProperty('isArchived', true);
	});

	test('should delete a user', async () => {
		const createResult = await userService.create({
			confirmPassword: 'password',
			password: 'password',
			username: 'userToDelete',
		} as CreateUserInputType);

		expect(createResult).toBeDefined();
		expect(createResult).not.toBeNull();

		const deleteResult = await userService.delete({
			_id: createResult.user!._id,
			shouldArchive: false,
		} as DeleteUserInputType);

		expect(deleteResult).toBeDefined();
		expect(deleteResult).toHaveProperty('message');
		await expect(async () =>
			userService.getByUsername(createResult.user!.username),
		).rejects.toThrowError(TRPCError);
	});
});

describe('userService.getAll', () => {
	expect(userService.getAll).toBeDefined();

	beforeAll(async () => {
		await userService.create({
			confirmPassword: 'password',
			password: 'password',
			username: 'user1',
		} as CreateUserInputType);

		await userService.create({
			confirmPassword: 'password',
			password: 'password',
			username: 'user2',
		} as CreateUserInputType);
	});

	test('should return all users', async () => {
		const result = await userService.getAll();
		expect(result).toBeDefined();
		expect(Array.isArray(result)).toBe(true);
		expect(result.length).toBeGreaterThan(2);
		expect(result[0]).toHaveProperty('username');
		expect(result[1]).toHaveProperty('username');
	});

	test('should not return password', async () => {
		const result = await userService.getAll();
		expect(result[0]).not.toHaveProperty('password');
		expect(result[1]).not.toHaveProperty('password');
	});
});

describe('userService.getByUsername', () => {
	expect(userService.getByUsername).toBeDefined();
	expectTypeOf(userService.getByUsername).toBeFunction();
	expectTypeOf(userService.getByUsername).parameter(0).toEqualTypeOf<string>();

	// eslint-disable-next-line sonarjs/no-duplicate-string
	test('should return a user', async () => {
		const result = await userService.getByUsername('user1');
		expect(result).toBeDefined();
		expect(result).toHaveProperty('username', 'user1');
	});

	// eslint-disable-next-line sonarjs/no-duplicate-string
	test('should throw if user not found', async () => {
		await expect(async () => userService.getByUsername('user404')).rejects.toThrowError(TRPCError);
	});
});

describe('userService.signIn', () => {
	expect(userService.signIn).toBeDefined();
	expectTypeOf(userService.signIn).toBeFunction();
	expectTypeOf(userService.signIn)
		.parameter(0)
		.toEqualTypeOf<{ password: string; username: string }>();
	expectTypeOf(userService.signIn).parameter(1).toEqualTypeOf<Session | null>();

	test('should return a user', async () => {
		const result = await userService.signIn({ password: 'password', username: 'user1' }, null);
		expect(result).toBeDefined();
		expect(result).toHaveProperty('username', 'user1');
	});

	test('should return a user if there is a valid session open', async () => {
		const sessionMock: Session = {
			user: {},
		} as Session;

		const result = await userService.signIn({} as CreateUserInputType, sessionMock);
		expect(result).toBe(sessionMock.user);
	});

	test('should throw if user not found', async () => {
		await expect(async () =>
			userService.signIn({ password: 'password', username: 'user404' }, null),
		).rejects.toThrowError(TRPCError);
	});

	test('should throw if password is invalid', async () => {
		await expect(async () =>
			userService.signIn({ password: 'password404', username: 'user1' }, null),
		).rejects.toThrowError(TRPCError);
	});
});

describe('userService.update', async () => {
	expect(userService.update).toBeDefined();

	const user = await userService.getByUsername('user');

	test('should not return a user on a random id (there is a chance)', async () => {
		await expect(
			userService.update({
				_id: new ObjectId().toString(),
				password: 'password',
				username: 'user1',
			}),
		).rejects.toThrowError();
	});

	test('should update if valid id', async () => {
		const result = await userService.update({
			_id: user._id,
			username: 'user1',
		});
		expect(result).toHaveProperty('message', 'User updated successfully!');
	});
});

describe('userService.addCompletedGame', () => {
	test('should not add a completed game to a user on random game', async () => {
		const id = new ObjectId().toString();

		const input: AddCompletedGameInputType = {
			gameId: new ObjectId().toString(),
			userId: id,
		};

		await expect(userService.addCompletedGame(input)).rejects.toThrowError();
	});
});

describe('userService.getById', async () => {
	test('general', () => {
		expect(userService.getById).toBeDefined();
		expectTypeOf(userService.getById).toBeFunction();
		expectTypeOf(userService.getById).parameter(0).toEqualTypeOf<string>();
	});

	const user = await userService.getByUsername('user');

	test('should return a user', async () => {
		const result = await userService.getById(String(user._id));
		expect(result).toBeDefined();
		expect(result).toHaveProperty('username');
	});

	test('should throw if user not found', async () => {
		await expect(userService.getById('user404')).rejects.toThrowError();
	});
});
