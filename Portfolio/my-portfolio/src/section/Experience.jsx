import React from 'react';
import { Briefcase } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl mb-4">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-slate-400 text-sm">
          Hands-on web development experience across team environments and client projects.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <GlassCard key={idx} hoverEffect={false} className="relative pl-6 sm:pl-8 border-l-2 border-l-purple-500/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                <span className="text-sm font-medium text-purple-400">{exp.company}</span>
              </div>
              <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 self-start sm:self-auto">
                {exp.period}
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-4">{exp.description}</p>

            <ul className="space-y-2 text-xs text-slate-300">
              {exp.highlights.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start space-x-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};