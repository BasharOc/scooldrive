import { notFound } from "next/navigation";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <h1>MOIN!</h1>;
}
