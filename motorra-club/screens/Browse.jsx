/* eslint-disable */
/* Motorra Club · Browse · marketplace grid view with filters
   Used for "Comprar" (no filter) and category-filtered views.
*/

// Map sidebar category id → body types
window.MC_CATEGORY_MAP = {
  autos:        { label: "Autos",        body: ["Sedán", "Hatchback"] },
  motos:        { label: "Motos",        body: ["Moto"] },
  camionetas:   { label: "Camionetas",   body: ["Camioneta"] },
  suv:          { label: "SUV",          body: ["SUV"] },
  electricos:   { label: "Eléctricos",   body: ["Eléctrico"] },
  comerciales: { label: "Comerciales",  body: ["Comercial"] },
};

const BrowseScreen = ({ navigate, currentUser, categoryId }) => {
  const cat = categoryId && window.MC_CATEGORY_MAP[categoryId];
  const allListings = window.MC_LISTINGS;
  const listings = cat ? allListings.filter(l => cat.body.includes(l.body)) : allListings;
  const [sort, setSort] = React.useState("recent");
  const [maxPrice, setMaxPrice] = React.useState(40);
  const [onlyFounders, setOnlyFounders] = React.useState(false);

  const filtered = React.useMemo(() => {
    let arr = [...listings];
    if (maxPrice < 40) arr = arr.filter(l => l.price / 1000000 <= maxPrice);
    if (onlyFounders) arr = arr.filter(l => {
      const m = window.MC_MEMBERS[l.sellerId];
      return m && m.badges.includes("founder");
    });
    arr.sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "km-asc") return a.km - b.km;
      return 0; // recent (already sorted)
    });
    return arr;
  }, [listings, sort, maxPrice, onlyFounders]);

  return (
    <ClubShell activeChannel={categoryId || "browse"} navigate={navigate} currentUser={currentUser}>
      {/* Header */}
      <div style={{ padding: "18px 28px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "sticky", top: 0, background: "rgba(30,32,48,0.92)", backdropFilter: "blur(8px)", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#9CA3AF" }}>
              <Icon name="shopping-bag" size={13}/> Comprar {cat && `· ${cat.label}`}
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "4px 0 0", color: "#F3F4F6", letterSpacing: "-0.015em" }}>
              {cat ? cat.label : "Inventario del Club"} <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14, color: "#9CA3AF", marginLeft: 6 }}>{filtered.length} de {listings.length}</span>
            </h1>
          </div>
          <button onClick={() => navigate("categories")} style={{ padding: "8px 14px", background: "rgba(255,255,255,0.06)", border: 0, borderRadius: 8, color: "#D1D5DB", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)" }}>
            <Icon name="layout-grid" size={13}/> Ver todas las categorías
          </button>
        </div>

        {/* Category chips */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", overflowX: "auto" }} className="scrollbar-none">
          <CatChip active={!categoryId} onClick={() => navigate("browse")}>Todos</CatChip>
          {Object.entries(window.MC_CATEGORY_MAP).map(([id, c]) => {
            const count = allListings.filter(l => c.body.includes(l.body)).length;
            return (
              <CatChip key={id} active={id === categoryId} onClick={() => navigate("browse", { category: id })}>
                {c.label} <span style={{ opacity: 0.6, marginLeft: 4, fontFamily: "var(--font-mono)" }}>{count}</span>
              </CatChip>
            );
          })}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 0, padding: "20px 28px 32px" }}>
        {/* Filter rail */}
        <aside style={{ paddingRight: 20, borderRight: "1px solid rgba(255,255,255,0.04)" }}>
          <FilterGroup title="Precio máximo">
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9CA3AF", marginBottom: 6 }}>
              <span>$0</span>
              <span style={{ color: "#FF7E58", fontWeight: 700, fontFamily: "var(--font-mono)" }}>${maxPrice}M</span>
            </div>
            <input type="range" min={5} max={40} value={maxPrice} onChange={e => setMaxPrice(+e.target.value)} style={{ width: "100%", accentColor: "#FF5B2E" }}/>
          </FilterGroup>

          <FilterGroup title="Año del modelo">
            <div style={{ display: "flex", gap: 6 }}>
              <input placeholder="Desde" defaultValue="2018" style={miniInput}/>
              <input placeholder="Hasta" defaultValue="2024" style={miniInput}/>
            </div>
          </FilterGroup>

          <FilterGroup title="Combustible">
            {["Bencina", "Diésel", "Eléctrico", "Híbrido"].map(f => (
              <label key={f} style={filterLabel}>
                <input type="checkbox" style={{ accentColor: "#FF5B2E" }}/> <span>{f}</span>
              </label>
            ))}
          </FilterGroup>

          <FilterGroup title="Transmisión">
            <label style={filterLabel}><input type="checkbox" defaultChecked style={{ accentColor: "#FF5B2E" }}/> <span>Automática</span></label>
            <label style={filterLabel}><input type="checkbox" style={{ accentColor: "#FF5B2E" }}/> <span>Manual</span></label>
          </FilterGroup>

          <FilterGroup title="Vendedor">
            <label style={filterLabel}>
              <input type="checkbox" checked={onlyFounders} onChange={e => setOnlyFounders(e.target.checked)} style={{ accentColor: "#FF5B2E" }}/>
              <span>👑 Solo Fundadores</span>
            </label>
            <label style={filterLabel}><input type="checkbox" defaultChecked style={{ accentColor: "#FF5B2E" }}/> <span>Verificados</span></label>
          </FilterGroup>

          <button style={{ background: "transparent", color: "#FF7E58", fontFamily: "var(--font-body)", border: 0, fontSize: 12, fontWeight: 600, cursor: "pointer", marginTop: 6 }}>Limpiar filtros</button>
        </aside>

        {/* Grid */}
        <div style={{ paddingLeft: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "#9CA3AF" }}>
              <b style={{ color: "#F3F4F6", fontWeight: 700 }}>{filtered.length} resultado{filtered.length === 1 ? "" : "s"}</b> · actualizado en este momento
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)} style={{
              background: "#272A3E", border: "1px solid rgba(255,255,255,0.08)", color: "#D1D5DB",
              padding: "8px 12px", borderRadius: 8, fontFamily: "var(--font-body)", fontSize: 12,
              fontWeight: 600, cursor: "pointer", outline: "none",
            }}>
              <option value="recent">Más recientes</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="km-asc">Km: menor a mayor</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div style={{ background: "#272A3E", borderRadius: 12, padding: 48, textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "#F3F4F6" }}>No hay vehículos con estos filtros</div>
              <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 6 }}>Prueba quitando algún criterio o explora otra categoría.</div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
              {filtered.map(l => <BrowseCard key={l.id} listing={l} onOpen={() => navigate("detail", { id: l.id })}/>)}
            </div>
          )}
        </div>
      </div>
    </ClubShell>
  );
};

const CatChip = ({ active, onClick, children }) => (
  <button onClick={onClick} style={{
    padding: "7px 13px", borderRadius: 9999,
    background: active ? "#FF5B2E" : "rgba(255,255,255,0.06)",
    color: active ? "#0A0A0A" : "#D1D5DB",
    border: 0, cursor: "pointer", whiteSpace: "nowrap",
    fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
    display: "inline-flex", alignItems: "center", gap: 4,
  }}>{children}</button>
);

const FilterGroup = ({ title, children }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#6B7280", marginBottom: 8, textTransform: "uppercase" }}>{title}</div>
    {children}
  </div>
);

const miniInput = {
  flex: 1, background: "#1E2030", border: "1px solid rgba(255,255,255,0.08)", color: "#F3F4F6",
  padding: "8px 10px", borderRadius: 7, fontFamily: "var(--font-body)", fontSize: 12, outline: "none", width: "100%", boxSizing: "border-box",
};

const filterLabel = {
  display: "flex", alignItems: "center", gap: 8, padding: "5px 0",
  fontSize: 12, color: "#D1D5DB", cursor: "pointer",
};

const BrowseCard = ({ listing, onOpen }) => {
  const m = window.MC_MEMBERS[listing.sellerId];
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      background: "#272A3E", borderRadius: 12, overflow: "hidden", cursor: "pointer",
      border: "1px solid " + (hover ? "rgba(255,91,46,0.4)" : "rgba(255,255,255,0.04)"),
      transition: "border-color 140ms, transform 140ms",
      transform: hover ? "translateY(-2px)" : "translateY(0)",
    }}>
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
        <img src={listing.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transform: hover ? "scale(1.03)" : "scale(1)", transition: "transform 380ms cubic-bezier(0.22,1,0.36,1)" }}/>
        <button style={{ position: "absolute", top: 10, right: 10, width: 30, height: 30, borderRadius: "50%", background: "rgba(0,0,0,0.55)", border: 0, color: "white", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="heart" size={15}/>
        </button>
        {m.badges.includes("founder") && (
          <span style={{ position: "absolute", top: 10, left: 10, fontSize: 10, padding: "3px 8px", background: "rgba(255,91,46,0.92)", color: "#0A0A0A", borderRadius: 4, fontWeight: 700, letterSpacing: "0.04em" }}>
            👑 FUNDADOR #{m.founderNum}
          </span>
        )}
      </div>
      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ fontSize: 10, color: "#FF7E58", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{listing.year} · {listing.body}</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#F3F4F6", marginTop: 2, letterSpacing: "-0.015em" }}>{listing.make} {listing.model}</div>
        <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{listing.trim} · {window.MC_FORMAT_KM(listing.km)} · {listing.trans}</div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <PriceTag amount={listing.price} size="lg" color="#F3F4F6"/>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Avatar member={m} size={22}/>
            <span style={{ fontSize: 11, color: "#9CA3AF" }}>{m.name.split(" ")[0]} {m.name.split(" ")[1][0]}.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

window.BrowseScreen = BrowseScreen;
