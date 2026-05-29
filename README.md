# Motorra — Design System

> **Motorra** es un **marketplace especializado en compra y venta de vehículos motorizados**: autos, motos, camionetas, SUV, vehículos eléctricos y comerciales. Lanzamiento en **Chile** (CLP, ES-CL); expansión planeada a Argentina, México, Colombia, Perú, España y Brasil con soporte multi-idioma (ES / PT / EN).

Este repositorio es el sistema de diseño de la marca: tokens visuales, lineamientos de contenido, componentes y kits de UI listos para que cualquier diseñador o agente pueda producir interfaces y materiales **on-brand** sin reinventar la rueda.

---

## Índice

| Archivo / Carpeta | Para qué sirve |
|---|---|
| **README.md** | Este documento — fundamentos de marca, contenido, visual, iconografía |
| **SKILL.md** | Manifiesto para usar este sistema como Agent Skill |
| **colors_and_type.css** | Single source of truth: tokens CSS (color, tipo, espaciado, sombras) |
| **assets/** | Logos (wordmark, monograma, variantes light/dark), ilustraciones de marca, fotos de muestra |
| **preview/** | Tarjetas individuales del Design System (renderizadas en la pestaña Design System) |
| **ui_kits/web/** | Kit web principal: marketing site, búsqueda, ficha de vehículo, "vende tu auto", arriendo |
| **fonts/** | Familias tipográficas (actualmente cargadas desde Google Fonts — pendiente de auto-hospedaje) |

---

## 1. Contexto del producto

Motorra es un **marketplace especializado en compra y venta de vehículos motorizados**. No hacemos arriendo, no hacemos leasing, no hacemos suscripción — esos son productos distintos que ofrecen empresas distintas (Hertz, Avis, Mobility en Chile). Nuestra especialización es:

- **Comprar y vender** vehículos entre particulares y dealers.
- **Inspección y certificación** propia (240 puntos) cuando hay transacción.
- **Historial VIN, papeles, deuda, multas, siniestros** verificados antes del cierre.
- **Financiamiento automotriz** integrado a futuro (con bancos socios).

Categorías cubiertas desde día uno:
- 🚗 **Autos** (sedanes, hatchbacks, convertibles)
- 🛻 **Camionetas / Pickups** (Hilux, Ranger, Amarok, etc.)
- 🚙 **SUVs y crossovers**
- 🏍️ **Motos** (street, sport, scooter, off-road)
- ⚡ **Vehículos eléctricos e híbridos**
- 🚚 **Comerciales livianos** (vans, camiones de reparto)

Los referentes del espacio son **Carvana, Kavak, Carvago, Chileautos, MercadoLibre Vehículos** — todos con foco en la compra/venta. Motorra se diferencia con:

1. **0% comisión** durante la fase fundadores (vs. clasificados que cobran destacados).
2. **Especialización vertical** — sólo vehículos motorizados, sin distraerse en otras categorías.
3. **Internacional desde el diseño** — multi-mercado, multi-moneda, multi-idioma listo para escalar.

### Audiencias
- **Vendedor particular** (audiencia primaria del MVP): quiere vender rápido, al mejor precio, sin la fricción de Mercado Libre o Facebook.
- **Vendedor profesional / dealer**: gestiona inventario propio en la plataforma.
- **Comprador particular** (audiencia primaria post-Q3 2026): busca transparencia (precio justo, historial verificado, condición real).

### Etapa fundadores · MVP Chile (lanzamiento 2026)

**Fase actual del producto:**
- ✅ **Publicar un vehículo** — el único flow live
- ✅ **Vender** — incluye tasación instantánea, oferta cash o publicación al precio que el dueño defina
- 🟡 **Solo Chile** — CLP, ES-CL voseo opcional
- ⏳ **Próximamente** — Comprar (Q3 2026), Arriendo días (Q4 2026), Leasing mensual (2027), Financiamiento (2027), expansión LatAm

**Modelo de monetización:**
Durante el lanzamiento, **publicar y vender es 100% gratis** — sin comisiones, sin destacados pagos, sin cargos ocultos. La estrategia es:

1. **Fase 1 (ahora)** — crecer en publicidad, data y clientes activos en Chile. Cero monetización.
2. **Fase 2 (post-masa crítica)** — abrir compra + paquetes de destaque + comisión opcional en certificados.
3. **Fase 3 (escalar)** — financiamiento, leasing, arriendo, expansión a Argentina/México/Colombia/Perú/España/Brasil.

**Mensajes de marca durante Fase 1:**
- "Lanzamiento · solo Chile · 100% gratis" (hero pill, animado)
- "0% comisión · etapa fundadores" (ficha y CTA secundario)
- "Sin comisiones hasta el cierre de 2026" (badge flotante)
- "Próximamente" + email capture en todo lo que aún no exista

**Componentes que reflejan esta etapa en el UI kit:**
- `WelcomeModal` — explica la propuesta en primera visita
- `ComingSoonOverlay` — captura email para features bloqueadas
- Header pill "BETA · CL" junto al logo
- Tabs de modo en Home con badges "Pronto"

Cuando cambie el modelo, este sistema permite actualizar la copy de manera centralizada (taglines en `MOTORRA_TAGLINES`, mensajes de fase en componentes específicos).

### Posicionamiento
> *"Sin vueltas. Sin sorpresas."*
>
> El marketplace transparente para vender tu vehículo en Chile — sin comisiones durante el lanzamiento. Comprar, arrendar y financiar llegan después.

---

## 2. Fuentes de referencia

No se proporcionó codebase ni archivo de Figma. La identidad fue construida desde cero, tomando como referencias del espacio:

- **chileautos.cl/vehiculos** — referencia inicial del usuario (no accesible vía fetch al momento de construir; la dirección queda registrada por si el lector tiene acceso).
- **Kavak** (kavak.com) — pionero LatAm en compra/venta certificada.
- **Carvago** (carvago.com) — modelo europeo de compra online + garantía.
- **Carvana** (carvana.com) — UX referente en US.
- **MercadoLibre Vehículos** — clasificados líder en LatAm.
- **Hertz / Turo** — referencias para arriendo corto plazo.

Cualquier ejecutor que tenga acceso a la Figma oficial, repositorio o guía de marca de Motorra debe **sustituir** los tokens y assets de este repo por los oficiales. Este sistema queda como base de trabajo.

---

## 3. FUNDAMENTOS DE CONTENIDO

### Voz y tono

Motorra suena **claro, confiado y sin venderte humo**. Como un buen vendedor: sabe del tema, va al grano, no usa jerga inflada. **Optimista** porque comprar/vender un auto debería ser fácil; **firme** porque hay plata real en juego.

| Sí | No |
|---|---|
| "Vende tu auto en 24 hs. Pago al instante." | "Maximiza el valor de tu activo automotor con nuestra plataforma." |
| "Inspección de 240 puntos. Lo revisamos por ti." | "Garantizamos la máxima calidad mediante un riguroso proceso." |
| "Pagas hoy, lo manejas mañana." | "Disfruta de la experiencia de movilidad que mereces." |

### Reglas de copy

- **Tuteo / voseo según mercado.** ES neutral: tuteo ("vende tu auto"). Argentina: voseo ("vende tu auto"). Brasil: "venda seu carro". El producto detecta y adapta.
- **Hablamos de "tú/tú" al usuario** — nunca "el usuario", "los clientes", "ellos".
- **Decimos "nosotros" como marca** — "te inspeccionamos el auto", "te financiamos".
- **Frases cortas.** Punto. Línea nueva. La cadencia importa.
- **Números concretos antes que adjetivos.** "240 puntos de inspección" > "inspección exhaustiva". "Pago en 24 hs" > "pago rápido".
- **Verbos en infinitivo o imperativo** para CTAs: "Vender", "Comprar", "Arrendar", "Ver detalles", "Cotizar gratis".
- **Sin signo de admiración** salvo emergencia genuina. La energía viene del verbo, no del símbolo.
- **Mayúsculas:** Sentence case en headlines y botones ("Vender mi auto"), nunca TITLE CASE ni MAYÚSCULAS GRITADAS. Excepción: eyebrows pequeños como `INVENTARIO CERTIFICADO`.
- **Monedas:** siempre con código ISO + símbolo según mercado. CLP $14.990.000 · ARS $18.500.000 · MXN $385,000 · EUR €22.500 · BRL R$ 115.000 · USD $18,500.
- **Kilometraje:** siempre con unidad (`km`) y separador local. `45.200 km` en ES-CL/ES-AR, `45,200 km` en EN.
- **Año del modelo** antes de marca/modelo: `2021 Toyota Hilux 2.4 4x4 SR`.

### Ejemplos de copy on-brand

**Hero principal:**
> Comprar, vender, arrendar.
> Sin vueltas.
>
> 48.000 vehículos verificados en 7 países. Inspección, garantía y pago seguro en cada operación.

**Sección "vende tu auto":**
> Vende tu auto en 48 horas.
> Te lo tasamos en 3 minutos, lo inspeccionamos sin costo, y te pagamos al instante. Sin visitas, sin regateo.

**Microcopy formulario:**
> Patente o VIN — Te ayudamos a precargar los datos.

**Vacío:**
> Aún no hay autos guardados.
> Cuando marques un favorito, aparecerá acá.

**Estado de error:**
> No pudimos cargar este vehículo. Revisa la conexión y reinténtalo.

### Emoji & símbolos
**Cero emoji** en UI o copy de producto. La marca no necesita el confeti. Sólo se permiten en notificaciones push muy específicas (ej. ✓ minimalista en un check). Para iconografía: SVG de la librería Lucide, nunca emoji ni unicode decorativo.

---

## 4. FUNDAMENTOS VISUALES

### Paleta

**Filosofía:** evitar el azul-corporativo-genérico que satura el rubro. Motorra usa **negro tinta** (no gris) sobre **crema cálido** (no blanco frío) como base, con **coral atardecer** como acento único e inconfundible.

| Token | Hex | Uso |
|---|---|---|
| `--ink-900` | `#0E1015` | Texto primario, headlines, footer/header dark |
| `--paper` | `#FAF7F0` | Fondo de página (crema cálido, no blanco frío) |
| `--coral-500` | `#FF5B2E` | **Acento de marca** — CTA primaria, mark del logo, hover en links críticos |
| `--ocean-500` | `#0B6CF2` | Links de texto, badges informativos, segunda acción |
| `--forest-500` | `#14935B` | Verificado, certificado, éxito |
| `--amber-500` | `#F5A524` | "Oferta caliente", warnings |
| `--crimson-500` | `#DC2A2F` | Errores, eliminar, danger |

Ver `colors_and_type.css` para la escala completa (incluye 100/200/300/.../700 de cada familia + roles semánticos como `--bg-page`, `--fg-strong`, etc).

### Tipografía

| Familia | Rol | Notas |
|---|---|---|
| **Bricolage Grotesque** | Display (h1-h4, precios, números grandes) | Variable opsz; en headlines usar `opsz 72`. Tiene personalidad sin ser disruptiva. |
| **Manrope** | Body, UI, formularios | Geométrica neutra, excelente legibilidad en ES/PT con tildes y ñ. |
| **JetBrains Mono** | Tabular: VINs, patentes, códigos | Sólo numérico/técnico — nunca prosa. |

**Sustitución flagueada:** No se entregaron archivos de fuentes oficiales. Estamos usando **Google Fonts** vía `@import`. Si Motorra tiene una familia custom, **reemplazar `@import` en `colors_and_type.css` y bajar los TTF a `/fonts/`**.

### Backgrounds y atmósfera

- **Default: crema cálido sólido (`--paper`).** Plano, sin ruido. La marca se distingue por restricción.
- **Sección dark: tinta sólida (`--ink-900`).** Usada en hero alternativo, footer, panels de financiamiento.
- **Fotografía protagonista:** los vehículos son el contenido. Fotos a sangrado en el detail, grandes en cards de listing.
- **Sin gradientes decorativos.** Permitido sólo en *protection gradients* sobre fotos (linear `rgba(0,0,0,0)` → `rgba(0,0,0,0.6)`) para garantizar contraste de overlays.
- **Sin texturas / patrones repetitivos.** Cero "noise". Cero líneas diagonales decorativas.
- **Sin glassmorphism / blur backgrounds.** El blur sólo aparece como `backdrop-filter` en el sticky-header al hacer scroll, y en modales.

### Animación

- **Rápida y útil.** Nunca decorativa. `--dur-fast: 140ms` para hovers, `--dur-base: 220ms` para entradas, `--dur-slow: 380ms` para transiciones de página/modal.
- **Easing:** `--ease-out` (`cubic-bezier(0.22, 1, 0.36, 1)`) como default. `--ease-spring` sólo en confirmaciones puntuales (icono check al guardar).
- **Sin bounces gratuitos.** Sin rotaciones decorativas. Sin loaders animados con keyframes complejos.
- **Skeleton loaders** monocromos, shimmer suave en `--ink-100` → `--ink-200`.
- **Microinteracciones:** scale 0.97 en press de CTA, fade+translate-y 4px en entrada de menús.

### Estados

| Estado | Cómo se ve |
|---|---|
| **Hover (botón primario)** | Coral 500 → 600 (un step más oscuro); sombra `--sh-1` → `--sh-2` |
| **Hover (botón secundario / link)** | Underline aparece, color un step más oscuro |
| **Hover (card de listing)** | Sombra de `--sh-1` → `--sh-3`, imagen escala 1.02 dentro del clip |
| **Press / active** | Scale 0.97, sombra colapsa a `--sh-0` |
| **Focus (keyboard)** | Anillo coral `--sh-focus` (3px, 25% opacity); en inputs `--sh-focus-ocean` |
| **Disabled** | Opacity 0.4, cursor not-allowed, sin cambio de color |
| **Loading** | Spinner monocromo coral 16px o skeleton shimmer |

### Bordes y radios

- **Default radio:** `--r-md` (12px) en cards y botones standard.
- **Pills:** chips de filtro, badges, tags — `--r-pill` (9999px).
- **Hero cards / focused content:** `--r-xl` (24px).
- **Inputs:** `--r-sm` (8px).
- **Borders:** `1px solid var(--border)` (#D9DEE7). En dark, `var(--border-on-dark)` (rgba blanco al 12%). Bordes mayores a 1px son excepción.

### Sombras / elevación

Sombras siempre **neutras** (ink + opacidad), nunca azules. Quietas. Escala:
- `--sh-1`: hairline reposo (cards)
- `--sh-2`: hover de cards
- `--sh-3`: dropdowns
- `--sh-4`: modales
- `--sh-pop`: bottom sheets, command palette

### Layout

- Container max: **1240px** con margen lateral mínimo 24px.
- Container narrow (lectura): **880px**.
- Grid de listings: 12 columnas → 4 cols por listing card en desktop, 2 en tablet, 1 en mobile.
- Header sticky: 72px de alto, fondo `--paper` con `backdrop-filter: blur(8px)` al hacer scroll.
- Footer: oscuro (`--ink-900`), 96px de padding vertical.

### Imagery — tono fotográfico

- **Cálido y aspiracional pero realista.** No es lifestyle stock genérico.
- **Foco en el vehículo**, no en personas posando.
- **Iluminación natural** preferida (golden hour, exterior).
- **Color de la foto se respeta**, no se aplican filtros de marca.
- Para listings sin foto real: placeholder gris neutro `--ink-200` con icono de Lucide centrado.

---

## 5. ICONOGRAFÍA

**Sistema:** [Lucide Icons](https://lucide.dev) — librería de iconos open-source, stroke 2px, 24×24 default. Cargada vía CDN: `<script src="https://unpkg.com/lucide@latest"></script>`.

**Por qué Lucide:**
- Cobertura completa (3000+ iconos incluyendo `car`, `truck`, `bike`, `key`, `fuel`, `calendar`, `map-pin`, `shield-check`, `tag`, `heart`, etc.)
- Estilo line / outline coherente con la sobriedad de la marca
- Free, sin attribution requirement
- Tamaños y stroke configurables

**Reglas de uso:**
- **Tamaño default:** 20px en UI, 16px en metadatos densos, 24px en navegación principal.
- **Stroke:** 2px (default). Nunca filled salvo en estados activos/checkboxes.
- **Color:** hereda de `currentColor` — usar `--fg`, `--fg-muted`, o `--brand` según contexto.
- **Sin badging decorativo.** Un icono = una idea. No usar 3 iconos juntos para reforzar.

**No usamos:**
- Emoji en UI (ver §3).
- Unicode caracteres como flechas o checks decorativos (`→`, `✓`).
- Iconos colored / 3D / multicolor.
- Iconos custom dibujados a mano salvo el logo / mark.

**Iconos clave del producto** (referencia):
- `car`, `truck`, `bike`, `bus` — categorías de vehículo
- `gauge` — kilometraje
- `fuel`, `zap` — tipo de combustible
- `cog`, `settings-2` — transmisión
- `calendar` — año / fecha
- `map-pin`, `map` — ubicación
- `shield-check`, `badge-check` — certificación / verificado
- `heart` — favoritos
- `key`, `key-round` — arriendo / leasing
- `tag`, `percent` — precio / oferta
- `camera`, `images` — galería de fotos
- `phone`, `message-circle` — contacto

---

## 6. UI Kits disponibles

| Kit | Carpeta | Cubre |
|---|---|---|
| **Web Marketplace** | `ui_kits/web/` | Marketing landing, búsqueda/listings, ficha de vehículo, "vende tu auto" (tasación), arriendo |

Cada kit tiene su `README.md` con el inventario de componentes y un `index.html` interactivo que demuestra el flujo principal.

---

## 7. Pendientes / Caveats

- 🟡 **Fuentes:** se usan Google Fonts (Bricolage Grotesque + Manrope + JetBrains Mono). Si la marca tiene fuentes propias, hay que sustituir.
- 🟡 **Logo:** wordmark + monograma fueron diseñados como propuesta inicial (M con notch coral). Si existe un logo oficial debe sustituir todo en `assets/`.
- 🟡 **Fotografía:** los listings de ejemplo usan fotos placeholder con vehículos genéricos. En producción, deberían ser fotos reales de inventario.
- 🟡 **Mobile app:** este sistema cubre la web. Una versión iOS/Android requiere un kit aparte (mismos tokens, componentes nativos).
- 🟡 **Localización completa:** los kits muestran ES-CL como default. La internacionalización a PT-BR, ES-AR, ES-MX, EN está estructurada pero no implementada en este nivel de fidelidad.
