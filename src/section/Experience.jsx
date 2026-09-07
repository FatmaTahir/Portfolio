import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-10 sm:mb-16 space-y-2.5 sm:space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-950/90 border border-purple-500/40 text-purple-300 text-xs font-mono shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Where I've Worked</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Professional <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]">Experience</span>
        </h2>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 md:pl-10">
        
        {/* Glowing Vertical Timeline Line */}
        <div className="absolute left-[11px] sm:left-3 md:left-4 top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500/50 to-slate-800 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

        <div className="space-y-8 sm:space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline Glowing Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[37px] md:-left-[41px] top-5 sm:top-6 p-1 sm:p-1.5 rounded-full bg-slate-950 border border-purple-500/80 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)] z-20">
                <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>

              <GlassCard className="p-4 sm:p-6 md:p-8 bg-slate-950/80 border-slate-800 hover:border-purple-500/50 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all duration-300 group rounded-2xl">
                
                {/* Card Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-2 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1 text-purple-400 font-mono text-xs sm:text-sm">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-xs font-mono text-cyan-300 bg-slate-900/90 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-slate-800/80 self-start sm:self-auto shadow-inner">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary Description */}
                {exp.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-4 font-light">
                    {exp.description}
                  </p>
                )}

                {/* Bullet Highlights */}
                <ul className="space-y-2 sm:space-y-3">
                  {exp.highlights.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-2.5 sm:space-x-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};