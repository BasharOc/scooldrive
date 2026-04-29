import { redirect } from "next/navigation";
import LoginForm from "@/components/Admin/LoginForm";
import { verifyAdminSession } from "@/lib/admin-auth";

export default async function LoginPage() {
  const admin = await verifyAdminSession();

  if (admin) {
    redirect("/admin");
  }

  return <LoginForm />;
}
