/* eslint-disable */
/* Motorra Club · Landing (Airbnb warm aesthetic — public marketing) */

const LandingScreen = ({ onJoinClub, onOpenListing }) => {
  const featured = window.MC_LISTINGS.slice(0, 6);
  const cats = [
    { name: "Autos", icon: "car", count: "1.247", color: "#E8DCC6" },
    { name: "SUV", icon: "caravan", count: "612", color: "#D4DCC6" },
    { name: "Camionetas", icon: "truck", count: "534", color: "#E0D6C2" },
    { name: "Motos", icon: "bike", count: "340", color: "#DCC8C2" },
    { name: "Eléctricos", icon: "zap", count: "184", color: "#C6D8DC" },
    { name: "Comerciales", icon: "bus", count: "78", color: "#D8D2C2" },
  ];

  return (
    <div className="mc-warm" style={{ background: "#F4EFE6", color: "#1F1B16" }} data-screen-label="Landing público">
      {/* ─── Header ─── */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(244,239,230,0.88)", backdropFilter: "blur(10px)", borderBottom: "1px solid #E5DECC" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <BrandMark size={36} tone="dark" showClub={true}/>
          <div style={{ display: "flex", alignItems: "stretch", background: "white", borderRadius: 9999, padding: "5px 5px 5px 20px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1F1B16", display: "flex", alignItems: "center" }}>Comprar</span>
            <span style={{ width: 1, background: "#E5DECC", margin: "8px 14px" }}></span>
            <span style={{ fontSize: 13, color: "#5A4F3C", display: "flex", alignItems: "center" }}>Cualquier marca</span>
            <span style={{ width: 1, background: "#E5DECC", margin: "8px 14px" }}></span>
            <span style={{ fontSize: 13, color: "#5A4F3C", display: "flex", alignItems: "center" }}>Toda Chile</span>
            <button style={{ marginLeft: 10, width: 36, height: 36, borderRadius: "50%", background: "#FF5B2E", border: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "white", cursor: "pointer" }} aria-label="Buscar">
              <Icon name="search" size={16}/>
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1F1B16", cursor: "pointer" }}>Publicar tu auto</span>
            <button onClick={onJoinClub} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 8px 6px 12px", borderRadius: 9999, border: "1px solid #E5DECC", background: "white", cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#1F1B16" }}>
              Menú <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#1F1B16", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>👑</span>
            </button>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "40px 32px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", background: "rgba(255,91,46,0.1)", border: "1px solid rgba(255,91,46,0.25)", borderRadius: 9999, fontSize: 11, fontWeight: 700, color: "#B33310", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 22 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF5B2E", animation: "pulse-dot 2s ease-in-out infinite" }}></span>
              Club fundadores · quedan 53 lugares
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 68, lineHeight: 1.02, letterSpacing: "-0.025em", margin: 0, color: "#1F1B16", fontVariationSettings: '"opsz" 64' }}>
              Encontrá el auto<br/>que <em style={{ fontStyle: "italic", fontWeight: 500, color: "#B33310" }}>te gusta de verdad</em>.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "#5A4F3C", marginTop: 22, maxWidth: 480 }}>
              Marketplace especializado en compra y venta de vehículos motorizados. Particulares y dealers verificados en Chile.
              <strong style={{ color: "#1F1B16", fontWeight: 700 }}> Sin comisiones durante el lanzamiento.</strong>
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
              <Button variant="primary" size="lg" iconRight="arrow-right" onClick={onJoinClub}>Unirme al Club</Button>
              <Button variant="ghost" size="lg" icon="search" style={{ borderColor: "#1F1B16", color: "#1F1B16", opacity: 1 }}>Ver inventario</Button>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 36 }}>
              {cats.slice(0, 6).map(c => (
                <span key={c.name} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 9999, background: "white", border: "1px solid #E5DECC", fontSize: 12, fontWeight: 600, color: "#1F1B16" }}>
                  <Icon name={c.icon} size={13}/> {c.name}
                </span>
              ))}
            </div>
          </div>

          {/* Hero photo + floating listing card */}
          <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: 24, overflow: "hidden" }}>
            <img src={featured[0].photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
            <div style={{ position: "absolute", left: 20, bottom: 20, right: 20, background: "white", borderRadius: 14, padding: 14, display: "flex", alignItems: "center", gap: 12, boxShadow: "0 12px 32px rgba(0,0,0,0.18)" }}>
              <Avatar member={window.MC_MEMBERS[featured[0].sellerId]} size={48}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#1F1B16" }}>{featured[0].year} {featured[0].make} {featured[0].model}</span>
                </div>
                <div style={{ fontSize: 11, color: "#8B7E66" }}>
                  {window.MC_FORMAT_KM(featured[0].km)} · {window.MC_MEMBERS[featured[0].sellerId].name}
                </div>
                <FounderBadgePill member={window.MC_MEMBERS[featured[0].sellerId]} size="xs"/>
              </div>
              <PriceTag amount={featured[0].price} size="md" color="#1F1B16"/>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured listings ─── */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px 64px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#B33310", marginBottom: 6 }}>Recién publicados por el Club</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", margin: 0, color: "#1F1B16" }}>
              Cada vehículo, un miembro detrás.
            </h2>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1F1B16", cursor: "pointer" }}>Ver todos →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {featured.slice(0, 6).map(l => (
            <ListingCardWarm key={l.id} listing={l} onOpen={onOpenListing}/>
          ))}
        </div>
      </section>

      {/* ─── Club Fundadores CTA ─── */}
      <section style={{ background: "white", borderTop: "1px solid #E5DECC", borderBottom: "1px solid #E5DECC", padding: "64px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#B33310", marginBottom: 14 }}>👑 CLUB FUNDADORES</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: "#1F1B16" }}>
              Los primeros 100 escriben<br/>la historia.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "#5A4F3C", marginTop: 18, maxWidth: 460 }}>
              Sé Fundador Motorra y obtené beneficios permanentes: 0% comisión vitalicio, badge dorado en tu perfil, acceso anticipado a cada feature, comunidad privada de fundadores.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <Button variant="primary" size="lg" iconRight="arrow-right" onClick={onJoinClub}>Reclamar lugar #48</Button>
              <Button variant="ghost" size="lg" style={{ borderColor: "#1F1B16", color: "#1F1B16", opacity: 1 }}>Ver beneficios completos</Button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { icon: "badge-percent", title: "0% comisión vitalicio", body: "Cuando empecemos a cobrar, los fundadores siguen gratis. Para siempre." },
              { icon: "crown", title: "Badge dorado #001–#100", body: "Visible en tu perfil y en cada publicación. Status permanente en el club." },
              { icon: "rocket", title: "Acceso anticipado", body: "Probás cada feature antes que cualquier otro miembro." },
              { icon: "users", title: "Comunidad privada", body: "Canal exclusivo + encuentros presenciales 2 veces al año." },
            ].map(b => (
              <div key={b.title} style={{ background: "#F4EFE6", padding: 18, borderRadius: 12 }}>
                <Icon name={b.icon} size={20} color="#B33310"/>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "#1F1B16", marginTop: 10, letterSpacing: "-0.005em" }}>{b.title}</div>
                <div style={{ fontSize: 12, color: "#5A4F3C", marginTop: 4, lineHeight: 1.5 }}>{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Cómo funciona ─── */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#B33310", marginBottom: 8 }}>Cómo funciona</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em", margin: 0, color: "#1F1B16" }}>
            3 pasos. Sin pagar nada.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { n: "01", t: "Sumate al Club", d: "Tomá 30 segundos para registrarte. Si sos de los primeros 100, sos Fundador y tenés beneficios permanentes." },
            { n: "02", t: "Publicá tu vehículo", d: "Hasta 20 fotos + 1 video. Autocompletamos marca y modelo. Contacto directo por WhatsApp." },
            { n: "03", t: "Vendé al mejor postor", d: "Compradores te contactan, vos acordás precio y método. Motorra no toma comisión." },
          ].map(s => (
            <div key={s.n} style={{ background: "white", borderRadius: 16, padding: 24, border: "1px solid #E5DECC" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: "#FF5B2E" }}>{s.n}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", margin: "8px 0", color: "#1F1B16" }}>{s.t}</h3>
              <p style={{ fontSize: 13, color: "#5A4F3C", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{ background: "#1F1B16", color: "#F4EFE6", padding: "48px 32px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
          <div>
            <BrandMark size={36} tone="light" showClub={true}/>
            <p style={{ fontSize: 13, color: "rgba(244,239,230,0.6)", lineHeight: 1.6, marginTop: 16, maxWidth: 280 }}>
              Marketplace especializado en compra y venta de vehículos motorizados en Chile.
            </p>
          </div>
          {[
            { t: "Motorra", l: ["Sobre nosotros", "Cómo funciona", "Club Fundadores", "Contacto"] },
            { t: "Categorías", l: ["Autos", "Motos", "Camionetas", "SUV", "Eléctricos"] },
            { t: "Soporte", l: ["Centro de ayuda", "Trust & Safety", "Términos", "Privacidad"] },
          ].map(c => (
            <div key={c.t}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#FF5B2E", marginBottom: 14 }}>{c.t}</div>
              {c.l.map(it => <div key={it} style={{ fontSize: 13, color: "rgba(244,239,230,0.75)", marginBottom: 8, cursor: "pointer" }}>{it}</div>)}
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1240, margin: "40px auto 0", paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(244,239,230,0.5)" }}>
          <span>© 2026 Club Motorra · Servicio operado en Chile</span>
          <span>Lanzamiento Q3 2026 · 47 / 100 fundadores</span>
        </div>
      </footer>
    </div>
  );
};

window.LandingScreen = LandingScreen;
