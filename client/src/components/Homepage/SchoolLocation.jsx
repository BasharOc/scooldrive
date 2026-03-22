import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaRoute,
  FaDirections,
} from "react-icons/fa";
import "./SchoolLocation.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";
import API_BASE from "../../utils/api";
//________________API________________________________________________________________________________;
import useApiData from "../../../hooks/useAPIData";

const schoolLocationContent = {
  DE: {
    header: "BESUCHE UNS VOR ORT",
    subtitle:
      "Finde unsere Fahrschule in Lüneburg und starte deine Fahrausbildung bei uns. Wir freuen uns auf deinen Besuch!",
    infoTitle: "Deine Fahrschule in Lüneburg",
    addressTitle: "Unsere Adresse",
    contact: {
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      hoursLabel: "Öffnungszeiten",
    },
    ctaButton: "Route planen",
  },
  EN: {
    header: "VISIT US ON SITE",
    subtitle:
      "Find our driving school in Lüneburg and start your driving training with us. We look forward to your visit!",
    infoTitle: "Your driving school in Lüneburg",
    addressTitle: "Our Address",
    contact: {
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Opening Hours",
    },
    ctaButton: "Plan Route",
  },
  AR: {
    header: "قم بزيارتنا في الموقع",
    subtitle:
      "ابحث عن مدرسة القيادة الخاصة بنا في لونيبورغ وابدأ تدريبك على القيادة معنا. نحن نتطلع إلى زيارتك!",
    infoTitle: "مدرسة القيادة الخاصة بك في لونيبورغ",
    addressTitle: "عنواننا",
    contact: {
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      hoursLabel: "ساعات العمل",
    },
    ctaButton: "خطط للطريق",
  },
};

const SchoolLocation = () => {
  const { selectedLanguage } = useLanguage();
  const [einstellungen, setEinstellungen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //________________API________________________________________________________________________________;
  const { data: oeffnungszeiten } = useApiData("oeffnungszeiten");
  const lang =
    schoolLocationContent[selectedLanguage] || schoolLocationContent.DE;

  const schoolInfo = {
    name: "Fahrschule Scool Drive GbR",
    address: {
      street: "Haagestraße 3",
      city: "21335 Lüneburg",
      country: "Deutschland",
    },
    contact: {
      phone: "041318983700",
      email: "info@scooldrive.com",
    },
    hours: {
      weekdays: "Mo-Do: 13:30 - 16:00",
    },
  };

  const fetchEinstellungen = async () => {
    try {
      const response = await fetch(`${API_BASE}/einstellungen`);
      const data = await response.json();

      if (response.ok) {
        setEinstellungen(data);
      } else {
        setError("Fehler beim Laden der Einstellungen");
      }
    } catch (err) {
      setError("Verbindungsfehler");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEinstellungen();
  }, []);

  const handleDirections = () => {
    const address = `${schoolInfo.address.street}, ${schoolInfo.address.city}, ${schoolInfo.address.country}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address,
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  //________________API________________________________________________________________________________
  const formatOeffnungszeiten = () => {
    if (!oeffnungszeiten) return "Laden...";

    const wochentage = [
      "montag",
      "dienstag",
      "mittwoch",
      "donnerstag",
      "freitag",
      "samstag",
      "sonntag",
    ];
    const tageKurz = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

    const aktiveZeiten = [];

    // Alle aktiven Tage sammeln
    wochentage.forEach((tag, index) => {
      const tagData = oeffnungszeiten[tag];
      if (tagData?.aktiv) {
        aktiveZeiten.push({
          tag: tageKurz[index],
          startzeit: tagData.startzeit,
          endzeit: tagData.endzeit,
          index: index,
        });
      }
    });

    if (aktiveZeiten.length === 0) return "Geschlossen";

    // Gruppierung nach gleichen Zeiten
    const gruppen = [];
    let aktuelleGruppe = [aktiveZeiten[0]];

    for (let i = 1; i < aktiveZeiten.length; i++) {
      const vorheriger = aktiveZeiten[i - 1];
      const aktueller = aktiveZeiten[i];

      // Prüfen ob hintereinander und gleiche Zeiten
      if (
        aktueller.index === vorheriger.index + 1 &&
        aktueller.startzeit === vorheriger.startzeit &&
        aktueller.endzeit === vorheriger.endzeit
      ) {
        aktuelleGruppe.push(aktueller);
      } else {
        gruppen.push(aktuelleGruppe);
        aktuelleGruppe = [aktueller];
      }
    }
    gruppen.push(aktuelleGruppe);

    // Formatierung
    return gruppen
      .map((gruppe) => {
        const zeiten = `${gruppe[0].startzeit} - ${gruppe[0].endzeit}`;

        if (gruppe.length === 1) {
          return `${gruppe[0].tag}: ${zeiten}`;
        } else {
          return `${gruppe[0].tag}-${gruppe[gruppe.length - 1].tag}: ${zeiten}`;
        }
      })
      .join(", ");
  };

  return (
    <div className="school-location">
      <div className="school-location__container">
        {/* Header */}
        <div className="school-location__header">
          <h2 className="school-location__title">{lang.header}</h2>
          <p className="school-location__subtitle">{lang.subtitle}</p>
        </div>

        {/* Content */}
        <div className="school-location__content">
          {/* Info Section */}
          <div className="school-location__info">
            <h3 className="school-location__info-title">{lang.infoTitle}</h3>

            {/* Address */}
            <div className="school-location__address">
              <div className="school-location__address-title">
                {lang.addressTitle}
              </div>
              <div className="school-location__address-text">
                {schoolInfo.name}
                <br />
                {schoolInfo.address.street}
                <br />
                {schoolInfo.address.city}
                <br />
                {schoolInfo.address.country}
              </div>
            </div>

            {/* Contact Information */}
            <div className="school-location__contact">
              {!loading && einstellungen?.kontaktOptionen?.telefon && (
                <div className="school-location__contact-item">
                  <div className="school-location__contact-icon">
                    <FaPhone />
                  </div>
                  <div className="school-location__contact-content">
                    <div className="school-location__contact-label">
                      {lang.contact.phoneLabel}
                    </div>

                    <a
                      href={`tel:${schoolInfo.contact.phone}`}
                      className="school-location__contact-value school-location__contact-link"
                    >
                      {schoolInfo.contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="school-location__contact-item">
                <div className="school-location__contact-icon">
                  <FaEnvelope />
                </div>
                <div className="school-location__contact-content">
                  <div className="school-location__contact-label">
                    {lang.contact.emailLabel}
                  </div>
                  <a
                    href={`mailto:${schoolInfo.contact.email}`}
                    className="school-location__contact-value school-location__contact-link"
                  >
                    {schoolInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="school-location__contact-item">
                <div className="school-location__contact-icon">
                  <FaClock />
                </div>
                <div className="school-location__contact-content">
                  <div className="school-location__contact-label">
                    {lang.contact.hoursLabel}
                  </div>
                  <div className="school-location__contact-value">
                    {formatOeffnungszeiten()}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="school-location__cta">
              <button
                className="school-location__button"
                onClick={handleDirections}
              >
                <FaDirections className="school-location__button-icon" />
                {lang.ctaButton}
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="school-location__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.3750341476016!2d10.409721346580714!3d53.24628886302604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1dd8e8516531f%3A0x6c7614d57b654a2c!2sFahrschule%20Scool%20Drive%20GbR!5e1!3m2!1sde!2sde!4v1751474615088!5m2!1sde!2sde"
              style={{ border: "0", width: "600px", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLocation;
