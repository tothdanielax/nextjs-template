import AuthLayout from '../../../../src/components/auth/AuthLayout';
import { describe, expect, test } from 'vitest';

import { render, screen } from '../../testing-utils';

describe('AuthLayout', () => {
	test('should render', () => {
		const { container } = render(
			<AuthLayout>
				<p data-testid="children"> children </p>
			</AuthLayout>,
		);

		expect(container).toMatchSnapshot();

		const children = screen.getByTestId('children');
		expect(children).toBeInTheDocument();
		expect(children).toHaveTextContent('children');
		expect(children).toBeVisible();

		const childrenParent = children?.parentElement;
		expect(childrenParent).toBeInTheDocument();
		expect(childrenParent).toBeVisible();
	});
});
