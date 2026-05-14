# Clarzo.ai — Website

A premium, futuristic redesign of the **Clarzo.ai** marketing site — an AI-powered wealth intelligence platform for Indian investors.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Every line of original copy has been preserved verbatim; only the visual design, interaction, and code architecture are new.

---

## Quick start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run start
```

Type check:

```bash
npm run typecheck
```

---

## Tech stack

| Layer | Choice |
|------|--------|
| Framework | Next.js 15.1 (App Router, RSC) |
| Language | TypeScript 5.7 (strict) |
| Styling | Tailwind CSS 3.4 with custom design tokens |
| Animation | Framer Motion 11 |
| Icons | lucide-react |
| Fonts | Fraunces (display) + Inter (body) + JetBrains Mono — via `next/font/google` |
| Hosting | Vercel-ready (any Node.js host works) |

---

## Pages

| Route | Source page |
|-------|-------------|
| `/` | Landing — hero, problem, journey, bento, expert, security, FAQ, CTA |
| `/product` | 8 alternating feature deep-dives + 12-card grid |
| `/discovery` | Sector → company → company-detail browsing with a mock CompanyGPT |
| `/knowledge` | Articles, downloadable resources, calculator index, newsletter |
| `/calculators` | 8 working calculators: EMI, Tax, SIP, Lump Sum, Retirement, PPF, FD, Gratuity |
| `/about` | Mission, story, team, values |
| `/privacy` | Privacy policy (sticky section nav) |
| `/terms` | Terms & conditions (sticky section nav) |

The original static HTML lives in [`legacy/`](./legacy/) for reference. Logo assets live in [`public/images/`](./public/images/).

---

## Project structure

```
.
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — fonts, nav, footer, atmosphere
│   ├── globals.css             # Tailwind layers + design system primitives
│   ├── page.tsx                # Landing page
│   ├── product/page.tsx
│   ├── discovery/page.tsx
│   ├── knowledge/page.tsx
│   ├── calculators/page.tsx
│   ├── about/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── ui/                     # Reusable primitives (Button, Card, Container, Reveal, …)
│   ├── layout/                 # Navigation, Footer, BackgroundAtmosphere
│   ├── landing/                # Hero, Pain, Journey, Bento, Expert, Security, FAQ, FinalCTA + mocks
│   ├── product/                # FeatureSplit + 8 mock visuals
│   ├── discovery/              # Sector grid, company list, company detail, CompanyGPT
│   ├── knowledge/              # Articles, resources, calculator index, newsletter
│   ├── calculators/            # All 8 calculators + shared input / donut / result UI
│   └── legal/                  # LegalLayout with sticky TOC for Privacy & Terms
├── lib/
│   ├── utils.ts                # `cn`, `formatIndianCurrency`, site constants
│   ├── nav.ts                  # Nav + footer links
│   ├── calculators.ts          # Pure Indian financial formulas (EMI, SIP, tax slabs, …)
│   └── data/                   # Content: FAQs, articles, sectors, companies, …
├── public/images/              # Logo PNGs
├── legacy/                     # Original 8 static HTML pages
├── tailwind.config.ts          # Design tokens (colours, fonts, animations, shadows)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Design system

**Palette** — premium dark with emerald + gold accents:

| Token | Value |
|-------|-------|
| `bg.deep` | `#04050a` (page background) |
| `bg.surface` / `bg.elevated` | layered surface tones |
| `accent` / `accent.light` | `#10b981` / `#34d399` (emerald — primary action, growth) |
| `gold` | `#f5c842` (premium accent, wealth, returns) |
| `chart.blue` / `.purple` / `.red` / `.amber` | data viz palette |
| `ink` / `ink.dim` / `ink.muted` | text hierarchy |

**Typography:**
- Display — Fraunces variable serif (optical sizing, soft axis)
- Body — Inter
- Mono — JetBrains Mono (tabular figures for finance)

**Motion language:**
- Aurora background blobs drift slowly (15–30s loops)
- Scroll-triggered reveals via `Reveal` + `StaggerGroup` (custom Framer Motion wrappers, respects `prefers-reduced-motion`)
- Card hover: subtle Y-lift, accent border glow, top edge highlight (`.glass-edge`)
- Charts/bars animate from 0 → target on viewport entry

**Reusable primitives** live in [`components/ui/`](./components/ui/):
- `Button` — polymorphic (button / internal Link / external anchor) with 4 variants, 3 sizes
- `Container` — narrow / default / wide widths
- `Card`, `Tag`, `Pill` — glassmorphic surfaces
- `SectionHeader` — eyebrow + display title + subtitle
- `Reveal`, `StaggerGroup`, `StaggerItem` — motion wrappers
- `Logo` — typographic mark

---

## Calculators

All 8 calculators are real, interactive, and use accurate Indian formulas — implemented in [`lib/calculators.ts`](./lib/calculators.ts):

- **EMI** — standard amortization formula + yearly amortization table
- **Tax** — Old vs New regime for FY 2026-27 (slabs, 87A rebate, 4% cess, ₹50K / ₹75K standard deduction)
- **SIP** — future value of annuity due
- **Lump Sum** — `P × (1 + r)^n`
- **Retirement** — inflation-adjusted corpus, real-rate withdrawal over 30-year retirement
- **PPF** — annual compounding, EEE-tax-exempt
- **FD** — quarterly / half-yearly / annual compounding selectable
- **Gratuity** — `(Basic × 15 × Yrs) / 26`, ₹20L tax-free cap, eligibility check at 5 years

Each calculator includes a donut chart, color-coded result rows, and a sticky tab nav for switching.

---

## Accessibility & SEO

- Semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- Focus rings on all interactive elements (`*:focus-visible`)
- `prefers-reduced-motion` respected in scroll reveals
- `next/font` self-hosts Google Fonts (zero CLS, no external font requests)
- Per-page `metadata` exports for `<title>`, description, OG tags
- Color contrast meets WCAG AA on body text against the dark background

---

## Deployment

**Vercel** (recommended):

```bash
vercel deploy
```

Any Node.js host that supports `next start` works. If you need a static export for GitHub Pages, set `output: 'export'` in `next.config.ts` — note that this disables image optimization and interactive routing features that this site doesn't rely on.

---

## License

© 2021–2025 Clarzo. All rights reserved.
