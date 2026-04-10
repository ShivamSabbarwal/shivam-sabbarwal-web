import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactCompiler: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
