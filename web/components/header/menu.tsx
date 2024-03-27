"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center">
      <ul className="flex items-center flex-wrap space-x-8">
        <li>
          <Link
            href="/resume"
            className="text-sm inline-flex items-center font-medium text-muted-foreground aria-[current=page]:text-foreground hover:text-foreground transition-colors"
            aria-current={pathname === "/resume" ? "page" : undefined}
          >
            Résumé
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/kvnang/kevinang/tree/main/web"
            className="text-sm inline-flex items-center font-medium text-muted-foreground aria-[current=page]:text-foreground hover:text-foreground transition-colors"
            // aria-current={pathname === "/resume" ? "page" : undefined}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
            <ArrowUpRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
