import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrollt die Seite nach oben
  }, [pathname]); // Führt die Aktion bei jedem Routenwechsel aus

  return null; // Kein sichtbarer Inhalt
};

export default ScrollToTop;
