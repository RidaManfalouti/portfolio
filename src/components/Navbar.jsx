import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

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
    { name: 'Accueil', href: '#hero', id: 'hero' },
    { name: 'Compétences', href: '#skills', id: 'skills' },
    { name: 'Expériences & Architecture', href: '#experience', id: 'experience' },
    { name: 'Projets', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-transparent backdrop-blur-xl dark:border-b dark:border-white/5 border-b border-black/5 py-3 shadow-xs'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center space-x-3 dark:text-white text-slate-900 font-bold text-xl tracking-tight"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <div className="w-full h-full dark:bg-dark-950 bg-white rounded-[10px] flex items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent font-mono font-bold text-lg">
                  RM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-wide flex items-center gap-1.5 dark:text-white text-slate-900">
                Rida MANFALOUTI
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] dark:text-slate-400 text-slate-500 font-mono hidden sm:inline">
                Full Stack & IA Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation (Transparent, No Grey Background) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-transparent p-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm shadow-cyan-500/25 font-semibold'
                    : 'dark:text-slate-300 text-slate-700 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons, Dark/Light Mode & CTA (Transparent, No Grey Background) */}
          <div className="hidden md:flex items-center space-x-2">
            
            {/* Functional Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
              className="p-2 rounded-xl dark:text-amber-400 text-slate-700 hover:text-amber-500 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200 hover:scale-105"
              title={theme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
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
              className="p-2 dark:text-slate-300 text-slate-700 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl border border-transparent hover:border-cyan-500/20 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 dark:text-slate-300 text-slate-700 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl border border-transparent hover:border-cyan-500/20 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Download CV CTA */}
            <a
              href={personalInfo.cvPath}
              download="CV_Rida_MANFALOUTI.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-transparent hover:bg-cyan-500/10 border border-cyan-500/40 hover:border-cyan-400 rounded-xl transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-500" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Actions: Dark/Light Mode + Hamburger Menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
              className="p-2 rounded-xl dark:text-amber-400 text-slate-700 bg-transparent hover:bg-cyan-500/10 border border-cyan-500/20 text-xs"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={personalInfo.cvPath}
              download="CV_Rida_MANFALOUTI.pdf"
              className="p-2 text-cyan-500 bg-transparent hover:bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs flex items-center gap-1"
            >
              <FileText className="w-4 h-4 text-cyan-500" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl dark:text-slate-300 text-slate-700 hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors focus:outline-none"
              aria-label="Basculer le menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Transparent Glass) */}
      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-2xl dark:border-white/10 border-black/10 border-b px-4 pt-3 pb-6 animate-fadeIn shadow-xl">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold'
                    : 'dark:text-slate-200 text-slate-800 hover:text-cyan-500 hover:bg-cyan-500/10'
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
                className="flex items-center gap-2 text-sm dark:text-slate-300 text-slate-700 hover:text-cyan-500"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm dark:text-slate-300 text-slate-700 hover:text-cyan-500"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={personalInfo.cvPath}
                download="CV_Rida_MANFALOUTI.pdf"
                className="flex items-center gap-1.5 text-sm text-cyan-500 font-semibold"
              >
                <FileText className="w-4 h-4" /> CV
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
