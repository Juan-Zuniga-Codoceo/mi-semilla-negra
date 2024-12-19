// src/components/layout/Footer.js
import React from "react";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo y descripción - Ajustado el padding top y alineación */}
          <div className="md:col-span-4">
            <div className="flex flex-col space-y-6">
              <img
                src="/images/logo.png"
                alt="Mi Semilla Negra"
                className="h-32 w-auto object-contain -mt-4" // Aumentado tamaño y ajustado margen
              />
              <p className="text-gray-600 leading-relaxed">
                Descubre el sabor de nuestro brebaje ancestral.
              </p>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="md:col-span-4">
            <h3 className="text-gray-900 font-semibold mb-6 text-lg">
              Enlaces Rápidos
            </h3>
            <nav className="space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-gray-600 hover:text-secondary transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("productos")}
                className="block text-gray-600 hover:text-secondary transition-colors text-left"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="block text-gray-600 hover:text-secondary transition-colors text-left"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-gray-600 hover:text-secondary transition-colors text-left"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Contacto */}
          <div className="md:col-span-4">
            <h3 className="text-gray-900 font-semibold mb-6 text-lg">
              Contacto
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">Email: D.andresrojasplaza@gmail.com</p>
              <p className="text-gray-600">Teléfono: +56 9 3706 2068</p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://facebook.com"
                  className="text-gray-600 hover:text-secondary transition-colors duration-300"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/misemillanegra.cl/"
                  className="text-gray-600 hover:text-secondary transition-colors duration-300"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mi Semilla Negra. Todos los derechos
              reservados.
            </p>
            <a
              href="https://www.synapsedev.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-secondary text-sm transition-colors duration-300"
            >
              Creado por SYNAPSE DEV E.I.R.L.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
