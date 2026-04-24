import type { Locale } from "@/types/i18n";

export const LANGUAGE_OPTIONS = [
  { locale: "de" as Locale, code: "DE", name: "Deutsch", flag: "🇩🇪", href: "/de" },
  { locale: "en" as Locale, code: "EN", name: "English", flag: "🇬🇧", href: "/en" },
  { locale: "ar" as Locale, code: "AR", name: "العربية", flag: "🇸🇦", href: "/ar" },
] as const;
