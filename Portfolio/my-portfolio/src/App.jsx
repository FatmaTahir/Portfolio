import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useSpring } from 'framer-motion';

import { Navbar } from './components/layouts/Navbar.jsx';
import { Footer } from './components/layouts/Footer.jsx';
import { Hero } from './section/Hero.jsx';
import { About } from './section/About.jsx';
import { Skills } from './section/Skills.jsx';
import { Experience } from './section/Experience.jsx';
import { Projects } from './section/Projects.jsx';
import { Education } from './section/Education.jsx';
import { Services } from './section/Services.jsx';
import { Contact } from './section/Contact.jsx';
import { CustomCursor } from './components/layouts/CustomCursor.jsx'; 

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    <div className="relative bg-[#05050A] text-slate-100 min-h-screen selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Custom Neon Glow Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#EC4899] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Radial Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] right-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] bg-pink-600/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}