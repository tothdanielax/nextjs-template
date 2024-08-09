'use client';

import * as React from 'react';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslations } from 'next-intl';

/**
 * Props for {@link DarkModeDropdown}.
 */
type DarkModeToggleProps = ComponentPropsWithoutRef<'div'>;

/**
 * A dropdown menu for toggling between light, dark, and system themes. Rendered on client side.
 */
export const DarkModeDropdown = forwardRef<ComponentRef<'div'>, DarkModeToggleProps>((props, ref) => {
  const { setTheme } = useTheme();
  const t = useTranslations('components.inputs.select.DarkMode');

  return (
    <div ref={ref} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{t('select-color-schema')}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme('light')}>{t('light')}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>{t('dark')}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>{t('auto')}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
});

DarkModeDropdown.displayName = 'DarkModeToggle';
