import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Número de WhatsApp y mensaje predeterminado
  const phoneNumber = '+56937062068'; 
  const message = 'Hola! Me gustaría obtener más información sobre sus productos.';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Círculo de animación */}
      <div className="absolute inset-0 bg-secondary rounded-full animate-pulse-ring opacity-75" />
      
      <button
        onClick={handleClick}
        className="relative bg-secondary hover:bg-secondary-dark 
                   text-white rounded-full p-4 shadow-lg 
                   transform hover:scale-110 transition-all duration-300
                   flex items-center gap-2 group animate-slight-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          Contáctanos
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;