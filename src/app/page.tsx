"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import WordRotate from "@/components/ui/word-rotate";
import GameCard from "@/components/game-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";
import Executor from "@/components/executor";
import PurchaseBadge from "@/components/purchase-badge";
import { supportedGames } from "@/data/games";

const supportedGameHeadings = supportedGames.map(
  ({ title }: { title: string }) => `lumin.rocks supports ${title}`,
);

export default function Home() {
  return (
    <>
      <Navbar className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/60">
        <NavbarBrand>
          <span className="font-bold text-[#f8bfd4]">lumin</span>
          <span className="font-bold">.rocks</span>
        </NavbarBrand>

        <NavbarContent justify="end" className="mt-4 mb-4">
          <NavbarItem>
            <a
              href="https://lumin-rocks.mysellauth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-foreground transition-colors hover:text-[#f8bfd4] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#f8bfd4] after:transition-all hover:after:w-full inline-flex items-center gap-1"
            >
              View our prices
              <ExternalLinkIcon className="w-3 h-3" />
            </a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="overflow-x-hidden">
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-20 px-4">
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#f8bfd4]/12 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <BlurFade delay={0.25}>
              <div className="mb-8">
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                  )}
                >
                  <a
                    href="https://lumin-rocks.mysellauth.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PurchaseBadge />
                  </a>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.35}>
              <h1 className="text-7xl md:text-8xl font-bold text-center mb-4 tracking-tight">
                <span className="text-[#f8bfd4]">lumin</span>
                <span>.rocks</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.45}>
              <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 max-w-xl">
                Premium Roblox script hub
              </p>
            </BlurFade>

            <BlurFade delay={0.55}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                <div className="w-full sm:w-auto">
                  <Input
                    type="text"
                    className="overflow-hidden text-ellipsis w-full sm:w-90 border-[#f8bfd4]/20 focus-visible:ring-[#f8bfd4]/50 font-mono text-sm"
                    readOnly
                    value={'loadstring(game:HttpGet("https://lumin.rocks/"))()'}
                  />
                </div>
                <CopyButton
                  text={'loadstring(game:HttpGet("https://lumin.rocks/"))()'}
                />

                <Button size="icon" variant="outline" asChild>
                  <a
                    aria-label="Discord Server"
                    href="https://discord.gg/jG9KuUnbXS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/social/discord-symbol-white.svg"
                      alt="Discord"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                      loading="eager"
                    />
                  </a>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.7} className="w-full mt-16">
              <div className="flex flex-col items-center justify-center">
                <BlurFade className="mb-4" delay={0.3} inView>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    Supported Executors
                  </span>
                </BlurFade>

                <div className="flex flex-row items-center justify-center gap-8 md:gap-10 max-md:flex-col max-md:gap-6">
                  <BlurFade delay={0.75} inView>
                    <Executor
                      name="Potassium"
                      image="/executor-icons/potassium.png"
                      url="https://docs.potassium.pro/"
                    />
                  </BlurFade>
                  <BlurFade delay={0.85} inView>
                    <Executor
                      name="Seliware"
                      image="/executor-icons/seliware.png"
                      url="https://seliware.com/"
                    />
                  </BlurFade>
                  <BlurFade delay={0.95} inView>
                    <Executor
                      name="Real"
                      image="/executor-icons/real.png"
                      url="https://projectreal.net/real"
                      iconSize={32}
                    />
                  </BlurFade>
                </div>

                <BlurFade delay={1.05} inView>
                  <p className="text-muted-foreground text-sm mt-5">
                    And many more...
                  </p>
                </BlurFade>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Supported Games */}
        <section className="relative py-24 md:py-32 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-[#f8bfd4]/8 via-transparent to-transparent pointer-events-none" />

          <div
            id="games"
            className="flex flex-col items-center text-center overflow-hidden relative max-w-6xl mx-auto"
          >
            <BlurFade className="mb-4" delay={0.3} inView>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                Supported Games
              </span>
            </BlurFade>

            <BlurFade className="mb-3" delay={0.4} inView>
              <WordRotate
                className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-20"
                words={supportedGameHeadings}
                duration={4000}
                framerProps={{
                  initial: { opacity: 0, y: -30 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 30 },
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              />
            </BlurFade>

            <BlurFade delay={0.55} inView>
              <p className="text-sm md:text-base text-muted-foreground mb-10 max-w-md">
                High quality scripts for the games you actually play.
              </p>
            </BlurFade>

            <BlurFade
              className="flex flex-wrap justify-center gap-6 w-full"
              delay={0.55}
              inView
            >
              {supportedGames.map((game) => (
                <GameCard
                  key={game.mappingName}
                  mappingName={game.mappingName}
                  title={game.title}
                  image={game.image}
                  placeId={game.placeId}
                  url={game.url}
                  rscriptsUrl={game.rscriptsUrl}
                  scriptbloxUrl={game.scriptbloxUrl}
                  gamesStatusData={{}}
                />
              ))}
            </BlurFade>

            <BlurFade delay={0.75} inView>
              <p className="text-muted-foreground text-sm mt-8">
                And many more games supported...
              </p>
            </BlurFade>
          </div>
        </section>

        <div className="mt-10 w-full border-t border-white/20" />

        <div className="px-10 py-6 w-screen flex flex-row justify-between items-center max-md:justify-center max-md:flex-col">
          <div className="px-2 py-2 flex flex-row items-center gap-2">
            <div>
              <p className="text-xs text-left font-bold">
                <span className="text-[#f8bfd4]">lumin</span>.rocks
              </p>
              <p className="text-muted-foreground text-xs">
                Originally known as lumin.rest
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 max-md:items-center max-md:mt-5">
            <p className="text-muted-foreground text-xs px-2 text-right max-md:text-center">
              This software is not affiliated, associated, authorized, endorsed
              by, or
              <br />
              in any way officially connected with Roblox or any of its
              subsidiaries or its affiliates.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
