import { notFound } from "next/navigation";
import LocaleChrome from "@/components/Layout/LocaleChrome";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import { getEinstellungen } from "@/lib/api";
import type { EinstellungenApiResponse } from "@/lib/remote-data";
import { NAVBAR_AR } from "@/messages/ar/navbar";
import { NAVBAR_DE } from "@/messages/de/navbar";
import { NAVBAR_EN } from "@/messages/en/navbar";
import { footerByLocale } from "@/messages/footer";
import { whatsappByLocale } from "@/messages/whatsapp";
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

  let remoteData: EinstellungenApiResponse | null = null;

  try {
    remoteData = await getEinstellungen();
  } catch (error) {
    console.error("Failed to load settings for locale layout:", error);
  }

  const whatsappEnabled = remoteData?.kontaktOptionen?.whatsapp ?? true;
  const whatsappNumber = remoteData?.kontaktOptionen?.whatsappNummer;

  return (
    <div
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="flex min-h-full flex-col"
    >
      <WhatsAppButton
        content={whatsappByLocale[locale]}
        enabled={whatsappEnabled}
        phoneNumber={whatsappNumber}
      />
      <LocaleChrome
        locale={locale}
        navbarContent={navbarByLocale[locale]}
        footerContent={footerByLocale[locale]}
      >
        {children}
      </LocaleChrome>
    </div>
  );
}
