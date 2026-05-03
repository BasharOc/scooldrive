import type { Metadata } from "next";
import {
  ChecklistSection,
  FactsSection,
  HeroSection,
  InformationSection,
  LicenseStepsSection,
} from "@/components/Motorrad";
import TrafficRulesSection from "@/components/Homepage/TrafficRulesSection";
import SectionNav from "@/components/shared/SectionNav";
import { generatePageMetadata } from "@/lib/metadata";
import { createSectionNav } from "@/lib/section-nav";
import { homeByLocale } from "@/messages/home";
import { motorradFuehrerscheinByLocale } from "@/messages/motorrad-fuehrerschein";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type MotorradFuehrerscheinPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: MotorradFuehrerscheinPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = motorradFuehrerscheinByLocale[locale];

  return generatePageMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
    path: "/motorrad-fuehrerschein",
  });
}

export default async function MotorradFuehrerscheinPage({
  params,
}: MotorradFuehrerscheinPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = motorradFuehrerscheinByLocale[locale];
  const homeContent = homeByLocale[locale];
  const sectionNav = createSectionNav(locale, [
    { id: "checkliste", label: "checklist" },
    { id: "fakten", label: "facts" },
    { id: "infos", label: "info" },
    { id: "ablauf", label: "process" },
    { id: "garantien", label: "guarantees" },
  ]);

  return (
    <>
      <HeroSection content={content.hero} locale={locale} />
      <SectionNav content={sectionNav} />
      <section id="checkliste" className="scroll-mt-28 md:scroll-mt-32">
        <ChecklistSection content={content.checklist} />
      </section>
      <section id="fakten" className="scroll-mt-28 md:scroll-mt-32">
        <FactsSection content={content.facts} />
      </section>
      <section id="infos" className="scroll-mt-28 md:scroll-mt-32">
        <InformationSection content={content.information} />
      </section>
      <section id="ablauf" className="scroll-mt-28 md:scroll-mt-32">
        <LicenseStepsSection content={content.steps} locale={locale} />
      </section>
      <section id="garantien" className="scroll-mt-28 md:scroll-mt-32">
        <TrafficRulesSection content={homeContent.trafficRules} locale={locale} />
      </section>
    </>
  );
}
