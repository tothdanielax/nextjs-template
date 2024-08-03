// https://github.com/amannn/next-intl/discussions/771#discussioncomment-9587798
import {useMessages, useTranslations} from 'next-intl';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getTranslations = async (ns: string) => useTranslations(ns);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getMessages = async () => useMessages();

export const getRequestConfig = async () => {
    const messages = (await import('@messages/en.json')).default;
    return { messages };
};
