/* eslint-disable */
/* Motorra · Home screen — MVP Chile · sólo publicar/vender */

const HomeScreen = ({ navigate, tweaks, onComingSoon, previewOn }) => {
  const t = tweaks || window.__tweaks || {};
  const tag = window.MOTORRA_TAGLINES[t.tagline] || window.MOTORRA_TAGLINES["sin-vueltas"];
  const triggerSoon = (feat) => onComingSoon && onComingSoon(feat);

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-dark)", color: "var(--paper)", padding: "72px 0 88px", position: "relative", overflow: "hidden" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
                color: "var(--coral-500)", marginBottom: 22,
                padding: "6px 12px", background: "rgba(255,91,46,0.12)", borderRadius: 9999,
                border: "1px solid rgba(255,91,46,0.3)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--coral-500)", animation: "motorra-pulse 2s ease-in-out infinite" }}></span>
                Lanzamiento · solo Chile · 100% gratis
              </div>
              <h1 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 84, lineHeight: 0.96, letterSpacing: "-0.03em",
                fontVariationSettings: '"opsz" 84', margin: 0,
              }}>
                {tag.line1}<br/>
                <span style={{ color: "var(--coral-500)" }}>{tag.line2}</span>
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.5, color: "rgba(250,247,240,0.72)", marginTop: 24, maxWidth: 460 }}>
                El marketplace especializado en <strong style={{ color: "var(--paper)", fontWeight: 700 }}>compra y venta de vehículos motorizados</strong> en Chile. Por ahora, publicar y vender es 100% gratis — sin comisiones, sin destacados pagos, sin letra chica.
              </p>

              {/* Vehicle types we cover */}
              <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                {[
                  { label: "Autos", icon: "car" },
                  { label: "Camionetas", icon: "truck" },
                  { label: "SUV", icon: "caravan" },
                  { label: "Motos", icon: "bike" },
                  { label: "Eléctricos", icon: "zap" },
                  { label: "Comerciales", icon: "bus" },
                ].map(v => (
                  <span key={v.label} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "5px 11px", borderRadius: 9999,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: 12, fontWeight: 500, color: "rgba(250,247,240,0.85)",
                  }}>
                    <Icon name={v.icon} size={13} /> {v.label}
                  </span>
                ))}
              </div>

              {/* Mode tabs + Sell form */}
              <div style={{ marginTop: 36, background: "var(--bg-canvas)", borderRadius: 16, padding: 6, color: "var(--fg-strong)", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
                <div style={{ display: "flex", gap: 4 }}>
                  <button style={{
                    flex: 1, padding: "12px 16px", borderRadius: 10, border: 0, cursor: "pointer",
                    fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
                    background: "var(--fg-strong)", color: "var(--on-fg-strong)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}>
                    <Icon name="tag" size={16} /> Publicar / Vender
                  </button>
                  <button onClick={() => navigate("#/buscar")} style={modeLive}>
                    <Icon name="search" size={16} /> Comprar
                  </button>
                  <button onClick={() => navigate("#/categorias")} style={modeLive}>
                    <Icon name="layout-grid" size={16} /> Categorías
                  </button>
                </div>
                <div style={{ display: "flex", gap: 8, padding: 10, alignItems: "stretch" }}>
                  <Input placeholder="Patente o VIN" icon="hash" />
                  <Select options={["Año del modelo", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"]} />
                  <Select options={["Kilometraje", "< 20.000 km", "20.000–50.000", "50.000–100.000", "+100.000"]} />
                  <Button variant="primary" size="md" icon="zap" iconPos="left" onClick={() => navigate("#/vender")}>Tasar gratis</Button>
                </div>
              </div>

              <div style={{ display: "flex", gap: 32, marginTop: 36 }}>
                {[
                  { n: "0%", l: "Comisión por publicar" },
                  { n: "3 min", l: "Para tasar tu auto" },
                  { n: "48 hs", l: "Para venderlo" },
                  { n: "🇨🇱", l: "Solo Chile · por ahora", custom: true },
                ].map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: s.custom ? 28 : 24, letterSpacing: "-0.02em" }}>{s.n}</div>
                    <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(250,247,240,0.5)", marginTop: 2, fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", aspectRatio: "1 / 1.05", borderRadius: 24, overflow: "hidden" }}>
              <img src={window.vehiclePhoto({ year: 2023, make: "Tesla", model: "Model 3", trim: "Long Range · Listo para publicar", bodyType: "Sedán", id: "MOT-HERO" }, 1200, 1260)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, background: "rgba(14,16,21,0.78)", backdropFilter: "blur(12px)", borderRadius: 16, padding: 18, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--coral-500)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="badge-percent" size={22} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--coral-500)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Etapa fundadores</div>
                  <div style={{ fontSize: 13, color: "rgba(250,247,240,0.8)", marginTop: 2 }}>Sin comisiones hasta el cierre de 2026</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works — 3 steps */}
      <section style={{ padding: "72px 0" }}>
        <Container>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--coral-600)", marginBottom: 10 }}>Cómo funciona</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 38, letterSpacing: "-0.02em", margin: 0, color: "var(--fg-strong)" }}>
              3 pasos. Sin pagar nada.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { n: "01", title: "Carga tu auto", body: "Patente o VIN y precargamos los datos. Subes 4 fotos y describes el estado. 3 minutos." },
              { n: "02", title: "Lo publicamos gratis", body: "Aparece en Motorra al instante. Sin destacar pagos, sin comisión, sin letra chica." },
              { n: "03", title: "Vendes y cobras", body: "Te conectamos con compradores. Cierras el trato y te pagamos. O lo haces directo, tú eliges." },
            ].map(s => (
              <div key={s.n} style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--coral-600)", letterSpacing: "0.04em" }}>{s.n}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", margin: "10px 0 8px", color: "var(--fg-strong)" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Roadmap · Próximamente */}
      <section style={{ background: "var(--paper-2)", padding: "72px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--fg-muted)", marginBottom: 8 }}>Roadmap</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, letterSpacing: "-0.02em", margin: 0, color: "var(--fg-strong)" }}>
                Lo que viene después.
              </h2>
              <p style={{ fontSize: 14, color: "var(--fg-muted)", marginTop: 8, maxWidth: 480 }}>
                Arrancamos con publicación y venta. Súmate a la lista de espera y te avisamos apenas activemos cada feature.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {[
              { label: "Inspección 240 puntos", icon: "shield-check", eta: "Q3 2026", desc: "Mecánicos Motorra revisan cada vehículo certificado antes de la venta." },
              { label: "Historial VIN + papeles", icon: "file-search", eta: "Q4 2026", desc: "Verificamos titularidad, deuda, multas y siniestros antes de cerrar." },
              { label: "Financiamiento automotriz", icon: "wallet", eta: "2027", desc: "Crédito con bancos socios, aprobación online sin papeleo." },
              { label: "Expansión LatAm", icon: "globe", eta: "2027", desc: "Argentina, México, Colombia, Perú, España y Brasil." },
            ].map(cat => (
              <button key={cat.label} onClick={() => triggerSoon(cat.label)} style={{
                background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 14,
                padding: "22px 20px", cursor: "pointer", textAlign: "left",
                display: "flex", flexDirection: "column", gap: 14,
                transition: "all 140ms", fontFamily: "var(--font-body)",
                minHeight: 220,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--fg-strong)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--bg-sunken)", color: "var(--fg-muted)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={cat.icon} size={20} />
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--coral-700)", background: "var(--coral-050)", padding: "4px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{cat.eta}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "var(--fg-strong)", letterSpacing: "-0.01em" }}>{cat.label}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 6, lineHeight: 1.5 }}>{cat.desc}</div>
                </div>
                <div style={{ fontSize: 12, color: "var(--coral-600)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  Avísame cuando esté <Icon name="arrow-right" size={13} />
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Sell CTA */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div style={{
            background: "var(--coral-500)", borderRadius: 24, padding: "56px 64px",
            display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "center",
            color: "var(--ink-900)", position: "relative", overflow: "hidden",
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(14,16,21,0.6)", marginBottom: 16 }}>Vende tu auto · sin comisión</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, letterSpacing: "-0.025em", lineHeight: 1, margin: 0, fontVariationSettings: '"opsz" 56', color: "var(--ink-900)" }}>
                Publicar es gratis. Tasamos en 3 min.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.5, marginTop: 20, maxWidth: 480, color: "rgba(14,16,21,0.78)" }}>
                Patente, año, fotos. Te damos una oferta cash al instante — o publícalo al precio que quieras, sin pagarnos nada. Tú eliges.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                <Button variant="secondary" size="lg" icon="arrow-right" iconPos="right" onClick={() => navigate("#/vender")}>Publicar gratis</Button>
                <Button variant="ghost" size="lg" style={{ background: "transparent", borderColor: "rgba(14,16,21,0.25)", color: "var(--ink-900)" }}>Ver cómo funciona</Button>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ background: "var(--bg-canvas)", borderRadius: 16, padding: 24, width: "100%", maxWidth: 360, boxShadow: "0 16px 40px rgba(14,16,21,0.14)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--fg-muted)", marginBottom: 12 }}>Tu oferta estimada</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, letterSpacing: "-0.02em", color: "var(--fg-strong)" }}>CLP $18.420.000</div>
                <div style={{ fontSize: 13, color: "var(--forest-600)", marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
                  <Icon name="trending-up" size={14}/> 4% sobre el promedio del mercado
                </div>
                <div style={{ height: 1, background: "var(--bg-sunken)", margin: "16px 0" }}/>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 12 }}>
                  <div><div style={{ color: "var(--fg-muted)" }}>Modelo</div><div style={{ fontWeight: 600, color: "var(--fg-strong)" }}>2021 Toyota Hilux</div></div>
                  <div><div style={{ color: "var(--fg-muted)" }}>Km</div><div style={{ fontWeight: 600, fontFamily: "var(--font-mono)", color: "var(--fg-strong)" }}>45.200</div></div>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 12, padding: "3px 8px", background: "var(--coral-050)", color: "var(--coral-700)", borderRadius: 4, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  <Icon name="badge-percent" size={11}/> 0% Comisión
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 0 88px" }}>
        <Container max={880}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", margin: 0, color: "var(--fg-strong)" }}>
              Preguntas frecuentes.
            </h2>
          </div>
          {[
            { q: "¿De verdad es gratis publicar?", a: "Sí. Durante todo el lanzamiento, publicar y vender tu vehículo no tiene costo. No tomamos comisión, no cobramos por destacar, no hay paquetes pagos. Cuando alcancemos masa crítica vamos a empezar a cobrar — pero lo vas a saber con anticipación y nunca te cobraremos retroactivo." },
            { q: "¿Qué tipo de vehículos puedo vender?", a: "Cualquier vehículo motorizado: autos, motos, camionetas (pickups), SUV, vehículos eléctricos e híbridos, vans, camiones livianos y comerciales. Si tiene patente chilena al día, lo puedes publicar." },
            { q: "¿En qué países opera Motorra?", a: "Solo Chile, por ahora. El producto está pensado para escalar a Argentina, México, Colombia, Perú, España y Brasil, pero queremos primero hacer Chile muy bien antes de salir a otros mercados." },
            { q: "¿Puedo comprar un vehículo en Motorra?", a: "Sí. Puedes explorar todo el inventario en la sección Comprar o navegar por categorías. El contacto con el vendedor es directo — hoy por WhatsApp o mensaje interno. Próximamente sumamos inspección certificada de 240 puntos (Q3 2026), historial VIN verificado (Q4 2026) y financiamiento integrado (2027)." },
            { q: "¿Inspeccionan los vehículos?", a: "La inspección de 240 puntos llega junto con el módulo de compra (Q3 2026). Por ahora, las ventas que se cierran a través de Motorra son particular-a-particular: tú pones el precio, los compradores te contactan." },
            { q: "¿Cómo se cobra el pago de la venta?", a: "Tú y el comprador acuerdan el método de pago — Motorra todavía no procesa pagos. Te damos las herramientas para hacer la transacción segura (verificación de identidad, plantilla de transferencia, checklist de cierre). En 2027 lanzamos pago integrado en plataforma." },
          ].map((item, i) => (
            <details key={i} style={{
              borderTop: "1px solid var(--border)",
              padding: "20px 4px", cursor: "pointer",
            }}>
              <summary style={{
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em",
                color: "var(--fg-strong)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                {item.q}
                <span style={{ fontSize: 24, color: "var(--fg-muted)", fontWeight: 300 }}>+</span>
              </summary>
              <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.6, marginTop: 12, marginBottom: 0 }}>{item.a}</p>
            </details>
          ))}
        </Container>
      </section>
    </main>
  );
};

const modePronto = {
  flex: 1, padding: "12px 14px", borderRadius: 10, border: 0, cursor: "pointer",
  fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
  background: "transparent", color: "var(--fg-muted)",
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
  transition: "all 140ms",
};
const modeLive = {
  flex: 1, padding: "12px 14px", borderRadius: 10, border: 0, cursor: "pointer",
  fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
  background: "transparent", color: "var(--fg)",
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
  transition: "all 140ms",
};
const prontoBadge = {
  fontSize: 9, fontWeight: 700, color: "var(--fg-subtle)",
  background: "var(--bg-sunken)", padding: "2px 5px", borderRadius: 3,
  textTransform: "uppercase", letterSpacing: "0.06em",
};

window.HomeScreen = HomeScreen;
