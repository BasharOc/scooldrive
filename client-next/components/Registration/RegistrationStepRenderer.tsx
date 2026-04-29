"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelope,
  FaHeart,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaWeightHanging,
  FaWhatsapp,
} from "react-icons/fa";
import FriendDiscountBox from "@/components/Registration/FriendDiscountBox";
import { getSpecificClassOptions } from "@/components/Registration/registration-state";
import type {
  RegistrationErrors,
  RegistrationFormData,
  RegistrationLocaleContent,
} from "@/components/Registration/types";
import type { BonusApiResponse } from "@/lib/remote-data";
import type { Locale } from "@/types/i18n";

type SharedStepProps = {
  formData: RegistrationFormData;
  setFormData: (
    nextFormData:
      | RegistrationFormData
      | ((previous: RegistrationFormData) => RegistrationFormData)
  ) => void;
  errors: RegistrationErrors;
};

function Step1({ errors, formData, langContent, setFormData }: SharedStepProps & {
  langContent: RegistrationLocaleContent["steps"]["step1"];
}) {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold text-black">{langContent.title}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {langContent.options.map(({ icon: Icon, key, label }) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer rounded-lg border-2 p-6 text-center transition-colors duration-200 ${
              formData.fahrzeugTyp === key
                ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
                : "border-gray-300 hover:border-[#F5BB00]"
            }`}
            onClick={() => setFormData({ ...formData, fahrzeugTyp: key })}
          >
            <Icon
              className={`mx-auto mb-4 text-4xl ${
                formData.fahrzeugTyp === key ? "text-black" : "text-[#F5BB00]"
              }`}
            />
            <h3 className="text-xl font-semibold">{label}</h3>
          </motion.div>
        ))}
      </div>
      {errors.fahrzeugTyp ? (
        <p className="mt-4 text-center text-red-500">{errors.fahrzeugTyp}</p>
      ) : null}
    </div>
  );
}

function Step2({ errors, formData, langContent, setFormData }: SharedStepProps & {
  langContent: RegistrationLocaleContent["steps"]["step2"];
}) {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold text-black">{langContent.title}</h2>
      <div className="mx-auto max-w-md space-y-6">
        <div>
          <label className="mb-2 block text-lg font-semibold">
            {langContent.fields.vorname} <span className="text-2xl">*</span>
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-2 border-gray-300 p-4 focus:border-[#F5BB00] focus:outline-none"
            value={formData.vorname}
            onChange={(event) =>
              setFormData({ ...formData, vorname: event.target.value })
            }
            placeholder={langContent.placeholders.vorname}
          />
          {errors.vorname ? <p className="mt-2 text-red-500">{errors.vorname}</p> : null}
        </div>
        <div>
          <label className="mb-2 block text-lg font-semibold">
            {langContent.fields.nachname} <span className="text-2xl">*</span>
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-2 border-gray-300 p-4 focus:border-[#F5BB00] focus:outline-none"
            value={formData.nachname}
            onChange={(event) =>
              setFormData({ ...formData, nachname: event.target.value })
            }
            placeholder={langContent.placeholders.nachname}
          />
          {errors.nachname ? <p className="mt-2 text-red-500">{errors.nachname}</p> : null}
        </div>
      </div>
    </div>
  );
}

function Step3({ formData, langContent, setFormData }: SharedStepProps & {
  langContent: RegistrationLocaleContent["steps"]["step3"];
}) {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold text-black">{langContent.title}</h2>
      <div className="mx-auto max-w-lg space-y-6">
        <div className="space-y-4">
          <div
            className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 ${
              formData.hatFuehrerschein === false
                ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() =>
              setFormData({
                ...formData,
                hatFuehrerschein: false,
                fuehrerscheinTyp: "",
              })
            }
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  formData.hatFuehrerschein === false
                    ? "border-[#F5BB00] bg-[#F5BB00]"
                    : "border-gray-300"
                }`}
              >
                {formData.hatFuehrerschein === false ? (
                  <div className="h-3 w-3 rounded-full bg-[#F5BB00]" />
                ) : null}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{langContent.options.no}</h3>
                <p className="text-sm text-gray-600">{langContent.descriptions.no}</p>
              </div>
            </div>
          </div>

          <div
            className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 ${
              formData.hatFuehrerschein === true
                ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setFormData({ ...formData, hatFuehrerschein: true })}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  formData.hatFuehrerschein === true
                    ? "border-[#F5BB00] bg-[#F5BB00]"
                    : "border-gray-300"
                }`}
              >
                {formData.hatFuehrerschein === true ? (
                  <div className="h-3 w-3 rounded-full bg-[#F5BB00]" />
                ) : null}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{langContent.options.yes}</h3>
                <p className="text-sm text-gray-600">{langContent.descriptions.yes}</p>
              </div>
            </div>
          </div>
        </div>

        {formData.hatFuehrerschein ? (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="rounded-xl bg-gray-50 p-6"
          >
            <h3 className="mb-4 text-xl font-semibold text-black">{langContent.subTitle}</h3>
            <div className="space-y-3">
              {langContent.subOptions
                .filter(
                  ({ value }) =>
                    formData.fahrzeugTyp !== "auto-anhaenger" ||
                    value !== "BE (Auto mit Anhänger)"
                )
                .map(({ desc, icon: Icon, value }) => (
                  <div
                    key={value}
                    className={`cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 ${
                      formData.fuehrerscheinTyp === value
                        ? "border-[#F5BB00] bg-white"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, fuehrerscheinTyp: value })
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="text-2xl text-[#F5BB00]" />
                      <div>
                        <span className="font-semibold text-black">{value}</span>
                        <p className="text-sm text-gray-600">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ) : null}

        {formData.fahrzeugTyp === "auto-anhaenger" &&
        formData.hatFuehrerschein === false ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-r-xl border-l-4 border-red-400 bg-red-50 p-4"
          >
            <div className="flex items-start">
              <div className="text-sm text-red-800">
                <p className="mb-1 font-semibold">{langContent.prerequisiteWarning.title}</p>
                <p className="text-xs">{langContent.prerequisiteWarning.description}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

function Step3_5({ errors, formData, langContent, setFormData }: SharedStepProps & {
  langContent: RegistrationLocaleContent["steps"]["step3_5"];
}) {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold text-black">{langContent.title}</h2>
      <div className="mx-auto max-w-lg space-y-4">
        {langContent.options.map(({ desc, icon: Icon, key, label, weight }, index) => (
          <motion.div
            key={key}
            className={`cursor-pointer rounded-lg border-2 p-6 ${
              formData.spezifischeKlasse === key
                ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
                : "border-gray-300 hover:border-[#F5BB00]"
            }`}
            onClick={() => setFormData({ ...formData, spezifischeKlasse: key })}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <Icon
                className={`mt-1 text-3xl ${
                  formData.spezifischeKlasse === key ? "text-black" : "text-[#F5BB00]"
                }`}
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black">{label}</h3>
                <p className="mb-2 text-sm text-gray-600">{desc}</p>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs">
                  <FaWeightHanging className="text-[#F5BB00]" />
                  <span className="font-medium">{weight}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {errors.spezifischeKlasse ? (
        <motion.p
          className="mt-4 text-center text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {errors.spezifischeKlasse}
        </motion.p>
      ) : null}
    </div>
  );
}

function Step4({ errors, formData, langContent, setFormData }: SharedStepProps & {
  langContent: RegistrationLocaleContent["steps"]["step4"];
}) {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold text-black">{langContent.title}</h2>
      <div className="mx-auto max-w-lg space-y-6">
        {langContent.options.map(({ desc, icons, key, label }) => (
          <div
            key={key}
            className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 ${
              formData.getriebe === key
                ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => setFormData({ ...formData, getriebe: key })}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  formData.getriebe === key
                    ? "border-[#F5BB00] bg-[#F5BB00]"
                    : "border-gray-300"
                }`}
              >
                {formData.getriebe === key ? (
                  <div className="h-3 w-3 rounded-full bg-[#F5BB00]" />
                ) : null}
              </div>
              <div className="flex gap-2">
                {icons.map((Icon, index) => (
                  <Icon
                    key={`${key}-${index}`}
                    className={`text-3xl ${
                      formData.getriebe === key ? "text-black" : "text-[#F5BB00]"
                    }`}
                  />
                ))}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-black">{label}</h3>
                  {desc.includes("empfohlen") || desc.includes("recommended") || desc.includes("موصى") ? (
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Empfohlen
                    </span>
                  ) : null}
                </div>
                <p
                  className={`text-sm ${
                    desc.includes("empfohlen") || desc.includes("recommended") || desc.includes("موصى")
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {errors.getriebe ? <p className="mt-4 text-center text-red-500">{errors.getriebe}</p> : null}
    </div>
  );
}

function Step5({ errors, formData, langContent, setFormData }: SharedStepProps & {
  langContent: RegistrationLocaleContent["steps"]["step5"];
}) {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold text-black">{langContent.title}</h2>
      <div className="mx-auto max-w-lg space-y-6">
        {langContent.options.map(({ desc, icon: Icon, key, label }) => (
          <div
            key={key}
            className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 ${
              formData.pruefung === key
                ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => setFormData({ ...formData, pruefung: key as RegistrationFormData["pruefung"] })}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  formData.pruefung === key
                    ? "border-[#F5BB00] bg-[#F5BB00]"
                    : "border-gray-300"
                }`}
              >
                {formData.pruefung === key ? (
                  <div className="h-3 w-3 rounded-full bg-[#F5BB00]" />
                ) : null}
              </div>
              <Icon
                className={`text-3xl ${
                  formData.pruefung === key ? "text-black" : "text-[#F5BB00]"
                }`}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-black">{label}</h3>
                  {desc.includes("empfohlen") || desc.includes("recommended") || desc.includes("موصى") ? (
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Empfohlen
                    </span>
                  ) : null}
                </div>
                <p
                  className={`text-sm ${
                    desc.includes("empfohlen") || desc.includes("recommended") || desc.includes("موصى")
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {errors.pruefung ? <p className="mt-4 text-center text-red-500">{errors.pruefung}</p> : null}
    </div>
  );
}

function Step6({ errors, formData, langContent, setFormData }: SharedStepProps & {
  langContent: RegistrationLocaleContent["steps"]["step6"];
}) {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold text-black">{langContent.title}</h2>
      <motion.div
        className="mx-auto mb-8 max-w-lg rounded-r-xl border-l-4 border-blue-400 bg-blue-50 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start">
          <FaInfoCircle className="mr-3 mt-0.5 shrink-0 text-blue-400" />
          <div className="text-sm text-blue-800">
            <p className="mb-1 font-semibold">{langContent.theoryInfo.title}</p>
            <p className="text-xs">{langContent.theoryInfo.description}</p>
          </div>
        </div>
      </motion.div>
      <div className="mx-auto max-w-lg space-y-4">
        <h3 className="mb-4 text-center text-xl font-semibold text-black">
          {langContent.practiceTitle}
        </h3>
        {langContent.options.map(({ desc, icon: Icon, key, label }, index) => (
          <motion.div
            key={key}
            className={`cursor-pointer rounded-lg border-2 p-6 ${
              formData.kursart === key
                ? "border-[#F5BB00] bg-[#F5BB00] bg-opacity-10"
                : "border-gray-300 hover:border-[#F5BB00]"
            }`}
            onClick={() => setFormData({ ...formData, kursart: key as RegistrationFormData["kursart"] })}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <Icon
                className={`text-3xl ${
                  formData.kursart === key ? "text-black" : "text-[#F5BB00]"
                }`}
              />
              <div>
                <h3 className="text-lg font-semibold">{label}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {errors.kursart ? (
        <motion.p
          className="mt-4 text-center text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {errors.kursart}
        </motion.p>
      ) : null}
    </div>
  );
}

function Step7({ formData, langContent }: {
  formData: RegistrationFormData;
  langContent: RegistrationLocaleContent["steps"]["step7"];
}) {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold text-black">{langContent.title}</h2>
      <div className="mx-auto max-w-lg space-y-4 rounded-lg bg-gray-50 p-6">
        <div className="flex justify-between gap-4">
          <span className="font-semibold">{langContent.summary.fahrzeugTyp}:</span>
          <span>{formData.fahrzeugTyp}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="font-semibold">{langContent.summary.name}:</span>
          <span>
            {formData.vorname} {formData.nachname}
          </span>
        </div>
        {formData.fahrzeugTyp !== "motorrad" ? (
          <>
            <div className="flex justify-between gap-4">
              <span className="font-semibold">{langContent.summary.fuehrerschein}:</span>
              <span>
                {formData.hatFuehrerschein
                  ? `Ja (${formData.fuehrerscheinTyp})`
                  : "Nein"}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="font-semibold">{langContent.summary.getriebe}:</span>
              <span>{formData.getriebe}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="font-semibold">{langContent.summary.pruefung}:</span>
              <span>{formData.pruefung}</span>
            </div>
          </>
        ) : null}
        <div className="flex justify-between gap-4">
          <span className="font-semibold">{langContent.summary.kursart}:</span>
          <span>{formData.kursart}</span>
        </div>
      </div>
    </div>
  );
}

function Step8({
  errors,
  formData,
  langContent,
  locale,
  setFormData,
}: SharedStepProps & {
  langContent: RegistrationLocaleContent["steps"]["step8"];
  locale: Locale;
}) {
  const privacyPath = `/${locale}/datenschutz`;

  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold text-black">{langContent.title}</h2>
      <div className="mx-auto max-w-lg space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              {langContent.fields.vorname} *
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 focus:border-[#F5BB00] focus:outline-none"
                value={formData.vorname}
                onChange={(event) =>
                  setFormData({ ...formData, vorname: event.target.value })
                }
              />
            </div>
            {errors.vorname ? <p className="mt-1 text-sm text-red-500">{errors.vorname}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">
              {langContent.fields.nachname} *
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 focus:border-[#F5BB00] focus:outline-none"
                value={formData.nachname}
                onChange={(event) =>
                  setFormData({ ...formData, nachname: event.target.value })
                }
              />
            </div>
            {errors.nachname ? <p className="mt-1 text-sm text-red-500">{errors.nachname}</p> : null}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            {langContent.fields.geburtsdatum} *
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              className="w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 focus:border-[#F5BB00] focus:outline-none"
              value={formData.geburtsdatum}
              onChange={(event) =>
                setFormData({ ...formData, geburtsdatum: event.target.value })
              }
            />
          </div>
          {errors.geburtsdatum ? (
            <p className="mt-1 text-sm text-red-500">{errors.geburtsdatum}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            {langContent.fields.geburtsstadt} *
          </label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 focus:border-[#F5BB00] focus:outline-none"
              value={formData.geburtsstadt}
              onChange={(event) =>
                setFormData({ ...formData, geburtsstadt: event.target.value })
              }
              placeholder={langContent.placeholders.geburtsstadt}
            />
          </div>
          {errors.geburtsstadt ? (
            <p className="mt-1 text-sm text-red-500">{errors.geburtsstadt}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            {langContent.fields.telefon} *
          </label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              className="w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 focus:border-[#F5BB00] focus:outline-none"
              value={formData.telefon}
              onChange={(event) =>
                setFormData({ ...formData, telefon: event.target.value })
              }
              placeholder={langContent.placeholders.telefon}
            />
          </div>
          {errors.telefon ? <p className="mt-1 text-sm text-red-500">{errors.telefon}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            {langContent.fields.email} *
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              className="w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 focus:border-[#F5BB00] focus:outline-none"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              placeholder={langContent.placeholders.email}
            />
          </div>
          {errors.email ? <p className="mt-1 text-sm text-red-500">{errors.email}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            {langContent.fields.adresse} *
          </label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />
            <textarea
              className="w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 focus:border-[#F5BB00] focus:outline-none"
              value={formData.adresse}
              onChange={(event) =>
                setFormData({ ...formData, adresse: event.target.value })
              }
              placeholder={langContent.placeholders.adresse}
              rows={3}
            />
          </div>
          {errors.adresse ? <p className="mt-1 text-sm text-red-500">{errors.adresse}</p> : null}
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={formData.datenschutz}
              onChange={(event) =>
                setFormData({ ...formData, datenschutz: event.target.checked })
              }
              className="mt-1 h-5 w-5 text-[#F5BB00]"
            />
            <span className="text-sm">
              {langContent.fields.datenschutz}
              <Link
                href={privacyPath}
                className="ml-1 text-[#F5BB00] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzbestimmungen
              </Link>
              *
            </span>
          </label>
          {errors.datenschutz ? (
            <p className="mt-1 text-sm text-red-500">{errors.datenschutz}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Step9({
  homePath,
  langContent,
}: {
  homePath: string;
  langContent: RegistrationLocaleContent["steps"]["step9"];
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-center">
      <div className="relative mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 30 }}
          className="inline-block"
        >
          <FaCheckCircle className="mx-auto mb-4 text-8xl text-green-500" />
        </motion.div>
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-3 w-3 rounded-full bg-[#F5BB00]"
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{
              x: Math.cos(index * 30) * 100,
              y: Math.sin(index * 30) * 100,
              opacity: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5 + index * 0.1,
              ease: "easeOut",
            }}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="mb-4 text-4xl font-bold text-black">{langContent.title}</h2>
        <p className="mb-6 text-xl text-gray-700">{langContent.subtitle}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mx-auto mb-8 max-w-md rounded-xl border-2 border-green-200 bg-green-50 p-6"
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <FaWhatsapp className="text-3xl text-green-500" />
          <h3 className="text-xl font-semibold text-green-800">{langContent.whatsapp.title}</h3>
        </div>
        <p className="text-center text-green-700">{langContent.whatsapp.message}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-2xl text-red-500">
            <FaHeart />
          </span>
          <p className="text-lg text-gray-600">{langContent.thankYou}</p>
          <span className="text-2xl text-red-500">
            <FaHeart />
          </span>
        </div>
        <p className="text-gray-500">{langContent.thankYouDetail}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          href={homePath}
          className="inline-block rounded-lg bg-[#F5BB00] px-8 py-4 text-lg font-semibold text-black transition-colors hover:bg-yellow-500"
        >
          {langContent.button}
        </Link>
      </motion.div>
    </div>
  );
}

type RegistrationStepRendererProps = {
  currentStep: number;
  formData: RegistrationFormData;
  setFormData: SharedStepProps["setFormData"];
  errors: RegistrationErrors;
  content: RegistrationLocaleContent;
  bonusData?: BonusApiResponse | null;
  isFriendDiscount: boolean;
  friendName: string;
  isSubmitted: boolean;
  onFriendDiscountToggle: (checked: boolean) => void;
  onFriendNameChange: (value: string) => void;
  onFriendSubmitted: () => void;
  locale: Locale;
};

export default function RegistrationStepRenderer({
  bonusData,
  content,
  currentStep,
  errors,
  formData,
  friendName,
  isFriendDiscount,
  isSubmitted,
  locale,
  onFriendDiscountToggle,
  onFriendNameChange,
  onFriendSubmitted,
  setFormData,
}: RegistrationStepRendererProps) {
  switch (currentStep) {
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={content.steps.step1}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={content.steps.step2}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={content.steps.step3}
        />
      );
    case 3.5:
      return (
        <Step3_5
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={{
            ...content.steps.step3_5,
            options: getSpecificClassOptions(formData, content),
          }}
        />
      );
    case 4:
      return (
        <Step4
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={content.steps.step4}
        />
      );
    case 5:
      return (
        <Step5
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={content.steps.step5}
        />
      );
    case 6:
      return (
        <Step6
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={content.steps.step6}
        />
      );
    case 7:
      return <Step7 formData={formData} langContent={content.steps.step7} />;
    case 8:
      return (
        <>
          <Step8
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            langContent={content.steps.step8}
            locale={locale}
          />
          <FriendDiscountBox
            bonusData={bonusData}
            explanation={content.steps.friendDiscount.explanation}
            toggleLabel={content.steps.friendDiscount.toggleLabel}
            friendNameLabel={content.steps.friendDiscount.friendNameLabel}
            friendNamePlaceholder={content.steps.friendDiscount.friendNamePlaceholder}
            submitButton={content.steps.friendDiscount.submitButton}
            isFriendDiscount={isFriendDiscount}
            friendName={friendName}
            isSubmitted={isSubmitted}
            onToggle={onFriendDiscountToggle}
            onFriendNameChange={onFriendNameChange}
            onMarkSubmitted={onFriendSubmitted}
          />
        </>
      );
    case 9:
      return <Step9 homePath={`/${locale}`} langContent={content.steps.step9} />;
    default:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          langContent={content.steps.step1}
        />
      );
  }
}
