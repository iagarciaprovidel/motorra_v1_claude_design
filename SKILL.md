---
name: motorra-design
description: Use this skill to generate well-branded interfaces and assets for Motorra, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the Motorra marketplace — a specialized buy/sell marketplace for motor vehicles (autos, motos, camionetas, SUV, eléctricos, comerciales). Launching in Chile; designed to scale to LatAm + Iberia.
user-invocable: true
---

# Motorra design skill

Motorra is a **specialized marketplace for buying and selling motorized vehicles** — autos, motos, camionetas, SUV, EVs, commercials. **Not a rental, leasing, or subscription service.** Currently launching in Chile only; built to scale to Argentina, México, Colombia, Perú, España, Brasil.

## How to use this skill

1. **Read `README.md` first.** It contains the full brand guide: voice & tone, visual foundations, iconography, and an index of every other file in the system.
2. **Explore the rest of the folder.** Key files:
   - `colors_and_type.css` — single source of truth for color, typography, spacing, radius, shadow, motion tokens. Always link this at the root of any new HTML artifact.
   - `assets/` — wordmark + monogram (light & dark variants).
   - `preview/` — small individual HTML cards demoing each design-system element (colors, type, buttons, listing card, badges, etc.). Use as visual reference.
   - `ui_kits/web/` — full React-based click-through prototype. Read the components in `components.jsx`, `listing.jsx`, and `screens/*.jsx` to understand how the system composes.
3. **For visual artifacts** (slides, mocks, throwaway prototypes): copy the assets you need into your output and produce static HTML files. Reference `colors_and_type.css` via `<link>` or inline the tokens you need.
4. **For production code:** lift the tokens and component patterns and adapt to the target framework.
5. **If the user invokes this skill without other guidance:** ask what they want to build (a slide deck? a landing page? a new screen? a print ad?), ask a few questions about audience and goals, then act as an expert Motorra designer outputting HTML or production code as appropriate.

## Quick reference

**Brand promise:** *Comprar, vender, arrendar. Sin vueltas.*

**Visual DNA:**
- Background: warm cream `#FAF7F0` (NOT cold white) — or solid ink `#0E1015` for dark hero/footer.
- Accent: coral sunset `#FF5B2E` — primary CTA, brand mark notch, key accents.
- Type: **Bricolage Grotesque** (display) + **Manrope** (body) + **JetBrains Mono** (VINs/codes only).
- Radii: 12px default cards · 8px inputs · 9999px pills/chips · 24px hero cards.
- Shadows: always neutral ink-tinted, never blue-grey.
- Icons: **Lucide** via CDN, 2px stroke, 24px default.
- No emoji in UI. No gradient backgrounds. No glass blur except sticky header.

**Voice:** clear, confident, no fluff. Tuteo/voseo by market. Numbers > adjectives ("240 puntos" beats "exhaustivo"). Verbs in imperative for CTAs ("Vender", "Comprar", "Arrendar"). Sentence case in headlines.

**Currencies:** always with locale formatting. CLP $19.990.000 · ARS $18.500.000 · MXN $385,000 · EUR €22.500 · BRL R$ 115.000.

## What to avoid

- Inventing new colors outside the palette in `colors_and_type.css`. Use `oklch()` if you absolutely need to harmonize a new tint.
- Decorative SVG illustrations or hand-drawn graphics. Use real photography or color-block placeholders.
- "AI slop" tropes: bluish gradients, emoji cards, rounded cards with left-border accents.
- Replacing the typography. Bricolage + Manrope + JetBrains Mono are non-negotiable unless explicitly told.
