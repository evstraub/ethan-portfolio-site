# Ethan Portfolio Site (Next.js, CSS-first)

Deployed portfolio with Home, Projects, Blog/Notes, About, Contact. No CSS frameworks — clean, semantic CSS with custom properties.

## Run locally
```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy (Vercel)
1. Push this repo to GitHub.
2. Import in Vercel (New Project → select repo).
3. Build command: `next build` (auto). Output: `.next`.
4. Set your production domain in `app/layout.tsx` (`metadataBase` + Plausible data-domain).

## Analytics (Plausible)
- Replace `your-domain.com` in `components/Plausible.tsx` with your domain after Vercel deploy.
- Create site in plausible.io and verify domain.

## SEO & OpenGraph
- Metadata set in `app/layout.tsx`.
- Replace `/public/og.png` with a real 1200×630 image later.

## Dark mode
- Auto via prefers-color-scheme with a manual toggle in the header.
- Theme is stored in `localStorage` and applied via `data-theme` on `<html>`.

## Structure
```
app/
  (pages)/
    page.tsx
    projects/page.tsx
    blog/page.tsx
    about/page.tsx
    contact/page.tsx
  layout.tsx
components/
  Nav.tsx
  Footer.tsx
  ProjectCard.tsx
  ThemeToggle.tsx
  ThemeScript.tsx
  Plausible.tsx
styles/
  global.css
  layout.css
  typography.css
lib/
  projects.ts
```

## Submodules (optional)
You can keep project repos separate and add them here as submodules:
```bash
git submodule add https://github.com/you/flashcards external/flashcards
git submodule add https://github.com/you/solver external/solver
```
Then link to them from project pages.

## License
MIT
