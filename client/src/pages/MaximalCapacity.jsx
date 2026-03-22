import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const content = {
  DE: {
    title: "Maximale Kapazität erreicht",
    subtitle: "Es tut uns leid!",
    message:
      "Derzeit sind alle Plätze belegt. Versuchen Sie es bitte zu einem späteren Zeitpunkt erneut.",
    button: "Zurück zur Startseite",
  },
  EN: {
    title: "Maximum Capacity Reached",
    subtitle: "We're sorry!",
    message: "All spots are currently taken. Please try again at a later time.",
    button: "Back to Homepage",
  },
  AR: {
    title: "تم الوصول إلى الحد الأقصى للسعة",
    subtitle: "نأسف لذلك!",
    message: "جميع الأماكن محجوزة حالياً. يرجى المحاولة مرة أخرى في وقت لاحق.",
    button: "العودة إلى الصفحة الرئيسية",
  },
};

const MaximalCapacity = () => {
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();
  const lang = content[selectedLanguage] || content.DE;

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-[#F5BB00] rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">{lang.title}</h1>
            <p className="text-xl text-[#F5BB00] font-semibold">
              {lang.subtitle}
            </p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            {lang.message}
          </p>

          <button
            onClick={handleBackHome}
            className="w-full bg-[#F5BB00] hover:bg-[#F5BB00]/90 text-black font-semibold py-4 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            {lang.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaximalCapacity;
