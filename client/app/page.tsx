import { Login } from "@/components/Login";
import { Logo } from "@/components/Logo";
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
        <div className="max-w-xl mx-auto">
          <div className="mb-6">
            <Logo />
          </div>
          <Login />
        </div>
      </div>
    </main>
  );
}
