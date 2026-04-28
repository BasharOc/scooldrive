import Link from "next/link";
import type { BlogArticle, BlogUiCopy } from "@/lib/content/blogs";
import type { Locale } from "@/types/i18n";

type BlogArticlePageProps = {
  article: BlogArticle;
  locale: Locale;
  ui: BlogUiCopy;
};

export default function BlogArticlePage({
  article,
  locale,
  ui,
}: BlogArticlePageProps) {
  const translation = article.translations[locale];
  const isArabic = locale === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className={`min-h-screen bg-white px-4 pb-16 pt-[150px] ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href={`/${locale}/blogs`}
            className={`group inline-flex items-center text-gray-600 transition-colors duration-200 hover:text-[#F5BB00] ${
              isArabic ? "flex-row-reverse gap-[5px]" : ""
            }`}
          >
            <svg
              className={`h-5 w-5 transition-transform duration-200 ${
                isArabic ? "group-hover:translate-x-1" : "mr-2 group-hover:-translate-x-1"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isArabic ? "M14 5l7 7m0 0l-7 7m7-7H3" : "M10 19l-7-7m0 0l7-7m-7 7h18"}
              />
            </svg>
            {ui.backToBlog}
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="mb-6 text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-5xl">
            {translation.title}
          </h1>
          <div className={`h-1 w-24 rounded-full bg-[#F5BB00] ${isArabic ? "mr-auto" : "ml-0"}`} />
        </header>

        <article className="prose prose-lg max-w-none">
          <div
            className={`blog-article-content leading-relaxed text-gray-800
              [&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:border-b-2 [&>h1]:border-[#F5BB00] [&>h1]:pb-2 [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-black
              [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#F5BB00]
              [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-black
              [&>h4]:mt-6 [&>h4]:mb-3 [&>h4]:text-lg [&>h4]:font-bold [&>h4]:text-black
              [&>h5]:mt-6 [&>h5]:mb-3 [&>h5]:text-base [&>h5]:font-bold [&>h5]:text-black
              [&>h6]:mt-6 [&>h6]:mb-3 [&>h6]:text-sm [&>h6]:font-bold [&>h6]:text-black
              [&>p]:mb-6 [&>p]:leading-7
              [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-600
              [&>a]:font-medium [&>a]:text-[#F5BB00] [&>a]:no-underline [&>a]:transition-colors [&>a:hover]:text-black [&>a:hover]:underline
              [&>code]:rounded [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:font-mono [&>code]:text-sm [&>code]:text-black
              [&>pre]:my-6 [&>pre]:overflow-x-auto [&>pre]:rounded-lg [&>pre]:bg-black [&>pre]:p-4 [&>pre]:text-white
              [&>pre>code]:bg-transparent [&>pre>code]:p-0 [&>pre>code]:text-white
              [&>strong]:font-bold [&>strong]:text-black
              [&>hr]:my-8 [&>hr]:h-0.5 [&>hr]:border-none [&>hr]:bg-[#F5BB00]
              [&>img]:my-8 [&>img]:h-auto [&>img]:max-w-full [&>img]:rounded-lg
              [&>table]:my-8 [&>table]:w-full [&>table]:border-collapse
              [&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-gray-300 [&>table>thead>tr>th]:bg-[#F5BB00] [&>table>thead>tr>th]:p-3 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-bold [&>table>thead>tr>th]:text-black
              [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-gray-300 [&>table>tbody>tr>td]:p-3
              [&>table>tbody>tr:nth-child(even)]:bg-gray-50
              ${
                isArabic
                  ? "[&>ul]:mb-6 [&>ul]:pr-6 [&>ul>li]:mb-2 [&>ul>li]:list-disc [&>ol]:mb-6 [&>ol]:pr-6 [&>ol>li]:mb-2 [&>ol>li]:list-decimal [&>blockquote]:border-r-4 [&>blockquote]:border-[#F5BB00] [&>blockquote]:pr-6"
                  : "[&>ul]:mb-6 [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li]:list-disc [&>ol]:mb-6 [&>ol]:pl-6 [&>ol>li]:mb-2 [&>ol>li]:list-decimal [&>blockquote]:border-l-4 [&>blockquote]:border-[#F5BB00] [&>blockquote]:pl-6"
              }`}
            dangerouslySetInnerHTML={{ __html: translation.contentHtml }}
          />
        </article>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className={`flex items-center justify-between ${isArabic ? "flex-row-reverse" : ""}`}>
            <Link
              href={`/${locale}/blogs`}
              className={`inline-flex items-center rounded-lg bg-gray-100 px-6 py-3 font-medium text-black transition-all duration-200 hover:bg-[#F5BB00] hover:text-black ${
                isArabic ? "flex-row-reverse gap-[5px]" : "gap-2"
              }`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isArabic ? "M14 5l7 7m0 0l-7 7m7-7H3" : "M10 19l-7-7m0 0l7-7m-7 7h18"}
                />
              </svg>
              {ui.allArticles}
            </Link>

            <div className="text-sm text-gray-500">
              <span className="inline-flex items-center">
                <svg
                  className={`h-4 w-4 ${isArabic ? "ml-1" : "mr-1"}`}
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
                {ui.blogTitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
