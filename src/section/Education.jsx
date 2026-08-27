import React from 'react';
import { GraduationCap } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl mb-4">
          Academic <span className="gradient-text">Education</span>
        </h2>
        <p className="text-slate-400 text-sm">
          Formal training in software engineering fundamentals and applied computer science.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <GlassCard key={idx} className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-purple-400 mt-1">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                <p className="text-xs text-slate-400">{edu.institution}</p>
              </div>
              <span className="text-xs font-mono text-slate-400 mt-2 sm:mt-0 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 self-start sm:self-auto">
                {edu.period}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};