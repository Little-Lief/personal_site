/** @type {import('next').NextConfig} */
// GitHub Pages serves this repo at https://<org>.github.io/personal_site/
// (or at the domain root if a custom domain is added later via /public/CNAME —
// if that happens, delete the basePath/assetPrefix below).
const repoName = "personal_site";
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: "export", // static export — GitHub Pages has no Node server to run Next's SSR
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
  images: { unoptimized: true }, // next/image's optimizer needs a server; static export can't run it
  trailingSlash: true, // GitHub Pages serves /resume/index.html, not /resume.html
};

module.exports = nextConfig;
