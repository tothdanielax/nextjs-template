import { getTranslations } from 'next-intl/server';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { LanguageSelectDropdown } from '@/components/inputs/select/language-select/LanguageSelectDropdown';

/**
 * Language select wrapper that provides a tooltip.
 */
export async function LanguageSelect() {
	const t = await getTranslations('components.inputs.select.Language');

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<LanguageSelectDropdown />
			</TooltipTrigger>

			<TooltipContent>
				<p>{t('select-language')}</p>
			</TooltipContent>
		</Tooltip>
	);
}
