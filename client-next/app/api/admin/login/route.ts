import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";
import { fetchServerApi } from "@/lib/server-api";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    username?: string;
    password?: string;
  };

  try {
    const data = await fetchServerApi<{
      success: boolean;
      token: string;
      admin: {
        id: string;
        username: string;
        lastLogin?: string;
      };
      message: string;
    }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const cookieStore = await cookies();
    cookieStore.set(ADMIN_SESSION_COOKIE, data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return NextResponse.json({
      success: true,
      admin: data.admin,
      message: data.message,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Login fehlgeschlagen";
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
