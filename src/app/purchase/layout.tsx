import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lumin.rocks";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Purchase - lumin.rocks",
  description:
    "Buy access to lumin.rocks, a premium Roblox script hub. Choose from weekly, monthly, or lifetime plans.",
  openGraph: {
    title: "Purchase - lumin.rocks",
    description:
      "Buy access to lumin.rocks, a premium Roblox script hub. Choose from weekly, monthly, or lifetime plans.",
  },
};

export default function PurchaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
