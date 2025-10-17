import { Home as HomeIcon, Building, Shovel, Rss, LucideIcon } from "lucide-react";
import type { Property } from "./types";

export const featuredProperties: Property[] = [
  {
    id: "canadas-del-arroyo",
    title: "Cañadas del Arroyo",
    description: "Aire puro, vistas y paisajes inmejorables para tu nuevo hogar.",
    location: "Querétaro",
    price: "Desde $975,000 MXN",
    type: "Terreno",
    imageId: "canadas-1",
    href: "/habitacional/canadas-del-arroyo",
  },
  {
    id: "xanta-residencial",
    title: "Xanta Residencial",
    description: "Un estilo de vida integral en la zona más exclusiva de Corregidora.",
    location: "Corregidora, Querétaro",
    price: "Desde $597,000 MXN",
    type: "Terreno",
    imageId: "xanta-1",
    href: "/habitacional/xanta",
  },
  {
    id: "practi-park",
    title: "Practi Park Kelary Norte",
    description: "Micro parque industrial y logístico para PYMEs.",
    location: "Querétaro",
    price: "Venta/Renta",
    type: "Industrial",
    imageId: "practi-park-1",
    href: "/industrial/practi-park",
  },
];

export const habitacionalProperties: Property[] = [
  {
    id: "canadas-del-arroyo",
    title: "Terreno en Cañadas del Arroyo",
    description: "Aire puro, vistas y paisajes inmejorables para tu nuevo hogar.",
    location: "Cañadas del Arroyo, Querétaro",
    price: "Desde $975,000 MXN",
    type: "Terreno",
    imageId: "canadas-1",
    href: "/habitacional/canadas-del-arroyo",
  },
    {
    id: "aldea-campestre",
    title: "Terreno en Aldea Campestre",
    description: "Exclusiva privada de 120 terrenos con urbanización de primer nivel.",
    location: "Cerca de Puerta Real, Querétaro",
    price: "Desde $982,000 MXN",
    type: "Terreno",
    imageId: "aldea-1",
    href: "/habitacional/aldea-campestre",
  },
  {
    id: "xanta-residencial",
    title: "Terreno en Xanta Residencial",
    description: "Un estilo de vida integral en la zona más exclusiva de Corregidora.",
    location: "Corregidora, Querétaro",
    price: "Desde $597,000 MXN",
    type: "Terreno",
    imageId: "xanta-1",
    href: "/habitacional/xanta",
  },
];

export const industrialProperties: Property[] = [
  {
    id: "bluhen-business-park",
    title: "Bodega en Bluhen Business Park",
    description: "Una solución moderna y estratégica para su negocio en Querétaro.",
    location: "El Marqués, Querétaro",
    price: "$9,500,000 MXN",
    type: "Industrial",
    imageId: "bluhen-1",
    href: "/industrial/bluhen-business-park",
  },
  {
    id: "practi-park",
    title: "Nave en Practi Park Kelary Norte",
    description: "Micro parque industrial y logístico para PYMEs en la ubicación más estratégica.",
    location: "Frente al PIQ, Querétaro",
    price: "Venta / Renta",
    type: "Industrial",
imageId: "practi-park-1",
    href: "/industrial/practi-park",
  },
  {
    id: "grupo-sph",
    title: "Proyectos Industriales Grupo SPH",
    description: "Bodegas industriales para venta o renta en puntos estratégicos de Querétaro.",
    location: "Querétaro",
    price: "Consultar",
    type: "Industrial",
    imageId: "sph-main",
    href: "/industrial/grupo-sph",
  },
  {
    id: "industrialix",
    title: "Industrialix - The New Energy Cluster",
    description: "Un nuevo clúster energético en México con venta de terrenos y energía.",
    location: "Querétaro",
    price: "Consultar",
    type: "Industrial",
    imageId: "industrialix-1",
    href: "/industrial/industrialix",
  },
];

export const comercialProperties: Property[] = [];

export const pueblosMagicosProperties: Property[] = [];

export const services: { title: string; description: string; icon: LucideIcon }[] = [
    {
        title: "Venta y Renta",
        description: "Encuentre la propiedad perfecta para vivir o invertir.",
        icon: HomeIcon
    },
    {
        title: "Espacios Industriales",
        description: "Soluciones para logística, manufactura y almacenamiento.",
        icon: Building
    },
    {
        title: "Proyectos de Construcción",
        description: "Desde el diseño hasta la entrega, construimos con calidad.",
        icon: Shovel
    },
    {
        title: "Inversión Turística",
        description: "Oportunidades en los destinos más atractivos de México.",
        icon: Rss
    }
];
