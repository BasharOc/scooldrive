"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
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
    <section className="bg-black px-4 py-16 md:py-24">
      <div className="mx-auto w-[95%] md:w-[80%] max-w-[1320px]">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start gap-2">
          <span className="rounded-full border border-[#F5BB00]/40 bg-[#F5BB00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F5BB00]">
            FAQ
          </span>
          <h2 className="text-[clamp(2rem,3vw,3rem)] font-bold italic uppercase leading-none text-white">
            {content.title}
          </h2>
          {/* Gelbe Linie als Akzent */}
          <div className="mt-1 h-1 w-16 rounded-full bg-[#F5BB00]" />
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-white/10">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="group">
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span
                    className={`text-[clamp(1rem,1.2vw,1.35rem)] font-bold leading-tight transition-colors duration-200 ${isOpen ? "text-[#F5BB00]" : "text-white group-hover:text-[#F5BB00]"}`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${isOpen ? "border-[#F5BB00] bg-[#F5BB00] text-black" : "border-white/20 bg-white/5 text-white group-hover:border-[#F5BB00] group-hover:text-[#F5BB00]"}`}
                  >
                    {isOpen ? (
                      <FaMinus className="text-xs" />
                    ) : (
                      <FaPlus className="text-xs" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pb-6 pr-16">
                    <p className="text-[clamp(0.9rem,0.95vw,1.08rem)] leading-relaxed text-white/60">
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
