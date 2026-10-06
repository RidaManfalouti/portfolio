import React from 'react';
import { Award, Flame } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import SkillsOrbitFull from './SkillsOrbitFull';

export default function Skills() {
  const [sectionRef, isVisible] = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Subtle Highlights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00783C]/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00783C]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/30">
            <Flame className="w-3.5 h-3.5 text-[#00783C]" />
            {t.skills.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-black tracking-tight">
            {t.skills.title}
          </h2>
          <p className="dark:text-neutral-300 text-neutral-700 text-sm sm:text-base leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Orbit Visualization Component */}
        <div className={`mt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SkillsOrbitFull />
        </div>

        {/* Certifications Banner */}
        <div className={`mt-14 p-6 sm:p-8 rounded-2xl glass-card border dark:border-neutral-800 border-neutral-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-md">
              <div className="flex items-center gap-2 text-[#00783C] font-mono text-xs uppercase tracking-wider font-semibold">
                <Award className="w-4 h-4 text-[#00783C]" />
                {t.skills.certBadge}
              </div>
              <h4 className="text-xl font-bold dark:text-white text-black">{t.skills.certTitle}</h4>
              <p className="dark:text-neutral-300 text-neutral-700 text-xs sm:text-sm">
                {t.skills.certSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 text-xs dark:text-white text-black hover:border-[#00783C] transition-all duration-200 shadow-xs"
                >
                  <Award className="w-3.5 h-3.5 text-[#00783C] shrink-0" />
                  <span className="font-medium">{cert.name}</span>
                  <span className="text-[10px] text-[#00783C] font-mono font-semibold">({cert.issuer})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
