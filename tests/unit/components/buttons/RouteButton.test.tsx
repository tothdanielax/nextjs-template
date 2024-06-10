import RouteButton from '#components/buttons/RouteButton';
import { describe, expect, test } from 'vitest';

import { render } from '../../testing-utils';

describe('RouteButton', () => {
	test('should render PrimaryButton by default', () => {
		const { container } = render(<RouteButton href="/test">Test Button</RouteButton>);
		const a = container.querySelector('a');
		expect(a).toBeInTheDocument();
	});

	test('should render SecondaryButton when isSecondary is true', () => {
		const { container } = render(
			<RouteButton href="/test" isSecondary>
				Test Button
			</RouteButton>,
		);
		const button = container.querySelector('a');
		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('data-variant', 'light');
	});

	test('should pass href to the button', () => {
		const { getByText } = render(<RouteButton href="/test">Test Button</RouteButton>);
		const innerSpan = getByText('Test Button');
		expect(innerSpan).toBeInTheDocument();
		expect(innerSpan.tagName).toBe('SPAN');
		expect(innerSpan.parentElement).toBeInTheDocument();
		expect(innerSpan.parentElement?.tagName).toBe('SPAN');

		const a = innerSpan.parentElement?.parentElement;
		expect(a).toHaveAttribute('href', '/test');
	});
});
