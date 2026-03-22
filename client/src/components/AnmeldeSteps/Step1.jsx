import React from "react";
import { motion } from "framer-motion";

const Step1 = ({ formData, setFormData, errors, langContent }) => (
  <div>
    <h2 className="text-3xl font-bold text-black mb-8 text-center">
      {langContent.title}
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {langContent.options.map(({ key, label, icon: Icon }) => (
        <motion.div
          key={key}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-6 rounded-lg border-2 cursor-pointer text-center transition-colors duration-200 ${
            formData.fahrzeugTyp === key
              ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
              : "border-gray-300 hover:border-[#F5BB00]"
          }`}
          onClick={() => setFormData({ ...formData, fahrzeugTyp: key })}
        >
          <Icon
            className={`text-4xl mx-auto mb-4 ${
              formData.fahrzeugTyp === key ? "text-black" : "text-[#F5BB00]"
            }`}
          />
          <h3 className="text-xl font-semibold">{label}</h3>
        </motion.div>
      ))}
    </div>
    {errors.fahrzeugTyp && (
      <p className="text-red-500 mt-4 text-center">{errors.fahrzeugTyp}</p>
    )}
  </div>
);

export default Step1;
