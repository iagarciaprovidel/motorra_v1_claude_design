/* eslint-disable */
/* Motorra · Search / Listings screen */

const parseCategoryFromHash = (hash) => {
  const m = hash.match(/[?&]cat=([^&]+)/);
  return m ? decodeURIComponent(m[1]) : null;
};

const SearchScreen = ({ navigate }) => {
  const hash = window.location.hash || "";
  const catId = parseCategoryFromHash(hash);
  const cat = catId && window.MOTORRA_CATEGORY_MAP && window.MOTORRA_CATEGORY_MAP[catId];

  const [filters, setFilters] = React.useState({ bodyType: cat ? cat.body : [], fuel: [], transmission: [] });
  const [appliedChips, setAppliedChips] = React.useState(
    cat
      ? [{ id: "cat", label: cat.label }]
      : [{ id: "make", label: "Toyota" }, { id: "year", label: "2020–2024" }, { id: "km", label: "< 60.000 km" }]
  );
  const [sort, setSort] = React.useState("relevance");
  const [view, setView] = React.useState("grid");

  const all = window.MOTORRA_INVENTORY;
  const vehicles = cat ? all.filter(v => cat.body.includes(v.bodyType)) : all;

  return (
    <main style={{ paddingTop: 32 }}>
      <Container>
        {/* Breadcrumb + title */}
        <div style={{ fontSize: 12, color: "var(--fg-muted)", marginBottom: 12 }}>
          Inicio &nbsp;›&nbsp; <a href="#/categorias" style={{ color: "inherit", textDecoration: "none" }}>Comprar</a> &nbsp;›&nbsp; <span style={{ color: "var(--fg-strong)" }}>{cat ? cat.label + " en Chile" : "Todo el inventario"}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 18 }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 38, letterSpacing: "-0.025em", margin: 0, color: "var(--fg-strong)" }}>
              {cat ? `${cat.label} en Chile` : "Todo el inventario"}
            </h1>
            <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 4 }}>
              <span style={{ color: "var(--fg-strong)", fontWeight: 600 }}>{vehicles.length} {vehicles.length === 1 ? "resultado" : "resultados"}</span> · actualizado hoy
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ display: "flex", background: "var(--bg-sunken)", borderRadius: 8, padding: 3 }}>
              {["grid", "list", "map"].map(v => (
                <button key={v} onClick={() => setView(v)} style={{
                  padding: "6px 10px", border: 0, borderRadius: 6, cursor: "pointer",
                  background: view === v ? "var(--bg-canvas)" : "transparent", boxShadow: view === v ? "0 1px 2px rgba(14,16,21,0.06)" : "none",
                  display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--fg)",
                }}>
                  <Icon name={v === "grid" ? "layout-grid" : v === "list" ? "list" : "map"} size={14} />
                  {v === "grid" ? "Grid" : v === "list" ? "Lista" : "Mapa"}
                </button>
              ))}
            </div>
            <Select value={sort} onChange={e => setSort(e.target.value)} options={[
              { value: "relevance", label: "Relevancia" },
              { value: "price-asc", label: "Precio: menor a mayor" },
              { value: "price-desc", label: "Precio: mayor a menor" },
              { value: "year-desc", label: "Año: más nuevos" },
              { value: "km-asc", label: "Km: menor a mayor" },
            ]} />
          </div>
        </div>

        {/* Category quick switcher */}
        {window.MOTORRA_CATEGORY_MAP && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18, alignItems: "center" }}>
            <Chip active={!catId} onClick={() => navigate("#/buscar")}>Todos</Chip>
            {Object.entries(window.MOTORRA_CATEGORY_MAP).map(([id, c]) => {
              const count = all.filter(v => c.body.includes(v.bodyType)).length;
              return (
                <Chip key={id} active={id === catId} onClick={() => navigate(`#/buscar?cat=${id}`)}>
                  {c.label} <span style={{ opacity: 0.6, marginLeft: 4, fontFamily: "var(--font-mono)", fontSize: 11 }}>{count}</span>
                </Chip>
              );
            })}
          </div>
        )}

        {/* Applied filters chip row */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
          {appliedChips.map(c => (
            <Chip key={c.id} dismissable onDismiss={() => setAppliedChips(appliedChips.filter(x => x.id !== c.id))}>
              {c.label}
            </Chip>
          ))}
          {appliedChips.length > 0 && (
            <button onClick={() => { setAppliedChips([]); navigate("#/buscar"); }} style={{ background: "transparent", border: 0, color: "var(--coral-600)", fontWeight: 600, fontSize: 12, cursor: "pointer", padding: "8px 4px" }}>
              Limpiar todo
            </button>
          )}
        </div>

        {/* Filter rail + grid */}
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24, alignItems: "flex-start" }}>
          <FilterRail filters={filters} onChange={setFilters} />
          <div>
            <ListingGrid vehicles={vehicles} cols={3} onSelect={v => navigate(`#/auto/${v.id}`)} />
            <div style={{ marginTop: 32, display: "flex", justifyContent: "center", alignItems: "center", gap: 4 }}>
              <button style={paginationBtn(false)}><Icon name="chevron-left" size={16} /></button>
              {[1, 2, 3, 4].map(n => (
                <button key={n} style={paginationBtn(n === 1)}>{n}</button>
              ))}
              <span style={{ fontSize: 12, color: "var(--fg-subtle)", padding: "0 6px" }}>…</span>
              <button style={paginationBtn(false)}>26</button>
              <button style={paginationBtn(false)}><Icon name="chevron-right" size={16} /></button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

const paginationBtn = (active) => ({
  width: 36, height: 36, borderRadius: 8, border: active ? "1px solid var(--fg-strong)" : "1px solid transparent",
  background: active ? "var(--fg-strong)" : "transparent", color: active ? "var(--on-fg-strong)" : "var(--ink-700)",
  cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
  display: "inline-flex", alignItems: "center", justifyContent: "center",
});

window.SearchScreen = SearchScreen;
