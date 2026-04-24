"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { MotorradInformationContent } from "@/components/Motorrad/types";

type InformationSectionProps = {
  content: MotorradInformationContent;
};

export default function InformationSection({
  content,
}: InformationSectionProps) {
  return (
    <motion.div
      className="bg-white px-8 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto mb-16 max-w-[77vw]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="whitespace-pre-line text-4xl font-bold leading-tight text-black italic lg:text-5xl">
              {content.title}
            </h1>

            <div className="space-y-4 text-lg leading-relaxed text-black">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/motorcycle.jpg"
                alt={content.imageAlt}
                width={1200}
                height={900}
                className="h-auto w-full rounded-lg object-cover"
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                  borderRadius: "inherit",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
