export const SUPPORTED_LOCALES = ["de", "en", "ar"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const isLocale = (value: string): value is Locale =>
  SUPPORTED_LOCALES.includes(value as Locale);
