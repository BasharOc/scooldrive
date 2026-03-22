// Step3.js - Aktualisiert
import React from "react";
import { motion } from "framer-motion";

const Step3 = ({ formData, setFormData, errors, langContent }) => (
  <div>
    <h2 className="text-3xl font-bold text-black mb-8 text-center">
      {langContent.title}
    </h2>
    <div className="max-w-lg mx-auto space-y-6">
      {/* Hauptfrage */}
      <div className="space-y-4">
        <div
          className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
            formData.hatFuehrerschein === false
              ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
              : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() =>
            setFormData({
              ...formData,
              hatFuehrerschein: false,
              fuehrerscheinTyp: "",
            })
          }
        >
          <div className="flex items-center space-x-4">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                formData.hatFuehrerschein === false
                  ? "border-[#F5BB00] bg-[#F5BB00]"
                  : "border-gray-300"
              }`}
            >
              {formData.hatFuehrerschein === false && (
                <div className="w-3 h-3 rounded-full bg-[#F5BB00]"></div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">
                {langContent.options.no}
              </h3>
              <p className="text-gray-600 text-sm">
                {langContent.descriptions.no}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
            formData.hatFuehrerschein === true
              ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
              : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => setFormData({ ...formData, hatFuehrerschein: true })}
        >
          <div className="flex items-center space-x-4">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                formData.hatFuehrerschein === true
                  ? "border-[#F5BB00] bg-[#F5BB00]"
                  : "border-gray-300"
              }`}
            >
              {formData.hatFuehrerschein === true && (
                <div className="w-3 h-3 rounded-full bg-[#F5BB00]"></div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">
                {langContent.options.yes}
              </h3>
              <p className="text-gray-600 text-sm">
                {langContent.descriptions.yes}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unterfrage */}
      {formData.hatFuehrerschein && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 24 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          className="bg-gray-50 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-black mb-4">
            {langContent.subTitle}
          </h3>
          <div className="space-y-3">
            {langContent.subOptions
              .filter(
                ({ value }) =>
                  formData.fahrzeugTyp !== "auto-anhaenger" ||
                  value !== "BE (Auto mit Anhänger)"
              )
              .map(({ value, desc, icon: Icon }) => (
                <div
                  key={value}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.fuehrerscheinTyp === value
                      ? "border-[#F5BB00] bg-white"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, fuehrerscheinTyp: value })
                  }
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="text-[#F5BB00] text-2xl" />
                    <div>
                      <span className="font-semibold text-black">{value}</span>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      )}

      {/* Warnung für Anhänger ohne B-Führerschein */}
      {formData.fahrzeugTyp === "auto-anhaenger" &&
        formData.hatFuehrerschein === false && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl mt-6"
          >
            <div className="flex items-start">
              <div className="text-sm text-red-800">
                <p className="font-semibold mb-1">
                  {langContent.prerequisiteWarning.title}
                </p>
                <p className="text-xs">
                  {langContent.prerequisiteWarning.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
    </div>
  </div>
);

export default Step3;
