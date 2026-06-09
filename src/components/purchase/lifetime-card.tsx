"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useSellAuthEmbed } from "@/hooks/useSellAuthEmbed";
import type { Plan } from "@/data/resellers";

export default function LifetimeCard({ plan }: { plan: Plan }) {
  const productId = plan.productId;
  const variantId = plan.variantId;
  const shopId = plan.shopId;
  if (!productId || !variantId || !shopId) return null;

  const { checkout, isLoading, overlay } = useSellAuthEmbed();

  return (
    <>
      <button
        type="button"
        onClick={() =>
          checkout({
            cart: [{ productId, variantId, quantity: 1 }],
            shopId,
          })
        }
        disabled={isLoading}
        className="block w-full text-left cursor-pointer disabled:opacity-50"
      >
        <Card className="border-[#f8bfd4]/30 transition-colors hover:border-[#f8bfd4]/50">
          <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold">Lifetime</span>
                <span className="text-[10px] font-medium text-[#f8bfd4] bg-[#f8bfd4]/15 px-2 py-0.5 rounded-full">
                  Best value
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {plan.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Permanent access, one-time purchase
              </p>
            </div>
          </CardContent>
        </Card>
      </button>
      {overlay}
    </>
  );
}
