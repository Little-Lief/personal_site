/** @type {import('next').NextConfig} */
// GitHub Pages serves this repo at https://<org>.github.io/personal_site/
// (or at the domain root if a custom domain is added later via /public/CNAME —
// if that happens, delete the basePath/assetPrefix below, and drop
// NEXT_PUBLIC_BASE_PATH from the build step in .github/workflows/deploy.yml).
// NEXT_PUBLIC_BASE_PATH is the single source of truth, shared with plain
// <img> tags via lib/basePath.js — see that file for why.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export", // static export — GitHub Pages has no Node server to run Next's SSR
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: { unoptimized: true }, // next/image's optimizer needs a server; static export can't run it
  trailingSlash: true, // GitHub Pages serves /resume/index.html, not /resume.html
};

module.exports = nextConfig;
