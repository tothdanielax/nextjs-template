'use client';

import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import type { Messages } from 'global';

/**
 * The links that will be displayed in the navbar.
 */
const links = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/users',
    label: 'users',
  },
] satisfies { href: string; label: keyof Messages['components']['layout']['Navbar'] }[];

/**
 * Render for the navigation items that takes care of the active state.
 */
export function NavItems() {
  const t = useTranslations('components.layout.Navbar');
  const path = usePathname();

  const isActive = (href: string) => path === href;

  return (
    <ul data-orientation="horizontal" className="group flex basis-1/3 list-none justify-center space-x-1">
      {links.map(({ href, label }) => (
        <NavigationMenuItem key={href}>
          <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive(href) && 'bg-accent'}`}>
              {t(label)}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </ul>
  );
}
