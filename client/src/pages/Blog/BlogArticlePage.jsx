import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { blogArticles } from "../../helpers/blogarticles"; // Passe den Pfad ggf. an
import { useLanguage } from "../../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

const BlogArticlePage = () => {
  const { slug } = useParams();
  const { selectedLanguage, loading } = useLanguage();

  if (loading) return null; // Oder ein Lade-Spinner

  // Finde den passenden Artikel anhand des Slugs
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div
        className={`min-h-screen bg-white pt-[150px] pb-16 ${
          selectedLanguage === "AR" ? "rtl" : "ltr"
        }`}
      >
        {" "}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-gray-400"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Artikel nicht gefunden
            </h2>
            <p className="text-gray-600 mb-8">
              Der angeforderte Artikel konnte nicht gefunden werden.
            </p>
            <Link
              to="/blogs"
              className="inline-flex items-center px-6 py-3 bg-[#F5BB00] text-black font-medium rounded-lg hover:bg-black hover:text-white transition-all duration-200"
            >
              <svg
                className={`w-5 h-5 ${
                  selectedLanguage === "AR" ? "ml-2" : "mr-2"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    selectedLanguage === "AR"
                      ? "M14 5l7 7m0 0l-7 7m7-7H3"
                      : "M10 19l-7-7m0 0l7-7m-7 7h18"
                  }
                />
              </svg>
              Zurück zum Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const lang = selectedLanguage || "DE";
  const content = article.translations[lang] || article.translations.DE;

  const translations = {
    DE: {
      backToBlog: "Zurück zum Blog",
      allArticles: "Alle Artikel",
      blogTitle: "Fahrschule Scool Drive Blog",
    },
    EN: {
      backToBlog: "Back to Blog",
      allArticles: "All Articles",
      blogTitle: "Driving School Scool Drive Blog",
    },
    AR: {
      backToBlog: "العودة إلى المدونة",
      allArticles: "جميع المقالات",
      blogTitle: "مدونة مدرسة القيادة سكول درايف",
    },
  };

  return (
    <div
      className={`min-h-screen bg-white pt-[150px] pb-16 ${
        selectedLanguage === "AR" ? "rtl" : "ltr"
      }`}
    >
      <Helmet>
        <title>{content.title} | Fahrschule Scool Drive Lüneburg</title>
        <meta name="description" content={content.meta?.description || ""} />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            to="/blogs"
            className={`inline-flex items-center text-gray-600 hover:text-[#F5BB00] transition-colors duration-200 group ${
              selectedLanguage === "AR" ? "flex-row-reverse gap-[5px]" : ""
            }`}
          >
            <svg
              className={`w-5 h-5 ${
                selectedLanguage === "AR"
                  ? "group-hover:translate-x-1"
                  : "mr-2 group-hover:-translate-x-1"
              } transition-transform duration-200`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  selectedLanguage === "AR"
                    ? "M14 5l7 7m0 0l-7 7m7-7H3"
                    : "M10 19l-7-7m0 0l7-7m-7 7h18"
                }
              />
            </svg>
            {translations[selectedLanguage]?.backToBlog ||
              translations.DE.backToBlog}
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight ${
              selectedLanguage === "AR" ? "text-right" : "text-left"
            }`}
          >
            {content.title}
          </h1>
          <div
            className={`w-24 h-1 bg-[#F5BB00] rounded-full ${
              selectedLanguage === "AR" ? "mr-auto" : "ml-0"
            }`}
          ></div>{" "}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div
            className={`blog-article-content text-gray-800 leading-relaxed ${
              selectedLanguage === "AR" ? "text-right" : "text-left"
            }
                       [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-black [&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:border-b-2 [&>h1]:border-[#F5BB00] [&>h1]:pb-2
                       [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#F5BB00] [&>h2]:mt-6 [&>h2]:mb-3
                       [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-6 [&>h3]:mb-3
                       [&>h4]:text-lg [&>h4]:font-bold [&>h4]:text-black [&>h4]:mt-6 [&>h4]:mb-3
                       [&>h5]:text-base [&>h5]:font-bold [&>h5]:text-black [&>h5]:mt-6 [&>h5]:mb-3
                       [&>h6]:text-sm [&>h6]:font-bold [&>h6]:text-black [&>h6]:mt-6 [&>h6]:mb-3
                       [&>p]:mb-6 [&>p]:leading-7
                    ${
                      selectedLanguage === "AR"
                        ? "[&>ul]:mb-6 [&>ul]:pr-6 [&>ul>li]:mb-2 [&>ul>li]:list-disc [&>ol]:mb-6 [&>ol]:pr-6 [&>ol>li]:mb-2 [&>ol>li]:list-decimal [&>blockquote]:border-r-4 [&>blockquote]:border-[#F5BB00] [&>blockquote]:pr-6"
                        : "[&>ul]:mb-6 [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li]:list-disc [&>ol]:mb-6 [&>ol]:pl-6 [&>ol>li]:mb-2 [&>ol>li]:list-decimal [&>blockquote]:border-l-4 [&>blockquote]:border-[#F5BB00] [&>blockquote]:pl-6"
                    }
[&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-600
                       [&>a]:text-[#F5BB00] [&>a]:font-medium [&>a]:no-underline [&>a]:transition-colors [&>a:hover]:text-black [&>a:hover]:underline
                       [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-black [&>code]:text-sm [&>code]:font-mono
                       [&>pre]:bg-black [&>pre]:text-white [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-6
                       [&>pre>code]:bg-transparent [&>pre>code]:p-0 [&>pre>code]:text-white
                       [&>strong]:text-black [&>strong]:font-bold
                       [&>hr]:border-none [&>hr]:h-0.5 [&>hr]:bg-[#F5BB00] [&>hr]:my-8
                       [&>img]:max-w-full [&>img]:h-auto [&>img]:rounded-lg [&>img]:my-8
                       [&>table]:w-full [&>table]:border-collapse [&>table]:my-8
                       [&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-gray-300 [&>table>thead>tr>th]:bg-[#F5BB00] [&>table>thead>tr>th]:text-black [&>table>thead>tr>th]:font-bold [&>table>thead>tr>th]:p-3 [&>table>thead>tr>th]:text-left
                       [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-gray-300 [&>table>tbody>tr>td]:p-3
                       [&>table>tbody>tr:nth-child(even)]:bg-gray-50`}
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </article>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div
            className={`flex justify-between items-center ${
              selectedLanguage === "AR" ? "flex-row-reverse" : ""
            }`}
          >
            {" "}
            <Link
              to="/blogs"
              className={`inline-flex items-center px-6 py-3 bg-gray-100 text-black font-medium rounded-lg hover:bg-[#F5BB00] hover:text-black transition-all duration-200
    ${selectedLanguage === "AR" ? "flex-row-reverse gap-[5px]" : "gap-2"}`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    selectedLanguage === "AR"
                      ? "M14 5l7 7m0 0l-7 7m7-7H3"
                      : "M10 19l-7-7m0 0l7-7m-7 7h18"
                  }
                />
              </svg>
              {translations[selectedLanguage]?.allArticles ||
                translations.DE.allArticles}
            </Link>
            <div className="text-sm text-gray-500">
              <span className="inline-flex items-center">
                <svg
                  className={`w-4 h-4 ${
                    selectedLanguage === "AR" ? "ml-1" : "mr-1"
                  }`}
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
                {translations[selectedLanguage]?.blogTitle ||
                  translations.DE.blogTitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlePage;
