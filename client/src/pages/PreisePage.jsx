import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaCar,
  FaGraduationCap,
  FaMoon,
  FaCalculator,
  FaCheckCircle,
  FaStar,
  FaMotorcycle,
  FaTruck,
  FaTrailer,
  FaExclamationTriangle,
  FaClipboardCheck,
  FaMobileAlt,
  FaRoad,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";
import useApiData from "../../hooks/useAPIData";

const content = {
  DE: {
    header: {
      title: "UNSERE PREISE",
      subtitle:
        "Transparente Preise ohne versteckte Kosten. Wähle deine Führerscheinklasse und erhalte eine detaillierte Kostenübersicht.",
    },
    licenses: {
      pkw: "PKW (Klasse B)",
      motorrad: "Motorrad (Klasse A/A1/A2/AM)",
      anhanger: "Anhänger (Klasse BE)",
      b96: "Anhänger (Klasse B96)",
      b196: "Leichtkraftrad (Klasse B196)",
    },
    prerequisite: "Führerschein B Voraussetzung",
    sections: {
      basispreise: "Basispreise",
      grundgebuhr: "Grundgebühr",
      lernapp: "Lernapp",
      ubungsstunde: "Übungsstunde",
      sonderfahrten: "Sonderfahrten",
      ueberland: "Überlandfahrt",
      autobahn: "Autobahnfahrt",
      nachtfahrt: "Nachtfahrt",
      theorieprufung: "Theorieprüfung",
      praxisprufung: "Praxisprüfung",
      pflichtstunden: "Pflichtstunden",
      gesamt: "Gesamt (Fahrschule)",
      zusatzkosten: "Zusätzliche Behörden- & Prüfungskosten",
      zusatzkostenGesamt: "Zusatzkosten gesamt:",
      gesamtkosten: "Gesamtkosten",
      fahrstunde: "Fahrstunde",
      anzahl: "Anzahl",
      preis: "Preis",
      einzelpreis: "Einzelpreis",
      gesamtpreis: "Gesamtpreis",
    },
    theory: {
      enthalten: "Enthalten:",
      inhalte: [
        "14 Doppelstunden Grundstoff",
        "2 Doppelstunden klassenspezifischer Zusatzstoff",
        "Lernmaterialien und App-Zugang",
        "Anmeldung zur Theorieprüfung",
        "Prüfungsbegleitung und Unterstützung",
      ],
    },
    calculations: {
      stunden: "Stunden",
      zuschlag: "Zuschlag",
      gesamt: "Gesamt",
    },
    extraCosts: [
      { name: "Führerscheinantrag", key: "fuehrerscheinantrag" },
      { name: "Sehtest", key: "sehtest" },
      { name: "Erste-Hilfe-Kurs", key: "ersteHilfeKurs" },
      { name: "Passbild", key: "passbild" },
    ],
    warning: {
      title: " Wichtige Hinweise:",
      points: [
        "Individuelle Kosten: Der Endpreis kann je nach persönlichen Fähigkeiten und benötigten Zusatzstunden variieren",
        "Flexible Zahlung: Du zahlst nur pro absolvierte Fahrstunde - keine Vorauszahlung des Gesamtbetrags",
        "Transparenz: Keine versteckten Kosten - du behältst immer die Kontrolle über deine Ausgaben",
      ],
    },
    finalSection: {
      description: "Alle Kosten transparent aufgeschlüsselt",
      cta: "Jetzt anmelden und durchstarten!",
    },
  },
  EN: {
    header: {
      title: "OUR PRICES",
      subtitle:
        "Transparent prices without hidden costs. Choose your license class and get a detailed cost overview.",
    },
    licenses: {
      pkw: "Car (Class B)",
      motorrad: "Motorcycle (Class A/A1/A2/AM)",
      anhanger: "Trailer (Class BE)",
      b96: "Trailer (Class B96)",
      b196: "Light Motorcycle (Class B196)",
    },
    prerequisite: "Class B license required",
    sections: {
      basispreise: "Base Prices",
      grundgebuhr: "Base Fee",
      lernapp: "Learning App",
      ubungsstunde: "Practice Lesson",
      sonderfahrten: "Special Drives",
      theorieprufung: "Theory Exam",
      praxisprufung: "Practical Exam",
      pflichtstunden: "Mandatory Lessons",
      gesamt: "Total (Driving School)",
      zusatzkosten: "Additional Authority & Exam Costs",
      zusatzkostenGesamt: "Additional costs total:",
      gesamtkosten: "Total Costs",
      fahrstunde: "Driving Lesson",
      anzahl: "Quantity",
      preis: "Price",
      einzelpreis: "Unit Price",
      gesamtpreis: "Total Price",
    },
    theory: {
      enthalten: "Included:",
      inhalte: [
        "14 double lessons basic material",
        "2 double lessons class-specific additional material",
        "Learning materials and app access",
        "Theory exam registration",
        "Exam accompaniment and support",
      ],
    },
    calculations: {
      stunden: "lessons",
      zuschlag: "surcharge",
      gesamt: "total",
    },
    extraCosts: [
      { name: "License Application", key: "fuehrerscheinantrag" },
      { name: "Eye Test", key: "sehtest" },
      { name: "First Aid Course", key: "ersteHilfeKurs" },
      { name: "Passport Photo", key: "passbild" },
    ],
    warning: {
      title: " Important Notes:",
      points: [
        "Individual Costs: The final price may vary depending on personal skills and additional lessons needed",
        "Flexible Payment: You only pay per completed driving lesson - no advance payment of the total amount",
        "Transparency: No hidden costs - you always keep control over your expenses",
      ],
    },
    finalSection: {
      description: "All costs transparently broken down",
      cta: "Sign up now and get started!",
    },
  },
  AR: {
    header: {
      title: "أسعارنا",
      subtitle:
        "أسعار شفافة بدون تكاليف مخفية. اختر فئة الرخصة الخاصة بك واحصل على نظرة عامة مفصلة على التكاليف.",
    },
    licenses: {
      pkw: "السيارة (الفئة B)",
      motorrad: "الدراجة النارية (الفئة A/A1/A2/AM)",
      anhanger: "المقطورة (الفئة BE)",
      b96: "المقطورة (الفئة B96)",
      b196: "الدراجة النارية الخفيفة (الفئة B196)",
    },
    prerequisite: "رخصة الفئة B مطلوبة",
    sections: {
      basispreise: "الأسعار الأساسية",
      grundgebuhr: "الرسوم الأساسية",
      lernapp: "تطبيق التعلم",
      ubungsstunde: "درس التدريب",
      sonderfahrten: "الرحلات الخاصة",
      theorieprufung: "امتحان النظرية",
      praxisprufung: "الامتحان العملي",
      pflichtstunden: "الدروس الإلزامية",
      gesamt: "الإجمالي (مدرسة القيادة)",
      zusatzkosten: "تكاليف إضافية للسلطات والامتحانات",
      zusatzkostenGesamt: "إجمالي التكاليف الإضافية:",
      gesamtkosten: "إجمالي التكاليف",
      fahrstunde: "درس القيادة",
      anzahl: "الكمية",
      preis: "السعر",
      einzelpreis: "سعر الوحدة",
      gesamtpreis: "السعر الإجمالي",
    },
    theory: {
      enthalten: "مشمول:",
      inhalte: [
        "14 درساً مزدوجاً من المواد الأساسية",
        "درسان مزدوجان من المواد الإضافية الخاصة بالفئة",
        "مواد تعليمية والوصول إلى التطبيق",
        "التسجيل لامتحان النظرية",
        "مرافقة الامتحان والدعم",
      ],
    },
    calculations: {
      stunden: "دروس",
      zuschlag: "رسوم إضافية",
      gesamt: "إجمالي",
    },
    extraCosts: [
      { name: "طلب الرخصة", key: "fuehrerscheinantrag" },
      { name: "فحص النظر", key: "sehtest" },
      { name: "دورة الإسعافات الأولية", key: "ersteHilfeKurs" },
      { name: "صورة جواز السفر", key: "passbild" },
    ],
    warning: {
      title: "ملاحظات مهمة:",
      points: [
        "التكاليف الفردية: قد يختلف السعر النهائي حسب المهارات الشخصية والدروس الإضافية المطلوبة",
        "الدفع المرن: تدفع فقط مقابل كل درس قيادة مكتمل - لا يوجد دفع مسبق للمبلغ الإجمالي",
        "الشفافية: لا توجد تكاليف مخفية - تحتفظ دائماً بالسيطرة على نفقاتك",
      ],
    },
    finalSection: {
      description: "جميع التكاليف مفصلة بشفافية",
      cta: "سجل الآن وابدأ!",
    },
  },
};

const PreisePage = () => {
  const { selectedLanguage } = useLanguage();
  const { data: preiseData } = useApiData("preise");
  const langContent = content[selectedLanguage] || content.DE;
  const [selectedLicense, setSelectedLicense] = useState("pkw");
  const navigate = useNavigate();

  // Aktualisierte Preisstruktur basierend auf den neuen Informationen
  const preisStruktur = {
    pkw: {
      name: langContent.licenses.pkw,
      icon: <FaCar className="text-2xl" />,
      grundgebuhr: preiseData?.grundgebuehrTheoriekurs || 400,
      lernapp: preiseData?.lernapp || 85,
      ubungsstunde: preiseData?.uebungsstundePKW || 70,
      sonderfahrten: {
        ueberland: { anzahl: 5, preis: preiseData?.sonderfahrtenPKW || 80 },
        autobahn: { anzahl: 4, preis: preiseData?.sonderfahrtenPKW || 80 },
        nachtfahrt: { anzahl: 3, preis: preiseData?.sonderfahrtenPKW || 80 },
        gesamt: 12,
      },
      theorieprufung: preiseData?.theorieprueung || 50,
      praxisprufung: preiseData?.praxispruefung || 200,
      hasPrerequisite: false,
    },
    motorrad: {
      name: langContent.licenses.motorrad,
      icon: <FaMotorcycle className="text-2xl" />,
      grundgebuhr: preiseData?.motorradKlasseAGrundgebuehr || 560,
      lernapp: preiseData?.lernapp || 85,
      ubungsstunde: preiseData?.uebungsstundeMotorrad || 80,
      sonderfahrten: {
        ueberland: {
          anzahl: 5,
          preis: preiseData?.sonderfahrtenMotorrad || 90,
        },
        autobahn: { anzahl: 4, preis: preiseData?.sonderfahrtenMotorrad || 90 },
        nachtfahrt: {
          anzahl: 3,
          preis: preiseData?.sonderfahrtenMotorrad || 90,
        },
        gesamt: 12,
      },
      theorieprufung: preiseData?.theorieprueung || 50,
      praxisprufung: preiseData?.praxispruefung || 200,
      hasPrerequisite: false,
    },
    anhanger: {
      name: langContent.licenses.anhanger,
      icon: <FaTrailer className="text-2xl" />,
      grundgebuhr: 200,
      lernapp: preiseData?.lernapp || 85,
      ubungsstunde: preiseData?.uebungsstundePKWAnhaenger || 85,
      sonderfahrten: {
        ueberland: {
          anzahl: 3,
          preis: preiseData?.sonderfahrtenPKWAnhaenger || 95,
        },
        autobahn: {
          anzahl: 1,
          preis: preiseData?.sonderfahrtenPKWAnhaenger || 95,
        },
        nachtfahrt: {
          anzahl: 1,
          preis: preiseData?.sonderfahrtenPKWAnhaenger || 95,
        },
        gesamt: 5,
      },
      theorieprufung: 0,
      praxisprufung: preiseData?.praxispruefung || 200,
      hasPrerequisite: true,
    },
    b96: {
      name: langContent.licenses.b96,
      icon: <FaTrailer className="text-2xl" />,
      fixedPrice: preiseData?.anhaengerKlasseB96 || 850,
      hasPrerequisite: true,
    },
    b196: {
      name: langContent.licenses.b196,
      icon: <FaMotorcycle className="text-2xl" />,
      fixedPrice: preiseData?.leichtkraftradB196 || 950,
      hasPrerequisite: true,
    },
  };

  const calculateTotal = () => {
    const preise = preisStruktur[selectedLicense];

    // Für B96 und B196 gibt es einen festen Preis
    if (preise.fixedPrice) {
      return {
        fixedPrice: preise.fixedPrice,
        isFixedPrice: true,
      };
    }

    // Detaillierte Sonderfahrten-Berechnung
    const sonderfahrtenDetails = {
      ueberland:
        preise.sonderfahrten.ueberland.anzahl *
        preise.sonderfahrten.ueberland.preis,
      autobahn:
        preise.sonderfahrten.autobahn.anzahl *
        preise.sonderfahrten.autobahn.preis,
      nachtfahrt:
        preise.sonderfahrten.nachtfahrt.anzahl *
        preise.sonderfahrten.nachtfahrt.preis,
    };

    const sonderfahrtenGesamt =
      sonderfahrtenDetails.ueberland +
      sonderfahrtenDetails.autobahn +
      sonderfahrtenDetails.nachtfahrt;

    const extraKostenTotal = parseFloat(
      langContent.extraCosts
        .reduce((sum, item) => {
          // Hier die API-Preise verwenden wenn verfügbar
          let preis = item.preis;
          if (
            item.name.includes("Führerscheinantrag") ||
            item.name.includes("License Application") ||
            item.name.includes("طلب الرخصة")
          ) {
            preis = preiseData?.fuehrerscheinantrag || item.preis;
          } else if (
            item.name.includes("Sehtest") ||
            item.name.includes("Eye Test") ||
            item.name.includes("فحص النظر")
          ) {
            preis = preiseData?.sehtest || item.preis;
          } else if (
            item.name.includes("Erste-Hilfe") ||
            item.name.includes("First Aid") ||
            item.name.includes("الإسعافات الأولية")
          ) {
            preis = preiseData?.ersteHilfeKurs || item.preis;
          } else if (
            item.name.includes("Passbild") ||
            item.name.includes("Passport Photo") ||
            item.name.includes("صورة جواز السفر")
          ) {
            preis = preiseData?.passbild || item.preis;
          }
          return sum + preis;
        }, 0)
        .toFixed(2)
    );

    const fahrschuleGesamt = parseFloat(
      (
        preise.grundgebuhr +
        preise.lernapp +
        sonderfahrtenGesamt +
        preise.theorieprufung +
        preise.praxisprufung
      ).toFixed(2)
    );

    const gesamtkosten = parseFloat(
      (fahrschuleGesamt + extraKostenTotal).toFixed(2)
    );

    return {
      grundgebuhr: preise.grundgebuhr,
      lernapp: preise.lernapp,
      ubungsstunde: preise.ubungsstunde,
      sonderfahrtenDetails: sonderfahrtenDetails,
      sonderfahrtenGesamt: sonderfahrtenGesamt,
      sonderfahrtenInfo: preise.sonderfahrten,
      theorieprufung: preise.theorieprufung,
      praxisprufung: preise.praxisprufung,
      fahrschuleGesamt: fahrschuleGesamt,
      extraKosten: extraKostenTotal,
      gesamtkosten: gesamtkosten,
      isFixedPrice: false,
    };
  };

  const kosten = calculateTotal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
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

  return (
    <>
      <Helmet>
        <title>
          Fahrschule Preise Lüneburg – Kosten für Führerschein bei Scooldrive
        </title>
        <meta
          name="description"
          content="Transparente Preise für den Führerschein in Lüneburg: Alle Kosten für Auto, Motorrad und Anhänger Führerschein auf einen Blick. Faire Konditionen bei Scooldrive – jetzt informieren!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Fahrschule Preise Lüneburg – Kosten für Führerschein bei Scooldrive"
        />
        <meta
          property="og:description"
          content="Erfahre alle Preise und Gebühren für den Führerschein in Lüneburg bei Scooldrive. Transparente Übersicht für Auto, Motorrad und Anhänger."
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/preise"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fahrschule Preise Lüneburg – Kosten für Führerschein bei Scooldrive"
        />
        <meta
          name="twitter:description"
          content="Alle Preise für den Führerschein in Lüneburg – transparent & fair bei Scooldrive. Jetzt informieren!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/preise"
        />
      </Helmet>
      <div className="mt-[80px] min-h-screen bg-gray-50 py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              {langContent.header.title.split(" ")[0]}{" "}
              <span className="text-[#F5BB00]">
                {langContent.header.title.split(" ")[1]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {langContent.header.subtitle}
            </p>
          </motion.div>

          {/* Führerschein Auswahl */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(preisStruktur).map(([key, data]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedLicense(key)}
                    className={`px-3 py-3 rounded-xl font-bold text-xs transition-all duration-300 ${
                      selectedLicense === key
                        ? "bg-[#F5BB00] text-black shadow-lg"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col items-center space-y-1">
                      {data.icon}
                      <span className="hidden md:block text-center leading-tight">
                        {data.name}
                      </span>
                      <span className="md:hidden">{key.toUpperCase()}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Voraussetzungshinweis für BE, B96 und B196 */}
          {preisStruktur[selectedLicense].hasPrerequisite && (
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                <FaCheckCircle className="mr-2" />
                {langContent.prerequisite}
              </div>
            </motion.div>
          )}

          {/* Fixed Price Anzeige für B96 und B196 */}
          {kosten.isFixedPrice ? (
            <motion.div
              className="flex justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={cardVariants} className="w-full max-w-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#F5BB00] text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                      {preisStruktur[selectedLicense].icon}
                    </div>
                    <h2 className="text-3xl font-bold text-black">
                      {preisStruktur[selectedLicense].name}
                    </h2>
                  </div>

                  <div className="text-6xl font-bold text-[#F5BB00] mb-6">
                    {kosten.fixedPrice}€
                  </div>

                  <p className="text-lg text-gray-600 mb-8">
                    {langContent.finalSection.description}
                  </p>

                  <motion.button
                    className="bg-black text-[#F5BB00] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#F5BB00] cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#F5BB00",
                      color: "#000000",
                    }}
                    onClick={() => navigate("/anmelden")}
                    whileTap={{ scale: 0.95 }}
                  >
                    {langContent.finalSection.cta}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <>
              <motion.div
                className="flex flex-wrap gap-8 sm:flex-col-reverse md:flex-col-reverse lg:flex-row"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Basispreise */}
                <motion.div
                  variants={cardVariants}
                  className="w-full lg:w-[45%]"
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                        <FaBook className="text-black text-xl" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-black">
                        {langContent.sections.basispreise}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {/* Grundgebühr */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FaBook className="text-black-600" />
                            <span className="font-semibold text-gray-700">
                              {langContent.sections.grundgebuhr}
                            </span>
                          </div>
                          <span className="text-xl font-bold text-black-600">
                            {kosten.grundgebuhr}€
                          </span>
                        </div>
                      </div>

                      {/* Lernapp (für alle Klassen) */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FaMobileAlt className="text-black-600" />
                            <span className="font-semibold text-gray-700">
                              {langContent.sections.lernapp}
                            </span>
                          </div>
                          <span className="text-xl font-bold text-black-600">
                            {kosten.lernapp}€
                          </span>
                        </div>
                      </div>

                      {/* Übungsstunde */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FaCar className="text-black-600" />
                            <span className="font-semibold text-gray-700">
                              {langContent.sections.ubungsstunde}
                            </span>
                          </div>
                          <span className="text-xl font-bold text-black-600">
                            {kosten.ubungsstunde}€
                          </span>
                        </div>
                      </div>

                      {/* Sonderfahrten */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FaRoad className="text-black-600" />
                            <span className="font-semibold text-gray-700">
                              {langContent.sections.sonderfahrten} (
                              {kosten.sonderfahrtenInfo.gesamt}{" "}
                              {langContent.calculations.stunden})
                            </span>
                          </div>
                          <span className="text-xl font-bold text-black-600">
                            {kosten.sonderfahrtenInfo.ueberland.preis}€
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {kosten.sonderfahrtenInfo.ueberland.anzahl} Überland +{" "}
                          {kosten.sonderfahrtenInfo.autobahn.anzahl} Autobahn +{" "}
                          {kosten.sonderfahrtenInfo.nachtfahrt.anzahl} Nacht
                        </div>
                      </div>

                      {/* Theorieprüfung (wenn vorhanden) */}
                      {kosten.theorieprufung > 0 && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <FaClipboardCheck className="text-gray-600" />
                              <span className="font-semibold text-gray-700">
                                {langContent.sections.theorieprufung}
                              </span>
                            </div>
                            <span className="text-xl font-bold text-black-600">
                              {kosten.theorieprufung}€
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Praxisprüfung */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FaGraduationCap className="text-black-600" />
                            <span className="font-semibold text-gray-700">
                              {langContent.sections.praxisprufung}
                            </span>
                          </div>
                          <span className="text-xl font-bold text-black-600">
                            {kosten.praxisprufung}€
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Kostenberechnung */}
                <motion.div
                  variants={cardVariants}
                  className="w-full lg:w-[45%]"
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-[#F5BB00]">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                        <FaCalculator className="text-black text-xl" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-black">
                        {preisStruktur[selectedLicense].name}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {/* Grundgebühr */}
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">
                          {langContent.sections.grundgebuhr}
                        </span>
                        <span className="font-semibold">
                          {kosten.grundgebuhr}€
                        </span>
                      </div>

                      {/* Lernapp (für alle Klassen) */}
                      <div className="flex  justify-between items-center py-2">
                        <span className="text-gray-700">
                          {langContent.sections.lernapp}
                        </span>
                        <span className="font-semibold">{kosten.lernapp}€</span>
                      </div>

                      {/* Sonderfahrten aufgeschlüsselt */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">
                          {langContent.sections.sonderfahrten}
                        </h3>

                        {/* Überlandfahrt */}
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                          <div className="flex items-center space-x-2">
                            <FaRoad className="text-black-600 text-sm" />
                            <span className="text-sm text-gray-700">
                              {langContent.sections.ueberland}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-gray-600">
                              {kosten.sonderfahrtenInfo.ueberland.anzahl}x{" "}
                              {kosten.sonderfahrtenInfo.ueberland.preis}€
                            </span>
                            <div className="text-black-600 font-semibold">
                              {kosten.sonderfahrtenDetails.ueberland}€
                            </div>
                          </div>
                        </div>

                        {/* Autobahnfahrt */}
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                          <div className="flex items-center space-x-2">
                            <FaTruck className="text-black-600 text-sm" />
                            <span className="text-sm text-gray-700">
                              {langContent.sections.autobahn}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-gray-600">
                              {kosten.sonderfahrtenInfo.autobahn.anzahl}x{" "}
                              {kosten.sonderfahrtenInfo.autobahn.preis}€
                            </span>
                            <div className="text-black-600 font-semibold">
                              {kosten.sonderfahrtenDetails.autobahn}€
                            </div>
                          </div>
                        </div>

                        {/* Nachtfahrt */}
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center space-x-2">
                            <FaMoon className="text-black-600 text-sm" />
                            <span className="text-sm text-gray-700">
                              {langContent.sections.nachtfahrt}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-gray-600">
                              {kosten.sonderfahrtenInfo.nachtfahrt.anzahl}x{" "}
                              {kosten.sonderfahrtenInfo.nachtfahrt.preis}€
                            </span>
                            <div className="text-black-600 font-semibold">
                              {kosten.sonderfahrtenDetails.nachtfahrt}€
                            </div>
                          </div>
                        </div>

                        {/* Sonderfahrten Gesamt */}
                        <div className="border-t border-gray-300 pt-3 mt-3">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-800">
                              {langContent.sections.sonderfahrten}{" "}
                              {langContent.calculations.gesamt}
                            </span>
                            <span className="text-xl font-bold text-black-500">
                              {kosten.sonderfahrtenGesamt}€
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Theorieprüfung (wenn vorhanden) */}
                      {kosten.theorieprufung > 0 && (
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-700">
                            {langContent.sections.theorieprufung}
                          </span>
                          <span className="font-semibold">
                            {kosten.theorieprufung}€
                          </span>
                        </div>
                      )}

                      {/* Praxisprüfung */}
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">
                          {langContent.sections.praxisprufung}
                        </span>
                        <span className="font-semibold">
                          {kosten.praxisprufung}€
                        </span>
                      </div>

                      <div className="border-t-2 border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-black">
                            {langContent.sections.gesamt}
                          </span>
                          <span className="text-2xl font-bold text-[#F5BB00]">
                            {kosten.fahrschuleGesamt}€
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Warnung */}
                    <div className="mt-6 bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-xl">
                      <div className="flex items-start">
                        <FaExclamationTriangle className="text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-orange-800">
                          <p className="font-semibold mb-2">
                            {langContent.warning.title}
                          </p>
                          <ul className="space-y-1 text-xs">
                            {langContent.warning.points.map((point, index) => (
                              <li key={index}>
                                • <strong>{point.split(":")[0]}:</strong>{" "}
                                {point.split(":")[1]}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Zusätzliche Kosten */}
              <motion.div
                className="mt-8"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
                    {langContent.sections.zusatzkosten}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {langContent.extraCosts.map((item, index) => {
                      const dynamicPrices = preiseData
                        ? [
                            preiseData.fuehrerscheinantrag,
                            preiseData.sehtest,
                            preiseData.ersteHilfeKurs,
                            preiseData.passbild,
                          ]
                        : [];

                      const price = dynamicPrices[index] || item.preis;

                      return (
                        <div key={index} className="bg-gray-50 rounded-xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">
                              {item.name}
                            </span>
                            <span className="font-bold text-gray-800">
                              {price}€
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 pt-4 border-t-2 border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-700">
                        {langContent.sections.zusatzkostenGesamt}
                      </span>
                      <span className="text-xl font-bold text-red-600">
                        {kosten.extraKosten.toFixed(2)}€
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Gesamtkosten */}
              <motion.div
                className="mt-8 bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {langContent.sections.gesamtkosten}{" "}
                  {preisStruktur[selectedLicense].name}
                </h2>
                <div className="text-5xl md:text-6xl font-bold text-[#F5BB00] mb-4">
                  {kosten.gesamtkosten.toFixed(2)}€
                </div>
                <p className="text-lg text-white opacity-90">
                  {langContent.finalSection.description}
                </p>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  className="bg-black text-[#F5BB00] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#F5BB00] cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#F5BB00",
                    color: "#000000",
                  }}
                  onClick={() => navigate("/anmelden")}
                  whileTap={{ scale: 0.95 }}
                >
                  {langContent.finalSection.cta}
                </motion.button>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PreisePage;
