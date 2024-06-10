import { useTranslations } from 'next-intl';
import { Hero } from '#components/Hero';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
	const t = await getTranslations({ locale, namespace: 'Index' });

	return {
		title: t('title'),
	};
}

/**
 * Home/Landing page of the app.
 */
export default function IndexPage() {
	const t = useTranslations('Index');

	return (
		<div>
			<Hero
				title={t('hero.title')}
				description={t('hero.description')}
				image={{
					src: 'https://source.unsplash.com/featured/?nature',
					alt: t('hero.image.alt'),
				}}
			/>
			{t('title')}
		</div>
	);
}
