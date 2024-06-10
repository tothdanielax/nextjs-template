import PrimaryButton from '#components/buttons/PrimaryButton';
import { describe, expect, test, vi } from 'vitest';

import { render, screen } from '../../testing-utils';

describe('PrimaryButton', () => {
	test('should render correctly', () => {
		const { container } = render(<PrimaryButton>Test Button</PrimaryButton>);
		expect(container).toMatchSnapshot();

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Test Button');
	});

	test('should trigger onClick event', () => {
		const handleClick = vi.fn();
		const { container } = render(<PrimaryButton onClick={handleClick}>Test Button</PrimaryButton>);
		expect(container).toMatchSnapshot();

		const button = screen.getByText('Test Button');
		button.click();

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
