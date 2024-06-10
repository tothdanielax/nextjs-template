// https://github.com/amannn/next-intl/discussions/771#discussioncomment-9587798
import { useTranslations, useMessages } from 'next-intl';

export const getTranslations = async (ns: string) => {
	return useTranslations(ns);
};

export const getMessages = async () => {
	return useMessages();
};
