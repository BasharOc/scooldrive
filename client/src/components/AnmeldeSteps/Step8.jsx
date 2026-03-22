import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";

const Step8 = ({ formData, setFormData, errors, langContent }) => (
  <div>
    <h2 className="text-3xl font-bold text-black mb-8 text-center">
      {langContent.title}
    </h2>
    <div className="max-w-lg mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">
            {langContent.fields.vorname} *
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F5BB00] focus:outline-none"
              value={formData.vorname}
              onChange={(e) =>
                setFormData({ ...formData, vorname: e.target.value })
              }
            />
          </div>
          {errors.vorname && (
            <p className="text-red-500 text-sm mt-1">{errors.vorname}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">
            {langContent.fields.nachname} *
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F5BB00] focus:outline-none"
              value={formData.nachname}
              onChange={(e) =>
                setFormData({ ...formData, nachname: e.target.value })
              }
            />
          </div>
          {errors.nachname && (
            <p className="text-red-500 text-sm mt-1">{errors.nachname}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          {langContent.fields.geburtsdatum} *
        </label>
        <div className="relative">
          <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="date"
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F5BB00] focus:outline-none"
            value={formData.geburtsdatum}
            onChange={(e) =>
              setFormData({ ...formData, geburtsdatum: e.target.value })
            }
          />
        </div>
        {errors.geburtsdatum && (
          <p className="text-red-500 text-sm mt-1">{errors.geburtsdatum}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          {langContent.fields.geburtsstadt} *
        </label>
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F5BB00] focus:outline-none"
            value={formData.geburtsstadt}
            onChange={(e) =>
              setFormData({ ...formData, geburtsstadt: e.target.value })
            }
            placeholder={langContent.placeholders.geburtsstadt}
          />
        </div>
        {errors.geburtsstadt && (
          <p className="text-red-500 text-sm mt-1">{errors.geburtsstadt}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          {langContent.fields.telefon} *
        </label>
        <div className="relative">
          <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F5BB00] focus:outline-none"
            value={formData.telefon}
            onChange={(e) =>
              setFormData({ ...formData, telefon: e.target.value })
            }
            placeholder={langContent.placeholders.telefon}
          />
        </div>
        {errors.telefon && (
          <p className="text-red-500 text-sm mt-1">{errors.telefon}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          {langContent.fields.email} *
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F5BB00] focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder={langContent.placeholders.email}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          {langContent.fields.adresse} *
        </label>
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />
          <textarea
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F5BB00] focus:outline-none"
            value={formData.adresse}
            onChange={(e) =>
              setFormData({ ...formData, adresse: e.target.value })
            }
            placeholder={langContent.placeholders.adresse}
            rows={3}
          />
        </div>
        {errors.adresse && (
          <p className="text-red-500 text-sm mt-1">{errors.adresse}</p>
        )}
      </div>

      <div>
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.datenschutz}
            onChange={(e) =>
              setFormData({ ...formData, datenschutz: e.target.checked })
            }
            className="w-5 h-5 text-[#F5BB00] mt-1"
          />
          <span className="text-sm">
            {langContent.fields.datenschutz}
            <a
              href="/datenschutz"
              className="text-[#F5BB00] underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzbestimmungen
            </a>
            *
          </span>
        </label>
        {errors.datenschutz && (
          <p className="text-red-500 text-sm mt-1">{errors.datenschutz}</p>
        )}
      </div>
    </div>
  </div>
);

export default Step8;
