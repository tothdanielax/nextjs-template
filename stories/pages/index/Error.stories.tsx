import type {Meta, StoryObj} from '@storybook/react';
import Error from '@/app/[locale]/error';

const meta = {
	title: 'Pages/Error',
	component: Error,
} satisfies Meta<typeof Error>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
