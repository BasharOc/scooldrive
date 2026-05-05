import { FaCheck } from "react-icons/fa";
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
  const header2Base = content.header2.replace(content.header2Highlight, "");

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto w-[95%] max-w-[1920px] px-4 md:w-[80%] md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className={isArabic ? "text-right" : ""}>
            <h2 className="text-[clamp(2rem,4vw,4.5rem)] font-black italic leading-[0.98] text-black">
              <span className="block text-[#F5BB00]">{content.header1}</span>
              <span className="mt-2 block">{header2Base}</span>
              <span className="relative mt-2 inline-block">
                {content.header2Highlight}
                <span
                  className={`absolute h-2 w-full rounded-full bg-[#F5BB00] ${
                    isArabic ? "-bottom-2 right-0" : "-bottom-2 left-0"
                  }`}
                />
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-[clamp(1rem,1.1vw,1.3rem)] font-medium leading-relaxed text-slate-600">
              {content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {content.features.map((feature) => (
              <div
                key={feature.title}
                className={`rounded-2xl border border-[#E7E8EC] bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-1 md:p-6 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <div
                  className={`mb-4 flex items-center gap-3 ${
                    isArabic ? "flex-row-reverse" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5BB00] text-black">
                    <FaCheck className="text-sm" />
                  </span>
                  <p className="text-[clamp(1rem,1.05vw,1.25rem)] font-bold text-black">
                    {feature.title}
                  </p>
                </div>
                <p className="text-[clamp(0.9rem,0.92vw,1.05rem)] leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <h3
            className={`mb-8 text-[clamp(1.45rem,2vw,2.6rem)] font-black italic leading-tight text-black ${
              isArabic ? "text-right" : "text-center"
            }`}
          >
            {content.stepsHeading}
          </h3>

          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            <div className="absolute left-[16%] right-[16%] top-8 hidden h-0.5 bg-gray-200 md:block" />

            {content.steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative rounded-2xl border border-[#E7E8EC] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-7 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <div
                  className={`mb-5 flex items-center gap-4 ${
                    isArabic ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F5BB00] text-2xl font-black text-black shadow-[0_14px_25px_rgba(245,187,0,0.24)]">
                    {i + 1}
                  </div>
                  <h4 className="text-[clamp(1.05rem,1.15vw,1.35rem)] font-bold text-black">
                    {step.title}
                  </h4>
                </div>
                <p className="text-[clamp(0.9rem,0.95vw,1.08rem)] leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
