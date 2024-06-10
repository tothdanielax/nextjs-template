import { Select, type SelectProps, Tooltip } from '@mantine/core';
import { useTranslations } from 'next-intl';
import React, { useTransition } from 'react';
import { locales, usePathname, useRouter } from '#/navigation';
import { useParams } from 'next/navigation';

/**
 * A select input that allows the user to select a language.
 */
export function LanguageSelect() {
	const t = useTranslations('Language');

	const router = useRouter();
	const pathname = usePathname();
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
	const { locale: defaultLocale } = useParams() as { locale: string };
	const [pendingTransition, startTransition] = useTransition();

	const handleChange: SelectProps['onChange'] = (value) => {
		if (!value) return;

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
		startTransition(() => {
			router.push(pathname, { locale: value });
		});
	};

	return (
		<Tooltip label={t('select-language')} position="bottom" withArrow>
			<Select
				aria-label={t('select-language')}
				data-testid="language-select"
				value={defaultLocale}
				onChange={handleChange}
				data={locales.map((locale) => ({
					value: locale,
					label: t(locale),
				}))}
			/>
		</Tooltip>
	);
}
