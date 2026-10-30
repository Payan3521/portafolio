export type Lang = 'es' | 'en';

export type Localized = { es: string; en: string };

export const languages: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export const defaultLang: Lang = 'es';

/** Devuelve el texto en el idioma pedido (o el string tal cual si no es Localized). */
export function t(lang: Lang, value: Localized | string): string {
  return typeof value === 'string' ? value : value[lang];
}

export function isLang(value: string | undefined): value is Lang {
  return value === 'es' || value === 'en';
}
