import React from 'react';
import { Server, Layout, Cpu, Database, Award, CheckCircle, Flame } from 'lucide-react';
import { skillsData, certifications } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const [sectionRef, isVisible] = useScrollReveal();

  const iconMap = {
    Server: Server,
    Layout: Layout,
    Cpu: Cpu,
    Database: Database,
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Subtle Highlights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase dark:bg-cyan-950/70 bg-cyan-50 dark:text-cyan-400 text-cyan-700 border dark:border-cyan-800/60 border-cyan-200">
            <Flame className="w-3.5 h-3.5 text-cyan-500" />
            Stack Technologique
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Compétences Techniques
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            Une expertise combinant la rigueur du développement back-end d'entreprise, l'ergonomie front-end moderne et l'intégration de modèles d'IA générative avancés.
          </p>
        </div>

        {/* 4 Core Competency Categories Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([key, category], index) => {
            const IconComponent = iconMap[category.icon] || Server;

            return (
              <div
                key={key}
                className={`relative rounded-2xl p-6 glass-card glass-card-hover group border dark:border-slate-800/80 border-slate-200/90 hover:border-cyan-500/40 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Header card icon and title */}
                <div className="flex items-center space-x-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${category.color} text-white shadow-md`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold dark:text-white text-slate-900 group-hover:text-cyan-500 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Items List */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl dark:bg-dark-900/70 bg-white/90 border dark:border-slate-800/60 border-slate-200/80 hover:border-cyan-500/40 transition-all flex items-center justify-between shadow-xs"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium dark:text-slate-200 text-slate-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded dark:bg-slate-800/80 bg-slate-100 dark:text-slate-400 text-slate-600 border dark:border-slate-700/60 border-slate-200">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom decorative accent line */}
                <div className="mt-5 pt-3 border-t dark:border-slate-800/50 border-slate-200/80 flex items-center justify-between text-[11px] dark:text-slate-400 text-slate-500 font-mono">
                  <span>Niveau</span>
                  <span className="text-cyan-500 font-semibold">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Banner */}
        <div className={`mt-14 p-6 sm:p-8 rounded-2xl glass-card border dark:border-slate-800/90 border-slate-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-md">
              <div className="flex items-center gap-2 dark:text-cyan-400 text-cyan-600 font-mono text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                Accréditations & Certifications
              </div>
              <h4 className="text-xl font-bold dark:text-white text-slate-900">Validations Officielles</h4>
              <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
                Des certifications reconnues mondialement validant des compétences en Java, Spring Boot, architecture objet et pratiques Git.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl dark:bg-slate-900/90 bg-white border dark:border-slate-800 border-slate-200 text-xs dark:text-slate-200 text-slate-800 hover:border-cyan-500/50 transition-all duration-200 shadow-xs"
                >
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="font-medium">{cert.name}</span>
                  <span className="text-[10px] dark:text-slate-400 text-slate-500 font-mono">({cert.issuer})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
