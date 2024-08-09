import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales, pathnames } from '@/i18n';

/**
 * Translation supported navigation hooks/helpers.
 */
export const { Link, getPathname, redirect, usePathname, useRouter, permanentRedirect } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
