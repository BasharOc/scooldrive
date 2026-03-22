import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API_BASE from "../../utils/api";

const HeroSection = () => {
  const { t, selectedLanguage } = useLanguage();
  const isArabic = selectedLanguage === "AR";
  const navigate = useNavigate();
  const [einstellungen, setEinstellungen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEinstellungen = async () => {
    try {
      const response = await fetch(`${API_BASE}/einstellungen`);
      const data = await response.json();

      if (response.ok) {
        setEinstellungen(data);
      } else {
        setError("Fehler beim Laden der Einstellungen");
      }
    } catch (err) {
      setError("Verbindungsfehler");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEinstellungen();
  }, []);

  return (
    <div className="relative">
      {/* Video Background - nur 100vh hoch, nicht fixed */}
      <div className="relative h-[100vh] overflow-hidden">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        {/* Content */}
        <div
          className={`relative z-[2] h-full flex items-center ${
            isArabic ? "justify-end" : ""
          }`}
        >
          <div
            className={`container mx-auto px-4 md:px-8 pt-24 md:pt-32 ${
              isArabic ? "rtl" : ""
            }`}
          >
            <div className={`max-w-4xl ${isArabic ? "ml-auto" : ""}`}>
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`inline-block mb-4 md:mb-6 ${
                  isArabic ? "w-full flex justify-end text-right" : ""
                }`}
              >
                <span className="bg-[#F5BB00] text-black px-4 py-2 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-sm tracking-wide">
                  {t.hero.badge}
                </span>
                {!loading && einstellungen?.begrenztePlaetze && (
                  <span className="p-[8px] mr-[10px] ml-[10px] bg-red-500 text-white h-[30px] rounded-full text-sm font-semibold">
                    {t.hero.warning}
                  </span>
                )}
              </motion.div>

              {/* Main Headline - Korrigiertes Alignment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={`mb-4 md:mb-4 w-full ${
                  isArabic ? "flex justify-end" : "flex justify-start"
                }`}
              >
                <div
                  className={`flex flex-col ${
                    isArabic ? "items-end" : "items-start"
                  } max-w-full`}
                >
                  <span
                    className="font-bold text-4xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight bg-black text-white px-5 py-2 rounded-t-xl inline-block"
                    style={{
                      textAlign: isArabic ? "right" : "left",
                      direction: isArabic ? "rtl" : "ltr",
                    }}
                  >
                    {t.hero.title1}
                  </span>
                  <span
                    className="font-bold text-4xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight bg-black text-white px-5 py-2 rounded-b-xl inline-block"
                    style={{
                      textAlign: isArabic ? "right" : "left",
                      direction: isArabic ? "rtl" : "ltr",
                    }}
                  >
                    {t.hero.title2}
                  </span>
                </div>
              </motion.div>

              {/* Features List - Größerer Text für Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className={`mb-8 md:mb-8 space-y-3 md:space-y-3 ${
                  isArabic ? "flex flex-col items-end" : ""
                }`}
              >
                {t.hero.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className={`flex items-center ${
                      isArabic
                        ? "flex-row-reverse space-x-reverse space-x-3"
                        : "space-x-3"
                    }`}
                  >
                    <div className="bg-[#F5BB00] rounded-full p-2 md:p-2 flex-shrink-0">
                      <FaCheck className="text-black text-sm md:text-sm" />
                    </div>
                    <span
                      className={`text-white font-bold text-lg sm:text-lg md:text-lg lg:text-xl italic ${
                        isArabic ? "pr-0 pl-5" : "pr-5"
                      }`}
                      style={{
                        textAlign: isArabic ? "right" : "left",
                        direction: isArabic ? "rtl" : "ltr",
                      }}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button - Größerer Text für Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className={`flex ${isArabic ? "justify-end" : "justify-start"}`}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(245, 187, 0, 0.3)",
                  }}
                  onClick={() => navigate("/anmelden")} // Korrekte Navigation
                  whileTap={{ scale: 0.95 }}
                  className={`bg-[#F5BB00] text-black px-8 py-4 md:px-8 md:py-4 rounded-xl md:rounded-xl font-bold text-lg md:text-lg flex items-center hover:bg-yellow-400 transition-all duration-300 shadow-lg cursor-pointer ${
                    // cursor-pointer hinzugefügt
                    isArabic
                      ? "flex-row-reverse space-x-reverse space-x-3"
                      : "space-x-3"
                  }`}
                  style={{
                    direction: isArabic ? "rtl" : "ltr",
                  }}
                >
                  <span>{t.hero.cta}</span>
                  <span className="text-xl md:text-xl">
                    {isArabic ? "←" : "→"}
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
