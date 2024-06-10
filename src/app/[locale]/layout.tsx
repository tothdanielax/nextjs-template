import '#/tailwind.css';
import { ColorSchemeScript } from '@mantine/core';
import React, { type ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { IntlErrorCode, NextIntlClientProvider } from 'next-intl';
import { ClientLayout } from '#/app/[locale]/_components/ClientLayout';
import type { Metadata } from 'next';

/**
 * Props for the {@link AppLayout} component.
 */
type AppLayoutProps = {
	/**
	 * The children of the component.
	 */
	children: ReactNode;
	params: { locale: string };
};

export const metadata: Metadata = {
	title: {
		template: '%s - Example',
		default: 'Page',
	},
};

export function onError(error) {
	if (error.code === IntlErrorCode.MISSING_MESSAGE) {
		// Missing translations are expected and should only log an error
		console.error(error);
	} else {
		// Other errors indicate a bug in the app and should be reported
		// reportToErrorTracking(error);
	}
}

export function getMessageFallback({ namespace, key, error }) {
	const path = [namespace, key].filter((part) => part != null).join('.');

	if (error.code === IntlErrorCode.MISSING_MESSAGE) {
		return path + ' is not yet translated';
	} else {
		return 'Dear developer, please fix this message: ' + path;
	}
}

/**
 * The root layout for the app. This is where the page transitions are handled.
 * @returns The root layout.
 */
export default async function AppLayout({ children, params }: AppLayoutProps) {
	const messages = await getMessages();
	const { locale } = params;

	return (
		<html lang={locale}>
			<head>
				<ColorSchemeScript defaultColorScheme="auto" />
			</head>
			<body>
				<NextIntlClientProvider
					messages={messages}
					locale={locale}
					//onError={onError}
					//getMessageFallback={getMessageFallback}
				>
					<ClientLayout params={params}>{children}</ClientLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
