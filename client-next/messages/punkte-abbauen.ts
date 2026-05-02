import { PUNKTE_ABBAUEN_AR } from "@/messages/ar/punkte-abbauen";
import { PUNKTE_ABBAUEN_DE } from "@/messages/de/punkte-abbauen";
import { PUNKTE_ABBAUEN_EN } from "@/messages/en/punkte-abbauen";
import type { Locale } from "@/types/i18n";

export type PunkteAbbauenContent = {
  seo: {
    title: string;
    description: string;
  };
  header: {
    title: string;
    subtitle: string;
  };
  intro: {
    title: string;
    description: string;
    whenTitle: string;
    whenText: string;
    imageSrc: string;
    imageAlt: string;
  };
  violations: {
    title: string;
    subtitle: string;
    aViolations: {
      title: string;
      subtitle: string;
      examples: readonly string[];
    };
    bViolations: {
      title: string;
      subtitle: string;
      examples: readonly string[];
    };
  };
  structure: {
    title: string;
    subtitle: string;
    cards: readonly {
      icon: "graduation-cap" | "route" | "users" | "stopwatch";
      title: string;
      description: string;
      meta?: string;
      badge?: string;
    }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: readonly {
      title: string;
      description: string;
      details: string;
      icon: "user-plus" | "book" | "car" | "graduation-cap" | "trophy";
    }[];
  };
  topics: {
    title: string;
    subtitle: string;
    items: readonly {
      icon: "shield" | "warning" | "road" | "eye";
      title: string;
      description: string;
    }[];
  };
  advantages: {
    title: string;
    subtitle: string;
    items: readonly {
      title: string;
      description: string;
    }[];
  };
  requirements: {
    title: string;
    subtitle: string;
    items: readonly string[];
    warningTitle: string;
    warningText: string;
  };
  pricing: {
    title: string;
    includedTitle: string;
    services: readonly string[];
    packageTitle: string;
    price: string;
    packageDescription: string;
    extras: readonly string[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: readonly {
      question: string;
      answer: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    whatsappButton: string;
  };
};

export const punkteAbbauenByLocale: Record<Locale, PunkteAbbauenContent> = {
  de: PUNKTE_ABBAUEN_DE,
  en: PUNKTE_ABBAUEN_EN,
  ar: PUNKTE_ABBAUEN_AR,
};
