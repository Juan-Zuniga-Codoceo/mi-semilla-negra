import { useState } from 'react';
import { Instagram, Facebook, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral shadow-md fixed w-full top-0 z-50">
      <div className="container">
        <nav className="flex items-center justify-between h-28">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="images/logo.png"
              alt="Mi Semilla Negra"
              className="h-32 w-auto object-contain"
            />
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-12">
            <NavLink href="/nosotros">Inicio</NavLink>
            <NavLink href="/productos">Productos</NavLink>
            <NavLink href="/productos">Testimonios</NavLink>   
            <NavLink href="/contacto">Contacto</NavLink>
          </div>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <SocialLink href="https://facebook.com" aria-label="Facebook">
              <Facebook className="w-7 h-7" />
            </SocialLink>
            <SocialLink href="https://instagram.com" aria-label="Instagram">
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
              <MobileNavLink href="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>
                Inicio
              </MobileNavLink>
              <MobileNavLink href="/productos" onClick={() => setIsMobileMenuOpen(false)}>
                Productos
              </MobileNavLink>
              <MobileNavLink href="/productos" onClick={() => setIsMobileMenuOpen(false)}>
                Testimonios
              </MobileNavLink>
              <MobileNavLink href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                Contacto
              </MobileNavLink>
              
              {/* Social Media Icons - Mobile */}
              <div className="flex items-center space-x-6 px-4 pt-2">
                <SocialLink href="https://facebook.com" aria-label="Facebook">
                  <Facebook className="w-7 h-7" />
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
const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-lg text-primary hover:text-secondary transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a 
    href={href} 
    className="text-lg text-primary hover:text-secondary transition-colors duration-300 px-4 font-medium"
    onClick={onClick}
  >
    {children}
  </a>
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