import type { StorybookConfig } from '@storybook/nextjs';
import path from 'node:path';

const config: StorybookConfig = {
	stories: ['../stories/**/*.stories.@(ts|tsx)'],

	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-viewport',
		'@storybook/addon-toolbars',
		'@storybook/addon-controls',
		'@storybook/addon-actions',
		'@storybook/addon-docs',
		'@storybook/test',
		'@storybook/test-runner',
		'@storybook/addon-themes',
		'storybook-dark-mode',
	],

	framework: {
		name: '@storybook/nextjs',
		options: {},
	},

	features: { experimentalRSC: true },

	staticDirs: ['../public'],

	docs: {},

	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},

	webpackFinal: async (config) => {
		config.resolve ||= {};
		config.resolve.alias ||= {};
		config.resolve.alias = {
			...config.resolve.alias,
			'next-intl/server': path.resolve(__dirname, './mocks/next-intl-server.ts'),
		};
		return config;
	},
};
export default config;
