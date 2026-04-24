"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const className = "text-[52px] text-[#F5BB00]";

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
  const [isMobile, setIsMobile] = useState(false);
  const isArabic = locale === "ar";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemWidth = 254;
  const totalWidth = content.rules.length * itemWidth;
  const duplicatedRules = [...content.rules, ...content.rules];

  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto w-[80%] max-w-[2048px]">
        <div className="relative">
          <div
            className={`absolute z-10 flex h-[118px] w-[118px] items-center justify-center rounded-full border-[6px] border-white bg-[#F5BB00] text-center text-[13px] font-black uppercase leading-[1.05] text-black shadow-xl ${
              isMobile
                ? "right-5 top-5"
                : isArabic
                  ? "left-24 top-1"
                  : "right-24 top-1"
            }`}
          >
            <div>
              {content.badgeText.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.9rem] bg-[#232323] px-6 py-10 text-white shadow-[0_16px_40px_rgba(15,23,42,0.15)] md:px-12 md:py-14">
            <div className={`mb-10 ${isArabic ? "text-right" : ""}`}>
              <h2 className="text-[clamp(2rem,3vw,3.5rem)] font-bold italic text-[#F5BB00]">
                {content.title}
              </h2>
              <p className="mt-3 text-[clamp(1rem,1.2vw,1.5rem)] font-semibold uppercase tracking-wide text-white">
                {content.subtitle}
              </p>
            </div>

            <div className="overflow-hidden" dir="ltr">
              <motion.div
                className="flex w-max"
                dir="ltr"
                animate={{ x: [0, -totalWidth] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 22,
                    ease: "linear",
                  },
                }}
                style={{ width: `${totalWidth * 2}px` }}
              >
                {duplicatedRules.map((rule, index) => (
                  <div
                    key={`${rule.id}-${index}`}
                    className="mr-16 flex w-[190px] flex-shrink-0 flex-col items-center text-center"
                  >
                    <div className="mb-5">{getRuleIcon(rule.icon)}</div>
                    <div
                      className={`text-[18px] font-bold uppercase leading-tight ${
                        rule.accent ? "text-[#F5BB00]" : "text-white"
                      }`}
                    >
                      {rule.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
