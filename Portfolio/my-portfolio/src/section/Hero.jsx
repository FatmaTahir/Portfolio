import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const techPills = ['React', 'C#', '.NET Core', 'TypeScript', 'Tailwind CSS', 'SQL Server'];

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 z-10">
        
        {/* Availability & Sub-title Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full Stack Software Developer • Available for Opportunities</span>
        </motion.div>

        {/* Main Name Greeting Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-100 leading-tight"
        >
          Hi, I'm <span className="gradient-text">Fatima Tahir</span>
        </motion.h1>

        {/* Sub-headline Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-300 max-w-3xl mx-auto leading-snug"
        >
          I build modern, scalable & user-centric web applications.
        </motion.h2>

        {/* Detailed Descriptive Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-1"
        >
          Specializing in end-to-end full-stack development. I bridge front-end interactivity with robust back-end APIs to deliver sleek, performance-optimized digital experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* Animated Gradient Button via CSS class */}
          <a
            href="#projects"
            className="gradient-btn px-6 py-3 rounded-xl text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-transform flex items-center space-x-2"
          >
            <span>View My Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-slate-200 font-medium text-sm transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Tech Stack Pills at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 flex flex-wrap justify-center items-center gap-2"
        >
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">Core Tech:</span>
          {techPills.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};