/* eslint-disable */
/* Motorra Club · Signup modal — "Unirme al Club" */

const SignupScreen = ({ onClose, onComplete }) => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({ name: "", email: "", city: "Vitacura, Santiago", reason: "" });
  const [visible, setVisible] = React.useState(false);
  const founderNum = "048";

  React.useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => { cancelAnimationFrame(id); document.body.style.overflow = ""; };
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(14,16,21,0.72)", backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      opacity: visible ? 1 : 0,
      transition: "opacity 220ms cubic-bezier(0.22,1,0.36,1)",
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "white", color: "#1F1B16",
        borderRadius: 24, maxWidth: 560, width: "100%", overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.4)", position: "relative",
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "transform 260ms cubic-bezier(0.22,1,0.36,1)",
      }}>
        {/* Dark top */}
        <div style={{ background: "#1F1B16", color: "#F4EFE6", padding: "32px 36px 28px", position: "relative" }}>
          <button onClick={onClose} aria-label="Cerrar" style={{ position: "absolute", top: 16, right: 16, width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.08)", border: 0, color: "#F4EFE6", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="x" size={16}/>
          </button>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 11px", background: "rgba(255,91,46,0.18)", border: "1px solid rgba(255,91,46,0.4)", borderRadius: 9999, fontSize: 10, fontWeight: 700, color: "#FF5B2E", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF5B2E", animation: "pulse-dot 2s ease-in-out infinite" }}></span>
            Reservando lugar #{founderNum}
          </div>

          {step === 1 && (<>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, letterSpacing: "-0.02em", lineHeight: 1.1, margin: 0, color: "#F4EFE6" }}>
              Sé Fundador<br/><span style={{ color: "#FF5B2E" }}>Motorra #{founderNum}</span>.
            </h2>
            <p style={{ fontSize: 13, lineHeight: 1.55, marginTop: 12, color: "rgba(244,239,230,0.75)", maxWidth: 380 }}>
              Quedan <strong style={{ color: "#F4EFE6", fontWeight: 700 }}>53 lugares</strong> de los 100 originales. Los Fundadores reciben beneficios permanentes que nunca volverán a estar disponibles.
            </p>
          </>)}

          {step === 2 && (<>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", margin: 0, color: "#F4EFE6" }}>
              Bienvenido, <span style={{ color: "#FF5B2E" }}>{data.name || "Fundador"}</span>.
            </h2>
            <p style={{ fontSize: 13, lineHeight: 1.55, marginTop: 12, color: "rgba(244,239,230,0.75)" }}>
              Reservaste el lugar #{founderNum}. Dinos un poco más sobre ti.
            </p>
          </>)}

          {step === 3 && (<>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: "#FF5B2E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, marginBottom: 16 }}>👑</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, letterSpacing: "-0.02em", margin: 0, color: "#F4EFE6" }}>
              Eres Fundador Motorra #{founderNum}.
            </h2>
            <p style={{ fontSize: 13, lineHeight: 1.55, marginTop: 12, color: "rgba(244,239,230,0.75)" }}>
              Tu badge dorado ya está activo. Quedan 52 lugares para los próximos fundadores.
            </p>
          </>)}
        </div>

        {/* Step body */}
        <div style={{ padding: "26px 36px 28px" }}>
          {step === 1 && (<>
            <div style={{ marginBottom: 24 }}>
              {[
                { e: "👑", t: "Badge dorado vitalicio #001–#100", d: "Visible en perfil + publicaciones" },
                { e: "💰", t: "0% comisión para siempre", d: "Cuando empecemos a cobrar, tú no" },
                { e: "🚀", t: "Acceso anticipado a features", d: "Pruebas todo antes que cualquier otro" },
                { e: "🤝", t: "Comunidad privada de fundadores", d: "Canal exclusivo + 2 encuentros/año" },
              ].map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 3 ? "1px solid #F4EFE6" : "none" }}>
                  <span style={{ fontSize: 22 }}>{b.e}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1F1B16" }}>{b.t}</div>
                    <div style={{ fontSize: 11, color: "#8B7E66", marginTop: 1 }}>{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="primary" size="lg" fullWidth iconRight="arrow-right" onClick={() => setStep(2)}>Reservar mi lugar #{founderNum}</Button>
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button style={oauthBtn}><Icon name="chrome" size={14}/> Google</button>
              <button style={oauthBtn}><Icon name="apple" size={14}/> Apple</button>
              <button style={oauthBtn}><Icon name="facebook" size={14}/> Facebook</button>
            </div>
            <div style={{ fontSize: 11, color: "#8B7E66", textAlign: "center", marginTop: 12, lineHeight: 1.45 }}>
              Al continuar aceptas los <span style={{ textDecoration: "underline" }}>términos</span> y la <span style={{ textDecoration: "underline" }}>privacidad</span> de Motorra.
            </div>
          </>)}

          {step === 2 && (<>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Input label="Nombre y apellido" placeholder="Cómo quieres aparecer en el club" value={data.name} onChange={e => setData({...data, name: e.target.value})}/>
              <Input label="Email" placeholder="tu@email.com" icon="mail" value={data.email} onChange={e => setData({...data, email: e.target.value})}/>
              <Input label="Ciudad" prefix="📍" value={data.city} onChange={e => setData({...data, city: e.target.value})}/>
            </div>
            <Button variant="primary" size="lg" fullWidth iconRight="arrow-right" onClick={() => setStep(3)} style={{ marginTop: 22 }}>Confirmar lugar #{founderNum}</Button>
            <button onClick={() => setStep(1)} style={{ background: "transparent", border: 0, fontSize: 12, fontWeight: 600, color: "#8B7E66", marginTop: 10, width: "100%", cursor: "pointer" }}>← Volver</button>
          </>)}

          {step === 3 && (<>
            <div style={{ background: "#F4EFE6", borderRadius: 14, padding: 18, display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <Avatar member={{ initial: (data.name[0] || "F"), avatarColor: "#FF5B2E", badges: ["founder"] }} size={56}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#1F1B16", letterSpacing: "-0.015em" }}>{data.name || "Fundador Motorra"}</div>
                <div style={{ fontSize: 11, color: "#8B7E66" }}>{data.city}</div>
                <div style={{ display: "inline-flex", marginTop: 4 }}>
                  <FounderBadgePill member={{ founderNum, badges: ["founder"] }} size="sm"/>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "#5A4F3C", lineHeight: 1.55, margin: "0 0 18px" }}>
              Lo siguiente: publica tu vehículo o explora lo que tus 47 colegas fundadores están ofreciendo.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <Button variant="primary" size="lg" icon="tag" fullWidth onClick={onComplete}>Publicar mi auto</Button>
              <Button variant="ghost" size="lg" style={{ borderColor: "#1F1B16", color: "#1F1B16", opacity: 1 }} onClick={onComplete}>Explorar</Button>
            </div>
          </>)}
        </div>

        {/* Step indicator */}
        <div style={{ display: "flex", gap: 6, padding: "0 36px 22px", justifyContent: "center" }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{ width: s === step ? 22 : 6, height: 6, borderRadius: 3, background: s <= step ? "#FF5B2E" : "#E5DECC", transition: "all 200ms" }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const oauthBtn = {
  flex: 1, padding: "10px 8px", background: "white", border: "1px solid #E5DECC", borderRadius: 8,
  fontSize: 12, fontWeight: 600, color: "#1F1B16", cursor: "pointer",
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: "var(--font-body)",
};

window.SignupScreen = SignupScreen;
