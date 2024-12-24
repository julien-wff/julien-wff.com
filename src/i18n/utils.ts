import type { ImageMetadata } from 'astro';
import frFlag from '$assets/flags/fr.svg';
import frFlagRaw from '$assets/flags/fr.svg?raw';
import gbFlag from '$assets/flags/gb.svg';
import gbFlagRaw from '$assets/flags/gb.svg?raw';

export interface LanguageInfo {
    displayShort: string;
    icon: ImageMetadata;
    iconRaw: string;
}

export const languagesDisplay = {
    en: {
        displayShort: 'EN',
        icon: gbFlag,
        iconRaw: gbFlagRaw,
    },
    fr: {
        displayShort: 'FR',
        icon: frFlag,
        iconRaw: frFlagRaw,
    },
} satisfies { [key: string]: LanguageInfo };

export type Language = keyof typeof languagesDisplay;

export type Translations = {
    [key in Language]: {
        [key: string]: string;
    };
};

export function useTranslations<T extends Translations>(translations: T, lang: keyof T) {
    return function t(key: keyof T[typeof lang]) {
        return translations[lang][key] || key;
    };
}
