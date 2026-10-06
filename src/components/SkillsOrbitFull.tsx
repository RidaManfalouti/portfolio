import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export interface Skill {
  short: string;
  name: string;
  tag: string;
}

export interface Category {
  id: string;
  labelKey: 'back' | 'front' | 'ai' | 'db';
  defaultLabel: string;
  color: string;
  radius: number;
  duration: number;
  reverse?: boolean;
  skills: Skill[];
}

// Abréviations courtes pour chaque compétence
const SHORT_NAMES: Record<string, string> = {
  'Spring Boot': 'Spring',
  '.NET Core 8': '.NET',
  'Django': 'Django',
  'Laravel': 'Laravel',
  'Clean Architecture & CQRS': 'CQRS',
  'MediatR & Repository Pattern': 'MediatR',
  'ReactJS': 'React',
  'TypeScript': 'TS',
  'Tailwind CSS': 'TW',
  'JavaScript (ES6+)': 'JS',
  'Responsive UI & Animations': 'UI/UX',
  'Bootstrap & CSS3': 'BS',
  'Architecture RAG': 'RAG',
  'LLM (Qwen, Gemini 2.5)': 'LLM',
  'OCR & Document AI': 'OCR',
  'ChromaDB & Vector Search': 'Chroma',
  'Python': 'Py',
  'Ollama & Nomics Embeddings': 'Ollama',
  'SQL Server': 'SQL',
  'MySQL': 'MySQL',
  'Docker': 'Docker',
  'Git & GitHub': 'Git',
  'PL/SQL': 'PL/SQL',
  'VS Code / IntelliJ': 'IDE',
};

// Catégories avec rayons calibrés
const DEFAULT_CATEGORIES: Category[] = [
  {
    id: 'back',
    labelKey: 'back',
    defaultLabel: 'Back-End',
    color: '#047857',
    radius: 0.14,
    duration: 28,
    skills: [
      { short: 'Spring', name: 'Spring Boot', tag: 'Java' },
      { short: '.NET', name: '.NET Core 8', tag: 'C#' },
      { short: 'Django', name: 'Django', tag: 'Python' },
      { short: 'Laravel', name: 'Laravel', tag: 'PHP' },
      { short: 'CQRS', name: 'Clean Architecture & CQRS', tag: 'Architecture' },
      { short: 'MediatR', name: 'MediatR & Repository Pattern', tag: 'Design Patterns' },
    ],
  },
  {
    id: 'front',
    labelKey: 'front',
    defaultLabel: 'Front-End',
    color: '#0284c7',
    radius: 0.23,
    duration: 38,
    reverse: true,
    skills: [
      { short: 'React', name: 'ReactJS', tag: 'Framework' },
      { short: 'TS', name: 'TypeScript', tag: 'Language' },
      { short: 'TW', name: 'Tailwind CSS', tag: 'Styling' },
      { short: 'JS', name: 'JavaScript (ES6+)', tag: 'Language' },
      { short: 'UI/UX', name: 'Responsive UI & Animations', tag: 'UX/UI' },
      { short: 'BS', name: 'Bootstrap & CSS3', tag: 'Styling' },
    ],
  },
  {
    id: 'ai',
    labelKey: 'ai',
    defaultLabel: 'IA & Data',
    color: '#7c3aed',
    radius: 0.32,
    duration: 50,
    skills: [
      { short: 'RAG', name: 'Architecture RAG', tag: 'GenAI' },
      { short: 'LLM', name: 'LLM (Qwen, Gemini 2.5)', tag: 'IA' },
      { short: 'OCR', name: 'OCR & Document AI', tag: 'Extraction' },
      { short: 'Chroma', name: 'ChromaDB & Vector Search', tag: 'Vector DB' },
      { short: 'Py', name: 'Python', tag: 'Language' },
      { short: 'Ollama', name: 'Ollama & Nomics Embeddings', tag: 'Local LLM' },
    ],
  },
  {
    id: 'db',
    labelKey: 'db',
    defaultLabel: 'Bases de données & Outils',
    color: '#d97706',
    radius: 0.41,
    duration: 64,
    reverse: true,
    skills: [
      { short: 'SQL', name: 'SQL Server', tag: 'RDBMS' },
      { short: 'MySQL', name: 'MySQL', tag: 'RDBMS' },
      { short: 'Docker', name: 'Docker', tag: 'DevOps' },
      { short: 'Git', name: 'Git & GitHub', tag: 'Version Control' },
      { short: 'PL/SQL', name: 'PL/SQL', tag: 'Database' },
      { short: 'IDE', name: 'VS Code / IntelliJ', tag: 'IDE' },
    ],
  },
];

export default function SkillsOrbitFull() {
  const { t } = useLanguage();
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [hovered, setHovered] = useState<{ skill: Skill; cat: Category } | null>(null);

  // Synchronisation avec les données existantes de portfolioData.js
  const categories: Category[] = React.useMemo(() => {
    return DEFAULT_CATEGORIES.map((cat) => {
      let sourceSkills: Array<{ name: string; tag: string }> = [];
      if (cat.id === 'back' && skillsData?.backend?.skills) {
        sourceSkills = skillsData.backend.skills;
      } else if (cat.id === 'front' && skillsData?.frontend?.skills) {
        sourceSkills = skillsData.frontend.skills;
      } else if (cat.id === 'ai' && skillsData?.aiData?.skills) {
        sourceSkills = skillsData.aiData.skills;
      } else if (cat.id === 'db' && skillsData?.databasesTools?.skills) {
        sourceSkills = skillsData.databasesTools.skills;
      }

      if (sourceSkills && sourceSkills.length > 0) {
        const mappedSkills: Skill[] = sourceSkills.map((s) => ({
          short: SHORT_NAMES[s.name] || s.name.slice(0, 4),
          name: s.name,
          tag: s.tag,
        }));
        return { ...cat, skills: mappedSkills };
      }
      return cat;
    });
  }, []);

  const isDim = (catId: string) => selectedCats.length > 0 && !selectedCats.includes(catId);

  const toggleCategory = (catId: string) => {
    setSelectedCats((prev) => {
      if (prev.includes(catId)) {
        return prev.filter((id) => id !== catId);
      } else {
        const next = [...prev, catId];
        return next.length === categories.length ? [] : next;
      }
    });
  };

  const resetCategories = () => {
    setSelectedCats([]);
  };

  const getCategoryLabel = (c: Category) => {
    const translated = t?.skills?.categories?.[c.labelKey];
    return translated || c.defaultLabel;
  };

  const allLabel = t?.skills?.allFilter || 'Tout';

  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full max-w-4xl mx-auto">
      <style>{`
        @keyframes so-spin { to { transform: rotate(360deg); } }
        .so-ring { animation: so-spin var(--d) linear infinite; }
        .so-ring.rev { animation-direction: reverse; }
        .so-counter { animation: so-spin var(--d) linear infinite reverse; }
        .so-counter.rev { animation-direction: normal; }
        .so-root.paused .so-ring, .so-root.paused .so-counter { animation-play-state: paused; }

        @media (prefers-reduced-motion: reduce) {
          .so-ring, .so-counter { animation: none; }
        }
      `}</style>

      {/* Conteneur d'orbite avec marge de sécurité */}
      <div
        className={`so-root relative select-none my-8 sm:my-10 ${hovered ? 'paused' : ''}`}
        style={
          {
            '--s': 'min(85vw, 650px)',
            width: 'var(--s)',
            height: 'var(--s)',
          } as React.CSSProperties
        }
      >
        {/* Anneaux guides en pointillés */}
        {categories.map((c) => (
          <div
            key={`g-${c.id}`}
            className="absolute left-1/2 top-1/2 rounded-full border border-dashed transition-opacity duration-500 pointer-events-none -z-0"
            style={{
              width: `calc(var(--s) * ${c.radius * 2})`,
              height: `calc(var(--s) * ${c.radius * 2})`,
              transform: 'translate(-50%, -50%)',
              borderColor: c.color,
              opacity: isDim(c.id) ? 0.05 : 0.3,
            }}
          />
        ))}

        {/* Anneaux en rotation avec compétences (pointer-events-none sur les conteneurs) */}
        {categories.map((c, catIdx) => {
          const dimmed = isDim(c.id);

          return (
            <div
              key={`r-${c.id}`}
              className={`so-ring absolute inset-0 pointer-events-none transition-all duration-500 ${c.reverse ? 'rev' : ''}`}
              style={
                {
                  '--d': `${c.duration}s`,
                  opacity: dimmed ? 0.15 : 1,
                  zIndex: 5 + catIdx,
                } as React.CSSProperties
              }
            >
              {c.skills.map((s, j) => {
                const angle = (360 / c.skills.length) * j;
                const r = `calc(var(--s) * ${c.radius})`;
                const isHoveredSkill = hovered?.skill.name === s.name;

                return (
                  <div
                    key={s.name}
                    className="absolute left-1/2 top-1/2 h-0 w-0 pointer-events-none"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    {/* Ligne de liaison discrète vers le centre */}
                    <div
                      className="absolute left-0 top-0 h-px pointer-events-none transition-opacity duration-300"
                      style={{
                        width: r,
                        background: `linear-gradient(to right, ${c.color}77, ${c.color}08)`,
                        opacity: isHoveredSkill ? 1 : 0.45,
                      }}
                    />
                    {/* Positionnement de la compétence */}
                    <div
                      className="absolute left-0 top-0 pointer-events-none"
                      style={{ transform: `translateX(${r}) rotate(${-angle}deg)` }}
                    >
                      <div
                        className={`so-counter pointer-events-none ${c.reverse ? 'rev' : ''}`}
                        style={{ '--d': `${c.duration}s` } as React.CSSProperties}
                      >
                        {/* Seul le bouton est cliquable et survolable */}
                        <button
                          type="button"
                          disabled={dimmed}
                          aria-label={s.name}
                          onMouseEnter={() => !dimmed && setHovered({ skill: s, cat: c })}
                          onMouseLeave={() => !dimmed && setHovered(null)}
                          onFocus={() => !dimmed && setHovered({ skill: s, cat: c })}
                          onBlur={() => !dimmed && setHovered(null)}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!dimmed) {
                              setHovered((prev) =>
                                prev?.skill.name === s.name ? null : { skill: s, cat: c }
                              );
                            }
                          }}
                          className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white dark:bg-black font-semibold transition-all duration-200 focus-visible:outline-none ${
                            dimmed
                              ? 'pointer-events-none opacity-40 cursor-default'
                              : 'pointer-events-auto cursor-pointer hover:scale-125'
                          } ${
                            isHoveredSkill
                              ? 'scale-125 z-50 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black'
                              : 'z-20 hover:z-50'
                          }`}
                          style={{
                            width: 'clamp(26px, calc(var(--s) * 0.065), 42px)',
                            height: 'clamp(26px, calc(var(--s) * 0.065), 42px)',
                            fontSize: 'clamp(7.5px, calc(var(--s) * 0.015), 11px)',
                            border: `2px solid ${c.color}`,
                            color: c.color,
                            boxShadow: `0 0 15px ${c.color}`,
                          }}
                        >
                          <span className="truncate px-0.5 tracking-tight">{s.short}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Cercle central : Avatar par défaut avec fondu vers les détails au survol */}
        <div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center transition-all duration-300 z-10 overflow-hidden pointer-events-none select-none border-2 border-[#00783C] bg-white dark:bg-black"
          style={{
            width: 'clamp(52px, calc(var(--s) * 0.15), 90px)',
            height: 'clamp(52px, calc(var(--s) * 0.15), 90px)',
            boxShadow: `0 0 15px ${hovered ? hovered.cat.color : '#00783C'}`,
          }}
        >
          {/* Avatar statique par défaut (sans animation de translation) */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <img
              src="/images/avatar.jpg"
              alt="Rida MANFALOUTI"
              className="h-full w-full object-cover rounded-full"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('/images/betmoji.jpeg')) {
                  target.src = '/images/betmoji.jpeg';
                }
              }}
            />
          </div>

          {/* Détails de la compétence au survol */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-2 text-white transition-opacity duration-300 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: hovered ? hovered.cat.color : 'transparent',
            }}
          >
            {hovered && (
              <>
                <span className="font-bold leading-tight text-[8px] sm:text-[11px] line-clamp-2 px-1">
                  {hovered.skill.name}
                </span>
                <span className="mt-0.5 text-[7px] sm:text-[9px] opacity-90 font-mono px-1.5 py-0.5 rounded bg-black/30">
                  {hovered.skill.tag}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Boutons de filtres */}
      <div className="flex flex-wrap justify-center gap-2 px-4">
        <button
          type="button"
          onClick={resetCategories}
          className={`rounded-full border px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
            selectedCats.length === 0
              ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-neutral-900 dark:border-white shadow-md'
              : 'border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 opacity-75 hover:opacity-100 hover:border-neutral-400 dark:hover:border-neutral-700'
          }`}
        >
          {allLabel} ({categories.reduce((n, c) => n + c.skills.length, 0)})
        </button>
        {categories.map((c) => {
          const isCatActive = selectedCats.includes(c.id);
          const label = getCategoryLabel(c);
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => toggleCategory(c.id)}
              className="flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                borderColor: c.color,
                background: isCatActive ? c.color : 'transparent',
                color: isCatActive ? '#ffffff' : c.color,
                boxShadow: isCatActive ? `0 0 15px ${c.color}` : 'none',
              }}
            >
              <span
                className="h-2 w-2 rounded-full shrink-0 transition-transform duration-200"
                style={{
                  background: isCatActive ? '#ffffff' : c.color,
                  transform: isCatActive ? 'scale(1.25)' : 'scale(1)',
                }}
              />
              <span>{label} ({c.skills.length})</span>
            </button>
          );
        })}
      </div>

      {/* Liste des badges / chips en bas */}
      <ul className="flex max-w-3xl flex-wrap justify-center gap-2 px-4 list-none m-0 p-0">
        {categories
          .filter((c) => selectedCats.length === 0 || selectedCats.includes(c.id))
          .flatMap((c) =>
            c.skills.map((s) => (
              <li
                key={s.name}
                onMouseEnter={() => setHovered({ skill: s, cat: c })}
                onMouseLeave={() => setHovered(null)}
                className="rounded-md border px-3 py-1 text-xs font-medium transition-all duration-200 cursor-default hover:scale-105"
                style={{
                  borderColor: `${c.color}55`,
                  color: c.color,
                  background: `${c.color}15`,
                  boxShadow: `0 0 10px ${c.color}33`,
                }}
              >
                {s.name}
              </li>
            ))
          )}
      </ul>
    </div>
  );
}
