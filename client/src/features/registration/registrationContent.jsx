import {
  FaCar,
  FaMotorcycle,
  FaTruck,
  FaTrailer,
  FaCarSide,
  FaCog,
  FaClock,
  FaRocket,
} from "react-icons/fa";

export const registrationContent = {
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
