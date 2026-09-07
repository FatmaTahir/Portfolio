import React from 'react';

export const GlassCard = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div
      className={`
        rounded-2xl 
        bg-[#0B0C10] 
        border border-slate-800/80 
        p-6 
        transition-all duration-300
        ${hoverEffect ? 'hover:border-slate-700 hover:bg-[#101216]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};