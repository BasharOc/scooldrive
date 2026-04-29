"use client";

async function parseJson<T>(response: Response): Promise<T> {
  return (await response.json()) as T;
}

export async function adminFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(path, {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options?.body ? { "Content-Type": "application/json" } : {}),
      ...options?.headers,
    },
    credentials: "same-origin",
    cache: "no-store",
  });

  const data = await parseJson<T & { message?: string }>(response);

  if (!response.ok) {
    throw new Error(data.message || `Request failed for ${path}`);
  }

  return data as T;
}
