import type { Metadata } from "next";
import DrivingSchoolStepsSection from "@/components/AutoFuehrerschein/DrivingSchoolStepsSection";
import HeroSection from "@/components/AutoFuehrerschein/HeroSection";
import TrailerLicenseFactsSection from "@/components/AutoFuehrerschein/TrailerLicenseFactsSection";
import SectionNav from "@/components/shared/SectionNav";
import { generatePageMetadata } from "@/lib/metadata";
import { createSectionNav } from "@/lib/section-nav";
import { autoFuehrerscheinByLocale } from "@/messages/auto-fuehrerschein";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type AutoFuehrerscheinPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: AutoFuehrerscheinPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = autoFuehrerscheinByLocale[locale];

  return generatePageMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
    path: "/auto-fuehrerschein",
  });
}

export default async function AutoFuehrerscheinPage({
  params,
}: AutoFuehrerscheinPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = autoFuehrerscheinByLocale[locale];
  const sectionNav = createSectionNav(locale, [
    { id: "fakten", label: "facts" },
    { id: "ablauf", label: "process" },
  ]);

  return (
    <>
      <HeroSection content={content.hero} locale={locale} />
      <SectionNav content={sectionNav} />
      <section id="fakten" className="scroll-mt-28 md:scroll-mt-32">
        <TrailerLicenseFactsSection content={content.facts} />
      </section>
      <section id="ablauf" className="scroll-mt-28 md:scroll-mt-32">
        <DrivingSchoolStepsSection content={content.steps} locale={locale} />
      </section>
    </>
  );
}
