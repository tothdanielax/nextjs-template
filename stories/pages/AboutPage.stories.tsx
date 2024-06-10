import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from '#/app/[locale]/about/page';

const meta: Meta = {
	title: 'Pages/AboutPage',
	component: AboutPage,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
