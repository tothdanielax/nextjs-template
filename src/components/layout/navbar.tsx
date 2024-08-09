import { NavigationMenu } from '@/components/ui/navigation-menu';
import { LanguageSelect } from '@/components/inputs/select/language-select/LanguageSelect';
import dynamic from 'next/dynamic';

const NavItems = dynamic(() => import('@/components/layout/navitems').then((mod) => mod.NavItems));
const DarkToggle = dynamic(() => import('@/components/inputs/select/dark-mode/DarkMode').then((mod) => mod.DarkMode));

/**
 * Main navigation bar shown on all pages.
 */
export async function Navbar() {
  return (
    <NavigationMenu className="min-w-screen sticky flex max-w-full items-center justify-between gap-2 bg-background p-2">
      <div className="basis-1/3" />
      <NavItems />
      <div className="flex basis-1/3 items-end justify-end gap-1">
        <DarkToggle />
        <LanguageSelect />
      </div>
    </NavigationMenu>
  );
}
