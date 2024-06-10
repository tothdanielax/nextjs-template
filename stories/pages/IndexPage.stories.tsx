import type { Meta, StoryObj } from '@storybook/react';
import IndexPage from '#/app/[locale]/page';

const meta: Meta = {
	title: 'Pages/IndexPage',
	component: IndexPage,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
