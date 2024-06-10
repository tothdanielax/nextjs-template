import { useSafePush } from '#/hooks/useSafePush';
import { expect, test } from 'vitest';

import { act, renderHook } from '../testing-utils';

test('useSafePush', async () => {
	const { rerender, result } = renderHook(() => useSafePush());

	expect(result.current.safePush).toBeDefined();
	expect(result.current.onChanging).toBeDefined();
	expect(result.current.safePush).toBeInstanceOf(Function);
	expect(result.current.onChanging).toBe(false);

	act(() => result.current.safePush('/'));

	rerender();
	expect(result.current.onChanging).toBe(false);
});
