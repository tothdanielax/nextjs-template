import { NavigationLink } from '#components/NavigationLink';
import React from 'react';
import { useTranslations } from 'next-intl';

/**
 * The links that apper in the navbar and can be clicked to navigate to different pages.
 */
export function NavLinks() {
	const t = useTranslations('Menu');

	return (
		<>
			<NavigationLink href="/" replace>
				{t('index')}
			</NavigationLink>
			<NavigationLink href="/about" replace>
				{t('about')}
			</NavigationLink>
		</>
	);
}
