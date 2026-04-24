import type { Metadata } from "next";
import {
  ChecklistSection,
  HeroSection,
  RequirementsSummarySection,
  StepsSection,
} from "@/components/AutoAnhaenger";
import { generatePageMetadata } from "@/lib/metadata";
import { autoAnhaengerByLocale } from "@/messages/auto-anhaenger";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type AutoAnhaengerPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: AutoAnhaengerPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = autoAnhaengerByLocale[locale];

  return generatePageMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
    path: "/auto-anhaenger",
  });
}

export default async function AutoAnhaengerPage({
  params,
}: AutoAnhaengerPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = autoAnhaengerByLocale[locale];

  return (
    <>
      <HeroSection content={content.hero} locale={locale} />
      <RequirementsSummarySection content={content.facts} />
      <StepsSection content={content.steps} locale={locale} />
      <ChecklistSection content={content.checklist} />
    </>
  );
}
