# LSAV — Design System

The visual system behind the LSAV.tv site (homepage, service pages, careers, ULC, and articles). This is a capture of the system **as implemented** in the live pages — every value below is pulled from the shipped CSS, not invented. Treat the page CSS as the source of truth; this doc is the map.

_Last captured: 2026-07-09 — from `lsav-case-studies/*.html`._

---

## 1. Color

### Core tokens (`:root`)
| Token | Value | Use |
|---|---|---|
| `--dark` | `#231F20` | Primary brand near-black; body text, dark sections |
| `--near-black` | `#1A1718` | Deepest background; hero/CTA bands |
| `--cyan` | `#00AEEF` | Brand accent — links, highlights, active states |
| `--white` | `#FFFFFF` | Text on dark, borders, surfaces |

### Accent variants (used in components, not tokenized)
| Value | Where |
|---|---|
| `#29ABE2` | Button hover slab (`.lsav-btn::after`) — a hair deeper than `--cyan` |
| `#008BBF` | `.lsav-btn--apply` hover background — pressed/darker cyan |

### Article category palette
Each article category carries its own accent, applied via a `--cat` variable on chips and cards (`--on` is the readable text color on that accent):

| Category | `--cat` | `--on` |
|---|---|---|
| All (default) | `var(--dark)` | `#fff` |
| Corporate Event Production | `#77bc43` | `#1A1718` |
| AV Technical Excellence | `#f68c2c` | `#1A1718` |
| Tradeshow / Exhibit Strategy | `#00827e` | `#fff` |
| Event Marketing & Engagement | `#9d2065` | `#fff` |
| Emerging Event Technology | `#6c3fc7` | `#fff` |

---

## 2. Typography

**Primary — Poppins** (Google Fonts). Weights loaded: `400, 600, 700` (plus `800` on pages with the heavier display headings).
Used for essentially all UI and display text (`font-family: Poppins, sans-serif`).

**Secondary — Calibri / Carlito** (`Calibri, Carlito, "Segoe UI", sans-serif`). Carlito is the metric-compatible web substitute for Calibri; used in a handful of document-style/body contexts.

```
Loaded via:
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Carlito:wght@400;700&display=swap" rel="stylesheet">
(with preconnect to fonts.googleapis.com + fonts.gstatic.com)
```

### Fluid type scale
Headings and lead copy scale fluidly with `clamp(min, vw, max)`. The scale in use across pages:

| Role | `clamp()` |
|---|---|
| Hero display (largest) | `clamp(48px, 4.4vw, 84px)` |
| Hero / page title | `clamp(40px, 3.9vw, 75px)` |
| Section headline | `clamp(36px, 3.3vw, 64px)` |
| Sub-headline | `clamp(32px, 3.3vw, 48px)` |
| Feature title | `clamp(26px, 2.4vw, 36px)` |
| Lead paragraph | `clamp(18px, 1.4vw, 27px)` |
| Body / intro copy | `clamp(18px, 1.5vw, 22px)` |
| Small / meta | `clamp(16px, 1.4vw, 20px)` |

---

## 3. Layout & responsive

**Breakpoints** (max-width, mobile-last overrides on a desktop base):

| Breakpoint | Purpose |
|---|---|
| `1440px` | Large-desktop trim |
| `1024px` | Tablet / small laptop |
| `767px` | Mobile |

Reduced-motion is handled at every animated component via `@media (prefers-reduced-motion: reduce)` (28 guards across the pages) — see §4.

---

## 4. Motion

- **Reveal easing:** `--reveal-ease: cubic-bezier(0.22, 1, 0.36, 1)` — the standard entrance curve.
- **Scroll reveal:** elements start `opacity: 0; translateY(24px)` and transition in over `1.05s` on the `.js` (JS-enabled) class. Copy, benefits, cards, banners, and CTA content all use this.
- **Accessibility:** every reveal and the button animation are disabled under `prefers-reduced-motion: reduce`. Motion is opt-in via the `.js` hook, so no-JS users get static content.

---

## 5. Components

### Button — `.lsav-btn`
The signature interaction. A bordered box with a cyan slab that floods in on hover while the arrow and label swap sides.

- Box: `width: 230px`, `padding: 25px 0 28px 90px`, `2px solid #fff` border, `border-radius: 6px`, `overflow: hidden`.
- Slab: `.lsav-btn::after` — `#29ABE2`, parked at `left: -180px` so a ~60px sliver shows at rest, slides to `left: 0` on hover.
- Arrow: white arrow img at `left: 15px`, flies right on hover.
- Motion is **forward-only** (L→R): hover-out snaps back, no reverse transition. ~200ms ease-in-out.

**Variants:** `--talk` (Let's talk / contact), `--apply` (careers, hover bg `#008BBF`), `--submit` (forms). Each variant re-positions the slab/arrow offsets but shares the base mechanic.

### Cards — `.cs-card` / case-study cards
Content cards with `.cs-copy`, banner titles (`.cs-banner-title`), sub (`.cs-sub`), and pill (`.cs-pill`). Participate in the scroll-reveal system.

### Banners
Full-bleed image bands driven by a per-instance `--banner-img` variable (e.g. `url('assets/backstage.webp')`), so one banner component reskins per page.

### Filter chips + cards — `.chip` / `.card`
Article filtering UI. Chips and cards read their category accent from `--cat`/`--on` (see §1). Chip border adopts `--cat` on hover; cards tag themselves via `data-cat`.

### CTA band — `.cta-band`
Dark closing section (`--near-black`) with headline, copy, and a `.lsav-btn`. Reveal-animated.

---

## 6. Notes & conventions

- **De-facto token layer:** only 5 core values are tokenized (`--dark`, `--near-black`, `--cyan`, `--white`, `--reveal-ease`). Accent variants (`#29ABE2`, `#008BBF`) and the category palette live inline in component CSS — candidates to promote into `:root` (Phase 2, not yet done).
- **Shared stylesheets (Phase 1 — done):** the universal foundation and the service-page template are now extracted into linked stylesheets, so those layers are edit-once:
  - `assets/css/lsav-foundation.css` — linked by all full pages: tokens/reset/base, skip-link, site header, intro sections, footer.
  - `assets/css/lsav-service.css` — linked by the six service pages: buttons, "what we produce", related work, production hubs, feature banner, CTA band.
  - Still inline per page (genuinely page-specific or variant): scroll-reveal choreography, hero, gallery, responsive `@media` overrides, and each page's unique sections.
- **Remaining duplication:** the scroll-reveal blocks still enumerate per-page selectors (Phase 3 target — convert to a `.reveal` class contract), and header/CTA markup is still copy-pasted in HTML (needs a build step or static generator to fully de-duplicate).
- **Companion docs:** copy/voice lives in `copy-deck.md`; type & grid conventions also exist in the LSAV-Blog Figma file.
- **Reference implementation:** `button.html` is the standalone spec for the `.lsav-btn` mechanic (annotated).
