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
    <section className="relative h-[100dvh] overflow-hidden">
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-4 pb-10 pt-28 md:px-8 md:pb-16 md:pt-36">
        <div
          className={`w-full max-w-4xl mt-[30px] ${isArabic ? "ml-auto text-right" : ""}`}
        >
          {/* Badge */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#F5BB00] px-4 py-1.5 text-sm font-bold tracking-wide text-black">
              {content.badge}
            </span>
            {warningEnabled && content.warning && (
              <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                {content.warning}
              </span>
            )}
          </div>

          {/* Titel – ein inline-Block, Hintergrund läuft nahtlos durch alle Zeilen */}
          <h1 className="mb-5">
            <span
              className="inline font-bold text-white text-2xl sm:text-4xl lg:text-4xl"
              style={{
                backgroundColor: "black",
                borderRadius: "8px",
                WebkitBoxDecorationBreak: "clone",
                boxDecorationBreak: "clone",
                padding: "4px 10px",
                lineHeight: "1.65",
              }}
            >
              {content.title1} {content.title2}
            </span>
          </h1>

          {/* Features */}
          <div className="mb-6 space-y-2">
            {content.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="rounded-full bg-[#F5BB00] p-1.5 shrink-0">
                  <FaCheck className="text-xs text-black" />
                </div>
                <span className="text-base font-bold italic text-white">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/${locale}/anmelden`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#F5BB00] px-6 py-3 text-base font-bold text-black transition-all hover:bg-yellow-400"
          >
            {isArabic && <span>←</span>}
            <span>{content.cta}</span>
            {!isArabic && <span>→</span>}
          </Link>
        </div>

        {/* Spacer damit Inhalt nicht am Boden klebt */}
        <div />
      </div>
    </section>
  );
}
