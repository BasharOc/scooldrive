import type { Metadata } from "next";
import FaqAccordion from "@/components/Homepage/FaqAccordion";
import HomeHeroSection from "@/components/Homepage/HomeHeroSection";
import LicenseOptionsSection from "@/components/Homepage/LicenseOptionsSection";
import PersonalApproachSection from "@/components/Homepage/PersonalApproachSection";
import ReviewsSection from "@/components/Homepage/ReviewsSection";
import SchoolLocationSection from "@/components/Homepage/SchoolLocationSection";
import TrafficRulesSection from "@/components/Homepage/TrafficRulesSection";
import { homeByLocale } from "@/messages/home";
import { isLocale, type Locale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = homeByLocale[locale];
  const baseUrl = "https://fahrschule-lg.scooldrive.com";
  const localePath = `/${locale}`;

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: `${baseUrl}${localePath}`,
      languages: {
        de: `${baseUrl}/de`,
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: `${baseUrl}${localePath}`,
      type: "website",
      images: [`${baseUrl}/logo-icon.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [`${baseUrl}/logo-icon.png`],
    },
  };
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = homeByLocale[locale as Locale];

  return (
    <>
      <HomeHeroSection content={content.hero} locale={locale} />
      <LicenseOptionsSection content={content.licenseOptions} locale={locale} />
      <PersonalApproachSection content={content.personalApproach} locale={locale} />
      <ReviewsSection content={content.reviews} locale={locale} />
      <TrafficRulesSection content={content.trafficRules} locale={locale} />
      <SchoolLocationSection content={content.schoolLocation} />
      <FaqAccordion content={content.faq} />
    </>
  );
}
