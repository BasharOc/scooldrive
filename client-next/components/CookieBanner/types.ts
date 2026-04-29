import type { Locale } from "@/types/i18n";

export type CookieConsentSettings = {
  version: number;
  timestamp: string;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type CookieBannerContent = {
  title: string;
  description: string;
  detailsDescription: string;
  footer: string;
  privacyLink: string;
  buttons: {
    acceptAll: string;
    onlyNecessary: string;
    settings: string;
    saveSettings: string;
    backToSimple: string;
  };
  cookies: {
    necessary: {
      title: string;
      badge: string;
      description: string;
      examples: string;
    };
    analytics: {
      title: string;
      description: string;
      examples: string;
    };
    marketing: {
      title: string;
      description: string;
      examples: string;
    };
  };
};

export type CookieBannerDictionary = Record<Locale, CookieBannerContent>;
