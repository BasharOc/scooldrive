import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnmeldungPage from "./AnmeldungPage";
import API_BASE from "../utils/api";

const AnmeldungLeitung = () => {
  const [einstellungen, setEinstellungen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!loading && einstellungen?.anmeldungStopp) {
      navigate("/maximal-capacity");
    }
  }, [loading, einstellungen, navigate]);

  if (loading) {
    return <p>Laden...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return <AnmeldungPage />;
};

export default AnmeldungLeitung;
