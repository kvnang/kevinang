"use client";

import Link from "next/link";
import { ButtonBg } from "@/components/Buttons";
import { useSelectedLayoutSegment } from "next/navigation";

export function SideNav() {
  const nav = [
    {
      title: "Overview",
      href: "/account",
      segment: null,
    },
    {
      title: "Billing",
      href: "/account/billing",
      segment: "billing",
    },
    {
      title: "Invoices",
      href: "/account/invoices",
      segment: "invoices",
    },
    {
      title: "Logout",
      href: "/account/logout",
      segment: "logout",
    },
  ];

  const segment = useSelectedLayoutSegment();

  return (
    <nav>
      <ul className="flex flex-col">
        {nav.map((item) => (
          <li key={item.href} className="mb-2 last:mb-0">
            <Link
              href={item.href}
              className="group w-full flex"
              aria-current={item.segment === segment ? "page" : undefined}
            >
              <ButtonBg>{item.title}</ButtonBg>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
