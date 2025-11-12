# SARGA — Future of Creation

Marketing-first website for SARGA, a Hyderabad-based legal collective focused on IP, cybercrime, insurance, and labour mandates. Built with React + TypeScript + Vite.

## Tech Stack
- Vite + React 18 + TypeScript
- CSS modules with custom tokens, gradients, and dark-mode toggles
- Formspree for contact and talent intake
- Custom reveal animations (IntersectionObserver) and analytics helper

## Structure
```
public/            # Static assets (logos, imagery, favicons)
src/
  components/      # Layout + section components
  data/            # Narrative + practice area content modules
  hooks/           # Theme preference & utilities
  styles/          # Base tokens, globals, page styles
  utils/           # Analytics + reveal helpers
```

## Scripts
```bash
npm install       # install dependencies
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # production build (outputs dist/)
npm run preview   # preview production build
```

## Deployment
- Optimized for Vercel: `npm run build` produces static assets served from `dist/`.
- Set environment variables as needed (`VITE_GA_MEASUREMENT_ID`, `VITE_FORMSPREE_ENDPOINT`, `VITE_FORMSPREE_TALENT_ENDPOINT`).
- Push to GitHub (`sargaftc-dev/SARGA`) and connect to Vercel for auto deploys.

## Privacy & Compliance
- Disclaimer gate ensures visitors acknowledge non-solicitation + confidentiality expectations.
- Contact/Talent forms note NDA availability; update copy as regulatory guidance evolves.

## Roadmap / TODO
- Add proof points (metrics/testimonials) to hero + practice cards.
- Enhance partner bios with years, courts, and notable matters.
- Add CTA to regional reach section.
- Integrate analytics measurement ID + conversion events.
- Implement success/error states for forms and optional file uploads.
