import AdminDashboard from "@/components/Admin/AdminDashboard";
import { requireAdminSession } from "@/lib/admin-auth";

export default async function AdminPage() {
  const admin = await requireAdminSession();

  return <AdminDashboard admin={admin} />;
}
