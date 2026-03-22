// Step3_5.js - Neue Komponente für Anhänger/Motorrad Auswahl
import React from "react";
import { motion } from "framer-motion";
import {
  FaTrailer,
  FaMotorcycle,
  FaWeightHanging,
  FaInfoCircle,
} from "react-icons/fa";

const Step3_5 = ({ formData, setFormData, errors, langContent }) => (
  <div>
    <h2 className="text-3xl font-bold text-black mb-8 text-center">
      {langContent.title}
    </h2>

    <div className="max-w-lg mx-auto space-y-4">
      {langContent.options.map(
        ({ key, label, desc, weight, icon: Icon }, index) => (
          <motion.div
            key={key}
            className={`p-6 border-2 rounded-lg cursor-pointer ${
              formData.spezifischeKlasse === key
                ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
                : "border-gray-300 hover:border-[#F5BB00]"
            }`}
            onClick={() => setFormData({ ...formData, spezifischeKlasse: key })}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start space-x-4">
              <Icon
                className={`text-3xl mt-1 ${
                  formData.spezifischeKlasse === key
                    ? "text-black"
                    : "text-[#F5BB00]"
                }`}
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black">{label}</h3>
                <p className="text-gray-600 text-sm mb-2">{desc}</p>
                {weight && (
                  <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full text-xs">
                    <FaWeightHanging className="text-[#F5BB00]" />
                    <span className="font-medium">{weight}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>

    {errors.spezifischeKlasse && (
      <motion.p
        className="text-red-500 mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {errors.spezifischeKlasse}
      </motion.p>
    )}
  </div>
);

export default Step3_5;
