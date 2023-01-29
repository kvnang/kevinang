"use client";

import * as React from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { createClient } from "@/lib/supabaseBrowser";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const supabase = createClient();
  const router = useRouter();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/");
  };

  React.useEffect(() => {
    logout();
  }, []);

  return (
    <main>
      <LoadingSpinner />
    </main>
  );
}
