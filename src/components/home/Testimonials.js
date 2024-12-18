// src/components/home/Testimonials.js
import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import SectionTitle from '../ui/SectionTitle';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
      {/* Header del Testimonio */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-light">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-primary">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-secondary fill-secondary'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Comentario */}
      <p className="text-gray-700 flex-grow">
        "{testimonial.comment}"
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <SectionTitle>Testimonios</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;