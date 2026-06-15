import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const links = [
  {
    name: "Workink",
    href: "https://ads.luarmor.net/get_key?for=Workink-SctZpLKgXNdk",
    description: "Generate a key via Workink",
  },
  {
    name: "Linkvertise",
    href: "https://ads.luarmor.net/get_key?for=Linkvertise-xrtnTGufknRs",
    description: "Generate a key via Linkvertise",
  },
];

export default function KeyCard() {
  return (
    <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
        >
          <Card className="border-zinc-800 transition-colors hover:border-[#f8bfd4]/50 h-full">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold">{link.name}</span>
                  <span className="text-[10px] font-medium text-[#f8bfd4] bg-[#f8bfd4]/15 px-2 py-0.5 rounded-full">
                    Free
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="size-5 shrink-0 text-muted-foreground" />
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
