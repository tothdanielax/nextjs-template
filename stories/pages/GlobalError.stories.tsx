import type {Meta, StoryObj} from '@storybook/react';
import GlobalError from '@/app/[locale]/global-error';

const meta = {
	title: 'Pages/GlobalError',
	component: GlobalError,
} satisfies Meta<typeof GlobalError>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
