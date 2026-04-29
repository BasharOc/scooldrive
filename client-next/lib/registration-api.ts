import type { BonusApiResponse } from "@/lib/remote-data";

type RegistrationApiSuccess = {
  success: boolean;
  message: string;
  registration: {
    id: string;
    emailStatus: string;
    createdAt: string;
  };
  clientUpdateToken: string;
};

const DEFAULT_PUBLIC_API_URL = "http://localhost:3001/api";

const normalizeApiBase = (value?: string) => {
  const trimmed = value?.trim();

  if (!trimmed) {
    return DEFAULT_PUBLIC_API_URL;
  }

  return trimmed.replace(/\/+$/, "");
};

export const getPublicApiBaseUrl = () =>
  normalizeApiBase(process.env.NEXT_PUBLIC_API_URL);

async function fetchPublicApi<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const response = await fetch(`${getPublicApiBaseUrl()}${normalizedPath}`, {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options?.body ? { "Content-Type": "application/json" } : {}),
      ...options?.headers,
    },
  });

  const data = (await response.json()) as T & {
    success?: boolean;
    message?: string;
  };

  if (!response.ok) {
    throw new Error(
      data?.message ||
        `Public API request failed for ${normalizedPath}: ${response.status}`
    );
  }

  return data as T;
}

export const getBonus = () =>
  fetchPublicApi<BonusApiResponse>("/bonus", {
    cache: "no-store",
  });

export const createRegistration = (payload: unknown) =>
  fetchPublicApi<RegistrationApiSuccess>("/registrations", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateRegistrationEmailStatus = ({
  clientUpdateToken,
  emailError = "",
  emailStatus,
  registrationId,
}: {
  registrationId: string;
  clientUpdateToken: string;
  emailStatus: "sent" | "failed" | "mocked";
  emailError?: string;
}) =>
  fetchPublicApi<{
    success: boolean;
    message: string;
  }>(`/registrations/${registrationId}/email-status`, {
    method: "PATCH",
    body: JSON.stringify({
      clientUpdateToken,
      emailStatus,
      emailError,
    }),
  });
