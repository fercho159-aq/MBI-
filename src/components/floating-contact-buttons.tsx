import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const WhatsappIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

export function FloatingContactButtons() {
    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
            <Button asChild size="icon" className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg">
                <Link href="https://api.whatsapp.com/send?phone=5214422674158&text=Me%20gustar%C3%ADa%20saber%20mas%20sobre%20las%20oportunidades%20de%20inversi%C3%B3n%20en%20MBI%20Inversiones" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <WhatsappIcon />
                </Link>
            </Button>
            <Button asChild size="icon" className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link href="tel:4422674158" aria-label="Call">
                   <Phone />
                </Link>
            </Button>
        </div>
    )
}
