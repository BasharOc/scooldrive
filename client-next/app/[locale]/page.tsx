import type { Metadata } from "next";
import FaqAccordion from "@/components/Homepage/FaqAccordion";
import HomeHeroSection from "@/components/Homepage/HomeHeroSection";
import LicenseOptionsSection from "@/components/Homepage/LicenseOptionsSection";
import PersonalApproachSection from "@/components/Homepage/PersonalApproachSection";
import ReviewsSection from "@/components/Homepage/ReviewsSection";
import SchoolLocationSection from "@/components/Homepage/SchoolLocationSection";
import TrafficRulesSection from "@/components/Homepage/TrafficRulesSection";
import { getEinstellungen } from "@/lib/api";
import type { EinstellungenApiResponse } from "@/lib/remote-data";
import { homeByLocale } from "@/messages/home";
import { isLocale, type Locale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = homeByLocale[locale];
  const title = content.seo.title;
  const description = content.seo.description;
  const path = "";

  return generatePageMetadata({ locale, description, title, path });
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale: Locale = locale;
  const content = homeByLocale[typedLocale];
  let remoteData: EinstellungenApiResponse | null = null;

  try {
    remoteData = await getEinstellungen();
  } catch (error) {
    console.error("Failed to load settings for home page:", error);
  }

  return (
    <>
      <HomeHeroSection
        content={content.hero}
        locale={typedLocale}
        warningEnabled={remoteData?.begrenztePlaetze ?? false}
      />
      <LicenseOptionsSection
        content={content.licenseOptions}
        locale={typedLocale}
      />
      <PersonalApproachSection
        content={content.personalApproach}
        locale={typedLocale}
      />
      <ReviewsSection content={content.reviews} locale={typedLocale} />
      <TrafficRulesSection content={content.trafficRules} locale={typedLocale} />
      <SchoolLocationSection content={content.schoolLocation} />
      <FaqAccordion content={content.faq} />
    </>
  );
}
