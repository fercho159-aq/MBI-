import { PageHeader } from "@/components/page-header";
import { PropertyCard } from "@/components/property-card";
import { comercialProperties } from "@/lib/data";

export default function ComercialPage() {
  return (
    <div>
      <PageHeader
        title="Espacios Comerciales"
        subtitle="Ubicaciones premium para su negocio, desde locales en plazas hasta oficinas corporativas."
      />
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comercialProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
         {comercialProperties.length === 0 && (
            <p className="text-center text-muted-foreground">No hay propiedades comerciales disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}
