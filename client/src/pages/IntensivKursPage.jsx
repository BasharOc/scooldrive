import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaBook,
  FaCar,
  FaGraduationCap,
  FaTrophy,
  FaUserPlus,
  FaUsers,
  FaClock,
  FaCalendarAlt,
  FaCheckCircle,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaEye,
  FaHeart,
  FaBolt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";
import useApiData from "../../hooks/useAPIData";

const content = {
  DE: {
    header: {
      title: "INTENSIVKURS",
      subtitle:
        "Dein Führerschein in Rekordzeit! Schnell, effizient und mit maximaler Betreuung.",
    },
    intro: {
      title: "Was ist ein Intensivkurs?",
      description:
        "Der Intensivkurs ist die schnellste Möglichkeit, deinen Führerschein zu erhalten. Anstatt über Monate verteilt lernst du in kompakten, durchgeplanten Einheiten alles Wichtige in wenigen Wochen.",
      suitableTitle: "Für wen geeignet?",
      suitableText:
        "Perfekt für alle, die ihren Führerschein besonders schnell benötigen - sei es für den Job, das Studium oder einfach für mehr Flexibilität im Alltag.",
    },
    advantages: {
      title: "Vorteile auf einen Blick",
      subtitle: "Warum unser Intensivkurs die beste Wahl ist",
      items: [
        {
          title: "Führerschein in wenigen Wochen",
          description: "Schneller ans Ziel dank kompakter Kursstruktur",
        },
        {
          title: "Kompakte Lerneinheiten",
          description: "Durchgeplante, effiziente Wissensvermittlung",
        },
        {
          title: "Engmaschige Betreuung",
          description: "Persönliche Unterstützung durch erfahrene Fahrlehrer",
        },
        {
          title: "Flexible Termine",
          description: "Individuelle Anpassung an deine Bedürfnisse",
        },
      ],
    },
    process: {
      title: "So läuft dein Intensivkurs ab",
      subtitle: "In 5 Schritten zum Führerschein",
      start: "START",
      steps: [
        {
          title: "Anmeldung & Beratung",
          description:
            "Individuelles Vorgespräch, Auswahl der Kursdauer und Terminabsprache",
          details:
            "Wir besprechen deine Ziele und planen den optimalen Kursablauf",
        },
        {
          title: "Theorie kompakt",
          description:
            "Theoriekurs gebündelt in kurzer Zeit - innerhalb einer Woche",
          details: "Alle 14 Doppelstunden in wenigen Tagen absolviert",
        },
        {
          title: "Praxis-Intensiv",
          description:
            "Mehrere Fahrstunden pro Tag, gezielt auf die Prüfung vorbereitet",
          details: "Intensive Fahrstunden für schnellen Lernerfolg",
        },
        {
          title: "Prüfungstermine",
          description:
            "Frühzeitige Planung und Reservierung für Theorie- und Praxisprüfung",
          details: "Optimal geplante Prüfungstermine ohne Wartezeiten",
        },
        {
          title: "Führerschein erhalten",
          description: "Schneller Start ins unabhängige Fahrleben",
          details: "Deine Freiheit auf vier Rädern!",
        },
      ],
    },
    requirements: {
      title: "Voraussetzungen & Hinweise",
      subtitle: "Was du mitbringen musst:",
      items: [
        "Mindestalter je nach Führerscheinklasse (PKW ab 17/18 Jahre)",
        "Gültiger Personalausweis oder Reisepass",
        "Biometrisches Passfoto",
        "Sehtest (nicht älter als 2 Jahre)",
        "Erste-Hilfe-Kurs Bescheinigung",
        "Rechtzeitige Anmeldung wegen Behördenfristen",
      ],
      noteTitle: "Wichtiger Hinweis",
      noteText:
        "Plane mindestens 4-6 Wochen Vorlaufzeit ein, da Behördengänge und Prüfungstermine im Voraus organisiert werden müssen. Je früher du dich anmeldest, desto schneller können wir starten!",
    },
    pricing: {
      title: "Leistungen",
      includedTitle: "Im Intensivkurs enthalten:",
      services: [
        "Kompletter Theorieunterricht (14 Doppelstunden)",
        "Alle Pflichtfahrstunden inklusive Sonderfahrten",
        "Lernmaterialien und App-Zugang",
        "Prüfungsanmeldung und -begleitung",
        "Persönliche Betreuung während des gesamten Kurses",
      ],
      packageTitle: "Intensivkurs PKW",
      price: "ab 2.890€",
      packageDescription: "Komplettpaket inklusive aller Leistungen",
      extras: ["Optionale Extras verfügbar", "Kostenlose Beratung inklusive"],
    },
    faq: {
      title: "Häufige Fragen (FAQ)",
      subtitle: "Antworten auf die wichtigsten Fragen zum Intensivkurs",
      items: [
        {
          question: "Wie schnell kann ich den Führerschein machen?",
          answer:
            "Mit unserem Intensivkurs kannst du deinen Führerschein in 2-4 Wochen erhalten, abhängig von deinem Lernfortschritt und verfügbaren Prüfungsterminen.",
        },
        {
          question: "Was passiert, wenn ich durchfalle?",
          answer:
            "Kein Problem! Wir bieten dir kostenlose Nachschulung an und helfen dir bei der Vorbereitung auf den nächsten Prüfungstermin.",
        },
        {
          question: "Kann ich auch als Berufstätiger teilnehmen?",
          answer:
            "Ja! Wir bieten flexible Termine auch abends und am Wochenende an. Der Intensivkurs kann individuell an deinen Zeitplan angepasst werden.",
        },
        {
          question: "Was unterscheidet den Intensivkurs vom normalen Kurs?",
          answer:
            "Der Intensivkurs ist zeitlich komprimiert mit mehreren Stunden pro Tag. Du erhältst intensivere Betreuung und erreichst dein Ziel deutlich schneller.",
        },
      ],
    },
    cta: {
      title: "Bereit für deinen Intensivkurs?",
      button: "Jetzt zum Intensivkurs anmelden!",
      subtitle: "Kostenlose Beratung und individuelle Kursplanung",
    },
  },
  EN: {
    header: {
      title: "INTENSIVE COURSE",
      subtitle:
        "Your driver's license in record time! Fast, efficient and with maximum support.",
    },
    intro: {
      title: "What is an intensive course?",
      description:
        "The intensive course is the fastest way to get your driver's license. Instead of spreading it over months, you learn everything important in compact, well-planned units in just a few weeks.",
      suitableTitle: "Who is it suitable for?",
      suitableText:
        "Perfect for anyone who needs their driver's license particularly quickly - whether for work, studies, or simply for more flexibility in everyday life.",
    },
    advantages: {
      title: "Advantages at a glance",
      subtitle: "Why our intensive course is the best choice",
      items: [
        {
          title: "Driver's license in weeks",
          description:
            "Reach your goal faster thanks to compact course structure",
        },
        {
          title: "Compact learning units",
          description: "Well-planned, efficient knowledge transfer",
        },
        {
          title: "Close supervision",
          description: "Personal support from experienced driving instructors",
        },
        {
          title: "Flexible appointments",
          description: "Individual adaptation to your needs",
        },
      ],
    },
    process: {
      title: "How your intensive course works",
      subtitle: "5 steps to your driver's license",
      start: "START",
      steps: [
        {
          title: "Registration & Consultation",
          description:
            "Individual preliminary talk, course duration selection and appointment scheduling",
          details: "We discuss your goals and plan the optimal course schedule",
        },
        {
          title: "Compact Theory",
          description:
            "Theory course bundled in a short time - within one week",
          details: "All 14 double lessons completed in a few days",
        },
        {
          title: "Intensive Practice",
          description:
            "Multiple driving lessons per day, specifically prepared for the exam",
          details: "Intensive driving lessons for quick learning success",
        },
        {
          title: "Exam Appointments",
          description:
            "Early planning and reservation for theory and practical exams",
          details: "Optimally planned exam appointments without waiting times",
        },
        {
          title: "Receive License",
          description: "Quick start into independent driving life",
          details: "Your freedom on four wheels!",
        },
      ],
    },
    requirements: {
      title: "Requirements & Notes",
      subtitle: "What you need to bring:",
      items: [
        "Minimum age depending on license class (car from 17/18 years)",
        "Valid ID card or passport",
        "Biometric passport photo",
        "Eye test (not older than 2 years)",
        "First aid course certificate",
        "Timely registration due to official deadlines",
      ],
      noteTitle: "Important Note",
      noteText:
        "Plan at least 4-6 weeks lead time, as official procedures and exam appointments must be organized in advance. The earlier you register, the faster we can start!",
    },
    pricing: {
      title: "Services",
      includedTitle: "Included in the intensive course:",
      services: [
        "Complete theory lessons (14 double lessons)",
        "All mandatory driving lessons including special trips",
        "Learning materials and app access",
        "Exam registration and accompaniment",
        "Personal support throughout the entire course",
      ],
      packageTitle: "Intensive Course Car",
      price: "from €2,890",
      packageDescription: "Complete package including all services",
      extras: ["Optional extras available", "Free consultation included"],
    },
    faq: {
      title: "Frequently Asked Questions (FAQ)",
      subtitle:
        "Answers to the most important questions about the intensive course",
      items: [
        {
          question: "How quickly can I get my driver's license?",
          answer:
            "With our intensive course, you can get your driver's license in 2-4 weeks, depending on your learning progress and available exam appointments.",
        },
        {
          question: "What happens if I fail?",
          answer:
            "No problem! We offer you free additional training and help you prepare for the next exam appointment.",
        },
        {
          question: "Can I participate as a working person?",
          answer:
            "Yes! We offer flexible appointments in the evenings and on weekends. The intensive course can be individually adapted to your schedule.",
        },
        {
          question:
            "What distinguishes the intensive course from the normal course?",
          answer:
            "The intensive course is time-compressed with several hours per day. You receive more intensive support and reach your goal much faster.",
        },
      ],
    },
    cta: {
      title: "Ready for your intensive course?",
      button: "Sign up for the intensive course now!",
      subtitle: "Free consultation and individual course planning",
    },
  },
  AR: {
    header: {
      title: "الدورة المكثفة",
      subtitle: "رخصة القيادة الخاصة بك في وقت قياسي! سريع وفعال ومع أقصى دعم.",
    },
    intro: {
      title: "ما هي الدورة المكثفة؟",
      description:
        "الدورة المكثفة هي أسرع طريقة للحصول على رخصة القيادة. بدلاً من التوزيع على مدى شهور، تتعلم كل ما هو مهم في وحدات مدمجة ومخططة جيداً في غضون أسابيع قليلة.",
      suitableTitle: "لمن هي مناسبة؟",
      suitableText:
        "مثالية لأي شخص يحتاج رخصة القيادة بسرعة خاصة - سواء للعمل أو الدراسة أو ببساطة لمزيد من المرونة في الحياة اليومية.",
    },
    advantages: {
      title: "المزايا في لمحة",
      subtitle: "لماذا دورتنا المكثفة هي الخيار الأفضل",
      items: [
        {
          title: "رخصة القيادة في أسابيع",
          description: "الوصول إلى هدفك بشكل أسرع بفضل هيكل الدورة المدمج",
        },
        {
          title: "وحدات تعليمية مدمجة",
          description: "نقل معرفة مخطط وفعال",
        },
        {
          title: "إشراف مكثف",
          description: "دعم شخصي من مدربي القيادة ذوي الخبرة",
        },
        {
          title: "مواعيد مرنة",
          description: "تكيف فردي مع احتياجاتك",
        },
      ],
    },
    process: {
      title: "كيف تعمل دورتك المكثفة",
      subtitle: "5 خطوات لرخصة القيادة",
      start: "بداية",
      steps: [
        {
          title: "التسجيل والاستشارة",
          description: "محادثة أولية فردية، اختيار مدة الدورة وتحديد المواعيد",
          details: "نناقش أهدافك ونخطط لجدول الدورة الأمثل",
        },
        {
          title: "النظرية المدمجة",
          description: "دورة نظرية مجمعة في وقت قصير - خلال أسبوع واحد",
          details: "جميع الـ 14 درساً مزدوجاً مكتملة في أيام قليلة",
        },
        {
          title: "الممارسة المكثفة",
          description: "عدة دروس قيادة يومياً، محضرة خصيصاً للامتحان",
          details: "دروس قيادة مكثفة لنجاح تعليمي سريع",
        },
        {
          title: "مواعيد الامتحان",
          description: "تخطيط مبكر وحجز لامتحانات النظرية والممارسة",
          details: "مواعيد امتحان مخططة بشكل مثالي بدون أوقات انتظار",
        },
        {
          title: "الحصول على الرخصة",
          description: "بداية سريعة في حياة القيادة المستقلة",
          details: "حريتك على أربع عجلات!",
        },
      ],
    },
    requirements: {
      title: "المتطلبات والملاحظات",
      subtitle: "ما تحتاج لإحضاره:",
      items: [
        "العمر الأدنى حسب فئة الرخصة (السيارة من 17/18 سنة)",
        "بطاقة هوية أو جواز سفر صالح",
        "صورة جواز سفر بيومترية",
        "فحص النظر (لا يزيد عمره عن سنتين)",
        "شهادة دورة الإسعافات الأولية",
        "التسجيل في الوقت المناسب بسبب المواعيد النهائية الرسمية",
      ],
      noteTitle: "ملاحظة مهمة",
      noteText:
        "خطط لفترة زمنية مسبقة لا تقل عن 4-6 أسابيع، حيث يجب تنظيم الإجراءات الرسمية ومواعيد الامتحانات مسبقاً. كلما سجلت مبكراً، كلما تمكنا من البدء بشكل أسرع!",
    },
    pricing: {
      title: " الخدمات",
      includedTitle: "مشمول في الدورة المكثفة:",
      services: [
        "دروس نظرية كاملة (14 درساً مزدوجاً)",
        "جميع دروس القيادة الإلزامية بما في ذلك الرحلات الخاصة",
        "مواد تعليمية والوصول إلى التطبيق",
        "تسجيل الامتحان والمرافقة",
        "دعم شخصي طوال الدورة بأكملها",
      ],
      packageTitle: "الدورة المكثفة للسيارة",
      price: "من 2,890€",
      packageDescription: "حزمة كاملة تشمل جميع الخدمات",
      extras: ["إضافات اختيارية متاحة", "استشارة مجانية مشمولة"],
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على أهم الأسئلة حول الدورة المكثفة",
      items: [
        {
          question: "كم بسرعة يمكنني الحصول على رخصة القيادة؟",
          answer:
            "مع دورتنا المكثفة، يمكنك الحصول على رخصة القيادة في 2-4 أسابيع، اعتماداً على تقدمك التعليمي والمواعيد المتاحة للامتحان.",
        },
        {
          question: "ماذا يحدث إذا فشلت؟",
          answer:
            "لا مشكلة! نقدم لك تدريباً إضافياً مجانياً ونساعدك في التحضير لموعد الامتحان التالي.",
        },
        {
          question: "هل يمكنني المشاركة كشخص عامل؟",
          answer:
            "نعم! نقدم مواعيد مرنة في المساء وفي عطلات نهاية الأسبوع. يمكن تكييف الدورة المكثفة بشكل فردي مع جدولك الزمني.",
        },
        {
          question: "ما الذي يميز الدورة المكثفة عن الدورة العادية؟",
          answer:
            "الدورة المكثفة مضغوطة زمنياً مع عدة ساعات يومياً. تحصل على دعم أكثر كثافة وتصل إلى هدفك بشكل أسرع بكثير.",
        },
      ],
    },
    cta: {
      title: "هل أنت مستعد لدورتك المكثفة؟",
      button: "سجل الآن في الدورة المكثفة!",
      subtitle: "استشارة مجانية وتخطيط فردي للدورة",
    },
  },
};

const IntensivKursPage = () => {
  const { selectedLanguage } = useLanguage();
  const { data: preiseData } = useApiData("preise");
  const langContent = content[selectedLanguage] || content.DE;
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const vorteile = langContent.advantages.items.map((item, index) => ({
    icon: [
      <FaBolt className="text-xl" />,
      <FaLightbulb className="text-xl" />,
      <FaHandshake className="text-xl" />,
      <FaCalendarAlt className="text-xl" />,
    ][index],
    title: item.title,
    description: item.description,
    color: [
      "text-red-500",
      "text-yellow-500",
      "text-blue-500",
      "text-green-500",
    ][index],
  }));

  const steps = langContent.process.steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    description: step.description,
    icon: [
      <FaUserPlus className="text-2xl md:text-3xl" />,
      <FaBook className="text-2xl md:text-3xl" />,
      <FaCar className="text-2xl md:text-3xl" />,
      <FaGraduationCap className="text-2xl md:text-3xl" />,
      <FaTrophy className="text-2xl md:text-3xl" />,
    ][index],
    details: step.details,
  }));

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

  return (
    <>
      <Helmet>
        <title>
          Intensivkurs Führerschein Lüneburg – Schnell zum Führerschein mit
          Scooldrive
        </title>
        <meta
          name="description"
          content="Führerschein-Intensivkurs in Lüneburg: In wenigen Tagen zum Führerschein! Kompakte Ausbildung, erfahrene Fahrlehrer und flexible Termine bei Scooldrive. Jetzt Intensivkurs sichern!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Intensivkurs Führerschein Lüneburg – Schnell zum Führerschein mit Scooldrive"
        />
        <meta
          property="og:description"
          content="Führerschein in kurzer Zeit: Intensivkurse in Lüneburg bei Scooldrive. Kompakt, professionell und individuell. Jetzt informieren und durchstarten!"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/intensivkurse"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Intensivkurs Führerschein Lüneburg – Schnell zum Führerschein mit Scooldrive"
        />
        <meta
          name="twitter:description"
          content="Mit dem Intensivkurs in Lüneburg schnell und sicher zum Führerschein – Scooldrive macht’s möglich!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/intensivkurse"
        />
      </Helmet>

      <div className="min-h-screen mt-[80px] bg-gray-50 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              {langContent.header.title.split(" ")[0]}
              {langContent.header.title.includes(" ") && (
                <span className="text-[#F5BB00]">
                  {langContent.header.title.split(" ").slice(1).join(" ")}
                </span>
              )}
              {!langContent.header.title.includes(" ") && (
                <span className="text-[#F5BB00]">
                  {langContent.header.title.slice(-4)}
                </span>
              )}
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
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                      <FaRocket className="text-black text-xl" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                      {langContent.intro.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {langContent.intro.description}
                  </p>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#F5BB00] rounded-full flex items-center justify-center mr-3">
                      <FaUsers className="text-black text-sm" />
                    </div>
                    <h3 className="text-lg font-bold text-black">
                      {langContent.intro.suitableTitle}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {langContent.intro.suitableText}
                  </p>
                </div>

                {/* Bild Platzhalter */}
                <div className="flex justify-center">
                  <div className="w-full max-w-md h-80 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src="/intensivkurs.jpg"
                      alt={
                        selectedLanguage === "DE"
                          ? "Roter Auto-Scheinwerfer – Symbolbild für Intensivkurs Führerschein in Lüneburg"
                          : selectedLanguage === "EN"
                          ? "Red car headlight – symbolic image for intensive driving course in Lüneburg"
                          : "مصباح أمامي لسيارة حمراء – صورة رمزية لدورة رخصة القيادة المكثفة في لونيبورغ"
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vorteile */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {langContent.advantages.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {langContent.advantages.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vorteile.map((vorteil, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg "
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div
                      className={`${vorteil.color} mb-4 flex justify-center`}
                    >
                      {vorteil.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {vorteil.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {vorteil.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ablauf Timeline */}
          <motion.div
            className="mb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {langContent.process.title}
              </h2>
              <p className="text-lg text-gray-600">
                {langContent.process.subtitle}
              </p>
            </div>

            {/* Desktop: Timeline Layout */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>

              {/* Start Point */}
              <motion.div
                className="relative flex items-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-[#F5BB00] rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-black font-bold text-sm">
                    {langContent.process.start}
                  </span>
                </div>
              </motion.div>

              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex items-center mb-8 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-8 w-6 h-6 bg-[#F5BB00] rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  />

                  {/* Step Card */}
                  <motion.div
                    className="flex-1 ml-20"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <div className="w-16 h-16 bg-[#F5BB00] rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {step.id}
                          </div>
                          <div className="text-[#F5BB00] group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-[#F5BB00] transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-base md:text-lg mb-2 leading-relaxed">
                            {step.description}
                          </p>
                          <p className="text-sm text-gray-500 italic">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Mobile: Grid Layout */}
            <div className="md:hidden grid grid-cols-1 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center text-black font-bold text-lg">
                        {step.id}
                      </div>
                      <div className="text-[#F5BB00]">{step.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-500 italic">
                      {step.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Voraussetzungen */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                  <FaIdCard className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  {langContent.requirements.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {langContent.requirements.subtitle}
                  </h3>
                  <div className="space-y-3">
                    {langContent.requirements.items.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-[#F5BB00] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-orange-500 mr-3 text-xl" />
                    <h3 className="text-xl font-bold text-orange-800">
                      {langContent.requirements.noteTitle}
                    </h3>
                  </div>
                  <p className="text-orange-700 leading-relaxed">
                    {langContent.requirements.noteText}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preise & Leistungen */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <div className="flex items-center mb-8 justify-center">
                <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                  <FaClock className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  {langContent.pricing.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {langContent.pricing.includedTitle}
                  </h3>
                  <div className="space-y-4">
                    {langContent.pricing.services.map((leistung, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-[#F5BB00] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{leistung}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#F5BB00] to-[#e5a800] rounded-xl p-6 text-center">
                  <FaStar className="text-4xl text-black mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {langContent.pricing.packageTitle}
                  </h3>

                  {/* <div className="text-4xl font-bold text-black mb-4">
                    {preiseData?.intensivkursPreis || langContent.pricing.price}
                    €
                  </div> */}
                  <p className="text-black opacity-90 mb-6">
                    {langContent.pricing.packageDescription}
                  </p>
                  <div className="space-y-2 text-sm text-black">
                    {langContent.pricing.extras.map((extra, index) => (
                      <p key={index}>{extra}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {langContent.faq.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {langContent.faq.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {langContent.faq.items.map((item, index) => (
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

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {langContent.cta.title}
            </h2>

            <motion.button
              className="bg-[#F5BB00] text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 187, 0, 0.3)",
              }}
              onClick={() => navigate("/anmelden")}
              whileTap={{ scale: 0.95 }}
            >
              {langContent.cta.button}
            </motion.button>

            <p className="text-gray-600 mt-6 text-lg">
              {langContent.cta.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default IntensivKursPage;
