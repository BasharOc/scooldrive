import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { generatePageMetadata } from "@/lib/metadata";
import { legalByLocale } from "@/messages/legal";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type AgbPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: AgbPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = legalByLocale[locale].agb;

  return generatePageMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
    path: content.seo.path,
  });
}

export default async function AgbPage({ params }: AgbPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LegalPage content={legalByLocale[locale].agb} locale={locale} />;
}
