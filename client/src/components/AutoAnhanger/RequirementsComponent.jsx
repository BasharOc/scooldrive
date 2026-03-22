import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiUser, FiCreditCard, FiShield, FiEye } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

const requirementsContent = {
  DE: [
    {
      icon: <FiUser className="w-6 h-6" />,
      title: "Biometrisches Passfoto",
      description: "Aktuelles biometrisches Foto nach EU-Standards",
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "Führerschein Klasse B",
      description: "Gültiger Führerschein der entsprechenden Klasse",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Erste-Hilfe-Kurs",
      description: "Bescheinigung über absolvierte Erste-Hilfe-Ausbildung",
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "Anerkannter, amtlicher Ausweis",
      description: "(z.B. Personalausweis, Reisepass)",
    },
    {
      icon: <FiEye className="w-6 h-6" />,
      title: "Sehtest-Bescheinigung",
      description: "(nicht älter als zwei Jahre)",
    },
  ],
  EN: [
    {
      icon: <FiUser className="w-6 h-6" />,
      title: "Biometric Passport Photo",
      description: "Current biometric photo according to EU standards",
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "Class B Driver's License",
      description: "Valid driver's license of the corresponding class",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "First Aid Course",
      description: "Certificate of completed first aid training",
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "Recognized Official ID",
      description: "(e.g., ID card, passport)",
    },
    {
      icon: <FiEye className="w-6 h-6" />,
      title: "Vision Test Certificate",
      description: "(not older than two years)",
    },
  ],
  AR: [
    {
      icon: <FiUser className="w-6 h-6" />,
      title: "صورة جواز سفر بيومترية",
      description: "صورة بيومترية حديثة وفقًا لمعايير الاتحاد الأوروبي",
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "رخصة قيادة الفئة B",
      description: "رخصة قيادة سارية للفئة المقابلة",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "دورة الإسعافات الأولية",
      description: "شهادة إتمام تدريب الإسعافات الأولية",
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "هوية رسمية معترف بها",
      description: "(مثل بطاقة الهوية، جواز السفر)",
    },
    {
      icon: <FiEye className="w-6 h-6" />,
      title: "شهادة اختبار النظر",
      description: "(لا تزيد عن عامين)",
    },
  ],
};

const RequirementsComponent = () => {
  const { selectedLanguage } = useLanguage(); // Hole die Sprache aus dem Kontext
  const [checkedItems, setCheckedItems] = React.useState(new Set());
  const requirements =
    requirementsContent[selectedLanguage] || requirementsContent.DE;

  const toggleCheck = (index) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(index)) {
      newCheckedItems.delete(index);
    } else {
      newCheckedItems.add(index);
    }
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-black mb-2">
            {selectedLanguage === "DE"
              ? "Du brauchst"
              : selectedLanguage === "EN"
              ? "You need"
              : "أنت بحاجة إلى"}
          </h2>
          <div className="w-16 h-1 bg-[#F5BB00] mx-auto rounded-full"></div>
        </motion.div>

        <div
          className="flex pt-[10px] h-[300px] overflow-x-auto gap-6 pb-4 px-4 justify-center"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#F5BB00 #f1f1f1" }}
        >
          {requirements.map((req, index) => {
            const isChecked = checkedItems.has(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer flex-shrink-0"
                onClick={() => toggleCheck(index)}
              >
                <div
                  className={`w-[230px] h-[200px] rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:z-10 relative ${
                    isChecked
                      ? "bg-gray-800 border-[#F5BB00] shadow-2xl"
                      : "bg-gradient-to-br from-gray-50 to-gray-100 border-transparent hover:border-[#F5BB00] hover:shadow-lg"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isChecked
                          ? "bg-[#F5BB00] text-black"
                          : "bg-[#F5BB00] text-black group-hover:scale-110"
                      }`}
                    >
                      {req.icon}
                    </div>

                    <h3
                      className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                        isChecked
                          ? "text-[#F5BB00]"
                          : "text-black group-hover:text-[#F5BB00]"
                      }`}
                    >
                      {req.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        isChecked ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {req.description}
                    </p>
                  </div>

                  {/* Check mark overlay */}
                  {isChecked && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4"
                    >
                      <div className="w-8 h-8 bg-[#F5BB00] rounded-full flex items-center justify-center">
                        <FiCheck className="w-5 h-5 text-black" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 h-2 bg-gradient-to-r from-[#F5BB00] via-[#F5BB00] to-transparent rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default RequirementsComponent;
