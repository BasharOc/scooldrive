import React from "react";
import TrailerLicenseFacts from "../components/AutoPage/TrailerLicenseFacts";
import HeroSection from "../components/AutoPage/HeroSection";
import DrivingSchoolSteps from "../components/AutoPage/DrivingSchoolSteps";
import { Helmet } from "react-helmet-async";

const AutoPage = () => {
  return (
    <>
      <Helmet>
        <title>Auto Führerschein in Lüneburg – Klasse B bei Scooldrive</title>
        <meta
          name="description"
          content="Auto Führerschein (Klasse B) in Lüneburg: Modernste Fahrzeuge, individuelle Betreuung und flexible Fahrstunden bei der Fahrschule Scooldrive. Jetzt informieren & anmelden!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Auto Führerschein in Lüneburg – Klasse B bei Scooldrive"
        />
        <meta
          property="og:description"
          content="Dein Weg zum Auto Führerschein (Klasse B) in Lüneburg – mit modernen Fahrzeugen, erfahrenen Fahrlehrern und persönlicher Beratung. Starte jetzt durch!"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/auto-fuehrerschein"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Auto Führerschein in Lüneburg – Klasse B bei Scooldrive"
        />
        <meta
          name="twitter:description"
          content="Mit Scooldrive zum Auto Führerschein in Lüneburg: Moderne Fahrzeuge & erfahrene Fahrlehrer. Jetzt informieren!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/auto-fuehrerschein"
        />
      </Helmet>
      <div className="">
        <HeroSection />
        <TrailerLicenseFacts />
        <DrivingSchoolSteps />
      </div>
    </>
  );
};

export default AutoPage;
