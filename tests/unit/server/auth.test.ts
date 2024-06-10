import type { NextAuthOptions } from 'next-auth';

import { authOptions, getServerAuthSession } from '#server/auth';
import { describe, expect, expectTypeOf, test } from 'vitest';

describe('authOptions', () => {
	test('defined', () => expect(authOptions).toBeDefined());
	test('object', () => expect(typeof authOptions).toBe('object'));
	test('NextAuthOptions type', () => expectTypeOf(authOptions).toMatchTypeOf<NextAuthOptions>());
	test('have required properties', () => {
		expect(authOptions).toHaveProperty('providers');
		expect(authOptions).toHaveProperty('secret');
		expect(authOptions).toHaveProperty('session');
		expect(authOptions).toHaveProperty('pages');
		expect(authOptions).toHaveProperty('callbacks');
		expect(authOptions).toHaveProperty(['callbacks', 'jwt']);
		expect(authOptions).toHaveProperty(['callbacks', 'session']);
		expect(authOptions).toHaveProperty(['pages', 'signIn']);
	});
	test('sign in page is set', () => {
		expect(authOptions.pages!.signIn).toBe('/auth/signin');
	});
	test('secret is set', () => {
		expect(authOptions.secret).toBeDefined();
		expect(authOptions.secret).toBe(process.env.NEXTAUTH_SECRET);
	});
	test('session strategy is jwt', () => {
		expect(authOptions.session!.strategy).toBe('jwt');
	});
});

describe('getServerAuthSession', () => {
	test('defined', () => {
		expect(getServerAuthSession).toBeDefined();
	});
});
