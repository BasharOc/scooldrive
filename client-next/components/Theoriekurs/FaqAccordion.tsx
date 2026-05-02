"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
} from "react-icons/fa";
import type { TheoriekursContent } from "@/messages/theoriekurs";

type FaqAccordionProps = {
  faq: TheoriekursContent["faq"];
};

export default function FaqAccordion({ faq }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="rounded-2xl bg-white p-6 md:p-8">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
          {faq.title}
        </h2>
        <p className="text-lg text-gray-600">{faq.subtitle}</p>
      </div>

      <div className="space-y-4">
        {faq.items.map((item, index) => (
          <div
            key={item.question}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="flex w-full cursor-pointer items-center justify-between bg-gray-50 px-6 py-4 text-left transition-colors duration-200 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <FaQuestionCircle className="mr-3 text-[#F5BB00]" />
                <span className="font-semibold text-black">{item.question}</span>
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
                <p className="leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
