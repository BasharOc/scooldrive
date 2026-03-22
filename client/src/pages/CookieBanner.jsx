import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCookie,
  FaTimes,
  FaCog,
  FaCheck,
  FaTimes as FaX,
  FaGlobe,
} from "react-icons/fa";
import { loadGAScript } from "../helpers/loadGAScript";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const content = {
  DE: {
    title: "Cookie-Einstellungen",
    description:
      "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige sind notwendig für die Funktionalität, andere helfen uns, die Website zu verbessern und Ihnen relevante Inhalte zu zeigen.",
    buttons: {
      acceptAll: "Alle akzeptieren",
      onlyNecessary: "Nur notwendige",
      settings: "Einstellungen",
      saveSettings: "Einstellungen speichern",
      backToSimple: "← Zurück zur einfachen Ansicht",
    },
    detailsDescription: "Wählen Sie, welche Cookies Sie akzeptieren möchten:",
    cookies: {
      necessary: {
        title: "Notwendige Cookies",
        badge: "Erforderlich",
        description:
          "Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.",
        examples:
          "Beispiele: Session-Management, Sicherheit, grundlegende Funktionen",
      },
      analytics: {
        title: "Analyse & Performance",
        description:
          "Helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics).",
        examples:
          "Beispiele: Seitenaufrufe, Verweildauer, anonyme Nutzerstatistiken",
      },
      marketing: {
        title: "Marketing & Werbung",
        description:
          "Werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte zu zeigen.",
        examples:
          "Beispiele: Retargeting, personalisierte Werbung, Social Media Integration",
      },
    },
    footer: "Weitere Informationen finden Sie in unserer",
    privacyLink: "Datenschutzerklärung",
  },
  EN: {
    title: "Cookie Settings",
    description:
      "We use cookies to provide you with the best possible experience on our website. Some are necessary for functionality, others help us improve the website and show you relevant content.",
    buttons: {
      acceptAll: "Accept All",
      onlyNecessary: "Only Necessary",
      settings: "Settings",
      saveSettings: "Save Settings",
      backToSimple: "← Back to simple view",
    },
    detailsDescription: "Choose which cookies you want to accept:",
    cookies: {
      necessary: {
        title: "Necessary Cookies",
        badge: "Required",
        description:
          "These cookies are required for the basic functions of the website and cannot be disabled.",
        examples: "Examples: Session management, security, basic functions",
      },
      analytics: {
        title: "Analytics & Performance",
        description:
          "Help us understand how visitors interact with the website (Google Analytics).",
        examples: "Examples: Page views, time spent, anonymous user statistics",
      },
      marketing: {
        title: "Marketing & Advertising",
        description:
          "Used to show you relevant advertising and personalized content.",
        examples:
          "Examples: Retargeting, personalized advertising, social media integration",
      },
    },
    footer: "More information can be found in our",
    privacyLink: "Privacy Policy",
  },
  AR: {
    title: "إعدادات ملفات تعريف الارتباط",
    description:
      "نستخدم ملفات تعريف الارتباط لنقدم لك أفضل تجربة ممكنة على موقعنا الإلكتروني. بعضها ضروري للوظائف، والبعض الآخر يساعدنا على تحسين الموقع وعرض محتوى ذي صلة لك.",
    buttons: {
      acceptAll: "قبول الكل",
      onlyNecessary: "الضرورية فقط",
      settings: "الإعدادات",
      saveSettings: "حفظ الإعدادات",
      backToSimple: "← العودة إلى العرض البسيط",
    },
    detailsDescription: "اختر ملفات تعريف الارتباط التي تريد قبولها:",
    cookies: {
      necessary: {
        title: "ملفات تعريف الارتباط الضرورية",
        badge: "مطلوبة",
        description:
          "هذه الملفات مطلوبة للوظائف الأساسية للموقع ولا يمكن إلغاؤها.",
        examples: "أمثلة: إدارة الجلسة، الأمان، الوظائف الأساسية",
      },
      analytics: {
        title: "التحليلات والأداء",
        description:
          "تساعدنا على فهم كيفية تفاعل الزوار مع الموقع (Google Analytics).",
        examples:
          "أمثلة: مشاهدات الصفحة، الوقت المقضي، إحصائيات المستخدمين المجهولة",
      },
      marketing: {
        title: "التسويق والإعلان",
        description: "تُستخدم لعرض إعلانات ذات صلة ومحتوى مخصص لك.",
        examples:
          "أمثلة: إعادة الاستهداف، الإعلانات المخصصة، تكامل وسائل التواصل الاجتماعي",
      },
    },
    footer: "يمكن العثور على مزيد من المعلومات في",
    privacyLink: "سياسة الخصوصية",
  },
};

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("DE");
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Immer true, da erforderlich
    analytics: false,
    marketing: false,
  });

  const langContent = content[currentLanguage];

  useEffect(() => {
    // Prüft beim Laden, ob schon Zustimmung gespeichert ist
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  // Scroll-Handling mit Event Listeners
  useEffect(() => {
    // Scroll-Handler
    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    if (showBanner && !showDetails) {
      // Scrollen verbieten
      document.body.style.overflow = "hidden";
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("keydown", (e) => {
        // Verhindere Scroll-Tasten (Pfeiltasten, Page Up/Down, etc.)
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
          e.preventDefault();
        }
      });
    } else {
      // Scrollen wieder erlauben
      document.body.style.overflow = "unset";
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    }

    // Cleanup beim Component unmount
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [showBanner, showDetails]);

  const handleAcceptAll = () => {
    const settings = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("cookieConsent", JSON.stringify(settings));
    loadGAScript(GA_MEASUREMENT_ID);
    setShowBanner(false);
    document.body.style.overflow = "unset";
  };

  const handleRejectAll = () => {
    const settings = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("cookieConsent", JSON.stringify(settings));
    setShowBanner(false);
    document.body.style.overflow = "unset";
  };

  const handleSaveSettings = () => {
    const settings = {
      ...cookieSettings,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("cookieConsent", JSON.stringify(settings));
    setShowBanner(false);
    if (cookieSettings.analytics) {
      loadGAScript(GA_MEASUREMENT_ID);
    }
    document.body.style.overflow = "unset";
  };

  const toggleSetting = (setting) => {
    if (setting === "necessary") return; // Notwendige Cookies können nicht deaktiviert werden

    setCookieSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            dir={currentLanguage === "AR" ? "rtl" : "ltr"}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                <FaCookie className="text-[#F5BB00] text-2xl" />
                <h2 className="text-2xl font-bold text-black">
                  {langContent.title}
                </h2>
              </div>

              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-gray-500" />
                <div className="flex bg-gray-100 rounded-lg p-1">
                  {["DE", "EN", "AR"].map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        currentLanguage === lang
                          ? "bg-[#F5BB00] text-black"
                          : "text-gray-600 hover:text-black"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {lang}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {!showDetails ? (
                // Einfache Ansicht
                <div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {langContent.description}
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    {/* Alle akzeptieren */}
                    <motion.button
                      className="bg-[#F5BB00] text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors flex items-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAcceptAll}
                    >
                      <FaCheck />
                      <span>{langContent.buttons.acceptAll}</span>
                    </motion.button>

                    {/* Nur notwendige */}
                    <motion.button
                      className="bg-gray-200 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 transition-colors flex items-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleRejectAll}
                    >
                      <FaX />
                      <span>{langContent.buttons.onlyNecessary}</span>
                    </motion.button>

                    {/* Einstellungen */}
                    <motion.button
                      className="border-2 border-[#F5BB00] text-[#F5BB00] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#F5BB00] hover:text-black transition-colors flex items-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowDetails(true)}
                    >
                      <FaCog />
                      <span>{langContent.buttons.settings}</span>
                    </motion.button>
                  </div>
                </div>
              ) : (
                // Detaillierte Einstellungen
                <div>
                  <div className="mb-6">
                    <button
                      onClick={() => setShowDetails(false)}
                      className="text-[#F5BB00] hover:text-yellow-600 font-medium mb-4"
                    >
                      {langContent.buttons.backToSimple}
                    </button>
                    <p className="text-gray-700 mb-4">
                      {langContent.detailsDescription}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {/* Notwendige Cookies */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-black">
                          {langContent.cookies.necessary.title}
                        </h3>
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {langContent.cookies.necessary.badge}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {langContent.cookies.necessary.description}
                      </p>
                      <div className="text-xs text-gray-500">
                        {langContent.cookies.necessary.examples}
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-black">
                          {langContent.cookies.analytics.title}
                        </h3>
                        <motion.button
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            cookieSettings.analytics
                              ? "bg-[#F5BB00]"
                              : "bg-gray-300"
                          }`}
                          onClick={() => toggleSetting("analytics")}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform"
                            animate={{
                              x: cookieSettings.analytics ? 24 : 2,
                            }}
                          />
                        </motion.button>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {langContent.cookies.analytics.description}
                      </p>
                      <div className="text-xs text-gray-500">
                        {langContent.cookies.analytics.examples}
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-black">
                          {langContent.cookies.marketing.title}
                        </h3>
                        <motion.button
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            cookieSettings.marketing
                              ? "bg-[#F5BB00]"
                              : "bg-gray-300"
                          }`}
                          onClick={() => toggleSetting("marketing")}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform"
                            animate={{
                              x: cookieSettings.marketing ? 24 : 2,
                            }}
                          />
                        </motion.button>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {langContent.cookies.marketing.description}
                      </p>
                      <div className="text-xs text-gray-500">
                        {langContent.cookies.marketing.examples}
                      </div>
                    </div>
                  </div>

                  {/* Buttons für detaillierte Ansicht */}
                  <div className="flex flex-wrap gap-4 justify-center">
                    <motion.button
                      className="bg-[#F5BB00] text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSaveSettings}
                    >
                      {langContent.buttons.saveSettings}
                    </motion.button>

                    <motion.button
                      className="bg-gray-200 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleRejectAll}
                    >
                      {langContent.buttons.onlyNecessary}
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="mt-6 pt-4 border-t text-center">
                <p className="text-sm text-gray-500">
                  {langContent.footer}{" "}
                  <a
                    href="/datenschutz"
                    className="text-[#F5BB00] hover:underline"
                  >
                    {langContent.privacyLink}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
