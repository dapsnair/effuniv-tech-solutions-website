
import { Code, Database, Globe, Monitor, Shield, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const servicesList = [
    {
      icon: <Code className="h-10 w-10 text-effuniv-primary" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and requirements."
    },
    {
      icon: <Database className="h-10 w-10 text-effuniv-primary" />,
      title: "Data Management & Analytics",
      description: "Comprehensive data solutions including storage, processing, analytics, and visualization."
    },
    {
      icon: <Globe className="h-10 w-10 text-effuniv-primary" />,
      title: "Cloud Solutions",
      description: "Strategic cloud adoption, migration, and management services for scalable infrastructure."
    },
    {
      icon: <Shield className="h-10 w-10 text-effuniv-primary" />,
      title: "Cybersecurity",
      description: "Advanced security measures to protect your business data, applications, and infrastructure."
    },
    {
      icon: <Settings className="h-10 w-10 text-effuniv-primary" />,
      title: "IT Consulting & Strategy",
      description: "Expert guidance on technology roadmaps, digital transformation, and IT governance."
    },
    {
      icon: <Monitor className="h-10 w-10 text-effuniv-primary" />,
      title: "Managed IT Services",
      description: "Proactive monitoring, maintenance, and support for your entire IT environment."
    }
  ];

  return (
    <section id="services" className="section-padding bg-effuniv-light">
      <div className="container-custom">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Comprehensive IT solutions designed to transform your business operations and drive growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesList.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-effuniv-secondary mb-3">{service.title}</h3>
                <p className="text-effuniv-dark/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-lg mb-6 text-effuniv-dark/90 max-w-3xl mx-auto">
            Our solutions are tailored to meet your specific business needs, ensuring you get the most value from your technology investments.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-effuniv-primary text-white font-medium rounded-md hover:bg-effuniv-primary/90 transition-colors"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
