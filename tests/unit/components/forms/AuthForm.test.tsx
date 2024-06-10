import { AuthForm } from '#components/forms/AuthForm';
import { useForm } from '@mantine/form';
import { describe, expect, test, vi } from 'vitest';

import { render, screen } from '../../testing-utils';

// this is mocked useForm hook
// eslint-disable-next-line react-hooks/rules-of-hooks
const f = useForm();

describe('AuthForm', () => {
	test('should render correctly', () => {
		render(
			// @ts-expect-error - form is invalid it is mocked
			<AuthForm form={f} isLoading={false} onSubmit={vi.fn()}>
				Test Form
			</AuthForm>,
		);

		const form = screen.getByTestId('form');
		expect(form).toBeInTheDocument();
	});

	test('should display loading overlay when isLoading is true', () => {
		render(
			// @ts-expect-error - form is invalid it is mocked
			<AuthForm form={f} isLoading onSubmit={vi.fn()}>
				Test Form
			</AuthForm>,
		);

		const loadingOverlay = screen.getByTestId('loading-overlay');
		expect(loadingOverlay).toBeInTheDocument();
	});
});
