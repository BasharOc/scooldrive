import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchServerApi } from "@/lib/server-api";

export const ADMIN_SESSION_COOKIE = "scooldrive_admin_token";

export async function getAdminToken() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value ?? null;
}

export async function verifyAdminSession() {
  const token = await getAdminToken();

  if (!token) {
    return null;
  }

  try {
    const response = await fetchServerApi<{
      success: boolean;
      admin: {
        id: string;
        username: string;
        lastLogin?: string;
      };
    }>("/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.admin;
  } catch {
    return null;
  }
}

export async function requireAdminSession() {
  const admin = await verifyAdminSession();

  if (!admin) {
    redirect("/login");
  }

  return admin;
}
