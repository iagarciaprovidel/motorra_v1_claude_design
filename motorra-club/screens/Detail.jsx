/* eslint-disable */
/* Motorra Club · Detail (vehicle detail inside club app shell) */

const DetailScreen = ({ navigate, listingId, currentUser }) => {
  const l = window.MC_LISTINGS.find(x => x.id === listingId) || window.MC_LISTINGS[0];
  const m = window.MC_MEMBERS[l.sellerId];
  const [photo, setPhoto] = React.useState(0);
  const photos = l.photos || [l.photo];
  const otherListings = window.MC_LISTINGS.filter(x => x.id !== l.id).slice(0, 3);

  return (
    <ClubShell activeChannel="feed" navigate={navigate} currentUser={currentUser}>
      <div style={{ padding: "20px 28px 32px" }}>
        <button onClick={() => navigate("feed")} style={{ padding: "6px 12px 6px 8px", background: "rgba(255,255,255,0.04)", border: 0, borderRadius: 8, color: "#D1D5DB", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, marginBottom: 16 }}>
          <Icon name="arrow-left" size={14}/> Volver al feed
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 }}>
          {/* LEFT — gallery + spec */}
          <div>
            <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: 14, overflow: "hidden", background: "#1E2030" }}>
              <img src={photos[photo]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
              <div style={{ position: "absolute", bottom: 14, right: 14, background: "rgba(0,0,0,0.7)", padding: "5px 10px", borderRadius: 6, fontSize: 11, fontFamily: "var(--font-mono)", color: "#F3F4F6" }}>
                {photo + 1} / {photos.length}
              </div>
              <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 6 }}>
                <span style={{ padding: "5px 10px", background: "rgba(255,91,46,0.18)", color: "#FF7E58", borderRadius: 9999, fontSize: 11, fontWeight: 700 }}>👑 Vendedor fundador</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, marginTop: 8 }}>
              {photos.map((p, i) => (
                <div key={i} onClick={() => setPhoto(i)} style={{
                  aspectRatio: "16/10", borderRadius: 6, overflow: "hidden", cursor: "pointer",
                  border: photo === i ? "2px solid #FF5B2E" : "2px solid transparent",
                }}>
                  <img src={p} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                </div>
              ))}
            </div>

            {/* Spec sheet */}
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", marginBottom: 10 }}>DETALLES</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, background: "#272A3E", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: 18 }}>
                {[
                  { l: "Kilometraje", v: window.MC_FORMAT_KM(l.km), i: "gauge" },
                  { l: "Año", v: l.year, i: "calendar" },
                  { l: "Transmisión", v: l.trans === "Aut." ? "Automática" : "Manual", i: "cog" },
                  { l: "Combustible", v: l.fuel, i: l.fuel === "Eléctrico" ? "zap" : "fuel" },
                ].map(d => (
                  <div key={d.l}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#6B7280", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      <Icon name={d.i} size={11}/> {d.l}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#F3F4F6", marginTop: 4 }}>{d.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", marginBottom: 10 }}>DESCRIPCIÓN</div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#D1D5DB", margin: 0 }}>{l.description}</p>
            </div>

            {/* Seller note as quote */}
            {l.notes && (
              <div style={{ marginTop: 22, padding: 16, borderLeft: "3px solid #FF5B2E", background: "rgba(255,91,46,0.04)" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#FF7E58", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>NOTA DEL VENDEDOR</div>
                <div style={{ fontSize: 14, color: "#F3F4F6", lineHeight: 1.6, fontStyle: "italic" }}>"{l.notes}"</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                  <Avatar member={m} size={24}/>
                  <span style={{ fontSize: 12, color: "#9CA3AF" }}>— {m.name}, fundador #{m.founderNum}</span>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — sticky purchase + seller */}
          <div>
            <div style={{ position: "sticky", top: 14, display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Title + price */}
              <div style={{ background: "#272A3E", borderRadius: 14, padding: 22 }}>
                <div style={{ fontSize: 11, color: "#FF7E58", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{l.year} · {l.body} · {l.fuel}</div>
                <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-0.015em", lineHeight: 1.15, margin: "4px 0 4px", color: "#F3F4F6" }}>
                  {l.make} {l.model}
                </h1>
                <div style={{ fontSize: 13, color: "#9CA3AF" }}>{l.trim}</div>
                <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <PriceTag amount={l.price} size="xl" color="#F3F4F6"/>
                  <div style={{ fontSize: 11, color: "#22C55E", marginTop: 6, display: "flex", alignItems: "center", gap: 4 }}>
                    <Icon name="badge-percent" size={12}/> 0% comisión · vendedor fundador
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 18 }}>
                  <Button variant="whatsapp" size="lg" icon="message-circle" fullWidth>WhatsApp al vendedor</Button>
                  <Button variant="primary" size="md" icon="message-circle" fullWidth>Mensaje interno del Club</Button>
                  <div style={{ display: "flex", gap: 6 }}>
                    <Button variant="soft-club" size="md" icon="heart" style={{ flex: 1 }}>Guardar</Button>
                    <Button variant="soft-club" size="md" icon="share-2" style={{ flex: 1 }}>Compartir</Button>
                  </div>
                </div>
              </div>

              {/* Seller card */}
              <div onClick={() => navigate("profile", { id: m.id })} style={{ background: "#272A3E", borderRadius: 14, padding: 18, cursor: "pointer", border: "1px solid rgba(255,91,46,0.2)" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#6B7280", marginBottom: 10, textTransform: "uppercase" }}>Vendedor</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Avatar member={m} size={48}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#F3F4F6" }}>{m.name}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>{m.city} · miembro desde {m.joined}</div>
                    <div style={{ display: "flex", gap: 8, marginTop: 4, alignItems: "center" }}>
                      <FounderBadgePill member={m} size="xs"/>
                      <Rating value={m.rating}/>
                      <span style={{ fontSize: 11, color: "#9CA3AF" }}>· {m.sales} ventas</span>
                    </div>
                  </div>
                  <Icon name="chevron-right" size={16} color="#6B7280"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More from this seller */}
        <section style={{ marginTop: 48 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", color: "#F3F4F6", margin: "0 0 16px" }}>
            Más del Club
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {otherListings.map(o => {
              const om = window.MC_MEMBERS[o.sellerId];
              return (
                <div key={o.id} onClick={() => navigate("detail", { id: o.id })} style={{ background: "#272A3E", borderRadius: 12, overflow: "hidden", cursor: "pointer" }}>
                  <div style={{ aspectRatio: "16/10" }}><img src={o.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/></div>
                  <div style={{ padding: "12px 14px 14px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#F3F4F6" }}>{o.year} {o.make} {o.model}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{window.MC_FORMAT_KM(o.km)} · {om.name}</div>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 8 }}>
                      <PriceTag amount={o.price} size="md" color="#FF7E58"/>
                      <FounderBadgePill member={om} size="xs"/>
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

window.DetailScreen = DetailScreen;
