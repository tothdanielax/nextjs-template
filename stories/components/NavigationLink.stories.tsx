import { NavigationLink } from '#components/NavigationLink';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, getByRole } from '@storybook/test';

const meta: Meta = {
	title: 'Components/NavigationLink',
	component: NavigationLink,
	play: async ({ canvasElement }) => {
		const navigationLink = getByRole(canvasElement, 'link');
		await expect(navigationLink).toBeVisible();
	},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		href: '/',
		children: 'Home',
	},
	play: async ({ canvasElement }) => {
		const navigationLink = getByRole(canvasElement, 'link');
		await expect(navigationLink).toBeVisible();
		await expect(navigationLink).toHaveTextContent('Home');
	},
};
