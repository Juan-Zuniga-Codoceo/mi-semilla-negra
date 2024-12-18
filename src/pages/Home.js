// src/pages/Home.js
import React from 'react';
import Hero from '../components/home/Hero';
import Products from './Products'; // Cambiado para apuntar a la carpeta pages
import ContactStrip from '../components/home/ContactStrip';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
      <ContactStrip />
      <Testimonials />
    </main>
  );
};

export default Home;