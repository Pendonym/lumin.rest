import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "tr.rbxcdn.com" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "q2p0njok3b.ufs.sh" },
    ],
  },
};

export default nextConfig;
