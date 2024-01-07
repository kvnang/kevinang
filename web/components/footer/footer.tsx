import { MailIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container">
        <div className="py-12 lg:py-24">
          <div className="prose mb-2">
            <h3>Kevin Ang</h3>
          </div>
          <div className="flex flex-wrap items-center -mx-3">
            <div>
              <a
                href="https://www.github.com/kvnang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 px-3 items-center justify-center text-foreground hover:text-muted-foreground transition-colors"
              >
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <title>GitHub</title>
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </a>
            </div>
            <div className="h-6 mx-2">
              <div className="inline-block border-l border-border w-0 h-full"></div>
            </div>
            <div className="inline-flex items-center">
              <a
                href="mailto:ka@kevinang.com"
                className="h-12 px-3 inline-flex items-center hover:underline font-mono text-sm"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                <span>ka@kevinang.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
