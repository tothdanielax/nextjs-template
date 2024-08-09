import type { Meta, StoryObj } from '@storybook/react';
import { DarkMode } from '@/components/inputs/select/dark-mode/DarkMode';

const meta = {
  title: 'Components/Inputs/DarkMode',
  component: DarkMode,
} satisfies Meta<typeof DarkMode>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
