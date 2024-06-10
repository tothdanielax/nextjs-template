import { useTranslations } from 'next-intl';
import { Hero } from '#components/Hero';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
	const t = await getTranslations({ locale, namespace: 'About' });

	return {
		title: t('title'),
	};
}

/**
 * The about page where you can learn more about the app/company.
 * @returns The about page where you can learn more about the app/company.
 */
export default function AboutPage() {
	const t = useTranslations('About');

	return (
		<div>
			<Hero
				title={t('hero.title')}
				description={t('hero.description')}
				image={{
					alt: t('hero.image.alt'),
					src: 'https://source.unsplash.com/featured/?nature',
				}}
			/>
			<h1>{t('title')}</h1>
		</div>
	);
}
