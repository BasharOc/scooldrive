import type {
  BonusApiResponse,
  EinstellungenApiResponse,
  OeffnungszeitenApiResponse,
  PreiseApiResponse,
  TermineApiResponse,
} from "@/lib/remote-data";

export type AdminUser = {
  id: string;
  username: string;
  lastLogin?: string;
};

export type AdminRegistrationsResponse = {
  success: boolean;
  count: number;
  registrations: AdminRegistration[];
};

export type AdminRegistration = {
  _id: string;
  fahrzeugTyp: string;
  spezifischeKlasse?: string;
  vorname: string;
  nachname: string;
  hatFuehrerschein?: boolean;
  fuehrerscheinTyp?: string;
  getriebe?: string;
  pruefung?: string;
  kursart?: string;
  geburtsdatum?: string;
  geburtsstadt?: string;
  telefon: string;
  email: string;
  adresse: string;
  datenschutz?: boolean;
  isFriendDiscount?: boolean;
  friendName?: string;
  rabatt?: string;
  freundeRabatt?: string;
  nameVonFreund?: string;
  emailStatus: "pending" | "sent" | "failed" | "mocked";
  emailError?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type AdminApiResponse<T> = {
  success?: boolean;
  message?: string;
} & T;

export type AdminDashboardData = {
  settings: EinstellungenApiResponse;
  bonus: BonusApiResponse;
  prices: PreiseApiResponse;
  appointments: TermineApiResponse;
  openingHours: OeffnungszeitenApiResponse;
  registrations: AdminRegistration[];
};
