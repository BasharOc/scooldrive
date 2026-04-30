import Image from "next/image";
import Link from "next/link";
import type { BlogArticleTranslation, BlogUiCopy } from "@/lib/content/blogs";
import type { Locale } from "@/types/i18n";

type BlogOverviewItem = {
  slug: string;
  coverImage: string;
  translation: BlogArticleTranslation;
};

type BlogOverviewPageProps = {
  items: BlogOverviewItem[];
  locale: Locale;
  ui: BlogUiCopy;
};

export default function BlogOverviewPage({
  items,
  locale,
  ui,
}: BlogOverviewPageProps) {
  return (
    <section className="min-h-screen bg-white pb-16 pt-[150px]">
      <div className="mx-auto w-[95%] max-w-3xl md:w-[80%]">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl">
            Blog
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#F5BB00]" />
        </div>

        {/* Articles */}
        <div className="flex flex-col gap-6">
          {items.map((article) => (
            <article
              key={article.slug}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <Link href={`/${locale}/blogs/${article.slug}`} className="block">
                {/* Mobile: Bild oben, Text unten. Desktop: nebeneinander */}
                <div className="flex flex-col sm:flex-row">
                  {/* Bild */}
                  <div className="relative h-52 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-52">
                    <Image
                      src={article.coverImage}
                      alt={article.translation.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h2 className="mb-2 text-lg font-bold leading-snug text-black sm:text-xl">
                        {article.translation.title}
                      </h2>

                      {article.translation.teaser && (
                        <p className="mb-4 text-sm leading-relaxed text-gray-500 sm:text-base">
                          {article.translation.teaser}
                        </p>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-bold text-[#F5BB00]">
                      {ui.readMore} →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {items.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <svg
                className="h-8 w-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-lg text-gray-500">{ui.empty}</p>
          </div>
        )}
      </div>
    </section>
  );
}
