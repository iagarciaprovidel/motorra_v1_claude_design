/* eslint-disable */
/* Motorra · 2nd screen per direction — proves each aesthetic sustains a system */

const PH2 = "https://images.unsplash.com/photo-";
const Q2  = "?w=1600&h=1100&fit=crop&auto=format&q=70";
const car2 = (id) => PH2 + id + Q2;

const CARS = [
  { id: "1555215695-3004980ad54e", make: "BMW", model: "320i M Sport", year: 2020, km: 52800, price: "$24.990.000", loc: "Vitacura", body: "Sedán" },
  { id: "1593941707882-a5bba14938c7", make: "Hyundai", model: "Tucson Limited", year: 2024, km: 8200, price: "$27.490.000", loc: "La Reina", body: "SUV" },
  { id: "1605559424843-9e4c228bf1c2", make: "Ford", model: "Ranger Limited", year: 2020, km: 78900, price: "$22.990.000", loc: "Maipú", body: "Camioneta" },
  { id: "1560958089-b8a1929cea89", make: "Tesla", model: "Model 3 LR", year: 2023, km: 12400, price: "$32.990.000", loc: "Providencia", body: "Eléctrico" },
  { id: "1568772585407-9361f9bf3a87", make: "Kawasaki", model: "Ninja 400", year: 2022, km: 4800, price: "$5.990.000", loc: "Las Condes", body: "Moto" },
  { id: "1503376780353-7e6692767b70", make: "Mazda", model: "3 GT Touring", year: 2022, km: 28400, price: "$18.490.000", loc: "Providencia", body: "Hatchback" },
];

// ═══════════════════════════════════════════════════════════════════════════
// 01 · TESLA MINIMAL · INVENTARIO — grid denso, low chrome, mucho espacio
// ═══════════════════════════════════════════════════════════════════════════

const Dir1Inventory = () => (
  <div className="ab" style={{ background: "white", padding: "32px 64px", overflow: "hidden" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.04em", display: "inline-flex", alignItems: "baseline" }}>
          Motorra<span style={{ width: 3, height: 8, background: "#FF5B2E", borderRadius: 1.5, marginLeft: 1, alignSelf: "flex-start", marginTop: 2 }}></span>
        </div>
        <span style={{ fontSize: 11, color: "#5A6275", letterSpacing: "0.06em", textTransform: "uppercase" }}>Inventario · Chile · 1.247 vehículos</span>
      </div>
      <div style={{ display: "flex", gap: 32, fontSize: 13, fontWeight: 500, color: "#0E1015" }}>
        <span>Vehículos</span><span>Vender</span><span>Club</span><span style={{ color: "#5A6275" }}>Iniciar</span>
      </div>
    </div>

    {/* Filter row · ultra restrained */}
    <div style={{ display: "flex", gap: 28, padding: "16px 0", borderTop: "1px solid #ECEFF4", borderBottom: "1px solid #ECEFF4", marginBottom: 32, fontSize: 13, color: "#0E1015" }}>
      <span style={{ fontWeight: 600 }}>Categoría</span><span style={{ color: "#5A6275" }}>Marca</span><span style={{ color: "#5A6275" }}>Precio</span><span style={{ color: "#5A6275" }}>Año</span><span style={{ color: "#5A6275" }}>Km</span><span style={{ color: "#5A6275" }}>Combustible</span>
      <span style={{ marginLeft: "auto", fontSize: 12, color: "#5A6275" }}>Orden: Más recientes ↓</span>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
      {CARS.map(c => (
        <div key={c.id}>
          <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", marginBottom: 18 }}>
            <img src={car2(c.id)} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
            <span style={{ fontSize: 11, color: "#5A6275", letterSpacing: "0.05em", textTransform: "uppercase" }}>{c.year} · {c.body}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#5A6275" }}>{c.km.toLocaleString("es-CL")} km</span>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, letterSpacing: "-0.02em", margin: 0, color: "#0E1015" }}>
            {c.make} {c.model}
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 10, paddingTop: 10, borderTop: "1px solid #ECEFF4" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#0E1015", letterSpacing: "-0.015em" }}>{c.price}</span>
            <span style={{ fontSize: 11, color: "#5A6275" }}>{c.loc}</span>
          </div>
        </div>
      ))}
    </div>

    <div style={{ textAlign: "center", marginTop: 48, paddingTop: 32, borderTop: "1px solid #ECEFF4" }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: "#0E1015", display: "inline-flex", alignItems: "center", gap: 6 }}>
        Cargar más resultados <span style={{ fontSize: 16 }}>↓</span>
      </span>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// 02 · AIRBNB · CATEGORÍAS — tile browse with hero photo per category
// ═══════════════════════════════════════════════════════════════════════════

const Dir2Categories = () => {
  const cats = [
    { name: "Autos", body: "Sedán", count: "1.247", photo: "1555215695-3004980ad54e", color: "#E8DCC6" },
    { name: "SUV", body: "SUV", count: "612", photo: "1593941707882-a5bba14938c7", color: "#D4DCC6" },
    { name: "Camionetas", body: "Pickup", count: "534", photo: "1605559424843-9e4c228bf1c2", color: "#E0D6C2" },
    { name: "Motos", body: "Sport", count: "340", photo: "1568772585407-9361f9bf3a87", color: "#DCC8C2" },
    { name: "Eléctricos", body: "EV", count: "184", photo: "1560958089-b8a1929cea89", color: "#C6D8DC" },
    { name: "Comerciales", body: "Van", count: "78", photo: "1503376780353-7e6692767b70", color: "#D8D2C2" },
  ];
  return (
    <div className="ab" style={{ background: "#F4EFE6", padding: "24px 48px", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#FF5B2E", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20 }}>M</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em", color: "#1F1B16" }}>motorra</div>
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 14, fontWeight: 500, color: "#1F1B16" }}>
          <span>Inicio</span><span style={{ fontWeight: 700, borderBottom: "2px solid #FF5B2E", paddingBottom: 4 }}>Explorar</span><span>Club</span><span>Publica tu auto</span>
        </div>
      </div>

      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, letterSpacing: "-0.02em", margin: "32px 0 8px", color: "#1F1B16" }}>
        ¿Qué andas buscando?
      </h1>
      <p style={{ fontSize: 16, color: "#5A4F3C", margin: "0 0 32px" }}>
        Explora por tipo de vehículo, o tírate directo a las listas más vistas.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {cats.map(c => (
          <div key={c.name} style={{ background: c.color, borderRadius: 18, padding: 22, position: "relative", overflow: "hidden", aspectRatio: "1.4/1" }}>
            <div style={{ position: "absolute", right: -20, bottom: -20, width: 200, height: 140, overflow: "hidden", borderRadius: 12 }}>
              <img src={car2(c.photo)} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
            </div>
            <div style={{ position: "relative" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em", margin: 0, color: "#1F1B16" }}>{c.name}</h3>
              <div style={{ fontSize: 13, color: "#5A4F3C", marginTop: 4 }}>{c.count} publicaciones</div>
              <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600, color: "#1F1B16" }}>
                Explorar <span style={{ fontSize: 16 }}>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, padding: 24, background: "white", borderRadius: 16, display: "flex", alignItems: "center", gap: 18, boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: "#FFE4D8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>👑</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "#1F1B16", letterSpacing: "-0.015em" }}>¿Eres uno de los primeros 100?</div>
          <div style={{ fontSize: 13, color: "#5A4F3C", marginTop: 2 }}>Los Fundadores Motorra reciben beneficios permanentes y badge exclusivo. Quedan 53 lugares.</div>
        </div>
        <button style={{ background: "#FF5B2E", color: "white", border: 0, padding: "12px 24px", borderRadius: 9999, fontSize: 14, fontWeight: 600 }}>Unirme al Club</button>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 03 · F1 · FUNDADORES COUNTDOWN — telemetry, urgency, racing tickers
// ═══════════════════════════════════════════════════════════════════════════

const Dir3Founders = () => {
  const slots = [
    { n: "001", name: "ROBERTO C.", ts: "07.MAY.2026", sales: 8 },
    { n: "002", name: "MARÍA P.", ts: "08.MAY.2026", sales: 6 },
    { n: "003", name: "FELIPE S.", ts: "08.MAY.2026", sales: 5 },
    { n: "017", name: "DIEGO L.", ts: "11.MAY.2026", sales: 3 },
    { n: "042", name: "CAROLINA V.", ts: "15.MAY.2026", sales: 3 },
    { n: "047", name: "ANDRÉS C.", ts: "18.MAY.2026", sales: 2 },
  ];
  return (
    <div className="ab" style={{ background: "#0A0A0A", color: "#F5F5F5", padding: "24px 48px", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 4, background: "linear-gradient(90deg, transparent 0%, #FF5B2E 30%, #FF5B2E 70%, transparent 100%)" }}></div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg viewBox="0 0 50 50" style={{ width: 28, height: 28 }}>
            <circle cx="25" cy="25" r="22" fill="none" stroke="#FF5B2E" strokeWidth="2"/>
            <text x="25" y="32" textAnchor="middle" fontSize="20" fontWeight="900" fontFamily="Georgia" fill="#F5F5F5">M</text>
          </svg>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, letterSpacing: "0.06em", textTransform: "uppercase" }}>MOTORRA</span>
          <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "#FF5B2E", border: "1px solid #FF5B2E", padding: "2px 6px", letterSpacing: "0.1em" }}>FUNDADORES · 47 / 100</span>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.12em", color: "#A8A8A8" }}>
          <span>VEHÍCULOS</span><span>VENDER</span><span style={{ color: "#FF5B2E" }}>● CLUB</span><span>ENTRAR</span>
        </div>
      </div>

      {/* Massive headline */}
      <div style={{ borderTop: "1px solid rgba(255,91,46,0.3)", borderBottom: "1px solid rgba(255,91,46,0.3)", padding: "32px 0", marginBottom: 32 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#FF5B2E", fontWeight: 700, letterSpacing: "0.16em", marginBottom: 14 }}>// MEMBERSHIP · PADDOCK ACCESS</div>
        <h1 style={{ fontFamily: "Impact, Haettenschweiler, sans-serif", fontWeight: 900, fontSize: 92, lineHeight: 0.86, letterSpacing: "-0.02em", margin: 0, color: "#F5F5F5", textTransform: "uppercase" }}>
          53 LUGARES.<br/>UNA SOLA OPORTUNIDAD.
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 36 }}>
        {/* LEFT — countdown + benefits */}
        <div>
          {/* Countdown */}
          <div style={{ background: "rgba(255,91,46,0.06)", border: "1px solid rgba(255,91,46,0.3)", padding: 18, marginBottom: 24, fontFamily: "var(--font-mono)" }}>
            <div style={{ fontSize: 10, color: "#FF5B2E", fontWeight: 700, letterSpacing: "0.18em", marginBottom: 14 }}>// CIERRE DE INSCRIPCIÓN FUNDADORES</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
              {[
                { v: "28", l: "DÍAS" },
                { v: "12", l: "HORAS" },
                { v: "47", l: "MIN" },
                { v: "08", l: "SEG" },
              ].map(t => (
                <div key={t.l} style={{ borderTop: "1px solid #FF5B2E" }}>
                  <div style={{ fontFamily: "Impact, sans-serif", fontSize: 56, fontWeight: 900, lineHeight: 1, color: "#FF5B2E", letterSpacing: "-0.02em" }}>{t.v}</div>
                  <div style={{ fontSize: 9, color: "#A8A8A8", letterSpacing: "0.12em", marginTop: 4 }}>{t.l}</div>
                </div>
              ))}
            </div>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "#F5F5F5", letterSpacing: "-0.015em", marginTop: 0, marginBottom: 14 }}>
            BENEFICIOS · FOREVER
          </h3>
          {[
            { n: "01", t: "0% comisión vitalicio", d: "Cuando cobremos, tú sigues gratis." },
            { n: "02", t: "Badge dorado #001–#100", d: "Visible en tu perfil y publicaciones." },
            { n: "03", t: "Acceso anticipado a features", d: "Prueba todo antes que cualquier otro miembro." },
            { n: "04", t: "Comunidad privada", d: "Discord exclusivo de fundadores + eventos." },
          ].map(b => (
            <div key={b.n} style={{ display: "flex", gap: 14, padding: "12px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "#FF5B2E", fontWeight: 700, minWidth: 28 }}>{b.n}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#F5F5F5" }}>{b.t}</div>
                <div style={{ fontSize: 12, color: "#A8A8A8", marginTop: 2 }}>{b.d}</div>
              </div>
            </div>
          ))}
          <button style={{ marginTop: 22, background: "#FF5B2E", color: "#0A0A0A", border: 0, padding: "16px 32px", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            ► RECLAMAR LUGAR #048
          </button>
        </div>

        {/* RIGHT — leaderboard */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", padding: 18 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#FF5B2E", fontWeight: 700, letterSpacing: "0.18em", marginBottom: 14 }}>// FUNDADORES ACTIVOS</div>
          {slots.map(s => (
            <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-mono)" }}>
              <div style={{ width: 34, fontSize: 13, color: "#FF5B2E", fontWeight: 700 }}>#{s.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#F5F5F5", letterSpacing: "0.04em" }}>{s.name}</div>
                <div style={{ fontSize: 9, color: "#7A7A7A", letterSpacing: "0.12em", marginTop: 2 }}>{s.ts}</div>
              </div>
              <div style={{ fontSize: 11, color: "#A8A8A8" }}>{s.sales} <span style={{ color: "#6B7280" }}>vts</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 04 · APPLE TAKEOVER · FICHA — single product, huge type, page-takeover
// ═══════════════════════════════════════════════════════════════════════════

const Dir4Detail = () => (
  <div className="ab" style={{ background: "#FFFFFF", overflow: "hidden" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 13, color: "#1D1D1F" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.03em" }}>Motorra</span>
        <span>Vehículos</span><span>Vender</span><span style={{ color: "#86868B" }}>Club</span><span style={{ color: "#86868B" }}>Soporte</span>
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#1D1D1F" }}>
        <i data-lucide="search" style={{ width: 16, height: 16 }}/><i data-lucide="user" style={{ width: 16, height: 16 }}/>
      </div>
    </div>

    <div style={{ padding: "44px 64px 0", textAlign: "center" }}>
      <div style={{ fontSize: 12, color: "#86868B", fontWeight: 500, marginBottom: 8 }}>2023 · Eléctrico · Único dueño</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 104, lineHeight: 1, letterSpacing: "-0.045em", margin: 0, color: "#1D1D1F", fontVariationSettings: '"opsz" 96' }}>
        Tesla Model 3.
      </h1>
      <p style={{ fontSize: 26, color: "#1D1D1F", marginTop: 14, fontWeight: 500 }}>
        Autonomía 580 km. Autopilot incluido.
      </p>
      <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 24, fontSize: 14, color: "#1D1D1F", alignItems: "baseline" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 32, letterSpacing: "-0.02em" }}>$32.990.000</span>
        <span style={{ color: "#86868B" }}>o desde $419.000/mes con financiamiento*</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 22 }}>
        <button style={{ background: "#0071E3", color: "white", border: 0, padding: "12px 26px", borderRadius: 9999, fontSize: 15, fontWeight: 500 }}>Comprar</button>
        <button style={{ background: "transparent", color: "#0071E3", border: 0, padding: "12px 8px", fontSize: 15, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 4 }}>
          Contactar vendedor <span>›</span>
        </button>
      </div>
    </div>

    <div style={{ width: "100%", maxWidth: 1100, margin: "32px auto 0", aspectRatio: "16/8", overflow: "hidden" }}>
      <img src={car2("1560958089-b8a1929cea89")} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
    </div>

    {/* Spec row */}
    <div style={{ background: "#F5F5F7", padding: "32px 64px", marginTop: 28 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28, maxWidth: 1100, margin: "0 auto" }}>
        {[
          { v: "580", u: "km", l: "Autonomía" },
          { v: "12.400", u: "km", l: "Kilometraje" },
          { v: "5.8", u: "seg 0-100", l: "Aceleración" },
          { v: "240", u: "puntos", l: "Inspección" },
        ].map(s => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 44, color: "#1D1D1F", letterSpacing: "-0.02em", lineHeight: 1 }}>
              {s.v}<span style={{ fontSize: 18, color: "#86868B", fontWeight: 400, marginLeft: 4 }}>{s.u}</span>
            </div>
            <div style={{ fontSize: 12, color: "#86868B", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// 05 · DISCORD · PERFIL DE MIEMBRO — badges, historial, comunidad
// ═══════════════════════════════════════════════════════════════════════════

const Dir5Profile = () => {
  const badges = [
    { e: "👑", n: "Fundador #042", c: "Permanente" },
    { e: "🏆", n: "Top 50 mayo", c: "vencido 31.05" },
    { e: "⚡", n: "Respuesta rápida", c: "< 1h promedio" },
    { e: "✅", n: "Verificado", c: "Identidad + papeles" },
    { e: "🔥", n: "3 ventas en 90d", c: "Trader activo" },
  ];
  const history = [
    { y: "2020", model: "BMW 320i M Sport", sold: "vendido · $24.990.000 · 12d", buyer: "Diego L." },
    { y: "2022", model: "Mazda CX-5 GT AWD", sold: "vendido · $22.900.000 · 6d", buyer: "Andrés C." },
    { y: "2018", model: "VW Golf GTI", sold: "vendido · $13.800.000 · 21d", buyer: "Felipe S." },
  ];
  return (
    <div className="ab" style={{ background: "#1E2030", color: "#E5E7EB", display: "grid", gridTemplateColumns: "240px 1fr", overflow: "hidden" }}>
      {/* Sidebar collapsed */}
      <aside style={{ background: "#171825", padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 8px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 14 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "#FF5B2E", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, color: "white", fontSize: 16 }}>M</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>Motorra Club</div>
            <div style={{ fontSize: 10, color: "#6B7280" }}>1.247 miembros</div>
          </div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", padding: "6px 4px", marginBottom: 4 }}>NAVEGAR</div>
        {[
          { icon: "home", l: "Inicio" },
          { icon: "compass", l: "Explorar" },
          { icon: "user", l: "Mi perfil", active: true },
          { icon: "heart", l: "Favoritos" },
          { icon: "crown", l: "Fundadores" },
          { icon: "message-circle", l: "Mensajes" },
        ].map(it => (
          <div key={it.l} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 6, background: it.active ? "rgba(255,91,46,0.12)" : "transparent", color: it.active ? "#FF5B2E" : "#A1A6B5", fontSize: 13, fontWeight: 500, marginBottom: 2 }}>
            <i data-lucide={it.icon} style={{ width: 14, height: 14 }}/> {it.l}
          </div>
        ))}
      </aside>

      <main style={{ padding: "28px 32px", overflow: "hidden" }}>
        {/* Profile header */}
        <div style={{ background: "linear-gradient(135deg, rgba(255,91,46,0.18) 0%, transparent 70%)", border: "1px solid rgba(255,91,46,0.3)", borderRadius: 14, padding: "22px 24px", display: "flex", alignItems: "center", gap: 22, marginBottom: 22 }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#FF5B2E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 800, color: "white", border: "3px solid #FFA570" }}>C</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, margin: 0, color: "#F3F4F6", letterSpacing: "-0.015em" }}>Carolina V.</h1>
              <span style={{ fontSize: 11, padding: "3px 9px", background: "rgba(255,91,46,0.2)", color: "#FFB088", borderRadius: 4, fontWeight: 700 }}>👑 FUNDADOR #042</span>
            </div>
            <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 4 }}>Vitacura, Santiago · Miembro desde 15.MAY.2026 · Última actividad hace 12 min</div>
            <div style={{ display: "flex", gap: 18, marginTop: 10, fontSize: 12, color: "#D1D5DB" }}>
              <span><b style={{ color: "#F3F4F6", fontWeight: 700 }}>3</b> ventas</span>
              <span><b style={{ color: "#F3F4F6", fontWeight: 700 }}>1</b> publicación activa</span>
              <span>★ <b style={{ color: "#FF7E58", fontWeight: 700 }}>4.9</b> de 11 reseñas</span>
              <span style={{ color: "#22C55E" }}>● Conectada</span>
            </div>
          </div>
          <button style={{ background: "#FF5B2E", color: "white", border: 0, padding: "10px 18px", borderRadius: 8, fontWeight: 600, fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <i data-lucide="message-circle" style={{ width: 14, height: 14 }}/> Enviar mensaje
          </button>
        </div>

        {/* Badges */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", marginBottom: 10 }}>BADGES · 5 DESBLOQUEADAS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
            {badges.map(b => (
              <div key={b.n} style={{ background: "#272A3E", padding: "14px 12px", borderRadius: 10, textAlign: "center" }}>
                <div style={{ fontSize: 24 }}>{b.e}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#F3F4F6", marginTop: 6 }}>{b.n}</div>
                <div style={{ fontSize: 9, color: "#9CA3AF", marginTop: 2 }}>{b.c}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Historial de ventas */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", marginBottom: 10 }}>HISTORIAL · TRANSACCIONES</div>
          {history.map(h => (
            <div key={h.model} style={{ background: "#272A3E", borderRadius: 8, padding: 14, marginBottom: 8, display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 60, height: 42, background: "#1E2030", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "#9CA3AF" }}>{h.y}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#F3F4F6" }}>{h.model}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{h.sold} · comprador {h.buyer}</div>
              </div>
              <div style={{ padding: "3px 8px", background: "rgba(34,197,94,0.15)", color: "#86EFAC", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>✓ CERRADO</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

Object.assign(window, { Dir1Inventory, Dir2Categories, Dir3Founders, Dir4Detail, Dir5Profile });
