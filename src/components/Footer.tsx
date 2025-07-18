import { Button } from "@/components/ui/button";
import { Heart, Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: 'about' },
    { label: 'Expertise', href: 'expertise' },
    { label: 'Projects', href: 'projects' },
    { label: 'Experience', href: 'experience' }
  ];

  const services = [
    'Business Analysis',
    'CX Strategy',
    'User Research',
    'Process Optimization',
    'Product Operations'
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Chiara de Saram</h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Business Analyst & Consultant helping teams transform insights 
                into powerful, usable, and measurable outcomes.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                {services.map((service) => (
                  <div key={service} className="text-gray-300 text-sm">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>© 2024 Chiara de Saram. All rights reserved.</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="h-4 w-4 text-red-500" /> for impactful products
                </span>
              </div>
              
              <Button
                variant="ghost"
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                Back to top <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;