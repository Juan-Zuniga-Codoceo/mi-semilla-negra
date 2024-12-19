import React from 'react';

const Hero = () => {
  return (
    <div id="inicio" className="relative h-[55vh] min-h-[600px]">
      {/* Background Container with Image and Overlay */}
      <div className="absolute inset-0">
        {/* Image */}
        <img
          src="images/hero-bg.jpg"
          alt="Mi Semilla Negra - Salsas Orientales"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full z-10 flex">
        <div className="container mx-auto px-4 flex items-center pt-32"> {/* Aumentado el pt-32 para bajar más el contenido */}
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-neutral block">
                Salsas Orientales de
              </span>
              <span className="text-secondary">
                Primera Calidad
              </span>
            </h1>
            <p className="text-xl text-neutral/90 mb-8 max-w-2xl">
              Descubre el auténtico sabor de la cocina oriental con nuestras
              salsas artesanales
            </p>
            <a 
              href="#productos" 
              className="inline-block px-8 py-3 text-lg
                       border-2 border-neutral text-neutral
                       hover:bg-secondary hover:border-secondary
                       transition-all duration-300 rounded-lg"
            >
              Ver Productos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;