"use client";

import { motion } from "framer-motion";
import {
  FaAward,
  FaCheckCircle,
  FaClock,
  FaExchangeAlt,
  FaEye,
  FaFire,
  FaSmile,
} from "react-icons/fa";
import type { TrafficRulesContent } from "@/components/Homepage/types";
import type { Locale } from "@/types/i18n";

type TrafficRulesSectionProps = {
  content: TrafficRulesContent;
  locale: Locale;
};

const getRuleIcon = (icon: TrafficRulesContent["rules"][number]["icon"]) => {
  const className = "text-[36px] text-[#F5BB00]";
  switch (icon) {
    case "trophy":
      return <FaAward className={className} />;
    case "cone":
      return <FaFire className={className} />;
    case "circle":
      return <FaExchangeAlt className={className} />;
    case "timer":
      return <FaClock className={className} />;
    case "eye":
      return <FaEye className={className} />;
    case "bars":
      return <FaCheckCircle className={className} />;
    default:
      return <FaSmile className={className} />;
  }
};

export default function TrafficRulesSection({
  content,
  locale,
}: TrafficRulesSectionProps) {
  const isArabic = locale === "ar";
  const itemWidth = 140;
  const totalWidth = content.rules.length * itemWidth;
  const duplicatedRules = [...content.rules, ...content.rules];

  return (
    <section className="bg-white px-0 md:px-8 py-16">
      <div className="mx-auto w-full md:w-[80%] max-w-[2048px]">
        <div className="overflow-hidden rounded-none md:rounded-[1.9rem] bg-[#232323] px-6 py-10 text-white shadow-[0_16px_40px_rgba(15,23,42,0.15)] md:px-12 md:py-14">
          {/* Header + Badge – Badge bleibt im Container */}
          <div
            className={`mb-8 flex items-start gap-4 ${isArabic ? "flex-row-reverse" : "justify-between"}`}
          >
            <div className={isArabic ? "text-right" : ""}>
              <h2 className="text-[clamp(1.6rem,3vw,3.5rem)] font-bold italic text-[#F5BB00]">
                {content.title}
              </h2>
              <p className="mt-2 text-[clamp(0.8rem,1.2vw,1.5rem)] font-semibold uppercase tracking-wide text-white">
                {content.subtitle}
              </p>
            </div>

            {/* Badge vollständig sichtbar, flex-shrink-0 verhindert Abschneiden */}
            <div className="flex-shrink-0 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#F5BB00] text-center text-[10px] font-black uppercase leading-[1.2] text-black shadow-xl">
              <div>
                {content.badgeText.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling Icons – engere Abstände */}
          <div className="overflow-hidden" dir="ltr">
            <motion.div
              className="flex w-max"
              animate={{ x: [0, -totalWidth] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 18,
                  ease: "linear",
                },
              }}
              style={{ width: `${totalWidth * 2}px` }}
            >
              {duplicatedRules.map((rule, index) => (
                <div
                  key={`${rule.id}-${index}`}
                  className="mr-6 flex w-[128px] flex-shrink-0 flex-col items-center text-center"
                >
                  <div className="mb-2">{getRuleIcon(rule.icon)}</div>
                  <div
                    className={`text-[12px] font-bold uppercase leading-tight ${rule.accent ? "text-[#F5BB00]" : "text-white"}`}
                  >
                    {rule.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
