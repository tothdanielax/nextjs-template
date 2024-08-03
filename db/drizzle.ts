import 'dotenv/config';

import {sql} from '@vercel/postgres';
import postgres from 'postgres';
import {drizzle as VercelDrizzle, type VercelPgDatabase} from 'drizzle-orm/vercel-postgres';
import {drizzle as LocalDrizzle, type PostgresJsDatabase} from 'drizzle-orm/postgres-js';
import {env} from "@/env";

/**
 * Get the database connection based on the environment.
 * @returns Vercel database connection if in production, otherwise local database connection for Docker.
 */
const getDb = () => {
	/**
	 * The client of the database connection. Only set in development (Docker) environment.
	 */
	let client: ReturnType<typeof postgres> | undefined;
	
	/**
	 * The database connection to Docker or Vercel Postgres.
	 */
	let db: VercelPgDatabase | PostgresJsDatabase;

	if (process.env.NODE_ENV === 'production') {
		db = VercelDrizzle(sql, { logger: true }) as VercelPgDatabase;
	} else {
		client = postgres({
			user: env.POSTGRES_USER,
			password: env.POSTGRES_PASSWORD,
			host: env.DB_HOST,
			port: env.DB_PORT,
		});

		db = LocalDrizzle(client, { logger: true }) as PostgresJsDatabase;
	}
	
	return {
		client,
		db,
	};
};

export const { db, client } = getDb();
