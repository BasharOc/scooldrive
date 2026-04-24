import { INTENSIVKURSE_AR } from "@/messages/ar/intensivkurse";
import { INTENSIVKURSE_DE } from "@/messages/de/intensivkurse";
import { INTENSIVKURSE_EN } from "@/messages/en/intensivkurse";
import type { Locale } from "@/types/i18n";

export type IntensivkurseContent = {
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
    suitableTitle: string;
    suitableText: string;
    imageSrc: string;
    imageAlt: string;
  };
  advantages: {
    title: string;
    subtitle: string;
    items: readonly {
      icon: "bolt" | "bulb" | "handshake" | "calendar";
      title: string;
      description: string;
      colorClass: string;
    }[];
  };
  process: {
    title: string;
    subtitle: string;
    start: string;
    steps: readonly {
      title: string;
      description: string;
      details: string;
      icon: "user-plus" | "book" | "car" | "graduation-cap" | "trophy";
    }[];
  };
  requirements: {
    title: string;
    subtitle: string;
    items: readonly string[];
    noteTitle: string;
    noteText: string;
  };
  pricing: {
    title: string;
    includedTitle: string;
    services: readonly string[];
    packageTitle: string;
    fallbackPrice: string;
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
    button: string;
    subtitle: string;
  };
};

export const intensivkurseByLocale: Record<Locale, IntensivkurseContent> = {
  de: INTENSIVKURSE_DE,
  en: INTENSIVKURSE_EN,
  ar: INTENSIVKURSE_AR,
};
