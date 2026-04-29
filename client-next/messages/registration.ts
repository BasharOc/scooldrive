import { REGISTRATION_AR } from "@/messages/ar/registration";
import { REGISTRATION_DE } from "@/messages/de/registration";
import { REGISTRATION_EN } from "@/messages/en/registration";
import type { RegistrationLocaleContent } from "@/components/Registration/types";
import type { Locale } from "@/types/i18n";

export const registrationByLocale: Record<Locale, RegistrationLocaleContent> = {
  de: REGISTRATION_DE,
  en: REGISTRATION_EN,
  ar: REGISTRATION_AR,
};
