import type { Meta, StoryObj } from '@storybook/react';
import UsersPage from '@/app/[locale]/users/page';

const meta = {
  title: 'Pages/Users/Page',
  component: UsersPage,
} satisfies Meta<typeof UsersPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
