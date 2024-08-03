import '../src/styles/tailwind.css';

import type {Preview} from '@storybook/react';
import React from "react";
import {themes} from "@storybook/theming";
import {AppWrapper} from "@/providers/app-wrapper";

const preview: Preview = {
	parameters: {
		layout: 'centered',
		nextjs: {
			appDirectory: true,
		},
		options: {
			// https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy#sorting-stories
			storySort: {
				method: 'alphabetical',
				order: ['Pages', 'Components']
			}
		},
		actions: { 
			// https://storybook.js.org/docs/essentials/actions#automatically-matching-args
			argTypesRegex: "^on[A-Z].*" 
		},
		controls: {
			// https://storybook.js.org/docs/essentials/controls#custom-control-type-matchers
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
				boolean: /is[A-Z].*$/i,
			},

			// https://storybook.js.org/docs/essentials/controls#show-full-documentation-for-each-property
			expanded: true
		},
		docs: {
			// open issue on docs theming: https://github.com/storybookjs/storybook/issues/28758
			theme: themes.dark,
		},
		
		// https://storybook.js.org/addons/storybook-dark-mode
		darkMode: {
			stylePreview: true,
			classTarget: 'html',
			dark: { ...themes.dark },
			light: { ...themes.light },
		},
	
	},

	// https://storybook.js.org/docs/writing-docs/autodocs#set-up-automated-documentation
	tags: ['autodocs'],
	decorators: [
		(Story) => <AppWrapper> <Story /> </AppWrapper>,
	],
};

export default preview;
