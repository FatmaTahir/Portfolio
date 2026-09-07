import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_ITEMS.map(item => item.name.toLowerCase());
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4 sm:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between lg:justify-center">
        
        {/* Mobile Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="lg:hidden text-lg sm:text-xl font-bold tracking-tight text-white flex items-center space-x-1"
        >
          <span className="text-purple-400 font-extrabold">FT.</span>
        </a>

        {/* Desktop Navbar Dock */}
        <nav className="hidden lg:flex items-center space-x-1.5 px-4 py-2 rounded-full bg-slate-950/80 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="px-3 py-1.5 text-base font-bold text-slate-100 hover:text-white transition-colors mr-1"
          >
            <span className="text-purple-400 font-extrabold">FT.</span>
          </a>

          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-sm font-mono transition-all duration-300 rounded-full ${
                  isActive
                    ? 'text-cyan-300 font-semibold bg-purple-950/60 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/50'
                }`}
              >
                {item.name}
              </a>
            );
          })}

          <a
            href={PORTFOLIO_DATA.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume Online"
            className="px-4 py-1.5 text-sm font-mono text-cyan-300 hover:text-cyan-200 hover:bg-purple-950/40 rounded-full transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Custom Mobile Animated Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative w-10 h-10 rounded-xl bg-slate-950/90 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] focus:outline-none active:scale-95 transition-all"
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between items-center relative">
            <span 
              className={`w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transform transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span 
              className={`w-full h-0.5 bg-purple-400 rounded-full transition-all duration-200 ease-in-out ${
                mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transform transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden mx-4 sm:mx-6 mt-3 bg-slate-950/95 backdrop-blur-2xl border border-purple-500/40 rounded-2xl p-4 sm:p-5 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          >
            <div className="flex flex-col space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between text-sm font-mono px-4 py-2.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-300 font-semibold bg-purple-950/60 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                        : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />}
                  </a>
                );
              })}

              <div className="pt-2 border-t border-slate-800/80 mt-1">
                <a
                  href={PORTFOLIO_DATA.personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Resume Online"
                  className="flex items-center justify-between text-sm font-mono text-purple-300 hover:text-cyan-300 px-4 py-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 transition-all duration-200"
                >
                  <span>Resume</span>
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};