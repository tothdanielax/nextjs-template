import { BioField } from '#components/forms/fields/BioField';
import { render, screen } from '#tests/testing-utils';
import { describe, expect, test } from 'vitest';

describe('BioField', () => {
	test('should render and have label "Bio"', () => {
		render(<BioField />);

		const label = screen.getByLabelText('Bio');
		expect(label).toBeInTheDocument();
	});
});
