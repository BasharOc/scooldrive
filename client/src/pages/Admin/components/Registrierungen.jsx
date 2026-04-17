import React, { useEffect, useState } from "react";
import API_BASE from "../../../utils/api";

const statusStyles = {
  pending: "bg-yellow-50 text-yellow-800 border-yellow-200",
  sent: "bg-green-50 text-green-800 border-green-200",
  failed: "bg-red-50 text-red-800 border-red-200",
  mocked: "bg-blue-50 text-blue-800 border-blue-200",
};

const statusLabels = {
  pending: "Ausstehend",
  sent: "Gesendet",
  failed: "Fehlgeschlagen",
  mocked: "Mock",
};

const formatDate = (value) => {
  if (!value) return "-";

  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const formatDateOnly = (value) => {
  if (!value) return "-";

  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
  }).format(new Date(value));
};

const getDisplayValue = (value) => value || "-";

const DetailRow = ({ label, value }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-2 border-b border-gray-100 last:border-b-0">
    <span className="text-sm font-semibold text-gray-600">{label}</span>
    <span className="sm:col-span-2 text-sm text-gray-900">
      {getDisplayValue(value)}
    </span>
  </div>
);

const Registrierungen = () => {
  const [registrations, setRegistrations] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRegistrations = async () => {
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE}/registrations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Fehler beim Laden der Registrierungen");
        return;
      }

      setRegistrations(data.registrations || []);
    } catch {
      setError("Verbindungsfehler beim Laden der Registrierungen");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-black">
                Registrierungen
              </h1>
              <p className="text-gray-600 mt-1">
                Gespeicherte Anmeldungen aus dem Formular
              </p>
            </div>
            <button
              onClick={fetchRegistrations}
              disabled={loading}
              className="bg-[#F5BB00] hover:bg-[#F5BB00]/90 disabled:bg-gray-300 text-black font-semibold py-3 px-5 rounded-lg transition-colors"
            >
              Aktualisieren
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F5BB00] mx-auto mb-4"></div>
            <p className="text-gray-600">Laden...</p>
          </div>
        ) : registrations.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-gray-600">Noch keine Registrierungen gefunden.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {registrations.map((registration) => {
              const isExpanded = expandedId === registration._id;
              const statusClass =
                statusStyles[registration.emailStatus] || statusStyles.pending;

              return (
                <div
                  key={registration._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : registration._id)
                    }
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                      <div>
                        <p className="font-bold text-black">
                          {registration.vorname} {registration.nachname}
                        </p>
                        <p className="text-sm text-gray-600">
                          {registration.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">
                          Telefon
                        </p>
                        <p className="text-sm text-black">
                          {registration.telefon}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">
                          Fuehrerschein
                        </p>
                        <p className="text-sm text-black">
                          {registration.fahrzeugTyp}
                          {registration.spezifischeKlasse
                            ? ` / ${registration.spezifischeKlasse}`
                            : ""}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">
                          Eingegangen
                        </p>
                        <p className="text-sm text-black">
                          {formatDate(registration.createdAt)}
                        </p>
                      </div>
                      <div className="flex lg:justify-end">
                        <span
                          className={`inline-flex border rounded-full px-3 py-1 text-sm font-semibold ${statusClass}`}
                        >
                          {statusLabels[registration.emailStatus] ||
                            registration.emailStatus}
                        </span>
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="bg-gray-50 rounded-lg p-5">
                        <DetailRow label="Adresse" value={registration.adresse} />
                        <DetailRow
                          label="Geburtsdatum"
                          value={
                            registration.geburtsdatum
                              ? formatDateOnly(registration.geburtsdatum)
                              : ""
                          }
                        />
                        <DetailRow
                          label="Geburtsstadt"
                          value={registration.geburtsstadt}
                        />
                        <DetailRow
                          label="Hat Fuehrerschein"
                          value={registration.hatFuehrerschein ? "Ja" : "Nein"}
                        />
                        <DetailRow
                          label="Vorhandener Fuehrerschein"
                          value={registration.fuehrerscheinTyp}
                        />
                        <DetailRow label="Getriebe" value={registration.getriebe} />
                        <DetailRow label="Pruefung" value={registration.pruefung} />
                        <DetailRow label="Kursart" value={registration.kursart} />
                        <DetailRow label="Rabatt" value={registration.rabatt} />
                        <DetailRow
                          label="Freunde-Rabatt"
                          value={registration.freundeRabatt}
                        />
                        <DetailRow
                          label="Freund"
                          value={
                            registration.friendName ||
                            registration.nameVonFreund
                          }
                        />
                        <DetailRow
                          label="Email-Fehler"
                          value={registration.emailError}
                        />
                        <DetailRow
                          label="Aktualisiert"
                          value={formatDate(registration.updatedAt)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Registrierungen;
