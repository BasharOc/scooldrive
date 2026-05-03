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

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-4 pb-10 pt-24 md:px-8 md:pb-16 md:pt-32">
        <div
          className={`w-full max-w-4xl pt-6 md:pt-8 ${
            isArabic ? "ml-auto pr-4 text-right md:pr-8" : "pl-4 md:pl-8"
          }`}
        >
          {warningEnabled && content.warning && (
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                {content.warning}
              </span>
            </div>
          )}

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

          <p className="mb-6 max-w-2xl text-lg font-bold text-white md:text-xl">
            {content.subtitle}
          </p>

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

          <a
            href="#reviews"
            className="mt-4 block max-w-xl text-sm font-bold text-white underline decoration-white/80 decoration-2 underline-offset-4 transition-colors hover:text-[#F5BB00] hover:decoration-[#F5BB00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5BB00] md:text-base"
          >
            {content.socialProof}
          </a>
        </div>

        {/* Spacer damit Inhalt nicht am Boden klebt */}
        <div />
      </div>
    </section>
  );
}
