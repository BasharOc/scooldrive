import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCar,
  FaCarSide,
  FaMotorcycle,
  FaTrailer,
} from "react-icons/fa";
import InfoTooltip from "@/components/shared/InfoTooltip";
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
          style={{ width: "3em", height: "3em" }}
        />
      );
    }
    if (icon === "motorcycle") {
      return (
        <FaMotorcycle
          className="text-[#F5BB00]"
          style={{ width: "3em", height: "3em" }}
        />
      );
    }
    return (
      <span
        className={`flex items-end gap-1 text-[#F5BB00] ${
          isArabic ? "flex-col" : ""
        }`}
      >
        {isArabic ? (
          <>
            <FaCarSide className="text-[40px]" />
            <FaTrailer className="text-[40px]" />
          </>
        ) : (
          <>
            <FaTrailer className="text-[40px]" />
            <FaCarSide className="text-[40px]" />
          </>
        )}
      </span>
    );
  };

  return (
    <section className="bg-white py-16 md:py-24">
      {/* Mobile: 95%, Desktop: 80% */}
      <div className="mx-auto w-[95%] md:w-[80%] max-w-[1920px] px-4 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="inline-block w-full max-w-[640px] rounded-t-xl bg-black px-5 py-2.5 text-[clamp(1.2rem,2vw,2.2rem)] font-bold leading-tight text-white whitespace-nowrap">
                {content.header1}
              </h2>
              <span className="mt-0 inline-block w-full max-w-[640px] rounded-b-xl bg-black px-4 pb-2.5 pt-1.5 text-[clamp(1rem,1.6vw,1.8rem)] font-bold leading-tight text-white">
                {content.header2}
              </span>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/fuhrerschein_gold_app_framed.svg"
                  alt="Führerschein Lern-App Screenshot"
                  width={384}
                  height={660}
                  className="h-auto w-52 drop-shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
                />

                <InfoTooltip
                  position="top-right"
                  className="absolute bottom-[2%] -right-14"
                  content={
                    <div>
                      <p className="mb-2 text-sm font-bold text-black">
                        {content.appTooltip.title}
                      </p>
                      <p className="mb-3 text-sm leading-relaxed text-gray-700">
                        {content.appTooltip.body}
                      </p>
                      <p className="text-xs text-gray-500">
                        {content.appTooltip.priceNote}{" "}
                        <Link
                          href={`/${locale}/preise`}
                          className="font-semibold text-yellow-700 hover:underline"
                        >
                          {content.appTooltip.pricesLink}
                        </Link>
                      </p>
                    </div>
                  }
                />
              </div>
            </div>

            {/* CTA Button – kleiner */}
            <div className="flex justify-center">
              <Link
                href={`/${locale}/anmelden`}
                className="inline-flex min-w-[200px] justify-center rounded-2xl bg-[#F5BB00] px-5 py-3 text-base font-bold text-black shadow-[0_20px_30px_rgba(245,187,0,0.2)] transition-colors hover:bg-yellow-400"
              >
                {content.cta}
              </Link>
            </div>
          </div>

          {/* Right Side – Cards */}
          <div className="space-y-4 lg:pl-4">
            {content.options.map((option) => (
              <Link
                key={option.id}
                href={`/${locale}${option.path}`}
                className="group block rounded-[1.7rem] border border-[#E7E8EC] bg-white px-6 py-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-1"
              >
                {/* Icon rechts neben Text – flex row */}
                <div
                  className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  {/* Text */}
                  <div
                    className={`flex-1 ${isArabic ? "text-right" : "text-left"}`}
                  >
                    <h3 className="text-[clamp(1.1rem,1.4vw,1.8rem)] font-bold uppercase leading-tight text-black">
                      {option.title}
                    </h3>
                    <h4 className="mt-0.5 text-[clamp(0.85rem,0.95vw,1.2rem)] font-semibold text-slate-500">
                      {option.subtitle}
                    </h4>
                    <p className="mt-1 text-[clamp(0.85rem,0.9vw,1.1rem)] leading-relaxed text-slate-600">
                      {option.description}
                    </p>
                    <div
                      className={`mt-4 inline-flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}
                    >
                      <span className="text-[clamp(0.9rem,1vw,1.2rem)] font-bold text-[#F5BB00]">
                        {content.more}
                      </span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5BB00] text-black">
                        <FaArrowRight
                          className={`text-sm transition-transform ${
                            isArabic
                              ? "rotate-180 group-hover:-translate-x-0.5"
                              : "group-hover:translate-x-0.5"
                          }`}
                        />
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="shrink-0 flex items-center justify-center">
                    {getOptionIcon(option.icon)}
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
