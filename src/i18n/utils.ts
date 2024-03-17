export function useTranslations<T extends Translations>(translations: T, lang: keyof T) {
    return function t(key: keyof T[typeof lang]) {
        return translations[lang][key] || key;
    };
}

export const languagesDisplay = {
    en: '🇬🇧 EN',
    fr: '🇫🇷 FR',
};

export type Language = keyof typeof languagesDisplay;

export const defaultLanguage: Language = 'fr';

export type Translations = {
    [key in Language]: {
        [key: string]: string;
    };
};
