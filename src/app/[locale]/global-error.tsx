'use client';

import { useTranslations } from 'next-intl';

export default function GlobalError({ reset, locale }: { reset: () => void; locale: string }) {
  const t = useTranslations('app.index.Error');

  return (
    <html lang={locale}>
      <body>
        <h2>{t('something-went-wrong')}</h2>
        <button type="button" onClick={() => reset()}>
          {t('retry')}
        </button>
      </body>
    </html>
  );
}
