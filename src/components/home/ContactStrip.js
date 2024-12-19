// src/components/home/ContactStrip.js
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const ContactStrip = () => {
  return (
    <div className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-bold text-white">
            ¿Dónde puedo conseguir los productos Mi Semilla Negra?
          </h2>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/+56937062068" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-gray-100 px-6 py-3 rounded-lg transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              <span className="font-medium text-secondary">WhatsApp</span>
            </a>
            
            <a 
              href="https://www.instagram.com/misemillanegra.cl/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-gray-100 px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-[#E4405F]" />
              <span className="font-medium text-secondary">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStrip;