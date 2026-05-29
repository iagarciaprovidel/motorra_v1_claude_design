/* eslint-disable */
/* Motorra · Artboards — 1 Logo card + 5 distinct Home directions
   Each direction commits to a separate visual language.
   ALL artboards are 1280×800 except logos card (1280×520).
*/

const PH = "https://images.unsplash.com/photo-";
const Q  = "?w=1600&h=1100&fit=crop&auto=format&q=70";
const car = (id) => PH + id + Q;

// ═══════════════════════════════════════════════════════════════════════════
// LOGO · "Club Motorra" — 4 variants
// ═══════════════════════════════════════════════════════════════════════════

const LogoVariants = () => (
  <div style={{ position: "absolute", inset: 0, background: "#FAF7F0", padding: 36, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
    <LogoCard title="01 · Crest stitched" note="Vintage racing club. Sello con borde cosido, M con bandera cuadriculada y notch coral.">
      <svg viewBox="0 0 200 200" style={{ width: 180, height: 180 }}>
        <defs>
          <path id="topArc" d="M 30 100 A 70 70 0 0 1 170 100" fill="none"/>
          <path id="botArc" d="M 30 110 A 70 70 0 0 0 170 110" fill="none"/>
        </defs>
        <circle cx="100" cy="100" r="86" fill="#0E1015"/>
        <circle cx="100" cy="100" r="78" fill="none" stroke="#FAF7F0" strokeWidth="1" strokeDasharray="3 4"/>
        <circle cx="100" cy="100" r="62" fill="#FAF7F0"/>
        <g transform="translate(100, 100)">
          <text textAnchor="middle" y="-6" fontFamily="Georgia, serif" fontWeight="900" fontSize="46" fill="#0E1015" letterSpacing="-2">M</text>
          <rect x="-2" y="22" width="4" height="14" fill="#FF5B2E"/>
          <g transform="translate(-30, 28)" fill="#0E1015">
            <rect x="0" y="0" width="6" height="4"/><rect x="6" y="4" width="6" height="4"/><rect x="12" y="0" width="6" height="4"/>
          </g>
          <g transform="translate(24, 28)" fill="#0E1015">
            <rect x="0" y="0" width="6" height="4"/><rect x="6" y="4" width="6" height="4"/><rect x="12" y="0" width="6" height="4"/>
          </g>
        </g>
        <text fontSize="11" fontFamily="system-ui" fontWeight="700" fill="#FAF7F0" letterSpacing="3"><textPath href="#topArc" startOffset="50%" textAnchor="middle">CLUB MOTORRA</textPath></text>
        <text fontSize="9" fontFamily="system-ui" fontWeight="600" fill="#FAF7F0" letterSpacing="3"><textPath href="#botArc" startOffset="50%" textAnchor="middle">EST. 2026 · CHILE</textPath></text>
      </svg>
    </LogoCard>

    <LogoCard title="02 · Hex member" note="Badge hexagonal moderno. CM entrelazadas. Coral racing stripe. Vibe community card.">
      <svg viewBox="0 0 200 200" style={{ width: 180, height: 180 }}>
        <defs><linearGradient id="hexGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1A1E26"/><stop offset="100%" stopColor="#0E1015"/></linearGradient></defs>
        <polygon points="100,20 168,60 168,140 100,180 32,140 32,60" fill="url(#hexGrad)"/>
        <polygon points="100,28 161,63 161,137 100,172 39,137 39,63" fill="none" stroke="#FF5B2E" strokeWidth="2"/>
        <g transform="translate(100, 105)" textAnchor="middle">
          <text fontFamily="system-ui" fontWeight="900" fontSize="62" fill="#FAF7F0" letterSpacing="-6" dx="-10">C</text>
          <text fontFamily="system-ui" fontWeight="900" fontSize="62" fill="#FF5B2E" letterSpacing="-6" dx="10">M</text>
        </g>
        <line x1="60" y1="140" x2="140" y2="140" stroke="#FF5B2E" strokeWidth="2"/>
        <text x="100" y="158" fontSize="8" fontFamily="system-ui" fontWeight="700" fill="#FAF7F0" textAnchor="middle" letterSpacing="3">MOTORRA CLUB</text>
      </svg>
    </LogoCard>

    <LogoCard title="03 · Speedometer" note="Tacómetro como mark. Aguja coral apuntando al máximo. Wordmark Bricolage abajo.">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <svg viewBox="0 0 200 130" style={{ width: 180, height: 117 }}>
          <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#0E1015" strokeWidth="3"/>
          {[0,1,2,3,4,5,6,7,8].map(i => {
            const ang = (Math.PI * (i/8)) + Math.PI;
            const x1 = 100 + Math.cos(ang)*80, y1 = 100 + Math.sin(ang)*80;
            const x2 = 100 + Math.cos(ang)*72, y2 = 100 + Math.sin(ang)*72;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0E1015" strokeWidth={i%2===0?3:1}/>;
          })}
          <line x1="100" y1="100" x2="158" y2="55" stroke="#FF5B2E" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="100" cy="100" r="8" fill="#0E1015"/>
          <circle cx="100" cy="100" r="4" fill="#FF5B2E"/>
        </svg>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", fontVariationSettings: '"opsz" 60', color: "#0E1015", lineHeight: 1, display: "inline-flex", alignItems: "baseline" }}>
          Motorra<span style={{ width: 3, height: 9, background: "#FF5B2E", borderRadius: 1.5, marginLeft: 1, alignSelf: "flex-start", marginTop: 1 }}></span>
        </div>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", color: "#5A6275" }}>CLUB · CL</div>
      </div>
    </LogoCard>

    <LogoCard title="04 · Italian shield" note="Escudo bipartito tipo Alfa / Ferrari. CM gótico. Premium racing heritage.">
      <svg viewBox="0 0 180 200" style={{ width: 160, height: 178 }}>
        <defs><clipPath id="shield"><path d="M 20 20 L 160 20 L 160 110 Q 160 170 90 188 Q 20 170 20 110 Z"/></clipPath></defs>
        <g clipPath="url(#shield)">
          <rect x="0" y="0" width="90" height="200" fill="#0E1015"/>
          <rect x="90" y="0" width="90" height="200" fill="#FF5B2E"/>
        </g>
        <path d="M 20 20 L 160 20 L 160 110 Q 160 170 90 188 Q 20 170 20 110 Z" fill="none" stroke="#0E1015" strokeWidth="4"/>
        <text x="90" y="115" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="900" fontSize="78" fill="#FAF7F0" letterSpacing="-12">CM</text>
        <text x="90" y="148" textAnchor="middle" fontSize="9" fontFamily="system-ui" fontWeight="700" fill="#FAF7F0" letterSpacing="3">CLUB MOTORRA</text>
        <text x="90" y="164" textAnchor="middle" fontSize="7" fontFamily="system-ui" fontWeight="600" fill="#FAF7F0" letterSpacing="2" opacity="0.7">CHILE · MMXXVI</text>
      </svg>
    </LogoCard>
  </div>
);

const LogoCard = ({ title, note, children }) => (
  <div style={{ background: "white", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", border: "1px solid #ECEFF4", boxShadow: "0 1px 2px rgba(14,16,21,0.04)" }}>
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>{children}</div>
    <div style={{ marginTop: 18, textAlign: "center" }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: "#0E1015", marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 11, color: "#5A6275", lineHeight: 1.5, maxWidth: 240 }}>{note}</div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// 01 · TESLA / STRIPE — minimal premium · whitespace · light type
// ═══════════════════════════════════════════════════════════════════════════

const Home1Minimal = () => (
  <div className="ab" style={{ background: "white", padding: "32px 64px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 80 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.04em", display: "inline-flex", alignItems: "baseline" }}>
          Motorra<span style={{ width: 3, height: 8, background: "#FF5B2E", borderRadius: 1.5, marginLeft: 1, alignSelf: "flex-start", marginTop: 2 }}></span>
        </div>
        <span style={{ fontSize: 11, color: "#5A6275", letterSpacing: "0.06em", textTransform: "uppercase" }}>· Chile</span>
      </div>
      <div style={{ display: "flex", gap: 32, fontSize: 13, fontWeight: 500, color: "#0E1015" }}>
        <span>Vehículos</span><span>Vender</span><span>Club</span><span style={{ color: "#5A6275" }}>Iniciar</span>
      </div>
    </div>
    <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 56, alignItems: "center" }}>
      <div>
        <div style={{ fontSize: 11, color: "#5A6275", fontWeight: 500, marginBottom: 28, letterSpacing: "0.04em", textTransform: "uppercase" }}>
          Marketplace especializado · Compra y venta · Chile
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 100, lineHeight: 0.95, letterSpacing: "-0.04em", margin: 0, color: "#0E1015", fontVariationSettings: '"opsz" 96' }}>
          Tu próximo<br/>vehículo,<br/>
          <span style={{ fontWeight: 700, position: "relative" }}>
            sin vueltas.
            <span style={{ position: "absolute", left: 0, right: 0, bottom: 6, height: 5, background: "#FF5B2E" }}></span>
          </span>
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 48 }}>
          <button style={{ background: "#0E1015", color: "white", border: 0, padding: "16px 32px", borderRadius: 9999, fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
            Comenzar <span style={{ fontSize: 18 }}>→</span>
          </button>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#0E1015" }}>Ver inventario</span>
        </div>
      </div>
      <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
        <img src={car("1560958089-b8a1929cea89")} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #ECEFF4", paddingTop: 16, marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 10, color: "#5A6275", letterSpacing: "0.08em", textTransform: "uppercase" }}>
      <span>v.0.1.0 · BETA</span><span>0% Comisión · 3 min para publicar</span><span>Lanzamiento Q3 2026 · CL</span>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// 02 · AIRBNB / NOTION — warm, friendly, photo-forward
// ═══════════════════════════════════════════════════════════════════════════

const Home2Airbnb = () => (
  <div className="ab" style={{ background: "#F4EFE6", padding: "20px 40px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "#FF5B2E", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20 }}>M</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em", color: "#1F1B16" }}>motorra</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 0, background: "white", borderRadius: 9999, padding: "6px 6px 6px 20px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1F1B16" }}>Comprar</span>
        <span style={{ width: 1, height: 18, background: "#E5DECC", margin: "0 14px" }}></span>
        <span style={{ fontSize: 13, color: "#5A4F3C" }}>Cualquier marca</span>
        <span style={{ width: 1, height: 18, background: "#E5DECC", margin: "0 14px" }}></span>
        <span style={{ fontSize: 13, color: "#5A4F3C" }}>Toda Chile</span>
        <span style={{ width: 36, height: 36, borderRadius: "50%", background: "#FF5B2E", display: "inline-flex", alignItems: "center", justifyContent: "center", marginLeft: 10, color: "white" }}><i data-lucide="search" style={{ width: 16, height: 16 }}/></span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1F1B16" }}>Publica tu auto</span>
        <span style={{ width: 36, height: 36, borderRadius: "50%", background: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}><i data-lucide="user" style={{ width: 16, height: 16, color: "#1F1B16" }}/></span>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32, height: "calc(100% - 100px)" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 10px", background: "white", borderRadius: 9999, fontSize: 12, fontWeight: 600, color: "#1F1B16", marginBottom: 18, alignSelf: "flex-start" }}>
          🇨🇱 Llegó Motorra a Chile · Sin comisión
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 60, lineHeight: 1.02, letterSpacing: "-0.025em", margin: 0, color: "#1F1B16" }}>
          Encontrá el auto<br/>que <em style={{ fontStyle: "italic", fontWeight: 500, color: "#B33310" }}>te gusta de verdad</em>.
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: "#5A4F3C", marginTop: 20, maxWidth: 440 }}>
          1.200+ vehículos de particulares y dealers de confianza en todo Chile. Sin destacados pagos, sin comisión durante el lanzamiento.
        </p>
        <div style={{ marginTop: 30 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#8B7E66", marginBottom: 10 }}>Recién publicados</div>
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { p: "1555215695-3004980ad54e", t: "BMW 320i", price: "$24.990k" },
              { p: "1593941707882-a5bba14938c7", t: "Tucson", price: "$27.490k" },
              { p: "1605559424843-9e4c228bf1c2", t: "Ranger", price: "$22.990k" },
              { p: "1568772585407-9361f9bf3a87", t: "Ninja 400", price: "$5.990k" },
            ].map(c => (
              <div key={c.p} style={{ flex: 1, background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ aspectRatio: "1/1", overflow: "hidden" }}><img src={car(c.p)} style={{ width: "100%", height: "100%", objectFit: "cover" }}/></div>
                <div style={{ padding: "8px 10px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#1F1B16" }}>{c.t}</div>
                  <div style={{ fontSize: 10, color: "#8B7E66", fontFamily: "var(--font-mono)" }}>{c.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ position: "relative", borderRadius: 20, overflow: "hidden" }}>
        <img src={car("1503376780353-7e6692767b70")} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
        <div style={{ position: "absolute", left: 20, bottom: 20, right: 20, background: "white", borderRadius: 14, padding: 16, display: "flex", alignItems: "center", gap: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
          <div style={{ width: 52, height: 52, borderRadius: 10, overflow: "hidden", flexShrink: 0 }}><img src={car("1555215695-3004980ad54e")} style={{ width: "100%", height: "100%", objectFit: "cover" }}/></div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#1F1B16" }}>2020 BMW 320i M Sport</div>
            <div style={{ fontSize: 11, color: "#8B7E66", marginTop: 1 }}>52.800 km · Vitacura · Carolina V.</div>
            <div style={{ fontSize: 11, color: "#FF5B2E", fontWeight: 700, marginTop: 2 }}>★ 4.9 · Fundador #042</div>
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#1F1B16", letterSpacing: "-0.02em" }}>$24.990k</div>
        </div>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// 03 · PORSCHE / F1 — racing dramatic · black + coral · telemetry
// ═══════════════════════════════════════════════════════════════════════════

const Home3Racing = () => (
  <div className="ab" style={{ background: "#0A0A0A", color: "#F5F5F5", padding: "24px 56px", overflow: "hidden" }}>
    {/* Racing stripe */}
    <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 4, background: "linear-gradient(90deg, transparent 0%, #FF5B2E 30%, #FF5B2E 70%, transparent 100%)" }}></div>
    {/* Background giant numeral */}
    <div style={{ position: "absolute", right: -60, bottom: -120, fontFamily: "Impact, sans-serif", fontWeight: 900, fontSize: 460, lineHeight: 1, color: "rgba(255,91,46,0.06)", letterSpacing: "-0.06em", pointerEvents: "none", userSelect: "none" }}>01</div>

    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, position: "relative", zIndex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <svg viewBox="0 0 50 50" style={{ width: 32, height: 32 }}>
          <circle cx="25" cy="25" r="22" fill="none" stroke="#FF5B2E" strokeWidth="2"/>
          <text x="25" y="32" textAnchor="middle" fontSize="20" fontWeight="900" fontFamily="Georgia" fill="#F5F5F5">M</text>
        </svg>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, letterSpacing: "0.06em", textTransform: "uppercase" }}>MOTORRA</span>
        <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "#FF5B2E", border: "1px solid #FF5B2E", padding: "2px 6px", letterSpacing: "0.1em" }}>RACING DIVISION · CL</span>
      </div>
      <div style={{ display: "flex", gap: 28, fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A8A8A8" }}>
        <span>VEHÍCULOS</span><span>VENDER</span><span style={{ color: "#FF5B2E" }}>● CLUB</span><span>ENTRAR</span>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40, position: "relative", zIndex: 1 }}>
      <div style={{ paddingTop: 30 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 24 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#FF5B2E", fontWeight: 700, letterSpacing: "0.16em" }}>// LAP 01 · LANZAMIENTO</span>
          <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #FF5B2E, transparent)" }}></span>
        </div>
        <h1 style={{ fontFamily: "Impact, Haettenschweiler, sans-serif", fontWeight: 900, fontSize: 124, lineHeight: 0.86, letterSpacing: "-0.02em", margin: 0, color: "#F5F5F5", textTransform: "uppercase" }}>
          Publica.<br/>Vende.<br/><span style={{ color: "#FF5B2E" }}>Punto.</span>
        </h1>
        <p style={{ fontSize: 14, color: "#A8A8A8", marginTop: 24, maxWidth: 420, lineHeight: 1.55 }}>
          El club automotriz de Chile. 0 comisiones, 0 destacados pagos, 0 fricción. Solo motor y kilometraje.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
          <button style={{ background: "#FF5B2E", color: "#0A0A0A", border: 0, padding: "16px 28px", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span>► INICIAR PUBLICACIÓN</span>
          </button>
          <button style={{ background: "transparent", color: "#F5F5F5", border: "1px solid rgba(255,255,255,0.2)", padding: "16px 24px", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            VER PADDOCK
          </button>
        </div>
      </div>

      {/* Telemetry panel + car silhouette */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: 300, borderRadius: 4, overflow: "hidden", transform: "perspective(800px) rotateY(-8deg)" }}>
          <img src={car("1503376780353-7e6692767b70")} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.7) contrast(1.1)" }}/>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,91,46,0.15), transparent 60%)" }}></div>
        </div>
        <div style={{ position: "absolute", top: 320, left: 0, right: 0, background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,91,46,0.4)", padding: 18, fontFamily: "var(--font-mono)" }}>
          <div style={{ fontSize: 9, color: "#FF5B2E", fontWeight: 700, letterSpacing: "0.18em", marginBottom: 12 }}>// TELEMETRY · LIVE</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {[
              { l: "PUBL/HR", v: "23.4", u: "vehicles" },
              { l: "PROMEDIO", v: "$18.4M", u: "CLP" },
              { l: "MIEMBROS", v: "047", u: "of 100" },
              { l: "UPTIME", v: "99.98%", u: "30d" },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontSize: 9, color: "#7A7A7A", letterSpacing: "0.1em" }}>{s.l}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#F5F5F5", lineHeight: 1.1, marginTop: 2 }}>{s.v}</div>
                <div style={{ fontSize: 9, color: "#A8A8A8" }}>{s.u}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// 04 · APPLE — ultra simple · gigantic type · 1 product · 1 CTA
// ═══════════════════════════════════════════════════════════════════════════

const Home4Apple = () => (
  <div className="ab" style={{ background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 13, color: "#1D1D1F" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.03em" }}>Motorra</span>
        <span>Vehículos</span><span>Vender</span><span>Club</span><span>Soporte</span>
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#1D1D1F" }}>
        <i data-lucide="search" style={{ width: 16, height: 16 }}/><i data-lucide="user" style={{ width: 16, height: 16 }}/>
      </div>
    </div>

    <div style={{ flex: 1, padding: "64px 48px 0", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ fontSize: 13, color: "#86868B", marginBottom: 8, fontWeight: 500 }}>
        Motorra Club · Chile
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 124, lineHeight: 0.95, letterSpacing: "-0.05em", margin: 0, color: "#1D1D1F", fontVariationSettings: '"opsz" 96', maxWidth: 1080 }}>
        Comprar tu auto.<br/>Por fin, fácil.
      </h1>
      <p style={{ fontSize: 24, color: "#1D1D1F", marginTop: 22, maxWidth: 720, lineHeight: 1.25, fontWeight: 500 }}>
        Un marketplace pensado para gente que sólo quiere encontrar su próximo vehículo.
      </p>
      <div style={{ display: "flex", gap: 16, marginTop: 32, fontSize: 17, fontWeight: 500 }}>
        <button style={{ background: "#FF5B2E", color: "white", border: 0, padding: "14px 28px", borderRadius: 9999, fontSize: 15, fontWeight: 500 }}>Buscar vehículos</button>
        <button style={{ background: "transparent", color: "#FF5B2E", border: 0, padding: "14px 8px", fontSize: 15, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 4 }}>
          Conocer más <span>›</span>
        </button>
      </div>
      <div style={{ marginTop: 48, position: "relative", width: "100%", maxWidth: 980, aspectRatio: "16/7", borderRadius: 0, overflow: "hidden" }}>
        <img src={car("1503376780353-7e6692767b70")} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// 05 · DISCORD COMMUNITY — sidebar + feed + leaderboard · club social
// ═══════════════════════════════════════════════════════════════════════════

const Home5Club = () => {
  const channels = [
    { sect: "MOTORRA · CHILE", items: [
      { name: "anuncios", icon: "megaphone", count: null },
      { name: "general", icon: "hash", count: null, active: true },
      { name: "ayuda", icon: "life-buoy", count: null },
    ]},
    { sect: "CATEGORÍAS", items: [
      { name: "autos", icon: "car", count: "1.2k" },
      { name: "motos", icon: "bike", count: "340" },
      { name: "camionetas", icon: "truck", count: "612" },
      { name: "eléctricos", icon: "zap", count: "184" },
    ]},
    { sect: "CLUB FUNDADORES", items: [
      { name: "fundadores-100", icon: "crown", count: "47/100" },
      { name: "encuentros", icon: "calendar", count: null },
    ]},
  ];
  const posts = [
    { user: "Carolina V.", badge: "Fundador #042", time: "hace 12 min", photo: "1555215695-3004980ad54e", text: "Vendo mi BMW 320i M Sport. Único dueño, mantención BMW al día. Acepto ofertas razonables 🔥", car: { name: "2020 BMW 320i M Sport", price: "$24.990.000", km: "52.800 km", loc: "Vitacura" } },
    { user: "Diego L.", badge: "Fundador #018", time: "hace 1 h", photo: "1560958089-b8a1929cea89", text: "Tesla Model 3 LR — 12 mil km — autopilot activado. Cambio por algo más familiar.", car: { name: "2023 Tesla Model 3 LR", price: "$32.990.000", km: "12.400 km", loc: "Providencia" } },
  ];
  const members = [
    { n: 1, name: "Roberto C.", badge: "🏆 #001", sales: 8 },
    { n: 2, name: "María P.", badge: "🥈 #002", sales: 6 },
    { n: 3, name: "Felipe S.", badge: "🥉 #003", sales: 5 },
    { n: 4, name: "Carolina V.", badge: "#042", sales: 3 },
  ];

  return (
    <div className="ab" style={{ background: "#1E2030", color: "#E5E7EB", display: "grid", gridTemplateColumns: "240px 1fr 280px", height: "100%" }}>
      {/* Channel sidebar */}
      <aside style={{ background: "#171825", padding: "18px 12px", display: "flex", flexDirection: "column", gap: 4, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 8px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 14 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "#FF5B2E", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, color: "white", fontSize: 16 }}>M</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>Motorra Club</div>
            <div style={{ fontSize: 10, color: "#6B7280" }}>1.247 miembros · Chile</div>
          </div>
        </div>
        {channels.map(s => (
          <div key={s.sect} style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", padding: "6px 8px" }}>{s.sect}</div>
            {s.items.map(it => (
              <div key={it.name} style={{
                display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 6,
                background: it.active ? "rgba(255,91,46,0.12)" : "transparent",
                color: it.active ? "#FF5B2E" : "#A1A6B5", fontSize: 13, fontWeight: 500, cursor: "pointer",
              }}>
                <i data-lucide={it.icon} style={{ width: 14, height: 14 }}/>
                <span style={{ flex: 1 }}>{it.name}</span>
                {it.count && <span style={{ fontSize: 10, color: "#6B7280", fontFamily: "var(--font-mono)" }}>{it.count}</span>}
              </div>
            ))}
          </div>
        ))}
      </aside>

      {/* Feed */}
      <main style={{ padding: "20px 28px", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600 }}># general</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, margin: "4px 0 0", color: "#F3F4F6", letterSpacing: "-0.01em" }}>Lo último del club.</h1>
          </div>
          <button style={{ background: "#FF5B2E", color: "white", border: 0, padding: "10px 16px", borderRadius: 8, fontWeight: 600, fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <i data-lucide="plus" style={{ width: 14, height: 14 }}/> Publicar
          </button>
        </div>
        {posts.map(p => (
          <div key={p.user} style={{ background: "#272A3E", borderRadius: 10, padding: 16, marginBottom: 12, display: "flex", gap: 14 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#FF5B2E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, color: "white", fontSize: 14 }}>{p.user[0]}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 13, color: "#F3F4F6" }}>{p.user}</span>
                <span style={{ fontSize: 10, padding: "2px 6px", background: "rgba(255,91,46,0.15)", color: "#FF7E58", borderRadius: 4, fontWeight: 700, letterSpacing: "0.04em" }}>👑 {p.badge}</span>
                <span style={{ fontSize: 11, color: "#6B7280" }}>· {p.time}</span>
              </div>
              <div style={{ fontSize: 13, color: "#D1D5DB", marginBottom: 10, lineHeight: 1.5 }}>{p.text}</div>
              <div style={{ display: "flex", gap: 10, background: "#1E2030", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: 8, alignItems: "center" }}>
                <img src={car(p.photo)} style={{ width: 80, height: 56, objectFit: "cover", borderRadius: 6 }}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: "#F3F4F6" }}>{p.car.name}</div>
                  <div style={{ fontSize: 11, color: "#9CA3AF" }}>{p.car.km} · {p.car.loc}</div>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#FF5B2E", letterSpacing: "-0.01em", fontSize: 16 }}>{p.car.price}</div>
              </div>
              <div style={{ display: "flex", gap: 14, marginTop: 10, fontSize: 11, color: "#9CA3AF" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><i data-lucide="heart" style={{ width: 12, height: 12 }}/> 24</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><i data-lucide="message-circle" style={{ width: 12, height: 12 }}/> 8</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#22C55E" }}><i data-lucide="message-circle-more" style={{ width: 12, height: 12 }}/> WhatsApp</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Leaderboard */}
      <aside style={{ background: "#171825", padding: "20px 16px", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", marginBottom: 12 }}>🏆 TOP MIEMBROS</div>
        {members.map(m => (
          <div key={m.n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ width: 24, fontSize: 11, color: "#6B7280", fontFamily: "var(--font-mono)", fontWeight: 700 }}>0{m.n}</div>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#272A3E", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#F3F4F6", fontSize: 12 }}>{m.name[0]}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#F3F4F6" }}>{m.name}</div>
              <div style={{ fontSize: 10, color: "#FF7E58", fontWeight: 600 }}>{m.badge}</div>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9CA3AF" }}>{m.sales}<span style={{ fontSize: 9, color: "#6B7280" }}> ventas</span></div>
          </div>
        ))}

        <div style={{ marginTop: 18, padding: 14, background: "linear-gradient(135deg, rgba(255,91,46,0.15), rgba(255,91,46,0.05))", border: "1px solid rgba(255,91,46,0.3)", borderRadius: 10 }}>
          <div style={{ fontSize: 18 }}>👑</div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#F3F4F6", marginTop: 4 }}>Sé Fundador #048</div>
          <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.5, marginTop: 4 }}>Los primeros 100 miembros tienen beneficios permanentes.</div>
          <button style={{ marginTop: 10, background: "#FF5B2E", color: "white", border: 0, padding: "7px 12px", borderRadius: 6, fontSize: 11, fontWeight: 700, width: "100%" }}>Reclamar lugar</button>
        </div>
      </aside>
    </div>
  );
};

Object.assign(window, { LogoVariants, Home1Minimal, Home2Airbnb, Home3Racing, Home4Apple, Home5Club });
