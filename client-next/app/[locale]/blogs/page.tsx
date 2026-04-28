import type { Metadata } from "next";
import BlogOverviewPage from "@/components/Blog/BlogOverviewPage";
import { generatePageMetadata } from "@/lib/metadata";
import { getBlogOverviewItems, getBlogOverviewSeo, getBlogUiCopy } from "@/lib/content/blogs";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type BlogsOverviewPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: BlogsOverviewPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const seo = getBlogOverviewSeo(locale);

  return generatePageMetadata({
    locale,
    title: seo.title,
    description: seo.description,
    path: "/blogs",
  });
}

export default async function BlogsOverviewPage({ params }: BlogsOverviewPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <BlogOverviewPage
      items={getBlogOverviewItems(locale)}
      locale={locale}
      ui={getBlogUiCopy(locale)}
    />
  );
}
