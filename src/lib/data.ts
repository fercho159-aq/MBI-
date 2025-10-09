import { Home as HomeIcon, Building, Shovel, Rss, LucideIcon } from "lucide-react";
import type { Property } from "./types";

export const featuredProperties: Property[] = [
  {
    id: "h1",
    title: "Terreno en Cañadas del Arroyo",
    description: "Amplio terreno residencial con vistas panorámicas.",
    location: "Cañadas del Arroyo, Querétaro",
    price: "$1,500,000 MXN",
    type: "Terreno",
    imageId: "terreno-1",
  },
  {
    id: "i1",
    title: "Nave Industrial en Europarck",
    description: "Espacio industrial moderno, ideal para logística.",
    location: "Europarck, Querétaro",
    price: "Renta/Venta",
    type: "Industrial",
    imageId: "industrial-1",
  },
  {
    id: "p1",
    title: "Casa de Campo en San Miguel",
    description: "Encantadora propiedad en el corazón de un Pueblo Mágico.",
    location: "San Miguel de Allende, Guanajuato",
    price: "$8,200,000 MXN",
    type: "Turismo",
    imageId: "pueblo-1",
  },
];

export const habitacionalProperties: Property[] = [
  {
    id: "h1",
    title: "Terreno en Cañadas del Arroyo",
    description: "Amplio terreno residencial con vistas panorámicas, ideal para construir la casa de tus sueños.",
    location: "Cañadas del Arroyo, Querétaro",
    price: "$1,500,000 MXN",
    type: "Terreno",
    imageId: "terreno-1",
  },
  {
    id: "h2",
    title: "Departamento de Lujo en Terra Pura VIP",
    description: "Exclusivo departamento con acabados de primera y amenidades de lujo.",
    location: "Terra Pura VIP, Querétaro",
    price: "$4,800,000 MXN",
    type: "Departamento",
    imageId: "departamento-1",
  },
  {
    id: "h3",
    title: "Terreno con Vista al Valle",
    description: "Oportunidad única para adquirir un terreno con vistas espectaculares en una zona de alta plusvalía.",
    location: "Cañadas del Arroyo, Querétaro",
    price: "$1,850,000 MXN",
    type: "Terreno",
    imageId: "terreno-2",
  },
    {
    id: "h4",
    title: "Penthouse Moderno",
    description: "Vive en las alturas con este increíble penthouse de dos niveles y roof garden privado.",
    location: "Terra Pura VIP, Querétaro",
    price: "$7,500,000 MXN",
    type: "Departamento",
    imageId: "departamento-2",
  },
];

export const industrialProperties: Property[] = [
  {
    id: "i1",
    title: "Nave Industrial en Europarck",
    description: "Espacio industrial moderno de 1,200 m², ideal para logística y manufactura ligera.",
    location: "Europarck, Querétaro",
    price: "Renta/Venta",
    type: "Industrial",
    imageId: "industrial-1",
  },
  {
    id: "i2",
    title: "Bodega en Grupo SHP",
    description: "Funcional bodega de 800 m² con oficinas y patio de maniobras en parque industrial seguro.",
    location: "Grupo SHP, Querétaro",
    price: "Renta",
    type: "Industrial",
    imageId: "industrial-2",
  },
];

export const comercialProperties: Property[] = [
  {
    id: "c1",
    title: "Local Comercial en Plaza Central",
    description: "Local de 150 m² con alto flujo peatonal, perfecto para franquicias o boutiques.",
    location: "Centro, Querétaro",
    price: "$35,000 MXN/mes",
    type: "Comercial",
    imageId: "comercial-1",
  },
  {
    id: "c2",
    title: "Oficinas Corporativas",
    description: "Piso completo de oficinas de 500 m² en prestigioso edificio corporativo.",
    location: "Juriquilla, Querétaro",
    price: "Renta",
    type: "Comercial",
    imageId: "comercial-2",
  },
];

export const pueblosMagicosProperties: Property[] = [
  {
    id: "p1",
    title: "Casa de Campo en San Miguel",
    description: "Encantadora propiedad con jardín amplio en el corazón de San Miguel de Allende.",
    location: "San Miguel de Allende, Guanajuato",
    price: "$8,200,000 MXN",
    type: "Turismo",
    imageId: "pueblo-1",
  },
  {
    id: "p2",
    title: "Cabaña en Amealco",
    description: "Acogedora cabaña de madera rodeada de bosque, ideal para escapadas de fin de semana.",
    location: "Amealco, Querétaro",
    price: "$3,500,000 MXN",
    type: "Turismo",
    imageId: "pueblo-2",
  },
];

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
