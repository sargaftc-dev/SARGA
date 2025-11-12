# SARGA — Future of Creation

Responsive marketing site for SARGA, a Hyderabad-based legal collective focused on IP, cybercrime, insurance, and labour mandates. Built with React + TypeScript + Vite and tuned for soft modern branding (light blue + deep charcoal palette).

## Features
- Floating card navigation inspired by React Bits with locale + theme toggles and mobile slide-out.
- Hero/About merge with skyline art, proof chips (no NDA breaches), and dual CTAs.
- Practice areas rendered as expandable cards with localized copy for English, Hindi, and Telugu.
- Partners carousel built on scroll-snap cards (opaque backgrounds, quotes, LinkedIn links).
- Collaboration + contact funnels powered by Formspree (primary: `https://formspree.io/f/xkgknejn`) with dedicated Work With Us intake.
- Light/dark themes with system preference detection, compliant disclaimer gate, and embedded Google Map teaser for the Kondapur office.
- SEO metadata + social tags handled through `index.html`, plus hooks for Google Analytics.

## Project Structure
```
public/             # Static assets (imagery, favicons, icons)
src/
  components/       # Layout primitives + section components
  data/             # Narrative content, translations, partner + practice configs
  hooks/            # Theme + locale persistence, animations
  styles/           # Tokens, globals, per-section CSS modules
  utils/            # Analytics + reveal helpers
```

## Getting Started
```bash
npm install        # install dependencies (Node 20+, npm 9+)
npm run dev        # start Vite dev server at http://localhost:5173
npm run lint       # run ESLint with repo config
npm run build      # type-check (tsc -b) + Vite production build to dist/
npm run preview    # locally serve the production bundle
```

## Environment Variables
Set via `.env.local` or Vercel dashboard:
- `VITE_GA_MEASUREMENT_ID` — optional Google Analytics tag.
- `VITE_FORMSPREE_ENDPOINT` — primary contact Formspree endpoint.
- `VITE_FORMSPREE_TALENT_ENDPOINT` — Work With Us / collaboration form endpoint.

## Deployment
1. Push to `sargaftc-dev/SARGA` (main branch).  
2. Vercel project picks up the repo; build command `npm run build`, output `dist/`.  
3. Configure preview/prod env vars above.  
4. Smoke test via `npm run preview`, then verify on the deployed URL (forms, nav, locale toggle, disclaimer, GA events).

## Contributing & QA
- Follow the detailed contributor guide in `AGENTS.md` plus the backlog stored in `TODO.md` (both ignored from git history).
- Manual QA per change: hero CTA clicks, locale switch, partner carousel, practice area expand/collapse, both Formspree submissions, mobile nav, theme toggle, disclaimer acceptance.
- Use Lighthouse/Chrome dev tools to validate mobile optimizations before requesting reviews.
