// src/pages/Home.js
import React from 'react';
import Hero from '../components/home/Hero';
import Products from './Products';
import ContactStrip from '../components/home/ContactStrip';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/layout/whatsAppbutton';

const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
      <ContactStrip />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Home;