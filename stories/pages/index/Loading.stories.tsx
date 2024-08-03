import type {Meta, StoryObj} from '@storybook/react';
import Loading from '@/app/[locale]/loading';

const meta = {
	title: 'Pages/Loading',
	component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
