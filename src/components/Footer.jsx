import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative dark:bg-dark-950 bg-white border-t dark:border-slate-800/80 border-slate-200 py-12 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-sm">
              <div className="w-full h-full dark:bg-dark-950 bg-white rounded-[10px] flex items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-mono font-bold text-sm">
                  RM
                </span>
              </div>
            </div>
            <div>
              <p className="font-semibold dark:text-white text-slate-900 text-sm">Rida MANFALOUTI</p>
              <p className="text-xs dark:text-slate-400 text-slate-500 font-mono">Ingénieur Logiciel Full Stack & IA</p>
            </div>
          </div>

          {/* Copyright & Tech Note */}
          <div className="text-center text-xs dark:text-slate-400 text-slate-500 space-y-1">
            <p>
              © {new Date().getFullYear()} Rida MANFALOUTI. Tous droits réservés.
            </p>
            <p className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
              Développé avec <span className="text-cyan-500 font-medium">React</span>, <span className="text-blue-500 font-medium">Tailwind CSS</span> & <span className="text-violet-500 font-medium">Clean Architecture</span>
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl dark:bg-slate-900 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 border dark:border-slate-800 border-slate-200 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl dark:bg-slate-900 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-400 text-slate-600 hover:text-cyan-500 border dark:border-slate-800 border-slate-200 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Retour en haut"
              className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 hover:from-blue-600/40 hover:to-cyan-500/40 text-cyan-500 border border-cyan-500/40 transition-all hover:-translate-y-0.5"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
