import { FormBase } from '#components/forms/FormBase';
import { describe, expect, test, vi } from 'vitest';

import { render, screen } from '../../testing-utils';

describe('FormBase', () => {
	test('should render correctly', () => {
		render(
			<FormBase isLoading={false} onSubmit={vi.fn()}>
				Test Form
			</FormBase>,
		);

		const form = screen.getByTestId('form');
		expect(form).toBeInTheDocument();
	});

	test('should display loading overlay when isLoading is true', () => {
		const { container } = render(
			<FormBase isLoading onSubmit={vi.fn()}>
				Test Form
			</FormBase>,
		);
		expect(container).toMatchSnapshot();

		const loadingOverlay = screen.getByTestId('loading-overlay');
		expect(loadingOverlay).toBeInTheDocument();
	});
});
