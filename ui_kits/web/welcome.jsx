/* eslint-disable */
/* Motorra · Welcome modal + ComingSoon banner */

const WelcomeModal = ({ onClose, onPrimary }) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  const dismiss = () => {
    setVisible(false);
    setTimeout(onClose, 220);
  };
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(14,16,21,0.72)", backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      opacity: visible ? 1 : 0, transition: "opacity 220ms cubic-bezier(0.22,1,0.36,1)",
    }} onClick={dismiss}>
      <div style={{
        background: "var(--bg-canvas)", color: "var(--fg-strong)",
        borderRadius: 24, padding: 0, maxWidth: 520, width: "100%",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--border)",
        position: "relative", overflow: "hidden",
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.97)",
        transition: "transform 280ms cubic-bezier(0.22,1,0.36,1)",
      }} onClick={(e) => e.stopPropagation()}>
        {/* Top strip with brand notch */}
        <div style={{ background: "var(--bg-dark)", color: "var(--paper)", padding: "32px 36px 28px", position: "relative" }}>
          <button onClick={dismiss} style={{
            position: "absolute", top: 16, right: 16, width: 32, height: 32,
            border: 0, borderRadius: 8, background: "rgba(255,255,255,0.08)",
            color: "var(--paper)", cursor: "pointer", display: "inline-flex",
            alignItems: "center", justifyContent: "center", fontSize: 16,
          }}>×</button>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
            color: "var(--coral-500)", marginBottom: 18,
            padding: "5px 12px", background: "rgba(255,91,46,0.14)", borderRadius: 9999,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--coral-500)", animation: "motorra-pulse 2s ease-in-out infinite" }}></span>
            Lanzamiento · solo Chile
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 36, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0,
            color: "var(--paper)",
          }}>
            Bienvenido a Motorra.<br/>
            <span style={{ color: "var(--coral-500)" }}>Publicar es gratis.</span>
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 14, color: "rgba(250,247,240,0.78)", maxWidth: 420 }}>
            Somos el marketplace especializado en <strong style={{ color: "var(--paper)", fontWeight: 700 }}>compra y venta de vehículos motorizados</strong> en Chile. Por ahora podés publicar tu auto, moto o camioneta y venderla sin pagarnos nada — sin comisiones, sin destacados pagos, sin letra chica.
          </p>
        </div>

        {/* Roadmap list */}
        <div style={{ padding: "24px 36px 28px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--fg-muted)", marginBottom: 14 }}>Qué podés hacer hoy</div>

          {[
            { icon: "check-circle-2", label: "Publicar tu vehículo gratis", live: true, note: "Auto, moto, camioneta, SUV o eléctrico" },
            { icon: "check-circle-2", label: "Venta directa entre particulares", live: true, note: "Sin comisión durante el lanzamiento" },
            { icon: "check-circle-2", label: "Comprar vehículos en el marketplace", live: true, note: "Inventario completo + filtros + categorías" },
            { icon: "circle-dashed", label: "Inspección certificada 240 puntos", live: false, note: "Próximamente · Q3 2026" },
            { icon: "circle-dashed", label: "Historial VIN + papeles al día", live: false, note: "Próximamente · Q4 2026" },
            { icon: "circle-dashed", label: "Financiamiento automotriz", live: false, note: "Próximamente · 2027" },
          ].map((row, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 0", borderBottom: i < 5 ? "1px solid var(--ink-100)" : "none",
            }}>
              <Icon name={row.icon} size={18} color={row.live ? "var(--forest-500)" : "var(--fg-subtle)"} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: row.live ? "var(--fg-strong)" : "var(--fg-muted)" }}>{row.label}</div>
                <div style={{ fontSize: 11, color: "var(--fg-subtle)", marginTop: 1 }}>{row.note}</div>
              </div>
              {row.live ? (
                <span style={{ fontSize: 10, fontWeight: 700, color: "var(--forest-700)", background: "var(--forest-100)", padding: "3px 8px", borderRadius: 9999, textTransform: "uppercase", letterSpacing: "0.06em" }}>Activo</span>
              ) : (
                <span style={{ fontSize: 10, fontWeight: 700, color: "var(--fg-muted)", background: "var(--bg-sunken)", padding: "3px 8px", borderRadius: 9999, textTransform: "uppercase", letterSpacing: "0.06em" }}>Pronto</span>
              )}
            </div>
          ))}

          <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
            <Button variant="primary" size="lg" icon="arrow-right" iconPos="right" onClick={() => { dismiss(); setTimeout(onPrimary, 220); }} style={{ flex: 1 }}>
              Publicar mi vehículo
            </Button>
            <Button variant="ghost" size="lg" onClick={dismiss}>Mirar primero</Button>
          </div>
          <div style={{ fontSize: 11, color: "var(--fg-subtle)", marginTop: 14, textAlign: "center" }}>
            Disponible solo en <strong style={{ color: "var(--fg)" }}>Chile</strong> durante el lanzamiento.
          </div>
        </div>
      </div>
    </div>
  );
};

const ComingSoonOverlay = ({ feature, onClose }) => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 90,
      background: "rgba(14,16,21,0.7)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "var(--bg-canvas)", borderRadius: 20, padding: "36px 40px",
        maxWidth: 460, width: "100%", boxShadow: "var(--sh-pop)", textAlign: "center",
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 16, margin: "0 auto 18px",
          background: "var(--coral-050)", color: "var(--coral-600)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon name="clock" size={28} />
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em", margin: 0, color: "var(--fg-strong)" }}>
          {feature} llega pronto.
        </h3>
        <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.55, marginTop: 8, marginBottom: 22 }}>
          Estamos arrancando con publicación y venta de vehículos en Chile. {feature} es parte del roadmap — dejá tu email y te avisamos apenas esté disponible.
        </p>

        {!submitted ? (
          <>
            <div style={{ display: "flex", gap: 8 }}>
              <Input placeholder="tu@email.com" icon="mail" value={email} onChange={e => setEmail(e.target.value)} />
              <Button variant="primary" size="md" onClick={() => email && setSubmitted(true)}>Avisarme</Button>
            </div>
            <button onClick={onClose} style={{ background: "transparent", border: 0, color: "var(--fg-muted)", fontSize: 12, fontWeight: 600, padding: "12px 8px 0", cursor: "pointer" }}>
              Volver
            </button>
          </>
        ) : (
          <div style={{ padding: "12px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--forest-600)", fontSize: 14, fontWeight: 600 }}>
              <Icon name="check-circle-2" size={18} /> Listo. Te escribimos pronto.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { WelcomeModal, ComingSoonOverlay });
