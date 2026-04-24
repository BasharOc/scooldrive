import type { AutoAnhaengerContent } from "@/components/AutoAnhaenger/types";
import { AUTO_ANHAENGER_AR } from "@/messages/ar/auto-anhaenger";
import { AUTO_ANHAENGER_DE } from "@/messages/de/auto-anhaenger";
import { AUTO_ANHAENGER_EN } from "@/messages/en/auto-anhaenger";
import type { Locale } from "@/types/i18n";

export const autoAnhaengerByLocale: Record<Locale, AutoAnhaengerContent> = {
  de: AUTO_ANHAENGER_DE,
  en: AUTO_ANHAENGER_EN,
  ar: AUTO_ANHAENGER_AR,
};
