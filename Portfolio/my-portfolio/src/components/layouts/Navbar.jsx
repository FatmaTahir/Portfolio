import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Services', href: '#services' },
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
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#05050A]/85 backdrop-blur-md border-b border-slate-800/50 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-wider transition-colors">
          <span className="gradient-text">FT</span>
          <span className="text-purple-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 border border-slate-800/80 bg-[#0B0B14]/60 backdrop-blur-md px-4 py-1.5 rounded-full">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive ? 'text-white bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-pink-600/30 border border-purple-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <a
          href={PORTFOLIO_DATA.personal.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center space-x-1 text-xs font-medium px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors"
        >
          <span>Resume</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-100 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B14]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-slate-300 hover:text-purple-400 py-1 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1 text-xs font-medium px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white mt-2"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};