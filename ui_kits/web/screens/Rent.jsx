/* eslint-disable */
/* Motorra · Arriendo / Rental browse screen */

const RentScreen = ({ navigate }) => {
  const [duration, setDuration] = React.useState("short");
  const rentals = window.MOTORRA_RENTALS;

  return (
    <main style={{ paddingTop: 0, paddingBottom: 64 }}>
      {/* Search bar hero */}
      <section style={{ background: "var(--paper-2)", padding: "48px 0 40px", borderBottom: "1px solid var(--border)" }}>
        <Container>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 38, letterSpacing: "-0.025em", margin: "0 0 12px", color: "var(--fg-strong)" }}>
            Arrendá un vehículo
          </h1>
          <p style={{ fontSize: 15, color: "var(--fg-muted)", margin: "0 0 28px", maxWidth: 560 }}>
            Por días o por años. Auto, camioneta, eléctrico — para tu fin de semana o tu nuevo trabajo. <strong style={{ color: "var(--fg-strong)", fontWeight: 600 }}>¿Tienes un auto sin uso? Publícalo gratis</strong> y empezá a generar ingresos.
          </p>

          {/* Duration toggle */}
          <div style={{ display: "inline-flex", background: "var(--bg-canvas)", borderRadius: 12, padding: 4, marginBottom: 14, border: "1px solid var(--border)" }}>
            {[
              { id: "short", label: "Corto plazo", desc: "Por días o semanas" },
              { id: "long", label: "Largo plazo / leasing", desc: "Por meses o años" },
            ].map(d => (
              <button key={d.id} onClick={() => setDuration(d.id)} style={{
                padding: "10px 18px", borderRadius: 8, border: 0, cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
                background: duration === d.id ? "var(--fg-strong)" : "transparent",
                color: duration === d.id ? "var(--on-fg-strong)" : "var(--ink-700)",
              }}>{d.label}</button>
            ))}
          </div>

          <div style={{ background: "var(--bg-canvas)", borderRadius: 14, padding: 8, display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr auto", gap: 8, boxShadow: "0 1px 2px rgba(14,16,21,0.06)" }}>
            <Input placeholder="Ciudad o aeropuerto" icon="map-pin" defaultValue="Aeropuerto SCL, Santiago" />
            <Input placeholder="Retiro" icon="calendar" defaultValue="24 may · 10:00" />
            <Input placeholder="Devolución" icon="calendar" defaultValue="28 may · 10:00" />
            <Select options={["Cualquier tipo", "Auto", "SUV", "Camioneta", "Eléctrico"]} />
            <Button variant="primary" size="md" icon="search">Buscar</Button>
          </div>
        </Container>
      </section>

      <section style={{ padding: "40px 0" }}>
        <Container>
          {/* Quick chips */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            <Chip active>Todos</Chip>
            <Chip>Auto</Chip>
            <Chip>SUV</Chip>
            <Chip>Camioneta</Chip>
            <Chip>Eléctrico</Chip>
            <Chip>7+ asientos</Chip>
            <Chip>Automática</Chip>
            <Chip>Sin entrega</Chip>
          </div>

          {/* Result count */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
            <div style={{ fontSize: 14, color: "var(--fg)" }}>
              <span style={{ fontWeight: 700, color: "var(--fg-strong)" }}>248 vehículos</span> disponibles · 24–28 may · Santiago
            </div>
            <Select options={["Recomendados", "Precio: menor a mayor", "Más recientes", "Mejor valorados"]} />
          </div>

          {/* Rental grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 18 }}>
            {rentals.map(r => <RentalCard key={r.id} rental={r} />)}
            {/* Pad with featured */}
            {window.MOTORRA_INVENTORY.slice(0, 4).map(v => (
              <RentalCard key={"f-" + v.id} rental={{
                id: v.id, make: v.make, model: v.model, year: v.year, bodyType: v.bodyType,
                fuel: v.fuel, transmission: v.transmission, seats: 5,
                pricePerDay: Math.round(v.price * 0.0018 / 1000) * 1000,
                currency: v.currency, location: v.location.split(",")[0], photo: v.photo,
              }} />
            ))}
          </div>
        </Container>
      </section>

      {/* Long-term leasing CTA */}
      <section style={{ padding: "16px 0 0" }}>
        <Container>
          <div style={{ background: "var(--bg-dark)", color: "var(--paper)", borderRadius: 24, padding: 48, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--coral-500)", marginBottom: 14 }}>Leasing / Suscripción</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, letterSpacing: "-0.025em", margin: 0, lineHeight: 1.05, color: "var(--paper)" }}>
                ¿Necesitas un auto por meses, no por días?
              </h2>
              <p style={{ fontSize: 15, color: "rgba(250,247,240,0.7)", lineHeight: 1.55, marginTop: 16, maxWidth: 440 }}>
                Leasing operativo desde 12 meses, sin entrada. Mantenimiento, seguro y cambio de modelo cada año, todo incluido.
              </p>
              <Button variant="primary" size="lg" icon="arrow-right" iconPos="right" style={{ marginTop: 20 }}>Ver planes mensuales</Button>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 28 }}>
              {[
                { label: "Desde", value: "CLP $389.000/mes", strong: true },
                { label: "Plazo", value: "12, 24, 36 o 48 meses" },
                { label: "Incluye", value: "Mantención + seguro + GPS" },
                { label: "Cambio", value: "Modelo nuevo cada año" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, color: "rgba(250,247,240,0.5)" }}>{row.label}</div>
                  <div style={{ fontSize: row.strong ? 18 : 14, fontWeight: row.strong ? 700 : 600, color: row.strong ? "var(--coral-500)" : "var(--paper)", fontFamily: row.strong ? "var(--font-display)" : "var(--font-body)", letterSpacing: row.strong ? "-0.01em" : "0" }}>{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

const RentalCard = ({ rental }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      background: "var(--bg-canvas)", borderRadius: 12, overflow: "hidden", cursor: "pointer",
      boxShadow: hover ? "0 6px 16px rgba(14,16,21,0.08)" : "0 1px 2px rgba(14,16,21,0.06), 0 0 0 1px rgba(14,16,21,0.04)",
      transition: "box-shadow 220ms",
    }}>
      <div style={{ aspectRatio: "16/10", overflow: "hidden", position: "relative", background: "var(--bg-sunken)" }}>
        <img src={rental.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <Badge tone="rent">Disponible</Badge>
        </div>
      </div>
      <div style={{ padding: "14px 16px 16px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, margin: 0, color: "var(--fg-strong)", letterSpacing: "-0.01em" }}>{rental.make} {rental.model}</h3>
        <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 2 }}>{rental.bodyType} · {rental.seats} asientos · {rental.transmission}</div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--ink-100)" }}>
          <div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--fg-strong)", letterSpacing: "-0.015em" }}>
              {window.formatPrice(rental.pricePerDay, rental.currency)}
            </span>
            <span style={{ fontSize: 12, color: "var(--fg-muted)", fontWeight: 600, marginLeft: 4 }}>/día</span>
          </div>
          <span style={{ fontSize: 11, color: "var(--fg-muted)" }}>{rental.location}</span>
        </div>
      </div>
    </div>
  );
};

window.RentScreen = RentScreen;
