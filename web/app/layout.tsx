import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { BASE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Ang",
  description:
    "Welcome to Kevin Ang's personal website. Learn more about Kevin’s work, skillset, and interests.",
  metadataBase: new URL("/", BASE_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body className="font-sans text-base antialiased text-foreground bg-background">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
