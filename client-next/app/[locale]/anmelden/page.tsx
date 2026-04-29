import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import RegistrationFlow from "@/components/Registration/RegistrationFlow";
import { getEinstellungen } from "@/lib/api";
import { generatePageMetadata } from "@/lib/metadata";
import { registrationByLocale } from "@/messages/registration";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";

type RegistrationPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: RegistrationPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = registrationByLocale[locale];

  return generatePageMetadata({
    locale,
    title: content.seo.title,
    description: content.seo.description,
    path: "/anmelden",
  });
}

export default async function RegistrationPage({ params }: RegistrationPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  try {
    const settings = await getEinstellungen();

    if (settings?.anmeldungStopp) {
      redirect(`/${locale}/maximal-capacity`);
    }
  } catch (error) {
    console.error("Failed to load registration settings:", error);
  }

  return <RegistrationFlow locale={locale} />;
}
