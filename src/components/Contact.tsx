
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-effuniv-light">
      <div className="container-custom">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="section-subtitle text-center">
          Get in touch with our team to discuss how we can help your business leverage advanced technology.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-effuniv-primary mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-effuniv-dark">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="border-effuniv-secondary/30 focus-visible:ring-effuniv-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-effuniv-dark">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="border-effuniv-secondary/30 focus-visible:ring-effuniv-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-effuniv-dark">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="border-effuniv-secondary/30 focus-visible:ring-effuniv-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-effuniv-dark">
                    Company
                  </label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className="border-effuniv-secondary/30 focus-visible:ring-effuniv-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-effuniv-dark">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5} 
                  className="border-effuniv-secondary/30 focus-visible:ring-effuniv-primary resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-effuniv-primary hover:bg-effuniv-primary/90 text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <h3 className="text-2xl font-bold text-effuniv-primary mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="h-6 w-6 text-effuniv-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-effuniv-dark mb-1">Email Us</h4>
                  <p className="text-effuniv-dark/80">info@effuniv.com</p>
                  <p className="text-effuniv-dark/80">support@effuniv.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="h-6 w-6 text-effuniv-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-effuniv-dark mb-1">Call Us</h4>
                  <p className="text-effuniv-dark/80">+1 (555) 123-4567</p>
                  <p className="text-effuniv-dark/80">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="h-6 w-6 text-effuniv-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-effuniv-dark mb-1">Our Office</h4>
                  <p className="text-effuniv-dark/80">
                    123 Tech Avenue, Suite 500<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-br from-effuniv-primary to-effuniv-secondary rounded-lg text-white">
              <h4 className="text-xl font-bold mb-3">Ready to Transform Your Business?</h4>
              <p className="mb-4">
                Our team of experts is ready to help you implement the right technology solutions for your business needs.
              </p>
              <a 
                href="mailto:info@effuniv.com" 
                className="inline-block px-6 py-3 bg-white text-effuniv-primary font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                Email Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
