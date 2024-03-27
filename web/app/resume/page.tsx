import Image from "next/image";
import profile from "@/public/profile.jpg";
import { GlobeIcon, MailIcon, MapPinIcon } from "lucide-react";
import { ResumeEntry } from "./ResumeEntry";
import { ResumeActions } from "./ResumeActions";
import { Metadata } from "next";
import Link from "next/link";
import { ResumeList, ResumeListItem } from "./ResumeList";

export const metadata: Metadata = {
  title: "Kevin Ang’s Résumé",
  description: "Browse my résumé or get a dynamically-generated PDF copy.",
};

const PROFILE_META = [
  {
    title: "Location",
    icon: MapPinIcon,
    content: "Canada",
  },
  {
    title: "Website",
    icon: GlobeIcon,
    content: "kevinang.com",
    href: "https://www.kevinang.com",
  },
  {
    title: "Email",
    icon: MailIcon,
    content: "ka@kevinang.com",
    href: "mailto:ka@kevinang.com",
  },
];

export default function Page() {
  return (
    <main>
      <section data-resume-header className="border-b border-border">
        <div className="container border-l border-border">
          <div className="py-12 lg:py-24">
            <div className="prose">
              <h1 className="mb-0">Résumé</h1>
              <p>
                Browse my résumé or simply get a{" "}
                <Link href="/resume/file.pdf" target="_blank">
                  dynamically-generated PDF copy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          data-resume-container
          className="container border-x border-border bg-background-true"
        >
          <div
            data-resume-wrapper
            className="grid grid-cols-1 md:grid-cols-[3fr_1fr]"
          >
            <div
              data-resume-nav
              className="border-b -mx-8 px-4 md:mx-0 md:px-0 md:border-b-0 md:order-1 md:border-l border-border max-md:sticky z-10 top-0 bg-background/80 backdrop-blur-md "
            >
              <div className="md:pl-4 md:bg-background -mr-8 pr-8 h-full">
                <div className="py-4 md:py-12 lg:py-24 md:sticky top-0 left-0 z-10 ">
                  <ResumeActions />
                </div>
              </div>
            </div>
            <div data-resume-body className="">
              <div className="py-12 lg:py-24 md:pr-8">
                <div
                  data-resume-body-container
                  className="grid items-center gap-12 lg:gap-16 max-w-4xl"
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
                          <ul className="flex flex-wrap -m-2">
                            {PROFILE_META.map((meta) => {
                              const Icon = meta.icon;
                              return (
                                <li
                                  key={meta.title}
                                  className="font-mono text-sm p-2"
                                >
                                  <div className="flex items-center group">
                                    {meta.href ? (
                                      <Link
                                        href={meta.href}
                                        className="flex items-center group"
                                      >
                                        <Icon className="w-4 h-4 mr-2" />
                                        <span className="text-muted-foreground group-hover:underline">
                                          {meta.content}
                                        </span>
                                      </Link>
                                    ) : (
                                      <div className="flex items-center">
                                        <Icon className="w-4 h-4 mr-2" />
                                        <span className="text-muted-foreground">
                                          {meta.content}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </li>
                              );
                            })}
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
                          className="object-cover [@media_print]:hidden"
                          priority
                          sizes="128px"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={profile.src}
                          alt="Kevin Ang"
                          className="absolute top-0 left-0 w-full h-full object-cover [@media_not_print]:hidden"
                        />
                      </div>
                    </div>
                  </div>
                  {/* About */}
                  <div>
                    <div className="prose">
                      <h3>About</h3>
                      <p>
                        I am well-versed in the humanities and philology, and a
                        self-taught web engineer by trade. My development
                        projects include sites, apps, and dev tools; mostly
                        frontends, with backends as needed. I code frontends to
                        meticulously match the designer’s mock, and pleasing to
                        the users. I take risks for the sake of faster
                        iteration, growth, and user’s joy. Having fast
                        development cycles is key to a good end product.
                      </p>
                    </div>
                  </div>
                  {/* Work */}
                  <div>
                    <div className="prose mb-6">
                      <h3>Employment</h3>
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
                  {/* Projects */}
                  <div>
                    <div className="prose mb-6">
                      <h3>Projects</h3>
                    </div>
                    <ul className="grid items-center gap-6">
                      <li>
                        <ResumeEntry
                          title="Magisterium AI"
                          subtitle="magisterium.com"
                          year="Since 2023"
                          variant="current"
                        >
                          Generative AI for comprehensive theological research.
                          I built the major part of the frontend & backend, from
                          UI to user subscription journey, and continue
                          optimizing performance of the LLMs. Powered by
                          Next.js.
                        </ResumeEntry>
                      </li>
                      <li>
                        <ResumeEntry
                          title="Videocast"
                          subtitle="videocast.app"
                          year="2021 — 2022"
                        >
                          Internal tool for Longbeard to automate the creation
                          of video for social media, primarily as visual
                          representation of podcasts. Powered by Remotion.dev +
                          AWS Lambda.
                        </ResumeEntry>
                      </li>
                    </ul>
                  </div>
                  {/* Languages */}
                  <div>
                    <div className="prose mb-6">
                      <h3>Languages</h3>
                    </div>
                    <ResumeList>
                      <ResumeListItem
                        title="Bahasa Indonesia"
                        subtitle="Native"
                      />
                      <ResumeListItem title="English" subtitle="Fluent" />
                      <ResumeListItem title="Spanish" subtitle="Fluent" />
                      <ResumeListItem
                        title="Hebrew, Ancient Greek, Latin"
                        subtitle="Reading"
                      />
                    </ResumeList>
                  </div>
                  {/* Skills */}
                  <div>
                    <div className="prose mb-6">
                      <h3>Skills / Knowledge</h3>
                    </div>
                    <ResumeList>
                      <ResumeListItem title="JavaScript / TypeScript" />
                      <ResumeListItem title="React" subtitle="Next.js" />
                      <ResumeListItem title="Node.js" />
                      <ResumeListItem
                        title="Cloudflare Workers"
                        subtitle="KV, R2, Queue, etc."
                      />
                      <ResumeListItem title="PostgreSQL" />
                      <ResumeListItem title="PHP / WordPress" />
                    </ResumeList>
                  </div>
                  {/* Education */}
                  <div>
                    <div className="prose mb-6">
                      <h3>Education</h3>
                    </div>
                    <ul className="grid items-center gap-6">
                      {/* <li>
                        <ResumeEntry
                          title="Graduate Studies in Philology"
                          subtitle="Polis (Jerusalem)"
                          year="2018 – 2020"
                        >
                          Languages studied: Ancient Greek, Modern Hebrew,
                          Biblical Hebrew, Spoken Arabic
                        </ResumeEntry>
                      </li> */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
