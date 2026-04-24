import type { Metadata } from "next";
import type { Locale } from "@/types/i18n";

const BASE_URL = "https://fahrschule-lg.scooldrive.com";

type GenerateMetaOptions = {
  locale: Locale;
  description: string;
  title: string;
  path: string;
};

export const generatePageMetadata = ({
  locale,
  description,
  title,
  path,
}: GenerateMetaOptions): Metadata => {
  const normalizedPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const url = `${BASE_URL}/${locale}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        de: `${BASE_URL}/de${normalizedPath}`,
        en: `${BASE_URL}/en${normalizedPath}`,
        ar: `${BASE_URL}/ar${normalizedPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [`${BASE_URL}/logo-icon.png`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/logo-icon.png`],
    },
  };
};
