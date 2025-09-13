import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', type: 'section' },
    { label: 'Expertise', href: '#expertise', type: 'section' },
    { label: 'Projects', href: '#projects', type: 'section' },
    { label: 'Experience', href: '#experience', type: 'section' },
    { label: 'Testimonials', href: '#testimonials', type: 'section' },
    { label: 'Vibe Code', href: '/vibecode', type: 'page' },
    { label: 'Blog', href: '/blog', type: 'page' },
  ];

  const handleNavigation = (item: { href: string; type: string }) => {
    if (item.type === 'page') {
      navigate(item.href);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const sectionId = item.href.replace('#', '');
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const sectionId = item.href.replace('#', '');
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home
      navigate('/');
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Chiara de Saram
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={`nav-link font-medium transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gradient-to-r hover:from-coral-500 hover:to-orange-600 hover:bg-clip-text hover:text-transparent' 
                    : 'text-white hover:bg-gradient-to-r hover:from-coral-400 hover:to-coral-600 hover:bg-clip-text hover:text-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant={isScrolled ? "default" : "ghost"}
              onClick={() => handleNavigation({ href: '#contact', type: 'section' })}
              className={isScrolled ? "" : "text-white border-white hover:bg-white hover:text-gray-900"}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className="text-gray-700 hover:text-primary font-medium px-4 py-2 text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4">
                <Button
                  onClick={() => handleNavigation({ href: '#contact', type: 'section' })}
                  className="w-full"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;