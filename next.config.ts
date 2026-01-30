import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [{ pathname: "/**" }],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui.shadcn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
