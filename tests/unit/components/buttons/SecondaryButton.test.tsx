import SecondaryButton from '#components/buttons/SecondaryButton';
import { describe, expect, test, vi } from 'vitest';

import { render, screen } from '../../testing-utils';

describe('SecondaryButton', () => {
	test('should render correctly', () => {
		const { container } = render(<SecondaryButton>Test Button</SecondaryButton>);
		expect(container).toMatchSnapshot();

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Test Button');
	});

	test('should trigger onClick event', () => {
		const handleClick = vi.fn();
		const { container } = render(
			<SecondaryButton onClick={handleClick}>Test Button</SecondaryButton>,
		);
		expect(container).toMatchSnapshot();

		const button = screen.getByText('Test Button');
		button.click();

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
