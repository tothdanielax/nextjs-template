import 'dotenv/config';

import {migrate as LocalMigrate} from 'drizzle-orm/postgres-js/migrator';
import {migrate as VercelMigrate} from 'drizzle-orm/vercel-postgres/migrator';
import type {VercelPgDatabase} from 'drizzle-orm/vercel-postgres';
import type {PostgresJsDatabase} from 'drizzle-orm/postgres-js';
import {client, db} from "@db/drizzle";
import {env} from "@/env";

const migrationConfig = {
	migrationsFolder: env.MIGRATIONS_DIR,
};


if (process.env.NODE_ENV === 'production') {
	await VercelMigrate(db as VercelPgDatabase, migrationConfig);
} else {
	await LocalMigrate(db as PostgresJsDatabase, migrationConfig);
	
	if(client) await client.end();
}
