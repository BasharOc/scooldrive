import type { WhatsAppButtonContent } from "@/components/WhatsAppButton/types";
import { WHATSAPP_AR } from "@/messages/ar/whatsapp";
import { WHATSAPP_DE } from "@/messages/de/whatsapp";
import { WHATSAPP_EN } from "@/messages/en/whatsapp";
import type { Locale } from "@/types/i18n";

export const whatsappByLocale: Record<Locale, WhatsAppButtonContent> = {
  de: WHATSAPP_DE,
  en: WHATSAPP_EN,
  ar: WHATSAPP_AR,
};
