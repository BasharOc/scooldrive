import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const factsContent = {
  DE: [
    { title: "MINDESTALTER", description: "AB 15 JAHRE" },
    { title: "KLASSEN & FAHRZEUGE", description: "MOFA, ROLLER, A1, A2, A" },
    { title: "AUSBILDUNGSDAUER", description: "INDIVIDUELL" },
    { title: "KOSTEN", description: "AB CA. 1.000 €" },
    {
      title: "PRÜFUNG",
      description: "THEORIE- UND PRAXISPRÜFUNG ERFORDERLICH",
    },
    { title: "GÜLTIGKEIT", description: "EU-WEIT ANERKANNT" },
  ],
  EN: [
    { title: "MINIMUM AGE", description: "FROM 15 YEARS" },
    { title: "CLASSES & VEHICLES", description: "MOFA, SCOOTER, A1, A2, A" },
    { title: "TRAINING DURATION", description: "INDIVIDUAL" },
    { title: "COSTS", description: "FROM APPROX. €1,000" },
    { title: "EXAM", description: "THEORY AND PRACTICAL EXAM REQUIRED" },
    { title: "VALIDITY", description: "RECOGNIZED EU-WIDE" },
  ],
  AR: [
    { title: "الحد الأدنى للعمر", description: "ابتداءً من 15 عامًا" },
    { title: "الفئات والمركبات", description: "موفا، سكوتر، A1، A2، A" },
    { title: "مدة التدريب", description: "حسب الفرد" },
    { title: "التكاليف", description: "ابتداءً من حوالي 1,000 €" },
    { title: "الاختبار", description: "اختبار نظري وعملي مطلوب" },
    {
      title: "الصلاحية",
      description: "معترف بها في جميع أنحاء الاتحاد الأوروبي",
    },
  ],
};

const MotorradFuehrerscheinFacts = () => {
  const { selectedLanguage } = useLanguage(); // Hole die Sprache aus dem Kontext
  const facts = factsContent[selectedLanguage] || factsContent.DE;

  return (
    <motion.div
      className="bg-white rounded-lg max-w-[80vw] mx-auto mb-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Haupttitel */}
      <motion.h1
        className="text-[1.8rem] md:text-3xl font-bold text-black mb-12 text-center tracking-wide"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {selectedLanguage === "DE"
          ? "SCHNELLE FAKTEN ZUM MOTORRADFÜHRERSCHEIN"
          : selectedLanguage === "EN"
          ? "QUICK FACTS ABOUT THE MOTORCYCLE LICENSE"
          : "حقائق سريعة عن رخصة الدراجة النارية"}
      </motion.h1>

      {/* Alle Fakten auf einer Linie */}
      <motion.div
        className="mt-12 overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex gap-4 pb-4">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-4 rounded-lg text-center min-w-max flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3
                className="text-sm font-semibold mb-2"
                style={{ color: "#F5BB00" }}
              >
                {fact.title}
              </h3>
              <p className="text-lg font-bold text-black">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MotorradFuehrerscheinFacts;
