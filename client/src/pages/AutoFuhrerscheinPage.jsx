import React from "react";
import HeroSection from "../components/auto-führerschein/HeroSection";
import ThreeStepsComponent from "../components/auto-führerschein/ThreeStepsComponent";
import ScheinWahl from "../components/auto-führerschein/ScheinWahl";
import FloatingReviews from "../components/Homepage/FloatingReviews";
import ImageTextComponent from "../components/auto-führerschein/ImageTextComponent";
import { Helmet } from "react-helmet-async";

const AutoFuhrerscheinPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Auto Führerschein Lüneburg – Schnell & Sicher mit Scooldrive
        </title>
        <meta
          name="description"
          content="Auto-Führerschein in Lüneburg machen: Moderne Autos, erfahrene Fahrlehrer, faire Preise und persönliche Betreuung bei Scooldrive. Jetzt informieren & anmelden!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Auto Führerschein Lüneburg – Schnell & Sicher mit Scooldrive"
        />
        <meta
          property="og:description"
          content="Mit Scooldrive zum Auto-Führerschein in Lüneburg: Modern, individuell & professionell. Jetzt durchstarten!"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/fuehrerschein"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Auto Führerschein Lüneburg – Schnell & Sicher mit Scooldrive"
        />
        <meta
          name="twitter:description"
          content="Sicher und schnell den Auto-Führerschein in Lüneburg machen – mit Scooldrive!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://fahrschule-lg.scooldrive.com/fuehrerschein"
        />
      </Helmet>
      <HeroSection />
      <ScheinWahl />
      <ImageTextComponent />
      <ThreeStepsComponent />
      <FloatingReviews />
    </>
  );
};

export default AutoFuhrerscheinPage;
