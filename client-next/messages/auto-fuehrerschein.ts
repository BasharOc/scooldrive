import { AUTO_FUEHRERSCHEIN_AR } from "@/messages/ar/auto-fuehrerschein";
import { AUTO_FUEHRERSCHEIN_DE } from "@/messages/de/auto-fuehrerschein";
import { AUTO_FUEHRERSCHEIN_EN } from "@/messages/en/auto-fuehrerschein";
import type { AutoFuehrerscheinContent } from "@/components/AutoFuehrerschein/types";
import type { Locale } from "@/types/i18n";

export const autoFuehrerscheinByLocale: Record<Locale, AutoFuehrerscheinContent> = {
  de: AUTO_FUEHRERSCHEIN_DE,
  en: AUTO_FUEHRERSCHEIN_EN,
  ar: AUTO_FUEHRERSCHEIN_AR,
};
