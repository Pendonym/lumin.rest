import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f8bfd4",
};

export const metadata: Metadata = {
  title: "lumin.rocks - Premium Roblox Script Hub",
  description:
    "lumin.rocks is a premium Roblox script hub supporting Grace, Build a Boat for Treasure, Tower of Hell, and more.",
  keywords:
    "lumin.rocks, lumin, roblox, script hub, best roblox script, working roblox script 2025, tower of hell script, grace script, build a boat script!",
  authors: [{ name: "lumin.rocks" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "lumin.rocks",
    locale: "en_US",
    images: "https://lumin.rocks/brand/icon.png",
  },
  twitter: {
    card: "summary",
    images: "https://lumin.rocks/brand/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/brand/icon.png" />
        <link rel="apple-touch-icon" href="/brand/icon.png" />
      </head>
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
