'use client';

// Error components must be Client Components

import {useTranslations} from 'next-intl';

export default function RootError({
	reset,
}: {
	reset: () => void;
}) {
	const t = useTranslations('app.index.Error');

	return (
		<div>
			<h2>{t('something-went-wrong')}</h2>
			<button
				type='button'
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				{t('retry')}
			</button>
		</div>
	);
}
