// src/components/Preise.jsx
import React, { useState, useEffect } from "react";
import API_BASE from "../../../utils/api";

const Preise = () => {
  const [preise, setPreise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const preisFelder = [
    { key: "grundgebuehrTheoriekurs", label: "Grundgebühr Theoriekurs" },
    { key: "lernapp", label: "Lernapp" },
    { key: "uebungsstundePKW", label: "Übungsstunde PKW" },
    { key: "sonderfahrtenPKW", label: "Sonderfahrten PKW" },
    { key: "theorieprueung", label: "Theorieprüfung" },
    { key: "praxispruefung", label: "Praxisprüfung" },
    { key: "uebungsstundeMotorrad", label: "Übungsstunde Motorrad" },
    { key: "sonderfahrtenMotorrad", label: "Sonderfahrten Motorrad" },
    { key: "sonderfahrtenPKWAnhaenger", label: "Sonderfahrten PKW Anhänger" },
    { key: "uebungsstundePKWAnhaenger", label: "Übungsstunde PKW Anhänger" },
    { key: "fuehrerscheinantrag", label: "Führerscheinantrag" },
    { key: "sehtest", label: "Sehtest" },
    { key: "ersteHilfeKurs", label: "Erste Hilfe Kurs" },
    { key: "passbild", label: "Passbild" },
    { key: "anhaengerKlasseB96", label: "Anhänger Klasse B96" },
    { key: "leichtkraftradB196", label: "Leichtkraftrad B196" },
    {
      key: "motorradKlasseAGrundgebuehr",
      label: "Motorrad Klasse A Grundgebühr",
    },
    { key: "intensivkursPreis", label: "Intensivkurs Preis" },
  ];

  useEffect(() => {
    fetchPreise();
  }, []);

  const fetchPreise = async () => {
    try {
      const response = await fetch(`${API_BASE}/preise`);
      const data = await response.json();
      if (response.ok) {
        setPreise(data);
      } else {
        setError("Fehler beim Laden der Preise");
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
      const response = await fetch(`${API_BASE}/preise`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(preise),
      });
      const data = await response.json();
      if (response.ok) {
        setPreise(data);
        setSuccessMessage("Preise erfolgreich aktualisiert!");
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

  const handlePriceChange = (field, value) => {
    setPreise((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
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

  if (!preise) {
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
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
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
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-black">Preise</h1>
          </div>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {preisFelder.map(({ key, label }) => (
            <div key={key} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {label}
                </h3>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    value={preise[key] || 0}
                    onChange={(e) => handlePriceChange(key, e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5BB00] focus:border-transparent outline-none transition-all duration-200 text-right"
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 font-medium">€</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#F5BB00]">
                  {(preise[key] || 0).toFixed(2)}€
                </span>
              </div>
            </div>
          ))}
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
              "Preise Aktualisieren"
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

export default Preise;
