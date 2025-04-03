
import { Users, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">About EffUniv</h2>
        <p className="section-subtitle text-center">
          With decades of combined experience, our leadership and advisory board brings unmatched expertise to your technology challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Experience Card */}
          <div className="bg-effuniv-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-in">
            <div className="w-16 h-16 bg-effuniv-primary/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-effuniv-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-effuniv-primary mb-3">Decades of Experience</h3>
            <p className="text-effuniv-dark/80">
              Our team brings extensive experience from Banking, Financial Services & Insurance (BFSI), Information Technology (IT), and Construction industries.
            </p>
          </div>

          {/* Expert Team Card */}
          <div className="bg-effuniv-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-in animate-delay-100">
            <div className="w-16 h-16 bg-effuniv-primary/10 rounded-full flex items-center justify-center mb-6">
              <Users className="text-effuniv-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-effuniv-primary mb-3">Expert Leadership</h3>
            <p className="text-effuniv-dark/80">
              Between our Leadership and Advisory Board, we bring together the brightest minds in technology and business strategy to solve complex challenges.
            </p>
          </div>

          {/* Solutions Card */}
          <div className="bg-effuniv-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-in animate-delay-200">
            <div className="w-16 h-16 bg-effuniv-primary/10 rounded-full flex items-center justify-center mb-6">
              <Award className="text-effuniv-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-effuniv-primary mb-3">End-to-End Solutions</h3>
            <p className="text-effuniv-dark/80">
              We provide comprehensive IT solutions and services designed to help your business adopt and leverage advanced technologies effectively.
            </p>
          </div>
        </div>

        {/* Company Description */}
        <div className="mt-16 max-w-4xl mx-auto opacity-0 animate-fade-in animate-delay-300">
          <p className="text-lg text-center text-effuniv-dark/80">
            At EffUniv, we believe technology should be an enabler for business success. Our boutique approach ensures personalized attention to your specific needs, while our extensive industry experience guides the implementation of solutions that truly deliver better outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
