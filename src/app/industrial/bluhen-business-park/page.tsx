import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Building, Car, MapPin, Users, Zap, Droplets, ShieldCheck, Briefcase } from "lucide-react";

export default function BluhenBusinessParkPage() {
  const mainImage = getPlaceholderImage("bluhen-1");
  const galleryImages = [
    getPlaceholderImage("bluhen-2"),
    getPlaceholderImage("bluhen-3"),
    getPlaceholderImage("bluhen-4"),
  ];

  const details = [
      { label: "Terreno Total", value: "662 m²", icon: <Building className="w-5 h-5" /> },
      { label: "Bodega Techada", value: "500 m²", icon: <Building className="w-5 h-5" /> },
      { label: "Altura Interior", value: "10 metros", icon: <Building className="w-5 h-5" /> },
      { label: "Resistencia del Piso", value: "250kg/cm²", icon: <Building className="w-5 h-5" /> },
      { label: "Andén para Tráiler", value: "46 m²", icon: <Building className="w-5 h-5" /> },
      { label: "Cortina Metálica", value: "4m de altura", icon: <Building className="w-5 h-5" /> },
      { label: "Estacionamiento", value: "4 autos (112 m²)", icon: <Car className="w-5 h-5" /> },
  ];

  const amenities = [
      { name: "Recepción General", icon: <Users className="w-6 h-6 text-accent" /> },
      { name: "Sala de Juntas", icon: <Briefcase className="w-6 h-6 text-accent" /> },
      { name: "Área de Coworking", icon: <Users className="w-6 h-6 text-accent" /> },
  ]

  return (
    <div>
      <PageHeader
        title="Bodega Industrial en Bluhen Business Park"
        subtitle="Una solución moderna y estratégica para su negocio en Querétaro."
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
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
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
              <div>
                <h2 className="text-2xl font-headline font-bold text-primary mb-4">Dimensiones y Características</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                  {details.map(detail => (
                    <div key={detail.label} className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                        <div className="text-accent">{detail.icon}</div>
                        <div>
                            <p className="font-semibold">{detail.label}</p>
                            <p className="text-muted-foreground">{detail.value}</p>
                        </div>
                    </div>
                  ))}
                </div>
              </div>

               <div>
                <h2 className="text-2xl font-headline font-bold text-primary mb-4">Oficinas</h2>
                 <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded-lg border flex items-center gap-3">
                         <Briefcase className="w-5 h-5 text-accent"/>
                         <div>
                            <p className="font-semibold">Área de recepción</p>
                            <p className="text-muted-foreground">13.38 m²</p>
                        </div>
                    </div>
                    <div className="bg-card p-4 rounded-lg border flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-accent"/>
                        <div>
                            <p className="font-semibold">Mezanine corporativo</p>
                            <p className="text-muted-foreground">24 m²</p>
                        </div>
                    </div>
                 </div>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-primary mb-4">Infraestructura y Servicios</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Energía Eléctrica</h3>
                            <p className="text-muted-foreground text-sm">Instalación de 10 kvas con preparación para 24h y posibilidad de expansión.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Droplets className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Servicios Básicos</h3>
                            <p className="text-muted-foreground text-sm">Suministro de agua, alcantarillado y canal subterráneo.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <ShieldCheck className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Seguridad y Acceso</h3>
                            <p className="text-muted-foreground text-sm">Acceso controlado, vialidades internas y zona comercial.</p>
                        </div>
                    </div>
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2">
            <div className="sticky top-24 space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-headline font-semibold mb-2">Información Comercial</h3>
                  <Badge variant="secondary" className="mb-4">Escrituración Inmediata</Badge>
                  <p className="text-3xl font-bold font-headline text-primary mb-1">$9,500,000.00 <span className="text-base font-normal text-muted-foreground">MXN</span></p>
                  <p className="text-xs text-muted-foreground mb-6">(Más IVA de la construcción)</p>
                  <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contacto">
                      Contactar a un Asesor <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-headline font-semibold mb-4">Ubicación Estratégica</h3>
                  <div className="flex items-start gap-3 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <p className="text-sm">Anillo Vial III Ote., El Marqués, 76246 Santiago de Querétaro, Qro.</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-accent" /> A un costado de la carretera México - Querétaro.</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-accent" /> 15 min. del Centro Histórico.</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-accent" /> 15 min. del Centro de Congresos.</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-accent" /> 25 min. del Aeropuerto (AIQ).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-headline font-semibold mb-4">Amenidades del Business Park</h3>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                       {amenities.map(amenity => (
                           <div key={amenity.name} className="flex flex-col items-center">
                               {amenity.icon}
                               <p className="text-xs mt-2 text-muted-foreground">{amenity.name}</p>
                           </div>
                       ))}
                   </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
