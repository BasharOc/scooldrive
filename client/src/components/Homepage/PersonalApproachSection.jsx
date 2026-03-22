import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaCalendarAlt, FaCog, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const personalApproachContent = {
  DE: {
    header1: "Du bist nicht irgendwer",
    header2: "also bekommst du bei uns auch kein 08/15",
    header2Highlight: "kein 08/15",
    header2Underline: true,
    description:
      "Denn wie du Unabhängigkeit lebst, ist so individuell wie dein Alltag. Genau deshalb starten wir nicht einfach mit der ersten Fahrstunde, sondern mit dir.",
    features: [
      {
        icon: <FaCalendarAlt className="text-2xl" />,
        title: "Flexible Termine",
        description: "Fahrstunden, die sich deinem Leben anpassen",
      },
      {
        icon: <FaUser className="text-2xl" />,
        title: "Persönliche Betreuung",
        description: "Ein Fahrlehrer, der dich wirklich versteht",
      },
      {
        icon: <FaUser className="text-2xl" />,
        title: "Individuelle Betreuung",
        description: "Wenn's dir zu viel wird, sind wir da",
      },
      {
        icon: <FaCog className="text-2xl" />,
        title: "Maßgeschneidert",
        description: "Deine Ausbildung, perfekt integriert in deinen Alltag",
      },
    ],
    bottomText1:
      "Wir schauen gemeinsam, was du wirklich brauchst, welche Formalitäten auf dich zukommen und wie wir deine Ausbildung bestmöglich in dein Leben integrieren.",
    bottomText2:
      "Und bevor wir dir jetzt zu viel erzählen: Klick dich einfach mal durch oder hol dir mit unserem Führerscheinkonfigurator ein Angebot, das wirklich zu dir passt.",
    bottomText3: "Du hast bei uns die Kontrolle.",
    cta1: "Führerschein-Konfigurator",
    cta2: "Alle Angebote",
    closing: "Wir freuen uns, dich auf deinem Weg zu begleiten!",
  },
  EN: {
    header1: "You are not just anyone",
    header2: "so you won't get a standard solution from us",
    header2Highlight: "a standard solution",
    header2Underline: true,
    description:
      "How you live your independence is as individual as your everyday life. That's why we don't just start with the first driving lesson, but with you.",
    features: [
      {
        icon: <FaCalendarAlt className="text-2xl" />,
        title: "Flexible appointments",
        description: "Driving lessons that fit your life",
      },
      {
        icon: <FaUser className="text-2xl" />,
        title: "Personal support",
        description: "An instructor who truly understands you",
      },
      {
        icon: <FaUser className="text-2xl" />,
        title: "Individual support",
        description: "If it gets too much, we're here for you",
      },
      {
        icon: <FaCog className="text-2xl" />,
        title: "Tailor-made",
        description: "Your training, perfectly integrated into your life",
      },
    ],
    bottomText1:
      "Together we look at what you really need, what formalities await you and how we can best integrate your training into your life.",
    bottomText2:
      "And before we tell you too much: Just click through or get an offer that really suits you with our license configurator.",
    bottomText3: "You are in control with us.",
    cta1: "License Configurator",
    cta2: "All offers",
    closing: "We look forward to accompanying you on your journey! ",
  },
  AR: {
    header1: "أنت لست أي شخص عادي",
    header2: "لذلك لن تحصل معنا على حل تقليدي",
    header2Highlight: "حل تقليدي",
    header2Underline: true,
    description:
      "طريقة عيشك للاستقلالية فريدة مثل حياتك اليومية. لهذا السبب لا نبدأ فقط بأول درس قيادة، بل نبدأ معك أنت.",
    features: [
      {
        icon: <FaCalendarAlt className="text-2xl" />,
        title: "مواعيد مرنة",
        description: "دروس القيادة تناسب حياتك",
      },
      {
        icon: <FaUser className="text-2xl" />,
        title: "دعم شخصي",
        description: "مدرب يفهمك حقًا",
      },
      {
        icon: <FaUser className="text-2xl" />,
        title: "دعم فردي",
        description: "إذا أصبح الأمر كثيرًا عليك، نحن هنا من أجلك",
      },
      {
        icon: <FaCog className="text-2xl" />,
        title: "مصمم خصيصًا لك",
        description: "تدريبك مدمج تمامًا في حياتك اليومية",
      },
    ],
    bottomText1:
      "ننظر معًا فيما تحتاجه حقًا، وما هي الإجراءات الرسمية التي تنتظرك، وكيف يمكننا دمج تدريبك في حياتك بأفضل شكل.",
    bottomText2:
      "وقبل أن نطيل عليك بالكلام: تصفح الموقع أو احصل على عرض يناسبك فعلاً من خلال مُكوّن رخصة القيادة.",
    bottomText3: "أنت المتحكم معنا.",
    cta1: "مُكوّن رخصة القيادة",
    cta2: "جميع العروض",
    closing: "نتطلع لمرافقتك في طريقك! ",
  },
};

const PersonalApproachSection = () => {
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();
  const isArabic = selectedLanguage === "AR";
  const lang =
    personalApproachContent[selectedLanguage] || personalApproachContent.DE;

  return (
    <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#F5BB00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#F5BB00] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="mb-16 text-center"
          >
            <motion.h2
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6"
              style={{ direction: isArabic ? "rtl" : "ltr" }}
            >
              <span className="text-[#F5BB00]">{lang.header1}</span> –<br />
              {lang.header2Underline ? (
                <span className="relative">
                  {lang.header2.replace(lang.header2Highlight, "")}
                  <span className="relative font-bold text-black">
                    {lang.header2Highlight}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="absolute left-0 h-1 bg-[#F5BB00] rounded"
                      style={{
                        bottom: isArabic ? "-0.4em" : "0.1em", // Arabisch: Unterstrich weiter oben, Englisch/Deutsch: Unterstrich weiter unten
                        right: isArabic ? 0 : "auto",
                      }}
                    />
                  </span>
                </span>
              ) : (
                <span>{lang.header2}</span>
              )}
            </motion.h2>

            <motion.p
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              {lang.description.split(" ").map((word, i) =>
                word === "mit" || word === "معك" ? (
                  <span key={i} className="font-bold text-black">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {lang.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl  border border-gray-100 hover:border-[#F5BB00]"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-[#F5BB00] rounded-full flex items-center justify-center mx-auto mb-4 text-black"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-bold text-lg text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-center"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                {lang.bottomText1}
                <br />
                <br />
                <span className="font-bold text-black">{lang.bottomText3}</span>
              </p>

              <motion.p
                initial="hidden"
                animate="visible"
                className="text-gray-600 mb-8 italic"
              >
                {lang.bottomText2}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(245, 187, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/anmelden")}
                  className="bg-[#F5BB00] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg flex items-center space-x-3 cursor-pointer"
                >
                  <FaCog className="text-xl" />
                  <span>{lang.cta1}</span>
                  <FaArrowRight />
                </motion.button>

                {/* <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#F5BB00",
                    color: "#F5BB00",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/angebote")}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#F5BB00] hover:text-[#F5BB00] transition-all duration-300 flex items-center space-x-3"
                >
                  <span>{lang.cta2}</span>
                  <FaArrowRight />
                </motion.button> */}
              </motion.div>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              className="text-[#F5BB00] font-bold text-xl"
            >
              {lang.closing}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalApproachSection;
