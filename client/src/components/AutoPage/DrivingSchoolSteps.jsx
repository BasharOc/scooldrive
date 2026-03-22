import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaBook,
  FaClipboardCheck,
  FaCar,
  FaTrophy,
  FaIdCard,
  FaEye,
  FaGraduationCap,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const stepsContent = {
  DE: {
    automatik: [
      {
        id: 1,
        title: "Anmeldung & Unterlagen",
        description:
          "Online anmelden und alle erforderlichen Dokumente einreichen",
        icon: <FaUserPlus className="text-xl md:text-3xl" />,
      },
      {
        id: 2,
        title: "Sehtest & Erste Hilfe",
        description: "Sehtest beim Optiker und Erste-Hilfe-Kurs absolvieren",
        icon: <FaEye className="text-xl md:text-3xl" />,
      },
      {
        id: 3,
        title: "Führerscheinantrag",
        description: "Antrag bei der Behörde stellen mit biometrischem Foto",
        icon: <FaIdCard className="text-xl md:text-3xl" />,
      },
      {
        id: 4,
        title: "Theorieunterricht",
        description: "14 Doppelstunden besuchen und Verkehrsregeln lernen",
        icon: <FaBook className="text-xl md:text-3xl" />,
      },
      {
        id: 5,
        title: "Theorieprüfung",
        description: "30 Fragen am Computer beantworten, max. 10 Fehlerpunkte",
        icon: <FaClipboardCheck className="text-xl md:text-3xl" />,
      },
      {
        id: 6,
        title: "Praktische Fahrstunden",
        description:
          "Grundausbildung plus 12 Sonderfahrten mit Automatikgetriebe",
        icon: <FaCar className="text-xl md:text-3xl" />,
      },
      {
        id: 7,
        title: "Praktische Prüfung",
        description: "45 Minuten Fahrprüfung mit Prüfer erfolgreich bestehen",
        icon: <FaGraduationCap className="text-xl md:text-3xl" />,
      },
      {
        id: 8,
        title: "Führerschein erhalten",
        description: "Automatik-Führerschein abholen und losfahren",
        icon: <FaTrophy className="text-xl md:text-3xl" />,
      },
    ],
    automatikSchalter: [
      {
        id: 1,
        title: "Anmeldung & Unterlagen",
        description:
          "Online anmelden und alle erforderlichen Dokumente einreichen",
        icon: <FaUserPlus className="text-xl md:text-3xl" />,
      },
      {
        id: 2,
        title: "Sehtest & Erste Hilfe",
        description: "Sehtest beim Optiker und Erste-Hilfe-Kurs absolvieren",
        icon: <FaEye className="text-xl md:text-3xl" />,
      },
      {
        id: 3,
        title: "Führerscheinantrag",
        description: "Antrag bei der Behörde stellen mit biometrischem Foto",
        icon: <FaIdCard className="text-xl md:text-3xl" />,
      },
      {
        id: 4,
        title: "Theorieunterricht",
        description: "14 Doppelstunden besuchen und Verkehrsregeln lernen",
        icon: <FaBook className="text-xl md:text-3xl" />,
      },
      {
        id: 5,
        title: "Theorieprüfung",
        description: "30 Fragen am Computer beantworten, max. 10 Fehlerpunkte",
        icon: <FaClipboardCheck className="text-xl md:text-3xl" />,
      },
      {
        id: 6,
        title: "Praktische Fahrstunden",
        description: "Grundausbildung plus 12 Sonderfahrten mit Schaltgetriebe",
        icon: <FaCar className="text-xl md:text-3xl" />,
      },
      {
        id: 7,
        title: "Praktische Prüfung",
        description: "45 Minuten Fahrprüfung mit Schaltgetriebe bestehen",
        icon: <FaGraduationCap className="text-xl md:text-3xl" />,
      },
      {
        id: 8,
        title: "Führerschein erhalten",
        description:
          "Vollwertigen Führerschein für Automatik und Schaltung erhalten",
        icon: <FaTrophy className="text-xl md:text-3xl" />,
      },
    ],
  },
  EN: {
    automatik: [
      {
        id: 1,
        title: "Registration & Documents",
        description: "Register online and submit all required documents",
        icon: <FaUserPlus className="text-xl md:text-3xl" />,
      },
      {
        id: 2,
        title: "Eye Test & First Aid",
        description: "Complete an eye test and a first aid course",
        icon: <FaEye className="text-xl md:text-3xl" />,
      },
      {
        id: 3,
        title: "License Application",
        description: "Submit your application with a biometric photo",
        icon: <FaIdCard className="text-xl md:text-3xl" />,
      },
      {
        id: 4,
        title: "Theory Lessons",
        description: "Attend 14 double lessons and learn traffic rules",
        icon: <FaBook className="text-xl md:text-3xl" />,
      },
      {
        id: 5,
        title: "Theory Exam",
        description: "Answer 30 questions on the computer, max. 10 mistakes",
        icon: <FaClipboardCheck className="text-xl md:text-3xl" />,
      },
      {
        id: 6,
        title: "Practical Driving Lessons",
        description:
          "Basic training plus 12 special drives with automatic transmission",
        icon: <FaCar className="text-xl md:text-3xl" />,
      },
      {
        id: 7,
        title: "Practical Exam",
        description: "Pass a 45-minute driving test with an examiner",
        icon: <FaGraduationCap className="text-xl md:text-3xl" />,
      },
      {
        id: 8,
        title: "Receive Your License",
        description: "Pick up your automatic license and start driving",
        icon: <FaTrophy className="text-xl md:text-3xl" />,
      },
    ],
    automatikSchalter: [
      {
        id: 1,
        title: "Registration & Documents",
        description: "Register online and submit all required documents",
        icon: <FaUserPlus className="text-xl md:text-3xl" />,
      },
      {
        id: 2,
        title: "Eye Test & First Aid",
        description: "Complete an eye test and a first aid course",
        icon: <FaEye className="text-xl md:text-3xl" />,
      },
      {
        id: 3,
        title: "License Application",
        description: "Submit your application with a biometric photo",
        icon: <FaIdCard className="text-xl md:text-3xl" />,
      },
      {
        id: 4,
        title: "Theory Lessons",
        description: "Attend 14 double lessons and learn traffic rules",
        icon: <FaBook className="text-xl md:text-3xl" />,
      },
      {
        id: 5,
        title: "Theory Exam",
        description: "Answer 30 questions on the computer, max. 10 mistakes",
        icon: <FaClipboardCheck className="text-xl md:text-3xl" />,
      },
      {
        id: 6,
        title: "Practical Driving Lessons",
        description:
          "Basic training plus 12 special drives with manual transmission",
        icon: <FaCar className="text-xl md:text-3xl" />,
      },
      {
        id: 7,
        title: "Practical Exam",
        description: "Pass a 45-minute driving test with manual transmission",
        icon: <FaGraduationCap className="text-xl md:text-3xl" />,
      },
      {
        id: 8,
        title: "Receive Your License",
        description:
          "Receive a full license for both automatic and manual transmission",
        icon: <FaTrophy className="text-xl md:text-3xl" />,
      },
    ],
  },
  AR: {
    automatik: [
      {
        id: 1,
        title: "التسجيل والوثائق",
        description: "سجل عبر الإنترنت وقدم جميع الوثائق المطلوبة",
        icon: <FaUserPlus className="text-xl md:text-3xl" />,
      },
      {
        id: 2,
        title: "اختبار النظر والإسعافات الأولية",
        description: "قم بإجراء اختبار النظر ودورة الإسعافات الأولية",
        icon: <FaEye className="text-xl md:text-3xl" />,
      },
      {
        id: 3,
        title: "طلب الحصول على الرخصة",
        description: "قدم طلبك مع صورة بيومترية",
        icon: <FaIdCard className="text-xl md:text-3xl" />,
      },
      {
        id: 4,
        title: "دروس نظرية",
        description: "احضر 14 درسًا مزدوجًا وتعلم قواعد المرور",
        icon: <FaBook className="text-xl md:text-3xl" />,
      },
      {
        id: 5,
        title: "اختبار نظري",
        description: "أجب على 30 سؤالًا على الكمبيوتر، بحد أقصى 10 أخطاء",
        icon: <FaClipboardCheck className="text-xl md:text-3xl" />,
      },
      {
        id: 6,
        title: "دروس قيادة عملية",
        description:
          "تدريب أساسي بالإضافة إلى 12 رحلة خاصة بناقل حركة أوتوماتيكي",
        icon: <FaCar className="text-xl md:text-3xl" />,
      },
      {
        id: 7,
        title: "اختبار عملي",
        description: "اجتياز اختبار قيادة لمدة 45 دقيقة مع الفاحص",
        icon: <FaGraduationCap className="text-xl md:text-3xl" />,
      },
      {
        id: 8,
        title: "احصل على رخصتك",
        description: "احصل على رخصة القيادة الأوتوماتيكية وابدأ القيادة",
        icon: <FaTrophy className="text-xl md:text-3xl" />,
      },
    ],
    automatikSchalter: [
      {
        id: 1,
        title: "التسجيل والوثائق",
        description: "سجل عبر الإنترنت وقدم جميع الوثائق المطلوبة",
        icon: <FaUserPlus className="text-xl md:text-3xl" />,
      },
      {
        id: 2,
        title: "اختبار النظر والإسعافات الأولية",
        description: "قم بإجراء اختبار النظر ودورة الإسعافات الأولية",
        icon: <FaEye className="text-xl md:text-3xl" />,
      },
      {
        id: 3,
        title: "طلب الحصول على الرخصة",
        description: "قدم طلبك مع صورة بيومترية",
        icon: <FaIdCard className="text-xl md:text-3xl" />,
      },
      {
        id: 4,
        title: "دروس نظرية",
        description: "احضر 14 درسًا مزدوجًا وتعلم قواعد المرور",
        icon: <FaBook className="text-xl md:text-3xl" />,
      },
      {
        id: 5,
        title: "اختبار نظري",
        description: "أجب على 30 سؤالًا على الكمبيوتر، بحد أقصى 10 أخطاء",
        icon: <FaClipboardCheck className="text-xl md:text-3xl" />,
      },
      {
        id: 6,
        title: "دروس قيادة عملية",
        description: "تدريب أساسي بالإضافة إلى 12 رحلة خاصة بناقل حركة يدوي",
        icon: <FaCar className="text-xl md:text-3xl" />,
      },
      {
        id: 7,
        title: "اختبار عملي",
        description: "اجتياز اختبار قيادة لمدة 45 دقيقة بناقل حركة يدوي",
        icon: <FaGraduationCap className="text-xl md:text-3xl" />,
      },
      {
        id: 8,
        title: "احصل على رخصتك",
        description: "احصل على رخصة القيادة الكاملة للأوتوماتيك واليدوي",
        icon: <FaTrophy className="text-xl md:text-3xl" />,
      },
    ],
  },
};

const AutoLicenseSteps = () => {
  const { selectedLanguage } = useLanguage(); // Hole die Sprache aus dem Kontext
  const [licenseType, setLicenseType] = useState("automatik");
  const navigate = useNavigate();

  const currentSteps =
    stepsContent[selectedLanguage]?.[licenseType] ||
    stepsContent.DE[licenseType];

  return (
    <div className="min-h-screen bg-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            {selectedLanguage === "DE"
              ? "Dein Weg zum Autoführerschein"
              : selectedLanguage === "EN"
              ? "Your Path to a Car License"
              : "طريقك إلى رخصة القيادة"}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8">
            {selectedLanguage === "DE"
              ? "Wähle zwischen Automatik oder der Vollversion mit Schaltgetriebe."
              : selectedLanguage === "EN"
              ? "Choose between automatic or the full version with manual transmission."
              : "اختر بين الأوتوماتيك أو النسخة الكاملة بناقل حركة يدوي."}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <div className="flex bg-gray-100 rounded-xl p-1 shadow-lg">
              {/* Background slider */}
              <motion.div
                className="absolute top-1 bottom-1 bg-[#F5BB00] rounded-lg shadow-md"
                animate={{
                  left: licenseType === "automatik" ? "4px" : "50%",
                  width: "calc(50% - 4px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />

              <motion.button
                onClick={() => setLicenseType("automatik")}
                className={`relative z-10 px-4 md:px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 flex-1 ${
                  licenseType === "automatik"
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {selectedLanguage === "DE"
                  ? "Nur Automatik"
                  : selectedLanguage === "EN"
                  ? "Automatic Only"
                  : "أوتوماتيك فقط"}
              </motion.button>

              <motion.button
                onClick={() => setLicenseType("automatikSchalter")}
                className={`relative z-10 px-4 md:px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 flex-1 ${
                  licenseType === "automatikSchalter"
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {selectedLanguage === "DE"
                  ? "Automatik + Schaltung"
                  : selectedLanguage === "EN"
                  ? "Automatic + Manual"
                  : "أوتوماتيك + يدوي"}
              </motion.button>
            </div>

            {/* Info Text */}
            <motion.div
              className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#F5BB00] font-semibold text-sm md:text-base">
                {licenseType === "automatik" &&
                  (selectedLanguage === "DE"
                    ? "✨ Einfacher zu lernen!"
                    : selectedLanguage === "EN"
                    ? "✨ Easier to learn!"
                    : "✨ أسهل للتعلم!")}
                {licenseType === "automatikSchalter" &&
                  (selectedLanguage === "DE"
                    ? "✨ Maximale Flexibilität!"
                    : selectedLanguage === "EN"
                    ? "✨ Maximum flexibility!"
                    : "✨ أقصى قدر من المرونة!")}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>

          {/* Start Point */}
          <motion.div
            className="relative flex items-center mb-6 md:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5BB00] rounded-full flex items-center justify-center z-10 shadow-lg">
              <span className="text-black font-bold text-xs md:text-sm">
                START
              </span>
            </div>
          </motion.div>

          {currentSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex items-center mb-6 md:mb-8 last:mb-0"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-4 md:left-8 w-4 h-4 md:w-6 md:h-6 bg-[#F5BB00] rounded-full border-2 md:border-4 border-white shadow-lg z-10 transform -translate-x-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              />

              {/* Step Card */}
              <motion.div
                className="flex-1 ml-8 md:ml-20"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-6 space-y-4 md:space-y-0">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0 flex md:flex-col items-center md:items-start space-x-4 md:space-x-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5BB00] rounded-full flex items-center justify-center text-black font-bold text-lg md:text-xl mb-0 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        {step.id}
                      </div>
                      <div className="text-[#F5BB00] flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 md:mb-3 group-hover:text-[#F5BB00] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-[#F5BB00] text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(245, 187, 0, 0.3)",
            }}
            onClick={() => navigate("/anmelden")}
            whileTap={{ scale: 0.95 }}
          >
            {licenseType === "automatik"
              ? "Automatik-Führerschein starten!"
              : "Vollwertigen Führerschein starten!"}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AutoLicenseSteps;
