import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`relative rounded-2xl bg-[#0B0B14]/80 border border-slate-800/80 backdrop-blur-md p-6 shadow-xl transition-shadow duration-300 hover:border-purple-500/40 hover:shadow-purple-500/10 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
      {children}
    </motion.div>
  );
};