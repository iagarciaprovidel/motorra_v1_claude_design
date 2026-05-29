/* eslint-disable */
/* Motorra · Categorías — tile explorer per body type */

window.MOTORRA_CATEGORY_MAP = {
  autos:       { label: "Autos",       body: ["Sedán", "Hatchback"], icon: "car" },
  motos:       { label: "Motos",       body: ["Moto"],               icon: "bike" },
  camionetas:  { label: "Camionetas",  body: ["Camioneta"],          icon: "truck" },
  suv:         { label: "SUV",         body: ["SUV"],                icon: "caravan" },
  electricos:  { label: "Eléctricos",  body: ["Eléctrico"],          icon: "zap" },
  comerciales: { label: "Comerciales", body: ["Comercial"],          icon: "bus" },
};

const CategoriesScreen = ({ navigate }) => {
  const all = window.MOTORRA_INVENTORY;
  const cats = Object.entries(window.MOTORRA_CATEGORY_MAP).map(([id, c]) => {
    const listings = all.filter(l => c.body.includes(l.bodyType));
    return { id, label: c.label, icon: c.icon, count: listings.length, hero: listings[0]?.photo };
  });

  return (
    <main style={{ paddingTop: 32, paddingBottom: 72 }}>
      <Container>
        <div style={{ fontSize: 12, color: "var(--fg-muted)", marginBottom: 12 }}>
          Inicio &nbsp;›&nbsp; <span style={{ color: "var(--fg-strong)" }}>Categorías</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 38, letterSpacing: "-0.025em", margin: 0, color: "var(--fg-strong)" }}>
            ¿Qué andas buscando?
          </h1>
        </div>
        <p style={{ fontSize: 15, color: "var(--fg-muted)", margin: "0 0 32px", maxWidth: 560 }}>
          Explora por tipo de vehículo. Cada categoría tiene su propia búsqueda con filtros, ordenamiento y los vehículos publicados.
        </p>

        {/* Big tiles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {cats.map(c => (
            <button key={c.id} onClick={() => navigate(`#/buscar?cat=${c.id}`)} style={{
              position: "relative", aspectRatio: "1.25/1", borderRadius: 16, overflow: "hidden",
              cursor: "pointer", background: "var(--bg-canvas)", border: 0, padding: 0,
              fontFamily: "var(--font-body)", textAlign: "left",
              transition: "transform 220ms cubic-bezier(0.22,1,0.36,1), box-shadow 220ms",
              boxShadow: "var(--sh-1)",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--sh-3)"; const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--sh-1)"; const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}>
              {c.hero && (
                <img src={c.hero} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 480ms cubic-bezier(0.22,1,0.36,1)" }}/>
              )}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.12) 30%, rgba(14,16,21,0.82) 100%)" }}></div>
              <div style={{ position: "absolute", top: 16, left: 16, width: 40, height: 40, borderRadius: 10, background: "rgba(255,91,46,0.92)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                <Icon name={c.icon} size={22}/>
              </div>
              <div style={{ position: "absolute", left: 20, right: 20, bottom: 20, color: "white" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em" }}>{c.label}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 6 }}>
                  <span style={{ fontSize: 13, opacity: 0.85, fontWeight: 500 }}>
                    {c.count} {c.count === 1 ? "publicación" : "publicaciones"}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 4 }}>
                    Explorar <Icon name="arrow-right" size={14}/>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Featured strip */}
        <section style={{ marginTop: 56 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--coral-600)", marginBottom: 6 }}>Recién publicados</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", margin: 0, color: "var(--fg-strong)" }}>
                Lo último del Club.
              </h2>
            </div>
            <button onClick={() => navigate("#/buscar")} style={{ background: "transparent", color: "var(--fg)", border: 0, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-body)", display: "inline-flex", alignItems: "center", gap: 4 }}>
              Ver todo el inventario <Icon name="arrow-right" size={14}/>
            </button>
          </div>
          <ListingGrid vehicles={all.slice(0, 4)} cols={4} onSelect={v => navigate(`#/auto/${v.id}`)}/>
        </section>
      </Container>
    </main>
  );
};

window.CategoriesScreen = CategoriesScreen;
