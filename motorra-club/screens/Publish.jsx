/* eslint-disable */
/* Motorra Club · Publish — 3-step flow inside the club app shell */

const PublishScreen = ({ navigate, currentUser }) => {
  const [step, setStep] = React.useState(1);
  const [d, setD] = React.useState({
    plate: "", year: "2021", make: "Toyota", model: "Hilux", trim: "2.4 4×4 SR",
    body: "Camioneta", fuel: "Diésel", trans: "Aut.", km: "45.200",
    color: "Blanco perla", price: "19990000",
    notes: "", whatsapp: "+56 9 ", photos: 0,
  });

  return (
    <ClubShell activeChannel="feed" navigate={navigate} currentUser={currentUser}>
      <div style={{ padding: "20px 28px 32px", maxWidth: 920, margin: "0 auto" }}>
        {/* Stepper */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          {[
            { n: 1, label: "Datos del vehículo" },
            { n: 2, label: "Fotos y descripción" },
            { n: 3, label: "Publicar" },
          ].map((s, idx, arr) => (
            <React.Fragment key={s.n}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: step >= s.n ? "#FF5B2E" : "rgba(255,255,255,0.06)",
                  color: step >= s.n ? "white" : "#9CA3AF",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700,
                }}>{step > s.n ? "✓" : s.n}</div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6B7280" }}>PASO {s.n}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: step >= s.n ? "#F3F4F6" : "#9CA3AF" }}>{s.label}</div>
                </div>
              </div>
              {idx < 2 && <div style={{ flex: 0.2, height: 1, background: step > s.n ? "#FF5B2E" : "rgba(255,255,255,0.08)" }}></div>}
            </React.Fragment>
          ))}
        </div>

        {/* STEP 1 — datos */}
        {step === 1 && (
          <div style={{ background: "#272A3E", borderRadius: 14, padding: 28 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 9px", background: "rgba(255,91,46,0.16)", borderRadius: 9999, fontSize: 10, fontWeight: 700, color: "#FF7E58", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
              👑 Fundador #{currentUser.founderNum} · 0% comisión
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em", margin: "0 0 6px", color: "#F3F4F6" }}>
              Empieza por la patente.
            </h2>
            <p style={{ fontSize: 13, color: "#9CA3AF", margin: "0 0 22px", lineHeight: 1.55 }}>
              Con tu patente o VIN traemos marca, modelo, año y especificaciones automáticamente. Si prefieres, complétalo a mano.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
              <Input dark label="Patente o VIN" placeholder="BBKR92" icon="hash" defaultValue="BBKR92"/>
              <Input dark label="País" defaultValue="Chile 🇨🇱"/>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 14 }}>
              <Input dark label="Marca" defaultValue={d.make}/>
              <Input dark label="Modelo" defaultValue={d.model}/>
              <Input dark label="Versión" defaultValue={d.trim}/>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 14 }}>
              <Input dark label="Año" defaultValue={d.year}/>
              <Input dark label="Km" prefix="🛞" defaultValue={d.km}/>
              <Input dark label="Combustible" defaultValue={d.fuel}/>
              <Input dark label="Transmisión" defaultValue={d.trans}/>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 12 }}>
              <Input dark label="Color exterior" defaultValue={d.color}/>
              <Input dark label="Precio (CLP)" prefix="$" defaultValue={d.price} helper="Ofertas por debajo del 80% serán marcadas como 'baja oferta'"/>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 26 }}>
              <Button variant="primary" size="lg" iconRight="arrow-right" onClick={() => setStep(2)}>Continuar</Button>
            </div>
          </div>
        )}

        {/* STEP 2 — fotos + nota */}
        {step === 2 && (
          <div style={{ background: "#272A3E", borderRadius: 14, padding: 28 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em", margin: "0 0 6px", color: "#F3F4F6" }}>
              Mostrale al Club tu vehículo.
            </h2>
            <p style={{ fontSize: 13, color: "#9CA3AF", margin: "0 0 22px", lineHeight: 1.55 }}>
              Hasta 20 fotos y 1 video. Las publicaciones con video venden 3× más rápido.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
              {Array.from({ length: 8 }).map((_, i) => {
                const labels = ["Frontal", "Lateral D.", "Lateral I.", "Trasera", "Interior", "Tablero", "Motor", "Odómetro"];
                return (
                  <div key={i} style={{
                    aspectRatio: "1/1", borderRadius: 10,
                    border: "2px dashed rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.02)",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
                    color: "#6B7280", cursor: "pointer", transition: "border-color 140ms",
                  }}>
                    <Icon name={i === 0 ? "image-plus" : "camera"} size={18}/>
                    <span style={{ fontSize: 10, fontWeight: 600 }}>{labels[i]}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 22, padding: 12, background: "rgba(255,91,46,0.06)", border: "1px dashed rgba(255,91,46,0.3)", borderRadius: 10 }}>
              <Icon name="video" size={22} color="#FF7E58"/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#F3F4F6" }}>Subí un video (opcional)</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 1 }}>Hasta 60 seg · MP4, MOV. Hace andar el auto, mostralo en movimiento.</div>
              </div>
              <Button variant="soft" size="sm" icon="upload">Subir video</Button>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#D1D5DB", marginBottom: 6 }}>Tu nota para el Club</div>
              <textarea placeholder="Cuéntales por qué vendes, qué le agregaste, qué le falta. Honestidad vende." rows={4} style={{
                width: "100%", boxSizing: "border-box", padding: 14, fontFamily: "var(--font-body)", fontSize: 13,
                background: "#1E2030", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 9, color: "#F3F4F6", resize: "vertical", outline: "none",
              }}/>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 26 }}>
              <Button variant="soft-club" size="lg" icon="arrow-left" onClick={() => setStep(1)}>Volver</Button>
              <Button variant="primary" size="lg" iconRight="arrow-right" onClick={() => setStep(3)}>Continuar</Button>
            </div>
          </div>
        )}

        {/* STEP 3 — review + publish */}
        {step === 3 && (
          <div>
            <div style={{ background: "#272A3E", borderRadius: 14, padding: 28, marginBottom: 14 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em", margin: "0 0 6px", color: "#F3F4F6" }}>
                Última mirada antes de publicar.
              </h2>
              <p style={{ fontSize: 13, color: "#9CA3AF", margin: "0 0 22px", lineHeight: 1.55 }}>
                Tu publicación aparece en el feed del Club, en la categoría correspondiente y en tu perfil. Sin comisión.
              </p>

              {/* Preview card */}
              <div style={{ background: "#1E2030", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 16 }}>
                <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <Avatar member={currentUser} size={40}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 13, color: "#F3F4F6" }}>{currentUser.name}</span>
                      <FounderBadgePill member={currentUser} size="xs"/>
                      <span style={{ fontSize: 11, color: "#6B7280" }}>· en este momento</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>{currentUser.city} · {currentUser.sales} ventas en el club</div>
                  </div>
                </header>
                <div style={{ background: "#272A3E", borderRadius: 10, padding: 10, display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 110, height: 76, borderRadius: 6, background: "linear-gradient(135deg, #FF5B2E, #B33310)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, fontWeight: 700 }}>FOTO 1/8</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, color: "#FF7E58", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{d.year} · {d.body}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#F3F4F6" }}>{d.make} {d.model}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>{d.trim} · {d.km} km · {d.fuel} · {d.trans}</div>
                  </div>
                  <PriceTag amount={Number(d.price)} size="lg" color="#FF7E58"/>
                </div>
              </div>
            </div>

            <div style={{ background: "#272A3E", borderRadius: 14, padding: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6B7280", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>CONTACTO</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Input dark label="WhatsApp" prefix="📱" defaultValue={d.whatsapp + "9876 5432"} icon="message-circle"/>
                <Input dark label="Email (privado)" icon="mail" defaultValue="carolina@ejemplo.cl"/>
              </div>
              <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#D1D5DB", marginTop: 14, cursor: "pointer" }}>
                <input type="checkbox" defaultChecked/>
                <span>Permitir mensajes internos del Club · recomendado</span>
              </label>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 22 }}>
              <Button variant="soft-club" size="lg" icon="arrow-left" onClick={() => setStep(2)}>Volver</Button>
              <Button variant="primary" size="lg" icon="rocket" onClick={() => navigate("feed")}>Publicar al Club</Button>
            </div>
          </div>
        )}
      </div>
    </ClubShell>
  );
};

window.PublishScreen = PublishScreen;
