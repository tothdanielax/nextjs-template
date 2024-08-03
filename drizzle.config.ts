import {defineConfig} from 'drizzle-kit';
import {env} from '@/env';

export default defineConfig({
	schema: './db/schema/**/*.ts',
	out: env.MIGRATIONS_DIR,
	dialect: 'postgresql',
	dbCredentials: {
		host: env.DB_HOST,
		port: env.DB_PORT,
		user: env.POSTGRES_USER,
		password: env.POSTGRES_PASSWORD,
		database: env.POSTGRES_USER,
	},
});
