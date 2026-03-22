// src/hooks/useApiData.js
import { useState, useEffect } from "react";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://server.scooldrive.com/api";

const useApiData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_BASE}/${endpoint}`);
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          setError(`Fehler beim Laden der ${endpoint}`);
        }
      } catch (err) {
        setError("Verbindungsfehler");
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) {
      fetchData();
    }
  }, [endpoint]);

  const refetch = async () => {
    if (endpoint) {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_BASE}/${endpoint}`);
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          setError(`Fehler beim Laden der ${endpoint}`);
        }
      } catch (err) {
        setError("Verbindungsfehler");
      } finally {
        setLoading(false);
      }
    }
  };

  return { data, loading, error, refetch };
};

export default useApiData;
