import type { Meta, StoryObj } from '@storybook/react';
import RootNotFound from '@/app/[locale]/not-found';

const meta = {
  title: 'Pages/NotFound',
  component: RootNotFound,
} satisfies Meta<typeof RootNotFound>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
