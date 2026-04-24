"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheck, FiCreditCard, FiEye, FiShield, FiUser } from "react-icons/fi";
import type { AutoAnhaengerChecklistContent } from "@/components/AutoAnhaenger/types";

type ChecklistSectionProps = {
  content: AutoAnhaengerChecklistContent;
};

const icons = {
  user: FiUser,
  "credit-card": FiCreditCard,
  shield: FiShield,
  eye: FiEye,
} as const;

export default function ChecklistSection({ content }: ChecklistSectionProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleCheck = (index: number) => {
    setCheckedItems((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="w-full">
      <div className="rounded-3xl bg-white p-8 shadow-2xl border-2 border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-black">{content.title}</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#F5BB00]" />
        </motion.div>

        <div
          className="flex h-[300px] justify-center gap-6 overflow-x-auto px-4 pb-4 pt-[10px]"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#F5BB00 #f1f1f1" }}
        >
          {content.items.map((item, index) => {
            const Icon = icons[item.icon];
            const isChecked = checkedItems.has(index);

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex-shrink-0 cursor-pointer"
                onClick={() => toggleCheck(index)}
              >
                <div
                  className={`relative h-[200px] w-[230px] rounded-2xl border-2 p-6 transition-all duration-300 hover:z-10 hover:scale-105 ${
                    isChecked
                      ? "border-[#F5BB00] bg-gray-800 shadow-2xl"
                      : "border-transparent bg-gradient-to-br from-gray-50 to-gray-100 hover:border-[#F5BB00] hover:shadow-lg"
                  }`}
                >
                  <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
                        isChecked
                          ? "bg-[#F5BB00] text-black"
                          : "bg-[#F5BB00] text-black group-hover:scale-110"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3
                      className={`mb-2 text-lg font-semibold transition-colors duration-300 ${
                        isChecked ? "text-[#F5BB00]" : "text-black group-hover:text-[#F5BB00]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        isChecked ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {isChecked && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5BB00]">
                        <FiCheck className="h-5 w-5 text-black" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 h-2 rounded-full bg-gradient-to-r from-[#F5BB00] via-[#F5BB00] to-transparent"
        />
      </div>
    </div>
  );
}
