import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'app.index.Page' });

  return {
    title: t('title'),
  };
}

/**
 * Home/Landing page of the app.
 */
export default async function IndexPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'app.index.Page' });

  return <h1> {t('title')}</h1>;
}
