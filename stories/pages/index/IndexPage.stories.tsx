import type { Meta, StoryObj } from '@storybook/react';
import IndexPage from '@/app/[locale]/page';

const meta = {
  title: 'Pages/Index/Page',
  component: IndexPage,
  args: {
    params: { locale: 'en' },
  },
} satisfies Meta<typeof IndexPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
