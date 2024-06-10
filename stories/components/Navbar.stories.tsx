import { Navbar } from '#components/Navbar/Navbar';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, getByRole } from '@storybook/test';
import { Brand } from '#components/Navbar/Brand';
import { NavLinks } from '#components/Navbar/NavLinks';

const meta: Meta = {
	title: 'Components/Navbar',
	component: Navbar,
	play: async ({ canvasElement }) => {
		const navbar = getByRole(canvasElement, 'navigation');
		await expect(navbar).toBeVisible();
	},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {},
};
