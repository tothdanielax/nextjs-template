import {
	adminOrSelfProcedure,
	adminProcedure,
	noSessionProcedure,
	protectedProcedure,
	publicProcedure,
	selfProcedure,
} from '#server/api/trpc';
import { describe, expect, test } from 'vitest';

describe('trpc', () => {
	test('publicProcedure', () => {
		expect(publicProcedure).toBeDefined();
	});

	test('noSessionProcedure', async () => {
		expect(noSessionProcedure).toBeDefined();
	});

	test('protectedProcedure', () => {
		expect(protectedProcedure).toBeDefined();
	});

	test('selfProcedure', () => {
		expect(selfProcedure).toBeDefined();
	});

	test('adminProcedure', () => {
		expect(adminProcedure).toBeDefined();
	});

	test('adminOrSelfProcedure', () => {
		expect(adminOrSelfProcedure).toBeDefined();
	});
});
