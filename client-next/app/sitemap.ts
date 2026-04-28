import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/content/blogs";
import { SUPPORTED_LOCALES } from "@/types/i18n";

const BASE_URL = "https://fahrschule-lg.scooldrive.com";

const localizedPaths = [
  "",
  "/auto-fuehrerschein",
  "/auto-anhaenger",
  "/motorrad-fuehrerschein",
  "/theoriekurs",
  "/intensivkurse",
  "/preise",
  "/punkte-abbauen",
  "/impressum",
  "/agb",
  "/datenschutz",
  "/anmelden",
  "/blogs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const localeEntries = SUPPORTED_LOCALES.flatMap((locale) =>
    localizedPaths.map((path) => ({
      url: `${BASE_URL}/${locale}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
  );

  const blogEntries = SUPPORTED_LOCALES.flatMap((locale) =>
    getAllBlogSlugs().map((slug) => ({
      url: `${BASE_URL}/${locale}/blogs/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...localeEntries,
    ...blogEntries,
  ];
}
