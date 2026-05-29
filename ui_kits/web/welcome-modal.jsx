/* eslint-disable */
/* Motorra · WelcomeModal — first-visit launch banner */

const WelcomeModal = () => {
  const STORAGE_KEY = "motorra_welcome_dismissed_v1";
  const [visible, setVisible] = React.useState(false);
  const [closing, setClosing] = React.useState(false);

  React.useEffect(() => {
    const dismissed = typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      // Small delay so the page paints first
      const t = setTimeout(() => setVisible(true), 350);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setClosing(true);
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch {}
    setTimeout(() => { setVisible(false); setClosing(false); }, 240);
  };

  if (!visible) return null;

  return (
    <div
      onClick={dismiss}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
        animation: closing ? "motorra-fade-out 220ms forwards" : "motorra-fade-in 280ms",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "var(--bg-canvas)", color: "var(--fg)",
          borderRadius: 24, maxWidth: 520, width: "100%",
          boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px var(--border)",
          overflow: "hidden", position: "relative",
          animation: closing ? "motorra-modal-out 220ms forwards" : "motorra-modal-in 320ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Dark hero strip */}
        <div style={{ background: "var(--bg-dark)", color: "var(--paper)", padding: "28px 32px 24px", position: "relative" }}>
          <button
            onClick={dismiss}
            aria-label="Cerrar"
            style={{
              position: "absolute", top: 16, right: 16,
              width: 32, height: 32, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: 0, color: "var(--paper)",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <Icon name="x" size={16} />
          </button>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--coral-500)", padding: "5px 12px", background: "rgba(255,91,46,0.14)", border: "1px solid rgba(255,91,46,0.32)", borderRadius: 9999 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--coral-500)", animation: "motorra-pulse 2s ease-in-out infinite" }}></span>
            Etapa fundadores · 2026
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, letterSpacing: "-0.025em", lineHeight: 1.05, margin: "16px 0 8px", color: "var(--paper)", fontVariationSettings: '"opsz" 36' }}>
            Bienvenido a <Logo size={36} tone="light" />.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(250,247,240,0.78)", lineHeight: 1.5, margin: 0 }}>
            Estamos arrancando — y queremos que la base esté del lado tuyo.
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 32px 28px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", color: "var(--fg-strong)", margin: "0 0 4px", lineHeight: 1.2 }}>
            Publicar y vender es 100% gratis.
          </h3>
          <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 20px" }}>
            Sin comisiones, sin destacados pagos, sin letra chica. Mientras crecemos en comunidad, tú creces con nosotros.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 22 }}>
            {[
              { icon: "tag", title: "0% comisión al vender", body: "Publica ilimitado, recibe contactos, cierra fuera de la plataforma — sin pagarnos nada." },
              { icon: "shield-check", title: "Inspección y garantía opcionales", body: "Si quieres certificar tu auto, lo hacemos. Si no, igual lo publicas." },
              { icon: "calendar-clock", title: "Sin sorpresas en el futuro", body: "Cuando empecemos a cobrar, te avisamos con 60 días de anticipación. Los usuarios fundadores tendrán ventajas." },
            ].map(it => (
              <div key={it.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                  background: "var(--coral-050)", color: "var(--coral-600)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid var(--coral-100)",
                }}>
                  <Icon name={it.icon} size={16} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-strong)" }}>{it.title}</div>
                  <div style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.45, marginTop: 2 }}>{it.body}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Button variant="primary" size="lg" icon="arrow-right" iconPos="right" onClick={dismiss} style={{ flex: 1 }}>
              Empezar a explorar
            </Button>
          </div>

          <div style={{ fontSize: 11, color: "var(--fg-subtle)", textAlign: "center", marginTop: 14, lineHeight: 1.5 }}>
            Al continuar, aceptas nuestros <span style={{ color: "var(--fg-muted)", textDecoration: "underline" }}>Términos</span> y <span style={{ color: "var(--fg-muted)", textDecoration: "underline" }}>Política de privacidad</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

window.WelcomeModal = WelcomeModal;
