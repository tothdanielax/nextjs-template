import { type Config } from 'tailwindcss';

/**
 * Tailwind CSS configuration
 */
const config: Config = {
	content: ['./src/app/**/*.tsx', './src/components/**/*.{ts,tsx}'],
	// Toggle dark-mode based on .dark class or data-mode="dark"
	darkMode: ['class', '[data-mode="dark"]'],
	plugins: [],
	theme: {
		extend: {},
	},
};

export default config;
