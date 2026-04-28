import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticlePage from "@/components/Blog/BlogArticlePage";
import {
  getAllBlogSlugs,
  getBlogAlternates,
  getBlogArticleBySlug,
  getBlogArticleUrl,
  getBlogUiCopy,
} from "@/lib/content/blogs";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";

const SITE_URL = "https://fahrschule-lg.scooldrive.com";

type BlogArticleRouteProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    getAllBlogSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: BlogArticleRouteProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const translation = article.translations[locale];
  const url = getBlogArticleUrl(locale, slug);
  const imageUrl = `${SITE_URL}${article.coverImage}`;

  return {
    title: `${translation.title} | Scool Drive Blog`,
    description: translation.meta.description,
    keywords: translation.meta.keywords,
    alternates: {
      canonical: url,
      languages: getBlogAlternates(slug),
    },
    openGraph: {
      title: translation.title,
      description: translation.meta.description,
      url,
      type: "article",
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: translation.title,
      description: translation.meta.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogArticleRoute({ params }: BlogArticleRouteProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const translation = article.translations[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: translation.title,
    description: translation.meta.description,
    image: [`${SITE_URL}${article.coverImage}`],
    url: getBlogArticleUrl(locale, slug),
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: "Scool Drive",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-icon.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticlePage article={article} locale={locale} ui={getBlogUiCopy(locale)} />
    </>
  );
}
