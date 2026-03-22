import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom"; // Importiere useNavigate

const footerContent = {
  DE: {
    callToAction: "MELDE DICH JETZT ZUM FÜHRERSCHEIN AN.",
    callToAction2: "JETZT ANMELDEN",

    companyInfo: {
      name: "Scool Drive",
      location: "Fahrschule Lüneburg",
      description:
        "Kannst Du Auto? Der Führerschein - Das Ticket in eine neue Welt - Scool Drive Fahrschulen - Die Fahrschule Nr.1 - Garantierte Mobilität & keine Fahrstunde zu viel!",
    },
    sections: {
      license: {
        title: "FÜHRERSCHEIN MACHEN",
        links: ["Autoführerschein", "Auto-Anhänger", "Motorradführerschein"],
      },

      others: {
        title: "SONSTIGES",
        links: ["Unsere Termine"],
      },
    },
    social: "SOCIAL",
    bottom: {
      copyright: "© 2025 Scool Drive Fahrschule Lüneburg GbR",
      links: ["Impressum", "Datenschutz", "AGB"],
      notice: '„https://Scool Drive-in" in neuem Tab öffnen',
    },
  },
  EN: {
    callToAction: "SIGN UP FOR YOUR DRIVER'S LICENSE NOW.",
    callToAction2: "SIGN UP NOW",

    companyInfo: {
      name: "Scool Drive",
      location: "Driving School Lüneburg",
      description:
        "Can you drive? The driver's license - The ticket to a new world - Scool Drive Driving Schools - The No.1 Driving School - Guaranteed mobility & no unnecessary driving lessons!",
    },
    sections: {
      license: {
        title: "GET YOUR DRIVER'S LICENSE",
        links: ["Car License", "Car Trailer", "Motorcycle License"],
      },
      others: {
        title: "OTHERS",
        links: ["Our Appointments"],
      },
    },
    social: "SOCIAL",
    bottom: {
      copyright: "© 2025 Scool Drive Driving School Lüneburg GbR",
      links: ["Imprint", "Privacy Policy", "Terms and Conditions"],
      notice: '„https://Scool Drive-in" open in a new tab',
    },
  },
  AR: {
    callToAction: "سجل للحصول على رخصة القيادة الآن.",
    callToAction2: "سجل الآن.",
    companyInfo: {
      name: "Scool Drive",
      location: "مدرسة القيادة لونيبورغ",
      description:
        "هل يمكنك القيادة؟ رخصة القيادة - التذكرة إلى عالم جديد - مدارس القيادة Scool Drive - مدرسة القيادة رقم 1 - التنقل المضمون وعدم وجود دروس قيادة غير ضرورية!",
    },
    sections: {
      license: {
        title: "احصل على رخصة القيادة الخاصة بك",
        links: ["رخصة السيارة", "مقطورة السيارة", "رخصة الدراجة النارية"],
      },

      others: {
        title: "أخرى",
        links: ["مواعيدنا"],
      },
    },
    social: "SOCIAL",
    bottom: {
      copyright: "© 2025 Scool Drive مدرسة القيادة لونيبورغ GbR",
      links: ["الإشعار القانوني", "سياسة الخصوصية", "الشروط والأحكام"],
      notice: '„https://Scool Drive-in" افتح في علامة تبويب جديدة',
    },
  },
};

const Footer = () => {
  const { selectedLanguage } = useLanguage();
  const lang = footerContent[selectedLanguage] || footerContent.DE;
  const navigate = useNavigate(); // Initialisiere useNavigate
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

  return (
    <footer className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Call to Action Section */}
        <div className="bg-white rounded-3xl p-8 mb-12 flex items-center justify-between">
          <div>
            <h2
              className={`text-4xl ${
                isMobile ? "text-[1rem]" : "text-4xl"
              } font-bold text-black italic mb-2`}
            >
              {lang.callToAction}
            </h2>
          </div>
          <div>
            <button
              className={`bg-[#F5BB00] hover:bg-[#e5a800]  ${
                isMobile ? "text-[0.8rem]" : "text-black"
              } font-bold ${isMobile ? "py-2" : "py-3"} ${
                isMobile ? "px-2" : "px-8"
              } rounded-full transition-all duration-200 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer cursor-pointer`}
              onClick={() => navigate("/anmelden")}
            >
              {lang.callToAction2}
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="bg-black text-white px-4 py-2 rounded font-bold text-lg mb-4">
                {lang.companyInfo.name}
              </div>
              <div className="text-sm text-black bg-[#F5BB00] px-2 py-1 rounded font-semibold">
                {lang.companyInfo.location}
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {lang.companyInfo.description}
            </p>
          </div>

          {/* Sections */}
          {Object.entries(lang.sections).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-bold text-black text-lg mb-4 italic">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        if (
                          link === "Autoführerschein" ||
                          link === "Car License" ||
                          link === "رخصة السيارة"
                        ) {
                          navigate("/auto-fuehrerschein");
                        } else if (
                          link === "Auto-Anhänger" ||
                          link === "Car Trailer" ||
                          link === "مقطورة السيارة"
                        ) {
                          navigate("/auto-anhaenger");
                        } else if (
                          link === "Motorradführerschein" ||
                          link === "Motorcycle License" ||
                          link === "رخصة الدراجة النارية"
                        ) {
                          navigate("/motorrad-fuehrerschein");
                        } else if (
                          link === "Unsere Termine" ||
                          link === "Our Appointments" ||
                          link === "مواعيدنا"
                        ) {
                          navigate("/theoriekurs");
                        }
                      }}
                      className="hover:text-[#F5BB00] transition-colors duration-200 cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-600 text-sm">{lang.bottom.copyright}</div>

            {/* Links */}
            <div className="flex flex-wrap space-x-6 text-sm text-gray-600">
              {lang.bottom.links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (
                      link === "Impressum" ||
                      link === "Imprint" ||
                      link === "الإشعار القانوني"
                    ) {
                      navigate("/impressum");
                    } else if (
                      link === "Datenschutz" ||
                      link === "Privacy Policy" ||
                      link === "سياسة الخصوصية"
                    ) {
                      navigate("/datenschutz");
                    } else if (
                      link === "AGB" ||
                      link === "Terms and Conditions" ||
                      link === "الشروط والأحكام"
                    ) {
                      navigate("/agb");
                    } else if (
                      link === "Cookie-Einstellungen" ||
                      link === "Cookie Settings" ||
                      link === "إعدادات ملفات تعريف الارتباط"
                    ) {
                      navigate("/cookie-settings");
                    }
                  }}
                  className="hover:text-[#F5BB00] transition-colors duration-200 cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* URL Notice */}
          <div className="mt-4 text-xs text-gray-500">
            <button
              onClick={() =>
                window.open("https://fahrschule-lg.scooldrive.com", "_blank")
              }
              className="hover:text-[#F5BB00] transition-colors duration-200 cursor-pointer"
            >
              {lang.bottom.notice}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
