import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full">
          <img
            src="/images/hero-bg.jpg"
            alt="Mi Semilla Negra - Salsas Orientales"
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full w-full flex items-center">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Salsas Orientales de Primera Calidad
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl">
              Descubre el auténtico sabor de la cocina oriental con nuestras salsas artesanales
            </p>
            <Link 
              to="#productos"
              className="inline-block bg-black text-white px-8 py-3 rounded-md 
                       text-lg font-medium hover:bg-opacity-90 transition-all
                       border-2 border-transparent hover:border-white"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;