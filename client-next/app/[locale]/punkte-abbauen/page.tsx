import type { Metadata } from "next";
import PunkteAbbauenPageContent from "@/components/PunkteAbbauen/PunkteAbbauenPageContent";
import { generatePageMetadata } from "@/lib/metadata";
import { punkteAbbauenByLocale } from "@/messages/punkte-abbauen";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type PunkteAbbauenPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PunkteAbbauenPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = punkteAbbauenByLocale[locale];

  return generatePageMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
    path: "/punkte-abbauen",
  });
}

export default async function PunkteAbbauenPage({
  params,
}: PunkteAbbauenPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PunkteAbbauenPageContent content={punkteAbbauenByLocale[locale]} />;
}
