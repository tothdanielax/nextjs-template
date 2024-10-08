import type { Meta, StoryObj } from '@storybook/react';
import Layout from '@/app/[locale]/layout';

const meta = {
  title: 'Pages/Layout',
  component: Layout,
  args: {
    params: { locale: 'en' },
    children: 'children',
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
