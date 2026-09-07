import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Sparkles, User, Share2, CheckCircle2, AlertCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { GlassCard } from '../components/ui/GlassCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FaSquareUpwork } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

// Custom inline SVG for GitHub
const GithubIcon = ({ className = "w-6 h-6 sm:w-7 sm:h-7" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// Custom inline SVG for LinkedIn
const LinkedinIcon = ({ className = "w-6 h-6 sm:w-7 sm:h-7" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_fser9xn',   
      'template_6qc7acr',  
      formRef.current,
      '8pzLYNI9xaR6SxSww'   
    )
    .then(() => {
      setLoading(false);
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      formRef.current.reset();

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    })
    .catch((error) => {
      setLoading(false);
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    });
  };

  const connectLinks = [
    {
      name: 'LinkedIn',
      url: PORTFOLIO_DATA.personal.linkedin,
      icon: LinkedinIcon,
      hoverBg: 'hover:bg-blue-900/40 hover:border-blue-500/50 hover:text-blue-300',
    },
    {
      name: 'Github',
      url: PORTFOLIO_DATA.personal.github,
      icon: GithubIcon,
      hoverBg: 'hover:bg-slate-800 hover:border-purple-500/50 hover:text-purple-300',
    },
    {
      name: 'Upwork',
      url: PORTFOLIO_DATA.personal.upwork || 'https://www.upwork.com',
      icon: FaSquareUpwork,
      hoverBg: 'hover:bg-emerald-900/40 hover:border-emerald-500/50 hover:text-emerald-300',
    },
    {
      name: 'Email',
      url: `mailto:${PORTFOLIO_DATA.personal.email}`,
      icon: MdEmail,
      hoverBg: 'hover:bg-cyan-900/40 hover:border-cyan-500/50 hover:text-cyan-300',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Theme-Matched Glassmorphism Toast Notification */}
     {/* Theme-Matched Glassmorphism Toast Notification */}
<AnimatePresence>
  {status.message && (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md pointer-events-auto"
    >
      <div className={`flex items-center justify-between p-4 rounded-2xl bg-slate-950/90 backdrop-blur-xl border shadow-[0_0_30px_rgba(0,0,0,0.8)] ${
        status.type === 'success' 
          ? 'border-emerald-500/40 shadow-emerald-500/10' 
          : 'border-rose-500/40 shadow-rose-500/10'
      }`}>
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-xl ${
            status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
          }`}>
            {status.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0" />
            )}
          </div>
          <div>
            
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-tight">
              {status.message}
            </p>
          </div>
        </div>
        <button 
          onClick={() => setStatus({ type: '', message: '' })}
          className="text-slate-400 hover:text-slate-100 transition-colors p-1.5 rounded-lg hover:bg-slate-900"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3 sm:mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Let's work together</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Get <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]">In Touch</span>
        </h2>
      </motion.div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto w-full"
      >
        <GlassCard className="p-5 sm:p-8 md:p-10 bg-slate-950/80 border-purple-500/20 backdrop-blur-xl shadow-2xl relative rounded-2xl sm:rounded-3xl">
          
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-400">
              Contact Me
            </h3>
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400/70" />
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
            Have something to discuss? Send me a message and let's talk.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 border-b border-slate-800/80 pb-6 sm:pb-8">
            
            {/* Input 1: Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative"
            >
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
              <input
                required
                type="text"
                name="from_name"
                className="w-full bg-slate-900/60 border border-slate-800 rounded-xl pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="Your Name"
              />
            </motion.div>

            {/* Input 2: Email */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative"
            >
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
              <input
                required
                type="email"
                name="from_email"
                className="w-full bg-slate-900/60 border border-slate-800 rounded-xl pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="Your Email"
              />
            </motion.div>

            {/* Textarea: Message */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative"
            >
              <FiMessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 sm:left-4 top-3.5 sm:top-4" />
              <textarea
                required
                rows={4}
                name="message"
                className="w-full bg-slate-900/60 border border-slate-800 rounded-xl pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                placeholder="Your Message"
              />
            </motion.div>

            {/* Button: Send Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-1 sm:pt-2"
            >
              <motion.button
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 sm:py-3.5 rounded-xl bg-purple-500 hover:bg-purple-600 disabled:opacity-50 text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-purple-500/20"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </motion.div>
          </form>

          {/* Connect With Me - Icon Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 sm:mt-8"
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <span className="w-4 sm:w-5 h-[2px] bg-purple-500 inline-block rounded-full"></span>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-200">Connect With Me</h4>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {connectLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`flex items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/50 border border-slate-800 text-slate-400 transition-all duration-300 shadow-md ${link.hoverBg}`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </GlassCard>
      </motion.div>
    </section>
  );
};