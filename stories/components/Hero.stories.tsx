import { Hero } from '#components/Hero';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mantine/core';
import { fn } from '@storybook/test';

const meta: Meta = {
	title: 'Components/Hero',
	component: Hero,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		image: {
			src: 'https://picsum.photos/1920/1080',
			alt: 'A photo of a mountain',
		},
		title: 'Welcome to our app',
		description: 'This is a description of our app. It is a very good app.',
	},
};

export const WithButtons: Story = {
	args: {
		...Default.args,
		buttons: (
			<>
				<Button type="button" onClick={fn}>
					Get started
				</Button>
				<Button type="button" onClick={fn}>
					Learn more
				</Button>
			</>
		),
	},
};

export const WithLongDescription: Story = {
	args: {
		...Default.args,
		description:
			'This is a description of our app. It is a very good app. This is a description of our app. It is a very good app. This is a description of our app. It is a very good app.',
	},
};

export const WithLongTitle: Story = {
	args: {
		...Default.args,
		title:
			'This is a very long title for our app that is so long that it will wrap around to the next line',
	},
};
