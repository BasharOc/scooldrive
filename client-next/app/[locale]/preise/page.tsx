import type { Metadata } from "next";
import PreisePageContent from "@/components/Preise/PreisePageContent";
import { getPreise } from "@/lib/api";
import { generatePageMetadata } from "@/lib/metadata";
import type { PreiseApiResponse } from "@/lib/remote-data";
import { preiseByLocale } from "@/messages/preise";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type PreisePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PreisePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = preiseByLocale[locale];

  return generatePageMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
    path: "/preise",
  });
}

export default async function PreisePage({ params }: PreisePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = preiseByLocale[locale];
  let remoteData: PreiseApiResponse | null = null;

  try {
    remoteData = await getPreise();
  } catch (error) {
    console.error("Failed to load preise for preise page:", error);
  }

  return <PreisePageContent content={content} locale={locale} remoteData={remoteData} />;
}
