"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center">
      <div className="flex items-center flex-wrap">
        <Link
          href="/resume"
          className="font-medium text-muted-foreground aria-[current=page]:text-foreground hover:text-foreground transition-colors"
          aria-current={pathname === "/resume" ? "page" : undefined}
        >
          Résumé
        </Link>
      </div>
    </nav>
  );
}
