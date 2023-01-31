import { CustomerPortal } from "@/components/CustomerPortal";
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
      <div className="mb-10 last:mb-0">
        <h2 className="h4 mb-4">Your Projects</h2>
        <div className="flex flex-wrap">
          {projects?.map((project) => (
            <div
              key={project.id}
              className="p-4 border-2 border-bg-tint-1 rounded-lg"
            >
              <span>{project.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10 last:mb-0">
        <CustomerPortal />
      </div>
    </main>
  );
}
