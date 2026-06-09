import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Executor({
  url,
  name,
  image,
  iconSize,
}: {
  url: string;
  name: string;
  image: string;
  iconSize?: number;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center"
    >
      <BlurFade
        delay={0.2 + 3 * 0.05}
        className="flex flex-row items-center justify-center gap-2 max-md:gap-4"
        inView
      >
        <div
          className="relative shrink-0"
          style={{ width: iconSize ?? 48, height: iconSize ?? 48 }}
        >
          <Image
            alt={name}
            src={image}
            fill
            className="object-contain"
            sizes={`${iconSize ?? 48}px`}
            loading="lazy"
          />
        </div>
        <span className="text-lg font-bold max-md:text-3xl">{name}</span>
      </BlurFade>
    </a>
  );
}
