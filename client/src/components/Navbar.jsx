import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaCar,
  FaTruck,
  FaMotorcycle,
  FaBus,
  FaGlobe,
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaBook,
  FaRocket,
  FaTag,
  FaBalanceScale,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom"; // Importiere Link und useNavigate von React Router

const Navbar = () => {
  const navigate = useNavigate(); // Initialisiere useNavigate
  const [hoveredMenu, setHoveredMenu] = useState(null);
  // const [selectedLanguage, setSelectedLanguage] = useState("DE");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const { selectedLanguage, setSelectedLanguage, languages, t } = useLanguage();
  const isMobileMenu = window.innerWidth < 768;

  // Timer für verzögertes Schließen des Megamenüs
  const closeTimer = useRef(null);
  // Icons für Führerschein-Menüpunkte
  const fuehrerscheinIcons = [
    <FaCar key="car" className="text-black text-4xl" />,
    <img
      key="trailer"
      src="/auto-anhanger-mobile.png"
      alt={
        selectedLanguage === "DE"
          ? "Anhängerführerschein Klasse BE – Auto mit Anhänger in Lüneburg"
          : selectedLanguage === "EN"
          ? "Trailer license class BE – car with trailer in Lüneburg"
          : "رخصة قيادة مقطورة فئة BE – سيارة مع مقطورة في لونيبورغ"
      }
      className="w-auto object-contain max-w-[70px]"
      style={{ minWidth: 44, minHeight: 28 }}
    />,
    <FaMotorcycle key="motorcycle" className="text-black text-4xl" />,
    <FaBook key="theory" className="text-black text-4xl" />, // Icon für Theoriekurs
    <FaRocket key="intensive" className="text-black text-4xl" />, // Icon für Intensivkurse
    <FaTag key="prices" className="text-black text-4xl" />, // Icon für Preise
    <FaBalanceScale key="points" className="text-black text-4xl" />, // Icon für Punkte Abbauen
  ];

  const getMenuItems = (menuType) => {
    const iconSet = fuehrerscheinIcons;

    switch (menuType) {
      case "fuehrerschein":
        return (t?.fuehrerscheinItems || []).map((item, idx) => ({
          ...item,
          icon: iconSet[idx],
        }));
      case "angebote":
        return t?.weitereAngeboteItems || [];
      case "termine":
        return t?.termineItems.map((item, idx) => ({
          title: item.title,
          description: item.description,
          path:
            item.title === "Theoriekurs" || item.title === "دورة نظرية"
              ? "/theoriekurs"
              : item.title === "Intensivkurse" || item.title === "دورات مكثفة"
              ? "/intensivkurse"
              : item.title === "Preise" || item.title === "الأسعار"
              ? "/preise"
              : item.title === "Punkte Abbauen" || item.title === "تقليل النقاط"
              ? "/punkte-abbauen"
              : item.title === "Blog" || item.title === "المدونة"
              ? "/blog"
              : null,
          icon:
            item.title === "Blog" || item.title === "المدونة" ? (
              <FaInfoCircle className="text-black text-4xl" />
            ) : (
              fuehrerscheinIcons[idx + 3]
            ), // Standard-Icons für andere Elemente
        }));
      default:
        return [];
    }
  };

  // Timer-basierte Menü-Steuerung
  const handleMenuEnter = (menuType) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setHoveredMenu(menuType);
  };

  const handleMenuLeave = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 250);
  };

  const handleMegaMenuEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleMegaMenuLeave = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 250);
  };

  useEffect(() => {
    // Sprache aus localStorage abrufen und setzen
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, [setSelectedLanguage]);

  const handleLanguageChange = (langCode) => {
    setSelectedLanguage(langCode); // Sprache im Context setzen
    localStorage.setItem("selectedLanguage", langCode); // Sprache im localStorage speichern
    setShowLanguageDropdown(false); // Dropdown schließen
  };

  return (
    <div className="fixed z-50 w-full top-8 left-1/2 max-w-[90%] mb-32 -translate-x-1/2 ">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/90 backdrop-blur-md rounded-2xl px-6 py-[5px] shadow-2xl border border-gray-800 relative"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="px-3 py-2 flex items-center">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt={
                    selectedLanguage === "DE"
                      ? "Fahrschule Scooldrive Lüneburg Logo"
                      : selectedLanguage === "EN"
                      ? "Scooldrive Driving School Lüneburg logo"
                      : "شعار مدرسة القيادة سكولدرايف لونيبورغ"
                  }
                  className="h-[45px] w-auto object-contain"
                  style={{ maxHeight: 45 }}
                />
              </Link>
            </div>

            {/* Desktop: Filiale Info */}
            <div className="hidden md:flex text-white flex-col">
              <div className="text-sm font-bold">DEINE FILIALE</div>
              <div className="text-[#F5BB00] text-lg font-bold">Lüneburg</div>
            </div>

            {/* Mobile: Language Switcher */}
            <div className="md:hidden relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-2 text-white hover:text-[#F5BB00] transition-colors bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-600 hover:border-[#F5BB00] cursor-pointer"
              >
                <FaGlobe className="text-sm" />
                <span className="text-sm font-medium">
                  {
                    languages.find((lang) => lang.code === selectedLanguage)
                      ?.flag
                  }{" "}
                  {selectedLanguage}
                </span>
                <FaChevronDown className="text-xs" />
              </button>

              {showLanguageDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl  border border-gray-800 overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="w-full text-left px-4 py-3 text-white hover:bg-[#F5BB00] hover:text-black transition-colors flex items-center space-x-2"
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Führerschein Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("fuehrerschein")}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                to="/fuehrerschein"
                className="flex items-center space-x-1 text-[#F5BB00] font-bold transition-all duration-200 hover:text-[#F5BB00] hover:bg-[#F5BB00]/10 hover:scale-105 hover:shadow-lg rounded-lg px-3 py-2 cursor-pointer"
              >
                <span>{t?.fuehrerschein}</span>
                <FaChevronDown className="text-xs" />
              </Link>
            </div>

            {/* Termine */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("termine")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className="flex items-center space-x-1 text-white font-bold transition-all duration-200
   hover:text-[#F5BB00] hover:bg-[#F5BB00]/10 hover:scale-105 hover:shadow-lg rounded-lg px-3 py-2 cursor-pointer"
              >
                <span>{t?.termine}</span>
                <FaChevronDown className="text-xs" />
              </button>
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-2 text-white hover:text-[#F5BB00] transition-colors bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-600 hover:border-[#F5BB00] cursor-pointer"
              >
                <FaGlobe className="text-sm" />
                <span className="text-sm font-medium">
                  {
                    languages.find((lang) => lang.code === selectedLanguage)
                      ?.flag
                  }{" "}
                  {selectedLanguage}
                </span>
                <FaChevronDown className="text-xs" />
              </button>

              {showLanguageDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-800 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="w-full text-left px-4 py-3 text-white hover:bg-[#F5BB00] hover:text-black transition-colors flex items-center space-x-2"
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#F5BB00] text-black px-6 py-2 rounded-lg font-bold transition-all duration-200 hover:bg-yellow-400 hover:shadow-xl cursor-pointer"
              onClick={() => navigate("/anmelden")} // Navigiere zu /anmelden
            >
              {t?.anmelden}
            </motion.button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#F5BB00] transition-colors p-2"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Megamenu */}
        <AnimatePresence>
          {hoveredMenu && !isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, layout: { duration: 0.25 } }}
              className={`absolute top-full z-40 bg-white rounded-b-2xl p-6 shadow-2xl ${
                isMobileMenu
                  ? "left-1/2 w-[90%] -translate-x-1/2"
                  : "max-w-[100%] left-0 w-screen"
              }`}
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.16 }}
                >
                  {hoveredMenu === "fuehrerschein" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.18 }}
                      className="mb-8 bg-gray-200 rounded-xl flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-4"
                    >
                      <span className="text-black font-bold text-lg text-center md:text-left">
                        {t?.fuehrerscheinBanner.text}
                      </span>
                      <button
                        className="bg-[#F5BB00] text-black font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-yellow-400 hover:scale-105 hover:shadow-xl cursor-pointer"
                        onClick={() => navigate("/anmelden")}
                      >
                        {t?.fuehrerscheinBanner.button}
                      </button>
                    </motion.div>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {getMenuItems(hoveredMenu).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.045, duration: 0.16 }}
                        className="group cursor-pointer"
                        onClick={() => {
                          if (
                            item.title === "AUTOFÜHRERSCHEIN" ||
                            item.title === "CAR LICENSE" ||
                            item.title === "رخصة السيارة"
                          ) {
                            setHoveredMenu(null); // Schließe das Megamenu
                            navigate("/auto-fuehrerschein"); // Navigiere zu /auto-fuehrerschein
                          } else if (
                            item.title === "AUTO-ANHÄNGER" ||
                            item.title === "CAR TRAILER" ||
                            item.title === "سيارة مع مقطورة"
                          ) {
                            setHoveredMenu(null); // Schließe das Megamenu
                            navigate("/auto-anhaenger"); // Navigiere zu /auto-anhaenger
                          } else if (
                            item.title === "MOTORRADFÜHRERSCHEIN" ||
                            item.title === "MOTORCYCLE LICENSE" ||
                            item.title === "رخصة الدراجة النارية"
                          ) {
                            setHoveredMenu(null); // Schließe das Megamenu
                            navigate("/motorrad-fuehrerschein"); // Navigiere zu /motorrad-fuehrerschein
                          } else if (
                            item.title === "Theoriekurs" ||
                            item.title === "Theory Course" ||
                            item.title === "دورة نظرية"
                          ) {
                            setHoveredMenu(null); // Schließe das Megamenu
                            navigate("/theoriekurs"); // Navigiere zu /theoriekurs
                          } else if (
                            item.title === "Intensivkurse" ||
                            item.title === "Intensive Courses" ||
                            item.title === "دورات مكثفة"
                          ) {
                            setHoveredMenu(null); // Schließe das Megamenu
                            navigate("/intensivkurse"); // Navigiere zu /intensivkurse
                          } else if (
                            item.title === "Preise" ||
                            item.title === "Prices" ||
                            item.title === "الأسعار"
                          ) {
                            setHoveredMenu(null); // Schließe das Megamenu
                            navigate("/preise"); // Navigiere zu /preise
                          } else if (
                            item.title === "Punkte Abbauen" ||
                            item.title === "Reduce Points" ||
                            item.title === "تقليل النقاط"
                          ) {
                            setHoveredMenu(null); // Schließe das Megamenu
                            navigate("/punkte-abbauen"); // Navigiere zu /punkte-abbauen
                          } else if (
                            item.title === "Blog" ||
                            item.title === "Blog" ||
                            item.title === "المدونة"
                          ) {
                            setHoveredMenu(null); // Schließe das Megamenu
                            navigate("/blogs"); // Navigiere zu /blog
                          }
                        }}
                      >
                        <div className="bg-gray-200 rounded-xl p-4 hover:bg-gray-300 hover:shadow-2xl transition-all group-hover:scale-105 flex flex-col items-center cursor-pointer h-full">
                          {item.icon && (
                            <div
                              className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center"
                              style={{ minHeight: 40 }}
                            >
                              {item.icon}
                            </div>
                          )}
                          <h3 className="text-black font-bold text-sm mb-2 text-center">
                            {item.title}
                          </h3>
                          <p className="text-black text-xs text-center">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 w-screen h-screen z-50 md:hidden bg-white"
            style={{
              minHeight: "100dvh",
              ...(isMobileMenuOpen
                ? { left: "-5.6%", top: "-4.2vh", position: "absolute" }
                : {}),
            }}
          >
            {/* Weißer Container für alle Inhalte */}
            <div className="w-full h-full bg-white">
              <div className="flex flex-col h-full bg-white">
                {/* Header mit Logo und Close */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/logo.png"
                      alt={
                        selectedLanguage === "DE"
                          ? "Fahrschule Scooldrive Lüneburg Logo"
                          : selectedLanguage === "EN"
                          ? "Scooldrive Driving School Lüneburg logo"
                          : "شعار مدرسة القيادة سكولدرايف لونيبورغ"
                      }
                      className="max-h-[40px] max-w-[70px]"
                    />
                  </div>
                  <div className="text-black font-bold text-2xl">MENÜ</div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-black p-2"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                {/* CTA Button */}
                <div className="p-6 bg-white">
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full bg-[#F5BB00] text-black py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false); // Schließe das mobile Menü
                      navigate("/anmelden"); // Navigiere zu /anmelden
                    }}
                  >
                    <span>{t?.anmelden}</span>
                    <span>→</span>
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 px-6 bg-white overflow-y-auto">
                  {[
                    {
                      key: "fuehrerschein",
                      title: t?.fuehrerschein,
                      delay: 0.3,
                      hasSubmenu: true,
                      submenu: [
                        ...t?.fuehrerscheinItems.map((item, idx) => ({
                          title: item.title,
                          description: item.description,
                          path:
                            item.title === "AUTOFÜHRERSCHEIN"
                              ? "/auto-fuehrerschein"
                              : item.title === "AUTO-ANHÄNGER"
                              ? "/auto-anhaenger"
                              : item.title === "MOTORRADFÜHRERSCHEIN"
                              ? "/motorrad-fuehrerschein"
                              : null,
                          icon: fuehrerscheinIcons[idx],
                        })),
                      ],
                    },
                    {
                      key: "termine",
                      title: t?.termine, // Dynamische Übersetzung basierend auf LanguageContext
                      delay: 0.4,
                      hasSubmenu: true,
                      submenu: [
                        ...t?.termineItems.map((item, idx) => ({
                          title: item.title,
                          description: item.description,
                          path:
                            item.title === "Theoriekurs" ||
                            item.title === "دورة نظرية"
                              ? "/theoriekurs"
                              : item.title === "Intensivkurse" ||
                                item.title === "دورات مكثفة"
                              ? "/intensivkurse"
                              : item.title === "Preise" ||
                                item.title === "الأسعار"
                              ? "/preise"
                              : item.title === "Punkte Abbauen" ||
                                item.title === "تقليل النقاط"
                              ? "/punkte-abbauen"
                              : item.title === "Blog" ||
                                item.title === "المدونة"
                              ? "/blog"
                              : null,
                          icon:
                            item.title === "Blog" ||
                            item.title === "المدونة" ? (
                              <FaInfoCircle className="text-black text-4xl" />
                            ) : (
                              fuehrerscheinIcons[idx + 3]
                            ), // Standard-Icons für andere Elemente
                        })),
                      ],
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay, duration: 0.4 }}
                      className="border-b border-gray-200 py-4 bg-white"
                    >
                      <button
                        onClick={() =>
                          setExpandedMobileMenu(
                            expandedMobileMenu === item.key ? null : item.key
                          )
                        }
                        className="w-full text-left flex items-center justify-between group bg-white mb-4"
                      >
                        <span className="font-bold text-black text-xl group-hover:text-[#F5BB00] transition-colors">
                          {item.title}
                        </span>
                        <motion.span
                          animate={{
                            rotate: expandedMobileMenu === item.key ? 90 : 0,
                          }}
                          className="text-[#F5BB00] text-2xl transition-transform"
                        >
                          →
                        </motion.span>
                      </button>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedMobileMenu === item.key && item.hasSubmenu && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {/* Dynamische Submenu Items */}
                            <div className="grid grid-cols-1 gap-3">
                              {item.submenu.map((subItem, subIndex) => (
                                <motion.div
                                  key={subIndex}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    delay: subIndex * 0.1,
                                    duration: 0.3,
                                  }}
                                  className="bg-gray-100 rounded-lg p-3 flex items-center space-x-3 cursor-pointer hover:bg-[#F5BB00] hover:text-black transition-colors"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false); // Schließe das mobile Menü

                                    if (
                                      subItem.title === "AUTOFÜHRERSCHEIN" ||
                                      subItem.title === "CAR LICENSE" ||
                                      subItem.title === "رخصة السيارة"
                                    ) {
                                      navigate("/auto-fuehrerschein"); // Navigiere zu /auto-fuehrerschein
                                    } else if (
                                      subItem.title === "AUTO-ANHÄNGER" ||
                                      subItem.title === "CAR TRAILER" ||
                                      subItem.title === "سيارة مع مقطورة"
                                    ) {
                                      navigate("/auto-anhaenger"); // Navigiere zu /auto-anhaenger
                                    } else if (
                                      subItem.title ===
                                        "MOTORRADFÜHRERSCHEIN" ||
                                      subItem.title === "MOTORCYCLE LICENSE" ||
                                      subItem.title === "رخصة الدراجة النارية"
                                    ) {
                                      navigate("/motorrad-fuehrerschein"); // Navigiere zu /motorrad-fuehrerschein
                                    } else if (
                                      subItem.title === "Theoriekurs" ||
                                      subItem.title === "Theory Course" ||
                                      subItem.title === "دورة نظرية"
                                    ) {
                                      navigate("/theoriekurs"); // Navigiere zu /theoriekurs
                                    } else if (
                                      subItem.title === "Intensivkurse" ||
                                      subItem.title === "Intensive Courses" ||
                                      subItem.title === "دورات مكثفة"
                                    ) {
                                      navigate("/intensivkurse"); // Navigiere zu /intensivkurse
                                    } else if (
                                      subItem.title === "Preise" ||
                                      subItem.title === "Prices" ||
                                      subItem.title === "الأسعار"
                                    ) {
                                      navigate("/preise"); // Navigiere zu /preise
                                    } else if (
                                      subItem.title === "Punkte Abbauen" ||
                                      subItem.title === "Reduce Points" ||
                                      subItem.title === "تقليل النقاط"
                                    ) {
                                      navigate("/punkte-abbauen"); // Navigiere zu /punkte-abbauen
                                    } else {
                                      navigate(subItem.path); // Fallback: Navigiere zur Standard-Route
                                    }
                                  }}
                                >
                                  {subItem.icon && (
                                    <div className="text-xl text-black flex-shrink-0">
                                      {subItem.icon}
                                    </div>
                                  )}
                                  <div className="flex-1">
                                    <h4 className="font-bold text-black text-sm">
                                      {subItem.title}
                                    </h4>
                                    <p className="text-gray-600 text-xs">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
                {/* Footer */}
                <div className="p-6 space-y-6 bg-white">
                  {/* Filiale */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center"
                  >
                    <div className="text-gray-500 text-sm font-medium">
                      DEINE FILIALE
                    </div>
                    <div className="text-[#F5BB00] text-2xl font-bold">
                      Lüneburg
                    </div>
                  </motion.div>

                  {/* Language */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex justify-center"
                  >
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="bg-gray-100 border border-gray-300 rounded-xl px-6 py-3 font-medium text-lg min-w-[200px] text-center"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
