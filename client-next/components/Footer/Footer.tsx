import Link from "next/link";
import type { FooterContent } from "@/components/Footer/types";
import type { Locale } from "@/types/i18n";

type FooterProps = {
  content: FooterContent;
  locale: Locale;
};

export default function Footer({ content, locale }: FooterProps) {
  const isArabic = locale === "ar";

  return (
    <footer className="bg-gray-100 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-base font-bold italic text-black sm:text-1xl lg:text-3xl">
            {content.callToAction}
          </h2>

          <Link
            href={`/${locale}/anmelden`}
            className="rounded-full bg-[#F5BB00] px-5 py-3 text-sm font-bold text-black transition-colors duration-200 hover:bg-[#e5a800] sm:px-8 sm:text-base"
          >
            {content.callToActionButton}
          </Link>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="mb-4 inline-block rounded bg-black px-4 py-2 text-lg font-bold text-white">
                {content.companyInfo.name}
              </div>
              <div className="w-fit rounded bg-[#F5BB00] px-2 py-1 text-sm font-semibold text-black">
                {content.companyInfo.location}
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-700">
              {content.companyInfo.description}
            </p>
          </div>

          {content.sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-bold italic text-black">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={`/${locale}${link.path}`}
                      className="transition-colors duration-200 hover:text-[#F5BB00]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-sm text-gray-600">
              {content.bottom.copyright}
            </div>

            <div
              className={`flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 ${
                isArabic ? "lg:justify-end" : ""
              }`}
            >
              {content.bottom.links.map((link) => (
                <Link
                  key={link.path}
                  href={`/${locale}${link.path}`}
                  className="transition-colors duration-200 hover:text-[#F5BB00]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <a
              href={content.bottom.noticeUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-[#F5BB00]"
            >
              {content.bottom.notice}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
