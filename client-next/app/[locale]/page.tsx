import type { Metadata } from "next";
import FaqAccordion from "@/components/Homepage/FaqAccordion";
import HomeHeroSection from "@/components/Homepage/HomeHeroSection";
import LicenseOptionsSection from "@/components/Homepage/LicenseOptionsSection";
import PersonalApproachSection from "@/components/Homepage/PersonalApproachSection";
// import ReviewsSection from "@/components/Homepage/ReviewsSection";
import ReviewsSectionV3 from "@/components/Homepage/ReviewsSectionV3";
import SchoolLocationSection from "@/components/Homepage/SchoolLocationSection";
import TrafficRulesSection from "@/components/Homepage/TrafficRulesSection";
import SectionNav from "@/components/shared/SectionNav";
import { getEinstellungen, getOeffnungszeiten } from "@/lib/api";
import {
  formatOeffnungszeiten,
  type EinstellungenApiResponse,
  type OeffnungszeitenApiResponse,
} from "@/lib/remote-data";
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
  let oeffnungszeiten: OeffnungszeitenApiResponse | null = null;

  try {
    remoteData = await getEinstellungen();
  } catch (error) {
    console.error("Failed to load settings for home page:", error);
  }

  try {
    oeffnungszeiten = await getOeffnungszeiten();
  } catch (error) {
    console.error("Failed to load opening hours for home page:", error);
  }

  return (
    <>
      <HomeHeroSection
        content={content.hero}
        locale={typedLocale}
        warningEnabled={remoteData?.begrenztePlaetze ?? false}
      />
      <SectionNav content={content.sectionNav} />
      <div id="fuhrerscheine" className="scroll-mt-28 md:scroll-mt-32">
        <LicenseOptionsSection
          content={content.licenseOptions}
          locale={typedLocale}
        />
      </div>
      <div id="reviews" className="scroll-mt-28 md:scroll-mt-32">
        <ReviewsSectionV3 content={content.reviews} locale={typedLocale} />
      </div>
      <div id="garantien" className="scroll-mt-28 md:scroll-mt-32">
        <TrafficRulesSection
          content={content.trafficRules}
          locale={typedLocale}
        />
      </div>
      <div id="angebot">
        <PersonalApproachSection
          content={content.personalApproach}
          locale={typedLocale}
        />
      </div>
      <div id="standort" className="scroll-mt-28 md:scroll-mt-32">
        <SchoolLocationSection
          content={content.schoolLocation}
          runtimeData={{
            hours:
              formatOeffnungszeiten(oeffnungszeiten) ||
              content.schoolLocation.schoolInfo.hours,
            phoneEnabled: remoteData?.kontaktOptionen?.telefon ?? true,
          }}
        />
      </div>
      <div id="faq" className="scroll-mt-28 md:scroll-mt-32">
        <FaqAccordion content={content.faq} />
      </div>
    </>
  );
}
