import { useAuthRedirect } from '#/hooks/useAuthRedirect';
import { describe, expect, test } from 'vitest';

import { renderHook } from '../testing-utils';

describe('useAuthRedirect', () => {
	test('should return nothing', () => {
		const { result } = renderHook(() => useAuthRedirect({ redirectIf: 'authenticated' }));
		expect(result.current).toBeUndefined();
	});

	test.skip('should redirect if user is authenticated', () => {});
	test.skip('should redirect if user is unauthenticated', () => {});
});
