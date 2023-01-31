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
    router.push("/?logout=true");
  };

  React.useEffect(() => {
    logout();
  }, []);

  return (
    <main>
      <div className="flex items-center">
        <LoadingSpinner />
        <span className="ml-2 inline-block">Logging you out ...</span>
      </div>
    </main>
  );
}
