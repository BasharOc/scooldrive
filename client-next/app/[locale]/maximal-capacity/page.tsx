import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MaximalCapacityPage from "@/components/Registration/MaximalCapacityPage";
import { generatePageMetadata } from "@/lib/metadata";
import { registrationByLocale } from "@/messages/registration";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";

type MaxCapacityPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: MaxCapacityPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = registrationByLocale[locale];

  return generatePageMetadata({
    locale,
    title: content.capacitySeo.title,
    description: content.capacitySeo.description,
    path: "/maximal-capacity",
  });
}

export default async function MaxCapacityRoute({
  params,
}: MaxCapacityPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = registrationByLocale[locale].capacity;

  return (
    <MaximalCapacityPage
      locale={locale}
      title={content.title}
      subtitle={content.subtitle}
      message={content.message}
      button={content.button}
    />
  );
}
