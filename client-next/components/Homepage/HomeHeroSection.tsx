import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import type { HeroContent } from "@/components/Homepage/types";
import type { Locale } from "@/types/i18n";

type HomeHeroSectionProps = {
  content: HeroContent;
  locale: Locale;
  warningEnabled?: boolean;
};

export default function HomeHeroSection({
  content,
  locale,
  warningEnabled = false,
}: HomeHeroSectionProps) {
  const isArabic = locale === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-36 md:px-8">
        <div
          className={`w-full max-w-4xl ${isArabic ? "ml-auto text-right" : ""}`}
        >
          {/* Badges */}
          <div
            className={`mb-6 flex flex-wrap items-center gap-3 justify-start`}
          >
            <span className="rounded-full bg-[#F5BB00] px-4 py-2 text-sm font-bold tracking-wide text-black">
              {content.badge}
            </span>
            {warningEnabled && content.warning && (
              <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                {content.warning}
              </span>
            )}
          </div>

          {/* Titel */}
          <div className={`mb-4 flex flex-col items-start`}>
            <span className="inline-block rounded-t-xl bg-black px-5 py-3 text-xl leading-tight font-bold text-white sm:text-4xl lg:text-4xl">
              {content.title1}
            </span>
            <span className="inline-block rounded-b-xl rounded-tr-xl bg-black px-5 py-3 text-xl leading-tight font-bold text-white sm:text-4xl lg:text-4xl">
              {content.title2}
            </span>
          </div>

          {/* Features */}
          <div className="mb-6 space-y-3">
            {content.features.map((feature) => (
              <div key={feature} className={`flex items-center gap-3`}>
                <div className="rounded-full bg-[#F5BB00] p-2 shrink-0">
                  <FaCheck className="text-sm text-black" />
                </div>
                <span className="text-lg font-bold italic text-white sm:text-xl">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`flex `}>
            <Link
              href={`/${locale}/anmelden`}
              className="inline-flex items-center gap-3 rounded-xl bg-[#F5BB00] px-8 py-4 text-lg font-bold text-black transition-all hover:bg-yellow-400"
            >
              {isArabic && <span className="text-xl">←</span>}
              <span>{content.cta}</span>
              {!isArabic && <span className="text-xl">→</span>}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
