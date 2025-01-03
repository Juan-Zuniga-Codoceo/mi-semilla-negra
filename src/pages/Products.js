// src/pages/Products.js
/*
import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import SectionTitle from '../components/ui/SectionTitle';
import { products } from '../data/products';

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!product) return null;

  // WhatsApp config
  const phoneNumber = '+56937062068'; 
  const message = `Hola! Me gustaría obtener más información sobre ${product.name} ${product.size}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Instagram URL
  const instagramUrl = "https://www.instagram.com/misemillanegra.cl/";

  return (
    <>
      {/* Card *}
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
        {/* Imagen *}
        <div className="relative h-64 bg-white p-4">
          <img
            src={product.image}
            alt={`${product.name} ${product.size}`}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Contenido *}
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">Formato: {product.size}</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="w-full px-8 py-3 text-lg
                     border-2 border-primary text-primary
                     hover:bg-secondary hover:border-secondary hover:text-white
                     transition-all duration-300 rounded-lg"
          >
            Ver Información
          </button>
        </div>
      </div>

      {/* Modal *}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {product.name}
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-6 pt-4">
            {/* Imagen del producto *}
            <div className="relative h-72">
              <img
                src={product.image}
                alt={`${product.name} ${product.size}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Información del producto *}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-lg mb-2">Descripción</h4>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Presentación</h4>
                <p className="text-gray-600">{product.size}</p>
              </div>

              <div className="pt-4 space-y-3">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-3 flex items-center justify-center gap-2
                           bg-secondary text-white
                           hover:bg-secondary-dark
                           transition-all duration-300 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
                
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-3 flex items-center justify-center gap-2
                           border-2 border-secondary text-secondary
                           hover:bg-secondary hover:text-white
                           transition-all duration-300 rounded-lg"
                >
                  <Instagram className="w-5 h-5" />
                  Seguir en Instagram
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Products = () => {
  return (
    <section id="productos" className="py-16 bg-white"> 
      <div className="container mx-auto px-4">
        <SectionTitle>Nuestros Productos</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;*/

import React from 'react';
import { MessageCircle, Instagram, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import SectionTitle from '../components/ui/SectionTitle';
import { products } from '../data/products';

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!product) return null;

  // WhatsApp config
  const phoneNumber = '+56937062068'; 
  const message = `Hola! Me gustaría obtener más información sobre ${product.name} ${product.size}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Instagram URL
  const instagramUrl = "https://www.instagram.com/misemillanegra.cl/";

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
        {/* Imagen */}
        <div className="relative h-64 bg-white p-4">
          <img
            src={product.image}
            alt={`${product.name} ${product.size}`}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Contenido */}
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">Formato: {product.size}</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="w-full px-8 py-3 text-lg
                     border-2 border-primary text-primary
                     hover:bg-secondary hover:border-secondary hover:text-white
                     transition-all duration-300 rounded-lg"
          >
            Ver Información
          </button>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="relative">
          {/* Botón de cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {product.name}
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-6 pt-4">
            {/* Imagen del producto */}
            <div className="relative h-72">
              <img
                src={product.image}
                alt={`${product.name} ${product.size}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Información del producto */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-lg mb-2">Descripción</h4>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Presentación</h4>
                <p className="text-gray-600">{product.size}</p>
              </div>

              <div className="pt-4 space-y-3">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-3 flex items-center justify-center gap-2
                           bg-secondary text-white
                           hover:bg-secondary-dark
                           transition-all duration-300 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
                
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-3 flex items-center justify-center gap-2
                           border-2 border-secondary text-secondary
                           hover:bg-secondary hover:text-white
                           transition-all duration-300 rounded-lg"
                >
                  <Instagram className="w-5 h-5" />
                  Seguir en Instagram
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Products = () => {
  return (
    <section id="productos" className="py-16 bg-white"> 
      <div className="container mx-auto px-4">
        <SectionTitle>Nuestros Productos</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;