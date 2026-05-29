/* eslint-disable */
/* Motorra Club · Feed (Discord-club app shell + post feed) */

const ClubShell = ({ activeChannel = "feed", children, navigate, onPublish, currentUser }) => (
  <div className="mc-club" style={{ background: "#1E2030", color: "#F3F4F6", minHeight: "100vh", display: "grid", gridTemplateColumns: "240px 1fr 280px" }}>
    {/* SIDEBAR */}
    <aside style={{ background: "#171825", padding: "16px 12px", display: "flex", flexDirection: "column", borderRight: "1px solid rgba(255,255,255,0.04)", height: "100vh", position: "sticky", top: 0, overflow: "auto" }}>
      <div onClick={() => navigate("landing")} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 8px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 14, cursor: "pointer" }}>
        <HexLogo size={36} tone="light"/>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>Motorra</div>
          <div style={{ fontSize: 10, color: "#6B7280", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Club · 1.247 miembros</div>
        </div>
      </div>

      {window.MC_CHANNELS.map(sect => (
        <div key={sect.sect} style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 8px", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280" }}>
            <span>{sect.sect}</span><Icon name="chevron-down" size={10}/>
          </div>
          {sect.items.map(it => {
            const active = it.id === activeChannel;
            // Category items route to browse with their id; specific items can override via .route
            const handleClick = () => {
              if (it.route === "browse" && window.MC_CATEGORY_MAP && window.MC_CATEGORY_MAP[it.id]) {
                navigate("browse", { category: it.id });
              } else if (it.route === "browse") {
                navigate("browse");
              } else if (it.route === "categories") {
                navigate("categories");
              } else {
                navigate("feed", { channel: it.id });
              }
            };
            return (
              <button key={it.id} onClick={handleClick} style={{
                display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 6, width: "100%",
                background: active ? "rgba(255,91,46,0.12)" : "transparent",
                color: active ? "#FF5B2E" : "#A1A6B5", fontSize: 13, fontWeight: 500, cursor: "pointer",
                border: 0, fontFamily: "var(--font-body)", textAlign: "left",
                transition: "background 120ms",
              }}>
                <Icon name={it.icon} size={14}/>
                <span style={{ flex: 1 }}>{it.name}</span>
                {it.count && <span style={{ fontSize: 10, color: "#6B7280", fontFamily: "var(--font-mono)" }}>{it.count}</span>}
              </button>
            );
          })}
        </div>
      ))}

      <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <button onClick={() => navigate("profile", { id: currentUser.id })} style={{
          width: "100%", display: "flex", alignItems: "center", gap: 10, padding: 8, borderRadius: 8,
          background: "rgba(255,255,255,0.04)", border: 0, cursor: "pointer", fontFamily: "var(--font-body)",
        }}>
          <Avatar member={currentUser} size={32}/>
          <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#F3F4F6" }}>{currentUser.name}</div>
            <div style={{ fontSize: 10, color: "#FF7E58", fontWeight: 700 }}>👑 #{currentUser.founderNum}</div>
          </div>
          <Icon name="settings" size={14} color="#6B7280"/>
        </button>
      </div>
    </aside>

    {/* MAIN */}
    <main style={{ padding: "0 0", overflow: "hidden" }}>{children}</main>

    {/* RIGHT RAIL */}
    <aside style={{ background: "#171825", borderLeft: "1px solid rgba(255,255,255,0.04)", padding: "20px 18px", height: "100vh", position: "sticky", top: 0, overflow: "auto" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", marginBottom: 12 }}>🏆 TOP MIEMBROS · MAYO</div>
      {Object.values(window.MC_MEMBERS).sort((a, b) => b.sales - a.sales).map((m, i) => (
        <div key={m.id} onClick={() => navigate("profile", { id: m.id })} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "pointer" }}>
          <div style={{ width: 22, fontSize: 11, color: i < 3 ? "#FF7E58" : "#6B7280", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{["🥇","🥈","🥉"][i] || `0${i+1}`}</div>
          <Avatar member={m} size={28}/>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#F3F4F6", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.name}</div>
            <div style={{ fontSize: 10, color: "#FF7E58", fontWeight: 600 }}>#{m.founderNum} · {m.sales}vts</div>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 20, padding: 16, background: "linear-gradient(135deg, rgba(255,91,46,0.18) 0%, rgba(255,91,46,0.04) 100%)", border: "1px solid rgba(255,91,46,0.3)", borderRadius: 12 }}>
        <div style={{ fontSize: 22 }}>👑</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "#F3F4F6", marginTop: 6, letterSpacing: "-0.005em" }}>53 lugares libres</div>
        <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.5, marginTop: 4 }}>Invitá amigos al Club — cada uno acepta el lugar 048 → 100.</div>
        <Button variant="primary" size="sm" fullWidth style={{ marginTop: 12 }}>Invitar amigos</Button>
      </div>
    </aside>
  </div>
);

const FeedScreen = ({ navigate, channel = "feed", currentUser }) => {
  const listings = window.MC_LISTINGS;
  return (
    <ClubShell activeChannel={channel} navigate={navigate} currentUser={currentUser}>
      {/* Channel header */}
      <div style={{ padding: "18px 28px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(30,32,48,0.92)", backdropFilter: "blur(8px)", zIndex: 10 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#9CA3AF" }}>
            <Icon name="hash" size={13}/> {channel === "fundadores" ? "fundadores-100" : channel}
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "4px 0 0", color: "#F3F4F6", letterSpacing: "-0.015em" }}>
            {channel === "fundadores" ? "Canal Fundadores · 47 miembros" : "Feed · lo último del Club"}
          </h1>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button style={{ padding: "8px 12px", background: "rgba(255,255,255,0.06)", border: 0, borderRadius: 8, color: "#D1D5DB", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)" }}>
            <Icon name="filter" size={13}/> Filtros
          </button>
          <Button variant="primary" size="sm" icon="plus" onClick={() => navigate("publish")}>Publicar</Button>
        </div>
      </div>

      {/* Composer (mini) */}
      <div style={{ margin: "16px 28px", padding: 14, background: "#272A3E", borderRadius: 12, display: "flex", alignItems: "center", gap: 12, cursor: "text" }} onClick={() => navigate("publish")}>
        <Avatar member={currentUser} size={36}/>
        <div style={{ flex: 1, fontSize: 13, color: "#9CA3AF" }}>¿Qué vendes hoy, {currentUser.name.split(" ")[0]}?</div>
        <div style={{ display: "flex", gap: 6, color: "#6B7280" }}>
          <Icon name="camera" size={16}/>
          <Icon name="video" size={16}/>
          <Icon name="hash" size={16}/>
        </div>
      </div>

      {/* Posts */}
      <div style={{ padding: "0 28px 32px" }}>
        {listings.map(l => {
          const m = window.MC_MEMBERS[l.sellerId];
          return (
            <article key={l.id} style={{ background: "#272A3E", borderRadius: 12, padding: 16, marginBottom: 14 }}>
              <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <Avatar member={m} size={42}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                    <span onClick={() => navigate("profile", { id: m.id })} style={{ fontWeight: 700, fontSize: 13, color: "#F3F4F6", cursor: "pointer" }}>{m.name}</span>
                    <FounderBadgePill member={m} size="xs"/>
                    <Rating value={m.rating}/>
                    <span style={{ fontSize: 11, color: "#6B7280" }}>· {l.publishedAt}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{m.city} · {m.sales} ventas en el club</div>
                </div>
                <button style={{ padding: 6, background: "transparent", border: 0, color: "#9CA3AF", cursor: "pointer" }}><Icon name="more-horizontal" size={16}/></button>
              </header>

              {l.notes && (
                <div style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.55, marginBottom: 12 }}>{l.notes}</div>
              )}

              {/* Inline vehicle card */}
              <div onClick={() => navigate("detail", { id: l.id })} style={{ background: "#1E2030", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 10, display: "flex", gap: 12, alignItems: "center", cursor: "pointer", transition: "background 140ms" }}
                onMouseEnter={e => e.currentTarget.style.background = "#222538"}
                onMouseLeave={e => e.currentTarget.style.background = "#1E2030"}>
                <div style={{ width: 130, height: 90, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                  <img src={l.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 10, color: "#FF7E58", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{l.year} · {l.body}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#F3F4F6", marginTop: 2, letterSpacing: "-0.015em" }}>{l.make} {l.model}</div>
                  <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{l.trim} · {window.MC_FORMAT_KM(l.km)} · {l.fuel} · {l.trans}</div>
                  <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>📍 {l.location}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <PriceTag amount={l.price} size="lg" color="#FF7E58"/>
                  <div style={{ fontSize: 10, color: "#6B7280", marginTop: 4 }}>0% comisión</div>
                </div>
              </div>

              {/* Engagement bar */}
              <div style={{ display: "flex", gap: 16, marginTop: 12, alignItems: "center" }}>
                <button style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "transparent", border: 0, color: "#9CA3AF", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-body)" }}>
                  <Icon name="heart" size={14}/> {l.likes}
                </button>
                <button style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "transparent", border: 0, color: "#9CA3AF", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-body)" }}>
                  <Icon name="message-circle" size={14}/> {l.comments}
                </button>
                <button style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "transparent", border: 0, color: "#9CA3AF", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-body)" }}>
                  <Icon name="bookmark" size={14}/> Guardar
                </button>
                <div style={{ flex: 1 }}></div>
                <Button variant="whatsapp" size="sm" icon="message-circle">WhatsApp</Button>
                <Button variant="soft-club" size="sm" onClick={() => navigate("detail", { id: l.id })}>Ver ficha</Button>
              </div>
            </article>
          );
        })}
      </div>
    </ClubShell>
  );
};

window.FeedScreen = FeedScreen;
window.ClubShell = ClubShell;
