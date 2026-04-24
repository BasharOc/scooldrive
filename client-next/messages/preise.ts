import { PREISE_AR } from "@/messages/ar/preise";
import { PREISE_DE } from "@/messages/de/preise";
import { PREISE_EN } from "@/messages/en/preise";
import type { Locale } from "@/types/i18n";

export type PreiseContent = {
  seo: {
    title: string;
    description: string;
  };
  header: {
    title: string;
    highlight: string;
    subtitle: string;
  };
  licenses: {
    pkw: string;
    motorrad: string;
    anhanger: string;
    b96: string;
    b196: string;
  };
  prerequisite: string;
  sections: {
    basePrices: string;
    baseFee: string;
    learningApp: string;
    practiceLesson: string;
    specialDrives: string;
    ruralRoad: string;
    highway: string;
    nightDrive: string;
    theoryExam: string;
    practicalExam: string;
    schoolTotal: string;
    extraCosts: string;
    extraCostsTotal: string;
    totalCosts: string;
  };
  calculations: {
    lessons: string;
    total: string;
  };
  extraCosts: readonly {
    key: "fuehrerscheinantrag" | "sehtest" | "ersteHilfeKurs" | "passbild";
    name: string;
    fallbackPrice: number;
  }[];
  warning: {
    title: string;
    points: readonly {
      label: string;
      text: string;
    }[];
  };
  finalSection: {
    description: string;
    cta: string;
  };
};

export const preiseByLocale: Record<Locale, PreiseContent> = {
  de: PREISE_DE,
  en: PREISE_EN,
  ar: PREISE_AR,
};
