"use client";

import { motion } from "framer-motion";
import type { MotorradFactsContent } from "@/components/Motorrad/types";

type FactsSectionProps = {
  content: MotorradFactsContent;
};

export default function FactsSection({ content }: FactsSectionProps) {
  return (
    <motion.div
      className="mx-auto mb-24 max-w-[80vw] rounded-lg bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="mb-12 text-center text-[1.8rem] font-bold tracking-wide text-black md:text-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {content.title}
      </motion.h2>

      <motion.div
        className="mt-12 overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex gap-4 pb-4">
          {content.items.map((fact, index) => (
            <motion.div
              key={fact.title}
              className="min-w-max flex-shrink-0 rounded-lg bg-gray-50 p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="mb-2 text-sm font-semibold text-[#F5BB00]">
                {fact.title}
              </h3>
              <h4 className="text-lg font-bold text-black">{fact.description}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
