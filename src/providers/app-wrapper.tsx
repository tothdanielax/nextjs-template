import React, {type ComponentPropsWithoutRef} from "react";
import {NextIntlClientProvider} from "next-intl";
import en from "@messages/en.json";
import {ThemeProvider} from "@/providers/theme-provider";
import {TooltipProvider} from "@/components/ui/tooltip";

type AppWrapperProps = ComponentPropsWithoutRef<typeof NextIntlClientProvider>

/**
 * A wrapper around the whole application/providers. <br>
 * Served as a separate component because this way it can also be utilized in Storybook.
 */
export function AppWrapper({ children, locale = 'en', messages = en }: AppWrapperProps) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider>
            <TooltipProvider>
                {children}
            </TooltipProvider>
        </ThemeProvider>
    </NextIntlClientProvider>
    )
}