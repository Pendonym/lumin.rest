import {
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import type { Reseller } from "@/data/resellers";

export default function SellerCard({ reseller }: { reseller: Reseller }) {
  return (
    <a href={reseller.href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
      <Card className="border-zinc-800 overflow-hidden transition-colors hover:border-[#f8bfd4]/50">
        <div className="flex items-center gap-4 p-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-zinc-800">
            <Image
              src={reseller.logo}
              alt={reseller.name}
              fill
              className="object-contain p-1.5"
              sizes="48px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-base font-medium">{reseller.name}</p>
                <p className="text-sm text-muted-foreground">{reseller.priceRange}</p>
              </div>
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {reseller.payments.map((payment) => (
                <span
                  key={payment}
                  className="text-xs text-zinc-500"
                >
                  {payment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
}
