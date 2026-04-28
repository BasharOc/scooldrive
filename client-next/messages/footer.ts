import { FOOTER_AR } from "@/messages/ar/footer";
import { FOOTER_DE } from "@/messages/de/footer";
import { FOOTER_EN } from "@/messages/en/footer";
import type { FooterContent } from "@/components/Footer/types";
import type { Locale } from "@/types/i18n";

export const footerByLocale: Record<Locale, FooterContent> = {
  de: FOOTER_DE,
  en: FOOTER_EN,
  ar: FOOTER_AR,
};
