import type { MotorradContent } from "@/components/Motorrad/types";
import { MOTORRAD_FUEHRERSCHEIN_AR } from "@/messages/ar/motorrad-fuehrerschein";
import { MOTORRAD_FUEHRERSCHEIN_DE } from "@/messages/de/motorrad-fuehrerschein";
import { MOTORRAD_FUEHRERSCHEIN_EN } from "@/messages/en/motorrad-fuehrerschein";
import type { Locale } from "@/types/i18n";

export const motorradFuehrerscheinByLocale: Record<Locale, MotorradContent> = {
  de: MOTORRAD_FUEHRERSCHEIN_DE,
  en: MOTORRAD_FUEHRERSCHEIN_EN,
  ar: MOTORRAD_FUEHRERSCHEIN_AR,
};
