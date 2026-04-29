export const DEFAULT_SERVER_API_BASE_URL = "http://localhost:3001/api";

export const getServerApiBaseUrl = () => {
  const apiBaseUrl = process.env.API_BASE_URL?.trim();
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL?.trim();

  if (apiBaseUrl) {
    return apiBaseUrl.replace(/\/+$/, "");
  }

  if (publicApiUrl && publicApiUrl.startsWith("http")) {
    return publicApiUrl.replace(/\/+$/, "");
  }

  return DEFAULT_SERVER_API_BASE_URL;
};

export async function fetchServerApi<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const response = await fetch(`${getServerApiBaseUrl()}${normalizedPath}`, {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options?.body ? { "Content-Type": "application/json" } : {}),
      ...options?.headers,
    },
    cache: "no-store",
  });

  const data = (await response.json()) as T & {
    message?: string;
    success?: boolean;
  };

  if (!response.ok) {
    const error = new Error(
      data.message ||
        `Server API request failed for ${normalizedPath}: ${response.status}`
    ) as Error & { status?: number };
    error.status = response.status;
    throw error;
  }

  return data as T;
}
