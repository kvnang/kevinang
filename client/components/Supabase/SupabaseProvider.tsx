"use client";

import { createContext, useContext, useState } from "react";
import { createClient } from "@/lib/supabaseBrowser";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/lib/database.types";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

const Context = createContext<SupabaseContext>();

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient());

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => useContext(Context);
