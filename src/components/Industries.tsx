
import { Building, Briefcase, Database } from "lucide-react";

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Industries We Serve</h2>
        <p className="section-subtitle text-center">
          Leveraging decades of experience across key sectors to deliver specialized technology solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
          {/* BFSI Industry */}
          <div className="text-center opacity-0 animate-fade-in">
            <div className="mx-auto w-20 h-20 bg-effuniv-primary/10 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="text-effuniv-primary w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-effuniv-primary mb-4">Banking, Financial Services & Insurance</h3>
            <p className="text-effuniv-dark/80">
              Secure and compliant technology solutions for the financial sector, including digital banking platforms, payment systems, risk management, and regulatory compliance.
            </p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Digital Banking Transformation</span>
              </li>
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Payment Processing Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Regulatory Compliance Systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Risk Management Platforms</span>
              </li>
            </ul>
          </div>

          {/* IT Industry */}
          <div className="text-center opacity-0 animate-fade-in animate-delay-100">
            <div className="mx-auto w-20 h-20 bg-effuniv-primary/10 rounded-full flex items-center justify-center mb-6">
              <Database className="text-effuniv-primary w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-effuniv-primary mb-4">Information Technology</h3>
            <p className="text-effuniv-dark/80">
              Cutting-edge solutions for IT companies, including software development, cloud infrastructure, data management, cybersecurity, and DevOps implementation.
            </p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Enterprise Software Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Cloud Infrastructure Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Data Analytics & Business Intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>DevOps & Continuous Integration</span>
              </li>
            </ul>
          </div>

          {/* Construction Industry */}
          <div className="text-center opacity-0 animate-fade-in animate-delay-200">
            <div className="mx-auto w-20 h-20 bg-effuniv-primary/10 rounded-full flex items-center justify-center mb-6">
              <Building className="text-effuniv-primary w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-effuniv-primary mb-4">Construction</h3>
            <p className="text-effuniv-dark/80">
              Technology solutions for the construction industry, including project management tools, BIM integration, resource optimization, and site management systems.
            </p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Project Management Software</span>
              </li>
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>BIM (Building Information Modeling)</span>
              </li>
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Resource Planning & Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-effuniv-primary mr-2">•</span>
                <span>Site Safety & Compliance Systems</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-fade-in animate-delay-300">
          <p className="text-xl text-effuniv-primary/90 font-medium">
            Our industry expertise allows us to create tailored solutions that address specific sector challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
