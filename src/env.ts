import {createEnv} from '@t3-oss/env-nextjs';
import {vercel} from '@t3-oss/env-nextjs/presets';
import {z} from 'zod';
import {isBrowser} from './utils/isBrowser'; // Do not use TS path aliases here

/**
 * Helper function to validate a string and transform it to a boolean.
 * @see https://env.t3.gg/docs/recipes#booleans
 */
const onlyBoolean = (parameters: Partial<{
	errorMap: z.ZodErrorMap;
	invalid_type_error: string;
	required_error: string;
	message: string;
	description: string;
	coerce: true;
}>) => z
	.string(parameters)
	// only allow "true" or "false"
	.refine((s) => s === 'true' || s === 'false')
	// transform to boolean
	.transform((s) => s === 'true');

/**
 * This file is used to validate and expose environment variables to the app. It uses the `zod` validation library.
 * @see https://env.t3.gg/docs/nextjs
 */
export const env = createEnv({
	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid environment vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {},

	/**
	 * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
	 * `SOME_VAR=''` will throw an error.
	 */
	emptyStringAsUndefined: true,

	/**
	 * Extend the Vercel preset. Not necessary if you're not using Vercel.
	 * @see https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
	 */
	extends: [vercel()],

	/**
	 * Tell the library when we're in a server context.
	 */
	isServer: !isBrowser(),

	/**
	 * You can't destruct `process.environment` as a regular object in the Next.js edge runtimes:
	 * (e.g. middlewares) or client-side so we need to destruct manually.
	 */
	runtimeEnv: {
		// General
		ANALYZE: process.env.ANALYZE,
		
		// Database
		DB_HOST: process.env.DB_HOST,
		DB_PORT: process.env.DB_PORT,
		POSTGRES_USER: process.env.POSTGRES_USER,
		POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
		MIGRATIONS_DIR: process.env.MIGRATIONS_DIR,
	},

	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid environment vars.
	 */
	server: {
		// General
		ANALYZE: onlyBoolean({
			description: 'Enable bundle analyzer for NextJS. See: https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer'
		}),
		
		
		// Database
		DB_HOST: z.string({
			description: 'The database host. IP or domain name.',
		}),
		DB_PORT: z.number({
			description: 'The database port. PostgreSQL default is 5432.',
			coerce: true,
		}),
		POSTGRES_USER: z.string({
			description: 'The database user.',
		}),
		POSTGRES_PASSWORD: z.string({
			description: 'The database password.',
		}),
		MIGRATIONS_DIR: z.string({
			description: 'The directory where the migrations are stored.',
		}),
	},

	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip environment validation. This is especially
	 * useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
