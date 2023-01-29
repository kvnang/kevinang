import { Service } from "@/components/Service";
import { SideNav } from "@/components/SideNav";
import { createClient } from "@/lib/supabaseServer";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return redirect("/");
  }

  const { data: projects, error } = await supabase
    .from("projects")
    .select("id, slug, title, user_id")
    .eq("user_id", session.user.id);

  return (
    <main>
      <p>Overview</p>
    </main>
  );
}
