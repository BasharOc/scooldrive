import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaMotorcycle, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const drivingSchoolContent = {
  DE: {
    header1: "Führerschein digital erleben",
    header2: "Lernen, wann und wo du willst",
    cta: "JETZT ANMELDEN",
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
        title: "MOTORRADFÜHRER-SCHEIN",
        subtitle: "— KLASSE A",
        description: "Freiheit und Fahrtwind. Auch im Fußraum.",
      },
    ],
    more: "Mehr erfahren",
  },
  EN: {
    header1: "Experience your license digitally",
    header2: "Learn whenever and wherever you want",
    cta: "SIGN UP NOW",
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
  AR: {
    header1: "اختبر رخصتك رقمياً",
    header2: "تعلّم متى وأينما تريد",
    cta: "سجّل الآن",
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
};

const DrivingSchoolSection = () => {
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();
  const isArabic = selectedLanguage === "AR";
  const lang =
    drivingSchoolContent[selectedLanguage] || drivingSchoolContent.DE;

  const drivingOptions = [
    {
      id: "auto",
      icon: <FaCar className="text-4xl" />,
      route: "/auto-fuehrerschein",
    },
    {
      id: "auto-anhaenger",
      icon: (
        <img
          src="/auto-anhanger.png"
          alt={
            selectedLanguage === "DE"
              ? "Anhängerführerschein Klasse BE – Auto mit Anhänger in Lüneburg"
              : selectedLanguage === "EN"
              ? "Trailer license class BE – car with trailer in Lüneburg"
              : "رخصة قيادة مقطورة فئة BE – سيارة مع مقطورة في لونيبورغ"
          }
          className="w-12"
          style={{ minWidth: 70, height: "auto" }}
        />
      ),
      route: "/auto-anhaenger",
    },
    {
      id: "motorrad",
      icon: <FaMotorcycle className="text-4xl" />,
      route: "/motorrad-fuehrerschein",
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const phoneVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content & Phone */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Header Text */}
            <motion.div variants={phoneVariants} className="text-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  className="font-bold leading-tight mb-0 text-center"
                  style={{
                    background: "#000",
                    color: "#fff",
                    borderRadius: "0.75rem",
                    padding: "0.25rem 0.5rem 0.5rem 0.5rem",
                    display: "inline-block",
                    maxWidth: 600,
                    width: "100%",
                    fontSize: "clamp(1.25rem, 5vw, 2.0rem)",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}
                >
                  {lang.header1}
                </span>
                <span
                  className="font-bold leading-tight text-center"
                  style={{
                    background: "#000",
                    color: "#fff",
                    borderRadius: "0 0 0.75rem 0.75rem",
                    padding: "0.25rem 0.25rem 0.5rem 0.25rem",
                    display: "inline-block",
                    maxWidth: 480,
                    width: "100%",
                    fontSize: "clamp(1rem, 4vw, 1.5rem)",
                    marginTop: "0px",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}
                >
                  {lang.header2}
                </span>
              </div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              variants={phoneVariants}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-52 h-[400px] bg-black rounded-[2rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[1.7rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center p-4 text-xs font-medium">
                      <span>12:57</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="px-4">
                      <div className="bg-gray-100 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold">PREMIUM</span>
                          <div className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -96%
                          </div>
                        </div>
                        <div className="text-right text-xs text-gray-600">
                          1100/1150
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm font-bold mb-1">Theorie</div>
                          <div className="w-full h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded mb-2 flex items-center justify-center">
                            <div className="text-white text-2xl">🌱</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs">Neue Fragen</span>
                            <FaArrowRight className="text-xs" />
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-600 mb-1">
                            Lerneinheit 7/9
                          </div>
                          <div className="text-xs text-gray-500">
                            Thema 1-4 | Offline | Fragen 8
                          </div>
                          <div className="w-full h-16 bg-gray-300 rounded mt-2"></div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-3">
                      <div className="flex justify-around">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-[#F5BB00] rounded mx-auto mb-1"></div>
                          <span className="text-xs">Start</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-gray-300 rounded mx-auto mb-1"></div>
                          <span className="text-xs">Lernen</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-gray-300 rounded mx-auto mb-1"></div>
                          <span className="text-xs">Tests</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-gray-300 rounded mx-auto mb-1"></div>
                          <span className="text-xs">Mehr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={phoneVariants}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(245, 187, 0, 0.3)",
                }}
                onClick={() => navigate("/anmelden")} // Correct navigation
                whileTap={{ scale: 0.95 }}
                className="bg-[#F5BB00] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg cursor-pointer"
              >
                {lang.cta}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Driving Options */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {drivingOptions.map((option, index) => {
              const text = lang.options.find((o) => o.id === option.id);
              return (
                <motion.div
                  key={option.id}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#f9f9f9",
                  }}
                  onClick={() => handleCardClick(option.route)}
                  className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#F5BB00] group"
                  style={{ minHeight: 160, height: 160, maxHeight: 175 }}
                >
                  <div className="flex items-start justify-between h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-1 group-hover:text-[#F5BB00] transition-colors">
                          {text.title}
                        </h3>
                        <p className="text-sm font-bold text-gray-600 mb-2">
                          {text.subtitle}
                        </p>
                        <p className="text-gray-700 mb-2 text-sm">
                          {text.description}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center space-x-2 text-[#F5BB00] font-bold"
                      >
                        <span>{lang.more}</span>
                        <div className="w-8 h-8 bg-[#F5BB00] rounded-lg flex items-center justify-center">
                          <FaArrowRight className="text-black text-sm" />
                        </div>
                      </motion.div>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="text-[#F5BB00] ml-6 flex items-center"
                    >
                      {option.icon}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DrivingSchoolSection;
