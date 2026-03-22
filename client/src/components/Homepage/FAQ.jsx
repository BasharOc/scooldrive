import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const faqContent = {
  DE: {
    header: "DEINE FRAGE NICHT DABEI? SPRICH UNS AN.",
    questions: [
      {
        question: "WARUM IST Scool Drive DIE BESTE FAHRSCHULE FÜR MICH?",
        answer:
          "Scool Drive bietet individuelle Betreuung mit modernen Lernmethoden. Unsere erfahrenen Fahrlehrer passen sich deinem Lerntempo an und garantieren eine stressfreie Ausbildung. Mit unserem innovativen Garantie-System und flexiblen Terminen bist du bei uns in den besten Händen.",
      },
      {
        question: "WIE VIEL KOSTET DER FÜHRERSCHEIN BEI Scool Drive?",
        answer:
          "Die Kosten für den Führerschein Klasse B (PKW) betragen ungefähr 1.678€, inklusive Theoriekurs, Pflichtstunden und Grundgebühr. Kontaktiere uns für ein individuelles Angebot und eine kostenlose Beratung.",
      },
      {
        question: "WIE LANGE DAUERT ES, DEN FÜHRERSCHEIN ZU MACHEN?",
        answer:
          "Bei regelmäßiger Teilnahme dauert die Führerscheinausbildung 2-4 Monate. Mit unserem Intensivkurs schaffst du es sogar in 6-8 Wochen. Die Dauer hängt von deiner Verfügbarkeit und deinem Lernfortschritt ab.",
      },
      {
        question: "WELCHE FÜHRERSCHEINKLASSEN BIETET Scool Drive AN?",
        answer:
          "Wir bieten alle gängigen Führerscheinklassen: B (PKW), BE (PKW mit Anhänger), A1/A2/A (Motorrad), AM (Roller). Zusätzlich bieten wir Auffrischungskurse und Fahrsicherheitstrainings an.",
      },
      {
        question: "KANN ICH AUCH AUTOMATIKGETRIEBE LERNEN?",
        answer:
          "Ja, wir bieten sowohl Schaltgetriebe als auch Automatikgetriebe an. Viele unserer Fahrschüler entscheiden sich heute für Automatik, da es einfacher zu erlernen ist. Beachte jedoch, dass bei einer Automatikprüfung die Fahrerlaubnis auf Automatikfahrzeuge beschränkt ist.",
      },
      {
        question:
          "WELCHE DOKUMENTE BENÖTIGE ICH FÜR DIE ANMELDUNG ZUM FÜHRERSCHEIN?",
        answer:
          "Du benötigst: Personalausweis oder Reisepass, biometrisches Passfoto, Sehtest (nicht älter als 2 Jahre), Erste-Hilfe-Kurs-Bescheinigung, bei Minderjährigen eine Einverständniserklärung der Erziehungsberechtigten. Wir helfen dir gerne bei der Beschaffung aller Dokumente.",
      },
      {
        question: "WIE MELDE ICH MICH ZUM FÜHRERSCHEIN AN?",
        answer:
          "Die Anmeldung ist ganz einfach: Besuche uns in der Fahrschule, ruf uns an oder nutze unser Online-Anmeldeformular. Wir beraten dich kostenlos, erstellen einen individuellen Ausbildungsplan und kümmern uns um alle Formalitäten mit der Führerscheinstelle.",
      },
      {
        question: "WIE LANGE IST DER FÜHRERSCHEIN GÜLTIG?",
        answer:
          "PKW-Führerscheine (Klasse B und BE) sind 15 Jahre gültig und müssen dann verlängert werden. Motorradführerscheine sind unbefristet gültig.",
      },
    ],
  },
  EN: {
    header: "YOUR QUESTION NOT LISTED? CONTACT US.",
    questions: [
      {
        question: "WHY IS Scool Drive THE BEST DRIVING SCHOOL FOR ME?",
        answer:
          "Scool Drive offers personalized training with modern learning methods. Our experienced instructors adapt to your learning pace and guarantee stress-free education. With our innovative guarantee system and flexible appointments, you're in the best hands.",
      },
      {
        question: "HOW MUCH DOES THE DRIVER'S LICENSE COST AT Scool Drive?",
        answer:
          "The cost for a Class B (car) driver's license is approximately €1,678, including theory course, mandatory hours, and basic fee. Contact us for a personalized quote and free consultation.",
      },
      {
        question: "HOW LONG DOES IT TAKE TO GET THE DRIVER'S LICENSE?",
        answer:
          "With regular participation, driver's license training takes 2-4 months. With our intensive course, you can even complete it in 6-8 weeks. Duration depends on your availability and learning progress.",
      },
      {
        question: "WHICH DRIVER'S LICENSE CLASSES DOES Scool Drive OFFER?",
        answer:
          "We offer all common license classes: B (car), BE (car with trailer), A1/A2/A (motorcycle), AM (scooter). Additionally, we offer refresher courses and driving safety training.",
      },
      {
        question: "CAN I ALSO LEARN AUTOMATIC TRANSMISSION?",
        answer:
          "Yes, we offer both manual and automatic transmission. Many of our students choose automatic today as it's easier to learn. However, note that with an automatic test, the license is restricted to automatic vehicles.",
      },
      {
        question:
          "WHAT DOCUMENTS DO I NEED TO REGISTER FOR THE DRIVER'S LICENSE?",
        answer:
          "You need: ID card or passport, biometric passport photo, eye test (not older than 2 years), first aid course certificate, and for minors, parental consent. We're happy to help you obtain all necessary documents.",
      },
      {
        question: "HOW DO I REGISTER FOR THE DRIVER'S LICENSE?",
        answer:
          "Registration is simple: Visit us at the driving school, call us, or use our online registration form. We provide free consultation, create an individual training plan, and handle all formalities with the licensing office.",
      },
      {
        question: "HOW LONG IS THE DRIVER'S LICENSE VALID?",
        answer:
          "Car licenses (Class B and BE) are valid for 15 years and must then be renewed. Motorcycle licenses are valid indefinitely.",
      },
    ],
  },
  AR: {
    header: "سؤالك غير مدرج؟ اتصل بنا.",
    questions: [
      {
        question:
          "لماذا تعتبر Scool Drive أفضل مدرسة لتعليم القيادة بالنسبة لي؟",
        answer:
          "تقدم Scool Drive تدريبًا شخصيًا بطرق تعلم حديثة. يتكيف مدربونا ذوو الخبرة مع وتيرة التعلم الخاصة بك ويضمنون تعليمًا خاليًا من الإجهاد. مع نظام الضمان المبتكر والمواعيد المرنة، أنت في أيد أمينة.",
      },
      {
        question: "كم تكلفة رخصة القيادة في Scool Drive؟",
        answer:
          "تكلفة رخصة القيادة للفئة B (سيارة) حوالي 1678 يورو، وتشمل دورة النظرية، الساعات الإلزامية، والرسوم الأساسية. اتصل بنا للحصول على عرض أسعار مخصص واستشارة مجانية.",
      },
      {
        question: "كم من الوقت يستغرق الحصول على رخصة القيادة؟",
        answer:
          "مع المشاركة المنتظمة، يستغرق تدريب رخصة القيادة 2-4 أشهر. مع دورتنا المكثفة، يمكنك حتى إكمالها في 6-8 أسابيع. تعتمد المدة على توفرك وتقدمك في التعلم.",
      },
      {
        question: "ما هي فئات رخص القيادة التي تقدمها Scool Drive؟",
        answer:
          "نقدم جميع فئات الرخص الشائعة: B (سيارة)، BE (سيارة مع مقطورة)، A1/A2/A (دراجة نارية)، AM (سكوتر). بالإضافة إلى ذلك، نقدم دورات تنشيطية وتدريب السلامة في القيادة.",
      },
      {
        question: "هل يمكنني أيضًا تعلم ناقل الحركة الأوتوماتيكي؟",
        answer:
          "نعم، نقدم كلاً من ناقل الحركة اليدوي والأوتوماتيكي. يختار العديد من طلابنا اليوم الأوتوماتيكي لأنه أسهل في التعلم. ومع ذلك، لاحظ أنه مع اختبار أوتوماتيكي، تقتصر الرخصة على المركبات الأوتوماتيكية.",
      },
      {
        question: "ما هي الوثائق التي أحتاجها للتسجيل للحصول على رخصة القيادة؟",
        answer:
          "تحتاج إلى: بطاقة هوية أو جواز سفر، صورة جواز سفر بيومترية، فحص نظر (لا يزيد عمره عن سنتين)، شهادة دورة إسعافات أولية، وللقاصرين، موافقة الوالدين. نحن سعداء لمساعدتك في الحصول على جميع الوثائق اللازمة.",
      },
      {
        question: "كيف يمكنني التسجيل للحصول على رخصة القيادة؟",
        answer:
          "التسجيل بسيط: زرنا في مدرسة القيادة، اتصل بنا، أو استخدم نموذج التسجيل عبر الإنترنت. نقدم استشارة مجانية، وننشئ خطة تدريب فردية، ونتعامل مع جميع الإجراءات الرسمية مع مكتب الترخيص.",
      },
      {
        question: "كم مدة صلاحية رخصة القيادة؟",
        answer:
          "رخص السيارات (الفئة B و BE) صالحة لمدة 15 عامًا ويجب تجديدها بعد ذلك. رخص الدراجات النارية صالحة إلى أجل غير مسمى.",
      },
    ],
  },
};

const FAQ = () => {
  const { selectedLanguage } = useLanguage();
  const lang = faqContent[selectedLanguage] || faqContent.DE;
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold italic uppercase mb-6 text-gray-800">
            {lang.header}
          </h1>
        </div>

        {/* FAQ List - Single Column */}
        <div className="space-y-4">
          {lang.questions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200"
            >
              {/* Question Header */}
              <div
                className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-bold text-lg text-gray-800 pr-4 leading-tight">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="text-yellow-500 text-xl transform transition-transform duration-300" />
                  ) : (
                    <FaChevronDown className="text-yellow-500 text-xl transform transition-transform duration-300" />
                  )}
                </div>
              </div>

              {/* Answer Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed mt-4 text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
