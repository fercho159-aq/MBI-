import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { navLinks } from "@/lib/nav-links";

export function SiteFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo/MBI-LOGO-500-x-280-px.png" alt="MBI Inversiones Logo" className="h-10 w-auto" />
              <span className="font-bold font-headline text-lg">
                MBI Inversiones
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Construyendo futuros, creando hogares. Su socio de confianza en bienes raíces.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-headline font-semibold mb-3">Navegación</h4>
              <ul className="space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold mb-3">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contacto@mbi-inversiones.com</li>
                <li>+52 442 267 4158</li>
                <li>Querétaro, Qro., México</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-1">
             <h4 className="font-headline font-semibold mb-3">Síganos</h4>
             <div className="flex space-x-4">
                <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
                    <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
                    <Instagram className="h-5 w-5" />
                </Link>
             </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MBI Inversiones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
