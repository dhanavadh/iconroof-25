import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: 'https://beta.iconroof.co.th',
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Allow all origins (or specify https://iconroof.co.th)
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tvss01.iconroof.co.th'
      }
    ]
  }
};

export default nextConfig;
