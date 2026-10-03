import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Layers, Workflow } from 'lucide-react';
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
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00783C]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00783C]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto space-y-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/30">
            <Layers className="w-3.5 h-3.5 text-[#00783C]" />
            Portfolio & Prototypes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-black tracking-tight">
            Projets Phares & Architectures
          </h2>
          <p className="dark:text-neutral-300 text-neutral-700 text-sm sm:text-base leading-relaxed">
            Chaque projet dispose de son diagramme d'architecture interactif complet détaillant les couches logicielles, les flux de données et le rôle de chaque technologie.
          </p>

          {/* Action to open global architecture explorer */}
          <div className="pt-2">
            <button
              onClick={() => handleOpenArchitecture('doc-ai-validation')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-semibold text-white bg-[#00783C] hover:bg-[#006533] shadow-lg shadow-[#00783C]/20 transition-all duration-300 hover:scale-105"
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
                    ? 'bg-[#00783C] text-white shadow-md shadow-[#00783C]/20 font-semibold'
                    : 'dark:bg-black bg-white dark:text-neutral-300 text-neutral-700 hover:text-black dark:hover:text-white border dark:border-neutral-800 border-neutral-200 hover:border-[#00783C]'
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
              className={`group relative rounded-3xl glass-card border dark:border-neutral-800 border-neutral-200 hover:border-[#00783C] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Card Decorator Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-[#00783C] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl" />

              <div>
                {/* Header card: category & links */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/20 font-semibold">
                    {project.featured && <Sparkles className="w-3 h-3 text-[#00783C]" />}
                    {project.category}
                  </span>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg dark:text-neutral-400 text-neutral-600 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="Code source GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold dark:text-white text-black group-hover:text-[#00783C] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-[#00783C] font-mono font-semibold mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="dark:text-neutral-300 text-neutral-700 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs dark:text-neutral-300 text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00783C] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button & Badges */}
              <div className="pt-4 border-t dark:border-neutral-800 border-neutral-200 space-y-3">
                
                {/* Dedicated Interactive Architecture Flowchart Button */}
                <button
                  type="button"
                  onClick={() => handleOpenArchitecture(project.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#00783C] hover:bg-[#006533] shadow-md shadow-[#00783C]/20 transition-all duration-200"
                >
                  <Workflow className="w-4 h-4" />
                  <span>Architecture & Flux Technique</span>
                </button>

                {/* Badges list */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/20"
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
