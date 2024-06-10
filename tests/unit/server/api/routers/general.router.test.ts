import { generalRouter } from '#/server/api/routers/general.router';
import { createTRPCClient } from '@trpc/client';
import { httpLink } from '@trpc/client/links/httpLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { describe, expect, test } from 'vitest';

describe('generalRouter', () => {
	test('should have the correct procedures', () => {
		expect(generalRouter).toHaveProperty('healthCheck');
	});

	test('should be able to create a client', () => {
		const client = createTRPCClient({
			links: [
				loggerLink(),
				httpLink({
					url: 'http://localhost:3000/api/trpc',
				}),
			],
			// @ts-expect-error - generalRouter is not a valid router
			router: generalRouter,
		});

		expect(client).toBeDefined();
	});
});
