import React from "react";
import {
  FaCar,
  FaCalendarAlt,
  FaClipboardCheck,
  FaCogs,
  FaWrench,
} from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const factsContent = {
  DE: [
    {
      icon: <FaCar className="text-4xl text-[#F5BB00]" />,
      title: "Fahrstunden",
      content: "Individuell",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#F5BB00]" />,
      title: "Mindestalter",
      content: "18 Jahre & 17 (mit Begleitung)",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#F5BB00]" />,
      title: "Prüfungsform",
      content: "Theorie und Praxis",
    },
    {
      icon: <FaCogs className="text-4xl text-[#F5BB00]" />,
      title: "Enthaltene Klassen",
      content: "Klasse BE (Auto mit Anhänger bis 3,5t)",
    },
    {
      icon: <FaWrench className="text-4xl text-[#F5BB00]" />,
      title: "Getriebe",
      content: "Automatik & Schaltgetriebe",
    },
  ],
  EN: [
    {
      icon: <FaCar className="text-4xl text-[#F5BB00]" />,
      title: "Driving Lessons",
      content: "Individual",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#F5BB00]" />,
      title: "Minimum Age",
      content: "18 years & 17 (with accompaniment)",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#F5BB00]" />,
      title: "Exam Format",
      content: "Theory and Practice",
    },
    {
      icon: <FaCogs className="text-4xl text-[#F5BB00]" />,
      title: "Included Classes",
      content: "Class BE (Car with trailer up to 3.5t)",
    },
    {
      icon: <FaWrench className="text-4xl text-[#F5BB00]" />,
      title: "Transmission",
      content: "Automatic & Manual",
    },
  ],
  AR: [
    {
      icon: <FaCar className="text-4xl text-[#F5BB00]" />,
      title: "دروس القيادة",
      content: "فردية",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#F5BB00]" />,
      title: "الحد الأدنى للعمر",
      content: "18 عامًا و 17 (مع المرافقة)",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#F5BB00]" />,
      title: "شكل الامتحان",
      content: "نظري وعملي",
    },
    {
      icon: <FaCogs className="text-4xl text-[#F5BB00]" />,
      title: "الفئات المشمولة",
      content: "الفئة BE (سيارة مع مقطورة تصل إلى 3.5 طن)",
    },
    {
      icon: <FaWrench className="text-4xl text-[#F5BB00]" />,
      title: "ناقل الحركة",
      content: "أوتوماتيك ويدوي",
    },
  ],
};

const TrailerLicenseFacts = () => {
  const { selectedLanguage } = useLanguage(); // Hole die Sprache aus dem Kontext
  const facts = factsContent[selectedLanguage] || factsContent.DE;

  return (
    <div className="bg-gray-50 py-6 px-4 mt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          {selectedLanguage === "DE"
            ? "Anhängerführerschein Bedingungen"
            : selectedLanguage === "EN"
            ? "Trailer License Conditions"
            : "شروط رخصة القيادة للمقطورة"}
        </h1>

        <div className="overflow-x-auto py-4">
          <div className="flex gap-6 pb-4 min-w-max">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-[#F5BB00] p-4 flex flex-col items-center text-center w-64 flex-shrink-0 h-48"
              >
                <div className="mb-3">{fact.icon}</div>

                <h3 className="text-lg font-bold text-[#F5BB00] mb-2 uppercase tracking-wide">
                  {fact.title}
                </h3>

                <p className="text-lg font-bold text-black leading-relaxed">
                  {fact.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerLicenseFacts;
