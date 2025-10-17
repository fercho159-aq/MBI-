import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Building,
  Car,
  MapPin,
  Users,
  Zap,
  Droplets,
  ShieldCheck,
  Briefcase,
  Layers,
  Container,
  Ruler,
  FileText,
  Warehouse,
  HardHat,
  Construction,
  DoorOpen,
  Power,
  Droplet,
  Globe
} from "lucide-react";

export default function PractiParkPage() {
  const mainImage = getPlaceholderImage("practi-park-1");
  const galleryImages = [
    getPlaceholderImage("practi-park-2"),
    getPlaceholderImage("practi-park-3"),
    getPlaceholderImage("practi-park-4"),
  ];

  const techSpecs = [
      { label: "Estructura", value: "Acero A-36 y A-50", icon: <Construction className="w-5 h-5" /> },
      { label: "Altura Mínima", value: "8m - 9m", icon: <Ruler className="w-5 h-5" /> },
      { label: "Pisos", value: "Concreto MR-35, 15cm", icon: <Layers className="w-5 h-5" /> },
      { label: "Techos", value: "Lámina KR-18, 10% luz natural", icon: <Warehouse className="w-5 h-5" /> },
      { label: "Muros", value: "Block y panel insulado", icon: <Building className="w-5 h-5" /> },
      { label: "Acceso", value: "Cortina enrollable 3.7x4.3m", icon: <DoorOpen className="w-5 h-5" /> },
      { label: "Energía", value: "6-9 KVAs trifásico", icon: <Power className="w-5 h-5" /> },
      { label: "Agua", value: "Cisterna 1,100L con hidroneumático", icon: <Droplet className="w-5 h-5" /> },
  ];

  const amenities = [
      { name: "Vigilancia 24/7", icon: <ShieldCheck className="w-6 h-6 text-accent" /> },
      { name: "Acceso Controlado", icon: <Users className="w-6 h-6 text-accent" /> },
      { name: "Business Center", icon: <Briefcase className="w-6 h-6 text-accent" /> },
      { name: "Andén Común", icon: <Container className="w-6 h-6 text-accent" /> },
      { name: "Plaza Comercial", icon: <Car className="w-6 h-6 text-accent" /> },
      { name: "Voz y Datos", icon: <Globe className="w-6 h-6 text-accent" /> },
  ];

  const forSale = [
      { lote: "14", size: "360 m²", price: "$5,557,000.00 MXN" },
      { lote: "2", size: "392.66 m²", price: "$6,264,000.00 MXN" },
      { lote: "17", size: "580.42 m²", price: "$9,407,000.00 MXN" },
  ]
  const forRent = [
      { type: "Naves 360 m²", price: "$90.00/m²", total: "$34,200.00 + IVA" },
      { type: "Bodegas ~201 m²", price: "$95.00/m²", total: "$20,152.00 + IVA" },
  ]

  return (
    <div>
      <PageHeader
        title="Practi Park Kelary Norte"
        subtitle="Micro parque industrial y logístico para PYMEs en la ubicación más estratégica de Querétaro."
      />
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="md:col-span-3">
            <div className="mb-8">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                <Image
                  src={mainImage.imageUrl}
                  alt={mainImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={mainImage.imageHint}
                />
              </AspectRatio>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
                {galleryImages.map(image => (
                    <AspectRatio key={image.id} ratio={4/3} className="bg-muted rounded-lg overflow-hidden">
                        <Image 
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    </AspectRatio>
                ))}
            </div>

            <div className="space-y-12">
              <div id="description">
                 <h2 className="text-2xl font-headline font-bold text-primary mb-4">Descripción General del Proyecto</h2>
                 <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p>Practi Park Norte es un micro parque industrial y logístico diseñado para PYMEs. Con una superficie total de 7.12 hectáreas, el proyecto consta de <strong>87 naves industriales (~360 m²)</strong> y <strong>13 bodegas (~210 m²)</strong>. Su uso de suelo para <strong>industria ligera</strong> permite una amplia gama de aplicaciones, desde almacenamiento hasta manufactura especializada.</p>
                 </div>
              </div>

              <div id="specs">
                <h2 className="text-2xl font-headline font-bold text-primary mb-4">Especificaciones Técnicas</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                  {techSpecs.map(spec => (
                    <div key={spec.label} className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                        <div className="text-accent">{spec.icon}</div>
                        <div>
                            <p className="font-semibold">{spec.label}</p>
                            <p className="text-muted-foreground">{spec.value}</p>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div id="amenities">
                 <h2 className="text-2xl font-headline font-bold text-primary mb-4">Servicios y Amenidades</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                    {amenities.map(amenity => (
                        <div key={amenity.name} className="flex flex-col items-center p-4 bg-card rounded-lg border">
                            {amenity.icon}
                            <p className="text-xs mt-2 text-muted-foreground">{amenity.name}</p>
                        </div>
                    ))}
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2">
            <div className="sticky top-24 space-y-8">
                
                <Card>
                    <CardHeader>
                        <CardTitle>Información Comercial</CardTitle>
                        <CardDescription>Precios de Lista - Agosto 2025</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h4 className="font-semibold mb-2 text-primary">En Venta</h4>
                            <div className="space-y-4">
                                {forSale.map(item => (
                                    <div key={item.lote} className="flex justify-between items-baseline p-3 bg-background rounded-md border">
                                        <p className="text-sm"> <Badge variant="outline" className="mr-2">Lote {item.lote}</Badge> {item.size}</p>
                                        <p className="font-semibold text-sm">{item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div>
                            <h4 className="font-semibold mb-2 text-primary">En Renta</h4>
                            <div className="space-y-4">
                                {forRent.map(item => (
                                    <div key={item.type} className="flex justify-between items-baseline p-3 bg-background rounded-md border">
                                        <p className="text-sm">{item.type}</p>
                                        <div className="text-right">
                                            <p className="font-semibold text-sm">{item.price}</p>
                                            <p className="text-xs text-muted-foreground">{item.total}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                            <Link href="/contacto">
                            Contactar a un Asesor <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

              <Card>
                <CardHeader>
                    <CardTitle>Ubicación Estratégica</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <p className="text-sm">Carretera 500, frente al Parque Industrial Querétaro (PIQ).</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-accent" /> Acceso a un ecosistema industrial consolidado.</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-accent" /> Optimización de logística y cadena de suministro.</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-accent" /> Posicionamiento en la "última milla" del PIQ.</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-accent" /> Conectividad superior.</li>
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
