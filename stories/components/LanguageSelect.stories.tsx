import { LanguageSelect } from '#components/LanguageSelect';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, getByTestId, userEvent } from '@storybook/test';

const meta: Meta = {
	title: 'Components/LanguageSelect',
	component: LanguageSelect,
	play: async ({ canvasElement }) => {
		const languageSelect = getByTestId(canvasElement, 'language-select');
		await expect(languageSelect).toBeVisible();
		await userEvent.click(languageSelect);
		await expect(languageSelect).toHaveFocus();
	},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
