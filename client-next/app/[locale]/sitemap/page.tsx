import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, SUPPORTED_LOCALES } from "@/types/i18n";
import { notFound } from "next/navigation";

type SitemapPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: SitemapPageProps): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Sitemap – Scool Drive Fahrschule",
    en: "Sitemap – Scool Drive Driving School",
    ar: "خريطة الموقع – Scool Drive",
  };
  return { title: titles[locale] ?? titles.de };
}

const SITEMAP_CONTENT = {
  de: {
    title: "Sitemap",
    sections: [
      {
        heading: "Hauptseiten",
        links: [
          { label: "Startseite", path: "" },
          { label: "Preise", path: "/preise" },
          { label: "Unsere Termine", path: "/theoriekurs" },
          { label: "Intensivkurse", path: "/intensivkurse" },
          { label: "Punkte abbauen", path: "/punkte-abbauen" },
          { label: "Blog", path: "/blogs" },
          { label: "Jetzt anmelden", path: "/anmelden" },
        ],
      },
      {
        heading: "Führerschein machen",
        links: [
          { label: "Autoführerschein", path: "/auto-fuehrerschein" },
          { label: "Auto-Anhänger", path: "/auto-anhaenger" },
          { label: "Motorradführerschein", path: "/motorrad-fuehrerschein" },
        ],
      },
      {
        heading: "Rechtliches",
        links: [
          { label: "Impressum", path: "/impressum" },
          { label: "Datenschutz", path: "/datenschutz" },
          { label: "AGB", path: "/agb" },
        ],
      },
    ],
  },
  en: {
    title: "Sitemap",
    sections: [
      {
        heading: "Main Pages",
        links: [
          { label: "Home", path: "" },
          { label: "Prices", path: "/preise" },
          { label: "Our Appointments", path: "/theoriekurs" },
          { label: "Intensive Courses", path: "/intensivkurse" },
          { label: "Reduce Points", path: "/punkte-abbauen" },
          { label: "Blog", path: "/blogs" },
          { label: "Register Now", path: "/anmelden" },
        ],
      },
      {
        heading: "Get Your Driver's License",
        links: [
          { label: "Car License", path: "/auto-fuehrerschein" },
          { label: "Car Trailer", path: "/auto-anhaenger" },
          { label: "Motorcycle License", path: "/motorrad-fuehrerschein" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Imprint", path: "/impressum" },
          { label: "Privacy Policy", path: "/datenschutz" },
          { label: "Terms and Conditions", path: "/agb" },
        ],
      },
    ],
  },
  ar: {
    title: "خريطة الموقع",
    sections: [
      {
        heading: "الصفحات الرئيسية",
        links: [
          { label: "الصفحة الرئيسية", path: "" },
          { label: "الأسعار", path: "/preise" },
          { label: "مواعيدنا", path: "/theoriekurs" },
          { label: "دورات مكثفة", path: "/intensivkurse" },
          { label: "تخفيض النقاط", path: "/punkte-abbauen" },
          { label: "المدونة", path: "/blogs" },
          { label: "سجل الآن", path: "/anmelden" },
        ],
      },
      {
        heading: "احصل على رخصة القيادة",
        links: [
          { label: "رخصة السيارة", path: "/auto-fuehrerschein" },
          { label: "مقطورة السيارة", path: "/auto-anhaenger" },
          { label: "رخصة الدراجة النارية", path: "/motorrad-fuehrerschein" },
        ],
      },
      {
        heading: "قانوني",
        links: [
          { label: "الإشعار القانوني", path: "/impressum" },
          { label: "سياسة الخصوصية", path: "/datenschutz" },
          { label: "الشروط والأحكام", path: "/agb" },
        ],
      },
    ],
  },
} as const;

export default async function SitemapPage({ params }: SitemapPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = SITEMAP_CONTENT[locale];
  const isArabic = locale === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className={`min-h-screen bg-white px-4 pb-16 pt-40 ${isArabic ? "text-right" : "text-left"}`}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 border-b-4 border-[#F5BB00] pb-4 text-4xl font-bold text-black">
          {content.title}
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-4 text-lg font-bold italic text-black">
                {section.heading}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={`/${locale}${link.path}`}
                      className="text-gray-600 transition-colors duration-200 hover:text-[#F5BB00]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
