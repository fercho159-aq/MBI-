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
  DollarSign,
  Building,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Bike,
  Dog,
  Wind,
  Library,
  Sprout,
  Play,
  Grill,
  Tent,
  PlaySquare,
  Building2,
  Hotel,
  Landmark,
  PencilRuler
} from "lucide-react";

export default function CanadasDelArroyoPage() {
  const mainImage = getPlaceholderImage("canadas-1");
  const amenityImages = [
    getPlaceholderImage("canadas-2"),
    getPlaceholderImage("canadas-3"),
    getPlaceholderImage("canadas-4"),
  ];

  const amenities = [
    { name: "Área de juegos", icon: <Play /> },
    { name: "Alberca", icon: <Waves /> },
    { name: "Cancha de pádel", icon: <Dribbble /> },
    { name: "Ciclopista", icon: <Bike /> },
    { name: "Parque lineal", icon: <TreePine /> },
    { name: "Casa club", icon: <Building /> },
    { name: "Terrazas", icon: <Hotel /> },
    { name: "Sendero caminable", icon: <PencilRuler /> },
    { name: "Huerto", icon: <Sprout /> },
    { name: "Gimnasio de calistenia", icon: <Dumbbell /> },
    { name: "Parque para mascotas", icon: <Dog /> },
    { name: "Área de picnic", icon: <Tent /> },
    { name: "Área de patinaje", icon: <PlaySquare /> },
    { name: "Área de asadores", icon: <Grill /> },
    { name: "Juegos infantiles con arenero", icon: <Play /> },
    { name: "Gimnasio al aire libre", icon: <Dumbbell /> },
    { name: "Pabellón", icon: <Landmark /> },
    { name: "Canchas de usos múltiples", icon: <Dribbble /> },
  ];

  const nearbyServices = [
      { category: "Centros Educativos", items: ["Tec Milenio", "Colegio Celta", "Colegio Fontanar"], icon: <GraduationCap className="w-6 h-6 text-accent" /> },
      { category: "Centros de Salud", items: ["Hospital San José", "Hospital Santiago", "Hospital Ángeles"], icon: <HeartPulse className="w-6 h-6 text-accent" /> },
      { category: "Supermercados", items: ["Comercial Mexicana", "Walmart Express", "Soriana"], icon: <ShoppingCart className="w-6 h-6 text-accent" /> },
      { category: "Plazas Comerciales", items: ["Plaza Constituyentes", "Plaza Candiles", "Plaza Citadina"], icon: <Building2 className="w-6 h-6 text-accent" /> },
  ]

  return (
    <div>
      <PageHeader
        title="Cañadas del Arroyo Reserva"
        subtitle="Aire puro, vistas y paisajes inmejorables para tu nuevo hogar."
      />
      <div className="container py-16 md:py-24 space-y-24">
        
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
                <h2 className="text-3xl font-headline font-bold text-primary">Crece, Vive y Conéctate con la Naturaleza</h2>
                <p className="text-muted-foreground">
                    Cañadas del Arroyo Reserva es un desarrollo que fusiona un espacio urbano moderno con un entorno natural privilegiado. Ubicado en la zona sur de Querétaro, ofrece un estilo de vida único donde la tranquilidad y el aire puro son los protagonistas.
                </p>
                 <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2 text-accent" />
                    <span>Bulevar Metropolitano Santa Bárbara-Humilpan km. 6, Querétaro</span>
                 </div>
                 <div className="flex items-center text-muted-foreground">
                    <ShieldCheck className="w-5 h-5 mr-2 text-accent" />
                    <span>Acceso controlado y seguridad 24/7</span>
                 </div>
            </div>
        </section>

        <section>
            <h2 className="text-3xl font-headline font-bold text-primary text-center mb-12">Un Mundo de Amenidades</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                {amenities.map(amenity => (
                    <div key={amenity.name} className="flex flex-col items-center p-4 bg-card rounded-lg border shadow-sm">
                        <div className="text-accent mb-2">{amenity.icon}</div>
                        <p className="text-xs font-semibold">{amenity.name}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h2 className="text-3xl font-headline font-bold text-primary text-center mb-12">Todo lo que Necesitas, a Minutos de Distancia</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {nearbyServices.map(service => (
                    <Card key={service.category}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            {service.icon}
                            <CardTitle className="font-headline text-xl">{service.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                {service.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
        
        <section>
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


        <section>
            <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="text-center">
                    <DollarSign className="mx-auto h-12 w-12 text-accent mb-4" />
                    <CardTitle className="font-headline text-3xl text-primary">Información Comercial</CardTitle>
                    <CardDescription>Invierte en tu futuro con terrenos desde 160 m².</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                    <div className="bg-card p-6 rounded-lg border shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-headline font-semibold text-primary">Terreno Habitacional</h3>
                            <p className="text-muted-foreground mt-2 mb-4">Desde</p>
                            <p className="text-4xl font-bold font-headline text-accent mb-6">$975,000 MXN</p>
                        </div>
                        <Button asChild className="w-full mt-4">
                            <Link href="/contacto">Consultar Disponibilidad</Link>
                        </Button>
                    </div>
                     <div className="bg-card p-6 rounded-lg border shadow-sm text-center flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-headline font-semibold text-primary">Paquete Lote + Casa</h3>
                             <p className="text-muted-foreground mt-2 mb-4">Desde</p>
                            <p className="text-4xl font-bold font-headline text-accent mb-6">$2.6 Millones MXN</p>
                        </div>
                        <Button asChild className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Link href="/contacto">Más Información <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>

      </div>
    </div>
  );
}
