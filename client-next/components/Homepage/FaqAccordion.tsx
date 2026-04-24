"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import type { FaqContent } from "@/components/Homepage/types";

type FaqAccordionProps = {
  content: FaqContent;
};

export default function FaqAccordion({ content }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <div className="mx-auto w-[80%] max-w-[1320px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold italic uppercase leading-none text-[#1F2C3F]">
            {content.title}
          </h2>
        </div>

        {/* FAQ List - Single Column */}
        <div className="space-y-6">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className=" mb-4 overflow-hidden rounded-[1.7rem] border border-gray-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.1)]"
              >
                {/* Question Header */}
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-4  text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="pr-4 text-[clamp(1.05rem,1.2vw,1.45rem)] font-bold leading-tight text-[#1F2C3F]">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 text-[28px] text-[#E9AF00]">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-gray-100 px-9 pb-8 pt-5">
                    <p className="text-[clamp(0.92rem,0.95vw,1.08rem)] leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
