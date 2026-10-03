import React from 'react';
import { ArrowRight, Download, Code2, Cpu, CheckCircle2, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, isRtl } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      {/* Background Glows and Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00783C]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Cyber Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#00783C 1px, transparent 1px), linear-gradient(90deg, #00783C 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left rtl:lg:text-right space-y-6 sm:space-y-8">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00783C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00783C]"></span>
              </span>
              <span className="text-xs font-semibold text-[#00783C]">
                {t.hero.availability}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                <span className="block dark:text-white text-black">{t.hero.greeting}</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#00783C] font-bold mt-2">
                  {t.hero.role}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg dark:text-neutral-400 text-neutral-600 max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
              {t.hero.tagline}
            </p>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start rtl:lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#00783C] hover:bg-[#006533] shadow-md shadow-[#00783C]/20 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span>{t.hero.exploreProjects}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
              </a>

              <a
                href={personalInfo.cvPath}
                download="CV_Rida_MANFALOUTI.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm dark:text-white text-black dark:bg-black bg-white hover:bg-neutral-100 dark:hover:bg-neutral-900 border dark:border-neutral-700 border-neutral-300 hover:border-[#00783C] hover:text-[#00783C] transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
              >
                <Download className="w-4 h-4 text-[#00783C]" />
                <span>{t.hero.downloadCV}</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2 rtl:sm:ml-0 rtl:sm:mr-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="p-3 dark:text-white text-black hover:text-[#00783C] dark:hover:text-[#00783C] dark:bg-black bg-white hover:bg-neutral-100 dark:hover:bg-neutral-900 border dark:border-neutral-800 border-neutral-200 rounded-xl transition-all duration-200 hover:scale-105 shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-3 dark:text-white text-black hover:text-[#00783C] dark:hover:text-[#00783C] dark:bg-black bg-white hover:bg-neutral-100 dark:hover:bg-neutral-900 border dark:border-neutral-800 border-neutral-200 rounded-xl transition-all duration-200 hover:scale-105 shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Visual Profile Card (Spacious, Uncluttered, No Repetitions) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-[#00783C]/10 blur-xl pointer-events-none" />

              {/* Profile Card */}
              <div className="relative rounded-2xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 shadow-xl p-6 sm:p-8 space-y-6">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-5 border-b dark:border-neutral-800 border-neutral-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#00783C] text-white shadow-xs">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00783C] block">
                        {t.hero.profileTitle}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold dark:text-white text-black leading-tight">
                        {t.hero.school}
                      </h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/30">
                    {t.hero.degreeLevel}
                  </span>
                </div>

                {/* Professional Presentation (Single concise paragraph) */}
                <p className="text-xs sm:text-sm dark:text-neutral-300 text-neutral-700 leading-relaxed font-normal">
                  {t.hero.presentation}
                </p>

                {/* Key Pillars */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-3 p-3 rounded-xl dark:bg-neutral-950 bg-neutral-50 border dark:border-neutral-800/80 border-neutral-200/80">
                    <Code2 className="w-4 h-4 text-[#00783C] shrink-0" />
                    <div className="text-xs">
                      <span className="font-semibold dark:text-white text-black">{t.hero.pillarStackLabel} </span>
                      <span className="dark:text-neutral-400 text-neutral-600">{t.hero.pillarStackValue}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl dark:bg-neutral-950 bg-neutral-50 border dark:border-neutral-800/80 border-neutral-200/80">
                    <Cpu className="w-4 h-4 text-[#00783C] shrink-0" />
                    <div className="text-xs">
                      <span className="font-semibold dark:text-white text-black">{t.hero.pillarAiLabel} </span>
                      <span className="dark:text-neutral-400 text-neutral-600">{t.hero.pillarAiValue}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl dark:bg-neutral-950 bg-neutral-50 border dark:border-neutral-800/80 border-neutral-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#00783C] shrink-0" />
                    <div className="text-xs">
                      <span className="font-semibold dark:text-white text-black">{t.hero.pillarStatusLabel} </span>
                      <span className="dark:text-neutral-400 text-neutral-600">{t.hero.pillarStatusValue}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="pt-4 border-t dark:border-neutral-800 border-neutral-200 flex items-center justify-between text-xs">
                  <span className="text-xs font-semibold text-[#00783C] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00783C]"></span>
                    {t.hero.readyToJoin}
                  </span>
                  <span className="text-[11px] font-mono dark:text-neutral-500 text-neutral-500">
                    {t.hero.mobility}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
