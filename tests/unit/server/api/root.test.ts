import { appRouter } from '#/server/api/root';
import { createTRPCClient } from '@trpc/client';
import { httpLink } from '@trpc/client/links/httpLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { describe, expect, test } from 'vitest';

describe('appRouter', () => {
	test('should have the correct routers', () => {
		expect(appRouter).toHaveProperty('general');
		expect(appRouter).toHaveProperty('user');
	});

	test('should be able to create a client', () => {
		const client = createTRPCClient({
			links: [
				loggerLink(),
				httpLink({
					url: 'http://localhost:3000/api/trpc',
				}),
			],
			// @ts-expect-error - appRouter is not a valid router
			router: appRouter,
		});

		expect(client).toBeDefined();
	});
});
