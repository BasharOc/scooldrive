import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaRoad,
  FaExclamationTriangle,
  FaUsers,
  FaLeaf,
  FaCog,
  FaClock,
  FaCheckCircle,
  FaLaptop,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaCalendarAlt,
  FaUserCheck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";
// ________________API________________________________________________________________________________
import useAPIData from "../../hooks/useAPIData"; // Passe den Pfad an deine Struktur an

const content = {
  DE: {
    nextCourse: {
      title: "Nächster Theoriekurs startet in 2 Monate",
      subtitle:
        "Noch wenige Plätze frei! Sichere dir jetzt deinen Platz im Theoriekurs.",
      buttonText: "Jetzt anmelden",
    },
    kursinhalte: [
      {
        icon: <FaRoad className="text-3xl" />,
        title: "Verkehrsregeln und Schilder",
      },
      {
        icon: <FaExclamationTriangle className="text-3xl" />,
        title: "Gefahrenlehre",
      },
      {
        icon: <FaUsers className="text-3xl" />,
        title: "Verhalten im Straßenverkehr",
      },
      { icon: <FaLeaf className="text-3xl" />, title: "Umweltschutz" },
      { icon: <FaCog className="text-3xl" />, title: "Technik am Fahrzeug" },
    ],
    faqItems: [
      {
        question: "Wie viele Theoriestunden sind Pflicht?",
        answer:
          "Für den PKW-Führerschein sind 14 Doppelstunden Pflicht: 12 Doppelstunden Grundstoff und 2 Doppelstunden klassenspezifischer Zusatzstoff. Bei Erweiterungen kann die Anzahl variieren.",
      },
      {
        question: "Muss ich alle Stunden besuchen?",
        answer:
          "Ja, die Teilnahme an allen Pflichtstunden ist gesetzlich vorgeschrieben. Nur bei Krankheit oder wichtigen Gründen können einzelne Stunden nachgeholt werden.",
      },
      {
        question: "Gibt es Online-Material?",
        answer:
          "Ja! Du erhältst Zugang zu unserer Lern-App mit über 1.000 Prüfungsfragen, Lernvideos und Simulationen. Das Material steht dir 24/7 zur Verfügung.",
      },
      {
        question: "Wann kann ich zur Theorieprüfung?",
        answer:
          "Zur Theorieprüfung kannst du, sobald du alle Theoriestunden absolviert hast und dein Führerscheinantrag bearbeitet wurde. Frühestens 3 Monate vor dem 18. Geburtstag.",
      },
    ],
    header: {
      title: "THEORIEKURS",
      subtitle:
        "Dein Weg zum Führerschein beginnt hier. Lerne alles Wichtige über Verkehrsregeln, Sicherheit und verantwortungsvolles Fahren.",
    },
    kursInfo: {
      title: "Was ist ein Theoriekurs?",
      description:
        "Der Theoriekurs ist ein wichtiger Baustein deiner Führerscheinausbildung und gesetzlich für alle Führerscheinklassen vorgeschrieben. In 14 Doppelstunden lernst du alle theoretischen Grundlagen für sicheres Fahren und bereitest dich optimal auf die Theorieprüfung vor.",
    },
    kursinhalteTitle: "Was lernst du im Theoriekurs?",
    kursinhalteSubtitle: "Umfassende Ausbildung in allen wichtigen Bereichen",
    vorteile: {
      title: "Deine Vorteile bei uns",
      items: [
        {
          icon: <FaLaptop className="text-black text-xl" />,
          title: "Moderne Lernmittel",
          description:
            "Interaktive Präsentationen, Videos und die neueste Lern-App für zu Hause",
        },
        {
          icon: <FaClock className="text-black text-xl" />,
          title: "Intensivkurs",
          description:
            "Einwöchige Theorie-Intensivkurse zu einem attraktiven Preis – schnell und effizient",
        },
        {
          icon: <FaUsers className="text-black text-xl" />,
          title: "Erfahrene Lehrer",
          description:
            "Kompetente Fahrlehrer mit langjähriger Erfahrung und modernen Lehrmethoden",
        },
      ],
    },
    faqTitle: "Häufige Fragen (FAQ)",
    faqSubtitle: "Antworten auf die wichtigsten Fragen zum Theoriekurs",
    preis: {
      title: "Theoriekurs Preis",
      amount: "400€",
      description:
        "Alles inklusive - 14 Doppelstunden, Lernmaterialien und App-Zugang",
      details: [
        "14 Doppelstunden Unterricht",
        "Lernmaterialien inklusive",
        "App-Zugang für zu Hause",
      ],
    },
    cta: "Jetzt zum Theoriekurs anmelden!",
  },
  EN: {
    nextCourse: {
      title: "Next theory course starts in 2 months",
      subtitle:
        "Only a few spots left! Secure your place in the theory course now.",
      buttonText: "Sign up now",
    },
    kursinhalte: [
      {
        icon: <FaRoad className="text-3xl" />,
        title: "Traffic Rules and Signs",
      },
      {
        icon: <FaExclamationTriangle className="text-3xl" />,
        title: "Hazard Theory",
      },
      { icon: <FaUsers className="text-3xl" />, title: "Behavior in Traffic" },
      {
        icon: <FaLeaf className="text-3xl" />,
        title: "Environmental Protection",
      },
      { icon: <FaCog className="text-3xl" />, title: "Vehicle Technology" },
    ],
    faqItems: [
      {
        question: "How many theory lessons are mandatory?",
        answer:
          "For the car license, 14 double lessons are mandatory: 12 double lessons of basic material and 2 double lessons of class-specific additional material. The number may vary for extensions.",
      },
      {
        question: "Do I have to attend all lessons?",
        answer:
          "Yes, attending all mandatory lessons is legally required. Only in case of illness or important reasons can individual lessons be made up.",
      },
      {
        question: "Is there online material?",
        answer:
          "Yes! You get access to our learning app with over 1,000 exam questions, learning videos, and simulations. The material is available 24/7.",
      },
      {
        question: "When can I take the theory exam?",
        answer:
          "You can take the theory exam as soon as you have completed all theory lessons and your license application has been processed. At the earliest, 3 months before your 18th birthday.",
      },
    ],
    header: {
      title: "THEORY COURSE",
      subtitle:
        "Your path to the driver's license starts here. Learn everything important about traffic rules, safety, and responsible driving.",
    },
    kursInfo: {
      title: "What is a theory course?",
      description:
        "The theory course is an important part of your driver's license training and legally required for all license classes. In 14 double lessons, you learn all the theoretical basics for safe driving and prepare optimally for the theory exam.",
    },
    kursinhalteTitle: "What will you learn in the theory course?",
    kursinhalteSubtitle: "Comprehensive training in all important areas",
    vorteile: {
      title: "Your advantages with us",
      items: [
        {
          icon: <FaLaptop className="text-black text-xl" />,
          title: "Modern Learning Tools",
          description:
            "Interactive presentations, videos, and the latest learning app for home",
        },
        {
          icon: <FaClock className="text-black text-xl" />,
          title: "Intensive Course",
          description:
            "One-week theory intensive courses at an attractive price – fast and efficient",
        },
        {
          icon: <FaUsers className="text-black text-xl" />,
          title: "Experienced Teachers",
          description:
            "Competent driving instructors with many years of experience and modern teaching methods",
        },
      ],
    },
    faqTitle: "Frequently Asked Questions (FAQ)",
    faqSubtitle:
      "Answers to the most important questions about the theory course",
    preis: {
      title: "Theory Course Price",
      amount: "500€",
      description:
        "All-inclusive - 14 double lessons, learning materials, and app access",
      details: [
        "14 double lessons",
        "Learning materials included",
        "App access for home",
      ],
    },
    cta: "Sign up for the theory course now!",
  },
  AR: {
    nextCourse: {
      title: "دورة النظرية القادمة تبدأ بعد شهرين",
      subtitle: "تبقى أماكن قليلة فقط! احجز مكانك في دورة النظرية الآن.",
      buttonText: "سجل الآن",
    },
    kursinhalte: [
      {
        icon: <FaRoad className="text-3xl" />,
        title: "قواعد المرور والإشارات",
      },
      {
        icon: <FaExclamationTriangle className="text-3xl" />,
        title: "نظرية المخاطر",
      },
      {
        icon: <FaUsers className="text-3xl" />,
        title: "السلوك في حركة المرور",
      },
      { icon: <FaLeaf className="text-3xl" />, title: "حماية البيئة" },
      { icon: <FaCog className="text-3xl" />, title: "تقنية المركبة" },
    ],
    faqItems: [
      {
        question: "كم عدد دروس النظرية الإلزامية؟",
        answer:
          "للحصول على رخصة القيادة، يجب حضور 14 درسًا مزدوجًا: 12 درسًا مزدوجًا من المواد الأساسية و2 درسًا مزدوجًا من المواد الإضافية الخاصة بالفئة. قد يختلف العدد للتوسعات.",
      },
      {
        question: "هل يجب أن أحضر جميع الدروس؟",
        answer:
          "نعم، حضور جميع الدروس الإلزامية مطلوب قانونيًا. فقط في حالة المرض أو الأسباب المهمة يمكن تعويض الدروس الفردية.",
      },
      {
        question: "هل هناك مواد تعليمية عبر الإنترنت؟",
        answer:
          "نعم! تحصل على الوصول إلى تطبيق التعلم الخاص بنا مع أكثر من 1,000 سؤال امتحان، فيديوهات تعليمية، ومحاكاة. المواد متاحة على مدار الساعة.",
      },
      {
        question: "متى يمكنني إجراء اختبار النظرية؟",
        answer:
          "يمكنك إجراء اختبار النظرية بمجرد أن تكون قد أكملت جميع دروس النظرية وتمت معالجة طلب رخصة القيادة الخاص بك. في أقرب وقت، قبل 3 أشهر من عيد ميلادك الثامن عشر.",
      },
    ],
    header: {
      title: "دورة النظرية",
      subtitle:
        "طريقك للحصول على رخصة القيادة يبدأ هنا. تعلم كل ما هو مهم عن قواعد المرور، السلامة، والقيادة المسؤولة.",
    },
    kursInfo: {
      title: "ما هي دورة النظرية؟",
      description:
        "دورة النظرية هي جزء مهم من تدريب رخصة القيادة الخاص بك ومطلوبة قانونيًا لجميع فئات الرخصة. في 14 درسًا مزدوجًا، تتعلم جميع الأساسيات النظرية للقيادة الآمنة وتستعد بشكل مثالي لاختبار النظرية.",
    },
    kursinhalteTitle: "ماذا ستتعلم في دورة النظرية؟",
    kursinhalteSubtitle: "تدريب شامل في جميع المجالات المهمة",
    vorteile: {
      title: "مزاياك معنا",
      items: [
        {
          icon: <FaLaptop className="text-black text-xl" />,
          title: "أدوات تعليمية حديثة",
          description:
            "عروض تقديمية تفاعلية، فيديوهات، وأحدث تطبيق تعليمي للاستخدام في المنزل",
        },
        {
          icon: <FaClock className="text-black text-xl" />,
          title: "دورة مكثفة",
          description: "دورات نظرية مكثفة لمدة أسبوع بسعر جذاب – بسرعة وكفاءة",
        },
        {
          icon: <FaUsers className="text-black text-xl" />,
          title: "مدرسون ذوو خبرة",
          description:
            "مدربو قيادة مؤهلون يتمتعون بخبرة طويلة وأساليب تدريس حديثة",
        },
      ],
    },
    faqTitle: "الأسئلة الشائعة",
    faqSubtitle: "إجابات على أهم الأسئلة حول دورة النظرية",
    preis: {
      title: "سعر دورة النظرية",
      amount: "500€",
      description:
        "شامل كل شيء - 14 درسًا مزدوجًا، مواد تعليمية، والوصول إلى التطبيق",
      details: [
        "14 درسًا مزدوجًا",
        "مواد تعليمية مشمولة",
        "الوصول إلى التطبيق للاستخدام في المنزل",
      ],
    },
    cta: "سجل الآن في دورة النظرية!",
  },
};

const TheorieKursPage = () => {
  const { selectedLanguage } = useLanguage();
  // ________________API________________________________________________________________________________
  const { data: termineData } = useAPIData("termine");
  const langContent = content[selectedLanguage] || content.DE;

  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
  //________________API________________________________________________________________________________
  // Füge diese Funktion vor dem return hinzu
  const getNextTheoriekursDate = () => {
    if (!termineData?.termine || termineData.termine.length === 0) {
      return "(comming soon)";
    }

    const today = new Date();
    const nextTermin = termineData.termine
      .filter((termin) => termin.aktiv && new Date(termin.datum) > today)
      .sort((a, b) => new Date(a.datum) - new Date(b.datum))[0];

    if (!nextTermin) {
      return "(coming soon)";
    }

    const date = new Date(nextTermin.datum);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString(
      selectedLanguage === "DE"
        ? "de-DE"
        : selectedLanguage === "EN"
        ? "en-US"
        : "ar-SA",
      options
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Theoriekurs Führerschein Lüneburg – Schnell & Verständlich bei
          Scooldrive
        </title>
        <meta
          name="description"
          content="Schnelle und verständliche Theoriekurse für den Führerschein in Lüneburg: Flexible Termine, moderne Lernmethoden und erfahrene Dozenten bei Scooldrive. Jetzt Platz sichern!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Theoriekurs Führerschein Lüneburg – Schnell & Verständlich bei Scooldrive"
        />
        <meta
          property="og:description"
          content="Mach deinen Theoriekurs für den Führerschein in Lüneburg – mit Scooldrive flexibel, effektiv und unkompliziert. Jetzt informieren!"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/theoriekurs"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Theoriekurs Führerschein Lüneburg – Schnell & Verständlich bei Scooldrive"
        />
        <meta
          name="twitter:description"
          content="Theoriekurs in Lüneburg für deinen Führerschein – flexibel, modern, persönlich. Jetzt starten mit Scooldrive!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/theoriekurs"
        />
      </Helmet>

      <div className="mt-[100px] min-h-screen bg-gray-50 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Kurs Ankündigung - Ganz oben */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-[#F5BB00] to-[#e5a800] rounded-2xl p-6 md:p-8 shadow-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <FaCalendarAlt className="text-3xl text-black mr-3" />
                {
                  //________________API________________________________________________________________________________
                }
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  {/* MIT DATUM {selectedLanguage === "DE"
                    ? `Nächster Theoriekurs startet am  ${getNextTheoriekursDate()}`
                    : selectedLanguage === "EN"
                    ? `Next theory course starts on ${getNextTheoriekursDate()}`
                    : `دورة النظرية القادمة تبدأ في ${getNextTheoriekursDate()}`} */}
                  {selectedLanguage === "DE"
                    ? `Nächster Theoriekurs startet bald`
                    : selectedLanguage === "EN"
                    ? `Next theory course starts soon`
                    : `دورة النظرية القادمة تبدأ في قريبًا`}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-black mb-6 opacity-90">
                {langContent.nextCourse.subtitle}
              </p>
              <motion.button
                className="bg-black text-[#F5BB00] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-black cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#F5BB00",
                  color: "#000000",
                  borderColor: "#F5BB00",
                }}
                onClick={() => navigate("/anmelden")}
                whileTap={{ scale: 0.95 }}
              >
                <FaUserCheck className="inline mr-2" />
                {langContent.nextCourse.buttonText}
              </motion.button>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              {langContent.header.title.includes("KURS")
                ? langContent.header.title.split("KURS")[0]
                : langContent.header.title.includes("COURSE")
                ? langContent.header.title.split("COURSE")[0]
                : langContent.header.title.split("النظرية")[0]}
              <span className="text-[#F5BB00]">
                {langContent.header.title.includes("KURS")
                  ? "KURS"
                  : langContent.header.title.includes("COURSE")
                  ? "COURSE"
                  : "النظرية"}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {langContent.header.subtitle}
            </p>
          </motion.div>

          {/* Einleitung */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                      <FaBook className="text-black text-xl" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                      {langContent.kursInfo.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {langContent.kursInfo.description}
                  </p>
                </div>

                {/* Bild Platzhalter */}
                <div className="flex justify-center">
                  <div className="w-full max-w-md h-80 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src="/placeholder.jpg"
                      alt={
                        selectedLanguage === "DE"
                          ? "Fahrschul-Theorieunterricht – Lehrer erklärt vor einer Gruppe von Fahrschülern"
                          : selectedLanguage === "EN"
                          ? "Driving school theory class – instructor teaching a group of students"
                          : "درس نظري في مدرسة القيادة – مدرب يشرح أمام مجموعة من الطلاب"
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kursinhalte */}
          <motion.div
            className="mb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {langContent.kursinhalteTitle}
              </h2>
              <p className="text-lg text-gray-600">
                {langContent.kursinhalteSubtitle}
              </p>
            </div>

            <div className="overflow-x-auto px-8">
              <div className="flex justify-center gap-8 pb-8 min-w-max">
                {langContent.kursinhalte.map((inhalt, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 text-center"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-[#F5BB00] rounded-full flex items-center justify-center text-black mb-4 mx-auto hover:shadow-lg transition-all duration-300">
                      {inhalt.icon}
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-black max-w-24 md:max-w-32 leading-tight">
                      {inhalt.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Zusätzliche Vorteile */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
                {langContent.vorteile.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {langContent.vorteile.items.map((vorteil, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-[#F5BB00] rounded-full flex items-center justify-center mx-auto mb-4">
                      {vorteil.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {vorteil.title}
                    </h3>
                    <p className="text-gray-600">{vorteil.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {langContent.faqTitle}
                </h2>
                <p className="text-lg text-gray-600">
                  {langContent.faqSubtitle}
                </p>
              </div>

              <div className="space-y-4">
                {langContent.faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center">
                        <FaQuestionCircle className="text-[#F5BB00] mr-3" />
                        <span className="font-semibold text-black">
                          {item.question}
                        </span>
                      </div>
                      {openFaq === index ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-white">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Preis Section */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
          >
            <div className="bg-gradient-to-r from-[#F5BB00] to-[#e5a800] rounded-2xl p-6 md:p-8 shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {langContent.preis.title}
              </h2>
              <div className="text-5xl md:text-6xl font-bold text-black mb-4">
                {langContent.preis.amount}
              </div>
              <div className="text-lg md:text-xl text-black opacity-90 mb-6">
                {langContent.preis.description}
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-black">
                {langContent.preis.details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="mr-2" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.button
              className="bg-[#F5BB00] text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/anmelden")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 187, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {langContent.cta}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TheorieKursPage;
