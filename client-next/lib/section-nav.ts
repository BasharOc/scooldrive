import type { SectionNavContent } from "@/components/shared/SectionNav";
import type { Locale } from "@/types/i18n";

type SectionLabelKey =
  | "advantages"
  | "checklist"
  | "contents"
  | "dates"
  | "faq"
  | "facts"
  | "guarantees"
  | "info"
  | "intro"
  | "prices"
  | "process"
  | "requirements"
  | "structure"
  | "topics"
  | "violations";

type SectionNavInput = {
  id: string;
  label: SectionLabelKey;
};

const sectionNavCopy: Record<
  Locale,
  { ariaLabel: string; labels: Record<SectionLabelKey, string> }
> = {
  de: {
    ariaLabel: "Seitennavigation",
    labels: {
      advantages: "Vorteile",
      checklist: "Checkliste",
      contents: "Inhalte",
      dates: "Termine",
      faq: "FAQ",
      facts: "Fakten",
      guarantees: "Garantien",
      info: "Infos",
      intro: "Überblick",
      prices: "Preise",
      process: "Ablauf",
      requirements: "Voraussetzungen",
      structure: "Aufbau",
      topics: "Themen",
      violations: "Verstöße",
    },
  },
  en: {
    ariaLabel: "Page sections",
    labels: {
      advantages: "Benefits",
      checklist: "Checklist",
      contents: "Contents",
      dates: "Dates",
      faq: "FAQ",
      facts: "Facts",
      guarantees: "Guarantees",
      info: "Info",
      intro: "Overview",
      prices: "Prices",
      process: "Steps",
      requirements: "Requirements",
      structure: "Structure",
      topics: "Topics",
      violations: "Violations",
    },
  },
  ar: {
    ariaLabel: "أقسام الصفحة",
    labels: {
      advantages: "المزايا",
      checklist: "القائمة",
      contents: "المحتوى",
      dates: "المواعيد",
      faq: "الأسئلة",
      facts: "حقائق",
      guarantees: "الضمانات",
      info: "معلومات",
      intro: "نظرة عامة",
      prices: "الأسعار",
      process: "الخطوات",
      requirements: "المتطلبات",
      structure: "البنية",
      topics: "المواضيع",
      violations: "المخالفات",
    },
  },
};

export function createSectionNav(
  locale: Locale,
  sections: readonly SectionNavInput[]
): SectionNavContent {
  const copy = sectionNavCopy[locale];

  return {
    ariaLabel: copy.ariaLabel,
    items: sections.map((section) => ({
      id: section.id,
      label: copy.labels[section.label],
    })),
  };
}
