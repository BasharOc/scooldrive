import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaBook,
  FaClipboardCheck,
  FaMotorcycle,
  FaTrophy,
  FaIdCard,
  FaEye,
  FaGraduationCap,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const content = {
  DE: {
    header: {
      title: "Dein Weg zum",
      titleHighlight: "Motorradführerschein",
      subtitle:
        "Wähle deine Führerscheinklasse und starte dein Abenteuer auf zwei Rädern.",
    },
    ageInfo: {
      A1: "✨ Ab 16 Jahren möglich!",
      A2: "✨ Ab 18 Jahren möglich!",
      A: "✨ Direkteinstieg ab 24 Jahren!",
    },
    start: "START",
    cta: {
      A1: "A1 Führerschein starten!",
      A2: "A2 Führerschein starten!",
      A: "A Führerschein starten!",
    },
    stepsA1: [
      {
        title: "Anmeldung & Unterlagen",
        description: "Online auf der Website oder vor Ort in Lüneburg anmelden",
        details: [
          "Schnelle Online-Anmeldung",
          "Persönliche Beratung vor Ort",
          "Alle Unterlagen zusammenstellen",
        ],
      },
      {
        title: "Sehtest & Erste Hilfe",
        description: "Sehtest beim Optiker und Erste-Hilfe-Kurs absolvieren",
        details: [
          "Sehtest beim Optiker",
          "Erste-Hilfe-Kurs (9 UE)",
          "Gültigkeitsdauer beachten",
        ],
      },
      {
        title: "Führerscheinantrag",
        description: "Antrag bei der Führerscheinstelle einreichen",
        details: [
          "Antrag ausfüllen",
          "Biometrisches Foto",
          "Bearbeitungszeit ca. 4-6 Wochen",
        ],
      },
      {
        title: "Theorieunterricht",
        description:
          "12 Doppelstunden Grundstoff + 4 Doppelstunden Zusatzstoff",
        details: [
          "16 Doppelstunden insgesamt",
          "Verkehrsregeln lernen",
          "Technik & Sicherheit",
        ],
      },
      {
        title: "Theorieprüfung",
        description: "Computergestützte Prüfung beim TÜV bestehen",
        details: [
          "30 Fragen zu beantworten",
          "Max. 10 Fehlerpunkte",
          "Bei Bestehen: Praxisausbildung",
        ],
      },
      {
        title: "Praktische Fahrstunden",
        description: "Fahrstunden auf dem Motorrad absolvieren",
        details: [
          "Mindestens 12 Sonderfahrten",
          "Grundausbildung individuell",
          "Erfahrene Fahrlehrer",
        ],
      },
      {
        title: "Praktische Prüfung",
        description: "Fahrprüfung mit Prüfer erfolgreich bestehen",
        details: [
          "45 Minuten Prüfungsfahrt",
          "Verschiedene Fahrmanöver",
          "Professionelle Begleitung",
        ],
      },
      {
        title: "Führerschein erhalten",
        description: "Motorradführerschein abholen und losfahren!",
        details: [
          "Führerschein abholen",
          "125ccm Motorräder fahren",
          "Freiheit auf zwei Rädern!",
        ],
      },
    ],
    stepsA2: [
      {
        title: "Anmeldung & Unterlagen",
        description: "Online auf der Website oder vor Ort in Lüneburg anmelden",
        details: [
          "Schnelle Online-Anmeldung",
          "Persönliche Beratung vor Ort",
          "Alle Unterlagen zusammenstellen",
        ],
      },
      {
        title: "Sehtest & Erste Hilfe",
        description: "Sehtest beim Optiker und Erste-Hilfe-Kurs absolvieren",
        details: [
          "Sehtest beim Optiker",
          "Erste-Hilfe-Kurs (9 UE)",
          "Gültigkeitsdauer beachten",
        ],
      },
      {
        title: "Führerscheinantrag",
        description: "Antrag bei der Führerscheinstelle einreichen",
        details: [
          "Antrag ausfüllen",
          "Biometrisches Foto",
          "Bearbeitungszeit ca. 4-6 Wochen",
        ],
      },
      {
        title: "Theorieunterricht",
        description:
          "12 Doppelstunden Grundstoff + 4 Doppelstunden Zusatzstoff",
        details: [
          "16 Doppelstunden insgesamt",
          "Verkehrsregeln lernen",
          "Technik & Sicherheit",
        ],
      },
      {
        title: "Theorieprüfung",
        description: "Computergestützte Prüfung beim TÜV bestehen",
        details: [
          "30 Fragen zu beantworten",
          "Max. 10 Fehlerpunkte",
          "Bei Bestehen: Praxisausbildung",
        ],
      },
      {
        title: "Praktische Fahrstunden",
        description: "Fahrstunden auf dem Motorrad absolvieren",
        details: [
          "Mindestens 12 Sonderfahrten",
          "Grundausbildung individuell",
          "Mittelschwere Motorräder",
        ],
      },
      {
        title: "Praktische Prüfung",
        description: "Fahrprüfung mit Prüfer erfolgreich bestehen",
        details: [
          "60 Minuten Prüfungsfahrt",
          "Verschiedene Fahrmanöver",
          "Höhere Anforderungen",
        ],
      },
      {
        title: "Führerschein erhalten",
        description: "Motorradführerschein abholen und losfahren!",
        details: [
          "Führerschein abholen",
          "Bis 35kW Motorräder fahren",
          "Mehr Power, mehr Spaß!",
        ],
      },
    ],
    stepsA: [
      {
        title: "Anmeldung & Unterlagen",
        description: "Online auf der Website oder vor Ort in Lüneburg anmelden",
        details: [
          "Schnelle Online-Anmeldung",
          "Persönliche Beratung vor Ort",
          "Alle Unterlagen zusammenstellen",
        ],
      },
      {
        title: "Praktische Fahrstunden",
        description: "Fahrstunden auf schweren Motorrädern absolvieren",
        details: [
          "Mindestens 12 Sonderfahrten",
          "Schwere Motorräder über 600ccm",
          "Höchste Anforderungen",
        ],
      },
      {
        title: "Praktische Prüfung",
        description: "Anspruchsvolle Fahrprüfung erfolgreich bestehen",
        details: [
          "70 Minuten Prüfungsfahrt",
          "Komplexe Fahrmanöver",
          "Maximale Herausforderung",
        ],
      },
      {
        title: "Führerschein erhalten",
        description: "Unbegrenzten Motorradführerschein abholen!",
        details: [
          "Führerschein abholen",
          "Alle Motorräder fahren",
          "Grenzenlose Freiheit!",
        ],
      },
    ],
  },
  EN: {
    header: {
      title: "Your Path to",
      titleHighlight: "Motorcycle License",
      subtitle:
        "Choose your license class and start your adventure on two wheels.",
    },
    ageInfo: {
      A1: "✨ From 16 years old!",
      A2: "✨ From 18 years old!",
      A: "✨ Direct entry from 24 years!",
    },
    start: "START",
    cta: {
      A1: "Start A1 License!",
      A2: "Start A2 License!",
      A: "Start A License!",
    },
    stepsA1: [
      {
        title: "Registration & Documents",
        description: "Register online on the website or in person in Lüneburg",
        details: [
          "Quick online registration",
          "Personal consultation on-site",
          "Gather all documents",
        ],
      },
      {
        title: "Eye Test & First Aid",
        description: "Eye test at optician and first aid course",
        details: [
          "Eye test at optician",
          "First aid course (9 hours)",
          "Consider validity period",
        ],
      },
      {
        title: "License Application",
        description: "Submit application to licensing office",
        details: [
          "Fill out application",
          "Biometric photo",
          "Processing time 4-6 weeks",
        ],
      },
      {
        title: "Theory Classes",
        description: "12 double lessons basic + 4 double lessons additional",
        details: [
          "16 double lessons total",
          "Learn traffic rules",
          "Technology & safety",
        ],
      },
      {
        title: "Theory Exam",
        description: "Pass computer-based exam at TÜV",
        details: [
          "30 questions to answer",
          "Max. 10 error points",
          "If passed: practical training",
        ],
      },
      {
        title: "Practical Lessons",
        description: "Take driving lessons on motorcycle",
        details: [
          "Minimum 12 special trips",
          "Individual basic training",
          "Experienced instructors",
        ],
      },
      {
        title: "Practical Exam",
        description: "Successfully pass driving test with examiner",
        details: [
          "45 minutes test drive",
          "Various driving maneuvers",
          "Professional support",
        ],
      },
      {
        title: "Receive License",
        description: "Pick up motorcycle license and start riding!",
        details: [
          "Pick up license",
          "Drive 125cc motorcycles",
          "Freedom on two wheels!",
        ],
      },
    ],
    stepsA2: [
      {
        title: "Registration & Documents",
        description: "Register online on the website or in person in Lüneburg",
        details: [
          "Quick online registration",
          "Personal consultation on-site",
          "Gather all documents",
        ],
      },
      {
        title: "Eye Test & First Aid",
        description: "Eye test at optician and first aid course",
        details: [
          "Eye test at optician",
          "First aid course (9 hours)",
          "Consider validity period",
        ],
      },
      {
        title: "License Application",
        description: "Submit application to licensing office",
        details: [
          "Fill out application",
          "Biometric photo",
          "Processing time 4-6 weeks",
        ],
      },
      {
        title: "Theory Classes",
        description: "12 double lessons basic + 4 double lessons additional",
        details: [
          "16 double lessons total",
          "Learn traffic rules",
          "Technology & safety",
        ],
      },
      {
        title: "Theory Exam",
        description: "Pass computer-based exam at TÜV",
        details: [
          "30 questions to answer",
          "Max. 10 error points",
          "If passed: practical training",
        ],
      },
      {
        title: "Practical Lessons",
        description: "Take driving lessons on motorcycle",
        details: [
          "Minimum 12 special trips",
          "Individual basic training",
          "Medium motorcycles",
        ],
      },
      {
        title: "Practical Exam",
        description: "Successfully pass driving test with examiner",
        details: [
          "60 minutes test drive",
          "Various driving maneuvers",
          "Higher requirements",
        ],
      },
      {
        title: "Receive License",
        description: "Pick up motorcycle license and start riding!",
        details: [
          "Pick up license",
          "Up to 35kW motorcycles",
          "More power, more fun!",
        ],
      },
    ],
    stepsA: [
      {
        title: "Registration & Documents",
        description: "Register online on the website or in person in Lüneburg",
        details: [
          "Quick online registration",
          "Personal consultation on-site",
          "Gather all documents",
        ],
      },
      {
        title: "Practical Lessons",
        description: "Take lessons on heavy motorcycles",
        details: [
          "Minimum 12 special trips",
          "Heavy motorcycles over 600cc",
          "Highest requirements",
        ],
      },
      {
        title: "Practical Exam",
        description: "Successfully pass challenging driving test",
        details: [
          "70 minutes test drive",
          "Complex driving maneuvers",
          "Maximum challenge",
        ],
      },
      {
        title: "Receive License",
        description: "Pick up unlimited motorcycle license!",
        details: [
          "Pick up license",
          "Drive all motorcycles",
          "Unlimited freedom!",
        ],
      },
    ],
  },
  AR: {
    header: {
      title: "طريقك إلى",
      titleHighlight: "رخصة الدراجة النارية",
      subtitle: "اختر فئة الرخصة الخاصة بك وابدأ مغامرتك على عجلتين.",
    },
    ageInfo: {
      A1: "✨ من عمر 16 سنة!",
      A2: "✨ من عمر 18 سنة!",
      A: "✨ دخول مباشر من عمر 24 سنة!",
    },
    start: "بداية",
    cta: {
      A1: "ابدأ رخصة A1!",
      A2: "ابدأ رخصة A2!",
      A: "ابدأ رخصة A!",
    },
    stepsA1: [
      {
        title: "التسجيل والوثائق",
        description: "التسجيل عبر الإنترنت أو شخصياً في لونيبورغ",
        details: [
          "تسجيل سريع عبر الإنترنت",
          "استشارة شخصية في الموقع",
          "جمع جميع الوثائق",
        ],
      },
      {
        title: "فحص النظر والإسعافات الأولية",
        description: "فحص النظر عند طبيب العيون ودورة الإسعافات الأولية",
        details: [
          "فحص النظر عند طبيب العيون",
          "دورة الإسعافات الأولية (9 ساعات)",
          "مراعاة فترة الصلاحية",
        ],
      },
      {
        title: "طلب الرخصة",
        description: "تقديم الطلب إلى مكتب الترخيص",
        details: ["ملء الطلب", "صورة بيومترية", "وقت المعالجة 4-6 أسابيع"],
      },
      {
        title: "دروس النظرية",
        description: "12 درس مزدوج أساسي + 4 دروس مزدوجة إضافية",
        details: [
          "16 درس مزدوج إجمالي",
          "تعلم قواعد المرور",
          "التكنولوجيا والسلامة",
        ],
      },
      {
        title: "امتحان النظرية",
        description: "اجتياز الامتحان الحاسوبي في TÜV",
        details: [
          "30 سؤال للإجابة",
          "حد أقصى 10 نقاط خطأ",
          "عند النجاح: التدريب العملي",
        ],
      },
      {
        title: "الدروس العملية",
        description: "أخذ دروس القيادة على الدراجة النارية",
        details: [
          "حد أدنى 12 رحلة خاصة",
          "تدريب أساسي فردي",
          "مدربون ذوو خبرة",
        ],
      },
      {
        title: "الامتحان العملي",
        description: "اجتياز امتحان القيادة بنجاح مع الفاحص",
        details: ["45 دقيقة امتحان قيادة", "مناورات قيادة مختلفة", "دعم مهني"],
      },
      {
        title: "الحصول على الرخصة",
        description: "استلام رخصة الدراجة النارية وابدأ القيادة!",
        details: ["استلام الرخصة", "قيادة دراجات 125cc", "حرية على عجلتين!"],
      },
    ],
    stepsA2: [
      {
        title: "التسجيل والوثائق",
        description: "التسجيل عبر الإنترنت أو شخصياً في لونيبورغ",
        details: [
          "تسجيل سريع عبر الإنترنت",
          "استشارة شخصية في الموقع",
          "جمع جميع الوثائق",
        ],
      },
      {
        title: "فحص النظر والإسعافات الأولية",
        description: "فحص النظر عند طبيب العيون ودورة الإسعافات الأولية",
        details: [
          "فحص النظر عند طبيب العيون",
          "دورة الإسعافات الأولية (9 ساعات)",
          "مراعاة فترة الصلاحية",
        ],
      },
      {
        title: "طلب الرخصة",
        description: "تقديم الطلب إلى مكتب الترخيص",
        details: ["ملء الطلب", "صورة بيومترية", "وقت المعالجة 4-6 أسابيع"],
      },
      {
        title: "دروس النظرية",
        description: "12 درس مزدوج أساسي + 4 دروس مزدوجة إضافية",
        details: [
          "16 درس مزدوج إجمالي",
          "تعلم قواعد المرور",
          "التكنولوجيا والسلامة",
        ],
      },
      {
        title: "امتحان النظرية",
        description: "اجتياز الامتحان الحاسوبي في TÜV",
        details: [
          "30 سؤال للإجابة",
          "حد أقصى 10 نقاط خطأ",
          "عند النجاح: التدريب العملي",
        ],
      },
      {
        title: "الدروس العملية",
        description: "أخذ دروس القيادة على الدراجة النارية",
        details: ["حد أدنى 12 رحلة خاصة", "تدريب أساسي فردي", "دراجات متوسطة"],
      },
      {
        title: "الامتحان العملي",
        description: "اجتياز امتحان القيادة بنجاح مع الفاحص",
        details: [
          "60 دقيقة امتحان قيادة",
          "مناورات قيادة مختلفة",
          "متطلبات أعلى",
        ],
      },
      {
        title: "الحصول على الرخصة",
        description: "استلام رخصة الدراجة النارية وابدأ القيادة!",
        details: ["استلام الرخصة", "حتى 35kW دراجات", "قوة أكثر، متعة أكثر!"],
      },
    ],
    stepsA: [
      {
        title: "التسجيل والوثائق",
        description: "التسجيل عبر الإنترنت أو شخصياً في لونيبورغ",
        details: [
          "تسجيل سريع عبر الإنترنت",
          "استشارة شخصية في الموقع",
          "جمع جميع الوثائق",
        ],
      },
      {
        title: "الدروس العملية",
        description: "أخذ دروس على الدراجات الثقيلة",
        details: [
          "حد أدنى 12 رحلة خاصة",
          "دراجات ثقيلة أكثر من 600cc",
          "أعلى المتطلبات",
        ],
      },
      {
        title: "الامتحان العملي",
        description: "اجتياز امتحان القيادة التحدي بنجاح",
        details: ["70 دقيقة امتحان قيادة", "مناورات قيادة معقدة", "أقصى تحدي"],
      },
      {
        title: "الحصول على الرخصة",
        description: "استلام رخصة الدراجة النارية غير المحدودة!",
        details: ["استلام الرخصة", "قيادة جميع الدراجات", "حرية غير محدودة!"],
      },
    ],
  },
};

const MotorradLicenseSteps = () => {
  const [licenseType, setLicenseType] = useState("A1");
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();

  const t = content[selectedLanguage] || content.DE;

  const getCurrentSteps = () => {
    switch (licenseType) {
      case "A1":
        return t.stepsA1;
      case "A2":
        return t.stepsA2;
      case "A":
        return t.stepsA;
      default:
        return t.stepsA1;
    }
  };

  const currentSteps = getCurrentSteps();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getStepIcon = (index) => {
    const icons = [
      <FaUserPlus className="text-xl md:text-3xl" />,
      <FaEye className="text-xl md:text-3xl" />,
      <FaIdCard className="text-xl md:text-3xl" />,
      <FaBook className="text-xl md:text-3xl" />,
      <FaClipboardCheck className="text-xl md:text-3xl" />,
      <FaMotorcycle className="text-xl md:text-3xl" />,
      <FaGraduationCap className="text-xl md:text-3xl" />,
      <FaTrophy className="text-xl md:text-3xl" />,
    ];

    if (licenseType === "A") {
      // Für A-Klasse andere Icon-Reihenfolge
      const aIcons = [
        <FaUserPlus className="text-xl md:text-3xl" />,
        <FaMotorcycle className="text-xl md:text-3xl" />,
        <FaGraduationCap className="text-xl md:text-3xl" />,
        <FaTrophy className="text-xl md:text-3xl" />,
      ];
      return aIcons[index] || icons[index];
    }

    return icons[index];
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {t.header.title}{" "}
            <span className="text-[#F5BB00]">{t.header.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t.header.subtitle}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="flex bg-gray-100 rounded-xl p-1 shadow-lg">
              {/* Background slider */}
              <motion.div
                className="absolute top-1 bottom-1 bg-[#F5BB00] rounded-lg shadow-md"
                animate={{
                  left:
                    licenseType === "A1"
                      ? "4px"
                      : licenseType === "A2"
                      ? "33.33%"
                      : "66.66%",
                  width: "calc(33.33% - 4px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />

              <motion.button
                onClick={() => setLicenseType("A1")}
                className={`relative z-10 px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 ${
                  licenseType === "A1"
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                A1 (125ccm)
              </motion.button>

              <motion.button
                onClick={() => setLicenseType("A2")}
                className={`relative z-10 px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 ${
                  licenseType === "A2"
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                A2 (35kW)
              </motion.button>

              <motion.button
                onClick={() => setLicenseType("A")}
                className={`relative z-10 px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 ${
                  licenseType === "A"
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                A (Unbegrenzt)
              </motion.button>
            </div>

            {/* Info Text */}
            <motion.div
              className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#F5BB00] font-semibold text-base md:text-lg">
                {t.ageInfo[licenseType]}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={licenseType}
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>

          {/* Start Point */}
          <motion.div
            className="relative flex items-center mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5BB00] rounded-full flex items-center justify-center z-10 shadow-lg">
              <span className="text-black font-bold text-xs md:text-sm">
                {t.start}
              </span>
            </div>
          </motion.div>

          {currentSteps.map((step, index) => (
            <div
              key={index + 1}
              className="relative flex items-center mb-8 last:mb-0"
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
                className="flex-1 ml-10 md:ml-20"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-6 space-y-4 md:space-y-0">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0 flex md:flex-col items-center md:items-start space-x-4 md:space-x-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5BB00] rounded-full flex items-center justify-center text-black font-bold text-lg md:text-xl mb-0 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <div className="text-[#F5BB00] flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {getStepIcon(index)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 group-hover:text-[#F5BB00] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg mb-3 md:mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-[#F5BB00] text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(245, 187, 0, 0.3)",
            }}
            onClick={() => navigate("/anmelden")}
            whileTap={{ scale: 0.95 }}
          >
            {t.cta[licenseType]}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MotorradLicenseSteps;
