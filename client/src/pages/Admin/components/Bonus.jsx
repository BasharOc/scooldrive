// src/components/Bonus.jsx
import React, { useState, useEffect } from "react";
import API_BASE from "../../../utils/api";

const Bonus = () => {
  const [bonus, setBonus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchBonus();
  }, []);

  const fetchBonus = async () => {
    try {
      const response = await fetch(`${API_BASE}/bonus`);
      const data = await response.json();

      if (response.ok) {
        setBonus(data);
      } else {
        setError("Fehler beim Laden der Bonus-Einstellungen");
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
      const response = await fetch(`${API_BASE}/bonus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bonus),
      });

      const data = await response.json();

      if (response.ok) {
        setBonus(data);
        setSuccessMessage("Bonus-Einstellungen erfolgreich aktualisiert!");
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

  const handleToggle = (category, field) => {
    setBonus((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: !prev[category][field],
      },
    }));
  };

  const handleNumberChange = (category, field, value) => {
    setBonus((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: parseFloat(value) || 0,
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

  if (!bonus) {
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-black">
              Bonus Einstellungen
            </h1>
          </div>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bonus für Alle */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-black mb-6 flex items-center">
              <div className="w-8 h-8 bg-[#F5BB00] rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              Bonus für Alle
            </h2>

            <div className="space-y-6">
              {/* Aktiv Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-black">Status</h3>
                  <p className="text-sm text-gray-600">
                    Bonus aktivieren/deaktivieren
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={bonus.forAll?.aktiv || false}
                    onChange={() => handleToggle("forAll", "aktiv")}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F5BB00]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F5BB00]"></div>
                </label>
              </div>

              {/* Rabattmenge */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rabattmenge (€)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={bonus.forAll?.rabattmenge || 0}
                  onChange={(e) =>
                    handleNumberChange("forAll", "rabattmenge", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5BB00] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="0.00"
                />
              </div>

              {/* Zeitlimit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zeitlimit (Stunden)
                </label>
                <input
                  type="number"
                  value={bonus.forAll?.zeitlimit || 0}
                  onChange={(e) =>
                    handleNumberChange("forAll", "zeitlimit", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5BB00] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* Bonus für Freunde */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-black mb-6 flex items-center">
              <div className="w-8 h-8 bg-[#F5BB00] rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197V9a3 3 0 00-3-3v5.197"
                  />
                </svg>
              </div>
              Bonus für Freunde
            </h2>

            <div className="space-y-6">
              {/* Aktiv Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-black">Status</h3>
                  <p className="text-sm text-gray-600">
                    Freunde-Bonus aktivieren/deaktivieren
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={bonus.forFriend?.aktiv || false}
                    onChange={() => handleToggle("forFriend", "aktiv")}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F5BB00]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F5BB00]"></div>
                </label>
              </div>

              {/* Rabattmenge */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rabattmenge (€)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={bonus.forFriend?.rabattmenge || 0}
                  onChange={(e) =>
                    handleNumberChange(
                      "forFriend",
                      "rabattmenge",
                      e.target.value,
                    )
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5BB00] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="0.00"
                />
              </div>

              {/* Zeitlimit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zeitlimit (Stunden)
                </label>
                <input
                  type="number"
                  value={bonus.forFriend?.zeitlimit || 0}
                  onChange={(e) =>
                    handleNumberChange("forFriend", "zeitlimit", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5BB00] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
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
              "Bonus-Einstellungen Aktualisieren"
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
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bonus;
