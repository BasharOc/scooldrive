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
    <section className="relative flex min-h-screen items-center overflow-hidden px-[5vw]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/motorrad-video.mp4"
        style={{ height: "100vh" }}
      />

      <div className="absolute inset-0 z-10 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`relative z-20 mx-6 flex flex-col items-start gap-6 ${
          isArabic ? "w-[100vw] text-right" : "max-w-[90vw] text-left"
        }`}
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <span className="rounded bg-black px-4 py-1 text-lg font-bold text-yellow-400 shadow-lg">
          {content.badge}
        </span>

        <h1 className="text-4xl font-extrabold leading-tight tracking-wide uppercase shadow-xl sm:text-5xl lg:text-6xl">
          {content.title.map((line) => (
            <span
              key={line}
              className="block rounded-md bg-black px-[0.2em] py-[0.1em] text-2xl text-white sm:text-xl lg:text-5xl"
            >
              {line}
            </span>
          ))}
        </h1>

        <ul className="list-disc pl-6 text-lg font-bold text-white sm:text-xl lg:text-2xl">
          {content.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(245, 187, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={`/${locale}/anmelden`}
            className={`flex items-center rounded-xl bg-[#F5BB00] px-8 py-4 text-lg font-bold text-black shadow-lg transition-all duration-300 hover:bg-yellow-400 ${
              isArabic ? "flex-row-reverse space-x-reverse space-x-3" : "space-x-3"
            }`}
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <span>{content.buttonText}</span>
            <span className="text-xl">{isArabic ? "←" : "→"}</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
