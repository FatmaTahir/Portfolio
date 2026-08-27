import React from 'react';
import { Monitor, Server, Terminal } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const SERVICE_ICONS = [Monitor, Server, Terminal];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl mb-4">
          Core <span className="gradient-text">Services</span>
        </h2>
        <p className="text-slate-400 text-sm">
          Specialized web engineering capabilities available for projects and organizations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.services.map((service, idx) => {
          const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
          return (
            <GlassCard key={service.title} className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-400">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">{service.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{service.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};