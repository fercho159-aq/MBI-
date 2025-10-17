import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Property } from "@/lib/types";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const image = getPlaceholderImage(property.imageId);
  return (
    <Card className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Badge variant="secondary" className="absolute top-4 right-4 z-10">{property.type}</Badge>
        <Link href={property.href} className="aspect-[3/2] w-full overflow-hidden block">
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-6">
        <CardTitle className="font-headline text-xl mb-2 line-clamp-2">
          <Link href={property.href}>{property.title}</Link>
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{property.location}</span>
        </div>
        <p className="text-muted-foreground text-sm flex-1 line-clamp-3">{property.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        {property.price && <div className="text-lg font-semibold font-headline text-primary">{property.price}</div>}
        <Button asChild variant="ghost" className="text-accent hover:text-accent">
          <Link href={property.href}>
            Ver más <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
