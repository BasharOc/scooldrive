// src/components/Oeffnungszeiten.jsx
import React, { useState, useEffect } from "react";
import API_BASE from "../../../utils/api";

const Oeffnungszeiten = () => {
  const [oeffnungszeiten, setOeffnungszeiten] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const wochentage = [
    { key: "montag", label: "Montag" },
    { key: "dienstag", label: "Dienstag" },
    { key: "mittwoch", label: "Mittwoch" },
    { key: "donnerstag", label: "Donnerstag" },
    { key: "freitag", label: "Freitag" },
    { key: "samstag", label: "Samstag" },
    { key: "sonntag", label: "Sonntag" },
  ];

  useEffect(() => {
    fetchOeffnungszeiten();
  }, []);

  const fetchOeffnungszeiten = async () => {
    try {
      const response = await fetch(`${API_BASE}/oeffnungszeiten`);
      const data = await response.json();
      if (response.ok) {
        setOeffnungszeiten(data);
      } else {
        setError("Fehler beim Laden der Öffnungszeiten");
      }
    } catch (err) {
      setError("Verbindungsfehler");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setUpdating(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE}/oeffnungszeiten`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(oeffnungszeiten),
      });
      const data = await response.json();
      if (response.ok) {
        setOeffnungszeiten(data);
        setSuccessMessage("Öffnungszeiten erfolgreich aktualisiert!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setError(data.message || "Fehler beim Aktualisieren");
      }
    } catch (err) {
      setError("Verbindungsfehler beim Aktualisieren");
    } finally {
      setUpdating(false);
    }
  };

  const handleToggle = (tag) => {
    setOeffnungszeiten((prev) => ({
      ...prev,
      [tag]: {
        ...prev[tag],
        aktiv: !prev[tag].aktiv,
      },
    }));
  };

  const handleTimeChange = (tag, field, value) => {
    setOeffnungszeiten((prev) => ({
      ...prev,
      [tag]: {
        ...prev[tag],
        [field]: value,
      },
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F5BB00] mx-auto mb-4"></div>
          <p className="text-gray-600">Laden...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <p className="text-red-600 font-medium">Fehler: {error}</p>
        </div>
      </div>
    );
  }

  if (!oeffnungszeiten) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Keine Daten gefunden</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#F5BB00] rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black">Öffnungszeiten</h1>
              <p className="text-gray-600 mt-1">
                Verwalten Sie die Öffnungszeiten für jeden Wochentag
              </p>
            </div>
          </div>
        </div>

        {/* Wochentage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {wochentage.map(({ key, label }) => {
            const tagData = oeffnungszeiten[key] || {
              aktiv: false,
              startzeit: "08:00",
              endzeit: "18:00",
            };

            return (
              <div key={key} className="bg-white rounded-2xl shadow-lg p-6">
                {/* Wochentag Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-600 font-bold text-sm">
                        {label.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-black">
                      {label}
                    </h3>
                  </div>

                  {/* Geöffnet Toggle */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={tagData.aktiv || false}
                      onChange={() => handleToggle(key)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F5BB00]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F5BB00]"></div>
                  </label>
                </div>

                {/* Status */}
                <div
                  className={`p-3 rounded-lg mb-4 ${
                    tagData.aktiv
                      ? "bg-green-50 border border-green-200"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                        tagData.aktiv ? "bg-green-100" : "bg-gray-100"
                      }`}
                    >
                      {tagData.aktiv ? (
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`font-medium ${
                        tagData.aktiv ? "text-green-800" : "text-gray-600"
                      }`}
                    >
                      {tagData.aktiv ? "Geöffnet" : "Geschlossen"}
                    </span>
                  </div>
                </div>

                {/* Zeitenauswahl */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Startzeit
                    </label>
                    <input
                      type="time"
                      value={tagData.startzeit || "08:00"}
                      onChange={(e) =>
                        handleTimeChange(key, "startzeit", e.target.value)
                      }
                      disabled={!tagData.aktiv}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                        tagData.aktiv
                          ? "border-gray-300 focus:ring-2 focus:ring-[#F5BB00] focus:border-transparent"
                          : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                      } outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Endzeit
                    </label>
                    <input
                      type="time"
                      value={tagData.endzeit || "18:00"}
                      onChange={(e) =>
                        handleTimeChange(key, "endzeit", e.target.value)
                      }
                      disabled={!tagData.aktiv}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                        tagData.aktiv
                          ? "border-gray-300 focus:ring-2 focus:ring-[#F5BB00] focus:border-transparent"
                          : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                      } outline-none`}
                    />
                  </div>
                </div>

                {/* Zeitspanne Anzeige */}
                {tagData.aktiv && (
                  <div className="mt-4 p-3 bg-[#F5BB00]/10 border border-[#F5BB00]/20 rounded-lg">
                    <div className="flex items-center justify-center">
                      <span className="text-[#F5BB00] font-semibold">
                        {tagData.startzeit} - {tagData.endzeit}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Update Button */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <button
            onClick={handleUpdate}
            disabled={updating}
            className="w-full bg-[#F5BB00] hover:bg-[#F5BB00]/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 disabled:hover:scale-100"
          >
            {updating ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Aktualisiere...
              </div>
            ) : (
              "Öffnungszeiten Aktualisieren"
            )}
          </button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="fixed top-4 right-4 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg z-50 max-w-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-green-800 font-medium">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Oeffnungszeiten;
