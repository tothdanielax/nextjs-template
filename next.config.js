// @ts-check
import createJiti from 'jiti';
import { fileURLToPath } from 'node:url';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti('./src/env.ts');

/**
 * Configuration for Next.js.
 * @type {import('next').NextConfig}
 */
const config = {
	/**
	 * If you are using `appDir` then you must comment the below `i18n` config out.
	 * @see https://github.com/vercel/next.js/issues/41980
	 */
	// i18n: {
	// 	defaultLocale: 'en',
	// 	locales: ['en'],
	// },

	/**
	 *  SSG (Static Site Generation) is used to generate static HTML files at build time.
	 *  @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
	 */
	//output: 'export',

	/**
	 * The `reactStrictMode` flag helps identify issues in React. It mounts the components twice in development mode.
	 */
	reactStrictMode: true,
};

export default withNextIntl(config);
