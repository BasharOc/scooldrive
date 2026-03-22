import React from "react";
import HeroSection from "../components/Motorrad/HeroSection";
import Requirements from "../components/Motorrad/Requirements";
import MotorradFuehrerscheinFacts from "../components/Motorrad/MotorradFuehrerscheinFacts";
import MotorradInformation from "../components/Motorrad/MotorradInformation";
import MotorradLicenseSteps from "../components/Motorrad/MotorradLicenseSteps MotorradLicenseSteps";
import TrafficRules from "../components/Homepage/TrafficRules";
import { Helmet } from "react-helmet-async";

const MotorradPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Motorrad Führerschein Lüneburg – Klasse A, A1, A2 & AM bei Scooldrive
        </title>
        <meta
          name="description"
          content="Motorrad Führerschein (Klassen A, A1, A2, AM) in Lüneburg machen: Moderne Motorräder, erfahrene Fahrlehrer und individuelle Betreuung bei Scooldrive. Jetzt durchstarten!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Motorrad Führerschein Lüneburg – Klasse A, A1, A2 & AM bei Scooldrive"
        />
        <meta
          property="og:description"
          content="Jetzt Motorrad Führerschein in Lüneburg machen – alle Klassen bei Scooldrive. Moderne Bikes, persönlicher Unterricht und flexible Termine. Informiere dich jetzt!"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/motorrad-fuehrerschein"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Motorrad Führerschein Lüneburg – Klasse A, A1, A2 & AM bei Scooldrive"
        />
        <meta
          name="twitter:description"
          content="Motorrad Führerschein in Lüneburg machen – alle Klassen, moderne Motorräder & persönliche Betreuung bei Scooldrive!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/motorrad-fuehrerschein"
        />
      </Helmet>

      <HeroSection />
      <Requirements />
      <MotorradFuehrerscheinFacts />
      <MotorradInformation />
      <MotorradLicenseSteps />
      <TrafficRules />
    </div>
  );
};

export default MotorradPage;
