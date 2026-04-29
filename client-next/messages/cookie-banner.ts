import type { CookieBannerDictionary } from "@/components/CookieBanner/types";
import { COOKIE_BANNER_AR } from "@/messages/ar/cookie-banner";
import { COOKIE_BANNER_DE } from "@/messages/de/cookie-banner";
import { COOKIE_BANNER_EN } from "@/messages/en/cookie-banner";

export const cookieBannerByLocale: CookieBannerDictionary = {
  de: COOKIE_BANNER_DE,
  en: COOKIE_BANNER_EN,
  ar: COOKIE_BANNER_AR,
};
