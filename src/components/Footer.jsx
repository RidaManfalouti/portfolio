import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, isRtl } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative dark:bg-black bg-white border-t dark:border-neutral-800 border-neutral-200 py-12 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse text-center md:text-left rtl:md:text-right">
            <div className="w-9 h-9 rounded-xl bg-[#00783C] p-[1.5px] shadow-sm">
              <div className="w-full h-full dark:bg-black bg-white rounded-[10px] flex items-center justify-center">
                <span className="text-[#00783C] font-mono font-bold text-sm">
                  RM
                </span>
              </div>
            </div>
            <div>
              <p className="font-semibold dark:text-white text-black text-sm">Rida MANFALOUTI</p>
              <p className="text-xs text-[#00783C] font-mono font-semibold">{t.nav.role}</p>
            </div>
          </div>

          {/* Copyright & Tech Note */}
          <div className="text-center text-xs dark:text-neutral-400 text-neutral-600 space-y-1">
            <p>
              © {new Date().getFullYear()} Rida MANFALOUTI. {t.footer.copyright}
            </p>
            <p className="flex items-center justify-center gap-1 text-[11px] text-neutral-500">
              {t.footer.builtWith} <span className="text-[#00783C] font-semibold">React</span>, <span className="text-[#00783C] font-semibold">Tailwind CSS</span> & <span className="text-[#00783C] font-semibold">Clean Architecture</span>
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl dark:bg-black bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-900 dark:text-white text-black hover:text-[#00783C] border dark:border-neutral-800 border-neutral-200 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl dark:bg-black bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-900 dark:text-white text-black hover:text-[#00783C] border dark:border-neutral-800 border-neutral-200 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label={isRtl ? 'الرجوع إلى الأعلى' : 'Retour en haut'}
              className="p-2.5 rounded-xl bg-[#00783C]/10 hover:bg-[#00783C] text-[#00783C] hover:text-white border border-[#00783C]/30 transition-all hover:-translate-y-0.5"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
