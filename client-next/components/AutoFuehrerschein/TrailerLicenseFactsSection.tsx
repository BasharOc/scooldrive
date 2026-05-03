"use client";

import {
  FaCalendarAlt,
  FaCar,
  FaClipboardCheck,
  FaCogs,
  FaWrench,
} from "react-icons/fa";
import type { AutoFuehrerscheinFactsContent } from "@/components/AutoFuehrerschein/types";

type TrailerLicenseFactsSectionProps = {
  content: AutoFuehrerscheinFactsContent;
};

const icons = {
  car: FaCar,
  calendar: FaCalendarAlt,
  "clipboard-check": FaClipboardCheck,
  cogs: FaCogs,
  wrench: FaWrench,
} as const;

export default function TrailerLicenseFactsSection({
  content,
}: TrailerLicenseFactsSectionProps) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto w-[95%] md:w-[80%] max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-black md:text-3xl">
          {content.title}
        </h2>

        {/* Scrollbar auf Mobile, Grid auf Desktop */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-6 lg:grid-cols-5">
            {content.items.map((fact) => {
              const Icon = icons[fact.icon];
              return (
                <div
                  key={fact.title}
                  className="flex w-56 flex-shrink-0 flex-col items-center rounded-2xl border-t-4 border-[#F5BB00] bg-white p-5 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:w-auto"
                >
                  <Icon className="mb-3 text-4xl text-[#F5BB00]" />
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#F5BB00]">
                    {fact.title}
                  </p>
                  <p className="text-base font-bold text-black">
                    {fact.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
