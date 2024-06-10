'use client';

import React, { type ReactNode } from 'react';
import { AppShell, createTheme, MantineProvider } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '#components/Navbar/Navbar';

/**
 * Props for {@link ClientLayout}
 */
type ClientLayoutProps = {
	children: ReactNode;
	params: { locale: string };
};

/**
 * Theme for MantineProvider
 */
export const theme = createTheme({
	fontFamily: 'serif',
});

export function ClientLayout({ children }: ClientLayoutProps) {
	return (
		<AnimatePresence mode="wait" initial={false}>
			<MantineProvider defaultColorScheme="auto" theme={theme}>
				<NavigationProgress className="absolute top-0" color="green" size={5} />
				<AppShell header={{ height: 60 }}>
					<AppShell.Header className="opacity-85 backdrop-blur-lg backdrop-saturate-200">
						<Navbar />
					</AppShell.Header>
					<AppShell.Main>{children}</AppShell.Main>
				</AppShell>
			</MantineProvider>
		</AnimatePresence>
	);
}
