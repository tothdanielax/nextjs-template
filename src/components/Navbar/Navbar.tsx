import { Group, Space, Title } from '@mantine/core';
import { Link } from '#/navigation';
import { IconBrandMantine } from '@tabler/icons-react';
import { NavigationLink } from '#components/NavigationLink';
import { ColorSchemeToggle } from '#components/ColorSchemeToggle';
import { LanguageSelect } from '#components/LanguageSelect';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Brand } from '#components/Navbar/Brand';
import { NavLinks } from '#components/Navbar/NavLinks';

/**
 * The navbar that appears at the top of each page.
 */
export function Navbar() {
	const t = useTranslations('Menu');

	return (
		<nav role="navigation" className="w-full">
			<Group h="100%" justify="space-between" px="md">
				<Brand />

				<Group>
					<NavLinks />
					<Space />
					<ColorSchemeToggle />
					<LanguageSelect />
				</Group>
			</Group>
		</nav>
	);
}
