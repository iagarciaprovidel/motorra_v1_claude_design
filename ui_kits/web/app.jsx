/* eslint-disable */
/* Motorra · root app + hash router + tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "sunset",
  "density": "comfortable",
  "listingVariant": "default",
  "heroVariant": "photo-right",
  "showCertifiedBadge": true,
  "tagline": "sin-vueltas",
  "showWelcomeModal": true,
  "previewBuyerSide": false
}/*EDITMODE-END*/;

window.MOTORRA_TAGLINES = {
  "sin-vueltas":   { line1: "Sin vueltas.",         line2: "Sin sorpresas." },
  "vendelo":       { line1: "Vendelo bien.",        line2: "Vendelo rápido." },
  "tu-auto":       { line1: "Tu auto vale.",        line2: "Nosotros lo confirmamos." },
  "transparente":  { line1: "Precio justo,",       line2: "venta transparente." },
  "kilometros":    { line1: "Cada kilómetro",       line2: "cuenta su historia." },
  "manejaste":     { line1: "Lo manejaste vos.",    line2: "Te lo vendemos nosotros." },
  "garage":        { line1: "Sacalo del garaje.",   line2: "Ponelo a trabajar." },
};

window.MOTORRA_PHASE = "MVP-CL"; // future: "LATAM-MULTI"

const useHashRoute = () => {
  const [hash, setHash] = React.useState(window.location.hash || "#/");
  React.useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "instant" });
      setTimeout(() => window.lucide && window.lucide.createIcons(), 50);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
};

const navigate = (to) => { window.location.hash = to.replace(/^#/, ""); };

const App = () => {
  const hash = useHashRoute();
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [welcomeOpen, setWelcomeOpen] = React.useState(false);
  const [comingSoon, setComingSoon] = React.useState(null);

  // Show welcome modal on first visit (or whenever tweak toggles on)
  React.useEffect(() => {
    if (!t.showWelcomeModal) { setWelcomeOpen(false); return; }
    const seen = sessionStorage.getItem("motorra_welcome_seen");
    if (!seen) setWelcomeOpen(true);
  }, [t.showWelcomeModal]);

  // Intercept hash changes to coming-soon ONLY for routes we haven't shipped yet
  React.useEffect(() => {
    if (hash.startsWith("#/arriendo")) {
      setComingSoon({ feature: "El arriendo de vehículos no es parte del scope de Motorra (somos marketplace de compra/venta)", returnTo: "#/" });
      window.location.hash = "/";
    } else if (hash.startsWith("#/financiamiento")) {
      setComingSoon({ feature: "El financiamiento automotriz integrado", returnTo: "#/" });
      window.location.hash = "/";
    }
  }, [hash]);

  // Apply theme to document
  React.useEffect(() => {
    if (t.theme === "night") document.documentElement.setAttribute("data-theme", "night");
    else document.documentElement.removeAttribute("data-theme");
  }, [t.theme]);

  // Density spacing
  const densityScale = { compact: 0.85, comfortable: 1, spacious: 1.15 }[t.density] || 1;
  React.useEffect(() => {
    document.documentElement.style.setProperty("--density-scale", densityScale);
  }, [densityScale]);

  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  window.__tweaks = t;

  let screen, active = "home";
  if (hash.startsWith("#/vender")) { screen = <SellScreen navigate={navigate} tweaks={t} />; active = "vender"; }
  else if (hash.startsWith("#/categorias")) { screen = <CategoriesScreen navigate={navigate} tweaks={t} />; active = "categorias"; }
  else if (hash.startsWith("#/buscar")) { screen = <SearchScreen navigate={navigate} tweaks={t} />; active = "buscar"; }
  else if (hash.startsWith("#/auto/")) {
    const id = hash.replace("#/auto/", "").split("?")[0];
    screen = <DetailScreen navigate={navigate} vehicleId={id} tweaks={t} />;
    active = "buscar";
  }
  else { screen = <HomeScreen navigate={navigate} tweaks={t} onComingSoon={(feature) => setComingSoon({ feature })} previewOn={true} />; active = "home"; }

  return (
    <div className="motorra" style={{ background: "var(--bg-page)", minHeight: "100vh", color: "var(--fg)" }}>
      <Header active={active} onComingSoon={(feature) => setComingSoon({ feature })} />
      {screen}
      <Footer />

      {welcomeOpen && (
        <window.WelcomeModal
          onClose={() => { setWelcomeOpen(false); sessionStorage.setItem("motorra_welcome_seen", "1"); }}
          onPrimary={() => navigate("#/vender")}
        />
      )}
      {comingSoon && (
        <window.ComingSoonOverlay
          feature={comingSoon.feature}
          onClose={() => setComingSoon(null)}
        />
      )}

      <window.TweaksPanel title="Motorra Tweaks">
        <window.TweakSection label="Tagline" />
        <window.TweakSelect
          label="Hero copy"
          value={t.tagline}
          options={Object.entries(window.MOTORRA_TAGLINES).map(([k, v]) => ({ value: k, label: `${v.line1} ${v.line2}` }))}
          onChange={v => setTweak("tagline", v)}
        />

        <window.TweakSection label="Theme" />
        <window.TweakRadio
          label="Variant"
          value={t.theme}
          options={[
            { value: "sunset", label: "Sunset" },
            { value: "night", label: "Night" },
          ]}
          onChange={v => setTweak("theme", v)}
        />

        <window.TweakSection label="Density" />
        <window.TweakRadio
          label="Spacing"
          value={t.density}
          options={[
            { value: "compact", label: "Compact" },
            { value: "comfortable", label: "Comfort" },
            { value: "spacious", label: "Spacious" },
          ]}
          onChange={v => setTweak("density", v)}
        />

        <window.TweakSection label="Listing card" />
        <window.TweakRadio
          label="Style"
          value={t.listingVariant}
          options={[
            { value: "default", label: "Default" },
            { value: "magazine", label: "Magazine" },
            { value: "compact", label: "Compact" },
          ]}
          onChange={v => setTweak("listingVariant", v)}
        />

        <window.TweakSection label="Welcome modal" />
        <window.TweakToggle
          label="Mostrar modal de bienvenida"
          value={t.showWelcomeModal}
          onChange={v => setTweak("showWelcomeModal", v)}
        />
      </window.TweaksPanel>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
