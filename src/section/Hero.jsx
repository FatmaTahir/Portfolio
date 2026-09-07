import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FaSquareUpwork } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// Custom SVG Icons to avoid Lucide version mismatches
const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
  </svg>
);

export const Hero = () => {
  const fullText = "Full Stack Software Developer";

  const [typedText, setTypedText] = useState("");
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 70);

      return () => clearTimeout(timeout);
    } else {
      setIsDoneTyping(true);
    }
  }, [typedText]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: PORTFOLIO_DATA.personal.github,
      icon: GithubIcon,
      hoverColor: 'hover:border-purple-500/60 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    },
    {
      name: 'LinkedIn',
      url: PORTFOLIO_DATA.personal.linkedin,
      icon: LinkedinIcon,
      hoverColor: 'hover:border-blue-500/60 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]',
    },
    {
      name: 'Upwork',
      url: PORTFOLIO_DATA.personal.upwork,
      icon: FaSquareUpwork,
      hoverColor: 'hover:border-emerald-500/60 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]',
    },
    {
      name: 'Email',
      url: `mailto:${PORTFOLIO_DATA.personal.email}`,
      icon: MdEmail,
      hoverColor: 'hover:border-cyan-500/60 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]',
    },
  ];

  return (
    <section id="home" className="min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 z-10 w-full">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-950/90 border border-purple-500/40 text-purple-300 text-[11px] sm:text-xs font-mono shadow-[0_0_10px_rgba(168,85,247,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
          <span>Available for Opportunities</span>
        </motion.div>

        {/* Main Name Header - Split onto 2 lines on mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-100 leading-tight"
        >
          <span className="block sm:inline">Hi, I'm</span>{' '}
          <span className="block sm:inline text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.4)]">
            Fatima Tahir
          </span>
        </motion.h1>

        {/* Typing Headline */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-3xl mx-auto min-h-[36px] sm:min-h-[40px] flex items-center justify-center"
        >
          <span>{typedText}</span>
          {!isDoneTyping && (
            <span className="ml-1 inline-block w-1.5 h-6 sm:h-8 bg-white animate-pulse" />
          )}
        </motion.h3>

        {/* Descriptive Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed pt-1"
        >
          I build and craft digital experiences <br className="hidden sm:block" />
          that deliver real impact
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
          >
            <span>View My Projects</span>
            <ArrowUpRight className="w-4 h-4 text-purple-200" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium px-6 py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Professional Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-6 sm:pt-8 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-400 text-xs font-mono transition-all duration-300 ${link.hoverColor}`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};