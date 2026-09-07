import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';

import { Navbar } from './components/layouts/Navbar.jsx';
import { Hero } from './section/Hero.jsx';
import { About } from './section/About.jsx';
import { Skills } from './section/Skills.jsx';
import { Experience } from './section/Experience.jsx';
import { Projects } from './section/Projects.jsx';
import { Contact } from './section/Contact.jsx';

import { CustomCursor } from './components/layouts/CustomCursor.jsx'; 
import { GalaxyBackground } from './components/layouts/GalaxyBackground.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    // 1. Create an off-screen canvas
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0f0716'; 
    ctx.beginPath();
    ctx.roundRect(0, 0, 64, 64, 16);
    ctx.fill();

    ctx.fillStyle = '#c084fc'; 
    ctx.font = '900 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('FT', 32, 34);

    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = canvas.toDataURL('image/png');
  }, []);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative text-slate-100 min-h-screen selection:bg-purple-500/30 selection:text-purple-200">
      {/* Galaxy Animated Background */}
      <GalaxyBackground />

      {/* Custom Pointer Cursor */}
      <CustomCursor />

      {/* Minimal Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-purple-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Application Sections */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}