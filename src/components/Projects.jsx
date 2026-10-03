import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Layers, Workflow, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectArchitectureModal from './ProjectArchitectureModal';

export default function Projects() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [filter, setFilter] = useState('all');
  const [selectedArchProject, setSelectedArchProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'ai', label: 'IA & Data' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Front-End' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ai') return project.category.toLowerCase().includes('ai');
    if (filter === 'fullstack') return project.category.toLowerCase().includes('full stack') || project.category.toLowerCase().includes('web');
    if (filter === 'frontend') return project.category.toLowerCase().includes('front-end');
    return true;
  });

  const handleOpenArchitecture = (projectId) => {
    setSelectedArchProject(projectId);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto space-y-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase dark:bg-cyan-950/70 bg-cyan-50 dark:text-cyan-400 text-cyan-700 border dark:border-cyan-800/60 border-cyan-200">
            <Layers className="w-3.5 h-3.5 text-cyan-500" />
            Portfolio & Prototypes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Projets Phares & Architectures
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            Chaque projet dispose de son diagramme d'architecture interactif complet détaillant les couches logicielles, les flux de données et le rôle de chaque technologie.
          </p>

          {/* Action to open global architecture explorer */}
          <div className="pt-2">
            <button
              onClick={() => handleOpenArchitecture('doc-ai-validation')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
            >
              <Workflow className="w-4 h-4" />
              <span>Ouvrir l'Explorateur d'Architecture Global (6 Projets)</span>
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                    : 'dark:bg-slate-900/80 bg-white dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white border dark:border-slate-800 border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl glass-card border dark:border-slate-800/80 border-slate-200 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-cyan-950/40 hover:shadow-cyan-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Card Decorator Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl" />

              <div>
                {/* Header card: category & links */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md dark:bg-slate-900 bg-slate-100 dark:text-cyan-400 text-cyan-700 border dark:border-slate-800 border-slate-200">
                    {project.featured && <Sparkles className="w-3 h-3 text-amber-500" />}
                    {project.category}
                  </span>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg dark:text-slate-400 text-slate-500 hover:text-slate-900 dark:hover:text-white dark:hover:bg-slate-800/80 hover:bg-slate-100 transition-colors"
                      aria-label="Code source GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 group-hover:text-cyan-500 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs dark:text-slate-400 text-slate-500 font-mono mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="dark:text-slate-300 text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs dark:text-slate-300/90 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button & Badges */}
              <div className="pt-4 border-t dark:border-slate-800/70 border-slate-200 space-y-3">
                
                {/* Dedicated Interactive Architecture Flowchart Button */}
                <button
                  type="button"
                  onClick={() => handleOpenArchitecture(project.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-blue-700/90 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-cyan-600/20 transition-all duration-200 hover:scale-101"
                >
                  <Workflow className="w-4 h-4" />
                  <span>Architecture & Flux Technique</span>
                </button>

                {/* Badges list */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-medium dark:bg-dark-900 bg-slate-100 dark:text-slate-300 text-slate-700 border dark:border-slate-800 border-slate-200 group-hover:border-cyan-500/30 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Architecture Modal */}
      <ProjectArchitectureModal
        initialProjectId={selectedArchProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
