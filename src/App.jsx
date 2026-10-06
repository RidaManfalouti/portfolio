import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveBitmoji from './components/LiveBitmoji';

export default function App() {
  return (
    <div className="min-h-screen dark:bg-black bg-white dark:text-white text-black flex flex-col font-sans transition-colors duration-300 selection:bg-[#00783C]/30 selection:text-[#00783C]">
      {/* Top Sticky Navbar with Dark/Light Toggle */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Live Bitmoji Widget */}
      <LiveBitmoji />
    </div>
  );
}
