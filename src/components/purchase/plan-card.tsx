"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useSellAuthEmbed } from "@/hooks/useSellAuthEmbed";
import type { Plan } from "@/data/resellers";

export default function PlanCard({ plan }: { plan: Plan }) {
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
        <Card className="border-zinc-800 transition-colors hover:border-[#f8bfd4]/50">
          <CardContent className="flex flex-col p-5">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">{plan.name}</span>
              {plan.popular && (
                <span className="text-[11px] font-medium text-[#f8bfd4]">Recommended</span>
              )}
            </div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="text-2xl font-bold">{plan.price}</span>
              {plan.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {plan.originalPrice}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
          </CardContent>
        </Card>
      </button>
      {overlay}
    </>
  );
}
