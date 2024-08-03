import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from '@/components/common/button-link';

const meta = {
	title: 'Components/Common/ButtonLink',
	component: ButtonLink,
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		href: '#',
		title: 'Button Link',
	},
};
