import RootLayout from '#components/RootLayout';
import { describe, expect, test } from 'vitest';

import { render, screen } from '../testing-utils';

describe('RootLayout', () => {
	test('should render correctly', () => {
		const { container } = render(
			<RootLayout>
				<p data-testid="children"> children </p>
			</RootLayout>,
		);
		expect(container).toMatchSnapshot();

		const children = screen.getByTestId('children');
		expect(children).toBeInTheDocument();
		expect(children).toHaveTextContent('children');
	});
});
