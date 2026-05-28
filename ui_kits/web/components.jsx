/* eslint-disable */
/* Motorra · shared UI components */

const Icon = ({ name, size = 20, color, strokeWidth = 2, style }) => (
  <i
    data-lucide={name}
    style={{ width: size, height: size, color: color || "currentColor", strokeWidth, display: "inline-flex", verticalAlign: "middle", ...style }}
  />
);

const Button = ({ variant = "primary", size = "md", children, onClick, icon, iconPos = "left", disabled, type = "button", style }) => {
  const base = {
    fontFamily: "var(--font-body)", fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer",
    border: "1px solid transparent", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    lineHeight: 1, transition: "all 140ms cubic-bezier(0.22,1,0.36,1)",
    opacity: disabled ? 0.45 : 1, textDecoration: "none",
  };
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 13, borderRadius: 8 },
    md: { padding: "12px 20px", fontSize: 14, borderRadius: 10 },
    lg: { padding: "16px 28px", fontSize: 16, borderRadius: 12 },
  };
  const variants = {
    primary: { background: "var(--coral-500)", color: "white" },
    secondary: { background: "var(--bg-dark)", color: "var(--paper)" },
    ghost: { background: "transparent", color: "var(--fg-strong)", border: "1px solid var(--border)" },
    text: { background: "transparent", color: "var(--fg-strong)", padding: "8px 12px" },
    danger: { background: "var(--crimson-500)", color: "white" },
  };
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      style={{ ...base, ...sizes[size], ...variants[variant], ...(style || {}) }}
      onMouseEnter={e => { if (!disabled && variant === "primary") e.currentTarget.style.background = "var(--coral-600)"; if (!disabled && variant === "ghost") e.currentTarget.style.background = "var(--ink-100)"; }}
      onMouseLeave={e => { if (!disabled && variant === "primary") e.currentTarget.style.background = "var(--coral-500)"; if (!disabled && variant === "ghost") e.currentTarget.style.background = "transparent"; }}
    >
      {icon && iconPos === "left" && <Icon name={icon} size={size === "lg" ? 18 : 16} />}
      {children}
      {icon && iconPos === "right" && <Icon name={icon} size={size === "lg" ? 18 : 16} />}
    </button>
  );
};

const Input = ({ label, helper, error, icon, prefix, ...props }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, minWidth: 0 }}>
    {label && <div style={{ fontSize: 12, fontWeight: 600, color: "var(--fg)" }}>{label}</div>}
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      {icon && <div style={{ position: "absolute", left: 12, color: "var(--fg-subtle)", pointerEvents: "none" }}><Icon name={icon} size={16} /></div>}
      {prefix && <div style={{ position: "absolute", left: 14, color: "var(--fg-muted)", fontSize: 14, fontWeight: 500 }}>{prefix}</div>}
      <input
        style={{
          flex: 1, width: "100%", boxSizing: "border-box",
          fontFamily: "var(--font-body)", fontSize: 14,
          padding: "11px 14px",
          paddingLeft: icon ? 38 : (prefix ? 32 : 14),
          background: "var(--bg-canvas)",
          border: `1px solid ${error ? "var(--crimson-500)" : "var(--border)"}`,
          borderRadius: 8, color: "var(--fg-strong)", outline: "none",
        }}
        onFocus={e => { e.target.style.borderColor = "var(--ink-900)"; e.target.style.boxShadow = "0 0 0 3px rgba(11,108,242,0.28)"; }}
        onBlur={e => { e.target.style.borderColor = error ? "var(--crimson-500)" : "var(--border)"; e.target.style.boxShadow = "none"; }}
        {...props}
      />
    </div>
    {(helper || error) && <div style={{ fontSize: 11, color: error ? "var(--crimson-600)" : "var(--ink-500)" }}>{error || helper}</div>}
  </div>
);

const Select = ({ label, options = [], value, onChange, ...props }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, minWidth: 0 }}>
    {label && <div style={{ fontSize: 12, fontWeight: 600, color: "var(--fg)" }}>{label}</div>}
    <select
      value={value} onChange={onChange}
      style={{
        fontFamily: "var(--font-body)", fontSize: 14, padding: "11px 36px 11px 14px",
        backgroundColor: "var(--bg-canvas)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238B93A7' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 14px center",
        border: "1px solid var(--border)", borderRadius: 8, color: "var(--fg-strong)", appearance: "none", outline: "none", cursor: "pointer",
      }}
      {...props}
    >
      {options.map(opt => (
        typeof opt === "string" ? <option key={opt} value={opt}>{opt}</option> : <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

const Chip = ({ active, dismissable, onClick, onDismiss, children }) => (
  <span
    onClick={onClick}
    style={{
      padding: dismissable ? "8px 8px 8px 14px" : "8px 14px",
      borderRadius: 9999,
      fontSize: 13, fontWeight: 600, lineHeight: 1,
      display: "inline-flex", alignItems: "center", gap: 6,
      cursor: onClick || onDismiss ? "pointer" : "default",
      background: active ? "var(--fg-strong)" : (dismissable ? "var(--ink-100)" : "var(--bg-canvas)"),
      color: active ? "var(--on-fg-strong)" : "var(--ink-700)",
      border: `1px solid ${active ? "var(--fg-strong)" : (dismissable ? "transparent" : "var(--border)")}`,
      transition: "all 140ms",
      whiteSpace: "nowrap",
    }}
  >
    {children}
    {dismissable && (
      <span
        onClick={e => { e.stopPropagation(); onDismiss && onDismiss(); }}
        style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--ink-300)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}
      >×</span>
    )}
  </span>
);

const Badge = ({ tone = "neutral", children, icon }) => {
  const tones = {
    certified: { bg: "var(--forest-500)", fg: "white" },
    hot: { bg: "var(--amber-500)", fg: "#3D2700" },
    new: { bg: "var(--ink-900)", fg: "var(--paper)" },
    financed: { bg: "var(--ocean-100)", fg: "var(--ocean-700)" },
    rent: { bg: "var(--coral-100)", fg: "var(--coral-700)" },
    eco: { bg: "var(--forest-100)", fg: "var(--forest-700)" },
    discount: { bg: "var(--crimson-500)", fg: "white" },
    neutral: { bg: "var(--ink-100)", fg: "var(--ink-700)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, padding: "4px 8px", borderRadius: 4,
      background: t.bg, color: t.fg, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1,
      display: "inline-flex", alignItems: "center", gap: 4,
    }}>
      {icon && <Icon name={icon} size={11} />} {children}
    </span>
  );
};

const PriceTag = ({ price, currency = "CLP", size = "md", suffix }) => {
  const sizes = { sm: 16, md: 22, lg: 30, xl: 44 };
  return (
    <div style={{
      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: sizes[size],
      color: "var(--fg-strong)", letterSpacing: "-0.02em",
      fontFeatureSettings: '"tnum" 1, "lnum" 1', display: "inline-flex", alignItems: "baseline", gap: 4,
    }}>
      {window.formatPrice(price, currency)}
      {suffix && <span style={{ fontSize: sizes[size] * 0.5, color: "var(--fg-muted)", fontWeight: 600 }}>{suffix}</span>}
    </div>
  );
};

const Logo = ({ size = 22, tone = "dark" }) => (
  <span style={{
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
    fontWeight: 800,
    fontSize: size,
    fontVariationSettings: '"opsz" 72',
    letterSpacing: "-0.04em",
    lineHeight: 1,
    color: tone === "light" ? "var(--paper)" : "var(--ink-900)",
    display: "inline-flex", alignItems: "baseline", gap: 0,
  }}>
    Motorra<span style={{
      width: Math.round(size * 0.08), height: Math.round(size * 0.36),
      background: "var(--coral-500)", borderRadius: 2, display: "inline-block",
      marginLeft: 2, alignSelf: "flex-start", marginTop: Math.round(size * 0.05),
    }}></span>
  </span>
);

const Header = ({ active = "home", onComingSoon }) => {
  const navItems = [
    { id: "buscar", label: "Comprar", href: "#/buscar", live: true },
    { id: "categorias", label: "Categorías", href: "#/categorias", live: true },
    { id: "vender", label: "Publicar / Vender", href: "#/vender", live: true },
    { id: "financiamiento", label: "Financiamiento", live: false, feature: "El financiamiento automotriz integrado" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "var(--header-bg, rgba(250,247,240,0.85))", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      height: 72, display: "flex", alignItems: "center",
    }}>
      <div style={{ maxWidth: 1240, width: "100%", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 32 }}>
        <a href="#/" style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: 10 }}>
          <Logo size={22} tone="dark" />
          <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--coral-700)", padding: "3px 7px", background: "var(--coral-050)", borderRadius: 4, lineHeight: 1 }}>BETA · CL</span>
        </a>
        <nav style={{ display: "flex", gap: 2, flex: 1 }}>
          {navItems.map(item => (
            <button key={item.id}
              onClick={() => {
                if (item.live) window.location.hash = item.href.replace("#", "");
                else onComingSoon && onComingSoon(item.feature);
              }}
              style={{
                padding: "8px 14px", borderRadius: 8,
                fontSize: 14, fontWeight: 600, fontFamily: "var(--font-body)",
                color: active === item.id ? "var(--fg-strong)" : (item.live ? "var(--fg)" : "var(--fg-muted)"),
                background: active === item.id ? "var(--ink-100)" : "transparent",
                border: 0, cursor: "pointer",
                transition: "all 140ms",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}>
              {item.label}
              {!item.live && <span style={{ fontSize: 9, fontWeight: 700, color: "var(--fg-subtle)", background: "var(--bg-sunken)", padding: "2px 5px", borderRadius: 3, textTransform: "uppercase", letterSpacing: "0.06em" }}>Pronto</span>}
            </button>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button style={{ background: "transparent", border: 0, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--fg)", padding: "8px 12px", display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 8 }}>
            <Icon name="map-pin" size={14} /> Chile · CLP
          </button>
          <Button variant="ghost" size="sm">Ingresar</Button>
          <Button variant="primary" size="sm" icon="arrow-right" iconPos="right" onClick={() => window.location.hash = "/vender"}>Publicar gratis</Button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer style={{
    background: "var(--bg-dark)", color: "var(--paper)",
    marginTop: 80, padding: "64px 24px 32px",
  }}>
    <div style={{ maxWidth: 1240, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <Logo size={28} tone="light" />
          <p style={{ fontSize: 13, color: "rgba(250,247,240,0.6)", lineHeight: 1.6, marginTop: 16, maxWidth: 280 }}>
            Marketplace especializado en compra y venta de vehículos motorizados en Chile. Sin comisiones durante el lanzamiento.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, padding: "4px 10px", background: "rgba(255,91,46,0.14)", borderRadius: 9999, fontSize: 10, fontWeight: 700, color: "var(--coral-500)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--coral-500)" }}></span>
            Beta · solo Chile
          </div>
        </div>
        {[
          { title: "Motorra", links: ["Sobre nosotros", "Cómo funciona", "Etapa fundadores", "Contacto"] },
          { title: "Vender (activo)", links: ["Publicar gratis", "Cómo funciona", "Tips para vender mejor", "Trust & Safety"] },
          { title: "Categorías", links: ["Autos", "Motos", "Camionetas", "SUV", "Eléctricos", "Comerciales"] },
          { title: "Próximamente", links: ["Comprar vehículos", "Inspección 240 puntos", "Historial VIN", "Financiamiento"] },
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--coral-500)", marginBottom: 16 }}>{col.title}</div>
            {col.links.map(l => (
              <div key={l} style={{ fontSize: 13, color: "rgba(250,247,240,0.75)", marginBottom: 10, cursor: "pointer" }}>{l}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 64, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "rgba(250,247,240,0.5)" }}>
        <div>© 2026 Motorra · Servicio operado en Chile</div>
        <div style={{ display: "flex", gap: 16 }}>
          <span>ES · CLP</span>
          <span>·</span>
          <span>Lanzamiento Q3 2026</span>
        </div>
      </div>
    </div>
  </footer>
);

const Container = ({ children, max = 1240, style }) => (
  <div style={{ maxWidth: max, margin: "0 auto", padding: "0 24px", ...style }}>{children}</div>
);

const Section = ({ children, dark, style }) => (
  <section style={{
    padding: "64px 0",
    background: dark ? "var(--fg-strong)" : "transparent",
    color: dark ? "var(--paper)" : "inherit",
    ...style,
  }}>
    {children}
  </section>
);

Object.assign(window, { Icon, Button, Input, Select, Chip, Badge, PriceTag, Header, Footer, Container, Section, Logo });
