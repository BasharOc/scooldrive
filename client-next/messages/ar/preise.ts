export const PREISE_AR = {
  seo: {
    title: "أسعار مدرسة القيادة في لونيبورغ – تكاليف الرخصة لدى Scooldrive",
    description:
      "أسعار شفافة لرخصة القيادة في لونيبورغ: جميع تكاليف رخصة السيارة والدراجة النارية والمقطورة في نظرة واحدة.",
  },
  header: {
    title: "أسعارنا",
    highlight: "",
    subtitle:
      "أسعار شفافة بدون تكاليف مخفية. اختر فئة الرخصة الخاصة بك واحصل على نظرة عامة مفصلة على التكاليف.",
  },
  licenses: {
    pkw: "السيارة (الفئة B)",
    motorrad: "الدراجة النارية (الفئة A/A1/A2/AM)",
    anhanger: "المقطورة (الفئة BE)",
    b96: "المقطورة (الفئة B96)",
    b196: "الدراجة النارية الخفيفة (الفئة B196)",
  },
  prerequisite: "رخصة الفئة B مطلوبة",
  sections: {
    basePrices: "الأسعار الأساسية",
    baseFee: "الرسوم الأساسية",
    learningApp: "تطبيق التعلم",
    practiceLesson: "درس التدريب",
    specialDrives: "الرحلات الخاصة",
    ruralRoad: "رحلة خارجية",
    highway: "الطريق السريع",
    nightDrive: "القيادة الليلية",
    theoryExam: "امتحان النظرية",
    practicalExam: "الامتحان العملي",
    schoolTotal: "الإجمالي (مدرسة القيادة)",
    extraCosts: "تكاليف إضافية للجهات والامتحانات",
    extraCostsTotal: "إجمالي التكاليف الإضافية:",
    totalCosts: "إجمالي التكاليف",
  },
  calculations: {
    lessons: "دروس",
    total: "إجمالي",
  },
  extraCosts: [
    {
      key: "fuehrerscheinantrag",
      name: "طلب الرخصة",
      fallbackPrice: 43.4,
    },
    { key: "sehtest", name: "فحص النظر", fallbackPrice: 6.43 },
    {
      key: "ersteHilfeKurs",
      name: "دورة الإسعافات الأولية",
      fallbackPrice: 45,
    },
    { key: "passbild", name: "صورة جواز السفر", fallbackPrice: 10 },
  ],
  warning: {
    title: "ملاحظات مهمة:",
    points: [
      {
        label: "التكاليف الفردية",
        text: "قد يختلف السعر النهائي حسب المهارات الشخصية والدروس الإضافية المطلوبة",
      },
      {
        label: "الدفع المرن",
        text: "تدفع فقط مقابل كل درس قيادة مكتمل - لا يوجد دفع مسبق للمبلغ الإجمالي",
      },
      {
        label: "الشفافية",
        text: "لا توجد تكاليف مخفية - تحتفظ دائماً بالسيطرة على نفقاتك",
      },
    ],
  },
  finalSection: {
    description: "جميع التكاليف مفصلة بشفافية",
    cta: "سجل الآن وابدأ!",
  },
} as const;
