import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaUsers,
  FaCertificate,
  FaInfoCircle,
  FaCheckCircle,
  FaClipboardList,
  FaShieldAlt,
  FaClock,
  FaGraduationCap,
  FaExclamationTriangle,
  FaCarCrash,
  FaStopwatch,
  FaRoute,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaIdCard,
  FaRoad,
  FaEye,
  FaCalendarAlt,
  FaHandshake,
  FaUserPlus,
  FaBook,
  FaCar,
  FaTrophy,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

const content = {
  DE: {
    header: {
      title: "ASF AUFBAUSEMINAR",
      subtitle:
        "Aufbauseminar für Fahranfänger - Professionell, kompetent und mit individueller Betreuung.",
    },
    intro: {
      title: "Was ist ein ASF?",
      description:
        "Ein Aufbauseminar für Fahranfänger (ASF) ist eine verpflichtende Nachschulungsmaßnahme für Fahranfänger, die innerhalb der Probezeit auffällig geworden sind. Es dient der Förderung der Verkehrssicherheit und soll Fahranfänger für riskante Situationen sensibilisieren.",
      whenTitle: "Wann ist ein ASF Pflicht?",
      whenText:
        "Ein Aufbauseminar wird angeordnet, wenn Fahranfänger in der Probezeit einen A-Verstoß oder zwei B-Verstöße begehen.",
    },
    violations: {
      title: "Verstöße die zum ASF führen",
      subtitle: "Diese Verkehrsverstöße lösen die ASF-Pflicht aus",
      aViolations: {
        title: "A-Verstöße (schwerwiegend)",
        subtitle: "Ein A-Verstoß führt direkt zum ASF",
        examples: [
          "Geschwindigkeitsüberschreitung über 20 km/h",
          "Rotlichtverstoß",
          "Alkohol am Steuer (0,5-1,09 Promille)",
          "Handy am Steuer",
          "Überholverbot missachtet",
          "Vorfahrt missachtet",
        ],
      },
      bViolations: {
        title: "B-Verstöße (weniger schwerwiegend)",
        subtitle: "Zwei B-Verstöße führen zum ASF",
        examples: [
          "Parkverstöße",
          "Geringere Geschwindigkeitsüberschreitungen (bis 20 km/h)",
          "Beleuchtungsmängel",
          "Andere kleinere Verkehrsverstöße",
        ],
      },
    },
    structure: {
      title: "Aufbau und Ablauf des ASF",
      subtitle: "So ist unser Aufbauseminar strukturiert",
      theorie: {
        title: "Theoretische Sitzungen",
        description: "4 Sitzungen à 135 Minuten",
        duration: "4 × 135 Min",
        timeframe: "Verteilt über 2-4 Wochen",
      },
      fahrprobe: {
        title: "Beobachtungsfahrt",
        description: "Eine Fahrt zwischen 1. und 2. Sitzung",
        duration: "30 Minuten",
        details: "Bis zu 3 Teilnehmer gleichzeitig",
      },
      participants: {
        title: "Gruppengröße",
        description: "6 bis 12 Teilnehmer pro Gruppe",
      },
      deadline: {
        title: "Teilnahmefrist",
        description: "Meist 4 Monate nach Anordnung",
      },
    },
    process: {
      title: "Ablauf des ASF-Kurses",
      subtitle: "So läuft Ihr Aufbauseminar ab",
      steps: [
        {
          title: "Anmeldung zum ASF",
          description: "Schnelle Anmeldung nach Erhalt des Bescheids",
          details: "Wir helfen bei der Terminplanung und allen Formalitäten",
        },
        {
          title: "Theoretische Sitzungen",
          description: "4 Sitzungen mit wichtigen Verkehrsthemen",
          details: "Verkehrssicherheit, Risikobewusstsein und Unfallprävention",
        },
        {
          title: "Beobachtungsfahrt",
          description: "Praktische Fahrt mit professioneller Analyse",
          details: "Fahrverhaltensanalyse mit ausführlicher Nachbesprechung",
        },
        {
          title: "Kurszertifikat",
          description: "Offizielle Teilnahmebestätigung",
          details: "Wichtiger Nachweis für die Verkehrsbehörde",
        },
        {
          title: "Probezeit-Verlängerung",
          description: "Automatische Verlängerung um 2 Jahre",
          details: "Probezeit wird auf insgesamt 4 Jahre verlängert",
        },
      ],
    },
    topics: {
      title: "Inhalte des ASF-Kurses",
      subtitle: "Diese wichtigen Themen werden behandelt",
      items: [
        {
          title: "Verkehrssicherheit",
          description: "Risiken erkennen und richtig einschätzen",
          icon: <FaShieldAlt className="text-2xl" />,
        },
        {
          title: "Unfallprävention",
          description: "Strategien zur Vermeidung von Verkehrsunfällen",
          icon: <FaExclamationTriangle className="text-2xl" />,
        },
        {
          title: "Verkehrsregeln",
          description: "Auffrischung wichtiger Verkehrsvorschriften",
          icon: <FaRoad className="text-2xl" />,
        },
        {
          title: "Fahrverhaltensanalyse",
          description: "Reflexion des eigenen Fahrverhaltens",
          icon: <FaEye className="text-2xl" />,
        },
      ],
    },
    advantages: {
      title: "Warum unser ASF wählen?",
      subtitle: "Ihre Vorteile bei uns",
      items: [
        {
          title: "Erfahrene Moderatoren",
          description: "Qualifizierte und einfühlsame Kursleitung",
        },
        {
          title: "Kleine Gruppen",
          description: "Optimale Betreuung in kleinen Gruppen",
        },
        {
          title: "Flexible Termine",
          description: "Auch abends und am Wochenende",
        },
        {
          title: "Zentrale Lage",
          description: "Gut erreichbar mit Parkmöglichkeiten",
        },
      ],
    },
    requirements: {
      title: "Voraussetzungen & wichtige Hinweise",
      subtitle: "Was Sie wissen müssen",
      items: [
        "Gültiger Führerschein in der Probezeit",
        "Bescheid der Verkehrsbehörde über ASF-Anordnung",
        "Anmeldung innerhalb der gesetzlichen Frist",
        "Pünktliche Teilnahme an allen Terminen",
        "Aktive Mitarbeit während des Seminars",
        "Personalausweis zur Identitätsprüfung",
      ],
      warningTitle: "Wichtige Warnung",
      warningText:
        "Bei Nichterfüllung der ASF-Teilnahme droht der Entzug der Fahrerlaubnis! Melden Sie sich daher rechtzeitig nach Erhalt des Bescheids an.",
    },
    pricing: {
      title: "Preise & Leistungen",
      includedTitle: "Im ASF-Kurs enthalten:",
      services: [
        "4 theoretische Sitzungen (je 135 Minuten)",
        "1 Beobachtungsfahrt (mindestens 30 Minuten)",
        "Professionelle Kursleitung",
        "Alle Kursmaterialien",
        "Offizielle Teilnahmebestätigung",
        "Beratung bei Fragen zur Probezeit",
      ],
      packageTitle: "ASF-Aufbauseminar",
      price: "400€",
      packageDescription: "Kompletter Kurs inklusive aller Leistungen",
      extras: [
        "Ratenzahlung möglich",
        "Kostenlose Beratung inklusive",
        "Flexible Terminplanung",
      ],
    },
    faq: {
      title: "Häufige Fragen zum ASF",
      subtitle: "Antworten auf die wichtigsten Fragen",
      items: [
        {
          question: "Wann muss ich am ASF teilnehmen?",
          answer:
            "ASF ist verpflichtend nach einem schwerwiegenden Verkehrsverstoß (A-Verstoß) oder zwei weniger schwerwiegenden Verstößen (B-Verstöße) in der Probezeit. Sie erhalten einen entsprechenden Bescheid.",
        },
        {
          question: "Wie lange dauert das ASF?",
          answer:
            "Das ASF umfasst 4 theoretische Sitzungen à 135 Minuten plus eine Beobachtungsfahrt von mindestens 30 Minuten. Der gesamte Kurs erstreckt sich über 2-4 Wochen.",
        },
        {
          question: "Was passiert, wenn ich nicht teilnehme?",
          answer:
            "Bei Nichtteilnahme am ASF wird die Fahrerlaubnis entzogen. Eine Neuerteilung ist erst nach einer Sperrfrist und erfolgreicher MPU möglich.",
        },
        {
          question: "Verlängert sich meine Probezeit nach dem ASF?",
          answer:
            "Ja, nach der ersten ASF-Teilnahme verlängert sich die Probezeit automatisch um weitere 2 Jahre auf insgesamt 4 Jahre.",
        },
        {
          question: "Kann ich das ASF online machen?",
          answer:
            "Nein, das ASF muss in Präsenz stattfinden. Sowohl die theoretischen Sitzungen als auch die Beobachtungsfahrt erfordern eine persönliche Teilnahme.",
        },
      ],
    },
    cta: {
      title: "Jetzt zum ASF anmelden",
      button: "ASF-Kurs buchen",
      subtitle:
        "Sichern Sie sich Ihren Führerschein - melden Sie sich rechtzeitig an!",
    },
  },
  EN: {
    header: {
      title: "ASF ADVANCED SEMINAR",
      subtitle:
        "Advanced seminar for novice drivers - Professional, competent and with individual support.",
    },
    intro: {
      title: "What is an ASF?",
      description:
        "An Advanced Seminar for Novice Drivers (ASF) is a mandatory remedial measure for novice drivers who have become conspicuous during the probationary period. It serves to promote traffic safety and aims to sensitize novice drivers to risky situations.",
      whenTitle: "When is an ASF mandatory?",
      whenText:
        "An advanced seminar is ordered when novice drivers commit an A-violation or two B-violations during the probationary period.",
    },
    violations: {
      title: "Violations leading to ASF",
      subtitle: "These traffic violations trigger the ASF requirement",
      aViolations: {
        title: "A-violations (serious)",
        subtitle: "One A-violation leads directly to ASF",
        examples: [
          "Speeding over 20 km/h",
          "Red light violation",
          "Alcohol while driving (0.5-1.09 per mille)",
          "Mobile phone while driving",
          "Overtaking ban violated",
          "Right of way violated",
        ],
      },
      bViolations: {
        title: "B-violations (less serious)",
        subtitle: "Two B-violations lead to ASF",
        examples: [
          "Parking violations",
          "Minor speeding violations (up to 20 km/h)",
          "Lighting defects",
          "Other minor traffic violations",
        ],
      },
    },
    structure: {
      title: "Structure and Process of ASF",
      subtitle: "How our advanced seminar is structured",
      theorie: {
        title: "Theoretical Sessions",
        description: "4 sessions of 135 minutes each",
        duration: "4 × 135 Min",
        timeframe: "Spread over 2-4 weeks",
      },
      fahrprobe: {
        title: "Observation Drive",
        description: "One drive between 1st and 2nd session",
        duration: "30 minutes",
        details: "Up to 3 participants simultaneously",
      },
      participants: {
        title: "Group Size",
        description: "6 to 12 participants per group",
      },
      deadline: {
        title: "Participation Deadline",
        description: "Usually 4 months after order",
      },
    },
    process: {
      title: "ASF Course Process",
      subtitle: "How your advanced seminar works",
      steps: [
        {
          title: "ASF Registration",
          description: "Quick registration after receiving the notice",
          details: "We help with appointment planning and all formalities",
        },
        {
          title: "Theoretical Sessions",
          description: "4 sessions with important traffic topics",
          details: "Traffic safety, risk awareness and accident prevention",
        },
        {
          title: "Observation Drive",
          description: "Practical drive with professional analysis",
          details: "Driving behavior analysis with detailed debriefing",
        },
        {
          title: "Course Certificate",
          description: "Official participation confirmation",
          details: "Important proof for the traffic authority",
        },
        {
          title: "Probation Extension",
          description: "Automatic extension by 2 years",
          details: "Probationary period extended to total of 4 years",
        },
      ],
    },
    topics: {
      title: "ASF Course Content",
      subtitle: "These important topics are covered",
      items: [
        {
          title: "Traffic Safety",
          description: "Recognize and properly assess risks",
          icon: <FaShieldAlt className="text-2xl" />,
        },
        {
          title: "Accident Prevention",
          description: "Strategies to avoid traffic accidents",
          icon: <FaExclamationTriangle className="text-2xl" />,
        },
        {
          title: "Traffic Rules",
          description: "Refresher on important traffic regulations",
          icon: <FaRoad className="text-2xl" />,
        },
        {
          title: "Driving Behavior Analysis",
          description: "Reflection on your own driving behavior",
          icon: <FaEye className="text-2xl" />,
        },
      ],
    },
    advantages: {
      title: "Why choose our ASF?",
      subtitle: "Your advantages with us",
      items: [
        {
          title: "Experienced Moderators",
          description: "Qualified and empathetic course leadership",
        },
        {
          title: "Small Groups",
          description: "Optimal support in small groups",
        },
        {
          title: "Flexible Appointments",
          description: "Also evenings and weekends",
        },
        {
          title: "Central Location",
          description: "Easily accessible with parking facilities",
        },
      ],
    },
    requirements: {
      title: "Requirements & Important Notes",
      subtitle: "What you need to know",
      items: [
        "Valid driver's license in probationary period",
        "Traffic authority notice about ASF order",
        "Registration within the legal deadline",
        "Punctual participation in all appointments",
        "Active participation during the seminar",
        "ID card for identity verification",
      ],
      warningTitle: "Important Warning",
      warningText:
        "Failure to participate in ASF threatens the withdrawal of the driving license! Therefore, register in time after receiving the notice.",
    },
    pricing: {
      title: "Prices & Services",
      includedTitle: "Included in the ASF course:",
      services: [
        "4 theoretical sessions (135 minutes each)",
        "1 observation drive (minimum 30 minutes)",
        "Professional course leadership",
        "All course materials",
        "Official participation confirmation",
        "Consultation on probationary period questions",
      ],
      packageTitle: "ASF Advanced Seminar",
      price: "400€",
      packageDescription: "Complete course including all services",
      extras: [
        "Installment payment possible",
        "Free consultation included",
        "Flexible appointment scheduling",
      ],
    },
    faq: {
      title: "Frequently Asked Questions about ASF",
      subtitle: "Answers to the most important questions",
      items: [
        {
          question: "When do I have to participate in ASF?",
          answer:
            "ASF is mandatory after a serious traffic violation (A-violation) or two less serious violations (B-violations) during the probationary period. You will receive a corresponding notice.",
        },
        {
          question: "How long does the ASF take?",
          answer:
            "The ASF comprises 4 theoretical sessions of 135 minutes each plus one observation drive of at least 30 minutes. The entire course spans 2-4 weeks.",
        },
        {
          question: "What happens if I don't participate?",
          answer:
            "If you don't participate in ASF, your driving license will be revoked. A new license is only possible after a suspension period and successful MPU.",
        },
        {
          question: "Does my probationary period extend after ASF?",
          answer:
            "Yes, after the first ASF participation, the probationary period automatically extends by another 2 years to a total of 4 years.",
        },
        {
          question: "Can I do the ASF online?",
          answer:
            "No, the ASF must take place in person. Both the theoretical sessions and the observation drive require personal participation.",
        },
      ],
    },
    cta: {
      title: "Register for ASF now",
      button: "Book ASF course",
      subtitle: "Secure your driver's license - register in time!",
    },
  },
  AR: {
    header: {
      title: "ندوة ASF المتقدمة",
      subtitle: "ندوة متقدمة للسائقين المبتدئين - مهنية وكفؤة مع دعم فردي.",
    },
    intro: {
      title: "ما هي ASF؟",
      description:
        "الندوة المتقدمة للسائقين المبتدئين (ASF) هي إجراء إصلاحي إلزامي للسائقين المبتدئين الذين أصبحوا ملفتين للنظر خلال فترة الاختبار. تهدف إلى تعزيز سلامة المرور وتهدف إلى توعية السائقين المبتدئين بالمواقف الخطيرة.",
      whenTitle: "متى تكون ASF إلزامية؟",
      whenText:
        "يتم طلب ندوة متقدمة عندما يرتكب السائقون المبتدئون مخالفة من النوع A أو مخالفتين من النوع B خلال فترة الاختبار.",
    },
    violations: {
      title: "المخالفات التي تؤدي إلى ASF",
      subtitle: "هذه المخالفات المرورية تؤدي إلى متطلب ASF",
      aViolations: {
        title: "مخالفات النوع A (خطيرة)",
        subtitle: "مخالفة واحدة من النوع A تؤدي مباشرة إلى ASF",
        examples: [
          "تجاوز السرعة بأكثر من 20 كم/ساعة",
          "مخالفة الضوء الأحمر",
          "الكحول أثناء القيادة (0.5-1.09 بالألف)",
          "الهاتف المحمول أثناء القيادة",
          "انتهاك حظر التجاوز",
          "انتهاك حق المرور",
        ],
      },
      bViolations: {
        title: "مخالفات النوع B (أقل خطورة)",
        subtitle: "مخالفتان من النوع B تؤديان إلى ASF",
        examples: [
          "مخالفات الوقوف",
          "مخالفات سرعة طفيفة (حتى 20 كم/ساعة)",
          "عيوب الإضاءة",
          "مخالفات مرورية صغيرة أخرى",
        ],
      },
    },
    structure: {
      title: "هيكل وعملية ASF",
      subtitle: "كيف تم تنظيم ندوتنا المتقدمة",
      theorie: {
        title: "الجلسات النظرية",
        description: "4 جلسات مدة كل منها 135 دقيقة",
        duration: "4 × 135 دقيقة",
        timeframe: "موزعة على مدى 2-4 أسابيع",
      },
      fahrprobe: {
        title: "رحلة المراقبة",
        description: "رحلة واحدة بين الجلسة الأولى والثانية",
        duration: "30 دقيقة",
        details: "حتى 3 مشاركين في نفس الوقت",
      },
      participants: {
        title: "حجم المجموعة",
        description: "6 إلى 12 مشارك لكل مجموعة",
      },
      deadline: {
        title: "موعد المشاركة النهائي",
        description: "عادة 4 أشهر بعد الطلب",
      },
    },
    process: {
      title: "عملية دورة ASF",
      subtitle: "كيف تعمل ندوتك المتقدمة",
      steps: [
        {
          title: "تسجيل ASF",
          description: "تسجيل سريع بعد تلقي الإشعار",
          details: "نساعد في تخطيط المواعيد وجميع الإجراءات الشكلية",
        },
        {
          title: "الجلسات النظرية",
          description: "4 جلسات مع موضوعات مرورية مهمة",
          details: "سلامة المرور، الوعي بالمخاطر ومنع الحوادث",
        },
        {
          title: "رحلة المراقبة",
          description: "رحلة عملية مع تحليل مهني",
          details: "تحليل سلوك القيادة مع مناقشة مفصلة",
        },
        {
          title: "شهادة الدورة",
          description: "تأكيد مشاركة رسمي",
          details: "إثبات مهم لسلطة المرور",
        },
        {
          title: "تمديد فترة الاختبار",
          description: "تمديد تلقائي لمدة سنتين",
          details: "تمديد فترة الاختبار إلى إجمالي 4 سنوات",
        },
      ],
    },
    topics: {
      title: "محتوى دورة ASF",
      subtitle: "هذه الموضوعات المهمة يتم تغطيتها",
      items: [
        {
          title: "سلامة المرور",
          description: "التعرف على المخاطر وتقييمها بشكل صحيح",
          icon: <FaShieldAlt className="text-2xl" />,
        },
        {
          title: "منع الحوادث",
          description: "استراتيجيات لتجنب حوادث المرور",
          icon: <FaExclamationTriangle className="text-2xl" />,
        },
        {
          title: "قواعد المرور",
          description: "تجديد المعلومات حول لوائح المرور المهمة",
          icon: <FaRoad className="text-2xl" />,
        },
        {
          title: "تحليل سلوك القيادة",
          description: "التفكير في سلوك القيادة الخاص بك",
          icon: <FaEye className="text-2xl" />,
        },
      ],
    },
    advantages: {
      title: "لماذا تختار ASF الخاص بنا؟",
      subtitle: "مزاياك معنا",
      items: [
        {
          title: "مشرفون ذوو خبرة",
          description: "قيادة دورة مؤهلة ومتعاطفة",
        },
        {
          title: "مجموعات صغيرة",
          description: "دعم مثالي في مجموعات صغيرة",
        },
        {
          title: "مواعيد مرنة",
          description: "أيضاً في المساء وعطلات نهاية الأسبوع",
        },
        {
          title: "موقع مركزي",
          description: "سهل الوصول مع مرافق وقوف السيارات",
        },
      ],
    },
    requirements: {
      title: "المتطلبات والملاحظات المهمة",
      subtitle: "ما تحتاج لمعرفته",
      items: [
        "رخصة قيادة صالحة في فترة الاختبار",
        "إشعار سلطة المرور حول طلب ASF",
        "التسجيل ضمن الموعد النهائي القانوني",
        "المشاركة المنتظمة في جميع المواعيد",
        "المشاركة النشطة أثناء الندوة",
        "بطاقة هوية للتحقق من الهوية",
      ],
      warningTitle: "تحذير مهم",
      warningText:
        "عدم المشاركة في ASF يهدد بسحب رخصة القيادة! لذلك، سجل في الوقت المناسب بعد تلقي الإشعار.",
    },
    pricing: {
      title: "الأسعار والخدمات",
      includedTitle: "مشمول في دورة ASF:",
      services: [
        "4 جلسات نظرية (135 دقيقة لكل منها)",
        "رحلة مراقبة واحدة (30 دقيقة كحد أدنى)",
        "قيادة دورة مهنية",
        "جميع مواد الدورة",
        "تأكيد مشاركة رسمي",
        "استشارة حول أسئلة فترة الاختبار",
      ],
      packageTitle: "ندوة ASF المتقدمة",
      price: "400€",
      packageDescription: "دورة كاملة تشمل جميع الخدمات",
      extras: [
        "دفع بالتقسيط ممكن",
        "استشارة مجانية مشمولة",
        "جدولة مواعيد مرنة",
      ],
    },
    faq: {
      title: "الأسئلة الشائعة حول ASF",
      subtitle: "إجابات على أهم الأسئلة",
      items: [
        {
          question: "متى يجب أن أشارك في ASF؟",
          answer:
            "ASF إلزامي بعد مخالفة مرورية خطيرة (مخالفة A) أو مخالفتين أقل خطورة (مخالفات B) خلال فترة الاختبار. ستتلقى إشعاراً مقابلاً.",
        },
        {
          question: "كم من الوقت يستغرق ASF؟",
          answer:
            "يشمل ASF 4 جلسات نظرية مدة كل منها 135 دقيقة بالإضافة إلى رحلة مراقبة واحدة لمدة 30 دقيقة على الأقل. تمتد الدورة بأكملها على مدى 2-4 أسابيع.",
        },
        {
          question: "ماذا يحدث إذا لم أشارك؟",
          answer:
            "إذا لم تشارك في ASF، سيتم سحب رخصة القيادة الخاصة بك. الحصول على رخصة جديدة ممكن فقط بعد فترة إيقاف و MPU ناجحة.",
        },
        {
          question: "هل تمتد فترة الاختبار الخاصة بي بعد ASF؟",
          answer:
            "نعم، بعد المشاركة الأولى في ASF، تمتد فترة الاختبار تلقائياً لسنتين إضافيتين لتصبح 4 سنوات في المجموع.",
        },
        {
          question: "هل يمكنني القيام بـ ASF عبر الإنترنت؟",
          answer:
            "لا، يجب أن يتم ASF شخصياً. كل من الجلسات النظرية ورحلة المراقبة تتطلب مشاركة شخصية.",
        },
      ],
    },
    cta: {
      title: "سجل الآن في ASF",
      button: "احجز دورة ASF",
      subtitle: "أمن رخصة القيادة الخاصة بك - سجل في الوقت المناسب!",
    },
  },
};

const ASFAufbauseminarPage = () => {
  const { selectedLanguage } = useLanguage();
  const langContent = content[selectedLanguage] || content.DE;
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const steps = langContent.process.steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    description: step.description,
    icon: [
      <FaUserPlus className="text-2xl md:text-3xl" />,
      <FaBook className="text-2xl md:text-3xl" />,
      <FaCar className="text-2xl md:text-3xl" />,
      <FaGraduationCap className="text-2xl md:text-3xl" />,
      <FaTrophy className="text-2xl md:text-3xl" />,
    ][index],
    details: step.details,
  }));

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      ;
      <Helmet>
        <title>
          Punkte abbauen Lüneburg – Fahreignungsseminar (FES) bei Scooldrive
        </title>
        <meta
          name="description"
          content="Jetzt Punkte in Flensburg abbauen: Fahreignungsseminar (FES) in Lüneburg bei Scooldrive. Schnelle Termine, erfahrene Trainer und effektives Training. Jetzt informieren & anmelden!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Punkte abbauen Lüneburg – Fahreignungsseminar (FES) bei Scooldrive"
        />
        <meta
          property="og:description"
          content="Punkte in Flensburg abbauen mit dem Fahreignungsseminar (FES) in Lüneburg. Flexible Termine, professionelle Trainer – jetzt bei Scooldrive punkten!"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/punkte-abbauen"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Punkte abbauen Lüneburg – Fahreignungsseminar (FES) bei Scooldrive"
        />
        <meta
          name="twitter:description"
          content="Punkte in Flensburg abbauen: FES-Seminar in Lüneburg bei Scooldrive. Schnell, effektiv und professionell!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/punkte-abbauen"
        />
      </Helmet>
      <div className="min-h-screen mt-[80px] bg-gray-50 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              <span className="text-[#F5BB00]">ASF</span>{" "}
              <span className="text-black">AUFBAUSEMINAR</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {langContent.header.subtitle}
            </p>
          </motion.div>

          {/* Einleitung */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                      <FaInfoCircle className="text-black text-xl" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                      {langContent.intro.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {langContent.intro.description}
                  </p>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#F5BB00] rounded-full flex items-center justify-center mr-3">
                      <FaQuestionCircle className="text-black text-sm" />
                    </div>
                    <h3 className="text-lg font-bold text-black">
                      {langContent.intro.whenTitle}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {langContent.intro.whenText}
                  </p>
                </div>

                {/* Bild Platzhalter */}

                <div className="flex justify-center">
                  <div className="w-full max-w-md h-80 rounded-2xl overflow-hidden">
                    <img
                      src="/aufbau.png"
                      alt={
                        selectedLanguage === "DE"
                          ? "Fahrübungsplatz mit Pylonen – Aufbauseminar für Fahranfänger (ASF) in Lüneburg"
                          : selectedLanguage === "EN"
                          ? "Driving practice area with traffic cones – advanced seminar for novice drivers (ASF) in Lüneburg"
                          : "ساحة تدريب قيادة مع أقماع مرورية – دورة تأهيلية للسائقين الجدد (ASF) في لونيبورغ"
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Verstöße die zum ASF führen */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {langContent.violations.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {langContent.violations.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* A-Verstöße */}
                <div className="bg-gray-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <FaCarCrash className="text-gray-700 mr-3 text-xl" />
                    <h3 className="font-bold text-gray-800">
                      {langContent.violations.aViolations.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {langContent.violations.aViolations.subtitle}
                  </p>
                  <ul className="space-y-2">
                    {langContent.violations.aViolations.examples.map(
                      (example, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <FaCheckCircle className="text-[#F5BB00] mr-2 flex-shrink-0 text-sm" />
                          <span className="text-sm">{example}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* B-Verstöße */}
                <div className="bg-gray-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="text-gray-600 mr-3 text-xl" />
                    <h3 className="font-bold text-gray-800">
                      {langContent.violations.bViolations.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {langContent.violations.bViolations.subtitle}
                  </p>
                  <ul className="space-y-2">
                    {langContent.violations.bViolations.examples.map(
                      (example, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <FaCheckCircle className="text-[#F5BB00] mr-2 flex-shrink-0 text-sm" />
                          <span className="text-sm">{example}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Aufbau und Struktur */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {langContent.structure.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {langContent.structure.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Theorie */}
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaGraduationCap className="text-black" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {langContent.structure.theorie.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {langContent.structure.theorie.description}
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    {langContent.structure.theorie.timeframe}
                  </p>
                  <span className="bg-[#F5BB00] text-black px-3 py-1 rounded-full text-xs font-bold">
                    {langContent.structure.theorie.duration}
                  </span>
                </div>

                {/* Fahrprobe */}
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaRoute className="text-black" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {langContent.structure.fahrprobe.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {langContent.structure.fahrprobe.description}
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    {langContent.structure.fahrprobe.details}
                  </p>
                  <span className="bg-[#F5BB00] text-black px-3 py-1 rounded-full text-xs font-bold">
                    {langContent.structure.fahrprobe.duration}
                  </span>
                </div>

                {/* Teilnehmer */}
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-black" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {langContent.structure.participants.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {langContent.structure.participants.description}
                  </p>
                </div>

                {/* Frist */}
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaStopwatch className="text-black" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {langContent.structure.deadline.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {langContent.structure.deadline.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ablauf Timeline */}
          <motion.div
            className="mb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {langContent.process.title}
              </h2>
              <p className="text-lg text-gray-600">
                {langContent.process.subtitle}
              </p>
            </div>

            {/* Desktop: Timeline Layout */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 z-0"></div>

              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex items-center mb-8 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-8 w-6 h-6 bg-[#F5BB00] rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  />

                  {/* Step Card */}
                  <motion.div
                    className="flex-1 ml-20"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <div className="w-16 h-16 bg-[#F5BB00] rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {step.id}
                          </div>
                          <div className="text-gray-600 group-hover:text-[#F5BB00] transition-colors duration-300">
                            {step.icon}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-[#F5BB00] transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-base md:text-lg mb-2 leading-relaxed">
                            {step.description}
                          </p>
                          <p className="text-sm text-gray-500 italic">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Mobile: Grid Layout */}
            <div className="md:hidden grid grid-cols-1 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center text-black font-bold text-lg">
                        {step.id}
                      </div>
                      <div className="text-gray-600">{step.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-500 italic">
                      {step.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Kursinhalte */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {langContent.topics.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {langContent.topics.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {langContent.topics.items.map((topic, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    <div className="text-[#F5BB00] mb-4 flex justify-center">
                      {topic.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-gray-600">{topic.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vorteile */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {langContent.advantages.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {langContent.advantages.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {langContent.advantages.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  >
                    <div className="text-[#F5BB00] mb-4 flex justify-center">
                      {
                        [
                          <FaGraduationCap className="text-xl" />,
                          <FaUsers className="text-xl" />,
                          <FaCalendarAlt className="text-xl" />,
                          <FaCar className="text-xl" />,
                        ][index]
                      }
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Voraussetzungen */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                  <FaIdCard className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  {langContent.requirements.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {langContent.requirements.subtitle}
                  </h3>
                  <div className="space-y-3">
                    {langContent.requirements.items.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-[#F5BB00] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="text-gray-600 mr-3 text-xl" />
                    <h3 className="text-xl font-bold text-gray-800">
                      {langContent.requirements.warningTitle}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {langContent.requirements.warningText}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preise & Leistungen */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-8 justify-center">
                <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
                  <FaClock className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  {langContent.pricing.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {langContent.pricing.includedTitle}
                  </h3>
                  <div className="space-y-4">
                    {langContent.pricing.services.map((leistung, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-[#F5BB00] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{leistung}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#F5BB00] rounded-xl p-6 text-center">
                  <FaStar className="text-4xl text-black mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {langContent.pricing.packageTitle}
                  </h3>
                  <div className="text-4xl font-bold text-black mb-4">
                    {langContent.pricing.price}
                  </div>
                  <p className="text-black opacity-90 mb-6">
                    {langContent.pricing.packageDescription}
                  </p>
                  <div className="space-y-2 text-sm text-black">
                    {langContent.pricing.extras.map((extra, index) => (
                      <p key={index}>{extra}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            className="mb-24"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {langContent.faq.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {langContent.faq.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {langContent.faq.items.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center">
                        <FaQuestionCircle className="text-[#F5BB00] mr-3" />
                        <span className="font-semibold text-black">
                          {item.question}
                        </span>
                      </div>
                      {openFaq === index ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-white">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {langContent.cta.title}
            </h2>

            <motion.button
              className="bg-[#F5BB00] text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 187, 0, 0.3)",
              }}
              onClick={() => navigate("/anmelden")}
              whileTap={{ scale: 0.95 }}
            >
              {langContent.cta.button}
            </motion.button>

            <p className="text-gray-600 mt-6 text-lg">
              {langContent.cta.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ASFAufbauseminarPage;
