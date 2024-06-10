import DangerSecondaryButton from '#components/buttons/DangerSecondaryButton';
import { describe, expect, test, vi } from 'vitest';

import { render, screen } from '../../testing-utils';

describe('DangerSecondaryButton', () => {
	test('should render correctly', () => {
		const { container } = render(<DangerSecondaryButton>Test Button</DangerSecondaryButton>);
		expect(container).toMatchSnapshot();

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Test Button');
	});

	test('should have red color', () => {
		render(<DangerSecondaryButton>Test Button</DangerSecondaryButton>);
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('style', expect.stringMatching(/red/));
	});

	test('should trigger onClick event', () => {
		const handleClick = vi.fn();
		const { container } = render(
			<DangerSecondaryButton onClick={handleClick}>Test Button</DangerSecondaryButton>,
		);
		expect(container).toMatchSnapshot();

		const button = screen.getByText('Test Button');
		button.click();

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
