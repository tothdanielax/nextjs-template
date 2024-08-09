import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '@/components/layout/navbar';
import { NavItems } from '@/components/layout/navitems';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Layout/Navbar',
  component: Navbar,
  subcomponents: {
    NavItems,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
