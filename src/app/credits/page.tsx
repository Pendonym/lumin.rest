"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

interface CreditLink {
  label: "github" | "website" | "discord";
  url: string;
}

interface CreditPerson {
  name: string;
  avatar: string;
  links?: CreditLink[];
}

const credits: CreditPerson[] = [
  {
    name: "lily",
    avatar: "https://avatars.githubusercontent.com/u/173532449",
    links: [
      { label: "website", url: "https://transgirls.love" },
      { label: "website", url: "https://adan.sh" },
      { label: "github", url: "https://github.com/transicle/" },
      { label: "discord", url: "https://discord.com/users/1002377371892072498" },
    ],
  },
  {
    name: "Alpine",
    avatar: "https://avatars.githubusercontent.com/u/112367858",
    links: [
      { label: "github", url: "https://github.com/xootzie/" },
      { label: "discord", url: "https://discord.com/users/244522485314224128" },
    ],
  },
  {
    name: "Abe",
    avatar: "https://cdn.discordapp.com/avatars/1489663291046367463/0985f439d7532f40a889de66b2e40d65.webp",
    links: [
      { label: "discord", url: "https://discord.com/users/1489663291046367463" },
    ]
  },
  {
    name: "Pendonym",
    avatar: "https://avatars.githubusercontent.com/u/265675176",
    links: [
      { label: "website", url: "https://logged.zip" },
      { label: "github", url: "https://github.com/Pendonym" },
      { label: "discord", url: "https://discord.com/users/1478515828973506773" },
    ]
  },
];

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-3.5"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const linkIcon = (label: CreditLink["label"]) => {
  switch (label) {
    case "github":
      return <Github className="size-3.5" />;
    case "discord":
      return <DiscordIcon />;
    case "website":
    default:
      return <Globe className="size-3.5" />;
  }
};

export default function Credits() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden w-full">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50",
          )}
        />

        <div className="min-h-screen w-full flex items-center justify-center px-6">
          <div className="flex flex-col items-center gap-12 w-full max-w-3xl py-32">
            <BlurFade delay={0.15}>
              <h1 className="text-3xl font-bold tracking-tight">
                Contributors
              </h1>
            </BlurFade>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
              {credits.map((person, i) => (
                <BlurFade key={person.name} delay={0.2 + i * 0.06}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative size-16 overflow-hidden rounded-full ring-2 ring-white/10">
                      <Image
                        src={person.avatar}
                        alt={person.name}
                        fill
                        sizes="64px"
                        loading="eager"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-medium">{person.name}</span>
                      {person.links?.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {linkIcon(link.label)}
                        </a>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
