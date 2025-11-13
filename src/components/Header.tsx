import { PixelButton } from "./PixelButton";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm pixel-border border-t-0 border-x-0">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 md:h-10" />
            <h1 className="font-primary text-sm md:text-base text-primary">
              {"<MARKETER/>"}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="font-secondary text-sm hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="font-secondary text-sm hover:text-accent transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("work")} className="font-secondary text-sm hover:text-accent transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection("contact")} className="font-secondary text-sm hover:text-accent transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && <div className="md:hidden mt-4 pixel-border bg-card p-4 space-y-4">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("work")} className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors">
              Contact
            </button>
          </div>}
      </nav>
    </header>;
}