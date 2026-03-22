// contexts/LanguageContext.js
import { warning } from "framer-motion";
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("DE");

  const languages = [
    { code: "DE", name: "Deutsch", flag: "🇩🇪" },
    { code: "EN", name: "English", flag: "🇬🇧" },
    { code: "AR", name: "العربية", flag: "🇸🇦" },
  ];

  const translations = {
    DE: {
      // Navbar
      fuehrerschein: "FÜHRERSCHEIN MACHEN",
      termine: "TERMINE & Info",
      anmelden: "JETZT ANMELDEN",
      fuehrerscheinBanner: {
        text: "Dein individueller Führerschein wartet auf dich!",
        button: "Jetzt konfigurieren",
      },
      fuehrerscheinItems: [
        {
          title: "AUTOFÜHRERSCHEIN",
          description: "Klasse B - PKW Führerschein",
        },
        {
          title: "AUTO-ANHÄNGER",
          description: "Klasse BE - PKW mit Anhänger",
        },
        {
          title: "MOTORRADFÜHRERSCHEIN",
          description: "Klasse A - Motorrad Führerschein",
        },
      ],
      termineItems: [
        { title: "Theoriekurs", description: "Termine für den Theoriekurs" },
        { title: "Intensivkurse", description: "Schnell zum Führerschein" },
        {
          title: "Preise",
          description: "Alle Preise übersichtlich",
        },
        { title: "Punkte Abbauen", description: "Wie man Punkte abbaut" },
        {
          title: "Blog",
          description: "Erfahre spannende Neuigkeiten und Tipps",
        }, // Deutsch
      ],

      // Homepage
      hero: {
        badge: "WIR MACHEN DICH MOBIL",
        title1: "Starte jetzt in deine Freiheit",
        title2: "mit uns wird jeder Weg zum Erlebnis.",
        features: [
          "BESTE AUSBILDUNG",
          "ERSTKLASSIGES TEAM",
          "KOMPAKTE AUSBILDUNG",
          "ZUFRIEDENHEITSGARANTIE",
        ],
        cta: "JETZT ANMELDEN",
        warning: "Achtung: Begrenzte Plätze verfügbar!",
      },
      scheinWahl: {
        title: "Wähle deinen Führerschein",
        description:
          "Egal, ob du das Autofahren lernen möchtest, einen Anhänger fahren willst oder die Freiheit auf zwei Rädern genießen möchtest – wir haben die passende Führerscheinoption für dich.",
        benefits: [
          "Individuelle Beratung für deinen Führerschein",
          "Flexible Lernzeiten und digitale Unterstützung",
          "Erfahrene Fahrlehrer, die dich sicher ans Ziel bringen",
        ],
        options: [
          {
            id: "auto",
            title: "AUTOFÜHRERSCHEIN",
            subtitle: "— KLASSE B",
            description: "Vier Räder. Und unzählige Möglichkeiten.",
          },
          {
            id: "auto-anhaenger",
            title: "AUTO MIT ANHÄNGER",
            subtitle: "— KLASSE BE",
            description: "Mehr Platz. Mehr Flexibilität. Mehr Freiheit.",
          },
          {
            id: "motorrad",
            title: "MOTORRADFÜHRERSCHEIN",
            subtitle: "— KLASSE A",
            description: "Freiheit und Fahrtwind. Auch im Fußraum.",
          },
        ],
        more: "Mehr erfahren",
      },
    },
    EN: {
      // Navbar
      // Navbar
      fuehrerschein: "GET DRIVER'S LICENSE",
      termine: "APPOINTMENTS & Info",
      anmelden: "SIGN UP NOW",
      fuehrerscheinBanner: {
        text: "Your individual driving license is waiting for you!",
        button: "Configure now",
      },
      fuehrerscheinItems: [
        {
          title: "CAR LICENSE",
          description: "Class B - Car license",
        },
        {
          title: "CAR TRAILER",
          description: "Class BE - Car with trailer",
        },
        {
          title: "MOTORCYCLE LICENSE",
          description: "Class A - Motorcycle license",
        },
      ],
      termineItems: [
        { title: "Theory Course", description: "Dates for the theory course" },
        { title: "Intensive Courses", description: "Get your license quickly" },
        { title: "Prices", description: "All prices at a glance" },
        { title: "Reduce Points", description: "How to reduce points" },
        {
          title: "Blog",
          description: "Discover exciting news and tips ",
        }, // Englisch
      ],

      // Homepage
      hero: {
        badge: "WE MAKE YOU MOBILE",
        title1: "Start your journey to freedom now",
        title2: "with us, every road becomes an adventure.",
        features: [
          "BEST TRAINING",
          "FIRST-CLASS TEAM",
          "COMPACT TRAINING",
          "SATISFACTION GUARANTEE",
        ],
        cta: "SIGN UP NOW",
        warning: "Attention: Limited spots available!",
      },
      scheinWahl: {
        title: "Choose your driving license",
        description:
          "Whether you want to learn to drive a car, tow a trailer, or enjoy the freedom of two wheels – we have the right driving license option for you.",
        benefits: [
          "Individual consultation for your driving license",
          "Flexible learning times and digital support",
          "Experienced driving instructors to get you safely to your goal",
        ],
        options: [
          {
            id: "auto",
            title: "CAR DRIVING LICENSE",
            subtitle: "— CLASS B",
            description: "Four wheels. Endless possibilities.",
          },
          {
            id: "auto-anhaenger",
            title: "CAR WITH TRAILER",
            subtitle: "— CLASS BE",
            description: "More space. More flexibility. More freedom.",
          },
          {
            id: "motorrad",
            title: "MOTORCYCLE LICENSE",
            subtitle: "— CLASS A",
            description: "Freedom and wind. Even at your feet.",
          },
        ],
        more: "Learn more",
      },
    },
    AR: {
      // Navbar
      // Navbar
      fuehrerschein: "الحصول على رخصة القيادة",
      termine: "المواعيد والمعلومات",
      anmelden: "سجّل الآن",
      fuehrerscheinBanner: {
        text: "رخصة القيادة الخاصة بك في انتظارك!",
        button: "ابدأ التخصيص الآن",
      },
      fuehrerscheinItems: [
        {
          title: "رخصة السيارة",
          description: "الفئة B - رخصة قيادة السيارات",
        },
        {
          title: "سيارة مع مقطورة",
          description: "الفئة BE - سيارة مع مقطورة",
        },
        {
          title: "رخصة الدراجة النارية",
          description: "الفئة A - رخصة قيادة الدراجات النارية",
        },
      ],
      termineItems: [
        { title: "دورة نظرية", description: "مواعيد الدورة النظرية" },
        { title: "دورات مكثفة", description: "احصل على رخصتك بسرعة" },
        { title: "الأسعار", description: "جميع الأسعار في لمحة" },
        { title: "تقليل النقاط", description: "كيفية تقليل النقاط" },
        {
          title: "المدونة",
          description: "نصائح حول رخصة القيادة.",
        }, // Arabisch
      ],

      // Homepage
      hero: {
        badge: "نجعلك متنقلاً",
        title1: "ابدأ رحلتك نحو الحرية الآن",
        title2: "معنا تصبح كل طريق تجربة فريدة.",
        features: [
          "أفضل تدريب",
          "فريق من الدرجة الأولى",
          "تدريب مكثف",
          "ضمان الرضا",
        ],
        cta: "سجّل الآن",
        warning: "تنبيه: الأماكن محدودة",
      },
      scheinWahl: {
        title: "اختر رخصة القيادة الخاصة بك",
        description:
          "سواء كنت ترغب في تعلم قيادة السيارة، سحب مقطورة، أو الاستمتاع بحرية العجلتين – لدينا الخيار المناسب لرخصة القيادة الخاصة بك.",
        benefits: [
          "استشارة فردية لرخصة القيادة الخاصة بك",
          "أوقات تعلم مرنة ودعم رقمي",
          "مدربون قيادة ذوو خبرة لإيصالك إلى هدفك بأمان",
        ],
        options: [
          {
            id: "auto",
            title: "رخصة قيادة السيارة",
            subtitle: "— الفئة B",
            description: "أربع عجلات. وإمكانات لا حصر لها.",
          },
          {
            id: "auto-anhaenger",
            title: "سيارة مع مقطورة",
            subtitle: "— الفئة BE",
            description: "مساحة أكبر. مرونة أكثر. حرية أكثر.",
          },
          {
            id: "motorrad",
            title: "رخصة قيادة الدراجة النارية",
            subtitle: "— الفئة A",
            description: "حرية وهواء نقي. حتى عند قدميك.",
          },
        ],
        more: "المزيد",
      },
    },
  };

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        languages,
        translations,
        t: translations[selectedLanguage], // Shortcut für current translations
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
