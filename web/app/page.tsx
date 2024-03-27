import { MagisteriumAI, OrientaleWeb } from "@/components/projects";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="container border-l border-border">
          <div className="py-12 lg:py-24">
            <div className="prose max-w-lg">
              <h1 className="mb-0">Hi, I’m Kevin Ang.</h1>
              <p>
                I’m a senior web engineer at{" "}
                <a
                  href="https://www.longbeard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Longbeard
                </a>
                , a husband & father, music generalist, and a coffee enthusiast.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border">
        <div className="container border-x border-border">
          <div className="grid lg:grid-cols-3 gap-8 py-12 lg:py-0">
            <div className="lg:py-24 pr-8 lg:border-r border-border">
              <div className="prose">
                <h2>My stack</h2>
                <p>Tools I use, prefer, and have expertise on:</p>
              </div>
            </div>
            <div className="lg:py-24 pr-8 lg:border-r border-border">
              <div>
                <div className="font-mono text-sm">
                  <ul>
                    <li className="mb-2 last:mb-0">
                      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                      <div className="text-muted-foreground mb-1">
                        // Languages and Databases
                      </div>
                      <span>JavaScript, Node.js, PHP, PostgreSQL, GraphQL</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:py-24">
              <div>
                <div className="font-mono text-sm">
                  <ul>
                    <li className="mb-2 last:mb-0">
                      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                      <div className="text-muted-foreground mb-1">
                        // Frameworks and Tools
                      </div>
                      <span>
                        React, Next.js, Tailwind CSS, Cloudflare Workers,
                        Supabase, WordPress, AI
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container border-l border-border">
          <div className="pt-12 lg:pt-24 pb-8">
            <div className="prose max-w-xl">
              <h2>Projects</h2>
              <p>What I’ve been working on recently:</p>
            </div>
          </div>
        </div>
        <div className="container md:px-0">
          <div
            className="relative grid grid-cols-1 md:grid-cols-[repeat(var(--md-cols),1fr)] md:grid-rows-[repeat(var(--md-rows),24px)] lg:grid-cols-[repeat(var(--lg-cols),1fr)] lg:grid-rows-[repeat(var(--lg-rows),32px)] md:border-l border-border -mb-[1px]"
            style={
              {
                "--md-rows": "28",
                "--md-cols": "24",
                "--lg-rows": "24",
                "--lg-cols": "40",
              } as React.CSSProperties
            }
          >
            {/* Guides - ROWS */}
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "hidden md:block relative -z-10 col-span-full md:col-[--md-col] md:row-[--md-row] lg:col-[--lg-col] lg:row-[--lg-row] border-b border-r border-border",
                  i >= 24 && "lg:hidden"
                )}
                style={
                  {
                    "--md-col": `1 / span var(--md-cols)`,
                    "--md-row": `${i + 1} / span 1`,
                    "--lg-col": `1 / span var(--lg-cols)`,
                    "--lg-row": `${i + 1} / span 1`,
                  } as React.CSSProperties
                }
              ></div>
            ))}
            {/* Guides - COLS */}
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "hidden md:block relative -z-10 col-span-full md:col-[--md-col] md:row-[--md-row] lg:col-[--lg-col] lg:row-[--lg-row] border-b border-r border-border",
                  i >= 24 && "md:hidden lg:block"
                )}
                style={
                  {
                    "--md-col": `${i + 1} / span 1`,
                    "--md-row": `1 / span var(--md-rows)`,
                    "--lg-col": `${i + 1} / span 1`,
                    "--lg-row": `1 / span var(--lg-rows)`,
                  } as React.CSSProperties
                }
              ></div>
            ))}
            <div className="hidden md:block absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent"></div>
            <div
              className="flex flex-col col-span-full md:col-[--md-col] md:row-[--md-row] lg:col-[--lg-col] lg:row-[--lg-row]"
              style={
                {
                  "--md-col": "2 / span 12",
                  "--md-row": "5 / span 10",
                  "--lg-col": "2 / span 16",
                  "--lg-row": "5 / span 9",
                } as React.CSSProperties
              }
            >
              <MagisteriumAI />
            </div>
            <div
              className="flex flex-col col-span-full md:col-[--md-col] md:row-[--md-row] lg:col-[--lg-col] lg:row-[--lg-row]"
              style={
                {
                  "--md-col": "2 / span 12",
                  "--md-row": "16 / span 2",
                  "--lg-col": "2 / span 16",
                  "--lg-row": "15 / span 2",
                } as React.CSSProperties
              }
            >
              <div className="flex-1 py-2 bg-background border border-transparent md:border-border md:-mt-[1px] md:-ml-[1px] mb-6 md:mb-0 md:px-2">
                <div className="font-mono text-sm">
                  Next.js / Server Actions / RSC / PostgreSQL / AI
                </div>
              </div>
            </div>
            <div
              className="flex flex-col col-span-full md:col-[--md-col] md:row-[--md-row] lg:col-[--lg-col] lg:row-[--lg-row]"
              style={
                {
                  "--md-col": "15 / span 14",
                  "--md-row": "3 / span 24",
                  "--lg-col": "21 / span 12",
                  "--lg-row": "3 / span 20",
                } as React.CSSProperties
              }
            >
              <OrientaleWeb className="h-[640px] max-w-sm md:max-w-none md:flex-1 md:-mt-[1px] md:-ml-[1px]" />
            </div>
            <div
              className="flex flex-col col-span-full md:col-[--md-col] md:row-[--md-row] lg:col-[--lg-col] lg:row-[--lg-row]"
              style={
                {
                  "--md-col": "6 / span 8",
                  "--md-row": "24 / span 3",
                  "--lg-col": "12 / span 8",
                  "--lg-row": "20 / span 3",
                } as React.CSSProperties
              }
            >
              <div className="flex-1 py-2 bg-background border border-transparent md:border-border md:-mt-[1px] md:-ml-[1px] mb-6 md:mb-0 md:px-2">
                <div className="font-mono text-sm md:text-right">
                  Next.js / WordPress CMS / Multilingual
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
