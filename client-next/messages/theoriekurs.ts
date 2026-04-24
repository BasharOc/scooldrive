import { THEORIEKURS_AR } from "@/messages/ar/theoriekurs";
import { THEORIEKURS_DE } from "@/messages/de/theoriekurs";
import { THEORIEKURS_EN } from "@/messages/en/theoriekurs";
import type { Locale } from "@/types/i18n";

export type TheoriekursContent = {
  seo: {
    title: string;
    description: string;
  };
  nextCourse: {
    fallbackTitle: string;
    datedTitle: string;
    subtitle: string;
    buttonText: string;
  };
  header: {
    title: string;
    highlight: string;
    subtitle: string;
  };
  intro: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  };
  courseContents: {
    title: string;
    subtitle: string;
    items: readonly {
      icon: "road" | "warning" | "users" | "leaf" | "gear";
      title: string;
    }[];
  };
  advantages: {
    title: string;
    items: readonly {
      icon: "laptop" | "clock" | "users";
      title: string;
      description: string;
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: readonly {
      question: string;
      answer: string;
    }[];
  };
  price: {
    title: string;
    amount: string;
    description: string;
    details: readonly string[];
  };
  cta: string;
};

export const theoriekursByLocale: Record<Locale, TheoriekursContent> = {
  de: THEORIEKURS_DE,
  en: THEORIEKURS_EN,
  ar: THEORIEKURS_AR,
};
