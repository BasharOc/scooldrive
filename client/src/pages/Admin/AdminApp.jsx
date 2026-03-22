// src/components/AdminApp.jsx
import React from "react";
import Einstellungen from "./components/Einstellungen";
import Bonus from "./components/Bonus";
import Preise from "./components/Preise";
import Termine from "./components/Termine";
import Oeffnungszeiten from "./components/OeffnungsZeiten";

const AdminApp = () => {
  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>Hallo Ranin!</h1> */}
      <h1 style={{ textAlign: "center" }}>Hallo Ranin!</h1>
      <Einstellungen />
      <br />
      <Bonus />
      <br />
      <Preise />
      <br />
      <Termine />
      <br />
      <Oeffnungszeiten />
    </div>
  );
};

export default AdminApp;
