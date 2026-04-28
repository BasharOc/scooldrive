import Link from "next/link";
import {
  FaArrowRight,
  FaCar,
  FaCarSide,
  FaMotorcycle,
  FaTrailer,
} from "react-icons/fa";
import type { LicenseOptionsContent } from "@/components/Homepage/types";
import type { Locale } from "@/types/i18n";

type LicenseOptionsSectionProps = {
  content: LicenseOptionsContent;
  locale: Locale;
};

export default function LicenseOptionsSection({
  content,
  locale,
}: LicenseOptionsSectionProps) {
  const isArabic = locale === "ar";

  const getOptionIcon = (
    icon: LicenseOptionsContent["options"][number]["icon"],
  ) => {
    if (icon === "car") {
      return (
        <FaCar
          className="text-[#F5BB00]"
          style={{ width: "4em", height: "4em" }}
        />
      );
    }

    if (icon === "motorcycle") {
      return (
        <FaMotorcycle
          className="text-[#F5BB00]"
          style={{ width: "4em", height: "4em" }}
        />
      );
    }

    return (
      <span className="flex items-end gap-1 text-[#F5BB00]">
        <>
          <FaCarSide className="text-[55px]" />
          <FaTrailer className="text-[55px]" />
        </>
      </span>
    );
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-[80%] max-w-[1920px] px-4 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Left Side - Legacy phone mockup with stacked black headline badges */}
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <span className="inline-block w-full max-w-[640px] rounded-t-xl bg-black px-5 py-2.5 text-[clamp(1.2rem,2vw,2.2rem)] font-bold leading-tight text-white whitespace-nowrap">
                {content.header1}
              </span>
              <span className="mt-0 inline-block w-full max-w-[640px] rounded-b-xl bg-black px-4 pb-2.5 pt-1.5 text-[clamp(1rem,1.6vw,1.8rem)] font-bold leading-tight text-white">
                {content.header2}
              </span>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="h-[400px] w-52 rounded-[2rem] bg-black p-2 shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-white">
                    <div className="flex items-center justify-between px-5 py-4 text-xs font-medium text-black">
                      <span>12:57</span>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-5 rounded-full bg-green-500" />
                        <span>100%</span>
                      </div>
                    </div>

                    <div className="px-4">
                      <div className="mb-6 rounded-2xl bg-gray-100 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-sm font-bold">PREMIUM</span>
                          <div className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                            -96%
                          </div>
                        </div>
                        <div className="text-right text-xs text-gray-500">
                          1100/1150
                        </div>
                      </div>

                      <div className="rounded-2xl bg-gray-100 p-4">
                        <h3 className="mb-3 text-sm font-bold text-black">
                          Theorie
                        </h3>
                        <div className="mb-3 h-28 rounded-lg bg-gradient-to-r from-green-400 to-blue-500" />
                        <div className="flex items-center justify-between text-sm text-black">
                          <span>Neue Fragen</span>
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 border-t border-black/20 bg-white px-6 py-4">
                      <div className="grid grid-cols-4 gap-4 text-center text-[11px] text-black">
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-8 w-8 rounded bg-[#F5BB00]" />
                          <span>Start</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-8 w-8 rounded bg-gray-300" />
                          <span>Lernen</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-8 w-8 rounded bg-gray-300" />
                          <span>Tests</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-8 w-8 rounded bg-gray-300" />
                          <span>Mehr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href={`/${locale}/anmelden`}
                className="inline-flex min-w-[250px] justify-center rounded-2xl bg-[#F5BB00] px-5 py-5 text-xl font-bold text-black shadow-[0_20px_30px_rgba(245,187,0,0.2)] transition-colors hover:bg-yellow-400"
              >
                {content.cta}
              </Link>
            </div>
          </div>

          {/* Right Side - Three broad legacy cards with icon in the top-right corner */}
          <div className="space-y-6 lg:pl-4">
            {content.options.map((option) => (
              <Link
                key={option.id}
                href={`/${locale}${option.path}`}
                className="group block rounded-[1.7rem] border border-[#E7E8EC] bg-white px-7 py-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-1"
              >
                <div
                  className={`grid items-start gap-6 ${
                    isArabic
                      ? "md:grid-cols-[140px_1fr]"
                      : "md:grid-cols-[1fr_140px]"
                  }`}
                >
                  <div
                    className={`max-w-[620px] ${isArabic ? "order-2 text-right" : "order-1 text-left"}`}
                  >
                    <h3 className="text-[clamp(1.35rem,1.55vw,2.1rem)] font-bold uppercase leading-tight text-black">
                      {option.title}
                    </h3>
                    <div className="mt-1 text-[clamp(1rem,1.05vw,1.4rem)] font-semibold text-slate-500">
                      {option.subtitle}
                    </div>
                    <p className="mt-1 text-[clamp(0.95rem,1vw,1.25rem)] leading-relaxed text-slate-600">
                      {option.description}
                    </p>

                    <div
                      className={`mt-6 inline-flex items-center gap-4 ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-[clamp(1rem,1.1vw,1.45rem)] font-bold text-[#F5BB00]">
                        {content.more}
                      </span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5BB00] text-black">
                        <FaArrowRight
                          className={`text-lg transition-transform ${
                            isArabic
                              ? "rotate-180 group-hover:-translate-x-0.5"
                              : "group-hover:translate-x-0.5"
                          }`}
                        />
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col gap-3 ${
                      isArabic ? "order-1 items-start" : "order-2 items-end"
                    }`}
                  >
                    <div className="flex h-[72px] w-full mt-[25%] items-center justify-center">
                      {getOptionIcon(option.icon)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
