"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaIdCard, FaWeightHanging } from "react-icons/fa";
import type { AutoAnhaengerFactsContent } from "@/components/AutoAnhaenger/types";

type RequirementsSummarySectionProps = {
  content: AutoAnhaengerFactsContent;
};

const icons = {
  weight: FaWeightHanging,
  calendar: FaCalendarAlt,
  "id-card": FaIdCard,
  clock: FaClock,
} as const;

export default function RequirementsSummarySection({
  content,
}: RequirementsSummarySectionProps) {
  return (
    <div className="mt-24 bg-gray-50 px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center text-2xl font-bold text-black"
        >
          {content.title}
        </motion.h2>

        <div className="overflow-x-auto py-4">
          <div className="flex min-w-max justify-center gap-6 pb-4">
            {content.items.map((item, index) => {
              const Icon = icons[item.icon];

              return (
                <motion.div
                  key={item.title}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex h-48 w-64 flex-shrink-0 flex-col items-center rounded-2xl border-t-4 border-[#F5BB00] bg-white p-4 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="mb-3">
                    <Icon className="text-4xl text-[#F5BB00]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-[#F5BB00]">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-bold leading-relaxed text-black">
                    {item.content}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
