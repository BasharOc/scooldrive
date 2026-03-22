import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import DrivingSchoolSection from "../components/Homepage/DrivingSchoolSection";
import PersonalApproachSection from "../components/Homepage/PersonalApproachSection";
import TeamCarousel from "../components/Homepage/TeamCarousel";
import FloatingReviews from "../components/Homepage/FloatingReviews";
import TrafficRules from "../components/Homepage/TrafficRules";
import SchoolLocation from "../components/Homepage/SchoolLocation";
import FAQ from "../components/Homepage/FAQ";
import ContactForm from "../components/Homepage/ContactForm";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          Fahrschule Scooldrive Lüneburg – Jetzt Führerschein machen
        </title>
        <meta
          name="description"
          content="Jetzt den Führerschein in Lüneburg machen! Professionelle Fahrlehrer, moderne Fahrzeuge, faire Preise und persönliche Betreuung bei der Fahrschule Scooldrive. Jetzt anmelden und durchstarten!"
        />
        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="Fahrschule Scooldrive Lüneburg – Jetzt Führerschein machen"
        />
        <meta
          property="og:description"
          content="Deine Fahrschule in Lüneburg: Modern, professionell und mit fairen Preisen. Jetzt online anmelden!"
        />
        <meta
          property="og:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        <meta
          property="og:url"
          content="https://fahrschule-lg.scooldrive.com/"
        />
        {/* Twitter Card (optional, falls Social wichtig ist) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fahrschule Scooldrive Lüneburg – Jetzt Führerschein machen"
        />
        <meta
          name="twitter:description"
          content="Jetzt Führerschein in Lüneburg machen – bei Scooldrive, deiner modernen Fahrschule!"
        />
        <meta
          name="twitter:image"
          content="https://fahrschule-lg.scooldrive.com/logo-icon.png"
        />
        {/* Canonical Link */}
        <link rel="canonical" href="https://fahrschule-lg.scooldrive.com/" />
      </Helmet>
      <HeroSection />
      <DrivingSchoolSection />
      <PersonalApproachSection />
      {/* <TeamCarousel /> */}
      <FloatingReviews />
      <TrafficRules />
      <SchoolLocation />
      <FAQ />
      {/* <ContactForm /> */}
    </>
  );
};

export default HomePage;
