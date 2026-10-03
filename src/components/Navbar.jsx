import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'skills', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#hero', id: 'hero' },
    { name: t.nav.skills, href: '#skills', id: 'skills' },
    { name: t.nav.experience, href: '#experience', id: 'experience' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-black/90 bg-white/90 backdrop-blur-xl dark:border-b dark:border-white/10 border-b border-black/10 py-3 shadow-xs'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center space-x-3 rtl:space-x-reverse dark:text-white text-black font-bold text-xl tracking-tight"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00783C] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <div className="w-full h-full dark:bg-black bg-white rounded-[10px] flex items-center justify-center">
                <span className="text-[#00783C] font-mono font-bold text-lg">
                  RM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-wide flex items-center gap-1.5 dark:text-white text-black">
                Rida MANFALOUTI
                <span className="inline-block w-2 h-2 rounded-full bg-[#00783C] animate-pulse"></span>
              </span>
              <span className="text-[11px] text-[#00783C] font-mono font-semibold hidden sm:inline">
                {t.nav.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 rtl:space-x-reverse bg-transparent p-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-[#00783C] text-white shadow-sm shadow-[#00783C]/30 font-semibold'
                    : 'dark:text-white text-black hover:text-[#00783C] dark:hover:text-[#00783C] hover:bg-[#00783C]/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons, Language Selector, Dark/Light Mode & CTA */}
          <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
            
            {/* Language Selector (FR | EN | AR) */}
            <div className="flex items-center p-0.5 rounded-xl dark:bg-neutral-900 bg-neutral-100 border dark:border-neutral-800 border-neutral-200 text-xs font-semibold">
              {[
                { code: 'fr', label: 'FR' },
                { code: 'en', label: 'EN' },
                { code: 'ar', label: 'عربي' },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 rounded-lg transition-all text-[11px] font-bold ${
                    language === lang.code
                      ? 'bg-[#00783C] text-white shadow-xs'
                      : 'dark:text-neutral-400 text-neutral-600 hover:text-black dark:hover:text-white'
                  }`}
                  title={`Passer en ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Functional Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.nav.lightMode : t.nav.darkMode}
              className="p-2 rounded-xl text-[#00783C] hover:bg-[#00783C]/10 border border-transparent hover:border-[#00783C]/30 transition-all duration-200 hover:scale-105"
              title={theme === 'dark' ? t.nav.lightMode : t.nav.darkMode}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 dark:text-white text-black hover:text-[#00783C] dark:hover:text-[#00783C] hover:bg-[#00783C]/10 rounded-xl border border-transparent hover:border-[#00783C]/20 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 dark:text-white text-black hover:text-[#00783C] dark:hover:text-[#00783C] hover:bg-[#00783C]/10 rounded-xl border border-transparent hover:border-[#00783C]/20 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Download CV CTA */}
            <a
              href={personalInfo.cvPath}
              download="CV_Rida_MANFALOUTI.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#00783C] bg-transparent hover:bg-[#00783C] hover:text-white border border-[#00783C] rounded-xl transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.nav.cv}</span>
            </a>
          </div>

          {/* Mobile Actions: Language + Dark/Light + Hamburger Menu */}
          <div className="flex md:hidden items-center gap-1.5">
            {/* Mobile Language Selector */}
            <div className="flex items-center p-0.5 rounded-xl dark:bg-neutral-900 bg-neutral-100 border dark:border-neutral-800 border-neutral-200 text-xs font-semibold">
              {['fr', 'en', 'ar'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-1.5 py-0.5 rounded-lg text-[10px] font-bold uppercase ${
                    language === lang
                      ? 'bg-[#00783C] text-white'
                      : 'dark:text-neutral-400 text-neutral-600'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.nav.lightMode : t.nav.darkMode}
              className="p-1.5 rounded-xl text-[#00783C] bg-transparent hover:bg-[#00783C]/10 border border-[#00783C]/30 text-xs"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={personalInfo.cvPath}
              download="CV_Rida_MANFALOUTI.pdf"
              className="p-1.5 text-[#00783C] bg-transparent hover:bg-[#00783C] hover:text-white border border-[#00783C] rounded-xl text-xs flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-xl dark:text-white text-black hover:text-[#00783C] hover:bg-[#00783C]/10 transition-colors focus:outline-none"
              aria-label="Basculer le menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden dark:bg-black/95 bg-white/95 backdrop-blur-2xl dark:border-white/10 border-black/10 border-b px-4 pt-3 pb-6 animate-fadeIn shadow-xl">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#00783C] text-white font-semibold'
                    : 'dark:text-white text-black hover:text-[#00783C] hover:bg-[#00783C]/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 dark:border-white/10 border-black/10 border-t flex items-center justify-around">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm dark:text-white text-black hover:text-[#00783C]"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm dark:text-white text-black hover:text-[#00783C]"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={personalInfo.cvPath}
                download="CV_Rida_MANFALOUTI.pdf"
                className="flex items-center gap-1.5 text-sm text-[#00783C] font-semibold"
              >
                <FileText className="w-4 h-4" /> {t.nav.cv}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
