import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'hu'] as const;
export const localePrefix = 'always'; // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
	localePrefix,
	locales,
});
