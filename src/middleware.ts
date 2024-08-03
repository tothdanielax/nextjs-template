import createMiddleware from "next-intl/middleware";
import {defaultLocale, localePrefix, locales} from "@/i18n";

/**
 * Middleware that provides internationalization support for Next.js.
 */
export default createMiddleware({
	defaultLocale,
	locales,
	localePrefix,
});

/**
 * The matcher configuration is used to define which paths should be handled by the middleware.
 * 
 * In this case, we want to handle all paths except for the ones starting with:
 * - api (API routes)
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico (favicon file)
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/middleware#matcher
  */
export const config = {
	matcher: [
		 '/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
}