import { ColorSchemeToggle } from '#components/ColorSchemeToggle';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

const meta: Meta = {
	title: 'Components/ColorSchemeToggle',
	component: ColorSchemeToggle,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		await userEvent.click(button);
	},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
