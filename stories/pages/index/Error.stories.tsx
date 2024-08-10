import type { Meta, StoryObj } from '@storybook/react';
import Error from '@/app/[locale]/error';
import { fn } from '@storybook/test';

const meta = {
  title: 'Pages/Error',
  component: Error,
  args: {
    reset: fn(),
  },
} satisfies Meta<typeof Error>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
