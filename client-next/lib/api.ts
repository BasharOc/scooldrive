import type {
  EinstellungenApiResponse,
  PreiseApiResponse,
  TermineApiResponse,
} from "@/lib/remote-data";

const DEFAULT_API_BASE_URL = "http://localhost:3001/api";

const normalizeApiPath = (path: string) => {
  if (!path) {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const getApiBaseUrl = () => {
  const apiBaseUrl = process.env.API_BASE_URL?.trim();

  return apiBaseUrl && apiBaseUrl.length > 0
    ? apiBaseUrl.replace(/\/+$/, "")
    : DEFAULT_API_BASE_URL;
};

export async function fetchApi<T>(
  path: string,
  options?: RequestInit & {
    next?: NextFetchRequestConfig;
  }
): Promise<T> {
  const normalizedPath = normalizeApiPath(path);
  const url = `${getApiBaseUrl()}${normalizedPath}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(
      `API request failed for ${normalizedPath}: ${response.status} ${response.statusText}`
    );
  }

  return (await response.json()) as T;
}

export const getEinstellungen = () =>
  fetchApi<EinstellungenApiResponse>("/einstellungen", {
    next: { revalidate: 60 },
  });

export const getTermine = () =>
  fetchApi<TermineApiResponse>("/termine", {
    next: { revalidate: 60 },
  });

export const getPreise = () =>
  fetchApi<PreiseApiResponse>("/preise", {
    next: { revalidate: 60 },
  });
