import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

const content = {
  DE: {
    title: "Impressum",
    sections: [
      {
        heading: "Angaben gemäß § 5 TMG:",
        details: [
          "Fahrschule Scool Drive GbR",
          "Inhaber: Renin Salman",
          "Haagestraße 3",
          "Lüneburg",
          "Telefon: 041318983700",
          "E-Mail: salman@scooldrive.com",
        ],
      },
      {
        heading: "Zulassung/Aufsichtsbehörde:",
        details: [
          "Landkreis Lüneburg, Straßenverkehrsamt",
          "Auf dem Michaeliskloster 4",
          "21335 Lüneburg",
        ],
      },
      {
        heading: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:",
        details: ["Renin Salman, Anschrift wie oben"],
      },
    ],
  },
  EN: {
    title: "Legal Notice",
    sections: [
      {
        heading: "Information according to § 5 TMG:",
        details: [
          "Driving School Scool Drive GbR",
          "Owner: Renin Salman",
          "Haagestraße 3",
          "Lüneburg",
          "Phone: 041318983700",
          "Email: salman@scooldrive.com",
        ],
      },
      {
        heading: "Approval/Supervisory Authority:",
        details: [
          "District of Lüneburg, Road Traffic Office",
          "Auf dem Michaeliskloster 4",
          "21335 Lüneburg",
        ],
      },
      {
        heading: "Responsible for content according to § 55 Abs. 2 RStV:",
        details: ["Renin Salman, address as above"],
      },
    ],
  },
  AR: {
    title: "الإشعار القانوني",
    sections: [
      {
        heading: "المعلومات وفقًا لـ § 5 TMG:",
        details: [
          "مدرسة القيادة Scool Drive GbR",
          "المالك: رينين سلمان",
          "Haagestraße 3",
          "لونيبورغ",
          "الهاتف: 041318983700",
          "البريد الإلكتروني: salman@scooldrive.com",
        ],
      },
      {
        heading: "الموافقة / السلطة الإشرافية:",
        details: [
          "مقاطعة لونيبورغ، مكتب المرور على الطرق",
          "Auf dem Michaeliskloster 4",
          "21335 لونيبورغ",
        ],
      },
      {
        heading: "المسؤول عن المحتوى وفقًا لـ § 55 Abs. 2 RStV:",
        details: ["رينين سلمان، العنوان كما هو مذكور أعلاه"],
      },
    ],
  },
};

export const Impressum = () => {
  const { selectedLanguage } = useLanguage();
  const langContent =
    datenschutzContent[selectedLanguage] || datenschutzContent.DE;

  return (
    <>
      <Helmet>
        <title>Impressum – Fahrschule Scooldrive Lüneburg</title>
        <meta
          name="description"
          content="Impressum der Fahrschule Scooldrive in Lüneburg. Anbieterkennzeichnung und rechtliche Informationen gemäß §5 TMG."
        />
        <meta
          property="og:title"
          content="Impressum – Fahrschule Scooldrive Lüneburg"
        />
        <meta
          property="og:description"
          content="Rechtliche Angaben und Kontaktinformationen der Fahrschule Scooldrive in Lüneburg."
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/impressum"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Impressum – Fahrschule Scooldrive Lüneburg"
        />
        <meta
          name="twitter:description"
          content="Impressum und rechtliche Hinweise der Fahrschule Scooldrive Lüneburg."
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/impressum"
        />
      </Helmet>

      <motion.div
        className="min-h-screen bg-white p-8 pt-[100px] mt-[100px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8 border-b-4 border-[#F5BB00] pb-4">
            {langContent.title}
          </h1>

          <div className="prose max-w-none">
            {langContent.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-2xl font-bold text-black mb-4">
                  {section.heading}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  {section.details.map((detail, idx) => (
                    <p key={idx} className="mb-2">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const datenschutzContent = {
  DE: {
    title: "Datenschutzerklärung",
    sections: [
      {
        heading: "1. Verantwortliche Stelle",
        details: [
          "Scool Drive",
          "Inhaber: Renin Salman",
          "Haagestraße 3",
          "Lüneburg",
          "E-Mail: salman@scooldrive.com",
        ],
      },
      {
        heading: "2. Erhebung und Verarbeitung personenbezogener Daten",
        details: [
          "Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.",
          "Wenn Sie das Anmeldeformular nutzen, werden die von Ihnen eingegebenen Daten (Vorname, Nachname, Geburtsdatum, Geburtsort, Adresse, Telefonnummer, E-Mail) ausschließlich zur Bearbeitung Ihrer Anmeldung verarbeitet.",
          "Ihre Daten werden per E-Mail an uns übermittelt und für die Dauer der Bearbeitung und gesetzlichen Aufbewahrungsfristen gespeichert.",
        ],
      },
      {
        heading: "3. Freundschaftsrabatt",
        details: [
          "Wenn Sie den Freundschaftsrabatt nutzen möchten, müssen Sie den Namen Ihres Freundes im Anmeldeformular angeben.",
          "Ihr Freund, der sich anmeldet, muss ebenfalls Ihren Namen im Anmeldeformular angeben.",
          "Der Rabatt ist nur gültig, wenn beide Namen übereinstimmen und in den Anmeldungen erscheinen.",
          "Sollte der angegebene Name bei den Anmeldungen nicht erscheinen, wird der Rabatt nicht gewährt.",
        ],
      },
      {
        heading: "4. Kontaktaufnahme per WhatsApp",
        details: [
          "Auf unserer Website bieten wir Ihnen die Möglichkeit, direkt per WhatsApp mit uns in Kontakt zu treten.",
          "Es gelten die Datenschutzbestimmungen von WhatsApp.",
        ],
      },
      {
        heading: "5. Verwendung von Google Analytics",
        details: [
          "Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited.",
          "Google Analytics verwendet Cookies, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website ermöglichen.",
        ],
      },
      {
        heading: "6. Server-Log-Dateien",
        details: [
          "Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien.",
          "Diese Daten sind nicht bestimmten Personen zuordenbar und werden nach spätestens 14 Tagen gelöscht.",
        ],
      },
      {
        heading: "7. Cookies",
        details: [
          "Unsere Website verwendet teilweise Cookies, um den Besuch nutzerfreundlicher zu gestalten.",
          "Sie werden im Cookie-Banner über die Nutzung informiert und können Ihre Einwilligung verwalten.",
        ],
      },
      {
        heading: "8. Rechte der betroffenen Personen",
        details: [
          "Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten.",
          "Ferner können Sie eine einmal erteilte Einwilligung jederzeit widerrufen.",
        ],
      },
      {
        heading: "9. SSL-Verschlüsselung",
        details: [
          "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.",
        ],
      },
      {
        heading: "10. Widerspruch Werbe-Mails",
        details: [
          "Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung wird widersprochen.",
        ],
      },
    ],
  },
  EN: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Responsible Entity",
        details: [
          "Scool Drive",
          "Owner: Renin Salman",
          "Haagestraße 3",
          "Lüneburg",
          "Email: salman@scooldrive.com",
        ],
      },
      {
        heading: "2. Collection and Processing of Personal Data",
        details: [
          "Using our website is generally possible without providing personal data.",
          "If you use the registration form, the data you enter (first name, last name, date of birth, place of birth, address, phone number, email) will be processed exclusively for handling your registration.",
          "Your data will be transmitted via email and stored for the duration of processing and legal retention periods.",
        ],
      },
      {
        heading: "3. Friendship Discount",
        details: [
          "If you want to use the friendship discount, you must enter your friend's name in the registration form.",
          "Your friend, who registers, must also enter your name in their registration form.",
          "The discount is only valid if both names match and appear in the registrations.",
          "If the specified name does not appear in the registrations, the discount will not be granted.",
        ],
      },
      {
        heading: "4. Contact via WhatsApp",
        details: [
          "Our website allows you to contact us directly via WhatsApp.",
          "WhatsApp's privacy policy applies.",
        ],
      },
      {
        heading: "5. Use of Google Analytics",
        details: [
          "This website uses Google Analytics, a web analytics service provided by Google Ireland Limited.",
          "Google Analytics uses cookies stored on your computer to analyze website usage.",
        ],
      },
      {
        heading: "6. Server Log Files",
        details: [
          "The provider of the pages automatically collects and stores information in server log files.",
          "These data cannot be assigned to specific individuals and are deleted after 14 days at the latest.",
        ],
      },
      {
        heading: "7. Cookies",
        details: [
          "Our website uses cookies to make the visit more user-friendly.",
          "You will be informed about their use in the cookie banner and can manage your consent.",
        ],
      },
      {
        heading: "8. Rights of Affected Persons",
        details: [
          "You have the right to information about your personal data stored with us.",
          "Furthermore, you can revoke consent at any time.",
        ],
      },
      {
        heading: "9. SSL Encryption",
        details: [
          "This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content.",
        ],
      },
      {
        heading: "10. Objection to Advertising Emails",
        details: [
          "The use of contact data published as part of the imprint obligation for sending unsolicited advertising is objected to.",
        ],
      },
    ],
  },
  AR: {
    title: "سياسة الخصوصية",
    sections: [
      {
        heading: "1. الكيان المسؤول",
        details: [
          "Scool Drive",
          "المالك: رينين سلمان",
          "Haagestraße 3",
          "لونيبورغ",
          "البريد الإلكتروني: salman@scooldrive.com",
        ],
      },
      {
        heading: "2. جمع ومعالجة البيانات الشخصية",
        details: [
          "استخدام موقعنا ممكن بشكل عام دون تقديم بيانات شخصية.",
          "إذا استخدمت نموذج التسجيل، فسيتم معالجة البيانات التي تدخلها (الاسم الأول، الاسم الأخير، تاريخ الميلاد، مكان الميلاد، العنوان، رقم الهاتف، البريد الإلكتروني) حصريًا لمعالجة تسجيلك.",
          "سيتم إرسال بياناتك عبر البريد الإلكتروني وتخزينها لمدة المعالجة وفترات الاحتفاظ القانونية.",
        ],
      },
      {
        heading: "3. خصم الصداقة",
        details: [
          "إذا كنت ترغب في الاستفادة من خصم الصداقة، يجب عليك إدخال اسم صديقك في نموذج التسجيل.",
          "يجب على صديقك الذي يسجل أيضًا إدخال اسمك في نموذج التسجيل الخاص به.",
          "الخصم صالح فقط إذا تطابقت الأسماء وظهرت في التسجيلات.",
          "إذا لم يظهر الاسم المحدد في التسجيلات، فلن يتم منح الخصم.",
        ],
      },
      {
        heading: "4. الاتصال عبر WhatsApp",
        details: [
          "يتيح لك موقعنا الاتصال بنا مباشرة عبر WhatsApp.",
          "تنطبق سياسة الخصوصية الخاصة بـ WhatsApp.",
        ],
      },
      {
        heading: "5. استخدام Google Analytics",
        details: [
          "يستخدم هذا الموقع Google Analytics، وهي خدمة تحليل ويب تقدمها Google Ireland Limited.",
          "يستخدم Google Analytics ملفات تعريف الارتباط المخزنة على جهاز الكمبيوتر الخاص بك لتحليل استخدام الموقع.",
        ],
      },
      {
        heading: "6. ملفات سجل الخادم",
        details: [
          "يقوم مزود الصفحات بجمع وتخزين المعلومات تلقائيًا في ملفات سجل الخادم.",
          "لا يمكن تخصيص هذه البيانات لأفراد معينين ويتم حذفها بعد 14 يومًا كحد أقصى.",
        ],
      },
      {
        heading: "7. ملفات تعريف الارتباط",
        details: [
          "يستخدم موقعنا ملفات تعريف الارتباط لجعل الزيارة أكثر سهولة للمستخدم.",
          "سيتم إعلامك باستخدامها في لافتة ملفات تعريف الارتباط ويمكنك إدارة موافقتك.",
        ],
      },
      {
        heading: "8. حقوق الأشخاص المعنيين",
        details: [
          "لديك الحق في الحصول على معلومات حول بياناتك الشخصية المخزنة لدينا.",
          "علاوة على ذلك، يمكنك إلغاء الموافقة في أي وقت.",
        ],
      },
      {
        heading: "9. تشفير SSL",
        details: [
          "يستخدم هذا الموقع تشفير SSL أو TLS لأسباب أمنية ولحماية نقل المحتوى السري.",
        ],
      },
      {
        heading: "10. الاعتراض على رسائل البريد الإلكتروني الإعلانية",
        details: [
          "يتم الاعتراض على استخدام بيانات الاتصال المنشورة كجزء من التزام الطباعة لإرسال الإعلانات غير المرغوب فيها.",
        ],
      },
    ],
  },
};

// Datenschutz Component
export const Datenschutz = () => {
  const { selectedLanguage } = useLanguage();
  const langContent =
    datenschutzContent[selectedLanguage] || datenschutzContent.DE;

  return (
    <>
      <Helmet>
        <title>Datenschutz – Fahrschule Scooldrive Lüneburg</title>
        <meta
          name="description"
          content="Datenschutzerklärung der Fahrschule Scooldrive Lüneburg. Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO."
        />
        <meta
          property="og:title"
          content="Datenschutz – Fahrschule Scooldrive Lüneburg"
        />
        <meta
          property="og:description"
          content="Erfahren Sie mehr über Datenschutz und Datensicherheit bei der Fahrschule Scooldrive Lüneburg."
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/datenschutz"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Datenschutz – Fahrschule Scooldrive Lüneburg"
        />
        <meta
          name="twitter:description"
          content="Datenschutz und Datensicherheit bei der Fahrschule Scooldrive Lüneburg."
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/datenschutz"
        />
      </Helmet>
      <motion.div
        className={`min-h-screen bg-white p-8 pt-[100px] mt-[100px] ${
          selectedLanguage === "AR" ? "text-right" : "text-left"
        }`}
        dir={selectedLanguage === "AR" ? "rtl" : "ltr"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8 border-b-4 border-[#F5BB00] pb-4">
            {langContent.title}
          </h1>

          <div className="prose max-w-none">
            {langContent.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-2xl font-bold text-black mb-4">
                  {section.heading}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  {section.details.map((detail, idx) => (
                    <p key={idx} className="mb-2">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const agbContent = {
  DE: {
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    sections: [
      {
        heading: "1. Geltungsbereich",
        details: [
          "Diese AGB gelten für die Anmeldung und Teilnahme an Kursen und Fahrstunden bei der [Name der Fahrschule].",
        ],
      },
      {
        heading: "2. Anmeldung",
        details: [
          "Die Anmeldung kann persönlich, telefonisch oder über das Online-Anmeldeformular erfolgen. Sie ist verbindlich, sobald sie von uns bestätigt wurde.",
        ],
      },
      {
        heading: "3. Leistungen",
        details: [
          "Die Fahrschule erbringt Leistungen gemäß dem jeweils vereinbarten Vertrag und den gesetzlichen Vorgaben der Fahrschüler-Ausbildungsordnung.",
        ],
      },
      {
        heading: "4. Rücktritt und Stornierung",
        details: [
          "Ein Rücktritt von der Anmeldung ist bis zu 14 Tage vor Kursbeginn kostenfrei möglich. Danach behalten wir uns vor, eine Stornogebühr zu erheben.",
        ],
      },
      {
        heading: "5. Haftung",
        details: [
          "Die Fahrschule haftet nur für Schäden, die auf vorsätzliche oder grob fahrlässige Vertragsverletzungen zurückzuführen sind.",
        ],
      },
      {
        heading: "6. Datenschutz",
        details: [
          "Personenbezogene Daten werden ausschließlich zum Zweck der Kursanmeldung und -durchführung verarbeitet und nicht an Dritte weitergegeben.",
        ],
      },
      {
        heading: "7. Schlussbestimmungen",
        details: [
          "Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt das Recht der Bundesrepublik Deutschland.",
        ],
      },
    ],
  },
  EN: {
    title: "Terms and Conditions (AGB)",
    sections: [
      {
        heading: "1. Scope",
        details: [
          "These terms and conditions apply to registration and participation in courses and driving lessons at [Name of the Driving School].",
        ],
      },
      {
        heading: "2. Registration",
        details: [
          "Registration can be done in person, by phone, or via the online registration form. It becomes binding once confirmed by us.",
        ],
      },
      {
        heading: "3. Services",
        details: [
          "The driving school provides services in accordance with the agreed contract and the legal requirements of the Driving School Training Regulations.",
        ],
      },
      {
        heading: "4. Withdrawal and Cancellation",
        details: [
          "Withdrawal from registration is free of charge up to 14 days before the course starts. After that, we reserve the right to charge a cancellation fee.",
        ],
      },
      {
        heading: "5. Liability",
        details: [
          "The driving school is only liable for damages resulting from intentional or grossly negligent breaches of contract.",
        ],
      },
      {
        heading: "6. Data Protection",
        details: [
          "Personal data is processed exclusively for the purpose of course registration and execution and is not passed on to third parties.",
        ],
      },
      {
        heading: "7. Final Provisions",
        details: [
          "If individual provisions of these terms and conditions are invalid, the validity of the remaining provisions remains unaffected. The law of the Federal Republic of Germany applies.",
        ],
      },
    ],
  },
  AR: {
    title: "الشروط والأحكام (AGB)",
    sections: [
      {
        heading: "1. النطاق",
        details: [
          "تنطبق هذه الشروط والأحكام على التسجيل والمشاركة في الدورات ودروس القيادة في [اسم مدرسة القيادة].",
        ],
      },
      {
        heading: "2. التسجيل",
        details: [
          "يمكن إجراء التسجيل شخصيًا أو عبر الهاتف أو عبر نموذج التسجيل عبر الإنترنت. يصبح التسجيل ملزمًا بمجرد تأكيده من قبلنا.",
        ],
      },
      {
        heading: "3. الخدمات",
        details: [
          "تقدم مدرسة القيادة الخدمات وفقًا للعقد المتفق عليه والمتطلبات القانونية للوائح تدريب مدارس القيادة.",
        ],
      },
      {
        heading: "4. الانسحاب والإلغاء",
        details: [
          "يمكن الانسحاب من التسجيل مجانًا حتى 14 يومًا قبل بدء الدورة. بعد ذلك، نحتفظ بالحق في فرض رسوم إلغاء.",
        ],
      },
      {
        heading: "5. المسؤولية",
        details: [
          "تتحمل مدرسة القيادة المسؤولية فقط عن الأضرار الناتجة عن انتهاكات العقد المتعمدة أو الجسيمة.",
        ],
      },
      {
        heading: "6. حماية البيانات",
        details: [
          "تتم معالجة البيانات الشخصية حصريًا لغرض تسجيل الدورة وتنفيذها ولا يتم تمريرها إلى أطراف ثالثة.",
        ],
      },
      {
        heading: "7. الأحكام النهائية",
        details: [
          "إذا كانت أحكام معينة من هذه الشروط والأحكام غير صالحة، فإن صلاحية الأحكام المتبقية تظل غير متأثرة. ينطبق قانون جمهورية ألمانيا الاتحادية.",
        ],
      },
    ],
  },
};
// AGB Component
export const AGB = () => {
  const { selectedLanguage } = useLanguage();
  const langContent = agbContent[selectedLanguage] || agbContent.DE;
  return (
    <>
      <Helmet>
        <title>AGB – Fahrschule Scooldrive Lüneburg</title>
        <meta
          name="description"
          content="Allgemeine Geschäftsbedingungen (AGB) der Fahrschule Scooldrive Lüneburg. Informationen zu Vertragsbedingungen, Kursen und Leistungen."
        />
        <meta
          property="og:title"
          content="AGB – Fahrschule Scooldrive Lüneburg"
        />
        <meta
          property="og:description"
          content="Hier finden Sie die Allgemeinen Geschäftsbedingungen (AGB) der Fahrschule Scooldrive in Lüneburg."
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/agb"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AGB – Fahrschule Scooldrive Lüneburg"
        />
        <meta
          name="twitter:description"
          content="AGB und Vertragsbedingungen der Fahrschule Scooldrive in Lüneburg."
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <link rel="canonical" href="https://fahrschule-lg.scooldrive.com/agb" />
      </Helmet>

      <motion.div
        className={`min-h-screen bg-white p-8 pt-[100px] mt-[100px] ${
          selectedLanguage === "AR" ? "text-right" : "text-left"
        }`}
        dir={selectedLanguage === "AR" ? "rtl" : "ltr"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8 border-b-4 border-[#F5BB00] pb-4">
            {langContent.title}
          </h1>

          <div className="prose max-w-none">
            {langContent.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-2xl font-bold text-black mb-4">
                  {section.heading}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  {section.details.map((detail, idx) => (
                    <p key={idx} className="mb-2">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
