import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom inline SVG for GitHub
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 text-sm">
          Production-ready software applications built across full-stack architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <GlassCard key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">{project.subtitle}</span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1">{project.title}</h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-400">Key Deliverables:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-medium px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-purple-500 text-slate-200 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>

            {/* Visual Indicator Box */}
            <div className="lg:col-span-5 h-full min-h-[200px] rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 flex flex-col justify-center items-center text-center">
              <Code className="w-12 h-12 text-purple-400 mb-3 opacity-80" />
              <span className="text-sm font-semibold text-slate-200">{project.title} Architecture</span>
              <span className="text-xs text-slate-500 mt-1 font-mono">Full Stack Repository Verified</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};