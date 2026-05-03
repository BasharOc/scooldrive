import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import type { PersonalApproachContent } from "@/components/Homepage/types";
import type { Locale } from "@/types/i18n";

type PersonalApproachSectionProps = {
  content: PersonalApproachContent;
  locale: Locale;
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

          {/* Feature List */}
          <div className="mb-10 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
            {content.features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-2 text-center"
              >
                <FaCheck className="text-[#F5BB00]" />
                <div>
                  <p className="text-[clamp(1rem,1.05vw,1.2rem)] font-bold text-black">
                    {feature.title}
                  </p>
                  <p className="mt-1 text-[clamp(0.85rem,0.9vw,1rem)] leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3-Step Process */}
          <div className="mt-4">
            <h3
              className={`mb-8 text-[clamp(1.25rem,1.6vw,1.9rem)] font-bold text-black ${
                isArabic ? "text-right" : "text-center"
              }`}
            >
              {content.stepsHeading}
            </h3>

            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Connector line – desktop only */}
              <div className="absolute top-7 left-[20%] right-[20%] hidden h-px bg-[#F5BB00]/50 md:block" />

              {content.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F5BB00] text-xl font-black text-black shadow-[0_4px_14px_rgba(245,187,0,0.35)]">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="mb-1.5 text-[clamp(1rem,1.1vw,1.25rem)] font-bold text-black">
                      {step.title}
                    </h4>
                    <p className="text-[clamp(0.85rem,0.9vw,1rem)] leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href={`/${locale}${content.ctaPath}`}
                className={`inline-flex items-center gap-3 rounded-2xl bg-[#F5BB00] px-6 py-3 text-base font-bold text-black shadow-[0_18px_30px_rgba(245,187,0,0.18)] transition-colors hover:bg-yellow-400 ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <span>{content.cta}</span>
                <FaArrowRight
                  className={`text-sm ${isArabic ? "rotate-180" : ""}`}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
