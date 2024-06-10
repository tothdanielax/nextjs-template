import DangerPrimaryButton from '#components/buttons/DangerPrimaryButton';
import { describe, expect, test, vi } from 'vitest';

import { render, screen } from '../../testing-utils';

describe('DangerPrimaryButton', () => {
	test('should render correctly', () => {
		const { container } = render(<DangerPrimaryButton>Test Button</DangerPrimaryButton>);
		expect(container).toMatchSnapshot();

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Test Button');
	});

	test('should have red color', () => {
		const { container } = render(<DangerPrimaryButton>Test Button</DangerPrimaryButton>);
		expect(container).toMatchSnapshot();

		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('style', expect.stringMatching(/red/));
	});

	test('should trigger onClick event', () => {
		const handleClick = vi.fn();
		const { container } = render(
			<DangerPrimaryButton onClick={handleClick}>Test Button</DangerPrimaryButton>,
		);
		expect(container).toMatchSnapshot();

		const button = screen.getByText('Test Button');
		button.click();

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
