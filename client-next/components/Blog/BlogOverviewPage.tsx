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
    <section className="min-h-screen bg-white px-4 pb-16 pt-[150px]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl">Blog</h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#F5BB00]" />
        </div>

        <div className="grid gap-6 md:gap-8">
          {items.map((article) => (
            <article
              key={article.slug}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <Link
                href={`/${locale}/blogs/${article.slug}`}
                className="block overflow-hidden transition-colors duration-200 hover:bg-gray-50"
              >
                <div className="flex">
                  <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden bg-gray-100 sm:h-32 sm:w-40">
                    <Image
                      src={article.coverImage}
                      alt={article.translation.title}
                      width={160}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h2 className="mb-3 text-xl font-semibold text-black transition-colors duration-200 hover:text-[#F5BB00] sm:text-2xl">
                          {article.translation.title}
                        </h2>

                        {article.translation.teaser ? (
                          <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                            {article.translation.teaser}
                          </p>
                        ) : null}

                        <div className="flex items-center">
                          <span className="text-sm font-medium text-[#F5BB00] transition-colors duration-200 hover:text-black">
                            {ui.readMore}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {items.length === 0 ? (
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
        ) : null}
      </div>
    </section>
  );
}
