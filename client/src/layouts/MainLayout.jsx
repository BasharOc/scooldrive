import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import BonusNavbar from "../components/BonusNavbar";
import API_BASE from "../utils/api";

export default function MainLayout({ children }) {
  const [einstellungen, setEinstellungen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEinstellungen = async () => {
    try {
      const response = await fetch(`${API_BASE}/einstellungen`);
      const data = await response.json();

      if (response.ok) {
        // console.log(data);
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

  return (
    <>
      {!loading && einstellungen?.kontaktOptionen?.whatsapp && (
        <WhatsAppButton />
      )}
      <BonusNavbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      {error && <p className="text-red-500 text-center">{error}</p>}
    </>
  );
}
