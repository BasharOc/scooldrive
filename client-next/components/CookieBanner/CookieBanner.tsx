"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaCookie, FaCog, FaGlobe, FaTimes } from "react-icons/fa";
import { loadGAScript } from "@/components/CookieBanner/load-gtag";
import type { CookieConsentSettings } from "@/components/CookieBanner/types";
import { cookieBannerByLocale } from "@/messages/cookie-banner";
import type { Locale } from "@/types/i18n";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const COOKIE_CONSENT_KEY = "cookieConsent";
const COOKIE_CONSENT_VERSION = 1;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

const getLocaleFromPath = (pathname: string | null): Locale => {
  if (!pathname) {
    return "de";
  }

  if (pathname.startsWith("/en")) {
    return "en";
  }

  if (pathname.startsWith("/ar")) {
    return "ar";
  }

  return "de";
};

export default function CookieBanner() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const content = cookieBannerByLocale[locale];
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<Omit<CookieConsentSettings, "timestamp" | "version">>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const privacyPath = useMemo(() => `/${locale}/datenschutz`, [locale]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);

      if (!storedConsent) {
        setShowBanner(true);
        return;
      }

      try {
        const parsed = JSON.parse(storedConsent) as CookieConsentSettings;

        if (parsed.analytics && GA_MEASUREMENT_ID) {
          loadGAScript(GA_MEASUREMENT_ID);
        }
      } catch {
        setShowBanner(true);
      }
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showBanner ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showBanner]);

  const persistConsent = (nextSettings: Omit<CookieConsentSettings, "timestamp" | "version">) => {
    const payload: CookieConsentSettings = {
      ...nextSettings,
      version: COOKIE_CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    };

    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(payload));

    if (payload.analytics && GA_MEASUREMENT_ID) {
      loadGAScript(GA_MEASUREMENT_ID);
    }
  };

  const handleAcceptAll = () => {
    const nextSettings = {
      necessary: true as const,
      analytics: true,
      marketing: true,
    };

    setSettings(nextSettings);
    persistConsent(nextSettings);
    setShowBanner(false);
  };

  const handleOnlyNecessary = () => {
    const nextSettings = {
      necessary: true as const,
      analytics: false,
      marketing: false,
    };

    setSettings(nextSettings);
    persistConsent(nextSettings);
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    persistConsent(settings);
    setShowBanner(false);
  };

  const toggleSetting = (key: "analytics" | "marketing") => {
    setSettings((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="max-h-[80vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <div className="flex items-center justify-between border-b p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5BB00]">
                  <FaCookie className="text-xl text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black">{content.title}</h2>
                  <p className="mt-1 text-sm text-gray-600">{content.description}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleOnlyNecessary}
                className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close cookie banner"
              >
                <FaTimes />
              </button>
            </div>

            <div className="border-b bg-gray-50 px-6 py-3">
              <div className="flex items-center gap-3">
                <FaGlobe className="text-[#F5BB00]" />
                <div className="flex gap-2">
                  {(["de", "en", "ar"] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {}}
                      disabled
                      className={`rounded-lg px-3 py-1 text-sm font-semibold ${
                        locale === lang
                          ? "bg-[#F5BB00] text-black"
                          : "bg-white text-gray-400"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6">
              {showDetails ? (
                <div className="space-y-6">
                  <button
                    type="button"
                    onClick={() => setShowDetails(false)}
                    className="font-medium text-[#F5BB00] hover:underline"
                  >
                    {content.buttons.backToSimple}
                  </button>

                  <p className="text-gray-700">{content.detailsDescription}</p>

                  <div className="space-y-4">
                    <div className="rounded-xl border p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <h3 className="text-lg font-bold text-black">
                              {content.cookies.necessary.title}
                            </h3>
                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                              {content.cookies.necessary.badge}
                            </span>
                          </div>
                          <p className="mb-2 text-gray-600">
                            {content.cookies.necessary.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            {content.cookies.necessary.examples}
                          </p>
                        </div>
                        <div className="flex h-6 w-11 items-center rounded-full bg-[#F5BB00] p-1">
                          <div className="ml-auto h-4 w-4 rounded-full bg-white" />
                        </div>
                      </div>
                    </div>

                    {(["analytics", "marketing"] as const).map((key) => (
                      <div key={key} className="rounded-xl border p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="mb-2 text-lg font-bold text-black">
                              {content.cookies[key].title}
                            </h3>
                            <p className="mb-2 text-gray-600">
                              {content.cookies[key].description}
                            </p>
                            <p className="text-sm text-gray-500">
                              {content.cookies[key].examples}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleSetting(key)}
                            className={`flex h-6 w-11 items-center rounded-full p-1 transition-colors ${
                              settings[key] ? "bg-[#F5BB00]" : "bg-gray-200"
                            }`}
                            aria-pressed={settings[key]}
                          >
                            <div
                              className={`h-4 w-4 rounded-full bg-white transition-transform ${
                                settings[key] ? "translate-x-5" : ""
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-gray-600">
                  {content.footer}{" "}
                  <Link href={privacyPath} className="font-semibold text-[#F5BB00] underline">
                    {content.privacyLink}
                  </Link>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  {showDetails ? (
                    <button
                      type="button"
                      onClick={handleSaveSettings}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F5BB00] px-5 py-3 font-semibold text-black transition-colors hover:bg-yellow-400"
                    >
                      <FaCheck />
                      {content.buttons.saveSettings}
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={handleOnlyNecessary}
                        className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        {content.buttons.onlyNecessary}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowDetails(true)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        <FaCog />
                        {content.buttons.settings}
                      </button>
                      <button
                        type="button"
                        onClick={handleAcceptAll}
                        className="rounded-xl bg-[#F5BB00] px-5 py-3 font-semibold text-black transition-colors hover:bg-yellow-400"
                      >
                        {content.buttons.acceptAll}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
