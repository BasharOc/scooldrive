import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/types/i18n";

export type BlogArticleTranslation = {
  title: string;
  teaser: string;
  contentHtml: string;
  meta: {
    description: string;
    keywords?: string;
  };
  coverImage: string;
};

export type BlogArticle = {
  slug: string;
  coverImage: string;
  translations: Record<Locale, BlogArticleTranslation>;
};

export type BlogOverviewSeo = {
  title: string;
  description: string;
};

export type BlogUiCopy = {
  readMore: string;
  blogTitle: string;
  empty: string;
  backToBlog: string;
  allArticles: string;
  notFoundTitle: string;
  notFoundDescription: string;
};

const SITE_URL = "https://fahrschule-lg.scooldrive.com";
const blogLocales: Locale[] = ["de", "en", "ar"];

const overviewSeoByLocale: Record<Locale, BlogOverviewSeo> = {
  de: {
    title: "Blog – Ratgeber & Tipps | Fahrschule Scool Drive Lüneburg",
    description:
      "Aktuelle Infos, Tipps und Ratgeber rund um Führerschein, Punkte, Bußgelder und mehr. Jetzt im Fahrschul-Blog lesen!",
  },
  en: {
    title: "Blog – Advice & Tips | Driving School Scool Drive Lüneburg",
    description:
      "Current information, tips and advice on driving licenses, penalty points, fines and more. Read our driving school blog now!",
  },
  ar: {
    title: "مدونة – نصائح وإرشادات | مدرسة القيادة سكول درايف لونيبورغ",
    description:
      "معلومات ونصائح حول رخصة القيادة، النقاط، الغرامات والمزيد. اقرأ مدونة مدرسة القيادة الآن!",
  },
};

const blogUiCopyByLocale: Record<Locale, BlogUiCopy> = {
  de: {
    readMore: "Weiterlesen →",
    blogTitle: "Fahrschule Scool Drive Blog",
    empty: "Keine Blog-Artikel verfügbar",
    backToBlog: "Zurück zum Blog",
    allArticles: "Alle Artikel",
    notFoundTitle: "Artikel nicht gefunden",
    notFoundDescription: "Der angeforderte Artikel konnte nicht gefunden werden.",
  },
  en: {
    readMore: "Read more →",
    blogTitle: "Driving School Scool Drive Blog",
    empty: "No blog articles available",
    backToBlog: "Back to Blog",
    allArticles: "All Articles",
    notFoundTitle: "Article not found",
    notFoundDescription: "The requested article could not be found.",
  },
  ar: {
    readMore: "اقرأ المزيد ←",
    blogTitle: "مدونة مدرسة القيادة سكول درايف",
    empty: "لا توجد مقالات متاحة",
    backToBlog: "العودة إلى المدونة",
    allArticles: "جميع المقالات",
    notFoundTitle: "المقال غير موجود",
    notFoundDescription: "تعذر العثور على المقال المطلوب.",
  },
};

const getLocaleBlogDirectory = (locale: Locale) =>
  join(process.cwd(), "messages", locale, "blogs");

const getLocaleBlogSlugs = (locale: Locale) => {
  const directory = getLocaleBlogDirectory(locale);

  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory)
    .filter((file) => file.endsWith(".ts"))
    .map((file) => file.replace(/\.ts$/, ""))
    .sort();
};

const parseBlogTranslationFile = (locale: Locale, slug: string): BlogArticleTranslation => {
  const filePath = join(getLocaleBlogDirectory(locale), `${slug}.ts`);
  const source = readFileSync(filePath, "utf8");
  const match = source.match(/const blog = (\{[\s\S]*\});\s*export default blog;\s*$/);

  if (!match) {
    throw new Error(`Failed to parse blog file for ${locale}/${slug}`);
  }

  return JSON.parse(match[1]) as BlogArticleTranslation;
};

const getCompleteBlogSlugs = () => {
  const localeSlugSets = blogLocales.map((locale) => new Set(getLocaleBlogSlugs(locale)));

  return [...localeSlugSets[0]].filter((slug) =>
    localeSlugSets.every((slugSet) => slugSet.has(slug))
  );
};

const completeBlogSlugs = getCompleteBlogSlugs();

const blogArticles: BlogArticle[] = completeBlogSlugs.map((slug) => {
  const translations = {
    de: parseBlogTranslationFile("de", slug),
    en: parseBlogTranslationFile("en", slug),
    ar: parseBlogTranslationFile("ar", slug),
  } satisfies Record<Locale, BlogArticleTranslation>;

  return {
    slug,
    coverImage: translations.de.coverImage,
    translations,
  };
});

export const getAllBlogArticles = () => blogArticles;

export const getAllBlogSlugs = () => completeBlogSlugs;

export const getBlogArticleBySlug = (slug: string) =>
  blogArticles.find((article) => article.slug === slug) ?? null;

export const getBlogOverviewItems = (locale: Locale) =>
  blogArticles.map((article) => ({
    slug: article.slug,
    coverImage: article.coverImage,
    translation: article.translations[locale],
  }));

export const getBlogOverviewSeo = (locale: Locale) => overviewSeoByLocale[locale];

export const getBlogUiCopy = (locale: Locale) => blogUiCopyByLocale[locale];

export const getBlogArticleUrl = (locale: Locale, slug: string) =>
  `${SITE_URL}/${locale}/blogs/${slug}`;

export const getBlogOverviewUrl = (locale: Locale) => `${SITE_URL}/${locale}/blogs`;

export const getBlogAlternates = (slug?: string) => ({
  de: slug ? getBlogArticleUrl("de", slug) : getBlogOverviewUrl("de"),
  en: slug ? getBlogArticleUrl("en", slug) : getBlogOverviewUrl("en"),
  ar: slug ? getBlogArticleUrl("ar", slug) : getBlogOverviewUrl("ar"),
});
