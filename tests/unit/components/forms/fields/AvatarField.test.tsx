import { AvatarField } from '#components/forms/fields/AvatarField';
import { render, screen } from '#tests/testing-utils';
import { describe, expect, test } from 'vitest';

describe('AvatarField', () => {
	test('should render and have label "Avatar"', () => {
		render(<AvatarField />);
		const label = screen.getByLabelText('Avatar');
		expect(label).toBeInTheDocument();
	});
});
