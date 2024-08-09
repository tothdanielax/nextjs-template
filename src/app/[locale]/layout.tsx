import '@/styles/tailwind.css';

import React, { type ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/utils/utils';
import { Navbar } from '@/components/layout/navbar';
import { AppWrapper } from '@/providers/app-wrapper';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

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
    default: 'Home - Example',
  },
} satisfies Metadata;

const locales = ['en', 'de'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * The root layout for the app. This is where the page transitions are handled.
 * @returns The root layout.
 */
export default async function RootLayout({ children, params }: AppLayoutProps) {
  const { locale } = params;

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={cn(
          'h-screen min-h-screen flex-col overflow-x-hidden scroll-smooth bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <AppWrapper locale={locale} messages={messages}>
          <Navbar />
          <main className="h-full">{children}</main>
        </AppWrapper>
      </body>
    </html>
  );
}
