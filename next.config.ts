import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    tsconfigPath: "./tsconfig.pages.json",
  },
};

export default nextConfig;
