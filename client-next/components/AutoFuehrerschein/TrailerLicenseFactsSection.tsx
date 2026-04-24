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
    <div className="mt-24 bg-gray-50 px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-black">
          {content.title}
        </h1>

        <div className="overflow-x-auto py-4">
          <div className="flex min-w-max gap-6 pb-4">
            {content.items.map((fact) => {
              const Icon = icons[fact.icon];

              return (
                <div
                  key={fact.title}
                  className="flex h-48 w-64 flex-shrink-0 flex-col items-center rounded-2xl border-t-4 border-[#F5BB00] bg-white p-4 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="mb-3">
                    <Icon className="text-4xl text-[#F5BB00]" />
                  </div>

                  <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-[#F5BB00]">
                    {fact.title}
                  </h3>

                  <p className="text-lg font-bold leading-relaxed text-black">
                    {fact.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
