import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";
import { fetchServerApi } from "@/lib/server-api";

export async function getAdminSessionToken() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value ?? null;
}

export async function proxyAdminApi(
  path: string,
  init?: RequestInit & { requireAuth?: boolean }
) {
  const token = await getAdminSessionToken();

  if (init?.requireAuth !== false && !token) {
    return NextResponse.json(
      { success: false, message: "Nicht authentifiziert" },
      { status: 401 }
    );
  }

  try {
    const data = await fetchServerApi<unknown>(path, {
      ...init,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...init?.headers,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Proxy-Anfrage fehlgeschlagen";
    const status =
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      typeof (error as { status?: number }).status === "number"
        ? (error as { status: number }).status
        : 500;

    return NextResponse.json(
      { success: false, message },
      { status }
    );
  }
}
