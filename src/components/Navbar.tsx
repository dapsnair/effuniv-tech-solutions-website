
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/2d94aabb-e464-4b79-8d8c-6e379d01dea0.png" 
            alt="EffUniv Logo" 
            className="h-10 md:h-12" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-effuniv-dark hover:text-effuniv-primary font-medium transition">
            About
          </a>
          <a href="#services" className="text-effuniv-dark hover:text-effuniv-primary font-medium transition">
            Services
          </a>
          <a href="#industries" className="text-effuniv-dark hover:text-effuniv-primary font-medium transition">
            Industries
          </a>
          <a href="#contact" className="text-effuniv-dark hover:text-effuniv-primary font-medium transition">
            Contact
          </a>
          <Button className="bg-effuniv-primary hover:bg-effuniv-primary/90 text-white">
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-effuniv-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md py-4 opacity-95">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-effuniv-dark hover:text-effuniv-primary font-medium transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-effuniv-dark hover:text-effuniv-primary font-medium transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#industries" 
              className="text-effuniv-dark hover:text-effuniv-primary font-medium transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </a>
            <a 
              href="#contact" 
              className="text-effuniv-dark hover:text-effuniv-primary font-medium transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-effuniv-primary hover:bg-effuniv-primary/90 text-white w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
