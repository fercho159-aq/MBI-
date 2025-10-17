export type NavLink = {
  href: string;
  label: string;
  subLinks?: NavLink[];
};

export const navLinks: NavLink[] = [
  { href: "/nosotros", label: "Nosotros" },
  {
    href: "/habitacional",
    label: "Habitacional",
    subLinks: [
      { href: "#", label: "Desarrollos" },
      {
        href: "#",
        label: "Terrenos para Casa",
        subLinks: [
          { href: "#", label: "Cañadas del Arroyo" },
          { href: "#", label: "Cañadas del Valle" },
          { href: "#", label: "Simate" },
          { href: "/habitacional/aldea-campestre", label: "Aldea" },
          { href: "#", label: "Xanta" },
          { href: "#", label: "Punto Olivo" },
          { href: "#", label: "Cañada la Porta" },
          { href: "#", label: "Lago de Juriquilla" },
          { href: "#", label: "Ciudad Maderas" },
        ],
      },
      {
        href: "#",
        label: "Departamentos",
        subLinks: [
          { href: "#", label: "Terra Pura VIP" },
          { href: "#", label: "Pasaje Alamos VIP" },
          { href: "#", label: "La Ceiba Depas VIP" },
        ],
      },
      { href: "#", label: "Oportunidades" },
      { href: "#", label: "Traspasos" },
    ],
  },
  {
    href: "/industrial",
    label: "Industrial",
    subLinks: [
      {
        href: "#",
        label: "Parques Industriales",
        subLinks: [
          { href: "/industrial/grupo-sph", label: "Grupo SPH" },
          { href: "#", label: "Spartek" },
          { href: "#", label: "Acupark" },
          { href: "#", label: "Norponiente" },
        ],
      },
      { href: "/industrial/practi-park", label: "Practipark" },
      { href: "#", label: "Europarck" },
      { href: "#", label: "VT Logistic Center" },
      { href: "/industrial/bluhen-business-park", label: "Bluhen Business Park" },
      { href: "/industrial/industrialix", label: "Industrialix" }
    ],
  },
  { href: "/comercial", label: "Comercial" },
  {
    href: "/pueblos-magicos",
    label: "Pueblos Mágicos",
    subLinks: [
      { href: "#", label: "San Miguel de Allende" },
      { href: "#", label: "La Serena Residencial" },
      { href: "#", label: "Sahai" },
      { href: "#", label: "Maderas San Miguel" },
      { href: "#", label: "Amealco" },
      { href: "#", label: "San Gabriel" },
      { href: "#", label: "Tzai" },
      { href: "#", label: "Yucatán" },
      { href: "#", label: "Costerra" },
      { href: "#", label: "Costa Cabaña" },
      { href: "#", label: "Huimilpan" },
      { href: "#", label: "La Suiza" },
    ],
  },
  {
    href: "/construccion",
    label: "Construcción",
    subLinks: [
        { href: "#", label: "Info" },
    ]
  },
  { href: "/contacto", label: "Contacto" },
];
    