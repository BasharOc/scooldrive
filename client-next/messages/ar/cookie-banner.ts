import type { CookieBannerContent } from "@/components/CookieBanner/types";

export const COOKIE_BANNER_AR: CookieBannerContent = {
  title: "إعدادات ملفات تعريف الارتباط",
  description:
    "نستخدم ملفات تعريف الارتباط لنقدم لك أفضل تجربة ممكنة على موقعنا الإلكتروني. بعضها ضروري للوظائف، والبعض الآخر يساعدنا على تحسين الموقع وعرض محتوى ذي صلة لك.",
  buttons: {
    acceptAll: "قبول الكل",
    onlyNecessary: "الضرورية فقط",
    settings: "الإعدادات",
    saveSettings: "حفظ الإعدادات",
    backToSimple: "← العودة إلى العرض البسيط",
  },
  detailsDescription: "اختر ملفات تعريف الارتباط التي تريد قبولها:",
  cookies: {
    necessary: {
      title: "ملفات تعريف الارتباط الضرورية",
      badge: "مطلوبة",
      description:
        "هذه الملفات مطلوبة للوظائف الأساسية للموقع ولا يمكن إلغاؤها.",
      examples: "أمثلة: إدارة الجلسة، الأمان، الوظائف الأساسية",
    },
    analytics: {
      title: "التحليلات والأداء",
      description:
        "تساعدنا على فهم كيفية تفاعل الزوار مع الموقع (Google Analytics).",
      examples:
        "أمثلة: مشاهدات الصفحة، الوقت المقضي، إحصائيات المستخدمين المجهولة",
    },
    marketing: {
      title: "التسويق والإعلان",
      description: "تُستخدم لعرض إعلانات ذات صلة ومحتوى مخصص لك.",
      examples:
        "أمثلة: إعادة الاستهداف، الإعلانات المخصصة، تكامل وسائل التواصل الاجتماعي",
    },
  },
  footer: "يمكن العثور على مزيد من المعلومات في",
  privacyLink: "سياسة الخصوصية",
};
