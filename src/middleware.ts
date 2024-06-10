import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from '#/navigation';

export default createMiddleware({
	// Used when no locale matches
	defaultLocale: 'en',
	localePrefix,
	locales,
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(hu|en)/:path*'],
};
