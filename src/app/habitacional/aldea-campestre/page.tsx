import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Home,
  Users,
  Waves,
  TreePine,
  Dumbbell,
  Flame,
  DollarSign
} from "lucide-react";

export default function AldeaCampestrePage() {
  const mainImage = getPlaceholderImage("aldea-1");
  const amenityImages = [
    getPlaceholderImage("aldea-2"),
    getPlaceholderImage("aldea-3"),
    getPlaceholderImage("aldea-4"),
  ];

  const features = [
      { label: "Seguridad 24/7", icon: <ShieldCheck className="w-8 h-8 text-accent" /> },
      { label: "Acceso Controlado", icon: <Users className="w-8 h-8 text-accent" /> },
      { label: "120 Terrenos Premium", icon: <Home className="w-8 h-8 text-accent" /> },
  ];
  
  const amenities = [
      { name: "Casa Club con Alberca", icon: <Waves className="w-8 h-8 text-accent" /> },
      { name: "Áreas Verdes", icon: <TreePine className="w-8 h-8 text-accent" /> },
      { name: "Gimnasio", icon: <Dumbbell className="w-8 h-8 text-accent" /> },
      { name: "Asadores al Aire Libre", icon: <Flame className="w-8 h-8 text-accent" /> },
  ];

  const lotes = [
    { size: "132 m²" },
    { size: "156 m²" },
    { size: "190.05 m²" },
  ]

  return (
    <div>
      <PageHeader
        title="Aldea Campestre"
        subtitle="La mejor inversión en el corazón de Querétaro."
      />
      <div className="container py-16 md:py-24 space-y-24">
        
        {/* Main Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image 
                    src={mainImage.imageUrl}
                    alt={mainImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={mainImage.imageHint}
                />
            </div>
            <div className="space-y-6">
                <h2 className="text-3xl font-headline font-bold text-primary">Un Desarrollo Premium y Exclusivo</h2>
                <p className="text-muted-foreground">
                    Aldea Campestre es una exclusiva privada que consta de 120 terrenos con urbanización de primer nivel. Ubicado estratégicamente cerca de Puerta Real y el Club Campestre, ofrece acceso inmediato a vialidades principales, comercios y servicios, permitiéndote diseñar un proyecto adaptado a tu estilo de vida.
                </p>
                 <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2 text-accent" />
                    <span>Cerca de Puerta Real y Club Campestre, Querétaro</span>
                 </div>
            </div>
        </section>

        {/* Features & Lotes */}
        <section className="grid md:grid-cols-2 gap-12">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">Características del Desarrollo</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-6">
                    {features.map(feature => (
                        <div key={feature.label} className="flex flex-col items-center text-center p-4 bg-background rounded-lg border">
                           {feature.icon}
                           <p className="mt-2 font-semibold text-sm">{feature.label}</p>
                        </div>
                    ))}
                    <div className="col-span-2 bg-background p-4 rounded-lg border">
                        <h4 className="font-semibold text-center mb-3">Tamaños de Lotes Disponibles</h4>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            {lotes.map(lote => (
                                <div key={lote.size} className="p-2 bg-card rounded-md border-dashed border">
                                    <p className="font-bold text-primary">{lote.size}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">Amenidades Premium</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-6">
                     {amenities.map(amenity => (
                        <div key={amenity.name} className="flex flex-col items-center text-center p-4 bg-background rounded-lg border">
                           {amenity.icon}
                           <p className="mt-2 font-semibold text-sm">{amenity.name}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </section>
        
        {/* Gallery */}
        <section>
            <h2 className="text-3xl font-headline font-bold text-primary text-center mb-12">Un Estilo de Vida Único</h2>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {amenityImages.map(image => (
                    <div key={image.id} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                        <Image 
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                ))}
             </div>
        </section>


        {/* Comercial Section */}
        <section>
            <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="text-center">
                    <DollarSign className="mx-auto h-12 w-12 text-accent mb-4" />
                    <CardTitle className="font-headline text-3xl text-primary">Información Comercial</CardTitle>
                    <CardDescription>Asegura tu inversión en una de las zonas con mayor plusvalía.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                    <div className="bg-card p-6 rounded-lg border shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-headline font-semibold text-primary">Lotes Residenciales</h3>
                            <p className="text-muted-foreground mt-2 mb-4">Desde</p>
                            <p className="text-4xl font-bold font-headline text-accent mb-6">$982,000 MXN</p>
                        </div>
                        <Button asChild className="w-full mt-4">
                            <Link href="/contacto">Consultar Lotes</Link>
                        </Button>
                    </div>
                     <div className="bg-card p-6 rounded-lg border shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-headline font-semibold text-primary">Paquete Terreno + Casa</h3>
                            <p className="text-muted-foreground mt-2 mb-4">Desde</p>
                            <p className="text-4xl font-bold font-headline text-accent mb-2">$2.5 Millones MXN</p>
                            <p className="text-xs text-muted-foreground mb-6">(en lote tipo de 132 m²)</p>
                        </div>
                        <Button asChild className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Link href="/contacto">Diseñar mi Casa <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>

      </div>
    </div>
  );
}

    