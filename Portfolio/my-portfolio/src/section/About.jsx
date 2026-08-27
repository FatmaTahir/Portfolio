import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Sparkles, Cpu, Layers, Zap } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About = () => {
  const stats = [
    { label: 'Core Stack', value: '.NET & React', icon: <Code2 className="w-4 h-4 text-purple-400" /> },
    { label: 'Architecture', value: 'Clean & Scalable', icon: <Layers className="w-4 h-4 text-blue-400" /> },
    { label: 'Performance', value: 'Optimized APIs', icon: <Zap className="w-4 h-4 text-pink-400" /> },
    { label: 'Focus', value: 'Full Stack Dev', icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-16 space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Get To Know Me</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Crafting Code & <span className="gradient-text">Digital Products</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Visual Profile / Interactive Card Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative group"
        >
          {/* Glowing Aura Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
          
          <div className="relative rounded-3xl bg-[#0B0B14]/80 border border-slate-800/80 backdrop-blur-xl p-8 overflow-hidden space-y-6">
            
            {/* Mock Code Window Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">fatima_tahir.cs</span>
            </div>

            {/* Visual Avatar / Profile Card Area */}
            <div className="flex flex-col items-center text-center space-y-4 py-4">
              <div className="relative w-28 h-28 rounded-2xl p-1 bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 shadow-xl">
                <div className="w-full h-full rounded-xl bg-[#05050A] flex items-center justify-center text-3xl font-bold font-mono gradient-text">
                  FT
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-slate-100">Fatima Tahir</h3>
                <p className="text-xs font-mono text-purple-400">Software Engineer</p>
              </div>
            </div>

            {/* Quick Micro Status */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Hire</span>
              </span>
              <span className="text-slate-500">Remote / On-site</span>
            </div>

          </div>
        </motion.div>

        {/* Right Column: Narrative & Stats Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Main Story Paragraphs */}
          <GlassCard className="p-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed border-purple-500/10">
            {PORTFOLIO_DATA.personal.about.map((paragraph, idx) => (
              <p key={idx} className="first-of-type:text-slate-200">
                {paragraph}
              </p>
            ))}
          </GlassCard>

          {/* Bento Grid Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0B0B14]/60 border border-slate-800/80 backdrop-blur-md flex flex-col space-y-1 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </span>
                  {stat.icon}
                </div>
                <span className="text-sm font-semibold text-slate-200 font-mono">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};