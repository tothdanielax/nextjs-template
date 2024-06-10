import { env } from '#/env';
import { describe, expect, expectTypeOf, test } from 'vitest';

describe('env', () => {
	test('exports env', async () => {
		expect(env).toBeDefined();
		expectTypeOf(env).toBeObject();
	});
});
