// src/components/ui/SectionTitle.js
import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-12"> {/* Reducido gap-10 a gap-4 */}
      <img 
        src="/images/seed-icon.png" 
        alt="Seed icon" 
        className="w-16 h-20 object-contain transform -rotate-12"
      />
      <h2 className="text-4xl font-bold text-primary px-4">{children}</h2> {/* Reducido px-8 a px-4 */}
      <img 
        src="/images/seed-icon.png" 
        alt="Seed icon" 
        className="w-16 h-20 object-contain transform rotate-12"
      />
    </div>
  );
};

export default SectionTitle;