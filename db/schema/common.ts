import { timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

/**
 * Created and updated timestamps. Commonly used for all tables.
 */
export const timestamps = {
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
};

/**
 * Soft delete metadata. Used for soft delete functionality.
 */
export const deletedAt = timestamp('deleted_at');
