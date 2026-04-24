import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import { NAVBAR_AR } from "@/messages/ar/navbar";
import { NAVBAR_DE } from "@/messages/de/navbar";
import { NAVBAR_EN } from "@/messages/en/navbar";

// "de" ist "de" kein STRING -> sie lassen sich nicht verändern
const SUPPORTED_LOCALES = ["de", "en", "ar"] as const;

// Objekt mit den Inhalte für die drei Sprachen für das Navbar
const navbarByLocale = {
  de: NAVBAR_DE,
  en: NAVBAR_EN,
  ar: NAVBAR_AR,
} as const;
// as const -> { readonly de: NAVBAR_DE, readonly en: NAVBAR_EN, readonly ar: NAVBAR_AR }

// keyof -> keys typof type von den keys vom objekt navbarByLocale
type Locale = keyof typeof navbarByLocale;
// Local "de" | "ar" | "en"

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

  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-col">
      <Navbar
        content={navbarByLocale[locale as Locale]}
        locale={locale as Locale}
      />
      {children}
    </div>
  );
}
