import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CircleMinus, CircleCheck, CircleAlert, BanIcon } from "lucide-react";

const FadeText = ({ children, width }: { children: React.ReactNode, width: number }) => (
  <div
    style={{
      width,
      textAlign: "left",
      display: "block",
      overflow: "hidden",
      whiteSpace: "nowrap",
      WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 95%)",
      maskImage: "linear-gradient(to right, black 70%, transparent 95%)",
    }}
  >
    {children}
  </div>
);

type GameCardProps = {
  title: string;
  image: string;
  placeId?: number;
  url?: string;
  rscriptsUrl?: string;
  scriptbloxUrl?: string;
  showcaseVideoUrl?: string;
  status?: boolean;
  issues?: boolean;
  gamesStatusData: Record<string, string>;
};

export default function GameCard({
  title,
  image,
  placeId,
  url,
  rscriptsUrl,
  scriptbloxUrl,
  showcaseVideoUrl,
  status,
  issues,
  gamesStatusData
}: GameCardProps) {
  const resourceLinks = [
    rscriptsUrl ? { label: "Rscripts", href: rscriptsUrl } : null,
    scriptbloxUrl ? { label: "Scriptblox", href: scriptbloxUrl } : null,
    showcaseVideoUrl ? { label: "Showcase", href: showcaseVideoUrl } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  // handle icon //
  let statusEmoji = title in gamesStatusData ? gamesStatusData[title] : "🟢";
  if (status == false) {
    statusEmoji = "🔴";
  } else if (status == true) {
    if (issues == true) statusEmoji = "🟡";
    else statusEmoji = "🟢";
  }

  // handle status icon elemenet //
  let statusIcon = <CircleCheck className="text-green-500" />;
  switch (statusEmoji) {
    case "🟡":
      statusIcon = <CircleAlert className="text-yellow-500" />
      break;

    case "🔴":
      statusIcon = <CircleMinus className="text-red-500" />
      break;

    case "❌":
      statusIcon = <BanIcon className="text-red-500" />
      break;

    default:
      break;
  }

  const topLinks = resourceLinks.filter((l) => l.label !== "Showcase");
  const showcaseLink = resourceLinks.find((l) => l.label === "Showcase");

  return (
    <Card className="bg-zinc-900 text-white overflow-hidden flex flex-col">
      <div className="h-40 w-full overflow-hidden">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={url ?? `https://roblox.com/games/${placeId}/${title}`}
          className="relative block w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 288px"
            className="object-cover cursor-pointer"
            loading="lazy"
          />
        </a>
      </div>

      <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0">
        <FadeText width={255}>
          <a
            className="text-ls font-semibold transition-all duration-300 underline decoration-transparent hover:decoration-white"
            target="_blank"
            href={url ?? `https://roblox.com/games/${placeId}/${title}`}
          >
            {title}
          </a>
        </FadeText>

        {statusIcon}
      </CardHeader>

      {resourceLinks.length > 0 ? (
        <CardContent className="flex flex-col gap-2 p-4 pt-0">
          {topLinks.length === 2 ? (
            <>
              <div className="flex gap-2">
                {topLinks.map((link) => (
                  <Button
                    key={link.label}
                    asChild
                    size="sm"
                    variant="outline"
                    className="h-8 flex-1 border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
              {showcaseLink && (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="h-8 w-full border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white"
                >
                  <a href={showcaseLink.href} target="_blank" rel="noopener noreferrer">
                    {showcaseLink.label}
                  </a>
                </Button>
              )}
            </>
          ) : (
            <div className="flex gap-2">
              {[...topLinks, ...(showcaseLink ? [showcaseLink] : [])].map((link) => (
                <Button
                  key={link.label}
                  asChild
                  size="sm"
                  variant="outline"
                  className="h-8 flex-1 border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      ) : null}
    </Card>
  );
}
