/* eslint-disable */
/* Motorra Club · mock data
   Inventario tagged with seller member profile (founder badges etc.)
*/

const UB = "https://images.unsplash.com/photo-";
const UQ = "?w=1600&h=1100&fit=crop&auto=format&q=70";
const photo = (id) => UB + id + UQ;

window.MC_MEMBERS = {
  "u-001": { id: "u-001", name: "Roberto Cifuentes", initial: "R", joined: "07.MAY.2026", founderNum: "001", city: "Las Condes", sales: 8, rating: 4.9, badges: ["founder", "top-50", "verified", "quick-reply"], avatarColor: "#FF5B2E" },
  "u-042": { id: "u-042", name: "Carolina Vergara", initial: "C", joined: "15.MAY.2026", founderNum: "042", city: "Vitacura", sales: 3, rating: 4.9, badges: ["founder", "verified", "quick-reply", "trader"], avatarColor: "#7C5AE0" },
  "u-018": { id: "u-018", name: "Diego Larraín", initial: "D", joined: "11.MAY.2026", founderNum: "018", city: "Providencia", sales: 4, rating: 5.0, badges: ["founder", "verified", "ev-pioneer"], avatarColor: "#14935B" },
  "u-088": { id: "u-088", name: "Andrés Cifuentes", initial: "A", joined: "20.MAY.2026", founderNum: "088", city: "Maipú", sales: 1, rating: 4.6, badges: ["founder", "newbie"], avatarColor: "#F5A524" },
  "u-067": { id: "u-067", name: "María Pérez", initial: "M", joined: "17.MAY.2026", founderNum: "067", city: "La Reina", sales: 2, rating: 4.8, badges: ["founder", "verified"], avatarColor: "#DC2A2F" },
};

window.MC_BADGE_DEFS = {
  founder: { emoji: "👑", label: "Fundador", desc: "Uno de los primeros 100 miembros", permanent: true },
  "top-50": { emoji: "🏆", label: "Top 50 mayo", desc: "Mejor reputación del mes", permanent: false },
  verified: { emoji: "✅", label: "Verificado", desc: "Identidad + papeles validados", permanent: true },
  "quick-reply": { emoji: "⚡", label: "Respuesta rápida", desc: "Menos de 1h promedio", permanent: false },
  trader: { emoji: "🔥", label: "Trader activo", desc: "3+ ventas en 90 días", permanent: false },
  "ev-pioneer": { emoji: "🌱", label: "EV Pioneer", desc: "Compró/vendió un eléctrico", permanent: true },
  newbie: { emoji: "🌟", label: "Recién llegado", desc: "Activo desde hace menos de 30 días", permanent: false },
};

window.MC_LISTINGS = [
  {
    id: "L-001", sellerId: "u-042",
    year: 2020, make: "BMW", model: "320i", trim: "M Sport",
    body: "Sedán", fuel: "Bencina", trans: "Aut.", km: 52800,
    price: 24990000, currency: "CLP",
    photo: photo("1555215695-3004980ad54e"),
    photos: [photo("1555215695-3004980ad54e"), photo("1503376780353-7e6692767b70"), photo("1542362567-b07e54358753")],
    location: "Vitacura, Santiago",
    publishedAt: "Hace 12 min",
    description: "BMW 320i M Sport, 4 cilindros turbo, paquete M completo. Llantas M de 19\", asientos cuero deportivos, head-up display, cámara 360. Único dueño, sin choques, mantención BMW al día.",
    notes: "Vendo porque me cambio a un SUV familiar. Acepto ofertas razonables 🔥",
    likes: 24, comments: 8,
  },
  {
    id: "L-002", sellerId: "u-018",
    year: 2023, make: "Tesla", model: "Model 3", trim: "Long Range",
    body: "Eléctrico", fuel: "Eléctrico", trans: "Aut.", km: 12400,
    price: 32990000, currency: "CLP",
    photo: photo("1560958089-b8a1929cea89"),
    photos: [photo("1560958089-b8a1929cea89"), photo("1617704548623-340376564e68")],
    location: "Providencia, Santiago",
    publishedAt: "Hace 1 h",
    description: "Tesla Model 3 Long Range, autonomía 580 km. Autopilot incluido, supercargador activado. Único dueño.",
    notes: "Cambio por algo más familiar con espacio para perro grande. Autopilot incluido, no FSD.",
    likes: 47, comments: 14,
  },
  {
    id: "L-003", sellerId: "u-001",
    year: 2021, make: "Toyota", model: "Hilux", trim: "2.4 4×4 SR",
    body: "Camioneta", fuel: "Diésel", trans: "Aut.", km: 45200,
    price: 19990000, currency: "CLP",
    photo: photo("1605559424843-9e4c228bf1c2"),
    photos: [photo("1605559424843-9e4c228bf1c2"), photo("1568901346375-23c9450c58cd")],
    location: "Las Condes, Santiago",
    publishedAt: "Hace 3 h",
    description: "Hilux 4×4 SR diésel automática, mantención al día, único dueño. Cabina doble, pisadera lateral, bumper roll bar.",
    notes: "8va venta en el club — todos contentos hasta acá. Doc al día, lista para entrega.",
    likes: 18, comments: 5,
  },
  {
    id: "L-004", sellerId: "u-067",
    year: 2022, make: "Kawasaki", model: "Ninja 400", trim: "ABS",
    body: "Moto", fuel: "Bencina", trans: "Man.", km: 4800,
    price: 5990000, currency: "CLP",
    photo: photo("1568772585407-9361f9bf3a87"),
    photos: [photo("1568772585407-9361f9bf3a87")],
    location: "La Reina, Santiago",
    publishedAt: "Hace 5 h",
    description: "Ninja 400 ABS, único dueño, todos los servicios al día. Slider de motor, escape Akrapovic, llantas Pirelli Rosso.",
    notes: "La uso poco — vendo porque me compré algo más grande. Excelente moto de iniciación.",
    likes: 11, comments: 3,
  },
  {
    id: "L-005", sellerId: "u-088",
    year: 2024, make: "Hyundai", model: "Tucson", trim: "Limited",
    body: "SUV", fuel: "Bencina", trans: "Aut.", km: 8200,
    price: 27490000, currency: "CLP",
    photo: photo("1593941707882-a5bba14938c7"),
    photos: [photo("1593941707882-a5bba14938c7")],
    location: "Maipú, Santiago",
    publishedAt: "Hace 12 h",
    description: "Hyundai Tucson Limited 2024 con garantía de fábrica vigente. Pantalla curva 24\", sunroof panorámico, Bose, AWD.",
    notes: "Auto familiar prácticamente nuevo. Lo cambio por leasing corporativo.",
    likes: 9, comments: 4,
  },
  {
    id: "L-006", sellerId: "u-042",
    year: 2022, make: "Mazda", model: "3", trim: "GT Touring",
    body: "Hatchback", fuel: "Bencina", trans: "Aut.", km: 28400,
    price: 18490000, currency: "CLP",
    photo: photo("1503376780353-7e6692767b70"),
    photos: [photo("1503376780353-7e6692767b70")],
    location: "Providencia, Santiago",
    publishedAt: "Hace 1 día",
    description: "Mazda 3 GT, full equipo, Bose audio, asientos cuero calefaccionados, sunroof. Mantenciones Mazda Servicio Premium.",
    notes: "2da publicación del club — vendo porque me mudo. Detalles vía WhatsApp.",
    likes: 14, comments: 2,
  },
];

window.MC_CHANNELS = [
  { sect: "MOTORRA · CHILE", items: [
    { id: "announcements", name: "anuncios", icon: "megaphone", count: null },
    { id: "feed", name: "feed", icon: "hash" },
    { id: "browse", name: "comprar", icon: "shopping-bag", route: "browse" },
    { id: "categorias", name: "categorías", icon: "layout-grid", route: "categories" },
    { id: "help", name: "ayuda", icon: "life-buoy" },
  ]},
  { sect: "CATEGORÍAS", items: [
    { id: "autos", name: "autos", icon: "car", count: "1.2k", route: "browse" },
    { id: "motos", name: "motos", icon: "bike", count: "340", route: "browse" },
    { id: "camionetas", name: "camionetas", icon: "truck", count: "612", route: "browse" },
    { id: "suv", name: "suv", icon: "caravan", count: "534", route: "browse" },
    { id: "electricos", name: "eléctricos", icon: "zap", count: "184", route: "browse" },
    { id: "comerciales", name: "comerciales", icon: "bus", count: "78", route: "browse" },
  ]},
  { sect: "CLUB FUNDADORES", items: [
    { id: "fundadores", name: "fundadores-100", icon: "crown", count: "47/100" },
    { id: "eventos", name: "encuentros", icon: "calendar" },
  ]},
];

window.MC_FORMAT_PRICE = (p) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(p);
window.MC_FORMAT_KM    = (k) => new Intl.NumberFormat("es-CL").format(k) + " km";
