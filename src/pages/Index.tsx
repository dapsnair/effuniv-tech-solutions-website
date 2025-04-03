
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Function to handle animation on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.opacity-0');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If the element is in the viewport
        if(position.top <= window.innerHeight * 0.9) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    // Initial check for elements in viewport
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
