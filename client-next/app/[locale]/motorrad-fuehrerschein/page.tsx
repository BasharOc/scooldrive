import type { Metadata } from "next";
import {
  ChecklistSection,
  FactsSection,
  HeroSection,
  InformationSection,
  LicenseStepsSection,
} from "@/components/Motorrad";
import TrafficRulesSection from "@/components/Homepage/TrafficRulesSection";
import { generatePageMetadata } from "@/lib/metadata";
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

  return (
    <>
      <HeroSection content={content.hero} locale={locale} />
      <ChecklistSection content={content.checklist} />
      <FactsSection content={content.facts} />
      <InformationSection content={content.information} />
      <LicenseStepsSection content={content.steps} locale={locale} />
      <TrafficRulesSection content={homeContent.trafficRules} locale={locale} />
    </>
  );
}
