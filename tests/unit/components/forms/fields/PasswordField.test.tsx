import type { ChangeEvent } from 'react';

import { PasswordField } from '#components/forms/fields/PasswordField';
import { fireEvent, render, screen } from '#tests/testing-utils';
import { describe, expect, test, vi } from 'vitest';

describe('PasswordField', () => {
	test('should render correctly', () => {
		const { container } = render(<PasswordField />);

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('placeholder', 'TopSecret123');
	});

	test('should have label "Password"', () => {
		render(<PasswordField />);
		const label = screen.getByText('Password');
		expect(label.tagName).toBe('LABEL');
	});

	test('should trigger onChange event', () => {
		const handleChange = vi.fn();
		const { container } = render(<PasswordField onChange={handleChange} />);

		// eslint-disable-next-line testing-library/no-container
		const input = container.querySelector('input');
		const changeEvent = {
			target: { value: 'Test password' },
		} as ChangeEvent<HTMLInputElement>;

		expect(input).toBeInTheDocument();
		fireEvent.change(input!, changeEvent);

		expect(handleChange).toHaveBeenCalledTimes(1);
	});
});
