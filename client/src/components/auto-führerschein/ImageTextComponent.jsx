import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const content = {
  DE: {
    title: "Unser innovativer Ansatz",
    paragraphs: [
      "Unsere Fahrschule steht seit vielen Jahren für eine individuelle, praxisnahe und moderne Führerscheinausbildung. Wir legen großen Wert darauf, jeden Fahrschüler persönlich zu betreuen und den Lernprozess optimal auf die eigenen Bedürfnisse abzustimmen. Ob Theorieunterricht oder Fahrpraxis – bei uns profitierst du von erfahrenen Fahrlehrern, digitalen Lernmethoden und flexiblen Trainingszeiten. Wir begleiten dich zuverlässig und geduldig auf deinem Weg zum Führerschein, ganz gleich ob du Fahranfänger bist oder bereits Erfahrung hast.",
      "Moderne Fahrzeuge, innovative Unterrichtskonzepte und ein freundliches Team sorgen dafür, dass du dich bei uns wohlfühlst und sicher ans Ziel kommst. Unsere Fahrschule ist zentral gelegen und sowohl mit dem Auto als auch mit öffentlichen Verkehrsmitteln gut erreichbar. Dein Erfolg und deine Zufriedenheit stehen für uns an erster Stelle – denn ein Führerschein ist mehr als ein Stück Papier, er ist der erste Schritt in deine mobile Zukunft.",
    ],
  },
  EN: {
    title: "Our Innovative Approach",
    paragraphs: [
      "Our driving school has been known for years for its personalized, practical, and modern driving license training. We place great importance on personally supporting each student and tailoring the learning process to their individual needs. Whether it's theory lessons or driving practice – with us, you benefit from experienced instructors, digital learning methods, and flexible training schedules. We accompany you reliably and patiently on your way to obtaining your driving license, whether you're a beginner or already have experience.",
      "Modern vehicles, innovative teaching concepts, and a friendly team ensure that you feel comfortable with us and reach your goal safely. Our driving school is centrally located and easily accessible by car or public transport. Your success and satisfaction are our top priorities – because a driving license is more than just a piece of paper; it's the first step into your mobile future.",
    ],
  },
  AR: {
    title: "نهجنا المبتكر",
    paragraphs: [
      "مدرستنا لتعليم القيادة معروفة منذ سنوات بتدريبها الشخصي والعملي والحديث للحصول على رخصة القيادة. نحن نولي أهمية كبيرة لدعم كل طالب بشكل شخصي وتكييف عملية التعلم وفقًا لاحتياجاته الفردية. سواء كانت دروس نظرية أو ممارسة القيادة – معنا، تستفيد من مدربين ذوي خبرة، طرق تعلم رقمية، وجداول تدريب مرنة. نحن نرافقك بشكل موثوق وصبور في طريقك للحصول على رخصة القيادة، سواء كنت مبتدئًا أو لديك خبرة بالفعل.",
      "المركبات الحديثة، مفاهيم التدريس المبتكرة، وفريق ودود يضمن أنك تشعر بالراحة معنا وتصل إلى هدفك بأمان. تقع مدرستنا لتعليم القيادة في موقع مركزي ويمكن الوصول إليها بسهولة بالسيارة أو وسائل النقل العامة. نجاحك ورضاك هما أولويتنا القصوى – لأن رخصة القيادة أكثر من مجرد قطعة ورق؛ إنها الخطوة الأولى نحو مستقبلك المتنقل.",
    ],
  },
};

const ImageTextComponent = () => {
  const { selectedLanguage } = useLanguage(); // Hole die Sprache aus dem Kontext
  const langContent = content[selectedLanguage] || content.DE;

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section - Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              {langContent.title.split(" ")[0]}{" "}
              <span className="text-[#F5BB00]">
                {langContent.title.split(" ")[2]}
              </span>
            </h2>

            {langContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Image Section - Rechts */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/innovative-methode.jpg"
                alt={
                  selectedLanguage === "DE"
                    ? "Fahrschule Scooldrive Lüneburg – Unterrichtsraum mit Whiteboard, Monitor und Auto"
                    : selectedLanguage === "EN"
                    ? "Scooldrive Driving School Lüneburg – classroom with whiteboard, monitor and car"
                    : "مدرسة القيادة سكولدرايف لونيبورغ – قاعة دراسية مع سبورة وشاشة وسيارة"
                }
                className="w-full h-96 object-cover"
              />

              {/* Overlay mit Farbakzent */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5BB00]/20 to-transparent"></div>

              {/* Dekoratives Element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#F5BB00] rounded-full opacity-80 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
