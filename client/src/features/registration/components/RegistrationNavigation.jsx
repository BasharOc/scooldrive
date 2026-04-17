import React from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

export default function RegistrationNavigation({
  currentStep,
  totalSteps,
  langContent,
  onNext,
  onSubmit,
}) {
  if (currentStep >= totalSteps || currentStep === 9) {
    return null;
  }

  const isSubmitStep = currentStep === 8;

  return (
    <div className="flex justify-center mt-12">
      <Motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={isSubmitStep ? onSubmit : onNext}
        className="bg-[#F5BB00] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors flex items-center space-x-2"
      >
        <span>
          {isSubmitStep ? langContent.buttons.submit : langContent.buttons.next}
        </span>
        {isSubmitStep ? <FaCheck /> : <FaArrowLeft className="rotate-180" />}
      </Motion.button>
    </div>
  );
}
