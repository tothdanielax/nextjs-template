import env from '@next/env';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig(() => {
	env.loadEnvConfig(process.cwd());

	return {
		envDir: './env.test',
		envPrefix: 'NEXT_PUBLIC_',
		plugins: [react(), tsconfigPaths()],
		test: {
			coverage: {
				exclude: ['src/styles', 'src/types', 'src/pages'],
				extensions: ['.ts', '.tsx'],
				ignoreEmptyLines: true,
				include: ['src/**'],
				reporters: ['default', 'json', 'json-summary', 'html'],
			},
			environment: 'jsdom',
			exclude: ['tests/unit/testing-utils'],
			globals: true,
			include: ['tests/unit/**'],
			server: {
				deps: {
					inline: ['next-auth'],
				},
			},
			setupFiles: './tests/unit/vitest.setup.ts',
		},
	};
});
