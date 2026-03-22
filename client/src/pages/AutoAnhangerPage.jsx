import React from "react";
import HeroSection from "../components/AutoAnhanger/HeroSection";
import TrailerLicenseRequirements from "../components/AutoAnhanger/TrailerLicenseRequirements";
import TrailerLicenseSteps from "../components/AutoAnhanger/TrailerLicenseSteps";
import RequirementsComponent from "../components/AutoAnhanger/RequirementsComponent";
import { Helmet } from "react-helmet-async";

const AutoAnhangerPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Auto Anhänger Führerschein Lüneburg – Klasse BE & B96 bei Scooldrive
        </title>
        <meta
          name="description"
          content="Auto Anhänger Führerschein (Klasse BE & B96) in Lüneburg: Flexible Termine, moderne Fahrzeuge und erfahrene Fahrlehrer bei Scooldrive. Jetzt für den Anhänger-Führerschein anmelden!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Auto Anhänger Führerschein Lüneburg – Klasse BE & B96 bei Scooldrive"
        />
        <meta
          property="og:description"
          content="Anhänger Führerschein in Lüneburg machen – mit Scooldrive einfach und schnell zur Klasse BE oder B96. Jetzt informieren und starten!"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/auto-anhaenger"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Auto Anhänger Führerschein Lüneburg – Klasse BE & B96 bei Scooldrive"
        />
        <meta
          name="twitter:description"
          content="Anhänger Führerschein in Lüneburg machen – flexibel & unkompliziert mit Scooldrive!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/auto-anhaenger"
        />
      </Helmet>

      <HeroSection />
      <TrailerLicenseRequirements />
      <TrailerLicenseSteps />
      <RequirementsComponent />
    </>
  );
};

export default AutoAnhangerPage;
