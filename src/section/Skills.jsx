import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Layers, Wrench, Brain, Cpu } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Map icons based on category names
const getCategoryIcon = (category) => {
  const name = category.toLowerCase();
  if (name.includes('language') || name.includes('framework')) return <Code2 className="w-5 h-5 text-cyan-400" />;
  if (name.includes('software') || name.includes('architecture')) return <Layers className="w-5 h-5 text-purple-400" />;
  if (name.includes('tool') || name.includes('platform')) return <Wrench className="w-5 h-5 text-pink-400" />;
  if (name.includes('data') || name.includes('ai') || name.includes('ml')) return <Brain className="w-5 h-5 text-emerald-400" />;
  return <Cpu className="w-5 h-5 text-purple-400" />;
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-16 space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-950/90 border border-purple-500/40 text-purple-300 text-xs font-mono shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>My Skills</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Technical <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]">Expertise</span>
        </h2>
      </motion.div>

      {/* Grid Layout for 4 Skill Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {PORTFOLIO_DATA.skills.map((group, idx) => {
          // Cards 0 and 2 fly in from the left (-120px)
          // Cards 1 and 3 fly in from the right (+120px)
          const isLeft = idx % 2 === 0;

          return (
            <motion.div
              key={group.category}
              initial={{ 
                opacity: 0, 
                x: isLeft ? -120 : 120, 
                rotateY: isLeft ? -25 : 25 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                rotateY: 0 
              }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.15, 
                ease: [0.25, 1, 0.5, 1] 
              }}
              style={{ perspective: 1000 }}
            >
              <GlassCard className="h-full space-y-5 p-6 bg-slate-950/80 border-slate-800 hover:border-purple-500/50 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all duration-300 group">
                
                {/* Category Header */}
                <div className="flex items-center space-x-3 border-b border-slate-800/80 pb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 group-hover:scale-105 group-hover:border-purple-500/40 transition-all duration-300">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs font-mono text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-slate-900 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};