"use client";

import { motion } from "framer-motion";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import type { RegistrationLocaleContent } from "@/components/Registration/types";

type RegistrationNavigationProps = {
  currentStep: number;
  totalSteps: number;
  content: RegistrationLocaleContent;
  onNext: () => void;
  onSubmit: () => void;
};

export default function RegistrationNavigation({
  content,
  currentStep,
  onNext,
  onSubmit,
  totalSteps,
}: RegistrationNavigationProps) {
  if (currentStep >= totalSteps || currentStep === 9) {
    return null;
  }

  const isSubmitStep = currentStep === 8;

  return (
    <div className="mt-12 flex justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={isSubmitStep ? onSubmit : onNext}
        className="flex items-center gap-2 rounded-lg bg-[#F5BB00] px-8 py-4 text-lg font-semibold text-black transition-colors hover:bg-yellow-500"
      >
        <span>{isSubmitStep ? content.buttons.submit : content.buttons.next}</span>
        {isSubmitStep ? <FaCheck /> : <FaArrowLeft className="rotate-180" />}
      </motion.button>
    </div>
  );
}
