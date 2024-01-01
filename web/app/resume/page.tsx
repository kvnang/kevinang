import Image from "next/image";
import profile from "@/public/profile.jpg";
import { MailIcon, MapPinIcon } from "lucide-react";
import { ResumeEntry } from "./ResumeEntry";
import { ResumeActions } from "./ResumeActions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kevin Ang’s Résumé",
  description: "Browse my résumé or simply get a PDF copy.",
};

export default function Page() {
  return (
    <main>
      <section data-resume-header className="border-b border-border">
        <div className="container border-l border-border">
          <div className="py-12 lg:py-24">
            <div className="prose">
              <h1 className="mb-0">Résumé</h1>
              <p className="font-mono">
                Browse my résumé or simply get a PDF copy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div data-resume-container className="container border-x border-border">
          <div
            data-resume-wrapper
            className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-x-8"
          >
            <div
              data-resume-nav
              className="border-b -mx-8 px-4 md:mx-0 md:px-0 md:border-b-0 md:order-1 md:border-l border-border max-md:sticky z-10 top-0 bg-background/80 backdrop-blur-md"
            >
              <div className="py-4 md:pl-4 md:py-12 lg:py-24 md:sticky top-0 left-0 z-10">
                <ResumeActions />
              </div>
            </div>
            <div
              data-resume-body
              className="grid items-center gap-12 lg:gap-16 max-w-4xl py-12 lg:py-24"
            >
              {/* Header */}
              <div className="flex justify-between">
                <div className="flex-1 mr-6">
                  <div className="prose">
                    <h2>Kevin Ang</h2>
                    <p>
                      Senior full-stack web engineer at{" "}
                      <a href="https://www.longbeard.com" target="_blank">
                        Longbeard
                      </a>
                      .
                    </p>
                    <div className="not-prose">
                      <ul className="flex flex-col">
                        <li className="flex font-mono text-sm items-center mb-2 last:mb-0">
                          <MapPinIcon className="w-4 h-4 mr-2" />
                          <span className="text-muted-foreground">Canada</span>
                        </li>
                        <li className="flex font-mono text-sm items-center mb-2 last:mb-0">
                          <MailIcon className="w-4 h-4 mr-2" />
                          <span className="text-muted-foreground">
                            ka@kevinang.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="basis-32">
                  <div className="w-full h-0 pb-[100%] relative overflow-hidden border border-border rounded-full">
                    <Image
                      src={profile}
                      alt="Kevin Ang"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* About */}
              <div>
                <div className="prose">
                  <h3>About</h3>
                  <p>
                    Indonesian by birth, I currently reside in Canada. I am
                    well-versed in the humanities and philology, but a
                    self-taught web engineer by trade. In web development, I
                    enjoy taking risks and assuming responsibilities for the
                    sake of faster iteration and user satisfaction. Fast
                    development cycles are key to a good end product.
                  </p>
                </div>
              </div>
              {/* Languages */}
              <div>
                <div className="prose mb-6">
                  <h3>Languages</h3>
                </div>
                <ul className="grid items-center gap-2">
                  <li>
                    Bahasa Indonesia{" "}
                    <span className="text-muted-foreground font-mono text-sm">
                      (Native)
                    </span>
                  </li>
                  <li>
                    English{" "}
                    <span className="text-muted-foreground font-mono text-sm">
                      (Fluent)
                    </span>
                  </li>
                  <li>
                    Spanish{" "}
                    <span className="text-muted-foreground font-mono text-sm">
                      (Fluent)
                    </span>
                  </li>
                </ul>
              </div>
              {/* Education */}
              <div>
                <div className="prose mb-6">
                  <h3>Education</h3>
                </div>
                <ul className="grid items-center gap-6">
                  <li>
                    <ResumeEntry
                      title="Graduate Studies in Philology"
                      subtitle="Polis (Jerusalem)"
                      year="2018 – 2020"
                    >
                      Languages studied: Ancient Greek, Modern Hebrew, Biblical
                      Hebrew, Spoken Arabic
                    </ResumeEntry>
                  </li>
                  <li>
                    <ResumeEntry
                      title="BA in Liberal Arts"
                      subtitle="The Thomas More College of Liberal Arts (USA)"
                      year="2016 – 2017"
                    >
                      <em>Summa cum laude</em> (GPA 3.97 / 4.00)
                    </ResumeEntry>
                  </li>
                  <li>
                    <ResumeEntry
                      title="Certificate of Christian Humanities"
                      subtitle="Our Lady Seat of Wisdom College (Canada)"
                      year="2013 – 2016"
                    >
                      <em>Summa cum laude</em> (Average 89.8 / 100.0)
                    </ResumeEntry>
                  </li>
                </ul>
              </div>
              {/* Work */}
              <div>
                <div className="prose mb-6">
                  <h3>Work Experience</h3>
                </div>
                <ul className="grid items-center gap-6">
                  <li>
                    <ResumeEntry
                      title="Senior Web Engineer"
                      subtitle="Longbeard"
                      year="Since 2020"
                      variant="current"
                    >
                      Full-stack web development (React, Next.js, PHP,
                      WordPress, AI)
                    </ResumeEntry>
                  </li>
                  <li>
                    <ResumeEntry
                      title="Data Coordinator"
                      subtitle="Catholic Peoples Foundation (Gallup NM, USA)"
                      year="2017 — 2018"
                    >
                      Graphic design and web development, donor management,
                      fundraising
                    </ResumeEntry>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
