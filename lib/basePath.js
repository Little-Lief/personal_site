// Single source of truth for the site's base path on GitHub Pages.
// Set via NEXT_PUBLIC_BASE_PATH in the GitHub Actions build step (see
// .github/workflows/deploy.yml) — empty locally, "/personal_site" in CI.
// Next.js only inlines NEXT_PUBLIC_-prefixed vars into the browser bundle,
// so this is the only reliable way to share the value between
// next.config.js (build-time) and plain <img> tags (runtime markup).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
