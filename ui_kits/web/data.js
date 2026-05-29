/* eslint-disable */
/* Motorra · mock inventory + photo helpers */

/* ───────────────────────────────────────────────
   Curated photos by vehicle category.
   Each entry is a stable Unsplash photo ID known to render the right body type.
   If you swap a photo, validate the content matches the category!
   ─────────────────────────────────────────────── */
const UNSPLASH_BASE = "https://images.unsplash.com/photo-";
const Q = "?w=1600&h=1000&fit=crop&auto=format&q=70";

const PHOTOS_BY_BODY = {
  "Sedán":    [
    "1555215695-3004980ad54e", // BMW dark sedan
    "1503376780353-7e6692767b70", // BMW grey sedan
    "1542362567-b07e54358753", // dark sedan
  ],
  "SUV":      [
    "1593941707882-a5bba14938c7", // SUV blue
    "1606664515524-ed2f786a0bd6", // SUV black
    "1494976388531-d1058494cdd8", // SUV side
  ],
  "Camioneta":[
    "1605559424843-9e4c228bf1c2", // red pickup
    "1568901346375-23c9450c58cd", // truck off-road
    "1500382017468-9049fed747ef", // orange truck
  ],
  "Moto":     [
    "1568772585407-9361f9bf3a87", // Kawasaki Ninja green
    "1558981806-ec527fa84c39", // dark sport bike
    "1568708941-ee46e1ed7d59", // street bike
  ],
  "Eléctrico":[
    "1560958089-b8a1929cea89", // Tesla white
    "1617704548623-340376564e68", // Tesla studio
    "1593941707882-a5bba14938c7", // generic EV
  ],
  "Hatchback":[
    "1503376780353-7e6692767b70",
    "1605559424843-9e4c228bf1c2",
  ],
  "Comercial":[
    "1530268729831-4b0b9e170218", // van side
    "1601928748876-d6c7d1b7d6dd", // commercial
  ],
};

const photoFor = (vehicle, idx = 0) => {
  const arr = PHOTOS_BY_BODY[vehicle.bodyType] || PHOTOS_BY_BODY["Sedán"];
  const photoId = arr[idx % arr.length];
  return UNSPLASH_BASE + photoId + Q;
};

window.MOTORRA_INVENTORY = [
  // — AUTOS / SEDÁN / HATCHBACK —
  {
    id: "MOT-0048310", year: 2020, make: "BMW", model: "320i", trim: "M Sport",
    bodyType: "Sedán", fuel: "Bencina", transmission: "Automática",
    km: 52800, price: 24990000, currency: "CLP", market: "CL",
    location: "Vitacura, Santiago", color: "Negro zafiro",
    seller: { type: "Particular", name: "Carolina Vergara", rating: 4.9, sales: 1, since: "Hace 2 días" },
    badges: ["hot"],
    description: "BMW 320i M Sport, 4 cilindros turbo, paquete M completo. Llantas M de 19\", asientos cuero deportivos, head-up display, cámara 360. Único dueño, sin choques, mantención BMW al día.",
  },
  {
    id: "MOT-0048512", year: 2022, make: "Mazda", model: "3", trim: "GT 2.5 Touring",
    bodyType: "Hatchback", fuel: "Bencina", transmission: "Automática",
    km: 28400, price: 18490000, currency: "CLP", market: "CL",
    location: "Providencia, Santiago", color: "Soul Red Crystal",
    seller: { type: "Particular", name: "Felipe Soto", rating: 4.7, sales: 1, since: "Hace 6 días" },
    badges: [],
    description: "Mazda 3 GT, full equipo, Bose audio, asientos cuero calefaccionados, sunroof. Mantenciones Mazda Servicio Premium.",
  },
  {
    id: "MOT-0048604", year: 2021, make: "Toyota", model: "Corolla", trim: "SEG 1.8 Hybrid",
    bodyType: "Sedán", fuel: "Híbrido", transmission: "Automática",
    km: 38900, price: 16990000, currency: "CLP", market: "CL",
    location: "Las Condes, Santiago", color: "Plata metálico",
    seller: { type: "Particular", name: "María Pérez", rating: 5.0, sales: 1, since: "Hace 1 día" },
    badges: ["hot"],
    description: "Corolla híbrido de fábrica, rinde 22 km/L. Tope de línea SEG: cuero, ADAS completo, llantas 17\". Patente nueva, dos llaves.",
  },

  // — SUV —
  {
    id: "MOT-0048345", year: 2022, make: "Mazda", model: "CX-5", trim: "GT 2.5 AWD",
    bodyType: "SUV", fuel: "Bencina", transmission: "Automática",
    km: 38500, price: 22900000, currency: "CLP", market: "CL",
    location: "Ñuñoa, Santiago", color: "Soul Red Crystal",
    seller: { type: "Dealer", name: "Mazda Plaza", rating: 4.7, sales: 890, since: "Activo desde 2019" },
    badges: ["hot"],
    description: "Mazda CX-5 GT tope de línea, AWD, cuero blanco, sunroof panorámico, head-up display, BSM. Listo para invierno cordillerano.",
  },
  {
    id: "MOT-0048402", year: 2024, make: "Hyundai", model: "Tucson", trim: "Limited 1.6T",
    bodyType: "SUV", fuel: "Bencina", transmission: "Automática",
    km: 8200, price: 27490000, currency: "CLP", market: "CL",
    location: "La Reina, Santiago", color: "Azul ultramar",
    seller: { type: "Dealer", name: "Hyundai Premium", rating: 4.8, sales: 2100, since: "Activo desde 2017" },
    badges: ["new"],
    description: "Hyundai Tucson Limited 2024 con garantía de fábrica vigente (5 años). Pantalla curva 24\", sunroof panorámico, Bose, AWD inteligente.",
  },
  {
    id: "MOT-0048711", year: 2019, make: "Kia", model: "Sportage", trim: "EX 2.0",
    bodyType: "SUV", fuel: "Bencina", transmission: "Automática",
    km: 79500, price: 14990000, currency: "CLP", market: "CL",
    location: "Maipú, Santiago", color: "Blanco perla",
    seller: { type: "Particular", name: "Roberto Cifuentes", rating: 4.6, sales: 2, since: "Hace 12 días" },
    badges: [],
    description: "Kia Sportage EX, mantención en concesionario Kia. Listo para entregar con revisión técnica al día.",
  },

  // — CAMIONETAS / PICKUPS —
  {
    id: "MOT-0048291", year: 2021, make: "Toyota", model: "Hilux", trim: "2.4 4×4 SR",
    bodyType: "Camioneta", fuel: "Diésel", transmission: "Automática",
    km: 45200, price: 19990000, currency: "CLP", market: "CL",
    location: "Las Condes, Santiago", color: "Blanco perla",
    seller: { type: "Dealer", name: "Toyota Las Condes", rating: 4.8, sales: 1240, since: "Activo desde 2015" },
    badges: ["hot"],
    description: "Hilux 4×4 SR diésel automática, mantención al día, único dueño. Cabina doble, pisadera lateral, bumper roll bar, forro de pisos.",
  },
  {
    id: "MOT-0048391", year: 2020, make: "Ford", model: "Ranger", trim: "Limited 3.2",
    bodyType: "Camioneta", fuel: "Diésel", transmission: "Automática",
    km: 78900, price: 22990000, currency: "CLP", market: "CL",
    location: "Maipú, Santiago", color: "Gris magnético",
    seller: { type: "Particular", name: "Roberto Méndez", rating: 4.6, sales: 2, since: "Hace 3 días" },
    badges: [],
    description: "Ford Ranger Limited, full equipo, mantenciones en Ford. Cuero, GPS, cámara reversa, climatizador dual.",
  },
  {
    id: "MOT-0048445", year: 2018, make: "Volkswagen", model: "Amarok", trim: "Trendline 2.0",
    bodyType: "Camioneta", fuel: "Diésel", transmission: "Manual",
    km: 110500, price: 14900000, currency: "CLP", market: "CL",
    location: "Talca", color: "Gris oscuro",
    seller: { type: "Particular", name: "Andrés Castro", rating: 4.3, sales: 1, since: "Hace 9 días" },
    badges: [],
    description: "VW Amarok 4×2 manual, ideal trabajo, mecánica impecable. Bowl liner, enganche, cubiertas casi nuevas.",
  },

  // — ELÉCTRICOS —
  {
    id: "MOT-0048322", year: 2023, make: "Tesla", model: "Model 3", trim: "Long Range",
    bodyType: "Eléctrico", fuel: "Eléctrico", transmission: "Automática",
    km: 12400, price: 32990000, currency: "CLP", market: "CL",
    location: "Providencia, Santiago", color: "Blanco perla",
    seller: { type: "Particular", name: "Diego Larraín", rating: 5.0, sales: 1, since: "Hace 4 días" },
    badges: ["hot"],
    description: "Tesla Model 3 Long Range, autonomía 580 km. Autopilot incluido, supercargador activado. Único dueño, mantención Tesla.",
  },
  {
    id: "MOT-0048833", year: 2024, make: "BYD", model: "Atto 3", trim: "Premium",
    bodyType: "Eléctrico", fuel: "Eléctrico", transmission: "Automática",
    km: 5800, price: 23990000, currency: "CLP", market: "CL",
    location: "Vitacura, Santiago", color: "Azul océano",
    seller: { type: "Dealer", name: "BYD Chile Vitacura", rating: 4.9, sales: 320, since: "Activo desde 2023" },
    badges: ["new"],
    description: "BYD Atto 3 Premium, batería 60 kWh, autonomía 420 km WLTP. Pantalla rotativa, asientos cuero vegano, techo panorámico.",
  },

  // — MOTOS —
  {
    id: "MOT-0048501", year: 2022, make: "Kawasaki", model: "Ninja 400", trim: "ABS",
    bodyType: "Moto", fuel: "Bencina", transmission: "Manual",
    km: 4800, price: 5990000, currency: "CLP", market: "CL",
    location: "Las Condes, Santiago", color: "Verde Kawasaki",
    seller: { type: "Particular", name: "Diego Riquelme", rating: 5.0, sales: 1, since: "Hace 5 días" },
    badges: [],
    description: "Ninja 400 ABS, único dueño, todos los servicios al día. Slider de motor, escape Akrapovic, llantas Pirelli Rosso.",
  },
  {
    id: "MOT-0048622", year: 2021, make: "Honda", model: "CB 500F", trim: "ABS",
    bodyType: "Moto", fuel: "Bencina", transmission: "Manual",
    km: 12600, price: 4490000, currency: "CLP", market: "CL",
    location: "Ñuñoa, Santiago", color: "Negro mate",
    seller: { type: "Particular", name: "Tomás Carvallo", rating: 4.8, sales: 1, since: "Hace 14 días" },
    badges: [],
    description: "Honda CB 500F, perfecta para naked riders. Asiento cómodo, posición erguida, ideal ciudad + ruta.",
  },
  {
    id: "MOT-0048744", year: 2023, make: "Yamaha", model: "MT-07", trim: "Standard",
    bodyType: "Moto", fuel: "Bencina", transmission: "Manual",
    km: 3200, price: 7290000, currency: "CLP", market: "CL",
    location: "Lo Barnechea, Santiago", color: "Azul Yamaha",
    seller: { type: "Dealer", name: "Yamaha Lo Barnechea", rating: 4.9, sales: 540, since: "Activo desde 2018" },
    badges: ["hot"],
    description: "Yamaha MT-07, twin paralelo 689 cc, garantía de fábrica vigente. Quickshifter, slider, baby blade.",
  },

  // — COMERCIALES —
  {
    id: "MOT-0048902", year: 2021, make: "Renault", model: "Kangoo Express", trim: "1.5 dCi",
    bodyType: "Comercial", fuel: "Diésel", transmission: "Manual",
    km: 89400, price: 9990000, currency: "CLP", market: "CL",
    location: "Quilicura, Santiago", color: "Blanco",
    seller: { type: "Dealer", name: "Comercial Vehículos Norte", rating: 4.5, sales: 380, since: "Activo desde 2014" },
    badges: [],
    description: "Renault Kangoo Express, ideal reparto. Capacidad 650 kg, 2 puertas laterales corredizas, barra divisoria. Documentos al día.",
  },
  {
    id: "MOT-0048945", year: 2019, make: "Mercedes-Benz", model: "Sprinter", trim: "311 CDI",
    bodyType: "Comercial", fuel: "Diésel", transmission: "Manual",
    km: 142000, price: 21490000, currency: "CLP", market: "CL",
    location: "Pudahuel, Santiago", color: "Blanco",
    seller: { type: "Particular", name: "Logística Andes SpA", rating: 4.4, sales: 4, since: "Empresa" },
    badges: [],
    description: "Mercedes Sprinter techo alto, ideal carga pesada o transformación a casa rodante. Mantenciones en MB, sin choques.",
  },
];

// Assign hero photo + gallery to each vehicle
window.MOTORRA_INVENTORY.forEach((v, i) => {
  v.photo = photoFor(v, 0);
  v.photos = [photoFor(v, 0), photoFor(v, 1), photoFor(v, 2), photoFor(v, 0)];
  v.publishedAt = ["Hace 1 día", "Hace 2 días", "Hace 4 días", "Hace 7 días", "Hace 12 días"][i % 5];
  v.views = 50 + ((i * 37) % 400);
});

// Rentals removed from MVP scope but kept for legacy preview if needed
window.MOTORRA_RENTALS = [];

window.formatPrice = function(price, currency = "CLP") {
  const fmt = new Intl.NumberFormat(currency === "CLP" ? "es-CL" : "en-US", {
    style: "currency", currency, maximumFractionDigits: 0
  });
  try { return fmt.format(price); } catch { return `$${price.toLocaleString()}`; }
};

window.formatKm = function(km) {
  return new Intl.NumberFormat("es-CL").format(km) + " km";
};

window.vehiclePhoto = photoFor;
window.MOTORRA_PHOTOS_BY_BODY = PHOTOS_BY_BODY;
