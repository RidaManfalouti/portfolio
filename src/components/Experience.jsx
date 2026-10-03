import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, ChevronRight, GraduationCap, Workflow, ListFilter } from 'lucide-react';
import { experiences, education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import AlgoArchitectureFlow from './AlgoArchitectureFlow';

export default function Experience() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [algoViewMode, setAlgoViewMode] = useState('architecture'); // 'architecture' | 'tasks'
  const { t, isRtl } = useLanguage();

  const stages = t.experience.stages || experiences;

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden dark:bg-black bg-white">
      {/* Glow effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00783C]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#00783C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto space-y-4 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/30">
            <Briefcase className="w-3.5 h-3.5 text-[#00783C]" />
            {t.experience.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-black tracking-tight">
            {t.experience.title}
          </h2>
          <p className="dark:text-neutral-300 text-neutral-700 text-sm sm:text-base leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`hidden md:block absolute ${isRtl ? 'right-8' : 'left-8'} top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00783C] via-emerald-600 to-[#00783C]/30`} />

          <div className="space-y-12">
            {stages.map((exp, index) => {
              const isAlgo = index === 0;

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
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border z-10 transition-transform duration-300 hover:scale-110 shadow-lg bg-[#00783C] border-[#00783C] text-white">
                      <Briefcase className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={`flex-1 rounded-2xl p-6 sm:p-8 glass-card border transition-all duration-300 ${
                    isAlgo
                      ? 'border-[#00783C]/50 dark:bg-black bg-white shadow-xl relative overflow-hidden'
                      : 'dark:border-neutral-800 border-neutral-200 dark:bg-black bg-white'
                  }`}>
                    {/* Featured Ribbon for Algo Consulting */}
                    {isAlgo && (
                      <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'}`}>
                        <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 ${isRtl ? 'rounded-br-xl' : 'rounded-bl-xl'} text-[11px] font-mono font-bold uppercase tracking-wider bg-[#00783C] text-white shadow-md`}>
                          <Sparkles className="w-3.5 h-3.5" />
                          {t.experience.featuredRibbon}
                        </span>
                      </div>
                    )}

                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-black flex items-center gap-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-[#00783C] font-semibold">
                          <span>{exp.company}</span>
                          <span className="text-neutral-400">•</span>
                          <span className="dark:text-neutral-400 text-neutral-600 text-xs font-normal flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#00783C]" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl dark:bg-black bg-neutral-100 dark:border-neutral-800 border-neutral-200 text-[#00783C] font-semibold self-start sm:self-auto shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-[#00783C]" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="dark:text-neutral-300 text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* For Algo Consulting: Interactive Architecture vs Tasks Toggle */}
                    {isAlgo && (
                      <div className="my-6">
                        <div className="flex items-center justify-between border-b dark:border-neutral-800 border-neutral-200 pb-3 mb-4">
                          <span className="text-xs font-mono text-[#00783C] font-semibold flex items-center gap-1.5 uppercase">
                            <Workflow className="w-4 h-4 text-[#00783C]" />
                            {t.experience.techVisualization}
                          </span>

                          <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl border dark:border-neutral-800 border-neutral-200 text-xs font-medium">
                            <button
                              onClick={() => setAlgoViewMode('architecture')}
                              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all font-semibold ${
                                algoViewMode === 'architecture'
                                  ? 'bg-[#00783C] text-white shadow-sm'
                                  : 'dark:text-neutral-400 text-neutral-600 hover:text-black dark:hover:text-white'
                              }`}
                            >
                              <Workflow className="w-3.5 h-3.5" />
                              <span>{t.experience.architectureDiagram}</span>
                            </button>
                            <button
                              onClick={() => setAlgoViewMode('tasks')}
                              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all font-semibold ${
                                algoViewMode === 'tasks'
                                  ? 'bg-[#00783C] text-white shadow-sm'
                                  : 'dark:text-neutral-400 text-neutral-600 hover:text-black dark:hover:text-white'
                              }`}
                            >
                              <ListFilter className="w-3.5 h-3.5" />
                              <span>{t.experience.missionsAndDetails}</span>
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
                              <div key={aIdx} className="rounded-xl p-4 dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 space-y-1">
                                <h4 className="text-xs sm:text-sm font-semibold dark:text-white text-black flex items-start gap-2">
                                  <ChevronRight className={`w-4 h-4 text-[#00783C] mt-0.5 shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
                                  <span>{item.title}</span>
                                </h4>
                                <p className="text-xs sm:text-sm dark:text-neutral-300 text-neutral-700 pl-6 rtl:pl-0 rtl:pr-6 leading-relaxed">
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
                          <div key={aIdx} className="rounded-xl p-3.5 dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 space-y-1">
                            <h4 className="text-xs sm:text-sm font-semibold dark:text-white text-black flex items-start gap-2">
                              <ChevronRight className={`w-4 h-4 text-[#00783C] mt-0.5 shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
                              <span>{item.title}</span>
                            </h4>
                            <p className="text-xs sm:text-sm dark:text-neutral-300 text-neutral-700 pl-6 rtl:pl-0 rtl:pr-6 leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t dark:border-neutral-800 border-neutral-200">
                      <span className="text-xs text-[#00783C] font-mono font-semibold mr-1 rtl:mr-0 rtl:ml-1">
                        {t.experience.stackLabel}
                      </span>
                      {exp.techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/20"
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
        <div className={`mt-20 pt-12 border-t dark:border-neutral-800 border-neutral-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-2 mb-8 justify-center">
            <GraduationCap className="w-6 h-6 text-[#00783C]" />
            <h3 className="text-2xl font-bold dark:text-white text-black">{t.experience.educationTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border dark:border-neutral-800 border-neutral-200 hover:border-[#00783C] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#00783C] font-semibold px-2.5 py-1 rounded-lg bg-[#00783C]/10 border border-[#00783C]/30">
                    {edu.period}
                  </span>
                  <span className="text-xs text-[#00783C] font-bold font-mono">{edu.school}</span>
                </div>
                <h4 className="text-lg font-bold dark:text-white text-black mt-2 mb-2">{edu.diploma}</h4>
                <p className="text-xs sm:text-sm dark:text-neutral-300 text-neutral-700 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
