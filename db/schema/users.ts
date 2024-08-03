import {pgTable, serial, text} from 'drizzle-orm/pg-core';
import {deletedAt, timestamps} from '@db/schema/common';

/**
 * Users table schema.
 */
export const users = pgTable(
	'users',
	{
		id: serial('id').primaryKey(),
		name: text('name').notNull(),
		role: text('role', { enum: ['admin', 'user'] }).notNull(),
		deletedAt,
		...timestamps
	}
);

export type UserInsert = typeof users.$inferInsert;
export type UserSelect = typeof users.$inferSelect;