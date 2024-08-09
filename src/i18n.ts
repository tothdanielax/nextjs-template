import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import type { LocalePrefix, Pathnames } from 'next-intl/routing';

export const defaultLocale = 'en';
export const locales = ['en', 'hu'] as const;

export type Locale = (typeof locales)[number];

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
};

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  const messages = (await (locale === 'en'
    ? import('../messages/en.json') // When using Turbopack, this will enable HMR for `en`
    : import(`../messages/${locale}.json`))) as { default: Record<string, string> };

  return {
    messages: messages.default,
  };
});
