import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const createClient = () =>
  createServerComponentSupabaseClient({
    headers,
    cookies,
    options: {
      global: {
        fetch: fetch.bind(globalThis),
      },
    },
  });
