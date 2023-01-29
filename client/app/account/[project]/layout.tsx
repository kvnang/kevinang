import "server-only";
import { SideNav } from "@/components/SideNav";
import { createClient } from "@/lib/supabaseServer";
import { redirect } from "next/navigation";

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { project: string };
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return redirect("/");
  }

  const slug = params.project;
  console.log(slug);

  const { data: project, error } = await supabase
    .from("projects")
    .select("id, slug, title, user_id")
    .eq("slug", slug)
    .eq("user_id", session.user.id)
    .single();

  if (!project) {
    return redirect("/account");
  }

  return (
    <>
      <section className="py-16 border-b-2 border-b-bg-tint-1">
        <div className="container">
          <h1 className="h2">Account</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            <div className="basis-60">
              <SideNav />
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
