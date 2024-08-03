import { getTranslations } from 'next-intl/server';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { DarkModeDropdown } from '@/components/inputs/select/dark-mode/DarkModeDropdown';

/**
 * A dark mode toggle wrapper with a tooltip.
 */
export async function DarkMode() {
	const t = await getTranslations('components.inputs.select.DarkMode');

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<DarkModeDropdown />
			</TooltipTrigger>

			<TooltipContent>
				<p>{t('select-color-schema')}</p>
			</TooltipContent>
		</Tooltip>
	);
}
