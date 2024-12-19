import { useState } from 'react';
import { Instagram, MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId, isMobile = false) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const phoneNumber = '+56937062068'; 
  const message = 'Hola! Me gustaría obtener más información sobre sus productos.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="bg-neutral shadow-md fixed w-full top-0 z-50">
      <div className="container">
        <nav className="flex items-center justify-between h-28">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="flex items-center"
          >
            <img
              src="images/logo.png"
              alt="Mi Semilla Negra"
              className="h-32 w-auto object-contain"
            />
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-12">
            <NavLink onClick={() => scrollToSection('inicio')}>Inicio</NavLink>
            <NavLink onClick={() => scrollToSection('productos')}>Productos</NavLink>
            <NavLink onClick={() => scrollToSection('testimonios')}>Testimonios</NavLink>
            <NavLink onClick={() => scrollToSection('contacto')}>Contacto</NavLink>
          </div>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <SocialLink href={whatsappUrl} aria-label="WhatsApp">
              <MessageCircle className="w-7 h-7" />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/misemillanegra.cl/" aria-label="Instagram">
              <Instagram className="w-7 h-7" />
            </SocialLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary hover:text-secondary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-dark">
            <div className="flex flex-col py-6 space-y-6">
              <MobileNavLink onClick={() => scrollToSection('inicio', true)}>
                Inicio
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('productos', true)}>
                Productos
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('testimonios', true)}>
                Testimonios
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('contacto', true)}>
                Contacto
              </MobileNavLink>
              
              {/* Social Media Icons - Mobile */}
              <div className="flex items-center space-x-6 px-4 pt-2">
                <SocialLink href={whatsappUrl} aria-label="WhatsApp">
                  <MessageCircle className="w-7 h-7" />
                </SocialLink>
                <SocialLink href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="w-7 h-7" />
                </SocialLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Componentes auxiliares
const NavLink = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    className="text-lg text-primary hover:text-secondary transition-colors duration-300 font-medium"
  >
    {children}
  </button>
);

const MobileNavLink = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    className="text-lg text-primary hover:text-secondary transition-colors duration-300 px-4 font-medium w-full text-left"
  >
    {children}
  </button>
);

const SocialLink = ({ href, children, ...props }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-primary hover:text-secondary transition-colors duration-300"
    {...props}
  >
    {children}
  </a>
);

export default Header;