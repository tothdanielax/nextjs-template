import { generalService } from '#server/services/general.service';
import { describe, expect, expectTypeOf, test } from 'vitest';

test('generalService', () => {
	expect(generalService).toBeDefined();
	expectTypeOf(generalService).toBeObject();
});

test('generalService.getCollection', () => {
	expect(generalService.getCollection).toBeDefined();
	expectTypeOf(generalService.getCollection).toBeFunction();
	expect(generalService.getCollection('users')).toBeDefined();
	expectTypeOf(generalService.getCollection('users')).toBeObject();
});

describe('generalService.healthCheck', () => {
	test('should return health check', async () => {
		const result = await generalService.healthCheck();

		expect(result).toBeDefined();
		expect(result).toHaveProperty('database');
		expect(result.database).toHaveProperty('connections');
		expect(result.database).toHaveProperty('live');
		expect(result.database).toHaveProperty('metrics');
		expect(result.database).toHaveProperty('uri');
		expect(result.database).toHaveProperty('version');
	});
});
