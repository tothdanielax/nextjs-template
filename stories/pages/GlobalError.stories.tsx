import type { Meta, StoryObj } from '@storybook/react';
import GlobalError from '@/app/[locale]/global-error';
import { fn } from '@storybook/test';

const meta = {
  title: 'Pages/GlobalError',
  component: GlobalError,
  args: {
    reset: fn(),
    locale: 'en',
  },
} satisfies Meta<typeof GlobalError>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
