import { Login } from "@/components/Login";
import { Service } from "@/components/Service";
import { SideNav } from "@/components/SideNav";
import { createClient } from "@/lib/supabaseServer";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/account");
  }

  return (
    <main>
      <div className="container py-16">
        <Login />
      </div>
    </main>
  );
}
