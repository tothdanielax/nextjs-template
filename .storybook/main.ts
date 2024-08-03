import type {StorybookConfig} from '@storybook/nextjs';
import * as path from "node:path";

const config: StorybookConfig = {
	framework: '@storybook/nextjs',
	stories: ['../stories/**/*.stories.@(ts|tsx)'],
	features: { experimentalRSC: true },
	staticDirs: ['../public'],
	docs: {},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
	
	addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@storybook/test',
        'storybook-dark-mode',
    ],

	webpackFinal: async (config) => {
		config.resolve ||= {};
		config.resolve.modules ||= [];


		// Adding fallbacks for Postgres
		config.resolve.fallback = {
			...config.resolve.fallback,
			net: false,
			tls: false,
			perf_hooks: false,
		};

		// auto import mocks from __mocks__ folder if it is set
		config.resolve.modules = [path.resolve(__dirname, "../__mocks__"), ...config.resolve.modules];
		
		return config;
	},
};
export default config;
