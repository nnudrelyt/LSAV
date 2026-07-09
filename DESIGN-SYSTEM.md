# LSAV — Design System

The visual system behind the LSAV.tv site (homepage, service pages, careers, ULC, and articles). This is a capture of the system **as implemented** in the live pages — every value below is pulled from the shipped CSS, not invented. Treat the page CSS as the source of truth; this doc is the map.

_Last captured: 2026-07-09 — from `lsav-case-studies/*.html`._

---

## 1. Color

### Core tokens (`:root` in `assets/css/lsav-foundation.css`)
| Token | Value | Use |
|---|---|---|
| `--dark` | `#231F20` | Primary brand near-black; body text, dark sections |
| `--near-black` | `#1A1718` | Deepest background; hero/CTA bands |
| `--cyan` | `#00AEEF` | Brand accent — links, highlights, active states |
| `--white` | `#FFFFFF` | Text on dark, borders, surfaces |
| `--btn-hover` | `#29ABE2` | Button hover slab (`.lsav-btn::after`) + focus ring — a hair deeper than `--cyan` |
| `--cyan-deep` | `#008BBF` | Outlined pill borders + `.lsav-btn--apply` hover — pressed/darker cyan |

_Accents were promoted from inline hex into `:root` tokens in Phase 2 — every button/pill across the nine full pages now references `var(--btn-hover)` / `var(--cyan-deep)`. (Not applied to `articles.html`, which is standalone and doesn't link the foundation sheet.)_

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
Headings and lead copy scale fluidly with `clamp(min, vw, max)`. As of Phase 2 the scale is **tokenized in `:root`** (foundation sheet) and referenced by name across the nine full pages:

| Token | `clamp()` | Role |
|---|---|---|
| `--fs-display` | `clamp(48px, 4.4vw, 84px)` | Hero display (largest) |
| `--fs-hero` | `clamp(40px, 3.9vw, 75px)` | Hero / page title (9 uses) |
| `--fs-h2` | `clamp(36px, 3.3vw, 64px)` | Section headline |
| `--fs-h3` | `clamp(32px, 3.3vw, 48px)` | Sub-headline |
| `--fs-h4` | `clamp(26px, 2.4vw, 36px)` | Feature title |
| `--fs-lead` | `clamp(18px, 1.4vw, 27px)` | Lead paragraph (9 uses) |
| `--fs-body` | `clamp(18px, 1.5vw, 22px)` | Body / intro copy |
| `--fs-small` | `clamp(16px, 1.4vw, 20px)` | Small / meta |

_One genuine one-off remains raw: ULC's big stat number uses `clamp(48px, 5vw, 80px)` — left un-tokenized on purpose (single use, page-specific)._

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

- **Reveal easing:** `--reveal-ease: cubic-bezier(0.22, 1, 0.36, 1)` — the standard entrance curve, now a single `:root` token in the foundation sheet (Phase 3 hoist; was previously redefined in every page).
- **Scroll reveal:** section-observed, child-choreographed. An `IntersectionObserver` adds `.in-view` to whole **sections** (`.intro`, `.cs-card`, `.cs-banner`, `.cta-band`, `.gallery`, `.related`, …); the CSS then reveals each section's children with per-child transitions and staggers. Base grammar: `opacity: 0 → 1`, `translateY(24px) → 0`, one-shot, `~1.05s`. Bespoke variants layer on top — benefit numbers slide in from the left, case-study images parallax-scale (`1.02 → 1`), banner backgrounds scale (`1.05 → 1`), and children stagger via `transition-delay`.
- **Why it's still per-page:** the reveal blocks differ across pages because each page animates different section types — this is genuine variation, not copy-paste waste. The *mechanism* (the observer) is identical everywhere; only the `targets` selector list changes.
- **Accessibility:** every reveal and the button animation are disabled under `prefers-reduced-motion: reduce`. Motion is opt-in via the `.js` hook, so no-JS users get static content.

---

## 5. Components

### Button — `.lsav-btn`
The signature interaction. A bordered box with a cyan slab that floods in on hover while the arrow and label swap sides.

- Box: `width: 230px`, `padding: 25px 0 28px 90px`, `2px solid #fff` border, `border-radius: 6px`, `overflow: hidden`.
- Slab: `.lsav-btn::after` — `var(--btn-hover)`, parked at `left: -180px` so a ~60px sliver shows at rest, slides to `left: 0` on hover.
- Arrow: white arrow img at `left: 15px`, flies right on hover.
- Motion is **forward-only** (L→R): hover-out snaps back, no reverse transition. ~200ms ease-in-out.

**Variants:** `--talk` (Let's talk / contact), `--apply` (careers, hover bg `var(--cyan-deep)`), `--submit` (forms). Each variant re-positions the slab/arrow offsets but shares the base mechanic.

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

### Refactor progress

- **Phase 1 — shared stylesheets (done):** the universal foundation and the service-page template are extracted into linked stylesheets, so those layers are edit-once:
  - `assets/css/lsav-foundation.css` — linked by all nine full pages: tokens/reset/base, skip-link, site header, intro sections, footer.
  - `assets/css/lsav-service.css` — linked by the six service pages: buttons, "what we produce", related work, production hubs, feature banner, CTA band.
  - Still inline per page (genuinely page-specific or variant): scroll-reveal choreography, hero, gallery, responsive `@media` overrides, and each page's unique sections.
- **Phase 2 — token layer (done):** the two accent colors and the eight-step type scale were promoted from inline literals into `:root` tokens (see §1, §2). Design decisions now live in one place.
- **Phase 3 — reveal system (partial):** `--reveal-ease` hoisted into the foundation token layer (the safe, provable part). The **behavioral** rewrite — extracting the identical `IntersectionObserver` into a shared `assets/js/lsav-reveal.js` parameterized by a `data-targets` selector, so the mechanism lives once — is **specified but not yet applied**, because it changes runtime behavior and must be verified in a real browser before shipping (the preview tooling wasn't available when this was written). See "Next" below.
- **Equivalence guarantee:** every change in Phases 1–3 was verified render-equivalent to the pre-refactor pages — each page's fully-resolved CSS matches the original rule-for-rule (0 rules added or lost).

### Next (needs browser verification)

- **Shared reveal JS:** move the observer to `assets/js/lsav-reveal.js`; each page keeps only its `data-targets="…"` list. Watch every page's reveals fire once, in order, with staggers intact, and confirm the reduced-motion path.
- **HTML duplication:** header/footer/nav markup is still copy-pasted across pages — raw static HTML can't share markup. Fully de-duplicating needs a light static generator (11ty / Astro) or server includes.
- **Guardrail:** add a `stylelint` rule banning raw hex/px outside the token sheet, so drift can't creep back in.
- **Companion docs:** copy/voice lives in `copy-deck.md`; type & grid conventions also exist in the LSAV-Blog Figma file.
- **Reference implementation:** `button.html` is the standalone spec for the `.lsav-btn` mechanic (annotated).
