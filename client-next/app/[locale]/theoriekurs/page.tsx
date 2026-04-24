import type { Metadata } from "next";
import TheoriekursPageContent from "@/components/Theoriekurs/TheoriekursPageContent";
import { generatePageMetadata } from "@/lib/metadata";
import type { TermineApiResponse } from "@/lib/remote-data";
import { theoriekursByLocale } from "@/messages/theoriekurs";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type TheoriekursPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: TheoriekursPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = theoriekursByLocale[locale];

  return generatePageMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
    path: "/theoriekurs",
  });
}

export default async function TheoriekursPage({
  params,
}: TheoriekursPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = theoriekursByLocale[locale];
  const remoteData: { termine?: TermineApiResponse | null } | null = null;

  return (
    <TheoriekursPageContent
      content={content}
      locale={locale}
      remoteData={remoteData}
    />
  );
}
