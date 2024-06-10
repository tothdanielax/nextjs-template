import { RoleField } from '#components/forms/fields/RoleField';
import { render, screen } from '#tests/testing-utils';
import { describe, expect, test } from 'vitest';

describe('RoleField', () => {
	test('should render correctly', () => {
		render(<RoleField />);

		const label = screen.getByText('Role');
		expect(label).toBeInTheDocument();

		const input = screen.getByTestId('role-field');
		expect(input).toBeInTheDocument();
	});
});
