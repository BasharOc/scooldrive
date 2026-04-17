// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Impressum, AGB, Datenschutz } from "./pages/LegalNotice";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AutoFuhrerscheinPage from "./pages/AutoFuhrerscheinPage"; // Importiere die neue Seite
import { LanguageProvider } from "./contexts/LanguageContext";
import AutoPage from "./pages/AutoPage";
import AutoAnhangerPage from "./pages/AutoAnhangerPage";
import MotorradPage from "./pages/MotorradPage";
import TheorieKursPage from "./pages/TheorieKursPage";
import IntensivKursPage from "./pages/IntensivKursPage";
import PreisePage from "./pages/PreisePage";
import PunkteAbbauenPage from "./pages/PunkteAbbauenPage";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./pages/CookieBanner";
import BlogOverview from "./pages/Blog/BlogOverview";
import BlogArticlePage from "./pages/Blog/BlogArticlePage";
import AdminApp from "./pages/Admin/AdminApp";
import Login from "./pages/Admin/Login";
import ProtectedRoute from "./pages/Admin/ProtectedRoute";
import AnmeldungLeitung from "./pages/AnmeldungLeitung";
import MaximalCapacity from "./pages/MaximalCapacity";

function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <HomePage />
                </MainLayout>
              }
            />
            <Route
              path="/fuehrerschein"
              element={
                <MainLayout>
                  <AutoFuhrerscheinPage />
                </MainLayout>
              }
            />
            <Route
              path="/auto-fuehrerschein"
              element={
                <MainLayout>
                  <AutoPage />
                </MainLayout>
              }
            />
            <Route
              path="/auto-anhaenger"
              element={
                <MainLayout>
                  <AutoAnhangerPage />
                </MainLayout>
              }
            />
            <Route
              path="/motorrad-fuehrerschein"
              element={
                <MainLayout>
                  <MotorradPage />
                </MainLayout>
              }
            />
            <Route
              path="/theoriekurs"
              element={
                <MainLayout>
                  <TheorieKursPage />
                </MainLayout>
              }
            />
            <Route
              path="/intensivkurse"
              element={
                <MainLayout>
                  <IntensivKursPage />
                </MainLayout>
              }
            />
            <Route
              path="/preise"
              element={
                <MainLayout>
                  <PreisePage />
                </MainLayout>
              }
            />
            <Route
              path="/punkte-abbauen"
              element={
                <MainLayout>
                  <PunkteAbbauenPage />
                </MainLayout>
              }
            />
            <Route
              path="/impressum"
              element={
                <MainLayout>
                  <Impressum />
                </MainLayout>
              }
            />
            <Route
              path="/AGB"
              element={
                <MainLayout>
                  <AGB />
                </MainLayout>
              }
            />
            <Route
              path="/datenschutz"
              element={
                <MainLayout>
                  <Datenschutz />
                </MainLayout>
              }
            />
            <Route path="/anmelden" element={<AnmeldungLeitung />} />
            <Route path="/maximal-capacity" element={<MaximalCapacity />} />
            <Route
              path="/blogs"
              element={
                <MainLayout>
                  <BlogOverview />
                </MainLayout>
              }
            />
            <Route
              path="/blogs/:slug"
              element={
                <MainLayout>
                  <BlogArticlePage />
                </MainLayout>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminApp />
                </ProtectedRoute>
              }
            />
          </Routes>
          <CookieBanner />
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
