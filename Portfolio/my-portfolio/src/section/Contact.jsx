import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom inline SVG for GitHub
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// Custom inline SVG for LinkedIn
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

export const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subject = encodeURIComponent(formData.get('subject') || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    setStatus('Mail client opened.');
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Let's Build Something <span className="gradient-text">Meaningful Together</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Have an idea, project, or opportunity in mind? Let's connect and turn it into a clean, scalable digital solution.
          </p>

          <div className="space-y-4 pt-4">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center space-x-3 text-slate-300 hover:text-purple-400 text-sm transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <Mail className="w-4 h-4 text-purple-400" />
              </div>
              <span>{PORTFOLIO_DATA.personal.email}</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-slate-300 hover:text-purple-400 text-sm transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
              </div>
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-slate-300 hover:text-purple-400 text-sm transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <GithubIcon className="w-4 h-4 text-pink-400" />
              </div>
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#0B0B14]/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@domain.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Subject</label>
              <input
                required
                type="text"
                name="subject"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
              <textarea
                required
                rows={4}
                name="message"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Describe your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
            {status && <p className="text-xs text-center text-purple-400 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};