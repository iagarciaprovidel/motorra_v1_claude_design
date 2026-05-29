# Motorra · Web UI Kit

Click-through prototype del marketplace especializado en compra y venta de vehículos motorizados. Single-page React (inline Babel) wired to one URL — navegá via los enlaces del header para hit cada screen.

> **MVP Chile · solo publicar/vender.** Las pantallas de comprar, ficha de vehículo, arriendo y leasing fueron desactivadas en el lanzamiento. Quedan en el repo como referencia para post-Q3-2026 — el `app.jsx` las intercepta y muestra el `ComingSoonOverlay` con captura de email.

## Screens activas en MVP

| Route | Screen | Estado |
|---|---|---|
| `#/` | **Home** | ✅ Activa — hero + categorías + roadmap + FAQ + Sell CTA |
| `#/vender` | **Publicar tu vehículo** | ✅ Activa — flow de 3 pasos |

## Screens pendientes (post-Q3 2026)

| Route | Screen | Trigger en MVP |
|---|---|---|
| `#/buscar` | Búsqueda / Listings | Coming-soon overlay |
| `#/auto/:id` | Ficha del vehículo | Coming-soon overlay |
| Inspección 240 puntos | Módulo de certificación | Coming-soon · Q3 2026 |
| Historial VIN | Verificación de papeles | Coming-soon · Q4 2026 |
| Financiamiento | Crédito automotriz | Coming-soon · 2027 |

## Components

| File | Component | Notes |
|---|---|---|
| `components.jsx` | `Header`, `Footer`, `Logo`, `Button`, `Input`, `Select`, `Chip`, `Badge`, `Icon`, `PriceTag`, `Container`, `Section` | Atomic building blocks |
| `welcome.jsx` | `WelcomeModal`, `ComingSoonOverlay` | Onboarding + lead capture para features bloqueadas |
| `listing.jsx` | `ListingCard` (default/magazine/compact), `ListingGrid`, `FilterRail` | Marketplace browsing — usado por las screens "Pronto" |
| `screens/Home.jsx` | Home con tagline tweakable, categorías de vehículo, roadmap | |
| `screens/Sell.jsx` | Flow de 3 pasos | |
| `data.js` | Mock inventory + `vehiclePhoto()` generator + currency helpers | |
| `app.jsx` | Hash router + tweaks system + welcome/coming-soon orchestration | |
| `tweaks-panel.jsx` | Tweaks UI helpers (host protocol + form controls) | |

## Tweaks disponibles (toolbar toggle)

- **Tagline** — 7 alternativas para el H1 del hero
- **Theme** — Sunset (default) / Night (premium monochrome)
- **Density** — Compact / Comfortable / Spacious
- **Listing variant** — Default / Magazine / Compact
- **Welcome modal** — toggle on/off

## How it works

`index.html` carga React 18, Babel standalone, Lucide icons, y los archivos JSX en orden de dependencia. La app es un mini router hash-based — el `app.jsx` intercepta rutas no-MVP y muestra el coming-soon overlay con captura de email para construir lista de espera desde día uno.

Components compartidos via `window.*` globals (ver CLAUDE.md note en la raíz del design system).
