import { proxyAdminApi } from "@/app/api/admin/_lib";

export async function GET() {
  return proxyAdminApi("/registrations");
}
