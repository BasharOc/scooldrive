import { notFound } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { NAVBAR_AR } from "@/messages/ar/navbar";
import { NAVBAR_DE } from "@/messages/de/navbar";
import { NAVBAR_EN } from "@/messages/en/navbar";
import { footerByLocale } from "@/messages/footer";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";

// Objekt mit den Inhalte für die drei Sprachen für das Navbar
const navbarByLocale = {
  de: NAVBAR_DE,
  en: NAVBAR_EN,
  ar: NAVBAR_AR,
} as const;

// rein ["de", "en", "ar"] ->  raus [{locale: "de"} ...]
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="flex min-h-full flex-col"
    >
      <Navbar content={navbarByLocale[locale]} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer content={footerByLocale[locale]} locale={locale} />
    </div>
  );
}
