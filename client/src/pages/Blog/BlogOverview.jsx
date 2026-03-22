import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { blogArticles } from "../../helpers/blogarticles"; // Passe Pfad ggf. an
import { useLanguage } from "../../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

const BlogOverview = () => {
  const { selectedLanguage } = useLanguage(); // Hole die Sprache aus dem Kontext

  // Übersetzungen für SEO-Title & Description (optional auslagern)
  const seo = {
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

  // Fallback auf Deutsch, falls Übersetzung fehlt
  const currentSeo = seo[selectedLanguage] || seo.de;

  return (
    <div className="min-h-screen bg-white pt-[150px] pb-16">
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Blog
          </h1>
          <div className="w-24 h-1 bg-[#F5BB00] mx-auto rounded-full"></div>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid gap-6 md:gap-8">
          {blogArticles.map((article) => {
            // Fallback falls Übersetzung fehlt:
            const content =
              article.translations[selectedLanguage] || article.translations.DE;

            return (
              <article
                key={article.slug}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <Link
                  to={`/blogs/${article.slug}`}
                  className="block hover:bg-gray-50 transition-colors duration-200 overflow-hidden"
                >
                  <div className="flex">
                    {/* Thumbnail */}
                    <div className="w-32 h-24 sm:w-40 sm:h-32 flex-shrink-0">
                      <img
                        src={`/blog/${article.slug}.jpg`}
                        alt={content.title}
                        className="pl-[20px] mt-[25%] w-full h-full object-cover mx-auto"
                        onError={(e) => {
                          e.target.src = "/blog/default.jpg";
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 sm:p-8">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3 hover:text-[#F5BB00] transition-colors duration-200">
                            {content.title}
                          </h2>

                          {content.teaser && (
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                              {content.teaser}
                            </p>
                          )}

                          <div className="flex items-center">
                            <span className="text-[#F5BB00] text-sm font-medium hover:text-black transition-colors duration-200">
                              Weiterlesen →
                            </span>
                          </div>
                        </div>

                        <div className="ml-4 flex-shrink-0">
                          <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-black"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Empty State - falls keine Artikel vorhanden */}
        {blogArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <p className="text-gray-500 text-lg">
              Keine Blog-Artikel verfügbar
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogOverview;
