import React from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-slate-400 text-sm">
          Core proficiencies spanning frontend, backend, tools, and algorithms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.skills.map((group) => (
          <GlassCard key={group.category} className="space-y-4">
            <h3 className="text-base font-semibold text-slate-200 border-b border-slate-800/80 pb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 hover:border-purple-500/40 hover:text-purple-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};