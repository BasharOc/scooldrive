import React from "react";
import { motion } from "framer-motion";

const Step2 = ({ formData, setFormData, errors, langContent }) => (
  <div>
    <h2 className="text-3xl font-bold text-black mb-8 text-center">
      {langContent.title}
    </h2>
    <div className="max-w-md mx-auto space-y-6">
      <div>
        <label className="block text-lg font-semibold mb-2">
          {langContent.fields.vorname}{" "}
          <span className="text-black-500 text-2xl">*</span>
        </label>
        <input
          type="text"
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#F5BB00] focus:outline-none"
          value={formData.vorname}
          onChange={(e) =>
            setFormData({ ...formData, vorname: e.target.value })
          }
          placeholder={langContent.placeholders.vorname}
        />
        {errors.vorname && (
          <p className="text-red-500 mt-2">{errors.vorname}</p>
        )}
      </div>
      <div>
        <label className="block text-lg font-semibold mb-2">
          {langContent.fields.nachname}{" "}
          <span className="text-black-500 text-2xl">*</span>
        </label>
        <input
          type="text"
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#F5BB00] focus:outline-none"
          value={formData.nachname}
          onChange={(e) =>
            setFormData({ ...formData, nachname: e.target.value })
          }
          placeholder={langContent.placeholders.nachname}
        />
        {errors.nachname && (
          <p className="text-red-500 mt-2">{errors.nachname}</p>
        )}
      </div>
    </div>
  </div>
);

export default Step2;
