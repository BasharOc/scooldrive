import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

const Step6 = ({ formData, setFormData, errors, langContent }) => (
  <div>
    <h2 className="text-3xl font-bold text-black mb-8 text-center">
      {langContent.title}
    </h2>

    {/* Theorie Kurs Information */}
    <motion.div
      className="max-w-lg mx-auto mb-8 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start">
        <FaInfoCircle className="text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-800">
          <p className="font-semibold mb-1">{langContent.theoryInfo.title}</p>
          <p className="text-xs">{langContent.theoryInfo.description}</p>
        </div>
      </div>
    </motion.div>

    {/* Praxis Kurs Optionen */}
    <div className="max-w-lg mx-auto space-y-4">
      <h3 className="text-xl font-semibold text-black mb-4 text-center">
        {langContent.practiceTitle}
      </h3>

      {langContent.options.map(({ key, label, desc, icon: Icon }, index) => (
        <motion.div
          key={key}
          className={`p-6 border-2 rounded-lg cursor-pointer ${
            formData.kursart === key
              ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
              : "border-gray-300 hover:border-[#F5BB00]"
          }`}
          onClick={() => setFormData({ ...formData, kursart: key })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-4">
            <Icon
              className={`text-3xl ${
                formData.kursart === key ? "text-black" : "text-[#F5BB00]"
              }`}
            />
            <div>
              <h3 className="text-lg font-semibold">{label}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {errors.kursart && (
      <motion.p
        className="text-red-500 mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {errors.kursart}
      </motion.p>
    )}
  </div>
);

export default Step6;
