import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import SectionTitle from '../ui/SectionTitle';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div 
      className="max-w-4xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative bg-white rounded-lg shadow-lg p-8 my-8">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6
                     w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                     text-primary hover:text-secondary transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6
                     w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                     text-primary hover:text-secondary transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-primary">
              {currentTestimonial.name}
            </h3>
            <p className="text-secondary font-medium">
              {currentTestimonial.role}
            </p>
          </div>

          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${
                  i < currentTestimonial.rating
                    ? 'text-secondary fill-secondary'
                    : 'text-gray-300'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>

          <p className="text-lg text-gray-700 italic leading-relaxed">
            "{currentTestimonial.comment}"
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-secondary'
                  : 'w-2 bg-gray-200 hover:bg-secondary/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Testimonios</SectionTitle>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonials;