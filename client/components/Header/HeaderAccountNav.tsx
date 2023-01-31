import { createClient } from "@/lib/supabaseServer";

export async function HeaderAccountNav() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return null;
  }

  const userId = session.user.id;

  const { data: user, error } = await supabase
    .from("profiles")
    .select("id, full_name, username")
    .eq("id", userId)
    .single();

  if (!user) {
    return null;
  }

  return (
    <span className="inline-flex px-2 py-2 font-mono text-sm">
      {user.full_name}
    </span>
  );
}
