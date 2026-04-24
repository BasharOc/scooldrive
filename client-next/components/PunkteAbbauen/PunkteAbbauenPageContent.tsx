"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBook,
  FaCar,
  FaCarCrash,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaExclamationTriangle,
  FaEye,
  FaGraduationCap,
  FaInfoCircle,
  FaQuestionCircle,
  FaRoad,
  FaRoute,
  FaShieldAlt,
  FaStar,
  FaStopwatch,
  FaTrophy,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import type { PunkteAbbauenContent } from "@/messages/punkte-abbauen";
import type { Locale } from "@/types/i18n";

type PunkteAbbauenPageContentProps = {
  content: PunkteAbbauenContent;
  locale: Locale;
};

const structureIcons = {
  "graduation-cap": FaGraduationCap,
  route: FaRoute,
  users: FaUsers,
  stopwatch: FaStopwatch,
} as const;

const processIcons = {
  "user-plus": FaUserPlus,
  book: FaBook,
  car: FaCar,
  "graduation-cap": FaGraduationCap,
  trophy: FaTrophy,
} as const;

const topicIcons = {
  shield: FaShieldAlt,
  warning: FaExclamationTriangle,
  road: FaRoad,
  eye: FaEye,
} as const;

export default function PunkteAbbauenPageContent({
  content,
  locale,
}: PunkteAbbauenPageContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="mt-[80px] min-h-screen bg-gray-50 px-4 pt-20 pb-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-[#F5BB00]">ASF</span>{" "}
            <span className="text-black">AUFBAUSEMINAR</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            {content.header.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                    <FaInfoCircle className="text-xl text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-black md:text-3xl">
                    {content.intro.title}
                  </h2>
                </div>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  {content.intro.description}
                </p>

                <div className="mb-4 flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5BB00]">
                    <FaQuestionCircle className="text-sm text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black">
                    {content.intro.whenTitle}
                  </h3>
                </div>
                <p className="leading-relaxed text-gray-600">
                  {content.intro.whenText}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-80 w-full max-w-md overflow-hidden rounded-2xl">
                  <Image
                    src={content.intro.imageSrc}
                    alt={content.intro.imageAlt}
                    width={900}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.violations.title}
              </h2>
              <p className="text-lg text-gray-600">{content.violations.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gray-100 p-6">
                <div className="mb-4 flex items-center">
                  <FaCarCrash className="mr-3 text-xl text-gray-700" />
                  <h3 className="font-bold text-gray-800">
                    {content.violations.aViolations.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  {content.violations.aViolations.subtitle}
                </p>
                <ul className="space-y-2">
                  {content.violations.aViolations.examples.map((example) => (
                    <li key={example} className="flex items-center text-gray-700">
                      <FaCheckCircle className="mr-2 flex-shrink-0 text-sm text-[#F5BB00]" />
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-gray-100 p-6">
                <div className="mb-4 flex items-center">
                  <FaExclamationTriangle className="mr-3 text-xl text-gray-600" />
                  <h3 className="font-bold text-gray-800">
                    {content.violations.bViolations.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  {content.violations.bViolations.subtitle}
                </p>
                <ul className="space-y-2">
                  {content.violations.bViolations.examples.map((example) => (
                    <li key={example} className="flex items-center text-gray-700">
                      <FaCheckCircle className="mr-2 flex-shrink-0 text-sm text-[#F5BB00]" />
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.structure.title}
              </h2>
              <p className="text-lg text-gray-600">{content.structure.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.structure.cards.map((card) => {
                const Icon = structureIcons[card.icon];

                return (
                  <div key={card.title} className="rounded-xl bg-gray-100 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                      <Icon className="text-black" />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800">{card.title}</h3>
                    <p className="mb-2 text-sm text-gray-600">{card.description}</p>
                    {card.meta ? <p className="mb-2 text-xs text-gray-500">{card.meta}</p> : null}
                    {card.badge ? (
                      <span className="rounded-full bg-[#F5BB00] px-3 py-1 text-xs font-bold text-black">
                        {card.badge}
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
              {content.process.title}
            </h2>
            <p className="text-lg text-gray-600">{content.process.subtitle}</p>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute top-0 bottom-0 left-8 z-0 w-0.5 bg-gray-300" />

            {content.process.steps.map((step, index) => {
              const Icon = processIcons[step.icon];

              return (
                <div
                  key={step.title}
                  className="relative mb-8 flex items-center last:mb-0"
                >
                  <motion.div
                    className="absolute left-8 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-[#F5BB00] shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  />

                  <motion.div
                    className="ml-20 flex-1"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-start space-x-6">
                        <div className="flex flex-shrink-0 flex-col items-center">
                          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5BB00] text-xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
                            {index + 1}
                          </div>
                          <div className="text-gray-600 transition-colors duration-300 group-hover:text-[#F5BB00]">
                            <Icon className="text-2xl md:text-3xl" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 group-hover:text-[#F5BB00] md:text-2xl">
                            {step.title}
                          </h3>
                          <p className="mb-2 text-base leading-relaxed text-gray-600 md:text-lg">
                            {step.description}
                          </p>
                          <p className="text-sm italic text-gray-500">{step.details}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 md:hidden">
            {content.process.steps.map((step, index) => {
              const Icon = processIcons[step.icon];

              return (
                <motion.div
                  key={step.title}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.08 }}
                >
                  <div className="rounded-2xl bg-white p-6 shadow-lg">
                    <div className="mb-4 flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00] text-lg font-bold text-black">
                        {index + 1}
                      </div>
                      <div className="text-gray-600">
                        <Icon className="text-2xl" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-black">{step.title}</h3>
                    <p className="mb-2 text-gray-600">{step.description}</p>
                    <p className="text-sm italic text-gray-500">{step.details}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.topics.title}
              </h2>
              <p className="text-lg text-gray-600">{content.topics.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.topics.items.map((topic, index) => {
                const Icon = topicIcons[topic.icon];

                return (
                  <motion.div
                    key={topic.title}
                    className="rounded-xl bg-gray-100 p-6 text-center transition-shadow duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.08 }}
                  >
                    <div className="mb-4 flex justify-center text-[#F5BB00]">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-800">{topic.title}</h3>
                    <p className="text-sm text-gray-600">{topic.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.advantages.title}
              </h2>
              <p className="text-lg text-gray-600">{content.advantages.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.advantages.items.map((item) => (
                <div key={item.title} className="rounded-xl bg-gray-100 p-6 text-center">
                  <h3 className="mb-2 font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                  {content.requirements.title}
                </h2>
                <p className="mb-6 text-lg text-gray-600">{content.requirements.subtitle}</p>
                <div className="space-y-3">
                  {content.requirements.items.map((item) => (
                    <div key={item} className="flex items-start">
                      <FaCheckCircle className="mt-1 mr-3 flex-shrink-0 text-[#F5BB00]" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-orange-50 p-6">
                <div className="mb-4 flex items-center">
                  <FaExclamationTriangle className="mr-3 text-xl text-orange-500" />
                  <h3 className="text-xl font-bold text-orange-800">
                    {content.requirements.warningTitle}
                  </h3>
                </div>
                <p className="leading-relaxed text-orange-700">
                  {content.requirements.warningText}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                  {content.pricing.title}
                </h2>
                <h3 className="mb-6 text-2xl font-bold text-gray-800">
                  {content.pricing.includedTitle}
                </h3>
                <div className="space-y-4">
                  {content.pricing.services.map((service) => (
                    <div key={service} className="flex items-start">
                      <FaCheckCircle className="mt-1 mr-3 flex-shrink-0 text-[#F5BB00]" />
                      <span className="text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-[#F5BB00] to-[#e5a800] p-6 text-center">
                <FaStar className="mx-auto mb-4 text-4xl text-black" />
                <h3 className="mb-4 text-2xl font-bold text-black">
                  {content.pricing.packageTitle}
                </h3>
                <div className="mb-4 text-4xl font-bold text-black">
                  {content.pricing.price}
                </div>
                <p className="mb-6 text-black opacity-90">
                  {content.pricing.packageDescription}
                </p>
                <div className="space-y-2 text-sm text-black">
                  {content.pricing.extras.map((extra) => (
                    <p key={extra}>{extra}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="rounded-2xl bg-white p-6 md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
                {content.faq.title}
              </h2>
              <p className="text-lg text-gray-600">{content.faq.subtitle}</p>
            </div>

            <div className="space-y-4">
              {content.faq.items.map((item, index) => (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-xl border border-gray-200"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full cursor-pointer items-center justify-between bg-gray-50 px-6 py-4 text-left transition-colors duration-200 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <FaQuestionCircle className="mr-3 text-[#F5BB00]" />
                      <span className="font-semibold text-black">
                        {item.question}
                      </span>
                    </div>
                    {openFaq === index ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white px-6 py-4">
                      <p className="leading-relaxed text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">
            {content.cta.title}
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/${locale}/anmelden`}
              className="inline-block rounded-full bg-[#F5BB00] px-10 py-4 text-lg font-bold text-black shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {content.cta.button}
            </Link>
          </motion.div>
          <p className="mt-6 text-lg text-gray-600">{content.cta.subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
}
