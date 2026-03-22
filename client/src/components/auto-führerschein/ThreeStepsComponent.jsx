import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

const stepsContent = {
  DE: [
    {
      number: "1",
      title: "WUNSCHFÜHRERSCHEIN KONFIGURIEREN",
      description:
        "Wähle deinen gewünschten Führerschein aus und konfiguriere ihn ganz nach deinen Bedürfnissen. Bestimme Tempo, Intensität und Art der Ausbildung selbst.",
    },
    {
      number: "2",
      title: "THEORIEKURS MACHEN",
      description:
        "Bei uns sind alle Theoriekurse Intensivkurse – einwöchig und für einen Top-Preis. Lerne die Theorie schnell und effizient in einer angenehmen Atmosphäre.",
    },
    {
      number: "3",
      title: "PRAXIS MACHEN",
      description:
        "Starte deine Fahrpraxis mit unseren Top-Fahrlehrern. Wähle zwischen Intensivkursen und flexiblen Trainingszeiten. Wir bieten Führerscheinklassen B, BE, A, A1 und A2 an.",
    },
  ],
  EN: [
    {
      number: "1",
      title: "CONFIGURE YOUR DESIRED LICENSE",
      description:
        "Choose your desired license and configure it according to your needs. Determine speed, intensity, and type of training yourself.",
    },
    {
      number: "2",
      title: "COMPLETE THE THEORY COURSE",
      description:
        "All our theory courses are intensive courses – one week long and offered at a top price. Learn theory quickly and efficiently in a comfortable environment.",
    },
    {
      number: "3",
      title: "START PRACTICAL TRAINING",
      description:
        "Begin your practical training with our top instructors. Choose between intensive courses and flexible schedules. We offer license classes B, BE, A, A1, and A2.",
    },
  ],
  AR: [
    {
      number: "1",
      title: "تكوين رخصة القيادة المطلوبة",
      description:
        "اختر رخصة القيادة المطلوبة وقم بتكوينها وفقًا لاحتياجاتك. حدد السرعة، الكثافة، ونوع التدريب بنفسك.",
    },
    {
      number: "2",
      title: "أكمل دورة النظرية",
      description:
        "جميع دورات النظرية لدينا هي دورات مكثفة – تستغرق أسبوعًا واحدًا وتُقدم بسعر ممتاز. تعلم النظرية بسرعة وكفاءة في بيئة مريحة.",
    },
    {
      number: "3",
      title: "ابدأ التدريب العملي",
      description:
        "ابدأ التدريب العملي الخاص بك مع أفضل المدربين لدينا. اختر بين الدورات المكثفة والجداول الزمنية المرنة. نحن نقدم فئات رخص القيادة B، BE، A، A1، و A2.",
    },
  ],
};

const StepCard = ({ number, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="relative bg-gray-50 rounded-2xl p-8 flex-1 min-w-0"
    >
      <div className="text-6xl font-bold text-[#F5BB00] mb-6">{number}</div>

      <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">
        {title}
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

      <div className="flex items-center text-[#F5BB00] font-medium">
        <span className="mr-2">
          {title === "WUNSCHFÜHRERSCHEIN KONFIGURIEREN"
            ? "Mehr erfahren"
            : "اعرف المزيد"}
        </span>
        <FiArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

const ThreeStepsComponent = () => {
  const { selectedLanguage } = useLanguage(); // Hole die Sprache aus dem Kontext
  const steps = stepsContent[selectedLanguage] || stepsContent.DE;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          {selectedLanguage === "DE"
            ? "DREI KLEINE SCHRITTE FÜR DICH — EIN GROSSER IN DEINE UNABHÄNGIGKEIT."
            : selectedLanguage === "EN"
            ? "THREE SMALL STEPS FOR YOU — ONE BIG STEP INTO YOUR INDEPENDENCE."
            : "ثلاث خطوات صغيرة لك — خطوة كبيرة نحو استقلالك."}
        </h1>
      </motion.div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {steps.map((step, index) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeStepsComponent;
