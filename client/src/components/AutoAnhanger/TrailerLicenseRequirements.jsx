import React from "react";
import { motion } from "framer-motion";
import {
  FaWeightHanging,
  FaCalendarAlt,
  FaIdCard,
  FaClock,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const requirementsContent = {
  DE: [
    {
      icon: <FaWeightHanging className="text-4xl text-[#F5BB00]" />,
      title: "Anhänger bis",
      content: "3.500 KG",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#F5BB00]" />,
      title: "Mindestalter",
      content: "18 Jahre / 17 mit BF17",
    },
    {
      icon: <FaIdCard className="text-4xl text-[#F5BB00]" />,
      title: "Voraussetzungen",
      content: "Autoführerschein",
    },
    {
      icon: <FaClock className="text-4xl text-[#F5BB00]" />,
      title: "Ausbildungsdauer",
      content: "Ab einem Tag",
    },
  ],
  EN: [
    {
      icon: <FaWeightHanging className="text-4xl text-[#F5BB00]" />,
      title: "Trailer up to",
      content: "3,500 KG",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#F5BB00]" />,
      title: "Minimum Age",
      content: "18 years / 17 with BF17",
    },
    {
      icon: <FaIdCard className="text-4xl text-[#F5BB00]" />,
      title: "Requirements",
      content: "Car License",
    },
    {
      icon: <FaClock className="text-4xl text-[#F5BB00]" />,
      title: "Training Duration",
      content: "From one day",
    },
  ],
  AR: [
    {
      icon: <FaWeightHanging className="text-4xl text-[#F5BB00]" />,
      title: "مقطورة تصل إلى",
      content: "3,500 كجم",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#F5BB00]" />,
      title: "الحد الأدنى للعمر",
      content: "18 عامًا / 17 مع BF17",
    },
    {
      icon: <FaIdCard className="text-4xl text-[#F5BB00]" />,
      title: "المتطلبات",
      content: "رخصة قيادة السيارة",
    },
    {
      icon: <FaClock className="text-4xl text-[#F5BB00]" />,
      title: "مدة التدريب",
      content: "ابتداءً من يوم واحد",
    },
  ],
};

const TrailerLicenseRequirements = () => {
  const { selectedLanguage } = useLanguage(); // Hole die Sprache aus dem Kontext
  const requirements =
    requirementsContent[selectedLanguage] || requirementsContent.DE;

  return (
    <div className="bg-gray-50 py-6 px-4 mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center text-black mb-6"
        >
          {selectedLanguage === "DE"
            ? "Anhängerführerschein Bedingungen"
            : selectedLanguage === "EN"
            ? "Trailer License Requirements"
            : "شروط رخصة القيادة للمقطورة"}
        </motion.h1>

        <div className="overflow-x-auto py-4">
          <div className="flex gap-6 pb-4 min-w-max justify-center">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-[#F5BB00] p-4 flex flex-col items-center text-center w-64 flex-shrink-0 h-48"
              >
                <div className="mb-3">{requirement.icon}</div>
                <h3 className="text-lg font-bold text-[#F5BB00] mb-2 uppercase tracking-wide">
                  {requirement.title}
                </h3>
                <p className="text-lg font-bold text-black leading-relaxed">
                  {requirement.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerLicenseRequirements;
