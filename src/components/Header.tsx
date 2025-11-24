import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.png";
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm pixel-border border-t-0 border-x-0">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-16 md:h-20" />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center relative">
            <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full p-2 border border-border/50">
              <NavLink 
                to="/" 
                className="font-secondary text-sm px-6 py-3 rounded-full transition-all duration-300 relative"
                activeClassName="bg-card text-foreground shadow-lg before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent before:rounded-full before:shadow-[0_0_12px_hsl(var(--accent))]"
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className="font-secondary text-sm px-6 py-3 rounded-full transition-all duration-300 relative"
                activeClassName="bg-card text-foreground shadow-lg before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent before:rounded-full before:shadow-[0_0_12px_hsl(var(--accent))]"
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className="font-secondary text-sm px-6 py-3 rounded-full transition-all duration-300 relative"
                activeClassName="bg-card text-foreground shadow-lg before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent before:rounded-full before:shadow-[0_0_12px_hsl(var(--accent))]"
              >
                Services
              </NavLink>
              <NavLink 
                to="/work" 
                className="font-secondary text-sm px-6 py-3 rounded-full transition-all duration-300 relative"
                activeClassName="bg-card text-foreground shadow-lg before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent before:rounded-full before:shadow-[0_0_12px_hsl(var(--accent))]"
              >
                Work
              </NavLink>
              <NavLink 
                to="/testimonials" 
                className="font-secondary text-sm px-6 py-3 rounded-full transition-all duration-300 relative"
                activeClassName="bg-card text-foreground shadow-lg before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent before:rounded-full before:shadow-[0_0_12px_hsl(var(--accent))]"
              >
                Testimonials
              </NavLink>
              <NavLink 
                to="/insights" 
                className="font-secondary text-sm px-6 py-3 rounded-full transition-all duration-300 relative"
                activeClassName="bg-card text-foreground shadow-lg before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent before:rounded-full before:shadow-[0_0_12px_hsl(var(--accent))]"
              >
                Insights
              </NavLink>
              <NavLink 
                to="/contact" 
                className="font-secondary text-sm px-6 py-3 rounded-full transition-all duration-300 relative"
                activeClassName="bg-card text-foreground shadow-lg before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent before:rounded-full before:shadow-[0_0_12px_hsl(var(--accent))]"
              >
                Contact
              </NavLink>
            </div>
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
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link 
              to="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/work" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors"
            >
              Work
            </Link>
            <Link 
              to="/testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors"
            >
              Testimonials
            </Link>
            <Link 
              to="/insights" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors"
            >
              Insights
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left font-secondary text-sm hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>}
      </nav>
    </header>;
}