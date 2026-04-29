import {
  FaCar,
  FaCarSide,
  FaClock,
  FaCog,
  FaMotorcycle,
  FaRocket,
  FaTrailer,
  FaTruck,
} from "react-icons/fa";
import type { RegistrationLocaleContent } from "@/components/Registration/types";

export const REGISTRATION_AR: RegistrationLocaleContent = {
  seo: {
    title: "التسجيل لرخصة القيادة في لونيبورغ | Scooldrive",
    description:
      "سجل الآن للحصول على رخصة القيادة: تسجيل سريع وسهل مع مدرسة القيادة Scooldrive في لونيبورغ. أكمل النموذج واحجز دروسك.",
  },
  capacitySeo: {
    title: "تم الوصول إلى الحد الأقصى للسعة | Scooldrive Lüneburg",
    description:
      "جميع الأماكن محجوزة حالياً. يرجى المحاولة مرة أخرى لاحقاً أو العودة إلى الصفحة الرئيسية.",
  },
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
    step3_5: {
      title: "ما الفئة المحددة التي تريدها؟",
      options: [
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
      thankYou: "شكرًا لثقتك بنا!",
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
  capacity: {
    title: "تم الوصول إلى الحد الأقصى للسعة",
    subtitle: "نأسف لذلك!",
    message: "جميع الأماكن محجوزة حالياً. يرجى المحاولة مرة أخرى في وقت لاحق.",
    button: "العودة إلى الصفحة الرئيسية",
  },
  submissionError: "حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.",
};
