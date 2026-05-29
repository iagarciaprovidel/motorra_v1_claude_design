/* eslint-disable */
/* Motorra Club · Categories — tile explorer + featured per category */

const CategoriesScreen = ({ navigate, currentUser }) => {
  const cats = Object.entries(window.MC_CATEGORY_MAP).map(([id, c]) => {
    const listings = window.MC_LISTINGS.filter(l => c.body.includes(l.body));
    return { id, label: c.label, count: listings.length, listings, hero: listings[0]?.photo };
  });

  return (
    <ClubShell activeChannel="categorias" navigate={navigate} currentUser={currentUser}>
      <div style={{ padding: "20px 28px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#9CA3AF", marginBottom: 4 }}>
          <Icon name="layout-grid" size={13}/> Categorías
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", margin: 0, color: "#F3F4F6" }}>
          ¿Qué andás buscando?
        </h1>
        <p style={{ fontSize: 14, color: "#9CA3AF", margin: "8px 0 28px", maxWidth: 540 }}>
          Explorá por tipo de vehículo. Cada categoría tiene su feed propio, sus filtros y los vehículos publicados por miembros del Club.
        </p>

        {/* Big tiles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {cats.map(c => (
            <div key={c.id} onClick={() => navigate("browse", { category: c.id })} style={{
              position: "relative", aspectRatio: "1.2/1", borderRadius: 16, overflow: "hidden",
              cursor: "pointer", background: "#272A3E",
            }}
            onMouseEnter={e => { const ov = e.currentTarget.querySelector(".tile-overlay"); if (ov) ov.style.transform = "translateY(0)"; }}
            onMouseLeave={e => { const ov = e.currentTarget.querySelector(".tile-overlay"); if (ov) ov.style.transform = "translateY(8px)"; }}>
              {c.hero && (
                <img src={c.hero} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}/>
              )}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(10,10,10,0.85) 100%)" }}></div>
              <div className="tile-overlay" style={{ position: "absolute", left: 20, right: 20, bottom: 20, color: "white", transition: "transform 280ms" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em" }}>{c.label}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, opacity: 0.85 }}>{c.count} {c.count === 1 ? "publicación" : "publicaciones"} en Chile</span>
                  <span style={{ fontSize: 13, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 4 }}>
                    Explorar <Icon name="arrow-right" size={14}/>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top of the week per category */}
        <section style={{ marginTop: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", textTransform: "uppercase" }}>Top de la semana</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", color: "#F3F4F6", margin: "4px 0 0" }}>
                Los más vistos del Club
              </h2>
            </div>
            <button onClick={() => navigate("browse")} style={{ background: "transparent", color: "#FF7E58", border: 0, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4 }}>
              Ver todo el inventario <Icon name="arrow-right" size={14}/>
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {window.MC_LISTINGS.slice(0, 4).map(l => {
              const m = window.MC_MEMBERS[l.sellerId];
              return (
                <div key={l.id} onClick={() => navigate("detail", { id: l.id })} style={{ background: "#272A3E", borderRadius: 10, overflow: "hidden", cursor: "pointer", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div style={{ aspectRatio: "16/10" }}>
                    <img src={l.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                  </div>
                  <div style={{ padding: "10px 12px 12px" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#F3F4F6", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.year} {l.make} {l.model}</div>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 6 }}>
                      <PriceTag amount={l.price} size="sm" color="#FF7E58"/>
                      <FounderBadgePill member={m} size="xs"/>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </ClubShell>
  );
};

window.CategoriesScreen = CategoriesScreen;
