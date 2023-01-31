import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const createClient = () =>
  createBrowserSupabaseClient({
    options: {
      global: {
        fetch: fetch.bind(globalThis),
      },
    },
  });
