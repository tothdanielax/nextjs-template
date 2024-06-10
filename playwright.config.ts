import { defineConfig, devices } from '@playwright/test';
import * as process from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import('dotenv')

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Configure projects for major browsers */
	projects: [
		{ name: 'setup-auth', testMatch: /.*\.setup\.ts/ },

		{
			dependencies: ['setup-auth'],
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
				viewport: { height: 1080, width: 1920 },
			},
		},
	],
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [process.env.CI ? ['github'] : ['list']] /* Retry on CI only */,
	retries: process.env.CI ? 1 : 0,
	testDir: './tests/e2e',
	/* Maximum timeout for each test in ms */
	timeout: 30 * 1000,
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: 'http://127.0.0.1:3000',

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',
	},

	/* Run your local test dev server before starting the tests */
	webServer: {
		command: 'pnpm start:test',
		reuseExistingServer: !process.env.CI,
		timeout: 30 * 1000,
		url: 'http://127.0.0.1:3000',
	},

	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
});
