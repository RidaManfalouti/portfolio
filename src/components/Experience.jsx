import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, GraduationCap, Workflow, ListFilter } from 'lucide-react';
import { experiences, education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AlgoArchitectureFlow from './AlgoArchitectureFlow';

export default function Experience() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [algoViewMode, setAlgoViewMode] = useState('architecture'); // 'architecture' | 'tasks'

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden dark:bg-dark-950/60 bg-slate-50/60">
      {/* Glow effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto space-y-4 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase dark:bg-blue-950/80 bg-blue-50 dark:text-cyan-400 text-cyan-700 border dark:border-blue-800/60 border-blue-200">
            <Briefcase className="w-3.5 h-3.5 text-cyan-500" />
            Parcours & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Expériences Professionnelles
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            Mise en œuvre d'architectures Clean Architecture, déploiement d'agents RAG et développement d'applications d'entreprise robustes.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-600/40" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isAlgo = exp.featured;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-10 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot Node */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border z-10 transition-transform duration-300 hover:scale-110 shadow-lg ${
                      isAlgo
                        ? 'bg-gradient-to-tr from-blue-600 to-cyan-500 border-cyan-400 text-white shadow-cyan-500/30'
                        : 'dark:bg-dark-900 bg-white dark:border-slate-700 border-slate-300 text-cyan-500 shadow-sm'
                    }`}>
                      <Briefcase className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={`flex-1 rounded-2xl p-6 sm:p-8 glass-card border transition-all duration-300 ${
                    isAlgo
                      ? 'dark:border-cyan-500/40 border-cyan-500/30 dark:bg-gradient-to-b dark:from-dark-900/90 dark:to-dark-850/80 bg-white/95 shadow-xl dark:shadow-cyan-950/30 relative overflow-hidden'
                      : 'dark:border-slate-800/80 border-slate-200 hover:border-slate-300 dark:hover:border-slate-700 dark:bg-dark-900/60 bg-white/80'
                  }`}>
                    {/* Featured Ribbon for Algo Consulting */}
                    {isAlgo && (
                      <div className="absolute top-0 right-0">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-bl-xl text-[11px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md">
                          <Sparkles className="w-3.5 h-3.5" />
                          Stage Clé IA & .NET
                        </span>
                      </div>
                    )}

                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-cyan-500 font-semibold">
                          <span>{exp.company}</span>
                          <span className="text-slate-400">•</span>
                          <span className="dark:text-slate-400 text-slate-500 text-xs font-normal flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl dark:bg-slate-900 bg-slate-100 dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 self-start sm:self-auto shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="dark:text-slate-300 text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* For Algo Consulting: Interactive Architecture vs Tasks Toggle */}
                    {isAlgo && (
                      <div className="my-6">
                        <div className="flex items-center justify-between border-b dark:border-slate-800 border-slate-200 pb-3 mb-4">
                          <span className="text-xs font-mono dark:text-slate-300 text-slate-700 font-semibold flex items-center gap-1.5 uppercase">
                            <Workflow className="w-4 h-4 text-cyan-500" />
                            Visualisation Technique :
                          </span>

                          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border dark:border-slate-700 border-slate-200 text-xs font-medium">
                            <button
                              onClick={() => setAlgoViewMode('architecture')}
                              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${
                                algoViewMode === 'architecture'
                                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                                  : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              <Workflow className="w-3.5 h-3.5" />
                              <span>Diagramme d'Architecture</span>
                            </button>
                            <button
                              onClick={() => setAlgoViewMode('tasks')}
                              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${
                                algoViewMode === 'tasks'
                                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                                  : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              <ListFilter className="w-3.5 h-3.5" />
                              <span>Missions & Détails</span>
                            </button>
                          </div>
                        </div>

                        {algoViewMode === 'architecture' ? (
                          /* Interactive Clean Architecture & RAG Flowchart */
                          <AlgoArchitectureFlow />
                        ) : (
                          /* Task descriptions */
                          <div className="space-y-4 mb-6 animate-fadeIn">
                            {exp.achievements.map((item, aIdx) => (
                              <div key={aIdx} className="rounded-xl p-4 dark:bg-dark-950/70 bg-slate-50 border dark:border-slate-800/80 border-slate-200 space-y-1">
                                <h4 className="text-xs sm:text-sm font-semibold dark:text-slate-100 text-slate-900 flex items-start gap-2">
                                  <ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                                  <span>{item.title}</span>
                                </h4>
                                <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 pl-6 leading-relaxed">
                                  {item.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Standard achievements for non-Algo experiences */}
                    {!isAlgo && (
                      <div className="space-y-4 mb-6">
                        {exp.achievements.map((item, aIdx) => (
                          <div key={aIdx} className="rounded-xl p-3.5 dark:bg-dark-950/60 bg-slate-50 border dark:border-slate-800/80 border-slate-200 space-y-1">
                            <h4 className="text-xs sm:text-sm font-semibold dark:text-slate-100 text-slate-900 flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                              <span>{item.title}</span>
                            </h4>
                            <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 pl-6 leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t dark:border-slate-800/60 border-slate-200">
                      <span className="text-xs dark:text-slate-400 text-slate-500 font-mono mr-1">Stack :</span>
                      {exp.techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium dark:bg-slate-800/70 bg-slate-100 dark:hover:bg-slate-700/80 hover:bg-slate-200 dark:text-cyan-300 text-cyan-800 border dark:border-slate-700/60 border-slate-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Highlight (EMSI & OFPPT) */}
        <div className={`mt-20 pt-12 border-t dark:border-slate-800/80 border-slate-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-2 mb-8 justify-center">
            <GraduationCap className="w-6 h-6 text-cyan-500" />
            <h3 className="text-2xl font-bold dark:text-white text-slate-900">Formation Académique</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border dark:border-slate-800/80 border-slate-200 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono dark:text-cyan-400 text-cyan-700 font-semibold px-2.5 py-1 rounded-lg dark:bg-cyan-950/70 bg-cyan-50 border dark:border-cyan-800/50 border-cyan-200">
                    {edu.period}
                  </span>
                  <span className="text-xs dark:text-slate-400 text-slate-500">{edu.school}</span>
                </div>
                <h4 className="text-lg font-bold dark:text-white text-slate-900 mt-2 mb-2">{edu.diploma}</h4>
                <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
