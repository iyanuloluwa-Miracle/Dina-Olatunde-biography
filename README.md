# A Life Well Lived — Digital Autobiography

A premium, single-page digital legacy built with **Nuxt 3**, celebrating a father's life through cinematic storytelling, elegant typography and refined motion design.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Nuxt 3 · Vue 3 Composition API · TypeScript |
| Styling | Tailwind CSS (custom legacy palette + type scale) |
| Motion | GSAP + ScrollTrigger · @vueuse/motion · Lenis smooth scroll |
| Media | Nuxt Image (WebP, responsive `sizes`, lazy loading) |
| Icons | Nuxt Icon (Phosphor set) |
| Quality | ESLint (@nuxt/eslint) · Prettier · WCAG-minded markup |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server → http://localhost:3000
npm run dev

# 3. Production build / preview
npm run build
npm run preview

# Static export (host anywhere — Netlify, Vercel, GitHub Pages)
npm run generate
```

## Replacing the placeholder content

Everything editable lives in **one file**: [`data/content.ts`](./data/content.ts).

1. **Text** — names, dates, biography paragraphs, timeline chapters, achievements, values, life lessons, tributes and the legacy story are all plain strings in that file. Search for `REPLACE` comments.
2. **Photos** — drop real photographs into `public/images/` and swap each `https://picsum.photos/...` URL for a local path such as `/images/hero-portrait.jpg`. Once no remote placeholders remain, you can delete the `image.domains` entry in `nuxt.config.ts`.
3. **SEO** — update the title, description, Open Graph image and JSON-LD structured data in `nuxt.config.ts`.
4. **Favicon / OG image** — replace `public/favicon.svg` and add `public/images/og-cover.jpg` (1200 × 630).

## Project structure

```
├── app.vue                    # Single-page composition of all sections
├── assets/css/main.css        # Design tokens, focus states, reduced-motion rules
├── components/
│   ├── AppNavbar.vue           # Fixed nav, Lenis anchor scrolling, mobile menu
│   ├── HeroSection.vue         # Cinematic entrance timeline + parallax portrait
│   ├── AboutSection.vue        # Two-column story with drop cap & sticky portrait
│   ├── TimelineSection.vue     # Signature "golden thread" scroll-scrubbed timeline
│   ├── AchievementsSection.vue # Grid of AchievementCard.vue
│   ├── ValuesSection.vue       # Staggered value cards
│   ├── GallerySection.vue      # CSS-columns masonry + accessible lightbox
│   ├── QuoteSection.vue        # Life lessons, oversized quote typography
│   ├── TributesSection.vue     # Grid of TributeCard.vue
│   ├── LegacySection.vue       # Full-bleed parallax finale
│   ├── FooterSection.vue
│   └── ui/SectionHeading.vue   # Eyebrow + title + gold rule
├── composables/
│   ├── useGsap.ts              # Scoped gsap.context with auto-cleanup + reduced motion
│   └── useReveal.ts            # Declarative [data-reveal] scroll animations
├── data/content.ts             # ★ All site content — edit here
├── plugins/smooth-scroll.client.ts  # Lenis ↔ ScrollTrigger sync
└── types/content.ts            # Content type contracts
```

## Design system

- **Palette** — Deep Navy `#0F172A` (canvas), Gold `#D4AF37` (reserved for the signature thread and accents), Warm White `#FAFAF9`, Stone `#78716C`.
- **Type** — Playfair Display (display), Cormorant Garamond (pull quotes), Manrope (body/UI).
- **Signature element** — the *golden thread*: a gold line that draws itself down the timeline as you scroll, echoed by hairline gold rules and Roman-numeral chapter eyebrows across the page.

## Accessibility & performance notes

- Semantic landmarks, single `h1`, ordered heading hierarchy, ARIA labels on all icon buttons, keyboard-operable lightbox (`Esc`, `←`, `→`) with focus return.
- `prefers-reduced-motion` disables Lenis smoothing and every GSAP animation; content is never hidden for those users.
- Images ship as responsive WebP with lazy loading (hero excepted, which is `fetchpriority="high"`); GSAP work is scoped per component and reverted on unmount.
