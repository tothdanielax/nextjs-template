import {describe, expect, expectTypeOf, test} from 'vitest';
import {env} from '@/env';

describe('Env', () => {
	test('exports env', async () => {
		expect(env).toBeDefined();
		expectTypeOf(env).toBeObject();
	});
});
