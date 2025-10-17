"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, type NavLink } from "@/lib/nav-links";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function NavLinkItem({
  link,
  closeMenu,
}: {
  link: NavLink;
  closeMenu?: () => void;
}) {
  const pathname = usePathname();

  if (!link.subLinks) {
    return (
      <Link
        href={link.href}
        onClick={closeMenu}
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === link.href ? "text-foreground" : "text-foreground/60"
        )}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "p-0 h-auto justify-start hover:bg-transparent hover:text-foreground/80 transition-colors",
            pathname.startsWith(link.href)
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {link.label}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {link.subLinks.map((subLink) => (
          <NavSubMenuItem key={subLink.label} link={subLink} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavSubMenuItem({ link }: { link: NavLink }) {
  if (!link.subLinks) {
    return (
      <DropdownMenuItem asChild>
        <Link href={link.href}>{link.label}</Link>
      </DropdownMenuItem>
    );
  }

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{link.label}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {link.subLinks.map((subLink) => (
            <DropdownMenuItem key={subLink.label} asChild>
              <Link href={subLink.href}>{subLink.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}

function MobileNavLink({
  link,
  closeMenu,
}: {
  link: NavLink;
  closeMenu: () => void;
}) {
  const pathname = usePathname();

  if (!link.subLinks) {
    return (
      <Link
        href={link.href}
        onClick={closeMenu}
        className={cn(
          "block py-2 transition-colors hover:text-foreground",
          pathname === link.href ? "text-foreground" : "text-foreground/80"
        )}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={link.label} className="border-b-0">
        <AccordionTrigger
          className={cn(
            "py-2 hover:no-underline [&[data-state=open]>svg]:text-accent transition-colors hover:text-foreground",
            pathname.startsWith(link.href)
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          {link.label}
        </AccordionTrigger>
        <AccordionContent className="pl-4">
          {link.subLinks.map((subLink) => (
            <MobileNavLink key={subLink.label} link={subLink} closeMenu={closeMenu} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center">
        <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center space-x-2">
            <img src="/logos/MBI-LOGO-500-x-280-px.png" alt="MBI Inversiones Logo" className="h-8 w-auto" />
            
            </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLinkItem key={link.label} link={link} />
          ))}
        </nav>
        
        <div className="flex-1 hidden md:flex justify-end" />

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={closeMobileMenu}
                  >
                    <img src="/logo/MBI-LOGO-500-x-280-px.png" alt="MBI Inversiones Logo" className="h-8 w-auto" />
                    <span className="font-bold font-headline">
                      MBI Inversiones
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeMobileMenu}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </div>
                <nav className="flex-1 grid gap-2 p-4 text-base font-medium overflow-y-auto">
                  {navLinks.map((link) => (
                    <MobileNavLink
                      key={link.label}
                      link={link}
                      closeMenu={closeMobileMenu}
                    />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
