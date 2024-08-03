import type {Meta, StoryObj} from '@storybook/react';
import {LanguageSelect} from '@/components/inputs/select/language-select/LanguageSelect';

const meta = {
	title: 'Components/Inputs/LanguageToggle',
	component: LanguageSelect,
} satisfies Meta<typeof LanguageSelect>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {},
};
