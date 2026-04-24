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
  if (icon === "calendar") {
    return <FaCalendarAlt className="text-2xl text-black" />;
  }

  if (icon === "gear") {
    return <FaCog className="text-2xl text-black" />;
  }

  return <FaUser className="text-2xl text-black" />;
};

export default function PersonalApproachSection({
  content,
  locale,
}: PersonalApproachSectionProps) {
  const isArabic = locale === "ar";

  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-[#F5BB00] blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-[#F5BB00] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-[80%] max-w-[1320px] px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-[clamp(1.9rem,3vw,3.5rem)] font-bold leading-tight text-black">
              <span className="text-[#F5BB00]">{content.header1}</span> –
              <br />
              <span>
                {content.header2.replace(content.header2Highlight, "")}
                <span className="relative inline-block font-bold text-black">
                  {content.header2Highlight}
                  <span
                    className={`absolute h-1 w-full rounded bg-[#F5BB00] ${
                      isArabic ? "-bottom-2" : "bottom-1"
                    } left-0`}
                  />
                </span>
              </span>
            </h2>

            <p className="mx-auto max-w-4xl text-[clamp(1rem,1.05vw,1.35rem)] leading-relaxed text-slate-600">
              {content.description}
            </p>
          </div>

          {/* Features Grid */}
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

          {/* Bottom Content */}
          <div className="text-center">
            <div className="mb-5 rounded-[1.8rem] border border-gray-100 bg-white px-6 py-7 shadow-[0_18px_40px_rgba(15,23,42,0.1)] md:px-12 md:py-9">
              <p className="mx-auto max-w-5xl text-[clamp(1rem,1.1vw,1.35rem)] leading-relaxed text-slate-600">
                {content.bottomText1}
              </p>

              <p className="mt-6 text-[clamp(1.15rem,1.25vw,1.5rem)] font-bold text-black">
                {content.bottomText3}
              </p>

              <p className="mx-auto mt-2 max-w-5xl text-[clamp(0.9rem,0.95vw,1.05rem)] italic leading-relaxed text-slate-600">
                {content.bottomText2}
              </p>

              <div className="mt-5 flex justify-center">
                <Link
                  href={`/${locale}${content.ctaPath}`}
                  className={`inline-flex items-center gap-3 rounded-2xl bg-[#F5BB00] px-7 py-4 text-[clamp(1rem,1.05vw,1.25rem)] font-bold text-black shadow-[0_18px_30px_rgba(245,187,0,0.18)] transition-colors hover:bg-yellow-400 ${
                    isArabic ? "flex-row-reverse" : ""
                  }`}
                >
                  <span>{content.cta}</span>
                  <FaArrowRight
                    className={`text-lg ${isArabic ? "rotate-180" : ""}`}
                  />
                </Link>
              </div>
            </div>

            <p className="text-[clamp(1.1rem,1.2vw,1.4rem)] font-bold text-[#F5BB00]">
              {content.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
