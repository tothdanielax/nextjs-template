import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';

export default async function RootNotFound() {
  const t = await getTranslations('app.index.NotFoundPage');

  return (
    <div className="flex h-full grow flex-col items-center justify-center gap-5">
      <h1 className="text-xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>
      <Button asChild>
        <Link href="/public">{t('back-to-homepage')}</Link>
      </Button>
    </div>
  );
}
