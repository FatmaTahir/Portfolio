import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Sparkles } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom inline SVG for GitHub
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const Projects = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono mb-3 sm:mb-5 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span>Portfolio Showcase</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Featured <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]">Projects</span>
        </h2>
      </motion.div>

      {/* 3-Column Responsive Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {PORTFOLIO_DATA.projects.map((project) => {
          const hasValidImage = project.image && !imageErrors[project.id];

          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="flex"
            >
              <GlassCard className="group relative overflow-hidden flex flex-col justify-between w-full border border-purple-500/20 bg-slate-950/60 backdrop-blur-xl hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/40 transition-all duration-300 p-0 rounded-2xl">
                
                {/* TOP BANNER: Responsive Image Container */}
                <div className="relative w-full h-40 sm:h-48 bg-gradient-to-b from-purple-950/30 via-slate-900/50 to-slate-950/80 border-b border-purple-500/20 flex items-center justify-center p-0 overflow-hidden">
                  
                  {/* Visual Background Glow */}
                  <div className="absolute inset-0 bg-radial-gradient from-purple-600/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />

                  {hasValidImage ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="p-3.5 sm:p-4 rounded-2xl bg-purple-600/20 border border-purple-400/30 text-purple-300 shadow-lg shadow-purple-900/20 z-10"
                    >
                      <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.div>
                  )}

                  {/* TOP RIGHT ACTION BUTTONS */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 flex items-center space-x-1.5 sm:space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Repository"
                        className="p-1.5 sm:p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 text-slate-200 hover:text-purple-300 transition-all shadow-md active:scale-95"
                      >
                        <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Preview"
                        className="p-1.5 sm:p-2 rounded-xl bg-purple-600 border border-purple-400/40 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-950/50 active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    {project.subtitle && (
                      <span className="text-[10px] sm:text-[11px] font-mono text-purple-400 tracking-widest uppercase block">
                        {project.subtitle}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 sm:pt-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[9px] sm:text-[10px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};