import React from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import BonusNotice from "./BonusNotice";

export default function RegistrationHeader({
  currentStep,
  totalSteps,
  langContent,
  activeBonus,
  onBack,
}) {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-40">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-black transition-colors"
        >
          <FaArrowLeft className="text-xl" />
          <span className="text-lg">{langContent.navigation.back}</span>
        </Motion.button>
        <div
          className={`${
            activeBonus ? "mr-[0%]" : " mr-[15%] sm:mr-[10%]"
          } text-center`}
        >
          <h1 className="text-xl font-bold">{langContent.navigation.title}</h1>
          <p className="text-sm text-gray-600">
            {langContent.navigation.stepOf} {currentStep}{" "}
            {langContent.navigation.von} {totalSteps}
          </p>
        </div>
        <div>
          <BonusNotice activeBonus={activeBonus} langContent={langContent} />
        </div>
      </div>
    </div>
  );
}
