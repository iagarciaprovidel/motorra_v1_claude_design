/* eslint-disable */
/* Motorra · Vehicle Detail screen */

const DetailScreen = ({ navigate, vehicleId }) => {
  const v = window.MOTORRA_INVENTORY.find(x => x.id === vehicleId) || window.MOTORRA_INVENTORY[0];
  const [activePhoto, setActivePhoto] = React.useState(0);
  const [downPct, setDownPct] = React.useState(20);
  const [months, setMonths] = React.useState(48);

  const photos = v.photos || [v.photo];
  const monthly = Math.round((v.price * (1 - downPct / 100)) / months);
  const similar = window.MOTORRA_INVENTORY.filter(x => x.id !== v.id && x.bodyType === v.bodyType).slice(0, 4);

  return (
    <main style={{ paddingTop: 24 }}>
      <Container>
        <div style={{ fontSize: 12, color: "var(--fg-muted)", marginBottom: 16 }}>
          <a href="#/" style={{ color: "inherit", textDecoration: "none" }}>Inicio</a> &nbsp;›&nbsp;
          <a href="#/buscar" style={{ color: "inherit", textDecoration: "none" }}>Comprar</a> &nbsp;›&nbsp;
          <span style={{ color: "var(--fg-strong)" }}>{v.year} {v.make} {v.model}</span>
        </div>

        {/* Gallery + summary */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32 }}>
          <div>
            {/* Main photo */}
            <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: 16, overflow: "hidden", background: "var(--bg-sunken)" }}>
              <img src={photos[activePhoto]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
              <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 8 }}>
                {(v.badges || []).map(b => (
                  b === "certified" ? <Badge key={b} tone="certified" icon="badge-check">Certificado Motorra</Badge> :
                  b === "hot" ? <Badge key={b} tone="hot">Oferta caliente</Badge> :
                  b === "eco" ? <Badge key={b} tone="eco">100% eléctrico</Badge> :
                  null
                ))}
              </div>
              <div style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(14,16,21,0.78)", color: "white", padding: "6px 12px", borderRadius: 8, fontSize: 12, fontFamily: "var(--font-mono)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Icon name="camera" size={14}/> {activePhoto + 1} / {photos.length}
              </div>
            </div>
            {/* Thumbnails */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginTop: 8 }}>
              {photos.slice(0, 5).map((p, i) => (
                <div key={i} onClick={() => setActivePhoto(i)} style={{
                  aspectRatio: "16/10", borderRadius: 8, overflow: "hidden", cursor: "pointer",
                  border: activePhoto === i ? "2px solid var(--ink-900)" : "2px solid transparent",
                }}>
                  <img src={p} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                </div>
              ))}
            </div>

            {/* Spec sheet */}
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, letterSpacing: "-0.015em", margin: "0 0 16px" }}>Detalles</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
                {[
                  { label: "Kilometraje", value: window.formatKm(v.km), icon: "gauge" },
                  { label: "Año", value: v.year, icon: "calendar" },
                  { label: "Transmisión", value: v.transmission, icon: "cog" },
                  { label: "Combustible", value: v.fuel, icon: v.fuel === "Eléctrico" ? "zap" : "fuel" },
                  { label: "Color", value: v.color, icon: "palette" },
                  { label: "VIN", value: "1HG…3456", icon: "hash" },
                  { label: "Ubicación", value: v.location.split(",")[0], icon: "map-pin" },
                  { label: "Dueños", value: "Único dueño", icon: "user" },
                ].map(d => (
                  <div key={d.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--fg-muted)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      <Icon name={d.icon} size={13}/> {d.label}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-strong)" }}>{d.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div style={{ marginTop: 32 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, letterSpacing: "-0.015em", margin: "0 0 12px" }}>Descripción</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--fg)", margin: 0 }}>{v.description}</p>
            </div>

            {/* Inspection certificate */}
            {v.badges && v.badges.includes("certified") && (
              <div style={{ marginTop: 32, background: "var(--forest-050)", border: "1px solid var(--forest-100)", borderRadius: 16, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--forest-500)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="shield-check" size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, margin: 0, color: "var(--forest-700)" }}>Inspección certificada Motorra</h3>
                    <div style={{ fontSize: 13, color: "var(--forest-700)", opacity: 0.85, marginTop: 2 }}>240 puntos · Realizada el 12 may 2026 · Garantía 6 meses incluida</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginTop: 12 }}>
                  {["Motor", "Transmisión", "Suspensión", "Frenos", "Eléctrico", "Carrocería", "Interior", "Documentos"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--forest-700)" }}>
                      <Icon name="check-circle-2" size={16}/> {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky sidebar */}
          <div>
            <div style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--fg-muted)", marginBottom: 4 }}>{v.bodyType} · {v.fuel}</div>
                <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-0.015em", margin: "0 0 4px", color: "var(--fg-strong)", lineHeight: 1.15 }}>
                  {v.year} {v.make} {v.model}
                </h1>
                <div style={{ fontSize: 14, color: "var(--fg-muted)" }}>{v.trim}</div>

                <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--ink-100)" }}>
                  <PriceTag price={v.price} currency={v.currency} size="xl" />
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--forest-600)", marginTop: 6 }}>
                    <Icon name="trending-down" size={14}/> CLP $890.000 bajo el promedio del mercado
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, padding: "4px 10px", background: "var(--coral-050)", color: "var(--coral-700)", borderRadius: 9999, fontSize: 11, fontWeight: 700 }}>
                    <Icon name="badge-percent" size={11}/> 0% COMISIÓN · ETAPA FUNDADORES
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
                  <Button variant="primary" size="lg" icon="arrow-right" iconPos="right">Comprar ahora</Button>
                  <Button variant="secondary" size="lg" icon="message-circle">Contactar vendedor</Button>
                  <Button variant="ghost" size="md" icon="heart">Guardar</Button>
                </div>

                <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--ink-100)", display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--ink-200)", flexShrink: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg)", fontWeight: 700 }}>{v.seller.name[0]}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-strong)" }}>{v.seller.name}</div>
                    <div style={{ fontSize: 12, color: "var(--fg-muted)", display: "flex", alignItems: "center", gap: 6 }}>
                      <Icon name="star" size={12} style={{ color: "var(--amber-500)" }}/> {v.seller.rating} · {v.seller.type} · {v.seller.sales} {v.seller.sales === 1 ? "venta" : "ventas"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Financing */}
              <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <Icon name="wallet" size={18} color="var(--ocean-600)"/>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, margin: 0, color: "var(--fg-strong)" }}>Financiá este auto</h3>
                </div>
                <div style={{ fontSize: 12, color: "var(--fg-muted)", marginBottom: 16 }}>Aprobación online en 5 minutos</div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6 }}>
                      <span style={{ color: "var(--fg-muted)", fontWeight: 600 }}>Pie ({downPct}%)</span>
                      <span style={{ fontWeight: 700, color: "var(--fg-strong)", fontFamily: "var(--font-mono)" }}>{window.formatPrice(v.price * downPct / 100, v.currency)}</span>
                    </div>
                    <input type="range" min={10} max={50} value={downPct} onChange={e => setDownPct(+e.target.value)} style={{ width: "100%", accentColor: "var(--coral-500)" }}/>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6 }}>
                      <span style={{ color: "var(--fg-muted)", fontWeight: 600 }}>Plazo</span>
                      <span style={{ fontWeight: 700, color: "var(--fg-strong)", fontFamily: "var(--font-mono)" }}>{months} cuotas</span>
                    </div>
                    <input type="range" min={12} max={60} step={12} value={months} onChange={e => setMonths(+e.target.value)} style={{ width: "100%", accentColor: "var(--coral-500)" }}/>
                  </div>
                </div>

                <div style={{ marginTop: 18, padding: 14, background: "var(--ocean-050)", borderRadius: 10, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "var(--ocean-700)", fontWeight: 600 }}>Cuota mensual estimada</span>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--ocean-700)", letterSpacing: "-0.015em" }}>
                    {window.formatPrice(monthly, v.currency)}<span style={{ fontSize: 11, fontWeight: 600, opacity: 0.7 }}>/mes</span>
                  </div>
                </div>

                <Button variant="ghost" size="md" style={{ width: "100%", marginTop: 14 }}>Solicitar aprobación →</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <section style={{ marginTop: 80 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", margin: "0 0 20px", color: "var(--fg-strong)" }}>
              Otros {v.bodyType.toLowerCase()}s parecidos
            </h2>
            <ListingGrid vehicles={similar} cols={4} onSelect={x => navigate(`#/auto/${x.id}`)} />
          </section>
        )}
      </Container>
    </main>
  );
};

window.DetailScreen = DetailScreen;
