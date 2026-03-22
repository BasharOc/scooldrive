import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const content = {
  DE: {
    title: "FREIHEIT HAT EINEN\nNEUEN NAMEN.",
    paragraphs: [
      "Kennst du das Gefühl, wenn der Motor anspringt und dein Herz vor Aufregung zu rasen beginnt? Wenn der Wind dein Gesicht streichelt und die Straße endlos vor dir liegt? Das ist mehr als nur Fahren – das ist pure Leidenschaft auf zwei Rädern.",
      "Bei Scooldrive verstehen wir diese Sehnsucht nach Abenteuer. Wir bringen dir nicht nur das Fahren bei, sondern öffnen dir die Tür zu einer Welt voller Möglichkeiten. Vom ersten Gasgeben bis zur perfekten Kurventechnik – gemeinsam machen wir aus deinem Traum Realität.",
      "Bereit für das Abenteuer deines Lebens? Dann lass uns gemeinsam durchstarten und die Straße erobern!",
    ],
  },
  EN: {
    title: "FREEDOM HAS A\nNEW NAME.",
    paragraphs: [
      "Do you know the feeling when the engine starts and your heart begins to race with excitement? When the wind brushes your face and the road stretches endlessly ahead? This is more than just riding – it's pure passion on two wheels.",
      "At Scool Drive, we understand this longing for adventure. We not only teach you how to ride but open the door to a world full of possibilities. From the first throttle twist to perfect cornering technique – together, we turn your dream into reality.",
      "Ready for the adventure of your life? Then let's start together and conquer the road!",
    ],
  },
  AR: {
    title: "الحرية لها\nاسم جديد.",
    paragraphs: [
      "هل تعرف الشعور عندما يبدأ المحرك ويبدأ قلبك في الخفقان من الإثارة؟ عندما يلامس الرياح وجهك والطريق يمتد بلا نهاية أمامك؟ هذا أكثر من مجرد قيادة – إنها شغف خالص على عجلتين.",
      "في Scool Drive نفهم هذا الشوق للمغامرة. نحن لا نعلمك القيادة فقط، بل نفتح لك الباب لعالم مليء بالإمكانيات. من أول ضغط على دواسة الوقود إلى تقنية الزوايا المثالية – معًا نحول حلمك إلى حقيقة.",
      "هل أنت مستعد لمغامرة حياتك؟ إذن دعنا نبدأ معًا ونغزو الطريق!",
    ],
  },
};

const MotorradInformation = () => {
  const { selectedLanguage } = useLanguage(); // Hole die Sprache aus dem Kontext
  const langContent = content[selectedLanguage] || content.DE;

  return (
    <motion.div
      className="bg-white py-16 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[77vw] mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight italic whitespace-pre-line">
              {langContent.title}
            </h1>

            <div className="text-lg text-black leading-relaxed space-y-4">
              {langContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Motorrad-Bild */}
              <img
                src="/motorcycle.jpg" // Lokaler Pfad zum Bild
                alt={
                  selectedLanguage === "DE"
                    ? "Motorradfahrer auf der Rennstrecke – Motorradführerschein Lüneburg"
                    : selectedLanguage === "EN"
                    ? "Motorcyclist on a racetrack – motorcycle license in Lüneburg"
                    : "سائق دراجة نارية على حلبة سباق – رخصة قيادة الدراجة النارية في لونيبورغ"
                }
                className="w-full h-auto object-cover rounded-lg"
              />

              {/* Overlay Effekt */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                  borderRadius: "inherit",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MotorradInformation;
