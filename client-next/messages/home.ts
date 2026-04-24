import { HOME_AR } from "@/messages/ar/home";
import { HOME_DE } from "@/messages/de/home";
import { HOME_EN } from "@/messages/en/home";
import type { HomeContent } from "@/components/Homepage/types";
import type { Locale } from "@/types/i18n";

export const homeByLocale: Record<Locale, HomeContent> = {
  de: HOME_DE,
  en: HOME_EN,
  ar: HOME_AR,
};
