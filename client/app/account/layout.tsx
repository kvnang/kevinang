import "server-only";
// import { SideNav } from "@/components/SideNav";
import { createClient } from "@/lib/supabaseServer";
import { redirect } from "next/navigation";
import { SideNav } from "@/components/SideNav";
import { StandardGrid } from "@/components/Grid";
import { Header } from "@/components/Header";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return redirect("/");
  }

  return (
    <>
      <Header />
      <section className="py-16 border-b-2 border-b-bg-tint-1">
        <div className="container">
          <StandardGrid>
            <h1 className="h2">Account</h1>
          </StandardGrid>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <StandardGrid>
            <div className="flex flex-wrap gap-4">
              <div className="basis-60">
                <SideNav />
              </div>
              <div className="flex-1 max-w-full">{children}</div>
            </div>
          </StandardGrid>
        </div>
      </section>
    </>
  );

  // return <>{children}</>;
}
