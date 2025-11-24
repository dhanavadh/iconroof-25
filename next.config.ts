import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: 'https://beta.iconroof.co.th',
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
