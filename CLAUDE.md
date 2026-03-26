# CLAUDE.md — BrandQraft Website (v4)

> **Complete project context file for AI agents.** Read this before making ANY changes.

---

## 1. Project Overview

**BrandQraft** is a branding, digital marketing, and business scaling agency based in **Hyderabad, India**. This repository contains their **official company website** — a premium, single-page marketing site with dynamic project case-study pages.

- **Live URL**: `https://brandqraft.co`(will be deployed, currently live on - https://brandqraft-khaki.vercel.app)

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | ^16.1.6 |
| **Language** | TypeScript | ^5 |
| **UI Library** | React | 19.2.3 |
| **Styling** | Tailwind CSS v4 | ^4 (via `@tailwindcss/postcss`) |
| **Animations** | Framer Motion | ^12.23.26 |
| **Smooth Scroll** | Lenis | ^1.3.17 |
| **Icons** | Lucide React | ^0.562.0 |
| **Bundler** | Webpack (Turbopack disabled via `.env.local`: `TURBOPACK=0`) |

### Key Configuration Notes
- **PostCSS**: Uses `@tailwindcss/postcss` plugin (Tailwind v4 style)
- **Path alias**: `@/*` → `./src/*` (defined in `tsconfig.json`)
- **Font**: Custom **Myriad Pro** font family (OTF files in `/public/fonts/`, 10 weight/style variants from Light to Bold Italic + Condensed)
- **No Turbopack**: Explicitly disabled in `.env.local` for stability with Tailwind CSS v4

---

## 3. Brand Design System

### Color Palette
| Token | CSS Variable | Hex | Tailwind Class | Usage |
|---|---|---|---|---|
| Nile Blue | `--nile-blue` | `#043E52` | `bg-nile-blue`, `text-nile-blue` | Primary background, primary dark color |
| Pine | `--pine` | `#016A6D` | `bg-pine`, `text-pine` | Dark teal accent |
| Sea Green | `--sea-green` | `#1C9290` | `bg-sea-green`, `text-sea-green` | Section labels, secondary accent |
| Kraft Paper | `--kraft-paper` | `#B79E7B` | `bg-kraft`, `text-kraft` | Warm earthy accent |
| Sunset Orange | `--sunset-orange` | `#E16A3D` | `bg-sunset`, `text-sunset` | Primary CTA color, highlights |

### Typography
- **Font family**: `'Myriad Pro', 'Helvetica Neue', Arial, sans-serif`
- **Heading weight**: 600 (semibold)
- **Body weight**: 400 (regular)
- **Headings**: Tight leading (1.2), slight negative letter-spacing (-0.02em)

### Design Language — "Paper/Origami Craft"
The entire site is themed around **paper crafting and origami**, reinforcing the "Qraft" in BrandQraft:

1. **Paper-Fold Corner (`PaperFoldCorner`)**: A signature CSS element placed on the top-right corner of cards, buttons, and the navbar. Simulates a folded paper corner with subtle shadows.
   - Sizes: `xs` (18px), `sm` (20px), `md` (24px), `lg` (28px), `xl` (32px)
   - Variants: `light`, `dark`, `brand`

2. **Paper-Cut Buttons**: All CTA buttons use `clipPath: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)` to create a "cut corner" effect.

3. **Origami Icon Decorations**: 50 origami-style SVG icons (in `/public/origami-icons/`) are scattered across sections as decorative elements using the `OrigamiDecoration` component. They use CSS `filter` to colorize the SVGs.

4. **Background Images**: Three custom paper-textured background images:
   - `/herobg.png` — Hero and CTA sections (light textured)
   - `/middlebg.png` — Services section (light textured)
   - `/endbg.png` — CTA section

---

## 4. Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout: metadata, viewport, LenisProvider
│   ├── page.tsx              # Homepage: JSON-LD structured data + all sections
│   ├── globals.css           # Tailwind import, @font-face, CSS variables, theme
│   ├── sitemap.ts            # Dynamic sitemap generation
│   ├── opengraph-image.tsx   # Dynamic OG image generation (Edge runtime)
│   ├── error.tsx             # Global error boundary
│   ├── not-found.tsx         # 404 page
│   ├── icon.png              # Favicon
│   └── projects/
│       └── [slug]/
│           ├── page.tsx              # Server component: metadata + JSON-LD breadcrumbs
│           ├── ProjectDetailClient.tsx # Client component: full case study page
│           ├── loading.tsx           # Skeleton loading state
│           └── error.tsx             # Project-level error boundary
│
├── components/
│   ├── Header.tsx            # Floating navbar (transparent → solid on scroll)
│   ├── LenisProvider.tsx     # Smooth scroll wrapper
│   ├── PageWrapper.tsx       # Splash screen controller + content fade-in
│   ├── SplashScreen.tsx      # Animated splash with logo + "Crafting Brands"
│   │
│   ├── sections/
│   │   ├── Hero.tsx          # Full-screen hero with marker-highlight SVG on "BRANDS"
│   │   ├── About.tsx         # Vision/Mission cards + stats counter + core values
│   │   ├── Services.tsx      # 4 service cards (Branding, Web Dev, Digital Marketing, Scaling)
│   │   ├── Approach.tsx      # 5-step process (01–05) with animated connecting line
│   │   ├── WhyUs.tsx         # Differentiators + principles sidebar
│   │   ├── Work.tsx          # Project portfolio grid with animated card images
│   │   ├── Testimonials.tsx  # Carousel with swipe + dots indicator (6 testimonials)
│   │   ├── CTA.tsx           # Call-to-action with dual buttons
│   │   └── Footer.tsx        # Contact form (→ WhatsApp), address, social links
│   │
│   └── ui/
│       ├── Button.tsx            # Reusable button with paper-cut variant
│       ├── PaperFoldCorner.tsx   # The signature paper fold corner element
│       ├── OrigamiDecoration.tsx # Origami SVG icon decorator + group component
│       ├── FadeInView.tsx        # Scroll-triggered fade-in wrapper (Framer Motion)
│       ├── CounterStat.tsx       # Animated "spinning digit" counter for stats
│       ├── GradientMesh.tsx      # Animated gradient orbs (background effect)
│       └── Particles.tsx         # Floating particle dots (desktop only)
│
├── data/
│   └── projects.ts           # All project data (5 projects, typed interface)
│
└── lib/
    └── animations.ts         # Reusable Framer Motion variants + viewport config
```

### Public Assets
```
public/
├── herobg.png, middlebg.png, endbg.png  # Section background textures
├── logo black.png, logo white.png       # Brand logos (dark/light variants)
├── favicon.png                          # Favicon
├── origami-icons/                       # 50 origami SVG icons (001-crab to 050-fish)
├── project images/                      # Real project screenshots (cyfi1-3.png)
├── fonts/                               # Myriad Pro OTF files (10 variants)
├── robots.txt                           # SEO robots file
├── site.webmanifest                     # PWA manifest
└── origami-*.svg                        # Individual origami SVGs (bird, fold, heart, papers)
```

---

## 5. Page Architecture

### Homepage (`/`)
A single-page scrolling site with sections in this order:
1. **Splash Screen** → Logo animation + "Crafting Brands" tagline (shows on every page load/reload)
2. **Header** → Floating navbar with logo swap (black→white on scroll), smooth background transition
3. **Hero** → "Transforming ideas into thriving BRANDS" with marker highlight SVG
4. **About** (`#about`) → Vision/Mission cards, spinning stat counters (50+ projects, 100% satisfaction, 5+ years)
5. **Services** (`#services`) → 4 service cards on textured background
6. **Approach** (`#approach`) → 5-step horizontal process with animated shine on connecting line
7. **Why Us** → Differentiators grid + principles sidebar
8. **Work** (`#work`) → Project portfolio grid (links to `/projects/[slug]`)
9. **Testimonials** → Swipeable carousel (6 client stories)
10. **CTA** (`#cta`) → "Let's Build Your Legacy" with call/email CTAs
11. **Footer** (`#contact`) → Contact form (sends to WhatsApp), company info, address, social links

### Project Detail Page (`/projects/[slug]`)
Dynamic pages for each project with:
- Hero banner with gradient based on project accent color
- Project images grid (real images or gradient placeholders)
- Challenge & Solution sections
- Services provided tags
- Key results with checkmark list
- CTA to start a project

### Special Pages
- **404** → "Looks like this page got folded away" (on-brand messaging)
- **Error** → "An unexpected error occurred" with retry button

---

## 6. Key Components Deep Dive

### Header (Navbar)
- **Floating design**: Positioned with `mx-auto max-w-6xl mt-4`
- **Scroll behavior**: Transparent → `bg-nile-blue/95 backdrop-blur-xl` on scroll (>50px)
- **Logo swap**: Black logo (initial) → White logo (scrolled) with opacity crossfade
- **Paper fold**: Appears on navbar when scrolled, on CTA buttons always
- **Mobile menu**: Full-screen overlay with staggered link animations
- **Nav links**: About, Services, Approach, Work + "Craft a Project" CTA

### SplashScreen & PageWrapper
- **SplashScreen** shows on **every page load and reload** (uses `sessionStorage` + `PerformanceNavigationTiming` API)
- Phases: `enter` (0-800ms) → `hold` (800-3400ms) → `exit` (3400-4000ms)
- After splash completes, scrolls to hash target if present (with 800ms delay for layout stability)

### OrigamiDecoration
- Renders SVG icons from `/public/origami-icons/` with CSS filter colorization
- Has separate `position` (desktop) and `mobilePosition` (mobile) props
- Uses Framer Motion `whileInView` for fade-in animation
- 50 icons available (animals, objects, abstract origami shapes)

### CounterStat (Spinning Digits)
- Shows a "slot machine" spinning effect before landing on the final number
- 800ms spin duration with 50ms interval random digits
- Triggers when scrolled into view

---

## 7. SEO Implementation

### Metadata
- Full `Metadata` export in `layout.tsx` with title, description, keywords, OpenGraph, Twitter cards
- Dynamic metadata for project pages via `generateMetadata()`
- Canonical URLs via `alternates.canonical`
- `robots.txt` allows all crawlers
- Dynamic `sitemap.ts` generates entries for homepage + all project pages

### Structured Data (JSON-LD)
- **Homepage**: Organization + WebSite + WebPage schema (with search action)
- **Project pages**: BreadcrumbList schema (Home → Projects → [Project Name])

### OpenGraph Image
- Dynamically generated via `opengraph-image.tsx` using Next.js `ImageResponse` (Edge runtime)
- Brand-styled image with logo, tagline, and accent colors

---

## 8. Project Data

5 projects defined in `src/data/projects.ts`:

| # | Slug | Title | Category | Has Real Images? |
|---|---|---|---|---|
| 1 | `cyfi` | CyFi | Branding, Social Media & Web Development | ✅ Yes (3 screenshots) |
| 2 | `elevate-fitness` | Elevate Fitness | Branding & Web Development | ❌ Gradient placeholders |
| 3 | `northwind-capital` | Northwind Capital | Website & Digital Strategy | ❌ Gradient placeholders |
| 4 | `terra-botanics` | Terra Botanics | Brand Identity & Marketing | ❌ Gradient placeholders |
| 5 | `cloudscale-solutions` | CloudScale Solutions | Web App & Growth | ❌ Gradient placeholders |

Each project has: `slug`, `title`, `category`, `description`, `tags`, `color`, `accentColor`, `thumbnail?`, `projectImages?`, `imagePlaceholders`, `challenge`, `solution`, `results[]`, `servicesProvided[]`.

> **Note**: Only **CyFi** has real project images. The other 4 projects use animated gradient placeholders (color cycling on the project card).

---

## 9. Business Information (from structured data / footer)

- **Company**: BrandQraft
- **Email**: info@brandqraft.co
- **Phone**: +91 95360 84444
- **Address**: Office No:228, 6-3-252/2, Opp Taj Deccan Workafella, Banjara Hills, Hyderabad, Telangana, India - 500082
- **Social**: LinkedIn, Twitter, Instagram (links defined but pointing to `#`)
- **Contact form** submits via **WhatsApp** — formats form data and opens `wa.me` link with pre-filled message
- **WhatsApp number**: 919536084444

---

## 10. Animation & Interaction Patterns

### Framer Motion Variants (`src/lib/animations.ts`)
- `fadeInUp` — Fade in + slide up 30px
- `fadeIn` — Simple opacity fade
- `staggerContainer` — 0.1s stagger between children
- `slideInLeft` / `slideInRight` — Horizontal slide-in
- `scaleIn` — Scale from 0.95 to 1
- `viewportConfig` — `once: true, margin: "-100px", amount: 0.2`

### Common Patterns
- **All sections** use `FadeInView` wrapper for scroll-triggered animations
- **Cards** use `whileHover: { y: -4 to -6 }` for subtle lift effect
- **Buttons** use `whileHover: { scale: 1.02-1.03 }` and `whileTap: { scale: 0.97-0.98 }`
- **Easing**: Consistent use of `[0.22, 1, 0.36, 1]` (ease-out quart)
- **Approach section**: Animated shine sweep on horizontal connecting line using Framer Motion `animate={{ x: ["-100%", "500%"] }}`

### Lenis Smooth Scroll
- Duration: 1.4s
- Easing: `Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- Wheel multiplier: 0.8
- Touch multiplier: 2
- Respects `prefers-reduced-motion`

---

## 11. Running the Project

### Development
```bash
npm run dev          # Starts Next.js dev server (Webpack mode)
```

### Build
```bash
npm run build        # Production build
npm run start        # Start production server
```

### Lint
```bash
npm run lint         # ESLint
```

---

## 12. File Naming & Conventions

- **Components**: PascalCase (`Header.tsx`, `PaperFoldCorner.tsx`)
- **Sections**: PascalCase inside `sections/` folder
- **Data files**: camelCase (`projects.ts`)
- **CSS**: `globals.css` with `@import "tailwindcss"` + custom `@theme inline`
- **All client components**: Marked with `"use client"` directive
- **Server components**: `layout.tsx`, `page.tsx`, `not-found.tsx`, project `page.tsx`

---

## 13. Known Patterns & Gotchas

1. **Tailwind v4**: Uses the new `@theme inline` syntax for custom colors/fonts (not `tailwind.config.ts`)
2. **clipPath everywhere**: The paper-cut aesthetic uses CSS `clipPath` on almost all cards, buttons, and containers — do NOT add `border-radius` to these elements (it breaks the clipPath effect)
3. **PaperFoldCorner positioning**: Always placed as a sibling after the card/button div with `absolute top-0 right-0` — the parent must have `relative` + `overflow-visible`
4. **OrigamiDecoration SSR**: Uses `typeof window !== 'undefined'` check for mobile detection — will default to desktop position during SSR
5. **Splash screen behavior**: Currently uses `sessionStorage` + navigation type detection. On first visit or reload: shows splash. On client-side navigation (back button): may not show splash
6. **WhatsApp form**: Contact form doesn't actually submit to a backend — it opens WhatsApp with a pre-filled message
7. **Project images**: Only CyFi project has real screenshots. Other projects need real images added (currently showing gradient placeholders)
8. **Social links**: LinkedIn, Twitter, Instagram links in the footer are placeholder `#` — need real URLs

---

## 14. Latest Work Done

Based on the git history and `nextstep.md` file, the most recent development work included:

### Completed
- ✅ Full website build from scratch (v4) with premium UI/UX
- ✅ Splash screen with logo animation
- ✅ Vision/Mission cards with background icons in About section
- ✅ Spinning counter effect for stats (slot machine animation)
- ✅ Service cards with large background icons
- ✅ 5-step approach section with animated shine on connecting line
- ✅ Why Us section with dynamic layout and differentiators
- ✅ CTA section with animated gradient background
- ✅ Footer with contact form → WhatsApp integration
- ✅ Custom Myriad Pro fonts + brand color system
- ✅ Lenis smooth scroll integration
- ✅ Framer Motion animations throughout
- ✅ SEO: Full metadata, JSON-LD structured data, dynamic sitemap, OG image generation
- ✅ Paper-fold corner redesign for better visibility
- ✅ Project detail pages with dynamic routing and breadcrumb schema
- ✅ CyFi project case study with real images
- ✅ Origami icon decorations across all sections
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ 404 and error pages with brand-consistent styling
- ✅ Loading skeleton for project pages

### Pending / Next Steps (from `nextstep.md`)

The `nextstep.md` file contains a detailed list of **UI refinement requests** that have NOT been implemented yet:

1. **Splash Screen Behavior** — Ensure it appears on EVERY page load (including refresh, revisit, direct navigation). Currently may not show on all scenarios.

2. **Paper Fold Effect Visibility** — Increase visibility of the fold corner on navbar, buttons, and cards. Currently too subtle; needs better contrast with shadow/highlight/separation.

3. **Process Section Shine Animation** — The shine effect on the approach connecting line (01→05) needs to be more visible and smoothly animated.

4. **Project Navigation Scroll Position** — When navigating back from a project detail page, user should return to the Work section, not the hero. Scroll position restoration needed.

5. **Origami Icon Repositioning** — Several origami icons overlap with text on mobile:
   - Hero: butterfly icon overlaps content on mobile
   - About: "022-origami" touches heading on mobile
   - Services: "029-trophy" overlaps service cards
   - Approach: "041-origami" overlaps with text
   - Why Us: "042-origami" appears too close to text
   - Ready to Start: "046-origami" overlaps title on mobile

6. **Navbar Background Animation** — Add smooth fade/slide/blur transition when navbar background appears on scroll (currently appears too suddenly).

7. **Social Media Links** — LinkedIn, Twitter, Instagram links are still placeholder `#`

8. **Project Images** — 4 out of 5 projects (Elevate Fitness, Northwind Capital, Terra Botanics, CloudScale Solutions) still use gradient placeholders instead of real project images.

---

## 15. Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Base URL for canonical URLs and structured data | `https://brandqraft.co` |
| `TURBOPACK` | Set to `0` to disable Turbopack | `0` |

---

## 16. Quick Reference — Common Tasks

### Adding a new project
1. Add project data to `src/data/projects.ts` (follow the `Project` interface)
2. Add project images to `public/project images/`
3. Update `thumbnail` and `projectImages` fields
4. Sitemap auto-generates, metadata auto-generates

### Changing brand colors
1. Update CSS variables in `src/app/globals.css` (`:root` block)
2. Update `@theme inline` block for Tailwind classes
3. Colors are used via both CSS vars and Tailwind classes

### Adding a new section
1. Create component in `src/components/sections/`
2. Add `"use client"` directive
3. Use `FadeInView` for scroll animations
4. Add origami decorations via `OrigamiDecorationGroup`
5. Import and place in `src/app/page.tsx`

### Modifying fonts
1. Font files are in `/public/fonts/`
2. `@font-face` declarations are in `globals.css`
3. Font family is set in both `@theme inline` and `body {}` styles
