import type { Metadata } from "next";
import IntensivkursePageContent from "@/components/Intensivkurse/IntensivkursePageContent";
import { getPreise } from "@/lib/api";
import { generatePageMetadata } from "@/lib/metadata";
import type { PreiseApiResponse } from "@/lib/remote-data";
import { intensivkurseByLocale } from "@/messages/intensivkurse";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type IntensivkursePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: IntensivkursePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = intensivkurseByLocale[locale];

  return generatePageMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
    path: "/intensivkurse",
  });
}

export default async function IntensivkursePage({
  params,
}: IntensivkursePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = intensivkurseByLocale[locale];
  let preise: PreiseApiResponse | null = null;

  try {
    preise = await getPreise();
  } catch (error) {
    console.error("Failed to load preise for intensivkurse page:", error);
  }

  const remoteData: { preise?: PreiseApiResponse | null } | null = { preise };

  return (
    <IntensivkursePageContent
      content={content}
      locale={locale}
      remoteData={remoteData}
    />
  );
}
