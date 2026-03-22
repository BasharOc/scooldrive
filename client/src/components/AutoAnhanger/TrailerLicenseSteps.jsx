import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaBook,
  FaClipboardCheck,
  FaCar,
  FaTrophy,
  FaTruck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const TrailerLicenseSteps = () => {
  const [hasCarLicense, setHasCarLicense] = useState(false);
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();

  // Übersetzungen für alle Sprachen
  const translations = {
    DE: {
      title: "Dein Weg zum",
      titleHighlight: "Anhängerführerschein",
      subtitle:
        "Je nach deinem aktuellen Führerschein-Status begleiten wir dich durch den passenden Prozess.",
      noLicense: "Noch kein Führerschein",
      withLicense: "Autoführerschein vorhanden",
      noTheoryRequired: "✨ Keine Theoriestunden notwendig!",
      start: "START",
      ctaWithLicense: "Anhängerführerschein starten!",
      ctaWithoutLicense: "Führerschein + Anhänger beginnen!",
      stepsWithoutLicense: [
        {
          id: 1,
          title: "Anmeldung",
          description: "Online auf der Website oder vor Ort in Lüneburg",
          details: [
            "Schnelle Online-Anmeldung",
            "Persönliche Beratung vor Ort",
            "Flexible Terminvereinbarung",
          ],
        },
        {
          id: 2,
          title: "Theoretischen Unterricht besuchen",
          description:
            "Vorgeschriebener Theorieunterricht für den Anhängerführerschein",
          details: [
            "Zusatzstunden für Anhänger",
            "Spezielle Verkehrsregeln",
            "Sicherheitsbestimmungen",
          ],
        },
        {
          id: 3,
          title: "Praktische Fahrstunden nehmen",
          description: "Vorgeschriebene Fahrstunden mit Anhänger absolvieren",
          details: [
            "Fahrstunden mit Anhänger",
            "Individuelle Stundenanzahl",
            "Erfahrene Fahrlehrer",
          ],
        },
        {
          id: 4,
          title: "Theoretische Prüfung",
          description:
            "Meist nicht nötig bei BE - informiere dich bei der Fahrschule",
          details: [
            "Oft keine Extra-Prüfung",
            "Abhängig von Führerscheinklasse",
            "Beratung in der Fahrschule",
          ],
        },
        {
          id: 5,
          title: "Praktische Prüfung ablegen",
          description: "Fahrt mit Fahrlehrer und Prüfer erfolgreich bestehen",
          details: [
            "Prüfungsanmeldung",
            "Fahrt mit Prüfer",
            "Professionelle Begleitung",
          ],
        },
        {
          id: 6,
          title: "Führerschein erhalten",
          description: "Neuen Führerschein bekommen und Gespanne fahren dürfen",
          details: [
            "Neuer Führerschein",
            "Gespanne fahren erlaubt",
            "Erweiterte Möglichkeiten",
          ],
        },
      ],
      stepsWithLicense: [
        {
          id: 1,
          title: "Anmeldung",
          description: "Online auf der Website oder vor Ort in Lüneburg",
          details: [
            "Schnelle Online-Anmeldung",
            "Persönliche Beratung vor Ort",
            "Autoführerschein mitbringen",
          ],
        },
        {
          id: 2,
          title: "Fahrstunden nehmen",
          description: "Praktische Fahrstunden mit dem Anhänger absolvieren",
          details: [
            "Praktische Fahrstunden",
            "Anhänger-Handling lernen",
            "Individuelle Betreuung",
          ],
        },
        {
          id: 3,
          title: "Praktische Prüfung machen",
          description:
            "Praktische Prüfung für den Anhängerführerschein ablegen",
          details: [
            "Nur praktische Prüfung",
            "Verkürzte Prüfungszeit",
            "Erfahrener Prüfer",
          ],
        },
        {
          id: 4,
          title: "Führerschein abholen",
          description:
            "Neuen Führerschein erhalten und größere Anhänger fahren",
          details: [
            "Führerschein abholen",
            "Größere Anhänger fahren",
            "Mehr Flexibilität",
          ],
        },
      ],
    },
    EN: {
      title: "Your Path to",
      titleHighlight: "Trailer License",
      subtitle:
        "Depending on your current license status, we'll guide you through the appropriate process.",
      noLicense: "No license yet",
      withLicense: "Car license available",
      noTheoryRequired: "✨ No theory lessons required!",
      start: "START",
      ctaWithLicense: "Start trailer license!",
      ctaWithoutLicense: "Start license + trailer!",
      stepsWithoutLicense: [
        {
          id: 1,
          title: "Registration",
          description: "Online on the website or in person in Lüneburg",
          details: [
            "Quick online registration",
            "Personal consultation on-site",
            "Flexible appointment scheduling",
          ],
        },
        {
          id: 2,
          title: "Attend Theory Classes",
          description: "Required theory lessons for the trailer license",
          details: [
            "Additional trailer lessons",
            "Special traffic rules",
            "Safety regulations",
          ],
        },
        {
          id: 3,
          title: "Take Practical Lessons",
          description: "Complete required driving lessons with trailer",
          details: [
            "Driving lessons with trailer",
            "Individual lesson count",
            "Experienced instructors",
          ],
        },
        {
          id: 4,
          title: "Theory Exam",
          description:
            "Usually not required for BE - check with driving school",
          details: [
            "Often no extra exam",
            "Depends on license class",
            "Consultation at driving school",
          ],
        },
        {
          id: 5,
          title: "Take Practical Exam",
          description:
            "Successfully pass the drive with instructor and examiner",
          details: [
            "Exam registration",
            "Drive with examiner",
            "Professional support",
          ],
        },
        {
          id: 6,
          title: "Receive License",
          description: "Get new license and be allowed to drive trailers",
          details: [
            "New license",
            "Trailer driving allowed",
            "Extended possibilities",
          ],
        },
      ],
      stepsWithLicense: [
        {
          id: 1,
          title: "Registration",
          description: "Online on the website or in person in Lüneburg",
          details: [
            "Quick online registration",
            "Personal consultation on-site",
            "Bring car license",
          ],
        },
        {
          id: 2,
          title: "Take Driving Lessons",
          description: "Complete practical driving lessons with trailer",
          details: [
            "Practical driving lessons",
            "Learn trailer handling",
            "Individual support",
          ],
        },
        {
          id: 3,
          title: "Take Practical Exam",
          description: "Take practical exam for trailer license",
          details: [
            "Only practical exam",
            "Shortened exam time",
            "Experienced examiner",
          ],
        },
        {
          id: 4,
          title: "Pick up License",
          description: "Receive new license and drive larger trailers",
          details: [
            "Pick up license",
            "Drive larger trailers",
            "More flexibility",
          ],
        },
      ],
    },
    AR: {
      title: "طريقك إلى",
      titleHighlight: "رخصة المقطورة",
      subtitle: "حسب حالة رخصتك الحالية، سنقوم بإرشادك خلال العملية المناسبة.",
      noLicense: "لا توجد رخصة بعد",
      withLicense: "رخصة السيارة متوفرة",
      noTheoryRequired: "✨ لا حاجة لدروس نظرية!",
      start: "بداية",
      ctaWithLicense: "ابدأ رخصة المقطورة!",
      ctaWithoutLicense: "ابدأ الرخصة + المقطورة!",
      stepsWithoutLicense: [
        {
          id: 1,
          title: "التسجيل",
          description: "عبر الإنترنت على الموقع أو شخصياً في لونيبورغ",
          details: [
            "تسجيل سريع عبر الإنترنت",
            "استشارة شخصية في الموقع",
            "جدولة مرنة للمواعيد",
          ],
        },
        {
          id: 2,
          title: "حضور الدروس النظرية",
          description: "الدروس النظرية المطلوبة لرخصة المقطورة",
          details: ["دروس إضافية للمقطورة", "قواعد مرور خاصة", "لوائح السلامة"],
        },
        {
          id: 3,
          title: "أخذ الدروس العملية",
          description: "إكمال دروس القيادة المطلوبة مع المقطورة",
          details: [
            "دروس قيادة مع المقطورة",
            "عدد دروس فردي",
            "مدربون ذوو خبرة",
          ],
        },
        {
          id: 4,
          title: "الامتحان النظري",
          description: "عادة غير مطلوب لـ BE - تحقق مع مدرسة القيادة",
          details: [
            "غالباً لا يوجد امتحان إضافي",
            "يعتمد على فئة الرخصة",
            "استشارة في مدرسة القيادة",
          ],
        },
        {
          id: 5,
          title: "أداء الامتحان العملي",
          description: "اجتياز القيادة بنجاح مع المدرب والفاحص",
          details: ["تسجيل الامتحان", "القيادة مع الفاحص", "دعم مهني"],
        },
        {
          id: 6,
          title: "الحصول على الرخصة",
          description: "الحصول على رخصة جديدة والسماح بقيادة المقطورات",
          details: ["رخصة جديدة", "قيادة المقطورات مسموحة", "إمكانيات موسعة"],
        },
      ],
      stepsWithLicense: [
        {
          id: 1,
          title: "التسجيل",
          description: "عبر الإنترنت على الموقع أو شخصياً في لونيبورغ",
          details: [
            "تسجيل سريع عبر الإنترنت",
            "استشارة شخصية في الموقع",
            "إحضار رخصة السيارة",
          ],
        },
        {
          id: 2,
          title: "أخذ دروس القيادة",
          description: "إكمال دروس القيادة العملية مع المقطورة",
          details: ["دروس قيادة عملية", "تعلم التعامل مع المقطورة", "دعم فردي"],
        },
        {
          id: 3,
          title: "أداء الامتحان العملي",
          description: "أداء الامتحان العملي لرخصة المقطورة",
          details: ["امتحان عملي فقط", "وقت امتحان مختصر", "فاحص ذو خبرة"],
        },
        {
          id: 4,
          title: "استلام الرخصة",
          description: "الحصول على رخصة جديدة وقيادة مقطورات أكبر",
          details: ["استلام الرخصة", "قيادة مقطورات أكبر", "مرونة أكثر"],
        },
      ],
    },
  };

  // Aktuelle Übersetzung basierend auf der ausgewählten Sprache
  const t = translations[selectedLanguage] || translations.DE;

  const currentSteps = hasCarLicense
    ? t.stepsWithLicense
    : t.stepsWithoutLicense;

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

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
      },
    },
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
            {t.title} <span className="text-[#F5BB00]">{t.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t.subtitle}
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
                  left: hasCarLicense ? "50%" : "4px",
                  width: hasCarLicense ? "calc(50% - 4px)" : "calc(50% - 4px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />

              <motion.button
                onClick={() => setHasCarLicense(false)}
                className={`relative z-10 px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 ${
                  !hasCarLicense
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {t.noLicense}
              </motion.button>

              <motion.button
                onClick={() => setHasCarLicense(true)}
                className={`relative z-10 px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 ${
                  hasCarLicense
                    ? "text-black"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {t.withLicense}
              </motion.button>
            </div>

            {/* Info Text when car license is selected */}
            {hasCarLicense && (
              <motion.div
                className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#F5BB00] font-semibold text-base md:text-lg">
                  {t.noTheoryRequired}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={hasCarLicense ? "with-license" : "without-license"}
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
              key={step.id}
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
                className={`flex-1 ml-10 md:ml-20 ${
                  index > 0
                    ? "sm:ml-[" +
                      index * 0.25 +
                      "rem] md:ml-[" +
                      index * 0.5 +
                      "rem] lg:ml-[" +
                      index * 1 +
                      "rem] xl:ml-[" +
                      index * 1.5 +
                      "rem]"
                    : ""
                }`}
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
                        {step.id}
                      </div>
                      <div className="text-[#F5BB00] flex justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaUserPlus className="text-xl md:text-3xl" />
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
            {hasCarLicense ? t.ctaWithLicense : t.ctaWithoutLicense}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TrailerLicenseSteps;
