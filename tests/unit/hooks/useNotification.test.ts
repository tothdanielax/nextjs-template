import { useNotification } from '#/hooks/useNotification';
import { describe, expect, test } from 'vitest';

import { act, renderHook } from '../testing-utils';

describe('useNotification', () => {
	test('should return a function', () => {
		const { result } = renderHook(() => useNotification());
		expect(result.current.showNotification).toBeInstanceOf(Function);
	});

	test.skip('should show a notification', () => {
		const { result } = renderHook(() => useNotification());
		act(() => {
			result.current.showNotification({
				message: 'Test Message',
				title: 'Test Title',
				type: 'success',
			});
		});
	});
});
