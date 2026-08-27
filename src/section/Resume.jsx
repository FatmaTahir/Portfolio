import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Resume = () => {
  const resumeUrl = PORTFOLIO_DATA.personal.resumePath || '/resume.pdf';

  return (
    <section id="resume" className="py-20 px-6 relative max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Preview my full professional resume below or download a PDF copy for your records.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#0B0B14] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
      >
        {/* Header Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-200">
                {PORTFOLIO_DATA.personal.name} — CV / Resume
              </h3>
              <p className="text-xs text-slate-400">PDF Document</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-white text-xs font-medium transition-all flex items-center space-x-1.5"
            >
              <span>Open PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={resumeUrl}
              download
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white text-xs font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center space-x-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>

        {/* PDF Embedded Frame */}
        <div className="mt-6 rounded-xl overflow-hidden border border-slate-800/60 bg-slate-950/50 h-[550px] sm:h-[700px]">
          <iframe
            src={`${resumeUrl}#toolbar=0`}
            title="Resume Viewer"
            className="w-full h-full border-none"
          />
        </div>
      </motion.div>
    </section>
  );
};