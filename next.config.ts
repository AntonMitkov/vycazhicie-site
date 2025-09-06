import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Exclude .svg from Next's default file loader
    const fileLoaderRule = config.module.rules.find(
      (rule: any) => rule.test && rule.test.test(".svg")
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
