export const NAVBAR_AR = {
  languageCode: "AR",
  branchLabel: "فرعك",
  branchName: "Lüneburg",
  menuLabel: "القائمة",
  logoAlt: "شعار مدرسة القيادة سكولدرايف لونيبورغ",
  trailerAlt: "رخصة قيادة مقطورة فئة BE – سيارة مع مقطورة في لونيبورغ",
  homePath: "/",
  fuehrerscheinPath: "/fuehrerschein",
  anmeldenPath: "/anmelden",
  fuehrerschein: "الحصول على رخصة القيادة",
  termine: "المواعيد والمعلومات",
  anmelden: "سجّل الآن",
  fuehrerscheinBanner: {
    text: "رخصة القيادة الخاصة بك في انتظارك!",
    button: "ابدأ التخصيص الآن",
  },
  fuehrerscheinItems: [
    {
      title: "رخصة السيارة",
      description: "الفئة B - رخصة قيادة السيارات",
      path: "/auto-fuehrerschein",
    },
    {
      title: "سيارة مع مقطورة",
      description: "الفئة BE - سيارة مع مقطورة",
      path: "/auto-anhaenger",
    },
    {
      title: "رخصة الدراجة النارية",
      description: "الفئة A - رخصة قيادة الدراجات النارية",
      path: "/motorrad-fuehrerschein",
    },
  ],
  termineItems: [
    {
      title: "دورة نظرية",
      description: "مواعيد الدورة النظرية",
      path: "/theoriekurs",
    },
    {
      title: "دورات مكثفة",
      description: "احصل على رخصتك بسرعة",
      path: "/intensivkurse",
    },
    {
      title: "الأسعار",
      description: "جميع الأسعار في لمحة",
      path: "/preise",
    },
    {
      title: "تقليل النقاط",
      description: "كيفية تقليل النقاط",
      path: "/punkte-abbauen",
    },
    {
      title: "المدونة",
      description: "نصائح حول رخصة القيادة.",
      path: "/blogs",
    },
  ],
} as const;
