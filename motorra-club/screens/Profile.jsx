/* eslint-disable */
/* Motorra Club · Profile (own + others) */

const ProfileScreen = ({ navigate, memberId, currentUser }) => {
  const m = window.MC_MEMBERS[memberId] || currentUser;
  const isOwn = m.id === currentUser.id;
  const myListings = window.MC_LISTINGS.filter(l => l.sellerId === m.id);

  return (
    <ClubShell activeChannel={isOwn ? "profile" : "feed"} navigate={navigate} currentUser={currentUser}>
      {/* Banner */}
      <div style={{ position: "relative", height: 140, background: "linear-gradient(135deg, #FF5B2E 0%, #B33310 60%, #1A1E26 100%)" }}>
        <button onClick={() => navigate("feed")} style={{ position: "absolute", top: 18, left: 24, padding: "6px 12px 6px 8px", background: "rgba(0,0,0,0.4)", border: 0, borderRadius: 8, color: "#F3F4F6", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600 }}>
          <Icon name="arrow-left" size={14}/> Volver al feed
        </button>
      </div>

      <div style={{ padding: "0 28px 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 18, marginTop: -52, marginBottom: 24 }}>
          <div style={{ width: 104, height: 104, borderRadius: "50%", background: m.avatarColor, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 44, border: "4px solid #FFB088", flexShrink: 0 }}>
            {m.initial}
          </div>
          <div style={{ flex: 1, paddingBottom: 6 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, margin: 0, color: "#F3F4F6", letterSpacing: "-0.02em" }}>{m.name}</h1>
              <FounderBadgePill member={m} size="md"/>
            </div>
            <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 4 }}>
              📍 {m.city} · Miembro desde {m.joined} · <span style={{ color: "#22C55E" }}>● Conectado</span>
            </div>
            <div style={{ display: "flex", gap: 22, marginTop: 12, fontSize: 13, color: "#D1D5DB" }}>
              <span><b style={{ color: "#F3F4F6", fontWeight: 700 }}>{m.sales}</b> ventas</span>
              <span><b style={{ color: "#F3F4F6", fontWeight: 700 }}>{myListings.length}</b> publicación{myListings.length === 1 ? "" : "es"}</span>
              <span>★ <b style={{ color: "#FF7E58", fontWeight: 700 }}>{m.rating}</b> de {m.sales * 3 + 4} reseñas</span>
              <span><b style={{ color: "#F3F4F6", fontWeight: 700 }}>{Math.floor(m.sales * 23.7 + 84)}</b> mensajes respondidos</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, paddingBottom: 6 }}>
            {isOwn ? (
              <Button variant="soft-club" size="md" icon="settings">Editar perfil</Button>
            ) : (
              <>
                <Button variant="whatsapp" size="md" icon="message-circle">WhatsApp</Button>
                <Button variant="primary" size="md" icon="message-circle">Mensaje interno</Button>
              </>
            )}
          </div>
        </div>

        {/* Badges */}
        <section style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", marginBottom: 10 }}>BADGES · {m.badges.length} DESBLOQUEADAS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
            {m.badges.map(bid => {
              const b = window.MC_BADGE_DEFS[bid];
              if (!b) return null;
              return (
                <div key={bid} style={{ background: "#272A3E", padding: "16px 12px", borderRadius: 12, textAlign: "center", border: b.permanent ? "1px solid rgba(255,91,46,0.3)" : "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: 26 }}>{b.emoji}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#F3F4F6", marginTop: 6 }}>{b.label}</div>
                  <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 2 }}>{b.desc}</div>
                  {b.permanent && <div style={{ fontSize: 9, color: "#FF7E58", fontWeight: 700, marginTop: 4, letterSpacing: "0.04em", textTransform: "uppercase" }}>Permanente</div>}
                </div>
              );
            })}
          </div>
        </section>

        {/* Publicaciones activas */}
        {myListings.length > 0 && (
          <section style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280" }}>PUBLICACIONES ACTIVAS · {myListings.length}</div>
              {isOwn && <Button variant="primary" size="sm" icon="plus" onClick={() => navigate("publish")}>Nueva</Button>}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {myListings.map(l => (
                <div key={l.id} onClick={() => navigate("detail", { id: l.id })} style={{ background: "#272A3E", borderRadius: 10, overflow: "hidden", cursor: "pointer" }}>
                  <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                    <img src={l.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                  </div>
                  <div style={{ padding: "12px 14px 14px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#F3F4F6" }}>{l.year} {l.make} {l.model}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{window.MC_FORMAT_KM(l.km)} · {l.trans}</div>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 8 }}>
                      <PriceTag amount={l.price} size="md" color="#FF7E58"/>
                      <span style={{ fontSize: 11, color: "#9CA3AF" }}>{l.likes} ♡ · {l.comments} 💬</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Historial */}
        <section>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", marginBottom: 12 }}>HISTORIAL · TRANSACCIONES CERRADAS</div>
          {[
            { y: "2024", model: "Mazda 3 GT Touring", price: "$18.490.000", time: "vendido en 6 días", buyer: "Felipe S." },
            { y: "2020", model: "VW Golf GTI", price: "$13.800.000", time: "vendido en 21 días", buyer: "Andrés C." },
            { y: "2017", model: "Toyota RAV4", price: "$11.900.000", time: "vendido en 14 días", buyer: "Diego L." },
          ].slice(0, m.sales).map((h, i) => (
            <div key={i} style={{ background: "#272A3E", borderRadius: 8, padding: 14, marginBottom: 8, display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 50, height: 36, background: "#1E2030", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "#9CA3AF" }}>{h.y}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#F3F4F6" }}>{h.model}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{h.price} · {h.time} · comprador {h.buyer}</div>
              </div>
              <div style={{ padding: "4px 8px", background: "rgba(34,197,94,0.15)", color: "#86EFAC", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>✓ CERRADO</div>
            </div>
          ))}
        </section>
      </div>
    </ClubShell>
  );
};

window.ProfileScreen = ProfileScreen;
