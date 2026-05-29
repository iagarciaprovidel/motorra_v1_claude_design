/* eslint-disable */
/* Motorra · listing-related components */

const ListingCard = ({ vehicle, compact, onClick, variant: variantProp }) => {
  const v = vehicle;
  const [hover, setHover] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const variant = variantProp || (window.__tweaks && window.__tweaks.listingVariant) || "default";

  if (variant === "magazine") {
    return (
      <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          background: "var(--bg-canvas)", borderRadius: 16, overflow: "hidden", cursor: "pointer",
          boxShadow: hover ? "var(--sh-3)" : "var(--sh-1)",
          transition: "box-shadow 220ms cubic-bezier(0.22,1,0.36,1)",
          display: "flex", flexDirection: "column", position: "relative",
        }}>
        <div style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden" }}>
          <img src={v.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transform: hover ? "scale(1.06)" : "scale(1)", transition: "transform 480ms cubic-bezier(0.22,1,0.36,1)" }}/>
          {/* Gradient protection bottom */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0) 45%)" }}/>
          <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 5 }}>
            {(v.badges || []).slice(0, 2).map(b => (
              b === "certified" ? <Badge key={b} tone="certified" icon="badge-check">Certificado</Badge> :
              b === "hot" ? <Badge key={b} tone="hot">Oferta</Badge> :
              b === "new" ? <Badge key={b} tone="new">Nuevo</Badge> :
              b === "eco" ? <Badge key={b} tone="eco">Eléctrico</Badge> : null
            ))}
          </div>
          <button onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
            style={{ position: "absolute", top: 12, right: 12, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.96)", border: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: liked ? "var(--coral-500)" : "#222" }}>
            <Icon name="heart" size={18} style={{ fill: liked ? "currentColor" : "none" }} />
          </button>
          {/* Overlay text */}
          <div style={{ position: "absolute", left: 16, right: 16, bottom: 14, color: "white" }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.85, marginBottom: 4 }}>{v.year} · {v.bodyType}</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.1 }}>{v.make} {v.model}</div>
          </div>
        </div>
        <div style={{ padding: "14px 16px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <PriceTag price={v.price} currency={v.currency} size="md" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)" }}>{window.formatKm(v.km)}</span>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          background: "var(--bg-canvas)", borderRadius: 10, overflow: "hidden", cursor: "pointer",
          border: "1px solid var(--border)",
          boxShadow: hover ? "var(--sh-2)" : "none",
          transition: "box-shadow 180ms",
          display: "flex", gap: 14, padding: 10,
        }}>
        <div style={{ position: "relative", width: 140, aspectRatio: "4 / 3", borderRadius: 6, overflow: "hidden", flexShrink: 0 }}>
          <img src={v.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          {(v.badges || []).includes("certified") && (
            <div style={{ position: "absolute", top: 4, left: 4 }}>
              <Badge tone="certified" icon="badge-check">Cert.</Badge>
            </div>
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "4px 0" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--fg-strong)", margin: 0, letterSpacing: "-0.005em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {v.year} {v.make} {v.model}
            </h3>
            <div style={{ fontSize: 11, color: "var(--fg-muted)", marginTop: 2 }}>{v.trim}</div>
            <div style={{ display: "flex", gap: 8, marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg)", flexWrap: "wrap" }}>
              <span>{window.formatKm(v.km)}</span>
              <span>· {v.transmission === "Automática" ? "Aut." : "Man."}</span>
              <span>· {v.fuel}</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <PriceTag price={v.price} currency={v.currency} size="sm" />
            <span style={{ fontSize: 10, color: "var(--fg-muted)" }}>{v.location.split(",")[0]}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--bg-canvas)", borderRadius: 12, overflow: "hidden", cursor: "pointer",
        boxShadow: hover
          ? "0 6px 16px rgba(14,16,21,0.08), 0 2px 4px rgba(14,16,21,0.04)"
          : "0 1px 2px rgba(14,16,21,0.06), 0 0 0 1px rgba(14,16,21,0.04)",
        transition: "box-shadow 220ms cubic-bezier(0.22,1,0.36,1)",
        display: "flex", flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", background: "var(--bg-sunken)" }}>
        <img
          src={v.photo}
          alt={`${v.year} ${v.make} ${v.model}`}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: hover ? "scale(1.04)" : "scale(1)",
            transition: "transform 380ms cubic-bezier(0.22,1,0.36,1)",
          }}
          onError={(e) => { e.currentTarget.style.opacity = 0.4; }}
        />
        <div style={{ position: "absolute", top: 10, left: 10, display: "flex", gap: 5 }}>
          {(v.badges || []).slice(0, 2).map(b => (
            b === "certified" ? <Badge key={b} tone="certified" icon="badge-check">Certificado</Badge> :
            b === "hot" ? <Badge key={b} tone="hot">Oferta</Badge> :
            b === "new" ? <Badge key={b} tone="new">Nuevo</Badge> :
            b === "financed" ? <Badge key={b} tone="financed">Financiable</Badge> :
            b === "eco" ? <Badge key={b} tone="eco">Eléctrico</Badge> :
            null
          ))}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          style={{
            position: "absolute", top: 10, right: 10,
            width: 32, height: 32, borderRadius: "50%",
            background: "rgba(255,255,255,0.94)", border: 0, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: liked ? "var(--coral-500)" : "var(--ink-700)",
          }}
          aria-label="Guardar"
        >
          <Icon name="heart" size={16} style={{ fill: liked ? "currentColor" : "none" }} />
        </button>
      </div>
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17,
            color: "var(--fg-strong)", letterSpacing: "-0.01em", lineHeight: 1.25, margin: 0,
          }}>
            {v.year} {v.make} {v.model}
          </h3>
          <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 2 }}>{v.trim}</div>
        </div>
        <div style={{ display: "flex", gap: 10, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg)", fontWeight: 500, flexWrap: "wrap" }}>
          <span>{window.formatKm(v.km)}</span>
          <span>· {v.transmission === "Automática" ? "Aut." : "Man."}</span>
          <span>· {v.fuel}</span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 4, paddingTop: 12, borderTop: "1px solid var(--ink-100)" }}>
          <PriceTag price={v.price} currency={v.currency} size="md" />
          <span style={{ fontSize: 11, color: "var(--fg-muted)" }}>{v.location.split(",")[0]}</span>
        </div>
      </div>
    </div>
  );
};

const ListingGrid = ({ vehicles, onSelect, cols = 4 }) => {
  const variant = (window.__tweaks && window.__tweaks.listingVariant) || "default";
  // Compact = 2-col rows (full width listing cards), Magazine = same cols as default
  const effectiveCols = variant === "compact" ? Math.min(cols, 2) : cols;
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${effectiveCols}, minmax(0, 1fr))`, gap: 18 }}>
      {vehicles.map(v => (
        <ListingCard key={v.id} vehicle={v} onClick={() => onSelect && onSelect(v)} />
      ))}
    </div>
  );
};

const FilterRail = ({ filters, onChange }) => {
  const sections = [
    { id: "bodyType", label: "Tipo de vehículo", options: ["Auto", "SUV", "Camioneta", "Moto", "Comercial"] },
    { id: "fuel", label: "Combustible", options: ["Bencina", "Diésel", "Eléctrico", "Híbrido"] },
    { id: "transmission", label: "Transmisión", options: ["Automática", "Manual"] },
  ];
  const toggle = (key, val) => {
    const cur = filters[key] || [];
    const next = cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val];
    onChange({ ...filters, [key]: next });
  };
  return (
    <aside style={{
      background: "var(--bg-canvas)", borderRadius: 12,
      border: "1px solid var(--border)",
      padding: 20, display: "flex", flexDirection: "column", gap: 24,
      position: "sticky", top: 88, alignSelf: "flex-start",
    }}>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--fg-muted)", marginBottom: 10 }}>Precio</div>
        <div style={{ display: "flex", gap: 8 }}>
          <Input prefix="$" placeholder="Mín" defaultValue="5.000.000" />
          <Input prefix="$" placeholder="Máx" defaultValue="30.000.000" />
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--fg-muted)", marginBottom: 10 }}>Año</div>
        <div style={{ display: "flex", gap: 8 }}>
          <Select options={["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"]} defaultValue="2019" />
          <Select options={["2020","2021","2022","2023","2024","2025","2026"]} defaultValue="2024" />
        </div>
      </div>
      {sections.map(s => (
        <div key={s.id}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--fg-muted)", marginBottom: 10 }}>{s.label}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {s.options.map(opt => {
              const checked = (filters[s.id] || []).includes(opt);
              return (
                <label key={opt} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 13, color: "var(--fg)" }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: 4,
                    border: `1.5px solid ${checked ? "var(--fg-strong)" : "var(--border-strong)"}`,
                    background: checked ? "var(--fg-strong)" : "var(--bg-canvas)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                  }}>{checked && <span style={{ color: "white", fontSize: 11, fontWeight: 800 }}>✓</span>}</span>
                  <span style={{ flex: 1 }}>{opt}</span>
                  <input type="checkbox" checked={checked} onChange={() => toggle(s.id, opt)} style={{ display: "none" }} />
                </label>
              );
            })}
          </div>
        </div>
      ))}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--fg-muted)", marginBottom: 10 }}>Atributos</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {["Solo certificados", "Con financiamiento", "Único dueño", "Inspeccionado"].map(label => (
            <label key={label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--fg)", cursor: "pointer" }}>
              <span style={{ width: 30, height: 18, borderRadius: 9999, background: "var(--ink-200)", position: "relative", flexShrink: 0 }}>
                <span style={{ position: "absolute", top: 2, left: 2, width: 14, height: 14, borderRadius: "50%", background: "var(--bg-canvas)" }}></span>
              </span>
              {label}
            </label>
          ))}
        </div>
      </div>
      <button style={{
        marginTop: 8, padding: "10px 0", background: "transparent",
        color: "var(--coral-600)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13,
        border: 0, cursor: "pointer", textAlign: "left",
      }}>Limpiar filtros</button>
    </aside>
  );
};

Object.assign(window, { ListingCard, ListingGrid, FilterRail });
