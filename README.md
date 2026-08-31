# Personal Website

Zachary Greenlief's personal site — Next.js, statically exported for GitHub Pages.

## Open items carried over from the roadmap

- **Business/Consulting page** — not built yet in this pass; still needs the Little Lief services content (Discovery, Buyout, Part-Time Management, Full Execution, described in plain language — no fee figures per your call).
- **Custom domain** — currently set up for the default `https://<org>.github.io/personal_site/` GitHub Pages URL. If you want a custom domain later, drop a `CNAME` file in `/public` and remove `basePath`/`assetPrefix` from `next.config.js`.
- **Photos** — the headshot and family photo from your Drive doc are in `/public/images` and wired into the bio page; resized for web (headshot ~900px, family photo ~1400px on the long edge) but not otherwise retouched.
- **Push access** — I built this in a sandboxed environment with no GitHub credentials for `Little-Lief/personal_site`, so I couldn't push it myself. It's zipped up for you to add to the repo (or connect your computer/GitHub to this session and I can push it directly).

## Local development

```
npm install
npm run dev
```

## Build (what GitHub Pages actually serves)

```
npm run build
```

Static output lands in `/out`. Point GitHub Pages (Settings → Pages) at that folder, or use the included GitHub Actions workflow (`.github/workflows/deploy.yml`) to build and publish it automatically on every push to `main`.

## Contact form

The contact page posts to [FormSubmit.co](https://formsubmit.co) using your company email — no account needed. The **first** message sent through it will trigger a one-time confirmation email to zachary.greenlief@littleliefai.com; click the confirmation link there once, and every submission after that lands in your inbox automatically.

## Animation

Section entrances/exits use a small custom `SlideSection` component (`components/SlideSection.js`) built on `IntersectionObserver` + CSS transitions — no animation library dependency. It's a call I made rather than asking: it's the lightest option for a 3-4 page static site, it respects `prefers-reduced-motion`, and it re-triggers both ways (in from the side on scroll-into-view, back out on scroll-away), matching what your notes described.
