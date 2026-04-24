"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import type { AutoAnhaengerStepsContent } from "@/components/AutoAnhaenger/types";
import type { Locale } from "@/types/i18n";

type StepsSectionProps = {
  content: AutoAnhaengerStepsContent;
  locale: Locale;
};

type LicenseState = "withoutLicense" | "withLicense";

export default function StepsSection({ content, locale }: StepsSectionProps) {
  const [licenseState, setLicenseState] = useState<LicenseState>("withoutLicense");
  const currentSteps = content.items[licenseState];

  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            {content.title} <span className="text-[#F5BB00]">{content.titleHighlight}</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="flex rounded-xl bg-gray-100 p-1 shadow-lg">
              <motion.div
                className="absolute top-1 bottom-1 rounded-lg bg-[#F5BB00] shadow-md"
                animate={{
                  left: licenseState === "withoutLicense" ? "4px" : "50%",
                  width: "calc(50% - 4px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              <motion.button
                onClick={() => setLicenseState("withoutLicense")}
                className={`relative z-10 rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300 md:text-base ${
                  licenseState === "withoutLicense"
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {content.options.withoutLicense}
              </motion.button>

              <motion.button
                onClick={() => setLicenseState("withLicense")}
                className={`relative z-10 rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300 md:text-base ${
                  licenseState === "withLicense"
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {content.options.withLicense}
              </motion.button>
            </div>

            {licenseState === "withLicense" && (
              <motion.div
                className="absolute top-full left-1/2 mt-3 -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-base font-semibold text-[#F5BB00] md:text-lg">
                  {content.noTheoryRequired}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          key={licenseState}
        >
          <div className="absolute top-0 bottom-0 left-4 z-0 w-0.5 bg-gray-200 md:left-8" />

          <motion.div
            className="relative mb-8 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00] shadow-lg md:h-16 md:w-16">
              <span className="text-xs font-bold text-black md:text-sm">
                {content.startLabel}
              </span>
            </div>
          </motion.div>

          {currentSteps.map((step, index) => (
            <div key={step.id} className="relative mb-8 flex items-center last:mb-0">
              <motion.div
                className="absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-[#F5BB00] shadow-lg md:left-8 md:h-6 md:w-6 md:border-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              />

              <motion.div
                className="ml-10 flex-1 md:ml-20"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="group rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl md:p-8">
                  <div className="flex flex-col space-y-4 md:flex-row md:items-start md:space-x-6 md:space-y-0">
                    <div className="flex flex-shrink-0 items-center space-x-4 md:flex-col md:items-start md:space-x-0">
                      <div className="mb-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00] text-lg font-bold text-black transition-transform duration-300 group-hover:scale-110 md:mb-4 md:h-16 md:w-16 md:text-xl">
                        {step.id}
                      </div>
                      <div className="flex justify-center text-[#F5BB00] transition-transform duration-300 group-hover:scale-110">
                        <FaUserPlus className="text-xl md:text-3xl" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-black transition-colors duration-300 group-hover:text-[#F5BB00] md:mb-3 md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-gray-600 md:mb-4 md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(245, 187, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href={`/${locale}/anmelden`}
              className="inline-block rounded-full bg-[#F5BB00] px-10 py-4 text-lg font-bold text-black shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {licenseState === "withLicense"
                ? content.cta.withLicense
                : content.cta.withoutLicense}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
