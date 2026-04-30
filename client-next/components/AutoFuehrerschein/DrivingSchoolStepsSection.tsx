"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaBook,
  FaCar,
  FaClipboardCheck,
  FaEye,
  FaGraduationCap,
  FaIdCard,
  FaTrophy,
  FaUserPlus,
} from "react-icons/fa";
import type {
  AutoFuehrerscheinStep,
  AutoFuehrerscheinStepsContent,
} from "@/components/AutoFuehrerschein/types";
import type { Locale } from "@/types/i18n";

type DrivingSchoolStepsSectionProps = {
  content: AutoFuehrerscheinStepsContent;
  locale: Locale;
};

const icons = {
  "user-plus": FaUserPlus,
  eye: FaEye,
  "id-card": FaIdCard,
  book: FaBook,
  "clipboard-check": FaClipboardCheck,
  car: FaCar,
  "graduation-cap": FaGraduationCap,
  trophy: FaTrophy,
} as const;

type LicenseType = "automatic" | "automaticManual";

function StepCard({ step }: { step: AutoFuehrerscheinStep }) {
  const Icon = icons[step.icon];
  return (
    <motion.div
      className="flex-1 ml-4 md:ml-8"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl md:p-6">
        <div className="flex items-start gap-4">
          <div className="flex flex-shrink-0 flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5BB00] text-sm font-bold text-black group-hover:scale-110 md:h-14 md:w-14 md:text-base transition-transform duration-300">
              {step.id}
            </div>
            <Icon className="text-lg text-[#F5BB00] group-hover:scale-110 md:text-2xl transition-transform duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="mb-1 text-base font-bold text-black group-hover:text-[#F5BB00] md:text-xl transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DrivingSchoolStepsSection({
  content,
  locale,
}: DrivingSchoolStepsSectionProps) {
  const [licenseType, setLicenseType] = useState<LicenseType>("automatic");
  const currentSteps = content.items[licenseType];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto w-[95%] md:w-[80%] max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-black md:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            {content.subtitle}
          </p>
        </div>

        {/* Toggle – relative auf dem äußeren UND inneren div */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-sm">
            <div className="relative flex rounded-xl bg-gray-100 p-1 shadow">
              <motion.div
                className="absolute top-1 bottom-1 rounded-lg bg-[#F5BB00] shadow"
                animate={{
                  left: licenseType === "automatic" ? "4px" : "50%",
                  width: "calc(50% - 4px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              {(["automatic", "automaticManual"] as LicenseType[]).map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setLicenseType(type)}
                    className={`relative z-10 flex-1 rounded-lg px-3 py-2.5 text-sm font-bold transition-colors ${
                      licenseType === type ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {content.options[type]}
                  </button>
                ),
              )}
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-[#F5BB00]">
              {licenseType === "automatic"
                ? content.hints.automatic
                : content.hints.automaticManual}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertikale Linie – zentriert auf den Dots (die 20px breit sind → left: 10px) */}
          <div className="absolute left-[10px] top-0 bottom-0 z-0 w-0.5 bg-gray-200 md:left-[14px]" />

          {/* START-Kreis – normales Flex-Element, kein absolute */}
          <div className="relative mb-6 flex items-center gap-4">
            <div className="z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5BB00] shadow md:h-7 md:w-7">
              <span className="text-[8px] font-black text-black md:text-[10px]">
                {content.startLabel}
              </span>
            </div>
          </div>

          {/* Steps */}
          {currentSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative mb-5 flex items-center last:mb-0"
            >
              {/* Dot – auch normales Flex-Element, kein absolute */}
              <motion.div
                className="z-10 flex h-5 w-5 shrink-0 rounded-full border-2 border-white bg-[#F5BB00] shadow md:h-7 md:w-7"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              />
              <StepCard step={step} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/anmelden`}
            className="inline-flex items-center gap-2 rounded-full bg-[#F5BB00] px-8 py-3 text-base font-bold text-black shadow-lg transition-all hover:bg-yellow-400 hover:shadow-xl"
          >
            {licenseType === "automatic"
              ? content.cta.automatic
              : content.cta.automaticManual}
          </Link>
        </div>
      </div>
    </section>
  );
}
