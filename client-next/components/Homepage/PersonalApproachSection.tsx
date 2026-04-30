import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaCog, FaUser } from "react-icons/fa";
import type { PersonalApproachContent } from "@/components/Homepage/types";
import type { Locale } from "@/types/i18n";

type PersonalApproachSectionProps = {
  content: PersonalApproachContent;
  locale: Locale;
};

const getFeatureIcon = (
  icon: PersonalApproachContent["features"][number]["icon"],
) => {
  if (icon === "calendar")
    return <FaCalendarAlt className="text-2xl text-black" />;
  if (icon === "gear") return <FaCog className="text-2xl text-black" />;
  return <FaUser className="text-2xl text-black" />;
};

export default function PersonalApproachSection({
  content,
  locale,
}: PersonalApproachSectionProps) {
  const isArabic = locale === "ar";

  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 md:py-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-[#F5BB00] blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-[#F5BB00] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-[95%] md:w-[80%] max-w-[1320px] px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-[clamp(1.9rem,3vw,3.5rem)] font-bold leading-tight text-black">
              <span className="text-[#F5BB00]">{content.header1}</span> –
              <br />
              <span>
                {content.header2.replace(content.header2Highlight, "")}
                <span className="relative inline-block font-bold text-black">
                  {content.header2Highlight}
                  <span
                    className={`absolute h-1 w-full rounded bg-[#F5BB00] ${isArabic ? "-bottom-2" : "bottom-1"} left-0`}
                  />
                </span>
              </span>
            </h2>
            <p className="mx-auto max-w-4xl text-[clamp(1rem,1.05vw,1.35rem)] leading-relaxed text-slate-600">
              {content.description}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-gray-100 bg-white p-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.1)]"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F5BB00]">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="mb-2 text-[clamp(1.05rem,1.1vw,1.35rem)] font-bold text-black">
                  {feature.title}
                </h3>
                <p className="text-[clamp(0.85rem,0.9vw,1rem)] leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          {/* Bottom Card – neu gestaltet */}
          <div className="mb-6 overflow-hidden rounded-[1.8rem] border border-gray-100 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
            {/* Gelber Akzent-Streifen oben */}
            <div className="h-1.5 w-full bg-[#F5BB00]" />

            <div className="px-6 py-8 md:px-12 md:py-10">
              {/* Haupttext */}
              <p className="mx-auto max-w-5xl text-center text-[clamp(1rem,1.1vw,1.35rem)] leading-relaxed text-slate-600">
                {content.bottomText1}
              </p>

              {/* Highlight-Statement */}
              <div className="my-6 flex justify-center">
                <div className="inline-block rounded-2xl bg-gray-50 border border-gray-100 px-6 py-4 text-center">
                  <p className="text-[clamp(1.2rem,1.4vw,1.6rem)] font-bold text-black">
                    {content.bottomText3}
                  </p>
                </div>
              </div>

              {/* Subtext */}
              <p className="mx-auto max-w-5xl text-center text-[clamp(0.9rem,0.95vw,1.05rem)] italic leading-relaxed text-slate-500">
                {content.bottomText2}
              </p>

              {/* CTA */}
              <div className="mt-7 flex justify-center">
                <Link
                  href={`/${locale}${content.ctaPath}`}
                  className={`inline-flex items-center gap-3 rounded-2xl bg-[#F5BB00] px-6 py-3 text-base font-bold text-black shadow-[0_18px_30px_rgba(245,187,0,0.18)] transition-colors hover:bg-yellow-400 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <span>{content.cta}</span>
                  <FaArrowRight
                    className={`text-sm ${isArabic ? "rotate-180" : ""}`}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Closing – schöner verpackt */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#F5BB00]/30 bg-[#F5BB00]/10 px-6 py-3">
              <span className="text-lg">🌟</span>
              <p className="text-[clamp(1rem,1.1vw,1.25rem)] font-bold text-[#F5BB00]">
                {content.closing}
              </p>
              <span className="text-lg">🌟</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
