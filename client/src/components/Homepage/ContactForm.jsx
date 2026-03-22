import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const contactFormContent = {
  DE: {
    header: "KONTAKTFORMULAR",
    contactTitle: "KONTAKT",
    contactDescription:
      "Du hast Fragen bevor du dich anmeldest? Schreibe uns eine Nachricht, rufe uns an, oder komme persönlich in einer unserer Filialen vorbei.",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    fields: {
      firstName: "VORNAME",
      lastName: "NACHNAME",
      email: "E-MAIL ADRESSE",
      phone: "TELEFONNUMMER",
      required: "PFLICHT",
      placeholders: {
        firstName: "Ihr Vorname",
        lastName: "Ihr Nachname",
        email: "ihre.email@beispiel.de",
        phone: "040 123 456 789",
      },
    },
    submitButton: "NÄCHSTER SCHRITT",
    sending: "WIRD GESENDET...",
    successMessage: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.",
    errorMessage:
      "Es gab einen Fehler beim Senden der Nachricht. Bitte versuche es erneut.",
  },
  EN: {
    header: "CONTACT FORM",
    contactTitle: "CONTACT",
    contactDescription:
      "Do you have questions before registering? Send us a message, call us, or visit one of our branches in person.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    fields: {
      firstName: "FIRST NAME",
      lastName: "LAST NAME",
      email: "EMAIL ADDRESS",
      phone: "PHONE NUMBER",
      required: "REQUIRED",
      placeholders: {
        firstName: "Your first name",
        lastName: "Your last name",
        email: "your.email@example.com",
        phone: "041318983700",
      },
    },
    submitButton: "NEXT STEP",
    sending: "SENDING...",
    successMessage: "Thank you! Your message has been successfully sent.",
    errorMessage:
      "There was an error sending the message. Please try again later.",
  },
  AR: {
    header: "نموذج الاتصال",
    contactTitle: "اتصل بنا",
    contactDescription:
      "هل لديك أسئلة قبل التسجيل؟ أرسل لنا رسالة، اتصل بنا، أو قم بزيارة أحد فروعنا شخصيًا.",
    phoneLabel: "الهاتف",
    emailLabel: "البريد الإلكتروني",
    fields: {
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "عنوان البريد الإلكتروني",
      phone: "رقم الهاتف",
      required: "إلزامي",
      placeholders: {
        firstName: "اسمك الأول",
        lastName: "اسم عائلتك",
        email: "your.email@example.com",
        phone: "040 123 456 789",
      },
    },
    submitButton: "الخطوة التالية",
    sending: "جار الإرسال...",
    successMessage: "شكراً لك! تم إرسال رسالتك بنجاح.",
    errorMessage: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقًا.",
  },
};

const ContactForm = () => {
  const { selectedLanguage } = useLanguage();
  const lang = contactFormContent[selectedLanguage] || contactFormContent.DE;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateField(name);
  };

  const validateField = (fieldName) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case "firstName":
        if (!formData.firstName.trim()) {
          newErrors.firstName = `${lang.fields.firstName} ${lang.fields.required}`;
        } else {
          delete newErrors.firstName;
        }
        break;
      case "lastName":
        if (!formData.lastName.trim()) {
          newErrors.lastName = `${lang.fields.lastName} ${lang.fields.required}`;
        } else {
          delete newErrors.lastName;
        }
        break;
      case "email":
        if (!formData.email.trim()) {
          newErrors.email = `${lang.fields.email} ${lang.fields.required}`;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Invalid email.";
        } else {
          delete newErrors.email;
        }
        break;
      case "phone":
        if (!formData.phone.trim()) {
          newErrors.phone = `${lang.fields.phone} ${lang.fields.required}`;
        } else {
          delete newErrors.phone;
        }
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = `${lang.fields.firstName} ${lang.fields.required}`;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = `${lang.fields.lastName} ${lang.fields.required}`;
    }

    if (!formData.email.trim()) {
      newErrors.email = `${lang.fields.email} ${lang.fields.required}`;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = `${lang.fields.phone} ${lang.fields.required}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
      setTouched({});

      alert(lang.successMessage);
    } catch (error) {
      alert(lang.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-black mb-4 italic">
            {lang.header}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-black mb-4 italic">
                {lang.contactTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {lang.contactDescription}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#F5BB00] text-lg" />
                  <a
                    href="tel:040123456789"
                    className="text-[#F5BB00] font-semibold hover:underline transition-all duration-200"
                  >
                    040 123 456 789
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#F5BB00] text-lg" />
                  <a
                    href="mailto:info@fahrschule-beispiel.de"
                    className="text-[#F5BB00] font-semibold hover:underline transition-all duration-200 break-all"
                  >
                    info@fahrschule-beispiel.de
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-black mb-1">
                        {lang.fields.firstName}{" "}
                        <span className="text-[#F5BB00] italic">
                          {lang.fields.required}
                        </span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        placeholder={lang.fields.placeholders.firstName}
                        className={`w-full px-3 py-2 border-2 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${
                          errors.firstName
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-[#F5BB00]"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-1">
                        {lang.fields.lastName}{" "}
                        <span className="text-[#F5BB00] italic">
                          {lang.fields.required}
                        </span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        placeholder={lang.fields.placeholders.lastName}
                        className={`w-full px-3 py-2 border-2 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${
                          errors.lastName
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-[#F5BB00]"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-1">
                      {lang.fields.email}{" "}
                      <span className="text-[#F5BB00] italic">
                        {lang.fields.required}
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      placeholder={lang.fields.placeholders.email}
                      className={`w-full px-3 py-2 border-2 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-[#F5BB00]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-1">
                      {lang.fields.phone}{" "}
                      <span className="text-[#F5BB00] italic">
                        {lang.fields.required}
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      placeholder={lang.fields.placeholders.phone}
                      className={`w-full px-3 py-2 border-2 rounded-lg bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200 ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-[#F5BB00]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-end pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-2 rounded-lg font-bold text-black transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                        isSubmitting
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-[#F5BB00] hover:bg-[#e5a800] hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                          {lang.sending}
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-sm" />
                          {lang.submitButton}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
