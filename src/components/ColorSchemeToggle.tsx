import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, type MantineColorScheme, Tooltip, useMantineColorScheme } from '@mantine/core';
import { type ReactNode, useState } from 'react';
import { useTranslations } from 'next-intl';

const icons: Record<MantineColorScheme, ReactNode> = {
	light: <IconSun />,
	dark: <IconMoon />,
	auto: <IconDeviceDesktop />,
};

/**
 * A toggle that allows the user to change the color scheme.
 */
export function ColorSchemeToggle() {
	const t = useTranslations('ColorSchema');
	const { setColorScheme } = useMantineColorScheme();

	// default is 'auto', so next must be either 'light' or 'dark'
	const [nextColorScheme, setCurrentColorScheme] = useState<MantineColorScheme>('light');

	const getNextColorScheme = () => {
		switch (nextColorScheme) {
			case 'light': {
				return 'dark';
			}
			case 'dark': {
				return 'auto';
			}
			case 'auto': {
				return 'light';
			}
			default: {
				return 'auto';
			}
		}
	};
	const handleToggle = () => {
		setColorScheme(nextColorScheme);
		setCurrentColorScheme(getNextColorScheme());
	};

	return (
		<Tooltip
			label={t('toggle-color-scheme', { schema: t('schema', { schema: nextColorScheme }) })}
			position="bottom"
			withArrow
		>
			<ActionIcon
				onClick={handleToggle}
				variant="default"
				size="xl"
				aria-label="color schema toggle"
			>
				{icons[nextColorScheme]}
			</ActionIcon>
		</Tooltip>
	);
}
