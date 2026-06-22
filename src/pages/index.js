import React from 'react';
import Layout from '@theme/Layout';

import Hero from '../components/Hero';
import About from '../components/About';
import Terminal from '../components/Terminal';
import Skills from '../components/Skills';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout
      title="VIPERSEC"
      description="Cybersecurity Portfolio of Shantanu Kakade"
    >
      <Hero />

      <About />

      <Terminal />

      <Skills />

      <Stats />

      <Projects />

      <Certifications />

      <Contact />

      <Footer />
    </Layout>
  );
}