/* eslint-disable */
/* Motorra Club · shared components */

// ──────────────── LOGO · Hex Member ────────────────
const HexLogo = ({ size = 36, tone = "dark" }) => {
  const inkA = tone === "light" ? "#FAF7F0" : "#1A1E26";
  const inkB = tone === "light" ? "#E5DECC" : "#0E1015";
  const fg = tone === "light" ? "#0E1015" : "#FAF7F0";
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} style={{ display: "block" }}>
      <defs>
        <linearGradient id={`mcHex-${tone}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={inkA}/>
          <stop offset="100%" stopColor={inkB}/>
        </linearGradient>
      </defs>
      <polygon points="100,20 168,60 168,140 100,180 32,140 32,60" fill={`url(#mcHex-${tone})`}/>
      <polygon points="100,28 161,63 161,137 100,172 39,137 39,63" fill="none" stroke="#FF5B2E" strokeWidth="2"/>
      <g transform="translate(100, 110)" textAnchor="middle">
        <text fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="64" fill={fg} letterSpacing="-7" dx="-11">C</text>
        <text fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="64" fill="#FF5B2E" letterSpacing="-7" dx="11">M</text>
      </g>
    </svg>
  );
};

// Wordmark Motorra (used inline)
const Wordmark = ({ size = 22, tone = "dark" }) => (
  <span style={{
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
    fontWeight: 800, fontSize: size,
    fontVariationSettings: '"opsz" 72',
    letterSpacing: "-0.04em", lineHeight: 1,
    color: tone === "light" ? "#FAF7F0" : "#1F1B16",
    display: "inline-flex", alignItems: "baseline",
  }}>
    Motorra<span style={{
      width: Math.round(size * 0.08), height: Math.round(size * 0.36),
      background: "#FF5B2E", borderRadius: 2, display: "inline-block",
      marginLeft: 2, alignSelf: "flex-start", marginTop: Math.round(size * 0.06),
    }}></span>
  </span>
);

// Compact brand mark (hex + wordmark)
const BrandMark = ({ size = 32, tone = "dark", showClub = true }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
    <HexLogo size={size} tone={tone}/>
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <Wordmark size={Math.round(size * 0.6)} tone={tone}/>
      {showClub && <span style={{
        fontSize: Math.round(size * 0.28), fontWeight: 700,
        letterSpacing: "0.18em", color: tone === "light" ? "rgba(250,247,240,0.55)" : "#5A4F3C",
        textTransform: "uppercase", marginTop: 3,
      }}>CLUB · CL</span>}
    </div>
  </div>
);

// ──────────────── AVATAR + Badges ────────────────
const Avatar = ({ member, size = 40, showFounderRing = true }) => {
  if (!member) return null;
  const isFounder = member.badges.includes("founder");
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: member.avatarColor || "#FF5B2E",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "white", fontWeight: 700, fontSize: Math.round(size * 0.42), flexShrink: 0,
      border: isFounder && showFounderRing ? `${Math.max(2, Math.round(size * 0.07))}px solid #FFB088` : "0",
      fontFamily: "var(--font-body)",
    }}>{member.initial}</div>
  );
};

const FounderBadgePill = ({ member, size = "sm" }) => {
  if (!member || !member.badges.includes("founder")) return null;
  const sizes = { xs: { px: 5, py: 1, fs: 9 }, sm: { px: 7, py: 2, fs: 10 }, md: { px: 9, py: 3, fs: 11 } }[size];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: `${sizes.py}px ${sizes.px}px`,
      background: "rgba(255,91,46,0.16)", color: "#FFB088",
      borderRadius: 4, fontWeight: 700, fontSize: sizes.fs, letterSpacing: "0.04em",
      fontFamily: "var(--font-body)",
    }}>👑 #{member.founderNum}</span>
  );
};

// Rating display
const Rating = ({ value }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 3, color: "#FF7E58", fontWeight: 700, fontSize: 11 }}>
    ★ {value.toFixed(1)}
  </span>
);

// ──────────────── ICONS ────────────────
const Icon = ({ name, size = 18, color, style }) => (
  <i data-lucide={name} style={{ width: size, height: size, color: color || "currentColor", display: "inline-flex", verticalAlign: "middle", ...style }}/>
);

// ──────────────── BUTTONS ────────────────
const Button = ({ children, variant = "primary", size = "md", icon, iconRight, onClick, fullWidth, ariaLabel, style }) => {
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 13, borderRadius: 8, gap: 6, iconSize: 14 },
    md: { padding: "11px 20px", fontSize: 14, borderRadius: 10, gap: 8, iconSize: 16 },
    lg: { padding: "15px 26px", fontSize: 15, borderRadius: 10, gap: 10, iconSize: 18 },
  };
  const variants = {
    primary:    { background: "#FF5B2E", color: "white", border: "0" },
    secondary:  { background: "#1F1B16", color: "#FAF7F0", border: "0" },
    ghost:      { background: "transparent", color: "currentColor", border: "1px solid currentColor", opacity: 0.85 },
    soft:       { background: "rgba(255,91,46,0.12)", color: "#FF5B2E", border: "0" },
    "soft-club":{ background: "rgba(255,255,255,0.06)", color: "#F3F4F6", border: "1px solid rgba(255,255,255,0.1)" },
    whatsapp:   { background: "#22C55E", color: "white", border: "0" },
  };
  const s = sizes[size]; const v = variants[variant];
  return (
    <button onClick={onClick} aria-label={ariaLabel} style={{
      ...v, padding: s.padding, fontSize: s.fontSize, borderRadius: s.borderRadius, gap: s.gap,
      fontFamily: "var(--font-body)", fontWeight: 600, lineHeight: 1, cursor: "pointer",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: fullWidth ? "100%" : undefined,
      transition: "all 140ms cubic-bezier(0.22,1,0.36,1)", ...style,
    }}>
      {icon && <Icon name={icon} size={s.iconSize}/>}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={s.iconSize}/>}
    </button>
  );
};

// ──────────────── INPUTS ────────────────
const Input = ({ label, icon, prefix, helper, error, dark, ...props }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, minWidth: 0 }}>
    {label && <div style={{ fontSize: 12, fontWeight: 600, color: dark ? "#D1D5DB" : "#5A4F3C" }}>{label}</div>}
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      {icon && <div style={{ position: "absolute", left: 12, color: dark ? "#6B7280" : "#8B7E66", pointerEvents: "none" }}><Icon name={icon} size={16}/></div>}
      {prefix && <div style={{ position: "absolute", left: 14, color: dark ? "#9CA3AF" : "#5A4F3C", fontSize: 14, fontWeight: 500 }}>{prefix}</div>}
      <input
        style={{
          flex: 1, width: "100%", boxSizing: "border-box",
          fontFamily: "var(--font-body)", fontSize: 14,
          padding: "12px 14px",
          paddingLeft: icon ? 38 : (prefix ? 32 : 14),
          background: dark ? "#1E2030" : "white",
          border: `1px solid ${error ? "#DC2A2F" : (dark ? "rgba(255,255,255,0.1)" : "#E5DECC")}`,
          borderRadius: 9, color: dark ? "#F3F4F6" : "#1F1B16", outline: "none",
          transition: "border-color 140ms, box-shadow 140ms",
        }}
        onFocus={e => { e.target.style.borderColor = "#FF5B2E"; e.target.style.boxShadow = "0 0 0 3px rgba(255,91,46,0.18)"; }}
        onBlur={e => { e.target.style.borderColor = error ? "#DC2A2F" : (dark ? "rgba(255,255,255,0.1)" : "#E5DECC"); e.target.style.boxShadow = "none"; }}
        {...props}
      />
    </div>
    {(helper || error) && <div style={{ fontSize: 11, color: error ? "#DC2A2F" : (dark ? "#6B7280" : "#8B7E66") }}>{error || helper}</div>}
  </div>
);

// ──────────────── PRICE TAG ────────────────
const PriceTag = ({ amount, size = "md", currency = "CLP", color }) => {
  const sizes = { sm: 16, md: 19, lg: 26, xl: 38 };
  return (
    <span style={{
      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: sizes[size],
      letterSpacing: "-0.02em", lineHeight: 1, color: color || "inherit",
      fontFeatureSettings: '"tnum" 1, "lnum" 1',
    }}>{window.MC_FORMAT_PRICE(amount)}</span>
  );
};

// ──────────────── LISTING CARD (Airbnb-style for landing) ────────────────
const ListingCardWarm = ({ listing, onOpen }) => {
  const m = window.MC_MEMBERS[listing.sellerId];
  return (
    <div onClick={() => onOpen && onOpen(listing)} style={{
      cursor: "pointer", borderRadius: 14, overflow: "hidden", background: "white",
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)", transition: "transform 220ms, box-shadow 220ms",
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.04)"; }}>
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
        <img src={listing.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        <button style={{ position: "absolute", top: 10, right: 10, width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.95)", border: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#1F1B16" }}>
          <Icon name="heart" size={15}/>
        </button>
      </div>
      <div style={{ padding: "12px 14px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#1F1B16", letterSpacing: "-0.01em", margin: 0 }}>
            {listing.year} {listing.make} {listing.model}
          </h4>
          <Rating value={m.rating}/>
        </div>
        <div style={{ fontSize: 12, color: "#8B7E66", marginTop: 2 }}>
          {window.MC_FORMAT_KM(listing.km)} · {listing.trans} · {listing.location.split(",")[0]}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 8, paddingTop: 8, borderTop: "1px solid #F4EFE6" }}>
          <PriceTag amount={listing.price} size="md"/>
          <FounderBadgePill member={m} size="xs"/>
        </div>
      </div>
    </div>
  );
};

// ──────────────── BENEFIT FEATURE ROW ────────────────
const Benefit = ({ icon, title, body, ord }) => (
  <div style={{ display: "flex", gap: 14 }}>
    {ord && <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "#FF5B2E", minWidth: 28 }}>{ord}</span>}
    {icon && (
      <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,91,46,0.1)", color: "#B33310", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name={icon} size={18}/>
      </div>
    )}
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#1F1B16", letterSpacing: "-0.005em" }}>{title}</div>
      <div style={{ fontSize: 13, color: "#5A4F3C", lineHeight: 1.5, marginTop: 2 }}>{body}</div>
    </div>
  </div>
);

Object.assign(window, {
  HexLogo, Wordmark, BrandMark,
  Avatar, FounderBadgePill, Rating,
  Icon, Button, Input, PriceTag,
  ListingCardWarm, Benefit,
});
