# LSAV Case Studies — Copy Deck (Directional Draft v1)

**For:** Sophie (refine + put on brand) · **From:** Tyler · **Scope:** hero → final case study → CTA
**Strategy source:** team meeting notes — visual-first page, marquee client emphasis, supporting copy that educates prospects.

---

## Voice spec

- **Confident premium, light wit.** Declarative sentences. Concrete nouns over adjectives.
- **Lead with proof:** client names (United, DNC, Emirates, Morningstar, Colgate, Sundance, Zurich Classic, ProMat) and scale markers (2,200 leaders, two-day, 20 breakouts) — not claims.
- **No blog slang on this page** ("don't sweat it", hashtags) — playfulness only at the CTA.
- **Visual-first rule:** copy supports the imagery, never competes. When in doubt, cut.

**Themes to thread (from the blog update):**
① national & international clients · ② elevated projects · ③ multi-disciplinary excellence · ④ technical execution · ⑤ consistent delivery

---

## 1 · Hero

**Location:** Figma `168:8` (H1) / `168:9` (body) · HTML `.hero h1` / `.hero p`
**Current:** "See LSAV Powerhouse in action!" + lorem

**Proposed H1** *(31 chars, target ≤45)*
> The proof is in the production.

**Proposed body** *(261 chars, target ≤280)*
> From United's leadership conferences to the Democratic National Convention, LSAV POWERHOUSE produces the moments major brands are judged by — keynotes, activations, broadcasts, and trade shows, delivered by one multi-disciplinary team, anywhere the audience is.

**Trim body** *(125 chars)*
> Keynotes, conventions, activations, broadcasts — produced end-to-end by one team, for clients who can't afford a second take.

**Themes:** ① ② ③ · **Note to Sophie:** existing H1 ("See LSAV Powerhouse in action!") works as a fallback if the new one feels too clever; the body is the load-bearing line.

---

## 2 · Editorial section 1 — Expertise, event types, client base

**Location:** Figma `194:196` (label `194:197`, body `194:199` + `195:243`) · HTML first `.intro`
**Current:** lorem label + 1 real blog paragraph + lorem

**Proposed H2** *(23 chars, target ≤40)*
> Built for the Big Stage

**Proposed P1** *(187 chars)*
> Corporate summits, political conventions, festival activations, global partnership launches — our work spans every format a brand can take, in a ballroom, an arena, or an aircraft hangar.

**Proposed P2** *(171 chars, total 358 ≤450)*
> The names on the door: United, Emirates, Morningstar, Colgate, Sundance, the DNC. National and international clients who return because the work holds up under the lights.

**Themes:** ① ② · **Note to Sophie:** P2 is the client-caliber proof line the meeting notes asked for — keep the name run even if everything around it changes.

---

## 3 · Case-study rows — first run subs

**Location:** row Copy frames · target ≤70 chars each

| Row | Current | Proposed |
|---|---|---|
| United Media Day (`169:313`) | *lorem* | "A brand world built for United's biggest media moment" *(53)* |
| United at Red Rocks (`169:322`) | "Bringing Brand and Music Together in an Iconic Setting" | **Keep** *(55)* |

**Themes:** ② ④ · **Note to Sophie:** United Media Day still has no live case-study page — sub is directional pending that content. *(Flagged previously to the team.)*

---

## 4 · Editorial section 2 — Why work with LSAV

**Location:** Figma `195:247` · HTML second `.intro`
**Current:** duplicate lorem of section 1

**Proposed H2** *(25 chars)*
> Why Teams Build With Us

**Proposed — three benefit blurbs** *(structured for the varied-grid layout direction; ~120 chars each)*

> **Top-Tier Talent** *(111 chars)*
> Designers, engineers, fabricators, and producers recruited from the top of their fields — on one roster, yours.

> **Seamless Execution** *(108 chars)*
> One team owns your event from first sketch to final strike. No handoffs, no seams, no surprises on show day.

> **Detail-Obsessed** *(98 chars)*
> The badge table gets the same scrutiny as the mainstage. Details are where premium events are won.

**Themes:** ③ ④ ⑤ · **Note to Sophie:** written as heading + one-liner units so they survive whatever grid treatment design lands on; can run as a single paragraph if the layout stays editorial.

---

## 5 · Marquee / banner rows — high-profile clients

**Location:** DNC `195:263`, Emirates `193:133` · target ≤70 chars

| Row | Current | Proposed |
|---|---|---|
| 2024 DNC | "United Airlines at the 2024 DNC" | "United Airlines on politics' biggest, most unforgiving stage" *(60)* |
| United & Emirates | "A High-Profile Partnership Announcement Engineered Under Pressure" | "A global partnership announcement, engineered under pressure" *(60)* |

**Themes:** ① ④ · **Note to Sophie:** current subs are serviceable — proposed versions push scale and pressure harder per the marquee strategy. Either set works.

---

## 6 · Editorial section 3 — Process & consistency

**Location:** Figma `195:254` · HTML third `.intro`
**Current:** duplicate lorem

**Proposed H2** *(20 chars)*
> From Napkin to Stage

**Proposed P1** *(197 chars)*
> Every project runs the same proven arc: strategy, design, engineering, fabrication, show. Because the disciplines live under one roof, the creative never gets lost between vendors — there are none.

**Proposed P2** *(149 chars, total 346 ≤400)*
> It's how a two-day, 2,200-leader conference with 20 themed breakouts lands as precisely as a single keynote. The scale changes. The standard doesn't.

**Themes:** ③ ⑤ · **Note to Sophie:** H2 deliberately reuses the ULC case-study tagline ("From Napkin to Stage") — it's becoming a brand phrase; the scale stats are real, from the ULC write-up.

---

## 7 · Remaining row subs — light-touch review

All real and serviceable. **Keep:** Morningstar, Colgate, Sundance, United Backstage, ProMat, ULC ("From Napkin to Stage: The LSAV Process" — now echoed by section 3, which is intentional).

One optional tighten:

| Row | Current | Optional |
|---|---|---|
| Zurich Golf Classic (`193:116`) | "Zurich Golf Classic Experience in New Orleans" *(repeats the title)* | "Tournament-grade brand hospitality on the PGA TOUR" *(50)* |

---

## 8 · CTA band

**Location:** Figma `193:172` (headline) / `193:173` (body) · HTML `.cta-band`
**Current:** "Lorem call to action ipsum" + lorem

**Proposed headline** *(23 chars, target ≤35)*
> Be our next case study.

**Proposed body** *(129 chars, target ≤160)*
> Tell us what you're imagining — a summit, a launch, a stage no one's built before. We'll take it from napkin to standing ovation.

**Button:** Contact Us *(existing component)*

**Themes:** ② ⑤ · **Note to Sophie:** this is the one slot where the "Push Our Buttons!" personality is allowed to show. Footer CTA below it stays as-is.

---

## 9 · Per-case-study CTAs (link labels, max 5 words)

Replaces the uniform "Full case study" if the team prefers skill-forward variety. Verb-led, each named to the capability that project proves. Universal fallback: **"See how we did it."**

| Case study | Primary | Alt |
|---|---|---|
| United Media Day | See the world we built | Step inside the build |
| United at Red Rocks | See the stage we set | Watch brand meet music |
| 2024 DNC | Go behind the broadcast | See the national stage |
| United Leadership Conferences | Follow napkin to stage | See the full process |
| Morningstar | See seamless in action | See the seamless execution |
| United & Emirates | See precision under pressure | How we beat the clock |
| Colgate | See the impact up close | Explore the full experience |
| Sundance Film Festival | Step into the story | See the story unfold |
| United Backstage | **Get the all-access pass** *(decided)* | Step backstage with us |
| Zurich Golf Classic | See how we played through | See it tournament-ready |
| ProMat | Tour the show floor | See the build breakdown |

**Note to Sophie:** "Follow napkin to stage" and "See precision under pressure" deliberately echo phrases established elsewhere on the page — keep those pairs in sync if either changes. Variety names ten different capabilities; if scanning consistency wins, fall back to one universal label.

---

## Theme coverage map

| Theme | Slots carrying it |
|---|---|
| ① National & international clients | Hero · Section 1 · Marquee rows |
| ② Elevated projects | Hero · Section 1 · Row subs · CTA |
| ③ Multi-disciplinary excellence | Hero · Section 2 · Section 3 |
| ④ Technical execution | Row subs · Section 2 · Marquee rows |
| ⑤ Consistent delivery | Section 2 · Section 3 · CTA |

All five themes ≥2 slots ✓ · Marquee clients each named ≤2× (United appears in row titles by necessity; editorial mentions capped at two) ✓

---

*Next step after sign-off: apply to the Figma comp (`168:2`) and mirror into the HTML build — node refs above make that a mechanical pass.*
