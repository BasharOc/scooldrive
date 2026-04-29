import { proxyAdminApi } from "@/app/api/admin/_lib";

export async function GET() {
  return proxyAdminApi("/bonus");
}

export async function PUT(request: Request) {
  const body = await request.text();

  return proxyAdminApi("/bonus", {
    method: "PUT",
    body,
  });
}
