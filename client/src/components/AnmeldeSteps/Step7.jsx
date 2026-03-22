import React from "react";
import { motion } from "framer-motion";

const Step7 = ({ formData, langContent }) => (
  <div>
    <h2 className="text-3xl font-bold text-black mb-8 text-center">
      {langContent.title}
    </h2>
    <div className="max-w-lg mx-auto bg-gray-50 p-6 rounded-lg space-y-4">
      <div className="flex justify-between">
        <span className="font-semibold">
          {langContent.summary.fahrzeugTyp}:
        </span>
        <span>{formData.fahrzeugTyp}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">{langContent.summary.name}:</span>
        <span>
          {formData.vorname} {formData.nachname}
        </span>
      </div>
      {formData.fahrzeugTyp !== "motorrad" && (
        <>
          <div className="flex justify-between">
            <span className="font-semibold">
              {langContent.summary.fuehrerschein}:
            </span>
            <span>
              {formData.hatFuehrerschein
                ? `Ja (${formData.fuehrerscheinTyp})`
                : "Nein"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">
              {langContent.summary.getriebe}:
            </span>
            <span>{formData.getriebe}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">
              {langContent.summary.pruefung}:
            </span>
            <span>{formData.pruefung}</span>
          </div>
        </>
      )}
      <div className="flex justify-between">
        <span className="font-semibold">{langContent.summary.kursart}:</span>
        <span>{formData.kursart}</span>
      </div>
    </div>
  </div>
);

export default Step7;
