"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaBook,
  FaCalculator,
  FaCar,
  FaCheckCircle,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaGraduationCap,
  FaMobileAlt,
  FaMoon,
  FaMotorcycle,
  FaRoad,
  FaTrailer,
  FaTruck,
} from "react-icons/fa";
import type { PreiseApiResponse } from "@/lib/remote-data";
import type { PreiseContent } from "@/messages/preise";
import type { Locale } from "@/types/i18n";

type PreisePageContentProps = {
  content: PreiseContent;
  locale: Locale;
  remoteData?: PreiseApiResponse | null;
};

type LicenseKey = "pkw" | "motorrad" | "anhanger" | "b96" | "b196";

type VariablePriceConfig = {
  hasPrerequisite: boolean;
  icon: "car" | "motorcycle" | "trailer";
  name: string;
  baseFee: number;
  learningApp: number;
  practiceLesson: number;
  theoryExam: number;
  practicalExam: number;
  specialDrives: {
    ruralRoad: { count: number; price: number };
    highway: { count: number; price: number };
    nightDrive: { count: number; price: number };
    total: number;
  };
};

type FixedPriceConfig = {
  fixedPrice: number;
  hasPrerequisite: boolean;
  icon: "motorcycle" | "trailer";
  name: string;
};

const getIcon = (icon: "car" | "motorcycle" | "trailer") => {
  if (icon === "car") {
    return <FaCar className="text-2xl" />;
  }
  if (icon === "motorcycle") {
    return <FaMotorcycle className="text-2xl" />;
  }
  return <FaTrailer className="text-2xl" />;
};

const buildPriceStructure = (
  content: PreiseContent,
  remoteData?: PreiseApiResponse | null
): Record<LicenseKey, VariablePriceConfig | FixedPriceConfig> => ({
  pkw: {
    name: content.licenses.pkw,
    icon: "car",
    baseFee: remoteData?.grundgebuehrTheoriekurs ?? 400,
    learningApp: remoteData?.lernapp ?? 85,
    practiceLesson: remoteData?.uebungsstundePKW ?? 70,
    specialDrives: {
      ruralRoad: { count: 5, price: remoteData?.sonderfahrtenPKW ?? 80 },
      highway: { count: 4, price: remoteData?.sonderfahrtenPKW ?? 80 },
      nightDrive: { count: 3, price: remoteData?.sonderfahrtenPKW ?? 80 },
      total: 12,
    },
    theoryExam: remoteData?.theorieprueung ?? 50,
    practicalExam: remoteData?.praxispruefung ?? 200,
    hasPrerequisite: false,
  },
  motorrad: {
    name: content.licenses.motorrad,
    icon: "motorcycle",
    baseFee: remoteData?.motorradKlasseAGrundgebuehr ?? 560,
    learningApp: remoteData?.lernapp ?? 85,
    practiceLesson: remoteData?.uebungsstundeMotorrad ?? 80,
    specialDrives: {
      ruralRoad: { count: 5, price: remoteData?.sonderfahrtenMotorrad ?? 90 },
      highway: { count: 4, price: remoteData?.sonderfahrtenMotorrad ?? 90 },
      nightDrive: { count: 3, price: remoteData?.sonderfahrtenMotorrad ?? 90 },
      total: 12,
    },
    theoryExam: remoteData?.theorieprueung ?? 50,
    practicalExam: remoteData?.praxispruefung ?? 200,
    hasPrerequisite: false,
  },
  anhanger: {
    name: content.licenses.anhanger,
    icon: "trailer",
    baseFee: 200,
    learningApp: remoteData?.lernapp ?? 85,
    practiceLesson: remoteData?.uebungsstundePKWAnhaenger ?? 85,
    specialDrives: {
      ruralRoad: {
        count: 3,
        price: remoteData?.sonderfahrtenPKWAnhaenger ?? 95,
      },
      highway: {
        count: 1,
        price: remoteData?.sonderfahrtenPKWAnhaenger ?? 95,
      },
      nightDrive: {
        count: 1,
        price: remoteData?.sonderfahrtenPKWAnhaenger ?? 95,
      },
      total: 5,
    },
    theoryExam: 0,
    practicalExam: remoteData?.praxispruefung ?? 200,
    hasPrerequisite: true,
  },
  b96: {
    name: content.licenses.b96,
    icon: "trailer",
    fixedPrice: remoteData?.anhaengerKlasseB96 ?? 850,
    hasPrerequisite: true,
  },
  b196: {
    name: content.licenses.b196,
    icon: "motorcycle",
    fixedPrice: remoteData?.leichtkraftradB196 ?? 950,
    hasPrerequisite: true,
  },
});

const isFixedConfig = (
  config: VariablePriceConfig | FixedPriceConfig
): config is FixedPriceConfig => "fixedPrice" in config;

export default function PreisePageContent({
  content,
  locale,
  remoteData,
}: PreisePageContentProps) {
  const [selectedLicense, setSelectedLicense] = useState<LicenseKey>("pkw");
  const structure = useMemo(
    () => buildPriceStructure(content, remoteData),
    [content, remoteData]
  );

  const currentConfig = structure[selectedLicense];

  const extraCosts = content.extraCosts.map((item) => ({
    ...item,
    value: remoteData?.[item.key] ?? item.fallbackPrice,
  }));

  const totals = useMemo(() => {
    if (isFixedConfig(currentConfig)) {
      return null;
    }

    const specialDriveDetails = {
      ruralRoad:
        currentConfig.specialDrives.ruralRoad.count *
        currentConfig.specialDrives.ruralRoad.price,
      highway:
        currentConfig.specialDrives.highway.count *
        currentConfig.specialDrives.highway.price,
      nightDrive:
        currentConfig.specialDrives.nightDrive.count *
        currentConfig.specialDrives.nightDrive.price,
    };

    const specialDrivesTotal =
      specialDriveDetails.ruralRoad +
      specialDriveDetails.highway +
      specialDriveDetails.nightDrive;

    const extraCostsTotal = extraCosts.reduce((sum, item) => sum + item.value, 0);
    const schoolTotal =
      currentConfig.baseFee +
      currentConfig.learningApp +
      specialDrivesTotal +
      currentConfig.theoryExam +
      currentConfig.practicalExam;

    return {
      specialDriveDetails,
      specialDrivesTotal,
      extraCostsTotal,
      schoolTotal,
      total: schoolTotal + extraCostsTotal,
    };
  }, [currentConfig, extraCosts]);

  return (
    <div className="mt-[80px] min-h-screen bg-gray-50 px-4 py-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            {content.header.title}
            <span className="text-[#F5BB00]">{content.header.highlight}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            {content.header.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl bg-white p-2 shadow-lg">
            <div className="grid grid-cols-5 gap-2">
              {(Object.entries(structure) as [LicenseKey, typeof currentConfig][])
                .map(([key, value]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedLicense(key)}
                    className={`rounded-xl px-3 py-3 text-xs font-bold transition-all duration-300 ${
                      selectedLicense === key
                        ? "bg-[#F5BB00] text-black shadow-lg"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col items-center space-y-1">
                      {getIcon(value.icon)}
                      <span className="hidden text-center leading-tight md:block">
                        {value.name}
                      </span>
                      <span className="md:hidden">{key.toUpperCase()}</span>
                    </div>
                  </motion.button>
                ))}
            </div>
          </div>
        </motion.div>

        {currentConfig.hasPrerequisite && (
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <FaCheckCircle className="mr-2" />
              {content.prerequisite}
            </div>
          </motion.div>
        )}

        {isFixedConfig(currentConfig) ? (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-2xl rounded-2xl border-2 border-[#F5BB00] bg-white p-8 text-center shadow-xl">
              <div className="mb-6 flex items-center justify-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5BB00]">
                  {getIcon(currentConfig.icon)}
                </div>
                <h2 className="text-3xl font-bold text-black">{currentConfig.name}</h2>
              </div>

              <div className="mb-6 text-6xl font-bold text-[#F5BB00]">
                {currentConfig.fixedPrice}€
              </div>

              <p className="mb-8 text-lg text-gray-600">
                {content.finalSection.description}
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/${locale}/anmelden`}
                  className="inline-block rounded-full border-2 border-[#F5BB00] bg-black px-8 py-3 text-lg font-bold text-[#F5BB00] transition-all duration-300 hover:bg-[#F5BB00] hover:text-black"
                >
                  {content.finalSection.cta}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.div
              className="flex flex-wrap gap-8 lg:flex-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full lg:w-[45%]">
                <div className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-xl md:p-8">
                  <div className="mb-6 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                      <FaBook className="text-xl text-black" />
                    </div>
                    <h2 className="text-2xl font-bold text-black md:text-3xl">
                      {content.sections.basePrices}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: <FaBook className="text-black" />,
                        label: content.sections.baseFee,
                        value: currentConfig.baseFee,
                      },
                      {
                        icon: <FaMobileAlt className="text-black" />,
                        label: content.sections.learningApp,
                        value: currentConfig.learningApp,
                      },
                      {
                        icon: <FaCar className="text-black" />,
                        label: content.sections.practiceLesson,
                        value: currentConfig.practiceLesson,
                      },
                      {
                        icon: <FaClipboardCheck className="text-black" />,
                        label: content.sections.theoryExam,
                        value: currentConfig.theoryExam,
                        hidden: currentConfig.theoryExam <= 0,
                      },
                      {
                        icon: <FaGraduationCap className="text-black" />,
                        label: content.sections.practicalExam,
                        value: currentConfig.practicalExam,
                      },
                    ]
                      .filter((item) => !item.hidden)
                      .map((item) => (
                        <div key={item.label} className="rounded-xl bg-gray-50 p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {item.icon}
                              <span className="font-semibold text-gray-700">
                                {item.label}
                              </span>
                            </div>
                            <span className="text-xl font-bold text-black">
                              {item.value}€
                            </span>
                          </div>
                        </div>
                      ))}

                    <div className="rounded-xl bg-gray-50 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FaRoad className="text-black" />
                          <span className="font-semibold text-gray-700">
                            {content.sections.specialDrives} (
                            {currentConfig.specialDrives.total} {content.calculations.lessons})
                          </span>
                        </div>
                        <span className="text-xl font-bold text-black">
                          {currentConfig.specialDrives.ruralRoad.price}€
                        </span>
                      </div>
                      <div className="mt-1 text-xs text-gray-600">
                        {currentConfig.specialDrives.ruralRoad.count} {content.sections.ruralRoad} +{" "}
                        {currentConfig.specialDrives.highway.count} {content.sections.highway} +{" "}
                        {currentConfig.specialDrives.nightDrive.count} {content.sections.nightDrive}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[45%]">
                <div className="rounded-2xl border-2 border-[#F5BB00] bg-white p-6 shadow-xl md:p-8">
                  <div className="mb-6 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                      <FaCalculator className="text-xl text-black" />
                    </div>
                    <h2 className="text-2xl font-bold text-black md:text-3xl">
                      {currentConfig.name}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">{content.sections.baseFee}</span>
                      <span className="font-semibold">{currentConfig.baseFee}€</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">{content.sections.learningApp}</span>
                      <span className="font-semibold">{currentConfig.learningApp}€</span>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-6">
                      <h3 className="mb-4 text-lg font-bold text-gray-800">
                        {content.sections.specialDrives}
                      </h3>

                      {[
                        {
                          icon: <FaRoad className="text-sm text-black" />,
                          label: content.sections.ruralRoad,
                          count: currentConfig.specialDrives.ruralRoad.count,
                          price: currentConfig.specialDrives.ruralRoad.price,
                          total: totals?.specialDriveDetails.ruralRoad ?? 0,
                        },
                        {
                          icon: <FaTruck className="text-sm text-black" />,
                          label: content.sections.highway,
                          count: currentConfig.specialDrives.highway.count,
                          price: currentConfig.specialDrives.highway.price,
                          total: totals?.specialDriveDetails.highway ?? 0,
                        },
                        {
                          icon: <FaMoon className="text-sm text-black" />,
                          label: content.sections.nightDrive,
                          count: currentConfig.specialDrives.nightDrive.count,
                          price: currentConfig.specialDrives.nightDrive.price,
                          total: totals?.specialDriveDetails.nightDrive ?? 0,
                        },
                      ].map((item, index) => (
                        <div
                          key={item.label}
                          className={`flex items-center justify-between ${
                            index < 2 ? "mb-3 border-b border-gray-200 pb-2" : "mb-3"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            {item.icon}
                            <span className="text-sm text-gray-700">{item.label}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-gray-600">
                              {item.count}x {item.price}€
                            </span>
                            <div className="font-semibold text-black">{item.total}€</div>
                          </div>
                        </div>
                      ))}

                      <div className="mt-3 border-t border-gray-300 pt-3">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-gray-800">
                            {content.sections.specialDrives} {content.calculations.total}
                          </span>
                          <span className="text-xl font-bold text-black">
                            {totals?.specialDrivesTotal ?? 0}€
                          </span>
                        </div>
                      </div>
                    </div>

                    {currentConfig.theoryExam > 0 && (
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-700">{content.sections.theoryExam}</span>
                        <span className="font-semibold">{currentConfig.theoryExam}€</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">{content.sections.practicalExam}</span>
                      <span className="font-semibold">{currentConfig.practicalExam}€</span>
                    </div>

                    <div className="border-t-2 border-gray-200 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-black">
                          {content.sections.schoolTotal}
                        </span>
                        <span className="text-2xl font-bold text-[#F5BB00]">
                          {totals?.schoolTotal ?? 0}€
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-r-xl border-l-4 border-orange-400 bg-orange-50 p-4">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="mt-0.5 mr-3 flex-shrink-0 text-orange-400" />
                      <div className="text-sm text-orange-800">
                        <p className="mb-2 font-semibold">{content.warning.title}</p>
                        <ul className="space-y-1 text-xs">
                          {content.warning.points.map((point) => (
                            <li key={point.label}>
                              • <strong>{point.label}:</strong> {point.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
                <h2 className="mb-6 text-center text-2xl font-bold text-black md:text-3xl">
                  {content.sections.extraCosts}
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {extraCosts.map((item) => (
                    <div key={item.key} className="rounded-xl bg-gray-50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-700">{item.name}</span>
                        <span className="font-bold text-gray-800">
                          {item.value}€
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t-2 border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-700">
                      {content.sections.extraCostsTotal}
                    </span>
                    <span className="text-xl font-bold text-red-600">
                      {(totals?.extraCostsTotal ?? 0).toFixed(2)}€
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 rounded-2xl bg-gradient-to-r from-black to-gray-800 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                {content.sections.totalCosts} {currentConfig.name}
              </h2>
              <div className="mb-4 text-5xl font-bold text-[#F5BB00] md:text-6xl">
                {(totals?.total ?? 0).toFixed(2)}€
              </div>
              <p className="text-lg text-white opacity-90">
                {content.finalSection.description}
              </p>
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/${locale}/anmelden`}
                  className="inline-block rounded-full border-2 border-[#F5BB00] bg-black px-10 py-4 text-lg font-bold text-[#F5BB00] transition-all duration-300 hover:bg-[#F5BB00] hover:text-black"
                >
                  {content.finalSection.cta}
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
