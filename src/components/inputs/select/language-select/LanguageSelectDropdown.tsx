'use client';

import { usePathname, useRouter } from '@/navigation';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef, useTransition } from 'react';
import { IconLanguage } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/i18n';

/**
 * Props for {@link LanguageSelectDropdown}.
 */
type LanguageToggleButtonProps = ComponentPropsWithoutRef<'div'>;

/**
 * A dropdown button that allows the user to switch between languages.
 */
export const LanguageSelectDropdown = forwardRef<ComponentRef<'div'>, LanguageToggleButtonProps>((props, ref) => {
  const t = useTranslations('components.inputs.select.Language');

  const router = useRouter();
  const pathname = usePathname();
  const [_pendingTransition, startTransition] = useTransition();

  const handleToggle = (locale: Locale) => {
    startTransition(() => {
      router.push(pathname, { locale });
    });
  };

  return (
    <div ref={ref} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <IconLanguage />
            <span className="sr-only">{t('select-language')}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleToggle('en')}>{t('en')}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleToggle('hu')}>{t('hu')}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
});

LanguageSelectDropdown.displayName = 'LanguageToggleButton';
