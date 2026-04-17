import React from "react";

export default function RegistrationProgress({ currentStep, totalSteps }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div
        className="bg-[#F5BB00] h-2 rounded-full transition-all duration-500"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      />
    </div>
  );
}

