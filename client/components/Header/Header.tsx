import Link from "next/link";
import { Logo } from "@/components/Logo";
import { HeaderAccountNav } from "./HeaderAccountNav";

export function Header() {
  return (
    <header>
      <div className="container py-4">
        <div className="flex items-center">
          <div className="mr-4">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div>
            {/* @ts-expect-error */}
            <HeaderAccountNav />
          </div>
        </div>
      </div>
    </header>
  );
}
