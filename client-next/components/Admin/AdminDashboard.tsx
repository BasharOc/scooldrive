"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { adminFetch } from "@/components/Admin/api";
import type {
  AdminDashboardData,
  AdminRegistration,
  AdminRegistrationsResponse,
  AdminUser,
} from "@/components/Admin/types";
import type {
  BonusApiResponse,
  EinstellungenApiResponse,
  OeffnungszeitenApiResponse,
  PreiseApiResponse,
  TermineApiResponse,
} from "@/lib/remote-data";

const statusStyles = {
  pending: "border-yellow-200 bg-yellow-50 text-yellow-800",
  sent: "border-green-200 bg-green-50 text-green-800",
  failed: "border-red-200 bg-red-50 text-red-800",
  mocked: "border-blue-200 bg-blue-50 text-blue-800",
} as const;

const statusLabels = {
  pending: "Ausstehend",
  sent: "Gesendet",
  failed: "Fehlgeschlagen",
  mocked: "Mock",
} as const;

const preisFelder: Array<{ key: keyof PreiseApiResponse; label: string }> = [
  { key: "grundgebuehrTheoriekurs", label: "Grundgebühr Theoriekurs" },
  { key: "lernapp", label: "Lernapp" },
  { key: "uebungsstundePKW", label: "Übungsstunde PKW" },
  { key: "sonderfahrtenPKW", label: "Sonderfahrten PKW" },
  { key: "theorieprueung", label: "Theorieprüfung" },
  { key: "praxispruefung", label: "Praxisprüfung" },
  { key: "motorradKlasseAGrundgebuehr", label: "Motorrad Klasse A Grundgebühr" },
  { key: "uebungsstundeMotorrad", label: "Übungsstunde Motorrad" },
  { key: "sonderfahrtenMotorrad", label: "Sonderfahrten Motorrad" },
  { key: "uebungsstundePKWAnhaenger", label: "Übungsstunde PKW Anhänger" },
  { key: "sonderfahrtenPKWAnhaenger", label: "Sonderfahrten PKW Anhänger" },
  { key: "anhaengerKlasseB96", label: "Anhänger Klasse B96" },
  { key: "leichtkraftradB196", label: "Leichtkraftrad B196" },
  { key: "fuehrerscheinantrag", label: "Führerscheinantrag" },
  { key: "sehtest", label: "Sehtest" },
  { key: "ersteHilfeKurs", label: "Erste Hilfe Kurs" },
  { key: "passbild", label: "Passbild" },
  { key: "intensivkursPreis", label: "Intensivkurs Preis" },
];

const weekdays: Array<keyof OeffnungszeitenApiResponse> = [
  "montag",
  "dienstag",
  "mittwoch",
  "donnerstag",
  "freitag",
  "samstag",
  "sonntag",
];

const weekdayLabels: Record<keyof OeffnungszeitenApiResponse, string> = {
  montag: "Montag",
  dienstag: "Dienstag",
  mittwoch: "Mittwoch",
  donnerstag: "Donnerstag",
  freitag: "Freitag",
  samstag: "Samstag",
  sonntag: "Sonntag",
};

const formatDate = (value?: string) => {
  if (!value) return "-";
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const formatDateOnly = (value?: string) => {
  if (!value) return "-";
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
  }).format(new Date(value));
};

const getDisplayValue = (value?: string | number | boolean) => {
  if (value === undefined || value === null || value === "") {
    return "-";
  }

  if (typeof value === "boolean") {
    return value ? "Ja" : "Nein";
  }

  return String(value);
};

function SectionCard({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function StatusBanner({
  error,
  success,
}: {
  error?: string;
  success?: string;
}) {
  if (!error && !success) {
    return null;
  }

  return error ? (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <p className="font-medium text-red-600">{error}</p>
    </div>
  ) : (
    <div className="rounded-lg border border-green-200 bg-green-50 p-4">
      <p className="font-medium text-green-700">{success}</p>
    </div>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value?: string | number | boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-gray-100 py-2 last:border-b-0 sm:grid-cols-3">
      <span className="text-sm font-semibold text-gray-600">{label}</span>
      <span className="text-sm text-gray-900 sm:col-span-2">
        {getDisplayValue(value)}
      </span>
    </div>
  );
}

export default function AdminDashboard({ admin }: { admin: AdminUser }) {
  const router = useRouter();
  const [settings, setSettings] = useState<EinstellungenApiResponse | null>(null);
  const [bonus, setBonus] = useState<BonusApiResponse | null>(null);
  const [prices, setPrices] = useState<PreiseApiResponse | null>(null);
  const [appointments, setAppointments] = useState<TermineApiResponse | null>(null);
  const [openingHours, setOpeningHours] = useState<OeffnungszeitenApiResponse | null>(
    null
  );
  const [registrations, setRegistrations] = useState<AdminRegistration[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [savingKey, setSavingKey] = useState<string | null>(null);

  const currentAppointment = useMemo(
    () =>
      appointments?.termine?.[0] ?? {
        titel: "",
        datum: "",
        aktiv: false,
      },
    [appointments]
  );

  const setSuccessMessage = (message: string) => {
    setSuccess(message);
    window.setTimeout(() => setSuccess(""), 3000);
  };

  const loadDashboard = async () => {
    setLoading(true);
    setError("");

    try {
      const [
        settingsData,
        bonusData,
        pricesData,
        appointmentsData,
        openingHoursData,
        registrationsData,
      ] = await Promise.all([
        adminFetch<EinstellungenApiResponse>("/api/admin/einstellungen"),
        adminFetch<BonusApiResponse>("/api/admin/bonus"),
        adminFetch<PreiseApiResponse>("/api/admin/preise"),
        adminFetch<TermineApiResponse>("/api/admin/termine"),
        adminFetch<OeffnungszeitenApiResponse>("/api/admin/oeffnungszeiten"),
        adminFetch<AdminRegistrationsResponse>("/api/admin/registrations"),
      ]);

      const dashboardData: AdminDashboardData = {
        settings: settingsData,
        bonus: bonusData,
        prices: pricesData,
        appointments: appointmentsData,
        openingHours: openingHoursData,
        registrations: registrationsData.registrations || [],
      };

      setSettings(dashboardData.settings);
      setBonus(dashboardData.bonus);
      setPrices(dashboardData.prices);
      setAppointments(dashboardData.appointments);
      setOpeningHours(dashboardData.openingHours);
      setRegistrations(dashboardData.registrations);
    } catch (dashboardError) {
      setError(
        dashboardError instanceof Error
          ? dashboardError.message
          : "Fehler beim Laden des Admin-Bereichs"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      void loadDashboard();
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  const handleLogout = async () => {
    await adminFetch("/api/admin/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  const saveSection = async <T,>(
    key: string,
    path: string,
    payload: T,
    setter: (value: T) => void,
    successMessage: string
  ) => {
    setSavingKey(key);
    setError("");

    try {
      const data = await adminFetch<T>(path, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
      setter(data);
      setSuccessMessage(successMessage);
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Fehler beim Speichern"
      );
    } finally {
      setSavingKey(null);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-[#F5BB00]" />
          <p className="text-gray-600">Laden...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <section className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">
                Hallo {admin.username}!
              </h1>
              <p className="mt-1 text-gray-600">
                Admin-Bereich für Einstellungen, Inhalte und Registrierungen
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Logout
            </button>
          </div>
        </section>

        <StatusBanner error={error} success={success} />

        <SectionCard
          title="Registrierungen"
          action={
            <button
              type="button"
              onClick={loadDashboard}
              className="rounded-lg bg-[#F5BB00] px-5 py-3 font-semibold text-black transition-colors hover:bg-[#F5BB00]/90"
            >
              Aktualisieren
            </button>
          }
        >
          {registrations.length === 0 ? (
            <p className="text-gray-600">Noch keine Registrierungen gefunden.</p>
          ) : (
            <div className="space-y-4">
              {registrations.map((registration) => {
                const isExpanded = expandedId === registration._id;
                const statusClass =
                  statusStyles[registration.emailStatus] || statusStyles.pending;

                return (
                  <div key={registration._id} className="overflow-hidden rounded-2xl border">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedId(isExpanded ? null : registration._id)
                      }
                      className="w-full p-6 text-left transition-colors hover:bg-gray-50"
                    >
                      <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-5">
                        <div>
                          <p className="font-bold text-black">
                            {registration.vorname} {registration.nachname}
                          </p>
                          <p className="text-sm text-gray-600">{registration.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Telefon</p>
                          <p className="text-sm text-black">{registration.telefon}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Führerschein</p>
                          <p className="text-sm text-black">
                            {registration.fahrzeugTyp}
                            {registration.spezifischeKlasse
                              ? ` / ${registration.spezifischeKlasse}`
                              : ""}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Eingegangen</p>
                          <p className="text-sm text-black">
                            {formatDate(registration.createdAt)}
                          </p>
                        </div>
                        <div className="flex lg:justify-end">
                          <span
                            className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${statusClass}`}
                          >
                            {statusLabels[registration.emailStatus] ||
                              registration.emailStatus}
                          </span>
                        </div>
                      </div>
                    </button>

                    {isExpanded ? (
                      <div className="px-6 pb-6">
                        <div className="rounded-lg bg-gray-50 p-5">
                          <DetailRow label="Adresse" value={registration.adresse} />
                          <DetailRow
                            label="Geburtsdatum"
                            value={formatDateOnly(registration.geburtsdatum)}
                          />
                          <DetailRow
                            label="Geburtsstadt"
                            value={registration.geburtsstadt}
                          />
                          <DetailRow
                            label="Hat Führerschein"
                            value={registration.hatFuehrerschein}
                          />
                          <DetailRow
                            label="Vorhandener Führerschein"
                            value={registration.fuehrerscheinTyp}
                          />
                          <DetailRow label="Getriebe" value={registration.getriebe} />
                          <DetailRow label="Prüfung" value={registration.pruefung} />
                          <DetailRow label="Kursart" value={registration.kursart} />
                          <DetailRow label="Rabatt" value={registration.rabatt} />
                          <DetailRow
                            label="Freunde-Rabatt"
                            value={registration.freundeRabatt}
                          />
                          <DetailRow
                            label="Freund"
                            value={registration.friendName || registration.nameVonFreund}
                          />
                          <DetailRow
                            label="Email-Fehler"
                            value={registration.emailError}
                          />
                          <DetailRow
                            label="Aktualisiert"
                            value={formatDate(registration.updatedAt)}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </SectionCard>

        {settings ? (
          <SectionCard
            title="Einstellungen"
            action={
              <button
                type="button"
                disabled={savingKey === "settings"}
                onClick={() =>
                  saveSection(
                    "settings",
                    "/api/admin/einstellungen",
                    settings,
                    setSettings,
                    "Einstellungen erfolgreich aktualisiert!"
                  )
                }
                className="rounded-lg bg-[#F5BB00] px-5 py-3 font-semibold text-black transition-colors hover:bg-[#F5BB00]/90 disabled:bg-gray-300"
              >
                {savingKey === "settings" ? "Aktualisiere..." : "Einstellungen speichern"}
              </button>
            }
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div>
                    <h3 className="font-medium text-black">Anmeldung Stopp</h3>
                    <p className="text-sm text-gray-600">Neue Anmeldungen deaktivieren</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.anmeldungStopp || false}
                    onChange={() =>
                      setSettings((current) =>
                        current
                          ? { ...current, anmeldungStopp: !current.anmeldungStopp }
                          : current
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div>
                    <h3 className="font-medium text-black">Begrenzte Plätze</h3>
                    <p className="text-sm text-gray-600">Platzbeschränkung aktivieren</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.begrenztePlaetze || false}
                    onChange={() =>
                      setSettings((current) =>
                        current
                          ? {
                              ...current,
                              begrenztePlaetze: !current.begrenztePlaetze,
                            }
                          : current
                      )
                    }
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div>
                    <h3 className="font-medium text-black">WhatsApp</h3>
                    <p className="text-sm text-gray-600">WhatsApp Button anzeigen</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.kontaktOptionen?.whatsapp || false}
                    onChange={() =>
                      setSettings((current) =>
                        current
                          ? {
                              ...current,
                              kontaktOptionen: {
                                ...current.kontaktOptionen,
                                whatsapp: !current.kontaktOptionen?.whatsapp,
                              },
                            }
                          : current
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div>
                    <h3 className="font-medium text-black">Telefon</h3>
                    <p className="text-sm text-gray-600">Telefon auf Website anzeigen</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.kontaktOptionen?.telefon || false}
                    onChange={() =>
                      setSettings((current) =>
                        current
                          ? {
                              ...current,
                              kontaktOptionen: {
                                ...current.kontaktOptionen,
                                telefon: !current.kontaktOptionen?.telefon,
                              },
                            }
                          : current
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </SectionCard>
        ) : null}

        {bonus ? (
          <SectionCard
            title="Bonus"
            action={
              <button
                type="button"
                disabled={savingKey === "bonus"}
                onClick={() =>
                  saveSection(
                    "bonus",
                    "/api/admin/bonus",
                    bonus,
                    setBonus,
                    "Bonus-Einstellungen erfolgreich aktualisiert!"
                  )
                }
                className="rounded-lg bg-[#F5BB00] px-5 py-3 font-semibold text-black transition-colors hover:bg-[#F5BB00]/90 disabled:bg-gray-300"
              >
                {savingKey === "bonus" ? "Aktualisiere..." : "Bonus speichern"}
              </button>
            }
          >
            <div className="grid gap-8 lg:grid-cols-2">
              {(["forAll", "forFriend"] as const).map((sectionKey) => (
                <div key={sectionKey} className="space-y-4 rounded-xl border p-5">
                  <h3 className="text-lg font-bold text-black">
                    {sectionKey === "forAll" ? "Bonus für Alle" : "Bonus für Freunde"}
                  </h3>
                  <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                    <div>
                      <p className="font-medium text-black">Status</p>
                      <p className="text-sm text-gray-600">
                        {sectionKey === "forAll"
                          ? "Bonus aktivieren/deaktivieren"
                          : "Freunde-Bonus aktivieren/deaktivieren"}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={bonus[sectionKey]?.aktiv || false}
                      onChange={() =>
                        setBonus((current) =>
                          current
                            ? {
                                ...current,
                                [sectionKey]: {
                                  ...current[sectionKey],
                                  aktiv: !current[sectionKey]?.aktiv,
                                },
                              }
                            : current
                        )
                      }
                    />
                  </div>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-gray-700">
                      Rabattmenge (€)
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      value={bonus[sectionKey]?.rabattmenge || 0}
                      onChange={(event) =>
                        setBonus((current) =>
                          current
                            ? {
                                ...current,
                                [sectionKey]: {
                                  ...current[sectionKey],
                                  rabattmenge: Number(event.target.value) || 0,
                                },
                              }
                            : current
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-gray-700">
                      Zeitlimit (Stunden)
                    </span>
                    <input
                      type="number"
                      value={bonus[sectionKey]?.zeitlimit || 0}
                      onChange={(event) =>
                        setBonus((current) =>
                          current
                            ? {
                                ...current,
                                [sectionKey]: {
                                  ...current[sectionKey],
                                  zeitlimit: Number(event.target.value) || 0,
                                },
                              }
                            : current
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    />
                  </label>
                </div>
              ))}
            </div>
          </SectionCard>
        ) : null}

        {prices ? (
          <SectionCard
            title="Preise"
            action={
              <button
                type="button"
                disabled={savingKey === "prices"}
                onClick={() =>
                  saveSection(
                    "prices",
                    "/api/admin/preise",
                    prices,
                    setPrices,
                    "Preise erfolgreich aktualisiert!"
                  )
                }
                className="rounded-lg bg-[#F5BB00] px-5 py-3 font-semibold text-black transition-colors hover:bg-[#F5BB00]/90 disabled:bg-gray-300"
              >
                {savingKey === "prices" ? "Aktualisiere..." : "Preise speichern"}
              </button>
            }
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {preisFelder.map(({ key, label }) => (
                <label key={key} className="block rounded-xl border p-5">
                  <span className="mb-3 block text-sm font-semibold text-gray-700">
                    {label}
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    value={prices[key] || 0}
                    onChange={(event) =>
                      setPrices((current) =>
                        current
                          ? {
                              ...current,
                              [key]: Number(event.target.value) || 0,
                            }
                          : current
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-right"
                  />
                </label>
              ))}
            </div>
          </SectionCard>
        ) : null}

        {appointments ? (
          <SectionCard
            title="Termin bearbeiten"
            action={
              <button
                type="button"
                disabled={savingKey === "appointments"}
                onClick={() =>
                  saveSection(
                    "appointments",
                    "/api/admin/termine",
                    currentAppointment,
                    (nextAppointment) =>
                      setAppointments({ termine: [nextAppointment as never] } as TermineApiResponse),
                    "Termin erfolgreich aktualisiert!"
                  )
                }
                className="rounded-lg bg-[#F5BB00] px-5 py-3 font-semibold text-black transition-colors hover:bg-[#F5BB00]/90 disabled:bg-gray-300"
              >
                {savingKey === "appointments" ? "Aktualisiere..." : "Termin speichern"}
              </button>
            }
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-700">Titel</span>
                <input
                  type="text"
                  value={currentAppointment.titel || ""}
                  onChange={(event) =>
                    setAppointments({
                      termine: [{ ...currentAppointment, titel: event.target.value }],
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-700">Datum</span>
                <input
                  type="date"
                  value={
                    currentAppointment.datum
                      ? currentAppointment.datum.split("T")[0]
                      : ""
                  }
                  onChange={(event) =>
                    setAppointments({
                      termine: [{ ...currentAppointment, datum: event.target.value }],
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
              </label>
            </div>
          </SectionCard>
        ) : null}

        {openingHours ? (
          <SectionCard
            title="Öffnungszeiten"
            action={
              <button
                type="button"
                disabled={savingKey === "openingHours"}
                onClick={() =>
                  saveSection(
                    "openingHours",
                    "/api/admin/oeffnungszeiten",
                    openingHours,
                    setOpeningHours,
                    "Öffnungszeiten erfolgreich aktualisiert!"
                  )
                }
                className="rounded-lg bg-[#F5BB00] px-5 py-3 font-semibold text-black transition-colors hover:bg-[#F5BB00]/90 disabled:bg-gray-300"
              >
                {savingKey === "openingHours" ? "Aktualisiere..." : "Öffnungszeiten speichern"}
              </button>
            }
          >
            <div className="grid gap-5 md:grid-cols-2">
              {weekdays.map((day) => (
                <div key={day} className="rounded-xl border p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-black">{weekdayLabels[day]}</h3>
                    <input
                      type="checkbox"
                      checked={openingHours[day].aktiv}
                      onChange={() =>
                        setOpeningHours((current) =>
                          current
                            ? {
                                ...current,
                                [day]: {
                                  ...current[day],
                                  aktiv: !current[day].aktiv,
                                },
                              }
                            : current
                        )
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-gray-700">
                        Start
                      </span>
                      <input
                        type="time"
                        value={openingHours[day].startzeit}
                        onChange={(event) =>
                          setOpeningHours((current) =>
                            current
                              ? {
                                  ...current,
                                  [day]: {
                                    ...current[day],
                                    startzeit: event.target.value,
                                  },
                                }
                              : current
                          )
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-gray-700">
                        Ende
                      </span>
                      <input
                        type="time"
                        value={openingHours[day].endzeit}
                        onChange={(event) =>
                          setOpeningHours((current) =>
                            current
                              ? {
                                  ...current,
                                  [day]: {
                                    ...current[day],
                                    endzeit: event.target.value,
                                  },
                                }
                              : current
                          )
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        ) : null}
      </div>
    </div>
  );
}
