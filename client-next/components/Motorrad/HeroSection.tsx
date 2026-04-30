"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { MotorradHeroContent } from "@/components/Motorrad/types";
import type { Locale } from "@/types/i18n";

type HeroSectionProps = {
  content: MotorradHeroContent;
  locale: Locale;
};

export default function HeroSection({ content, locale }: HeroSectionProps) {
  const isArabic = locale === "ar";

  return (
    <section className="relative h-[100dvh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/motorrad-video.mp4"
      />
      <div className="absolute inset-0 z-10 bg-black/50" />

      <div className="relative z-20 mx-auto flex h-full w-[95%] max-w-7xl flex-col justify-between pb-10 pt-32 md:w-[80%] md:pb-16 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`flex flex-col gap-5 ${isArabic ? "items-end text-right" : "items-start text-left"}`}
          style={{ direction: isArabic ? "rtl" : "ltr" }}
        >
          <span className="rounded-full bg-[#F5BB00] px-4 py-1.5 text-sm font-bold text-black shadow-lg">
            {content.badge}
          </span>

          <h1
            className={`flex flex-col gap-1 text-2xl font-extrabold uppercase sm:text-4xl lg:text-5xl ${isArabic ? "items-end" : "items-start"}`}
          >
            {content.title.map((line) => (
              <span
                key={line}
                className="rounded-lg bg-black px-3 py-1 font-bold text-white"
              >
                {line}
              </span>
            ))}
          </h1>

          <ul className="space-y-2">
            {content.description.map((item) => (
              <li
                key={item}
                className={`flex items-center gap-3 text-base font-bold text-white sm:text-lg ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5BB00] text-xs text-black">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/${locale}/anmelden`}
              className={`inline-flex items-center gap-2 rounded-xl bg-[#F5BB00] px-6 py-3 text-base font-bold text-black shadow-lg transition-all hover:bg-yellow-400 ${isArabic ? "flex-row-reverse" : ""}`}
            >
              <span>{content.buttonText}</span>
              <span>{isArabic ? "←" : "→"}</span>
            </Link>
          </motion.div>
        </motion.div>
        <div />
      </div>
    </section>
  );
}
