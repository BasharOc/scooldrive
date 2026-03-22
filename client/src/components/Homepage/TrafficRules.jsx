import React, { useRef, useEffect, useState } from "react";
import "./TrafficRules.css";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  FaAward,
  FaFire,
  FaExchangeAlt,
  FaClock,
  FaEye,
  FaCheckCircle,
  FaSmile,
} from "react-icons/fa";

const trafficRulesContent = {
  DE: {
    header: "UNSERE EIGENEN VERKEHRSREGELN.",
    subtitle: "Hierauf kannst du dich verlassen:",
    badgeText: "Ausbildung\nmit Bester\nQualität",
    rules: [
      { id: 1, label: "PRÜFUNGS GARANTIE", icon: "trophy", accent: true },
      { id: 2, label: "WARM-UP GARANTIE", icon: "cone", accent: true },
      { id: 3, label: "WECHSEL GARANTIE", icon: "circle", accent: true },
      { id: 4, label: "45-MINUTEN GARANTIE", icon: "timer", accent: false },
      { id: 5, label: "DURCHBLICK GARANTIE", icon: "eye", accent: true },
      {
        id: 6,
        label: "KEINE-STUNDE-ZU-VIEL GARANTIE",
        icon: "bars",
        accent: true,
      },
      { id: 7, label: "KENNENLERN GARANTIE", icon: "smile", accent: false },
    ],
  },
  EN: {
    header: "OUR OWN TRAFFIC RULES.",
    subtitle: "You can rely on this:",
    badgeText: "Training\nwith Best\nQuality",
    rules: [
      { id: 1, label: "EXAM GUARANTEE", icon: "trophy", accent: true },
      { id: 2, label: "WARM-UP GUARANTEE", icon: "cone", accent: true },
      { id: 3, label: "SWITCH GUARANTEE", icon: "circle", accent: true },
      { id: 4, label: "45-MINUTE GUARANTEE", icon: "timer", accent: false },
      { id: 5, label: "CLARITY GUARANTEE", icon: "eye", accent: true },
      { id: 6, label: "NO-EXTRA-HOUR GUARANTEE", icon: "bars", accent: true },
      { id: 7, label: "INTRODUCTION GUARANTEE", icon: "smile", accent: false },
    ],
  },
  AR: {
    header: "قواعد المرور الخاصة بنا.",
    subtitle: "يمكنك الاعتماد على هذا:",
    badgeText: "تدريب\nبأفضل\nجودة",
    rules: [
      { id: 1, label: "ضمان الامتحان", icon: "trophy", accent: true },
      { id: 2, label: "ضمان الإحماء", icon: "cone", accent: true },
      { id: 3, label: "ضمان التبديل", icon: "circle", accent: true },
      { id: 4, label: "ضمان 45 دقيقة", icon: "timer", accent: false },
      { id: 5, label: "ضمان الوضوح", icon: "eye", accent: true },
      {
        id: 6,
        label: "ضمان عدم وجود ساعات إضافية",
        icon: "bars",
        accent: true,
      },
      { id: 7, label: "ضمان التعارف", icon: "smile", accent: false },
    ],
  },
};

const TrafficRules = () => {
  const scrollRef = useRef(null);
  const { selectedLanguage } = useLanguage();
  const lang = trafficRulesContent[selectedLanguage] || trafficRulesContent.DE;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initialisiere isMobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Aktualisiere isMobile bei Fenstergröße
    };

    window.addEventListener("resize", handleResize); // Event-Listener für Fenstergröße
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.3; // Geschwindigkeit halbiert (Pixel pro Frame)
    const itemWidth = 250; // Annahme: Breite eines Items inkl. Margin
    const totalWidth = lang.rules.length * itemWidth;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Wenn wir das Ende erreicht haben, springen wir zum Anfang zurück
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [lang.rules.length]);

  const renderIcon = (iconType) => {
    const iconStyle = { color: "#F5BB00" }; // Gelbe Farbe

    switch (iconType) {
      case "trophy":
        return <FaAward className="traffic-rules__icon" style={iconStyle} />;
      case "cone":
        return <FaFire className="traffic-rules__icon" style={iconStyle} />;
      case "circle":
        return (
          <FaExchangeAlt className="traffic-rules__icon" style={iconStyle} />
        );
      case "timer":
        return <FaClock className="traffic-rules__icon" style={iconStyle} />;
      case "eye":
        return <FaEye className="traffic-rules__icon" style={iconStyle} />;
      case "bars":
        return (
          <FaCheckCircle className="traffic-rules__icon" style={iconStyle} />
        );
      case "smile":
        return <FaSmile className="traffic-rules__icon" style={iconStyle} />;
      default:
        return null;
    }
  };

  // Erstelle duplizierte Items für nahtlosen Loop
  const duplicatedRules = [...lang.rules, ...lang.rules];

  return (
    <div className="traffic-rules">
      <div
        className="traffic-rules__outer-container"
        style={{ position: "relative" }}
      >
        <div
          className={`traffic-rules__badge ${
            isMobile
              ? "traffic-rules__badge-mobile"
              : "traffic-rules__badge-desktop"
          }`}
          style={{
            position: "absolute",
            top: "20px",
            zIndex: 10,
          }}
        >
          <div className="traffic-rules__badge-text">
            {lang.badgeText.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="traffic-rules__container">
          <div className="traffic-rules__card">
            <div className="traffic-rules__header">
              <h2 className="traffic-rules__title">{lang.header}</h2>
              <p className="traffic-rules__subtitle">{lang.subtitle}</p>
            </div>

            <div className="traffic-rules__carousel">
              <div
                ref={scrollRef}
                className="traffic-rules__scroll-container"
                style={{
                  overflow: "hidden",
                  scrollBehavior: "unset", // Verhindert smooth scrolling für nahtlose Animation
                }}
              >
                <div
                  className="traffic-rules__items-wrapper"
                  style={{
                    display: "flex",
                    width: "max-content",
                  }}
                >
                  {duplicatedRules.map((rule, index) => (
                    <div
                      key={`${rule.id}-${index}`}
                      className="traffic-rules__item"
                    >
                      {renderIcon(rule.icon, rule.accent)}
                      <div
                        className={`traffic-rules__label${
                          rule.accent ? " traffic-rules__label--accent" : ""
                        }`}
                      >
                        {rule.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficRules;
