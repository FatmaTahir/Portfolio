import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Monitor, Server, Terminal, Download } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const SERVICE_ICONS = [Monitor, Server, Terminal];

// Animation variants
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 140, damping: 14 }}
        className="flex flex-col items-center text-center mb-6 sm:mb-8 space-y-2 sm:space-y-3"
      >
        <motion.div 
          
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-950/90 border border-purple-500/40 text-purple-300 text-xs font-mono shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>A Bit About Me</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Get To Know<span className="text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.6)]"> Me</span>
        </h2>
      </motion.div>

      {/* Main Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light mb-8 sm:mb-12"
      >
        {PORTFOLIO_DATA.personal.about.map((paragraph, idx) => (
          <p key={idx} className="text-slate-300 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={PORTFOLIO_DATA.personal.resumePath}
          download="Fatima_Tahir_Resume.pdf"
          className="w-full sm:w-auto justify-center inline-flex items-center space-x-2 text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-colors duration-300"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full sm:w-auto justify-center group inline-flex items-center space-x-2 text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 rounded-xl bg-slate-950/80 border border-purple-500/40 text-purple-300 hover:border-cyan-400/60 hover:text-cyan-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-colors duration-300"
        >
          <HiOutlineArrowNarrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          <span>Let's Connect</span>
        </motion.a>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
      >
        {PORTFOLIO_DATA.services.map((service, idx) => {
          const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];

          return (
            <motion.div key={service.title} variants={cardItemVariants}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="h-full"
              >
                <GlassCard className="h-full space-y-3 sm:space-y-4 p-5 sm:p-6 text-center bg-slate-950/80 border-slate-800 hover:border-purple-500/80 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 group flex flex-col items-center justify-center">

                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    className="p-2.5 sm:p-3 w-fit rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300 group-hover:bg-purple-900/80 group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  {service.description && (
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {service.description}
                    </p>
                  )}

                </GlassCard>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
};