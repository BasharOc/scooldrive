import { proxyAdminApi } from "@/app/api/admin/_lib";

export async function GET() {
  return proxyAdminApi("/termine");
}

export async function PUT(request: Request) {
  const body = await request.text();

  return proxyAdminApi("/termine", {
    method: "PUT",
    body,
  });
}
