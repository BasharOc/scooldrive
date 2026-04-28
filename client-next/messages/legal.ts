import { LEGAL_AR } from "@/messages/ar/legal";
import { LEGAL_DE } from "@/messages/de/legal";
import { LEGAL_EN } from "@/messages/en/legal";
import type { LegalContent } from "@/components/Footer/types";
import type { Locale } from "@/types/i18n";

export const legalByLocale: Record<Locale, LegalContent> = {
  de: LEGAL_DE,
  en: LEGAL_EN,
  ar: LEGAL_AR,
};
