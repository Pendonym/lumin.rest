"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import WordFadeIn from "@/components/ui/word-fade-in";
import WordRotate from "@/components/ui/word-rotate";
import GameCard from "@/components/game-card";
import { Input } from "@/components/ui/input";
import CopyButton from "@/components/copy-button";
import { ExternalLinkIcon } from "lucide-react";
import Executor from "@/components/executor";
import BuyMspaintButton from "@/components/buy-mspaint";

type SupportedGame = {
  title: string;
  mappingName: string;
  image: string;
  placeId: number;
  url?: string;
  rscriptsUrl?: string;
  scriptbloxUrl?: string;
};

const supportedGames: SupportedGame[] = [
  {
    title: "RIVALS",
    mappingName: "RIVALS - Main",
    image:
      "https://tr.rbxcdn.com/180DAY-c66296c3f8c6e16eb6f6eecca67c4710/768/432/Image/Webp/noFilter",
    placeId: 17625359962,
    rscriptsUrl:
      "https://rscripts.net/script/1-skin-changer-and-spoofer-or-yabujin-free-or-op-new-2026-TipP",
    scriptbloxUrl:
      "https://scriptblox.com/script/RIVALS-BEST-SKIN-CHANGER-AND-SPOOFER-YABUJIN-FREE-OP-NEW-2026-212946",
  },
  {
    title: "Slime RNG",
    mappingName: "Slime RNG",
    image:
      "https://tr.rbxcdn.com/180DAY-34da06903c3233f12c9ca8a11f996348/768/432/Image/Webp/noFilter",
    placeId: 92416421522960,
    rscriptsUrl:
      "https://rscripts.net/script/new-best-op-script-or-auto-upgrade-auto-rebirth-and-more-ntQq",
    scriptbloxUrl:
      "https://scriptblox.com/script/Slime-RNG-NEW-BEST-OP-SCRIPT-Auto-Upgrade-Auto-Rebirth-and-more-214141",
  },
  {
    title: "Flee the Facility",
    mappingName: "Flee the Facility",
    image: "/flee-the-facility.webp",
    placeId: 893973440,
    url: "https://www.roblox.com/games/893973440/Flee-the-Facility",
    rscriptsUrl:
      "https://rscripts.net/script/axon-hub-flee-the-facility-script-or-esp-auto-hack-and-fly-rUvB",
    scriptbloxUrl:
      "https://scriptblox.com/script/Flee-the-Facility-FacilityCore-many-features-FOR-FREE-like-AutoFarm-Instant-Wi-95246",
  },
  {
    title: "The Rake REMASTERED",
    mappingName: "The Rake REMASTERED",
    image: "/the-rake.webp",
    placeId: 2413927524,
    url: "https://www.roblox.com/games/2413927524/The-Rake-REMASTERED",
    rscriptsUrl:
      "https://rscripts.net/script/the-rake-remastered-or-infinite-stamina-aura-stunstick-1hKe",
    scriptbloxUrl:
      "https://scriptblox.com/script/The-Rake-REMASTERED-THE-RAKE-DETECTOR-SCRIPT-HUB-162062",
  },
];

const supportedGameHeadings = supportedGames.map(
  ({ title }) => `lumin.rocks supports ${title}`,
);

export default function Home() {
  const gamesStatusData: Record<string, string> = {};

  return (
    <>
      <Navbar className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              className="relative text-foreground transition-colors hover:text-[#f8bfd4] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#f8bfd4] after:transition-all hover:after:w-full inline-flex items-center gap-1"
            >
              View our prices
              <ExternalLinkIcon className="w-3 h-3" />
            </a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="overflow-x-hidden group">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50",
            "group-aria-hidden:hidden",
          )}
        />

        <div className="min-h-[75vh] flex flex-col items-center justify-center pt-24 pb-16 px-4">
          <BlurFade delay={0.2 + 1 * 0.05}>
            <a
              href="https://lumin-rocks.mysellauth.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex mb-4">
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                  )}
                >
                  <BuyMspaintButton />
                </div>
              </div>
            </a>
          </BlurFade>

          <BlurFade delay={0.2 + 2 * 0.05}>
            <h1 className="text-6xl font-bold text-center mb-3">
              <span className="text-[#f8bfd4]">lumin</span>
              <span>.rocks</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.2 + 3 * 0.05}>
            <div className="flex flex-row items-center justify-center gap-2 flex-wrap max-sm:flex-col max-sm:w-[90vw]">
              <Input
                type="text"
                className="overflow-hidden text-ellipsis min-w-[300px] max-sm:min-w-0 max-sm:w-full border-[#f8bfd4]/20 focus-visible:ring-[#f8bfd4]/50"
                readOnly
                value={'loadstring(game:HttpGet("https://lumin.rocks/"))()'}
              />
              <CopyButton
                text={'loadstring(game:HttpGet("https://lumin.rocks/"))()'}
              />

              <a
                aria-label="Discord Server"
                href="https://discord.gg/jG9KuUnbXS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="px-2 py-2 relative cursor-pointer rounded-lg backdrop-blur-xl border transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary)/10%_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_var(--primary)/10%]"
                  aria-label="Discord Server"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 48 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.6606 3.08587C37.5127 1.62534 34.1825 0.587574 30.7579 0C30.3314 0.764729 29.833 1.79329 29.4893 2.61157C25.7971 2.06103 22.1387 2.06103 18.5144 2.61157C18.1709 1.79348 17.6612 0.764729 17.2307 0C13.8029 0.587845 10.4698 1.62826 7.32043 3.0935C1.05343 12.4846 -0.645507 21.6422 0.203868 30.6702C4.36056 33.7483 8.38881 35.6182 12.3492 36.8418C13.3334 35.4996 14.2035 34.0786 14.9504 32.5935C13.5284 32.0567 12.1576 31.3951 10.8542 30.6167C11.1972 30.3646 11.5322 30.1018 11.8585 29.8289C19.7564 33.4921 28.3379 33.4921 36.1416 29.8289C36.4694 30.1 36.8042 30.3627 37.1457 30.6167C35.8402 31.3971 34.4669 32.06 33.0421 32.5974C33.7932 34.0885 34.6617 35.5109 35.6432 36.8455C39.6074 35.6221 43.6394 33.7522 47.7961 30.6702C48.7928 20.2046 46.0936 11.1309 40.6606 3.08569V3.08587ZM16.0264 25.1182C13.6555 25.1182 11.7111 22.9233 11.7111 20.2505C11.7111 17.5778 13.6141 15.3792 16.0264 15.3792C18.439 15.3792 20.3832 17.5739 20.3417 20.2505C20.3455 22.9233 18.439 25.1182 16.0264 25.1182ZM31.9735 25.1182C29.6026 25.1182 27.6584 22.9233 27.6584 20.2505C27.6584 17.5778 29.5611 15.3792 31.9735 15.3792C34.3861 15.3792 36.3302 17.5739 36.2888 20.2505C36.2888 22.9233 34.3861 25.1182 31.9735 25.1182Z"
                      fill="#5865F2"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </BlurFade>

          <div className="flex flex-col items-center justify-center mt-16">
            <BlurFade delay={0.2 + 4 * 0.05} inView>
              <h1 className="text-2xl font-bold text-center px-5">
                Supporting your favorite executors
              </h1>
            </BlurFade>

            <div className="flex flex-row items-center justify-center mt-5 gap-8 max-md:flex-col">
              <Executor
                name="Potassium"
                image="/executor-potassium.ico"
                url="https://docs.potassium.pro/"
              />
              <Executor
                name="Seliware"
                image="https://q2p0njok3b.ufs.sh/f/Z155p1jPvLAs2M1WsFKsE4uqeKTGPFHJZhdvYVzSAOgb9aty"
                url="https://seliware.com/"
              />
              <Executor
                name="Real"
                image="/executor-real.ico"
                url="https://projectreal.net/real"
              />
            </div>

            <BlurFade delay={0.2 + 6 * 0.05} inView>
              <h4 className="text-muted-foreground text-sm mt-5">
                And many more...
              </h4>
            </BlurFade>
          </div>
        </div>

        <div
          id="games"
          className="flex flex-col items-center mb-[10vh] text-center overflow-hidden relative"
        >
          <WordRotate
            className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-3xl md:leading-[5rem]"
            words={supportedGameHeadings}
            duration={3000}
          />
          <BlurFade className="mb-[15px]" delay={0.2 + 1 * 0.05} inView>
            <WordFadeIn
              className="text-xl md:text-xl font-normal"
              words="high quality • forever #1 • always working"
              inView
              initialDelay={0.15 * 6}
              delay={0.35}
            />
          </BlurFade>

          <BlurFade
            className="mt-5 flex flex-wrap justify-center gap-6 w-full max-w-[1200px] px-6"
            delay={0.2 + 2 * 0.05}
            inView
          >
            {supportedGames.map((game) => (
              <GameCard
                key={game.mappingName}
                title={game.title}
                mappingName={game.mappingName}
                image={game.image}
                placeId={game.placeId}
                url={game.url}
                rscriptsUrl={game.rscriptsUrl}
                scriptbloxUrl={game.scriptbloxUrl}
                gamesStatusData={gamesStatusData}
              />
            ))}
          </BlurFade>
        </div>

        <Separator className="mt-[2.5rem] w-screen" />

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
