import { client, db } from './drizzle';
import { users } from './schema/users';
import { usersSeed } from './seed/users';

await db.insert(users).values(usersSeed);

// Local environment only
if (client) await client.end();
