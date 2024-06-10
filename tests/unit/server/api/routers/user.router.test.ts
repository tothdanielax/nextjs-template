import { userRouter } from '#/server/api/routers/user.router';
import { createTRPCClient } from '@trpc/client';
import { httpLink } from '@trpc/client/links/httpLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { describe, expect, test } from 'vitest';

describe('userRouter', () => {
	test('should have the correct procedures', () => {
		expect(userRouter).toHaveProperty('addCompletedGame');
		expect(userRouter).toHaveProperty('create');
		expect(userRouter).toHaveProperty('delete');
		expect(userRouter).toHaveProperty('getAll');
		expect(userRouter).toHaveProperty('getById');
		expect(userRouter).toHaveProperty('getByUsername');
		expect(userRouter).toHaveProperty('signIn');
		expect(userRouter).toHaveProperty('update');
	});

	test('should be able to create a client', () => {
		const client = createTRPCClient({
			links: [
				loggerLink(),
				httpLink({
					url: 'http://localhost:3000/api/trpc',
				}),
			],
			// @ts-expect-error - userRouter is not a valid router
			router: userRouter,
		});

		expect(client).toBeDefined();
	});
});
