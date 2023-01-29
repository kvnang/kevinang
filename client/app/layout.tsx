import "server-only";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Bitter, JetBrains_Mono } from "@next/font/google";
import { SupabaseListener, SupabaseProvider } from "@/components/Supabase";
import { createClient } from "@/lib/supabaseServer";

const bitter = Bitter({ subsets: ["latin"], variable: "--font-bitter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className={`${bitter.variable} ${jetbrains.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-bg text-body">
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <div className="flex flex-col">
            <Header />
            <div className="flex-1">{children}</div>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
