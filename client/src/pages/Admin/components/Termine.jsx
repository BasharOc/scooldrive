// src/components/Termine.jsx
import React, { useState, useEffect } from "react";
import API_BASE from "../../../utils/api";

const Termine = () => {
  const [termineData, setTermineData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchTermine();
  }, []);

  const fetchTermine = async () => {
    try {
      const response = await fetch(`${API_BASE}/termine`);
      const data = await response.json();

      if (response.ok) {
        setTermineData(data);
      } else {
        setError("Fehler beim Laden der Termine");
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

      // Nur das erste Termin-Objekt senden (oder ein leeres wenn keine vorhanden)
      const terminToSend =
        termineData.termine && termineData.termine.length > 0
          ? termineData.termine[0]
          : {
              titel: "",
              datum: new Date().toISOString().split("T")[0],
              aktiv: true,
            };

      const response = await fetch(`${API_BASE}/termine`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(terminToSend), // Einzelnes Objekt statt Array
      });

      const data = await response.json();

      if (response.ok) {
        setTermineData(data);
        setSuccessMessage("Termin erfolgreich aktualisiert!");
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

  const handleTerminChange = (field, value) => {
    setTermineData((prev) => ({
      ...prev,
      termine: [
        {
          ...prev.termine[0],
          [field]: value,
        },
      ],
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

  if (!termineData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Keine Daten gefunden</p>
        </div>
      </div>
    );
  }

  // Aktueller Termin (erster aus dem Array oder leerer Default)
  const currentTermin =
    termineData.termine && termineData.termine.length > 0
      ? termineData.termine[0]
      : { titel: "", datum: "", aktiv: false };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black">
                Termin bearbeiten
              </h1>
              <p className="text-gray-600 mt-1">
                Bearbeiten Sie den aktuellen Termin
              </p>
            </div>
          </div>
        </div>

        {/* Termin Formular */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            {/* Titel */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titel
              </label>
              <input
                type="text"
                value={currentTermin.titel || ""}
                onChange={(e) => handleTerminChange("titel", e.target.value)}
                placeholder="Termin Titel eingeben"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5BB00] focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            {/* Datum */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Datum
              </label>
              <input
                type="date"
                value={
                  currentTermin.datum ? currentTermin.datum.split("T")[0] : ""
                }
                onChange={(e) => handleTerminChange("datum", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5BB00] focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            {/* Status Anzeige */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">
                    Status: {currentTermin.aktiv ? "Aktiv" : "Inaktiv"}
                  </p>
                  <p className="text-blue-600 text-sm">
                    Aktueller Status des Termins
                  </p>
                </div>
              </div>
            </div>
          </div>
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
              "Termin Aktualisieren"
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

export default Termine;
