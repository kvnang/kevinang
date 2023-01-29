import Link from "next/link";
import { HeaderAccountNav } from "./HeaderAccountNav";

export function Header() {
  return (
    <header>
      <div className="container py-4">
        <div className="flex items-center">
          <div className="mr-4">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 180"
                width={40}
                height={36}
                className="w-10 h-auto"
              >
                <path
                  d="m76.52 57.48 38.82-46a29.15 29.15 0 0 1 21.73-9.62h.87V0H92.25v1.78h1.92c5.51 0 8.1 5 4.74 9.47L45.2 78V14.38A12.75 12.75 0 0 1 58 2h2.51V0H0v2h2.57a12.74 12.74 0 0 1 12.74 12.42v110.39a12.76 12.76 0 0 1-12.76 12.51H0v2h9.86Z"
                  fill="#ffbc42"
                />
                <path
                  d="M199.77 171c-24.58-1.25-42.8-14-65.34-43.63l-50.76-63-18 21.9 25.43 31.17H40l-3.87 4.7h58.8l14.49 17.78c30.92 38.59 60 48.67 90.58 33Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </div>
          <div>
            <HeaderAccountNav></HeaderAccountNav>
          </div>
        </div>
      </div>
    </header>
  );
}
