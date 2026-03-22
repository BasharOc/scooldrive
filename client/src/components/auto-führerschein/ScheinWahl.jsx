import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaMotorcycle, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const ScheinWahl = () => {
  const navigate = useNavigate();
  const { t, selectedLanguage } = useLanguage(); // Hole die Übersetzungen aus dem Kontext

  const drivingOptions = [
    {
      id: "auto",
      icon: <FaCar className="text-4xl" />,
      route: "/auto-fuehrerschein",
    },
    {
      id: "auto-anhaenger",
      icon: (
        <img
          src="/auto-anhanger.png"
          alt={
            selectedLanguage === "DE"
              ? "Anhängerführerschein Klasse BE – Auto mit Anhänger in Lüneburg"
              : selectedLanguage === "EN"
              ? "Trailer license class BE – car with trailer in Lüneburg"
              : "رخصة قيادة مقطورة فئة BE – سيارة مع مقطورة في لونيبورغ"
          }
          className="w-12"
          style={{ minWidth: 70, height: "auto" }}
        />
      ),
      route: "/auto-anhaenger",
    },
    {
      id: "motorrad",
      icon: <FaMotorcycle className="text-4xl" />,
      route: "/motorrad-fuehrerschein",
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Title and Additional Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black text-left">
              {t.scheinWahl.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.scheinWahl.description}
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              {t.scheinWahl.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side - Driving Options */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {drivingOptions.map((option) => {
              const text = t.scheinWahl.options.find((o) => o.id === option.id);
              return (
                <motion.div
                  key={option.id}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#f9f9f9",
                  }}
                  onClick={() => handleCardClick(option.route)}
                  className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#F5BB00] group"
                  style={{ minHeight: 182, height: 182, maxHeight: 182 }}
                >
                  <div className="flex items-start justify-between h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-1 group-hover:text-[#F5BB00] transition-colors">
                          {text.title}
                        </h3>
                        <p className="text-sm font-bold text-gray-600 mb-2">
                          {text.subtitle}
                        </p>
                        <p className="text-gray-700 mb-2 text-sm">
                          {text.description}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center space-x-2 text-[#F5BB00] font-bold"
                      >
                        <span>{t.scheinWahl.more}</span>
                        <div className="w-8 h-8 bg-[#F5BB00] rounded-lg flex items-center justify-center">
                          <FaArrowRight className="text-black text-sm" />
                        </div>
                      </motion.div>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="text-[#F5BB00] ml-6 flex items-center"
                    >
                      {option.icon}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheinWahl;
