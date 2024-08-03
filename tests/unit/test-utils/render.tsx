import {render as testingLibraryRender} from '@testing-library/react';
import type {ReactNode} from "react";

/**
 * Renders the UI with the MantineProvider.
 * @param ui The UI to render.
 * @returns The rendered UI.
 * @see https://mantine.dev/guides/vitest/#custom-render
 */
export function render(ui: ReactNode) {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return testingLibraryRender(<>{ui}</>, {
		wrapper: ({ children }: { children: ReactNode }) => (
			{children}
		),
	});
}
