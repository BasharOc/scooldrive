import type { LegalPageContent } from "@/components/Footer/types";
import type { Locale } from "@/types/i18n";

type LegalPageProps = {
  content: LegalPageContent;
  locale: Locale;
};

export default function LegalPage({ content, locale }: LegalPageProps) {
  const isArabic = locale === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className={`min-h-screen bg-white px-4 pb-16 pt-40 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 border-b-4 border-[#F5BB00] pb-4 text-4xl font-bold text-black">
          {content.title}
        </h1>

        <div className="max-w-none">
          {content.sections.map((section) => (
            <div key={section.heading} className="mb-6">
              <h2 className="mb-4 text-2xl font-bold text-black">{section.heading}</h2>
              <div className="rounded-lg bg-gray-50 p-6 text-gray-800">
                {section.details.map((detail) => (
                  <p key={detail} className="mb-2 last:mb-0">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
