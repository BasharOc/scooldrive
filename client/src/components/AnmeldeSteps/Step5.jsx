import React from "react";
import { motion } from "framer-motion";

const Step5 = ({ formData, setFormData, errors, langContent }) => (
  <div>
    <h2 className="text-3xl font-bold text-black mb-8 text-center">
      {langContent.title}
    </h2>
    <div className="max-w-lg mx-auto space-y-6">
      {langContent.options.map(({ key, label, desc, icon: Icon }) => (
        <div
          key={key}
          className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
            formData.pruefung === key
              ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onClick={() => setFormData({ ...formData, pruefung: key })}
        >
          <div className="flex items-center space-x-4">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                formData.pruefung === key
                  ? "border-[#F5BB00] bg-[#F5BB00]"
                  : "border-gray-300"
              }`}
            >
              {formData.pruefung === key && (
                <div className="w-3 h-3 rounded-full bg-[#F5BB00]"></div>
              )}
            </div>

            <Icon
              className={`text-3xl ${
                formData.pruefung === key ? "text-black" : "text-[#F5BB00]"
              }`}
            />

            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-black">{label}</h3>
                {desc.includes("empfohlen") && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    Empfohlen
                  </span>
                )}
              </div>
              <p
                className={`text-sm ${
                  desc.includes("empfohlen")
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                {desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    {errors.pruefung && (
      <p className="text-red-500 mt-4 text-center">{errors.pruefung}</p>
    )}
  </div>
);

export default Step5;
