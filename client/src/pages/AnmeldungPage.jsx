import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import emailjs from "@emailjs/browser";
import useApiData from "../../hooks/useAPIData";
import {
  FaArrowLeft,
  FaCar,
  FaMotorcycle,
  FaTruck,
  FaCheck,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTrailer,
  FaCarSide,
  FaCog,
  FaClock,
  FaRocket,
  // FaTachometerAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

import Step1 from "../components/AnmeldeSteps/Step1";
import Step2 from "../components/AnmeldeSteps/Step2";
import Step3 from "../components/AnmeldeSteps/Step3";
import Step4 from "../components/AnmeldeSteps/Step4";
import Step5 from "../components/AnmeldeSteps/Step5";
import Step6 from "../components/AnmeldeSteps/Step6";
import Step7 from "../components/AnmeldeSteps/Step7";
import Step8 from "../components/AnmeldeSteps/Step8";
import Step9 from "../components/AnmeldeSteps/Step9";
import Step3_5 from "../components/AnmeldeSteps/Step3_5";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const content = {
  DE: {
    navigation: {
      back: "Zurück",
      title: "Anmeldung",
      stepOf: "Schritt",
      von: "von",
    },
    buttons: {
      next: "Weiter",
      submit: "Jetzt Anmelden",
    },
    steps: {
      step1: {
        title: "Welchen Führerschein möchtest du machen?",
        options: [
          { key: "auto", label: "Auto (Klasse B)", icon: FaCar },
          { key: "motorrad", label: "Motorrad", icon: FaMotorcycle },
          {
            key: "auto-anhaenger",
            label: "Auto mit Anhänger (BE)",
            icon: FaTruck,
          },
        ],
        error: "Bitte wählen Sie einen Fahrzeugtyp",
      },
      step2: {
        title: "Wie ist dein Name?",
        fields: {
          vorname: "Vorname",
          nachname: "Nachname",
        },
        placeholders: {
          vorname: "Dein Vorname",
          nachname: "Dein Nachname",
        },
        error: {
          vorname: "Vorname ist erforderlich",
          nachname: "Nachname ist erforderlich",
        },
      },
      step3: {
        title: "Hast du bereits einen Führerschein?",
        options: {
          no: "Nein, das ist mein erster Führerschein",
          yes: "Ja, ich habe bereits einen Führerschein",
        },
        descriptions: {
          no: "Ich bin Fahranfänger",
          yes: "Ich möchte eine weitere Klasse machen",
        },
        subTitle: "Welchen Führerschein hast du bereits?",
        prerequisiteWarning: {
          title: "Führerschein B erforderlich",
          description:
            "Für die Führerscheinklassen BE und B96 ist ein gültiger Führerschein der Klasse B Voraussetzung.",
        },
        subOptions: [
          { value: "B (Auto)", desc: "Klasse B - PKW bis 3,5t", icon: FaCar },
          {
            value: "BE (Auto mit Anhänger)",
            desc: "Klasse BE - PKW mit Anhänger",
            icon: FaTruck,
          },
          {
            value: "Motorrad",
            desc: "Klasse A/A1/A2 - Motorrad",
            icon: FaMotorcycle,
          },
        ],
      },
      // DE
      step3_5: {
        title: "Welche spezifische Klasse möchtest du?",
        options: [
          // Für Anhänger
          {
            key: "be",
            label: "BE - Anhänger",
            desc: "Klassischer Anhängerführerschein",
            weight: "Bis 3.500kg zul. Gesamtgewicht",
            icon: FaTrailer,
          },
          {
            key: "b96",
            label: "B96 - Leichter Anhänger",
            desc: "Erweiterte Berechtigung für Auto",
            weight: "Bis 4.250kg zul. Gesamtgewicht",
            icon: FaTrailer,
          },
          // Für Motorrad
          {
            key: "am",
            label: "AM - Moped/Roller",
            desc: "Zweiräder bis 50ccm",
            weight: "Max. 45 km/h",
            icon: FaMotorcycle,
          },
          {
            key: "a1",
            label: "A1 - Leichtkraftrad",
            desc: "Motorräder bis 125ccm",
            weight: "Max. 11 kW (15 PS)",
            icon: FaMotorcycle,
          },
          {
            key: "a2",
            label: "A2 - Mittlere Motorräder",
            desc: "Motorräder mit beschränkter Leistung",
            weight: "Max. 35 kW (48 PS)",
            icon: FaMotorcycle,
          },
          {
            key: "a",
            label: "A - Schwere Motorräder",
            desc: "Unbeschränkte Motorräder",
            weight: "Keine Leistungsbegrenzung",
            icon: FaMotorcycle,
          },
        ],
        error: "Bitte wählen Sie eine spezifische Klasse",
      },
      step4: {
        title: "Was möchtest du lernen?",
        options: [
          {
            key: "beide",
            label: "Automatik + Schaltgetriebe",
            desc: "(empfohlen)",
            icons: [FaCarSide, FaCog],
          },
          {
            key: "automatik",
            label: "Nur Automatikgetriebe",
            desc: "Eingeschränkte Berechtigung",
            icons: [FaCarSide],
          },
        ],
        error: "Bitte wählen Sie eine Option",
      },
      step5: {
        title: "Welche Prüfung möchtest du machen?",
        options: [
          {
            key: "automatik-pruefung",
            label: "Automatikprüfung",
            desc: "(empfohlen)",
            icon: FaCarSide,
          },
          {
            key: "schalt-pruefung",
            label: "Schaltgetriebeprüfung",
            desc: "Für alle Getriebe berechtigt",
            icon: FaCog,
          },
        ],
        error: "Bitte wählen Sie eine Prüfungsart",
      },
      step6: {
        title: "Welchen Praxis-Kurs möchtest du?",
        theoryInfo: {
          title: "Theoriekurs - Intensiv",
          description:
            "Der Theoriekurs findet in kompakter, intensiver Form statt und bereitet dich optimal auf die Theorieprüfung vor.",
        },
        practiceTitle: "Wähle deine Praxis-Kursart:",
        options: [
          {
            key: "flexibel",
            label: "Flexibler Praxis-Kurs",
            desc: "Lerne in deinem eigenen Tempo",
            icon: FaClock,
          },
          {
            key: "praxis-intensiv",
            label: "Praxis Intensivkurs",
            desc: "Schnell durch die praktische Ausbildung",
            icon: FaRocket,
          },
        ],
        error: "Bitte wählen Sie eine Kursart",
      },
      step7: {
        title: "Deine Auswahl im Überblick",
        summary: {
          fahrzeugTyp: "Fahrzeugtyp",
          name: "Name",
          fuehrerschein: "Führerschein",
          getriebe: "Getriebe",
          pruefung: "Prüfung",
          kursart: "Kursart",
        },
      },
      step8: {
        title: "Vervollständige deine Anmeldung",
        fields: {
          vorname: "Vorname",
          nachname: "Nachname",
          geburtsdatum: "Geburtsdatum",
          geburtsstadt: "Geburtsstadt",
          telefon: "Telefonnummer",
          email: "E-Mail",
          adresse: "Adresse",
          datenschutz: "Ich akzeptiere die Datenschutzbestimmungen",
        },
        placeholders: {
          geburtsstadt: "Deine Geburtsstadt",
          telefon: "+49 123 456789",
          email: "deine@email.de",
          adresse: "Straße, Hausnummer, PLZ, Ort",
        },
        error: {
          vorname: "Vorname ist erforderlich",
          nachname: "Nachname ist erforderlich",
          geburtsdatum: "Geburtsdatum ist erforderlich",
          geburtsstadt: "Geburtsstadt ist erforderlich",
          telefon: "Telefonnummer ist erforderlich",
          email: "E-Mail ist erforderlich",
          adresse: "Adresse ist erforderlich",
          datenschutz: "Sie müssen den Datenschutzbestimmungen zustimmen",
        },
      },
      step9: {
        title: "Herzlichen Glückwunsch!",
        subtitle: "Ihre Anmeldung war erfolgreich!",
        whatsapp: {
          title: "Wir kontaktieren Sie",
          message:
            "Sie erhalten in Kürze eine WhatsApp-Nachricht mit allen weiteren Informationen zu Ihrem Kurs.",
        },
        thankYou: "Vielen Dank für dein Vertrauen!", // Ohne Namen
        thankYouDetail:
          "Wir freuen uns darauf, Sie auf Ihrem Weg zum Führerschein zu begleiten.",
        button: "Zurück zur Startseite",
      },
      friendDiscount: {
        explanation:
          "Bringe einen Freund mit und ihr beide erhaltet einen Rabatt von {rabattmenge}€. Ihr müsst nur den Namen des Freundes angeben, der ebenfalls einen Kurs bei uns bucht. (Dein Freund sollte auch deinen Namen angeben, damit wir den Rabatt zuordnen können.)",
        toggleLabel: "Freunde-Rabatt beanspruchen",
        friendNameLabel: "Name des Freundes",
        friendNamePlaceholder: "Gib den Namen deines Freundes ein",
        submitButton: "Einreichen",
        skipButton: "Überspringen",
      },
      bonus: {
        save: "Spare {rabattmenge}€!",
        validUntil: "Nur gültig bis {zeitlimit}h",
      },
    },
  },
  EN: {
    navigation: {
      back: "Back",
      title: "Registration",
      stepOf: "Step",
      von: "of",
    },
    buttons: {
      next: "Next",
      submit: "Register Now",
    },
    steps: {
      step1: {
        title: "Which driving license do you want to obtain?",
        options: [
          { key: "auto", label: "Car (Class B)", icon: FaCar },
          { key: "motorrad", label: "Motorcycle", icon: FaMotorcycle },
          {
            key: "auto-anhaenger",
            label: "Car with Trailer (BE)",
            icon: FaTruck,
          },
        ],
        error: "Please select a vehicle type",
      },
      step2: {
        title: "What is your name?",
        fields: {
          vorname: "First Name",
          nachname: "Last Name",
        },
        placeholders: {
          vorname: "Your first name",
          nachname: "Your last name",
        },
        error: {
          vorname: "First name is required",
          nachname: "Last name is required",
        },
      },
      step3: {
        title: "Do you already have a driving license?",
        options: {
          no: "No, this is my first driving license",
          yes: "Yes, I already have a driving license",
        },
        prerequisiteWarning: {
          title: "Class B license required",
          description:
            "A valid Class B driving license is required for license classes BE and B96.",
        },
        descriptions: {
          no: "I am a beginner driver",
          yes: "I want to get an additional class",
        },
        subTitle: "Which driving license do you already have?",
        subOptions: [
          { value: "B (Car)", desc: "Class B - Cars up to 3.5t", icon: FaCar },
          {
            value: "BE (Car with Trailer)",
            desc: "Class BE - Cars with Trailer",
            icon: FaTruck,
          },
          {
            value: "Motorcycle",
            desc: "Class A/A1/A2 - Motorcycle",
            icon: FaMotorcycle,
          },
        ],
      },
      // EN
      step3_5: {
        title: "Which specific class do you want?",
        options: [
          // Für Anhänger
          {
            key: "be",
            label: "BE - Trailer",
            desc: "Classic trailer license",
            weight: "Up to 3,500kg total weight",
            icon: FaTrailer,
          },
          {
            key: "b96",
            label: "B96 - Light Trailer",
            desc: "Extended authorization for car",
            weight: "Up to 4,250kg total weight",
            icon: FaTrailer,
          },
          // Für Motorrad
          {
            key: "am",
            label: "AM - Moped/Scooter",
            desc: "Two-wheelers up to 50ccm",
            weight: "Max. 45 km/h",
            icon: FaMotorcycle,
          },
          {
            key: "a1",
            label: "A1 - Light Motorcycle",
            desc: "Motorcycles up to 125ccm",
            weight: "Max. 11 kW (15 HP)",
            icon: FaMotorcycle,
          },
          {
            key: "a2",
            label: "A2 - Medium Motorcycles",
            desc: "Motorcycles with limited power",
            weight: "Max. 35 kW (48 HP)",
            icon: FaMotorcycle,
          },
          {
            key: "a",
            label: "A - Heavy Motorcycles",
            desc: "Unlimited motorcycles",
            weight: "No power limitation",
            icon: FaMotorcycle,
          },
        ],
        error: "Please select a specific class",
      },

      step4: {
        title: "What do you want to learn?",
        options: [
          {
            key: "beide",
            label: "Automatic + Manual Transmission",
            desc: "(recommended)",
            icons: [FaCarSide, FaCog],
          },
          {
            key: "automatik",
            label: "Only Automatic Transmission",
            desc: "Restricted authorization",
            icons: [FaCarSide],
          },
        ],
        error: "Please select an option",
      },
      step5: {
        title: "Which exam do you want to take?",
        options: [
          {
            key: "automatik-pruefung",
            label: "Automatic Exam",
            desc: "(recommended)",
            icon: FaCarSide,
          },
          {
            key: "schalt-pruefung",
            label: "Manual Transmission Exam",
            desc: "Authorized for all transmissions",
            icon: FaCog,
          },
        ],
        error: "Please select an exam type",
      },
      step6: {
        title: "Which practical course do you want?",
        theoryInfo: {
          title: "Theory Course - Intensive",
          description:
            "The theory course takes place in a compact, intensive format and optimally prepares you for the theory exam.",
        },
        practiceTitle: "Choose your practical course type:",
        options: [
          {
            key: "flexibel",
            label: "Flexible Practical Course",
            desc: "Learn at your own pace",
            icon: FaClock,
          },
          {
            key: "praxis-intensiv",
            label: "Practical Intensive Course",
            desc: "Quickly through practical training",
            icon: FaRocket,
          },
        ],
        error: "Please select a course type",
      },
      step7: {
        title: "Your selection at a glance",
        summary: {
          fahrzeugTyp: "Vehicle Type",
          name: "Name",
          fuehrerschein: "Driving License",
          getriebe: "Transmission",
          pruefung: "Exam",
          kursart: "Course Type",
        },
      },
      step8: {
        title: "Complete your registration",
        fields: {
          vorname: "First Name",
          nachname: "Last Name",
          geburtsdatum: "Date of Birth",
          geburtsstadt: "Place of Birth",
          telefon: "Phone Number",
          email: "Email",
          adresse: "Address",
          datenschutz: "I accept the privacy policy",
        },
        placeholders: {
          geburtsstadt: "Your place of birth",
          telefon: "+49 123 456789",
          email: "your@email.com",
          adresse: "Street, House number, ZIP, City",
        },
        error: {
          vorname: "First name is required",
          nachname: "Last name is required",
          geburtsdatum: "Date of birth is required",
          geburtsstadt: "Place of birth is required",
          telefon: "Phone number is required",
          email: "Email is required",
          adresse: "Address is required",
          datenschutz: "You must accept the privacy policy",
        },
      },
      step9: {
        title: "Congratulations!",
        subtitle: "Your registration was successful!",
        whatsapp: {
          title: "We will contact you",
          message:
            "You will soon receive a WhatsApp message with all further information about your course.",
        },
        thankYou: "Thank you for your trust!", // Without name
        thankYouDetail:
          "We look forward to accompanying you on your journey to obtaining your driver's license.",
        button: "Back to homepage",
      },
      friendDiscount: {
        explanation:
          "Bring a friend and you both get a discount of {rabattmenge}€. You just need to provide the name of the friend who is also booking a course with us. (Your friend should also mention your name so we can assign the discount.)",
        toggleLabel: "Claim friend discount",
        friendNameLabel: "Friend's name",
        friendNamePlaceholder: "Enter your friend's name",
        submitButton: "Submit",
        skipButton: "Skip",
      },
      bonus: {
        save: "Save {rabattmenge}€!",
        validUntil: "Only valid until {zeitlimit}h",
      },
    },
  },
  AR: {
    navigation: {
      back: "العودة",
      title: "التسجيل",
      stepOf: "الخطوة",
      von: "من",
    },
    buttons: {
      next: "التالي",
      submit: "سجل الآن",
    },
    steps: {
      step1: {
        title: "ما نوع رخصة القيادة التي تريد الحصول عليها؟",
        options: [
          { key: "auto", label: "سيارة (الفئة B)", icon: FaCar },
          { key: "motorrad", label: "دراجة نارية", icon: FaMotorcycle },
          {
            key: "auto-anhaenger",
            label: "سيارة مع مقطورة (BE)",
            icon: FaTruck,
          },
        ],
        error: "يرجى اختيار نوع المركبة",
      },
      step2: {
        title: "ما هو اسمك؟",
        fields: {
          vorname: "الاسم الأول",
          nachname: "اسم العائلة",
        },
        placeholders: {
          vorname: "اسمك الأول",
          nachname: "اسم عائلتك",
        },
        error: {
          vorname: "الاسم الأول مطلوب",
          nachname: "اسم العائلة مطلوب",
        },
      },
      step3: {
        title: "هل لديك بالفعل رخصة قيادة؟",
        options: {
          no: "لا، هذه أول رخصة قيادة لي",
          yes: "نعم، لدي بالفعل رخصة قيادة",
        },
        prerequisiteWarning: {
          title: "رخصة الفئة B مطلوبة",
          description:
            "رخصة قيادة صالحة من الفئة B مطلوبة لفئات رخصة القيادة BE و B96.",
        },
        descriptions: {
          no: "أنا سائق مبتدئ",
          yes: "أريد الحصول على فئة إضافية",
        },
        subTitle: "ما نوع رخصة القيادة التي لديك بالفعل؟",
        subOptions: [
          {
            value: "B (Auto)",
            desc: "الفئة B - سيارات حتى 3.5 طن",
            icon: FaCar,
          },
          {
            value: "BE (Auto mit Anhänger)",
            desc: "الفئة BE - سيارات مع مقطورة",
            icon: FaTruck,
          },
          {
            value: "Motorcycle",
            desc: "الفئة A/A1/A2 - دراجة نارية",
            icon: FaMotorcycle,
          },
        ],
      },

      // AR
      step3_5: {
        title: "ما الفئة المحددة التي تريدها؟",
        options: [
          // Für Anhänger
          {
            key: "be",
            label: "BE - مقطورة",
            desc: "رخصة مقطورة كلاسيكية",
            weight: "حتى 3500 كجم وزن إجمالي",
            icon: FaTrailer,
          },
          {
            key: "b96",
            label: "B96 - مقطورة خفيفة",
            desc: "تفويض موسع للسيارة",
            weight: "حتى 4250 كجم وزن إجمالي",
            icon: FaTrailer,
          },
          // Für Motorrad
          {
            key: "am",
            label: "AM - دراجة بخارية/سكوتر",
            desc: "دراجتان حتى 50 سم مكعب",
            weight: "حد أقصى 45 كم/ساعة",
            icon: FaMotorcycle,
          },
          {
            key: "a1",
            label: "A1 - دراجة نارية خفيفة",
            desc: "دراجات نارية حتى 125 سم مكعب",
            weight: "حد أقصى 11 كيلوواط (15 حصان)",
            icon: FaMotorcycle,
          },
          {
            key: "a2",
            label: "A2 - دراجات نارية متوسطة",
            desc: "دراجات نارية بقوة محدودة",
            weight: "حد أقصى 35 كيلوواط (48 حصان)",
            icon: FaMotorcycle,
          },
          {
            key: "a",
            label: "A - دراجات نارية ثقيلة",
            desc: "دراجات نارية غير محدودة",
            weight: "لا توجد قيود على القوة",
            icon: FaMotorcycle,
          },
        ],
        error: "يرجى اختيار فئة محددة",
      },

      step4: {
        title: "ماذا تريد أن تتعلم؟",
        options: [
          {
            key: "beide",
            label: "ناقل حركة أوتوماتيكي + يدوي",
            desc: "(موصى به)",
            icons: [FaCarSide, FaCog],
          },
          {
            key: "automatik",
            label: "ناقل حركة أوتوماتيكي فقط",
            desc: "تفويض محدود",
            icons: [FaCarSide],
          },
        ],
        error: "يرجى اختيار خيار",
      },
      step5: {
        title: "ما نوع الامتحان الذي تريد تقديمه؟",
        options: [
          {
            key: "automatik-pruefung",
            label: "امتحان أوتوماتيكي",
            desc: "(موصى به)",
            icon: FaCarSide,
          },
          {
            key: "schalt-pruefung",
            label: "امتحان ناقل حركة يدوي",
            desc: "مصرح لجميع أنواع النقل",
            icon: FaCog,
          },
        ],
        error: "يرجى اختيار نوع الامتحان",
      },
      step6: {
        title: "ما نوع الدورة العملية التي تريدها؟",
        theoryInfo: {
          title: "الدورة النظرية - مكثفة",
          description:
            "تتم الدورة النظرية في شكل مكثف ومضغوط وتعدك بشكل مثالي لامتحان النظرية.",
        },
        practiceTitle: "اختر نوع دورتك العملية:",
        options: [
          {
            key: "flexibel",
            label: "دورة عملية مرنة",
            desc: "تعلم بالسرعة التي تناسبك",
            icon: FaClock,
          },
          {
            key: "praxis-intensiv",
            label: "دورة عملية مكثفة",
            desc: "سريعًا من خلال التدريب العملي",
            icon: FaRocket,
          },
        ],
        error: "يرجى اختيار نوع الدورة",
      },
      step7: {
        title: "اختياراتك في لمحة",
        summary: {
          fahrzeugTyp: "نوع المركبة",
          name: "الاسم",
          fuehrerschein: "رخصة القيادة",
          getriebe: "ناقل الحركة",
          pruefung: "الامتحان",
          kursart: "نوع الدورة",
        },
      },
      step8: {
        title: "أكمل تسجيلك",
        fields: {
          vorname: "الاسم الأول",
          nachname: "اسم العائلة",
          geburtsdatum: "تاريخ الميلاد",
          geburtsstadt: "مكان الميلاد",
          telefon: "رقم الهاتف",
          email: "البريد الإلكتروني",
          adresse: "العنوان",
          datenschutz: "أوافق على سياسة الخصوصية",
        },
        placeholders: {
          geburtsstadt: "مكان ميلادك",
          telefon: "+49 123 456789",
          email: "بريدك@الإلكتروني.com",
          adresse: "الشارع، رقم المنزل، الرمز البريدي، المدينة",
        },
        error: {
          vorname: "الاسم الأول مطلوب",
          nachname: "اسم العائلة مطلوب",
          geburtsdatum: "تاريخ الميلاد مطلوب",
          geburtsstadt: "مكان الميلاد مطلوب",
          telefon: "رقم الهاتف مطلوب",
          email: "البريد الإلكتروني مطلوب",
          adresse: "العنوان مطلوب",
          datenschutz: "يجب أن توافق على سياسة الخصوصية",
        },
      },
      step9: {
        title: " تهانينا!",
        subtitle: "تم تسجيلك بنجاح!",
        whatsapp: {
          title: "سنتواصل معك",
          message:
            "ستتلقى قريبًا رسالة WhatsApp تحتوي على جميع المعلومات الإضافية حول دورتك.",
        },
        thankYou: "شكرًا لثقتك بنا!", // بدون اسم
        thankYouDetail: "نتطلع إلى مرافقتك في طريقك للحصول على رخصة القيادة.",
        button: "العودة إلى الصفحة الرئيسية",
      },
      friendDiscount: {
        explanation:
          "أحضر صديقًا معك وستحصلان كلاكما على خصم قدره {rabattmenge}€. كل ما عليك فعله هو تقديم اسم الصديق الذي سيحجز دورة معنا أيضًا. (يجب على صديقك أيضًا ذكر اسمك حتى نتمكن من تخصيص الخصم.)",
        toggleLabel: "المطالبة بخصم الأصدقاء",
        friendNameLabel: "اسم الصديق",
        friendNamePlaceholder: "أدخل اسم صديقك",
        submitButton: "إرسال",
        skipButton: "تخطي",
      },
      bonus: {
        save: "وفر €{rabattmenge}!",
        validUntil: "صالح فقط حتى الساعة {zeitlimit}",
      },
    },
  },
};

const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
    <div
      className="bg-[#F5BB00] h-2 rounded-full transition-all duration-500"
      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
    />
  </div>
);

const AnmeldungPage = () => {
  const { selectedLanguage } = useLanguage();
  const langContent = content[selectedLanguage] || content.DE;
  const { data: bonusData } = useApiData("bonus");

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fahrzeugTyp: "",
    vorname: "",
    nachname: "",
    hatFuehrerschein: false,
    spezifischeKlasse: "",
    fuehrerscheinTyp: "",
    getriebe: "",
    pruefung: "",
    kursart: "",
    geburtsdatum: "",
    geburtsstadt: "",
    telefon: "",
    email: "",
    adresse: "",
    datenschutz: false,
  });
  const [errors, setErrors] = useState({});
  const [isFriendDiscount, setIsFriendDiscount] = useState(false);
  const [friendName, setFriendName] = useState("");

  const totalSteps = 10;

  const activeBonus = bonusData?.forAll?.aktiv
    ? {
        rabattmenge: bonusData.forAll.rabattmenge,
        zeitlimit: bonusData.forAll.zeitlimit,
      }
    : bonusData?.forFriend?.aktiv
    ? {
        rabattmenge: bonusData.forFriend.rabattmenge,
        zeitlimit: bonusData.forFriend.zeitlimit,
      }
    : null;

  const handleGoBack = () => {
    if (currentStep > 1) {
      // Von Step 3.5 zurück zu Step 3
      if (currentStep === 3.5) {
        setCurrentStep(3);
      }
      // Von Step 6 bei Motorrad zurück zu Step 3.5
      else if (currentStep === 6 && formData.fahrzeugTyp === "motorrad") {
        setCurrentStep(3.5);
      }
      // Von Step 4 bei Anhänger zurück zu Step 3.5
      else if (currentStep === 4 && formData.fahrzeugTyp === "auto-anhaenger") {
        setCurrentStep(3.5);
      }
      // Rest der bestehenden Logik...
      else {
        setCurrentStep(currentStep - 1);
      }
    } else {
      window.history.back();
    }
  };

  const validateStep = () => {
    const newErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.fahrzeugTyp)
          newErrors.fahrzeugTyp = langContent.steps.step1.error;
        break;
      case 2:
        if (!formData.vorname.trim())
          newErrors.vorname = langContent.steps.step2.error.vorname;
        if (!formData.nachname.trim())
          newErrors.nachname = langContent.steps.step2.error.nachname;
        break;
      case 3.5:
        if (!formData.spezifischeKlasse)
          newErrors.spezifischeKlasse = langContent.steps.step3_5.error;
        break;
      case 4:
        if (!formData.getriebe)
          newErrors.getriebe = langContent.steps.step4.error;
        break;
      case 5:
        if (!formData.pruefung)
          newErrors.pruefung = langContent.steps.step5.error;
        break;
      case 6:
        if (!formData.kursart)
          newErrors.kursart = langContent.steps.step6.error;
        break;
      case 8:
        if (!formData.vorname.trim())
          newErrors.vorname = langContent.steps.step8.error.vorname;
        if (!formData.nachname.trim())
          newErrors.nachname = langContent.steps.step8.error.nachname;
        if (!formData.geburtsdatum)
          newErrors.geburtsdatum = langContent.steps.step8.error.geburtsdatum;
        if (!formData.geburtsstadt.trim())
          newErrors.geburtsstadt = langContent.steps.step8.error.geburtsstadt;
        if (!formData.telefon.trim())
          newErrors.telefon = langContent.steps.step8.error.telefon;
        if (!formData.email.trim())
          newErrors.email = langContent.steps.step8.error.email;
        if (!formData.adresse.trim())
          newErrors.adresse = langContent.steps.step8.error.adresse;
        if (!formData.datenschutz)
          newErrors.datenschutz = langContent.steps.step8.error.datenschutz;
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const nextStep = () => {
    if (validateStep()) {
      // Motorrad: Von Step 2 direkt zu Step 3.5 (überspringt Step 3)
      if (currentStep === 2 && formData.fahrzeugTyp === "motorrad") {
        setCurrentStep(3.5);
      }
      // Auto: Von Step 2 direkt zu Step 4 (überspringt Step 3)
      else if (currentStep === 2 && formData.fahrzeugTyp === "auto") {
        setCurrentStep(4);
      }
      // Anhänger: Von Step 2 zu Step 3 (normale Reihenfolge)
      else if (currentStep === 2 && formData.fahrzeugTyp === "auto-anhaenger") {
        setCurrentStep(3);
      }
      // Nach Step 3: Nur noch Anhänger (da Motorrad Step 3 überspringt)
      else if (currentStep === 3 && formData.fahrzeugTyp === "auto-anhaenger") {
        setCurrentStep(3.5);
      }
      // Nach Step 3.5: Gehe zu entsprechendem nächsten Step
      else if (currentStep === 3.5) {
        if (formData.fahrzeugTyp === "motorrad") {
          setCurrentStep(6); // Motorrad überspringt Step 4 und 5
        } else {
          setCurrentStep(4); // Anhänger geht zu Step 4
        }
      }
      // Rest der bestehenden Logik...
      else {
        setCurrentStep(currentStep + 1);
      }
    }
  };
  const handleSubmit = async () => {
    if (validateStep()) {
      try {
        const rabattText = bonusData?.forAll?.aktiv
          ? `Die Person hat einen Rabatt von ${activeBonus.rabattmenge}€`
          : "";
        let freundeRabattText = "";
        let nameVonFreundText = "";
        if (isFriendDiscount) {
          freundeRabattText = bonusData?.forFriend?.rabattmenge
            ? `Die Person hat einen Freunderabatt von ${bonusData.forFriend.rabattmenge}€`
            : "";
          nameVonFreundText = friendName
            ? `Der eingeladene Freund heißt ${friendName}`
            : "";
        }

        // Temporarily log the email data to the console instead of sending an email
        // console.log({
        //   vorname: formData.vorname,
        //   nachname: formData.nachname,
        //   email: formData.email,
        //   telefon: formData.telefon,
        //   geburtsdatum: formData.geburtsdatum,
        //   geburtsstadt: formData.geburtsstadt,
        //   adresse: formData.adresse,
        //   fahrzeugTyp: formData.fahrzeugTyp,
        //   spezifischeKlasse: formData.spezifischeKlasse,
        //   hatFuehrerschein: formData.hatFuehrerschein ? "Ja" : "Nein",
        //   fuehrerscheinTyp: formData.fuehrerscheinTyp,
        //   getriebe: formData.getriebe,
        //   pruefung: formData.pruefung,
        //   kursart: formData.kursart,
        //   rabatt: rabattText,
        //   freundeRabatt: freundeRabattText,
        //   nameVonFreund: nameVonFreundText,
        // });

        // E-Mail an Fahrschule senden
        await emailjs.send(
          SERVICE_ID, // Service ID (String)
          TEMPLATE_ID, // Template ID (String)
          {
            // Parameter (Object)
            vorname: formData.vorname,
            nachname: formData.nachname,
            email: formData.email,
            telefon: formData.telefon,
            geburtsdatum: formData.geburtsdatum,
            geburtsstadt: formData.geburtsstadt,
            adresse: formData.adresse,
            fahrzeugTyp: formData.fahrzeugTyp,
            spezifischeKlasse: formData.spezifischeKlasse,
            hatFuehrerschein: formData.hatFuehrerschein ? "Ja" : "Nein",
            fuehrerscheinTyp: formData.fuehrerscheinTyp,
            getriebe: formData.getriebe,
            pruefung: formData.pruefung,
            kursart: formData.kursart,
            rabatt: rabattText,
            freundeRabatt: freundeRabattText,
            nameVonFreund: nameVonFreundText,
          },
          PUBLIC_KEY // Public Key (String)
        );

        setCurrentStep(9);
      } catch (error) {
        alert("Fehler bei der Anmeldung. Bitte versuchen Sie es erneut.");
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={langContent.steps.step1}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={langContent.steps.step2}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={langContent.steps.step3}
          />
        );
      case 3.5:
        // Filtere Optionen basierend auf Fahrzeugtyp
        const filteredOptions = langContent.steps.step3_5.options.filter(
          (option) => {
            if (formData.fahrzeugTyp === "auto-anhaenger") {
              return ["be", "b96"].includes(option.key);
            } else if (formData.fahrzeugTyp === "motorrad") {
              return ["am", "a1", "a2", "a"].includes(option.key);
            }
            return false;
          }
        );

        return (
          <Step3_5
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={{
              ...langContent.steps.step3_5,
              options: filteredOptions,
            }}
          />
        );
      case 4:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={langContent.steps.step4}
          />
        );
      case 5:
        return (
          <Step5
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={langContent.steps.step5}
          />
        );
      case 6:
        return (
          <Step6
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={langContent.steps.step6}
          />
        );
      case 7:
        return (
          <Step7 formData={formData} langContent={langContent.steps.step7} />
        );
      case 8:
        return (
          <>
            <Step8
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              langContent={langContent.steps.step8}
            />
            {bonusData?.forFriend?.aktiv && (
              <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                <p className="text-sm text-gray-700 mb-4">
                  {langContent.steps.friendDiscount.explanation.replace(
                    "{rabattmenge}",
                    bonusData?.forFriend?.rabattmenge || 0
                  )}
                </p>
                <label className="flex items-center space-x-2 mb-4">
                  <input
                    type="checkbox"
                    checked={isFriendDiscount}
                    onChange={(e) => setIsFriendDiscount(e.target.checked)}
                    className="form-checkbox h-5 w-5 text-yellow-500"
                  />
                  <span>{langContent.steps.friendDiscount.toggleLabel}</span>
                </label>
                {isFriendDiscount && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {langContent.steps.friendDiscount.friendNameLabel}
                    </label>
                    <input
                      type="text"
                      value={friendName}
                      onChange={(e) => setFriendName(e.target.value)}
                      className="form-input w-full border-gray-300 rounded-lg shadow-sm"
                      placeholder={
                        langContent.steps.friendDiscount.friendNamePlaceholder
                      }
                    />
                  </div>
                )}
                {isFriendDiscount && (
                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(true); // Button als eingereicht markieren
                      }}
                      disabled={isSubmitted} // Button deaktivieren, wenn eingereicht
                      className={`px-4 py-2 rounded-lg font-semibold ${
                        isSubmitted
                          ? "bg-green-500 text-white cursor-not-allowed"
                          : "bg-yellow-500 text-black hover:bg-yellow-600"
                      }`}
                    >
                      {isSubmitted ? (
                        <span className="flex items-center space-x-2">
                          <FaCheck className="text-white" />
                          <span></span>
                        </span>
                      ) : (
                        langContent.steps.friendDiscount.submitButton
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        );
      case 9:
        return (
          <Step9 formData={formData} langContent={langContent.steps.step9} />
        );
      default:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={langContent.steps.step1}
          />
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Anmeldung Führerschein Lüneburg – Jetzt Platz sichern bei Scooldrive
        </title>
        <meta
          name="description"
          content="Jetzt für den Führerschein anmelden: Schnelle und unkomplizierte Anmeldung bei der Fahrschule Scooldrive Lüneburg. Einfach das Formular ausfüllen und Fahrstunden sichern!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Anmeldung Führerschein Lüneburg – Jetzt Platz sichern bei Scooldrive"
        />
        <meta
          property="og:description"
          content="Melde dich einfach online für deinen Führerschein in Lüneburg an – bei der Fahrschule Scooldrive. Jetzt starten und Fahrstunden sichern!"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/anmelden"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Anmeldung Führerschein Lüneburg – Jetzt Platz sichern bei Scooldrive"
        />
        <meta
          name="twitter:description"
          content="Jetzt online anmelden für den Führerschein bei Scooldrive Lüneburg und direkt durchstarten!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/anmelden"
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Header mit Zurück-Button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-40">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoBack}
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <FaArrowLeft className="text-xl" />
              <span className="text-lg">{langContent.navigation.back}</span>
            </motion.button>
            <div
              className={`${
                activeBonus ? "mr-[0%]" : " mr-[15%] sm:mr-[10%]"
              } text-center`}
            >
              <h1 className="text-xl font-bold">
                {langContent.navigation.title}
              </h1>
              <p className="text-sm text-gray-600">
                {langContent.navigation.stepOf} {currentStep}{" "}
                {langContent.navigation.von} {totalSteps}
              </p>
            </div>
            <div>
              {activeBonus && (
                <div className="flex-shrink-0 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-md text-right">
                  <p className="font-semibold">
                    {langContent.steps.bonus.save.replace(
                      "{rabattmenge}",
                      activeBonus.rabattmenge
                    )}
                  </p>
                  <p className="text-sm">
                    {langContent.steps.bonus.validUntil.replace(
                      "{zeitlimit}",
                      activeBonus.zeitlimit
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12">
            {currentStep < totalSteps && currentStep !== 9 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={currentStep === 8 ? handleSubmit : nextStep}
                className="bg-[#F5BB00] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors flex items-center space-x-2"
              >
                <span>
                  {currentStep === 8
                    ? langContent.buttons.submit
                    : langContent.buttons.next}
                </span>
                {currentStep === 8 ? (
                  <FaCheck />
                ) : (
                  <FaArrowLeft className="rotate-180" />
                )}
              </motion.button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnmeldungPage;
