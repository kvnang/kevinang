import Link from "next/link";
import { Logo } from "./logo";
import { Menu } from "./menu";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container border-l border-border">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Logo className="w-12" />
              </Link>
            </div>
            <div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
