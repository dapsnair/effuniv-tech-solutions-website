
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-to-br from-effuniv-light via-white to-effuniv-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-effuniv-secondary leading-tight">
              Advanced Technology Solutions for Better Outcomes
            </h1>
            <p className="text-lg md:text-xl text-effuniv-dark/80 max-w-lg">
              EffUniv is a boutique end-to-end IT Solutions and Services company helping clients usher in advanced technologies for superior results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-effuniv-primary hover:bg-effuniv-primary/90 text-white text-lg py-6 px-8">
                Our Services
              </Button>
              <Button variant="outline" className="border-effuniv-primary text-effuniv-primary hover:bg-effuniv-primary/5 text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in animate-delay-200">
            <div className="aspect-video bg-gradient-to-tr from-effuniv-secondary to-effuniv-primary rounded-lg shadow-xl flex items-center justify-center">
              <div className="text-white text-center p-8">
                <h3 className="text-2xl font-bold mb-4">Driving Digital Transformation</h3>
                <p className="text-white/90">Leveraging decades of industry experience to deliver innovative IT solutions</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-effuniv-accent rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-effuniv-primary rounded-full opacity-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
