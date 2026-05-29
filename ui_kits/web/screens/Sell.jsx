/* eslint-disable */
/* Motorra · Sell-your-car (instant offer) flow */

const SellScreen = ({ navigate }) => {
  const [step, setStep] = React.useState(1);

  return (
    <main style={{ paddingTop: 32, paddingBottom: 80 }}>
      <Container max={920}>
        {/* Stepper */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
          {[
            { n: 1, label: "Datos del vehículo" },
            { n: 2, label: "Estado y fotos" },
            { n: 3, label: "Tu oferta cash" },
          ].map((s, idx, arr) => (
            <React.Fragment key={s.n}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: step >= s.n ? "var(--fg-strong)" : "var(--ink-100)",
                  color: step >= s.n ? "var(--on-fg-strong)" : "var(--ink-500)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                  flexShrink: 0,
                }}>{step > s.n ? "✓" : s.n}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--fg-subtle)" }}>Paso {s.n}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: step >= s.n ? "var(--fg-strong)" : "var(--ink-500)", whiteSpace: "nowrap" }}>{s.label}</div>
                </div>
              </div>
              {idx < arr.length - 1 && <div style={{ flex: 0.2, height: 1, background: "var(--ink-200)", alignSelf: "center" }}/>}
            </React.Fragment>
          ))}
        </div>

        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && <Step2 onBack={() => setStep(1)} onNext={() => setStep(3)} />}
        {step === 3 && <Step3 onBack={() => setStep(2)} navigate={navigate} />}
      </Container>
    </main>
  );
};

const Step1 = ({ onNext }) => (
  <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 36 }}>
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--coral-600)", marginBottom: 12, padding: "5px 10px", background: "var(--coral-050)", borderRadius: 9999 }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--coral-500)", animation: "motorra-pulse 2s ease-in-out infinite" }}></span>
      Etapa fundadores · 0% comisión
    </div>
    <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 38, letterSpacing: "-0.025em", margin: "0 0 8px", color: "var(--fg-strong)" }}>
      Empieza por la patente.
    </h1>
    <p style={{ fontSize: 15, color: "var(--fg-muted)", margin: "0 0 28px", lineHeight: 1.5 }}>
      Con tu patente o VIN traemos automáticamente la marca, modelo, año y especificaciones. <strong style={{ color: "var(--fg-strong)", fontWeight: 600 }}>Publicar es gratis durante todo el lanzamiento</strong> — sin comisiones ni cargos ocultos.
    </p>

    <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
      <Input label="Patente o VIN" placeholder="BBKR92" icon="hash" defaultValue="BBKR92" helper="Te ayudamos a precargar los datos." />
      <Select label="País" options={["Chile", "Argentina", "México", "Colombia", "Perú", "España", "Brasil"]} defaultValue="Chile" />
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
      <Input label="Marca" defaultValue="Toyota" />
      <Input label="Modelo" defaultValue="Hilux" />
      <Input label="Versión" defaultValue="2.4 4×4 SR" />
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
      <Select label="Año" options={["2024","2023","2022","2021","2020","2019","2018"]} defaultValue="2021" />
      <Input label="Kilometraje" defaultValue="45.200" prefix="" icon="gauge" />
      <Select label="Combustible" options={["Diésel","Bencina","Eléctrico","Híbrido"]} defaultValue="Diésel" />
    </div>

    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32 }}>
      <Button variant="primary" size="lg" icon="arrow-right" iconPos="right" onClick={onNext}>Continuar</Button>
    </div>
  </div>
);

const Step2 = ({ onBack, onNext }) => {
  const [condition, setCondition] = React.useState("excellent");
  const conditions = [
    { id: "excellent", label: "Excelente", desc: "Sin choques, sin rayones, todo funciona." },
    { id: "good", label: "Bueno", desc: "Algún detalle menor de uso normal." },
    { id: "fair", label: "Regular", desc: "Necesita arreglos visibles." },
  ];

  return (
    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 36 }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", margin: "0 0 8px", color: "var(--fg-strong)" }}>
        ¿En qué estado está?
      </h1>
      <p style={{ fontSize: 15, color: "var(--fg-muted)", margin: "0 0 24px" }}>
        Sé honesto. Si después la inspección dice otra cosa, ajustamos la oferta — nunca te dejamos colgado.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
        {conditions.map(c => (
          <div key={c.id} onClick={() => setCondition(c.id)} style={{
            padding: 18, borderRadius: 12, cursor: "pointer",
            border: condition === c.id ? "2px solid var(--ink-900)" : "2px solid var(--border)",
            background: condition === c.id ? "var(--bg-sunken)" : "var(--bg-canvas)",
            transition: "all 140ms",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--fg-strong)" }}>{c.label}</div>
              <div style={{ width: 18, height: 18, borderRadius: "50%", border: condition === c.id ? "5px solid var(--coral-500)" : "2px solid var(--border-strong)", background: "var(--bg-canvas)" }}/>
            </div>
            <div style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.45 }}>{c.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-strong)", marginBottom: 4 }}>Fotos del vehículo</div>
        <div style={{ fontSize: 12, color: "var(--fg-muted)", marginBottom: 12 }}>Al menos 4 fotos: frontal, lateral, interior, kilómetros del odómetro.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {["Frontal", "Lateral", "Interior", "Odómetro"].map((label, i) => (
            <div key={label} style={{
              aspectRatio: "1 / 1", borderRadius: 10,
              border: "2px dashed var(--border-strong)", background: "var(--bg-sunken)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
              color: "var(--fg-muted)", cursor: "pointer",
            }}>
              <Icon name="camera" size={20} />
              <div style={{ fontSize: 11, fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
        <Button variant="ghost" size="lg" icon="arrow-left" onClick={onBack}>Volver</Button>
        <Button variant="primary" size="lg" icon="arrow-right" iconPos="right" onClick={onNext}>Ver mi oferta</Button>
      </div>
    </div>
  );
};

const Step3 = ({ onBack, navigate }) => (
  <div>
    <div style={{ background: "linear-gradient(135deg, var(--bg-dark), var(--bg-dark-alt))", color: "var(--paper)", borderRadius: 16, padding: 40, textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--coral-500)", marginBottom: 12 }}>Tu oferta Motorra</div>
      <div style={{ fontSize: 13, color: "rgba(250,247,240,0.7)" }}>2021 Toyota Hilux 2.4 4×4 SR · 45.200 km</div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 84, letterSpacing: "-0.03em", margin: "16px 0 4px", fontVariationSettings: '"opsz" 84' }}>
        CLP $18.420.000
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--forest-400)", padding: "6px 12px", background: "rgba(20,147,91,0.15)", borderRadius: 9999 }}>
        <Icon name="trending-up" size={14}/> 4% sobre el promedio del mercado
      </div>
      <div style={{ fontSize: 12, color: "rgba(250,247,240,0.5)", marginTop: 14 }}>Oferta válida por 7 días. Sujeta a inspección presencial sin costo.</div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--coral-100)", color: "var(--coral-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="check-circle-2" size={20}/>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, margin: 0 }}>Aceptas esta oferta</h3>
        </div>
        <p style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 16px" }}>
          Agendamos inspección en tu domicilio (gratis). Si todo coincide, te transferimos en 24 hs y retiramos el auto.
        </p>
        <Button variant="primary" size="md" style={{ width: "100%" }} icon="arrow-right" iconPos="right">Aceptar y agendar inspección</Button>
      </div>
      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--ocean-100)", color: "var(--ocean-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="megaphone" size={20}/>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, margin: 0 }}>Quieres probar el mercado</h3>
        </div>
        <p style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 16px" }}>
          Publicamos tu auto al precio que quieras. Vendemos al mejor postor y te pagamos al cierre.
        </p>
        <Button variant="ghost" size="md" style={{ width: "100%" }}>Publicar en marketplace</Button>
      </div>
    </div>

    <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 24 }}>
      <Button variant="text" icon="arrow-left" onClick={onBack}>Ajustar datos</Button>
    </div>
  </div>
);

window.SellScreen = SellScreen;
