import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const heroContent = {
  DE: {
    badge: "Führerschein Klasse B",
    title: ["Du lebst nicht", "für den Beifahrersitz."],
    description: [
      "Autoführerschein ab 17 Jahren",
      "Kompakte Theoriekurse",
      "Automatik oder Schaltwagen",
    ],
    buttonText: "Jetzt Unabhängig werden",
  },
  EN: {
    badge: "Driver's License Class B",
    title: ["You don't live", "for the passenger seat."],
    description: [
      "Driver's license from 17 years old",
      "Compact theory courses",
      "Automatic or manual cars",
    ],
    buttonText: "Become Independent Now",
  },
  AR: {
    badge: "رخصة القيادة فئة B",
    title: ["أنت لا تعيش", "من أجل مقعد الراكب."],
    description: [
      "رخصة القيادة ابتداءً من عمر 17 عامًا",
      "دورات نظرية مكثفة",
      "سيارات أوتوماتيك أو يدوية",
    ],
    buttonText: "كن مستقلاً الآن",
  },
};

export default function HeroSection() {
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage(); // Sprache aus dem Kontext abrufen
  const lang = heroContent[selectedLanguage] || heroContent.DE; // Inhalte basierend auf der Sprache auswählen
  const isArabic = selectedLanguage === "AR"; // Überprüfen, ob die Sprache Arabisch ist

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-[5vw]">
      {/* Video Hintergrund */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/auto-video.mp4"
        style={{ height: "100vh" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`relative z-20 flex flex-col items-start gap-6 ${
          isArabic ? "text-right rtl w-[100vw]" : "text-left max-w-[90vw]"
        } mx-6`}
        style={{
          direction: isArabic ? "rtl" : "ltr", // Schreibrichtung für Arabisch
        }}
      >
        {/* Tag */}
        <span className="bg-black px-4 py-1 rounded font-bold text-yellow-400 text-lg shadow-lg">
          {lang.badge}
        </span>

        {/* Titel */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide uppercase shadow-xl ${
            isArabic ? "rtl" : ""
          }`}
        >
          {lang.title.map((line, index) => (
            <span
              key={index}
              className="bg-black text-white rounded-md block"
              style={{
                padding: "0.1em 0.2em",
              }}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* Beschreibung */}
        <ul className="text-lg sm:text-xl lg:text-2xl font-bold text-white list-disc pl-6">
          {lang.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(245, 187, 0, 0.3)",
          }}
          onClick={() => navigate("/anmelden")}
          whileTap={{ scale: 0.95 }}
          className={`bg-[#F5BB00] text-black px-8 py-4 md:px-8 md:py-4 rounded-xl md:rounded-xl font-bold text-lg md:text-lg flex items-center hover:bg-yellow-400 transition-all duration-300 shadow-lg cursor-pointer ${
            isArabic
              ? "flex-row-reverse space-x-reverse space-x-3"
              : "space-x-3"
          }`}
          style={{
            direction: isArabic ? "rtl" : "ltr",
          }}
        >
          <span>{lang.buttonText}</span>
          <span className="text-xl md:text-xl">{isArabic ? "←" : "→"}</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
