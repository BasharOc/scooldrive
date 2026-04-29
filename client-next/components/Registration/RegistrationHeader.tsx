"use client";

import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import BonusNotice from "@/components/Registration/BonusNotice";
import type { ActiveBonus, RegistrationLocaleContent } from "@/components/Registration/types";

type RegistrationHeaderProps = {
  currentStep: number;
  totalSteps: number;
  content: RegistrationLocaleContent;
  activeBonus: ActiveBonus;
  onBack: () => void;
};

export default function RegistrationHeader({
  activeBonus,
  content,
  currentStep,
  onBack,
  totalSteps,
}: RegistrationHeaderProps) {
  return (
    <div className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 transition-colors hover:text-black"
        >
          <FaArrowLeft className="text-xl" />
          <span className="text-lg">{content.navigation.back}</span>
        </motion.button>
        <div className={`${activeBonus ? "mr-[0%]" : "mr-[15%] sm:mr-[10%]"} text-center`}>
          <h1 className="text-xl font-bold">{content.navigation.title}</h1>
          <p className="text-sm text-gray-600">
            {content.navigation.stepOf} {currentStep} {content.navigation.von} {totalSteps}
          </p>
        </div>
        <div>
          <BonusNotice activeBonus={activeBonus} content={content} />
        </div>
      </div>
    </div>
  );
}
