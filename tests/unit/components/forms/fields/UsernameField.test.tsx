import { UsernameField } from '#/components/forms/fields/UsernameField';
import { render, screen } from '#tests/testing-utils';
import { describe, expect, test } from 'vitest';

describe('UsernameField', () => {
	test('should render correctly', () => {
		const { container } = render(<UsernameField />);

		// eslint-disable-next-line testing-library/no-container
		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('placeholder', 'JohnDoe123');
	});

	test('should have label "Username"', () => {
		render(<UsernameField />);

		const label = screen.getByText('Username');
		expect(label).toBeInTheDocument();
	});
});
