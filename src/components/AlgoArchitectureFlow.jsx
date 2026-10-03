import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Layout, 
  Cpu, 
  Database, 
  Layers, 
  Sparkles, 
  FileSearch, 
  GitBranch, 
  Box, 
  ArrowDown, 
  ArrowRight, 
  Info, 
  CheckCircle2, 
  Zap, 
  ChevronDown, 
  ChevronUp,
  Workflow
} from 'lucide-react';

export default function AlgoArchitectureFlow() {
  const [activeTechId, setActiveTechId] = useState('react-ts');
  const [activePipeline, setActivePipeline] = useState('all');
  const [expandedMobileLayer, setExpandedMobileLayer] = useState(1);

  // Complete data for each architecture node with required exact explanations
  const techNodes = {
    'react-ts': {
      id: 'react-ts',
      name: 'React & TypeScript',
      layer: 'Frontend & Présentation',
      badge: 'Client SPA',
      pipelines: ['all', 'rag', 'ocr', 'data'],
      icon: Layout,
      color: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-500',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      tooltip: "Interface utilisateur Frontend. Création d'un dashboard décisionnel dynamique et interactif.",
      howWhy: "Permet une expérience utilisateur réactive avec typage strict TypeScript pour manipuler les données décisionnelles en temps réel, écouter les flux SSE du chatbot et visualiser les résultats d'OCR.",
      connections: ['API .NET Core 8 via HTTPS/SSE']
    },
    'dotnet-8': {
      id: 'dotnet-8',
      name: '.NET Core 8',
      layer: 'Application & Core API',
      badge: 'Clean Architecture',
      pipelines: ['all', 'rag', 'ocr', 'data'],
      icon: Server,
      color: 'from-blue-600 to-indigo-600',
      borderColor: 'border-blue-500',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      tooltip: "API Backend robuste structurée en Clean Architecture.",
      howWhy: "Constitue le cœur du backend, garantissant une séparation stricte des responsabilités (Domain, Application, Infrastructure, WebApi), une haute performance et une extensibilité maximale.",
      connections: ['MediatR (Pipeline CQRS)', 'Services d’arrière-plan asynchrones']
    },
    'mediatr': {
      id: 'mediatr',
      name: 'MediatR',
      layer: 'Application & Core API',
      badge: 'CQRS Pattern',
      pipelines: ['all', 'rag', 'ocr', 'data'],
      icon: Workflow,
      color: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-500',
      glowColor: 'rgba(245, 158, 11, 0.4)',
      tooltip: "Implémentation du pattern CQRS pour découpler les commandes et les requêtes dans l'API.",
      howWhy: "Découple les contrôleurs de la logique métier. Isole les commandes (mutations/injections) des requêtes (lectures) et gère les pipelines de validation et de logging de façon centralisée.",
      connections: ['SQL Server (Queries/Commands)', 'Module IA Gemini', 'Pipeline RAG']
    },
    'sql-server': {
      id: 'sql-server',
      name: 'SQL Server',
      layer: 'Persistance & Fallback',
      badge: 'RDBMS',
      pipelines: ['all', 'rag', 'data'],
      icon: Database,
      color: 'from-rose-500 to-red-600',
      borderColor: 'border-rose-500',
      glowColor: 'rgba(244, 63, 94, 0.4)',
      tooltip: "Base de données relationnelle agissant comme stockage principal et fallback pour le système.",
      howWhy: "Stocke de façon sécurisée les dossiers consulaires, métadonnées, utilisateurs et sert de repli stratégique garantissant la continuité du service même lors des pics de charge vectoriels.",
      connections: ['EF Core / Dapper', 'Stratégie de repli RAG']
    },
    'gemini-flash': {
      id: 'gemini-flash',
      name: 'Gemini 2.5 Flash',
      layer: 'Intelligence Artificielle Cloud',
      badge: 'Multimodal OCR & IA',
      pipelines: ['all', 'ocr'],
      icon: FileSearch,
      color: 'from-emerald-400 to-teal-500',
      borderColor: 'border-emerald-400',
      glowColor: 'rgba(52, 211, 153, 0.4)',
      tooltip: "IA Cloud utilisée pour le module d'extraction (OCR) et la validation automatisée des documents consulaires.",
      howWhy: "Combine l'extraction OCR ultra-rapide à un raisonnement sémantique pour vérifier la conformité des pièces justificatives avec un taux d'erreur quasi nul.",
      connections: ['Module de validation déterministe C#']
    },
    'chromadb': {
      id: 'chromadb',
      name: 'ChromaDB',
      layer: 'Intelligence Artificielle & Data',
      badge: 'Vector Database',
      pipelines: ['all', 'rag'],
      icon: Database,
      color: 'from-purple-500 to-indigo-500',
      borderColor: 'border-purple-500',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      tooltip: "Base de données vectorielle utilisée pour l'architecture RAG (Retrieval-Augmented Generation) du chatbot.",
      howWhy: "Indexe les représentations sémantiques (embeddings) de la documentation pour permettre une recherche par similarité cosinus en quelques millisecondes.",
      connections: ['Ollama (Qwen 3)', 'Pipeline d’ingestion vectorielle']
    },
    'ollama-qwen': {
      id: 'ollama-qwen',
      name: 'Ollama (Qwen 3)',
      layer: 'Intelligence Artificielle Souveraine',
      badge: 'Local LLM Inference',
      pipelines: ['all', 'rag'],
      icon: Cpu,
      color: 'from-violet-500 to-fuchsia-600',
      borderColor: 'border-violet-500',
      glowColor: 'rgba(139, 92, 246, 0.4)',
      tooltip: "LLM local déployé pour propulser l'assistant conversationnel sans exposer de données sensibles.",
      howWhy: "Exécute en toute confidentialité le modèle Qwen 3 sur infrastructure locale, générant des réponses contextuelles augmentées sans fuite de données vers des serveurs tiers.",
      connections: ['ChromaDB (Context Injection)', 'Streaming SSE']
    },
    'docker': {
      id: 'docker',
      name: 'Docker',
      layer: 'Infrastructure & Déploiement',
      badge: 'Conteneurisation',
      pipelines: ['all', 'rag', 'ocr', 'data'],
      icon: Box,
      color: 'from-sky-500 to-blue-600',
      borderColor: 'border-sky-500',
      glowColor: 'rgba(14, 165, 233, 0.4)',
      tooltip: "Conteneurisation de l'ensemble des micro-services (API, Front, Base vectorielle) pour faciliter le déploiement.",
      howWhy: "Standardise l'environnement d'exécution entre développement et production, isole la base vectorielle ChromaDB et l'API ASP.NET Core.",
      connections: ['Compose Multi-Services', 'Réseau isolé']
    },
    'git': {
      id: 'git',
      name: 'Git',
      layer: 'Infrastructure & Déploiement',
      badge: 'Version Control',
      pipelines: ['all', 'rag', 'ocr', 'data'],
      icon: GitBranch,
      color: 'from-orange-500 to-rose-500',
      borderColor: 'border-orange-500',
      glowColor: 'rgba(249, 115, 22, 0.4)',
      tooltip: "Gestion des versions et collaboration.",
      howWhy: "Assure la traçabilité des modifications, le travail d'équipe avec Gitflow et l'automatisation des revues de code.",
      connections: ['GitHub', 'CI/CD Workflow']
    }
  };

  const activeNode = techNodes[activeTechId] || techNodes['react-ts'];

  const pipelineOptions = [
    { id: 'all', label: 'Vue Globale du Système', desc: 'Architecture complète Clean Architecture & IA' },
    { id: 'rag', label: 'Flux RAG Chatbot', desc: 'React ➔ .NET 8 ➔ MediatR ➔ ChromaDB & Qwen 3 ➔ SQL Server' },
    { id: 'ocr', label: 'Flux Validation OCR', desc: 'React ➔ .NET 8 ➔ MediatR ➔ Gemini 2.5 Flash ➔ SQL Server' },
    { id: 'data', label: 'Flux Gestion & CQRS', desc: 'React ➔ .NET 8 ➔ MediatR ➔ SQL Server' },
  ];

  const isHighlighted = (nodeId) => {
    if (activePipeline === 'all') return true;
    return techNodes[nodeId]?.pipelines.includes(activePipeline);
  };

  return (
    <div className="rounded-3xl glass-card border dark:border-cyan-500/30 border-cyan-500/20 p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden my-12">
      
      {/* Background Tech Mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header with Project Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b dark:border-slate-800 border-slate-200">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/30">
              <Workflow className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-500">
                Stage Algo Consulting Group
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 tracking-tight">
                Architecture Interactive du Système
              </h3>
            </div>
          </div>
          <p className="mt-2 text-xs sm:text-sm dark:text-slate-300 text-slate-600 max-w-2xl">
            Survolez ou cliquez sur les cartes pour inspecter <span className="font-semibold text-cyan-500">COMMENT</span> et <span className="font-semibold text-violet-500">POURQUOI</span> chaque brique technologique a été intégrée dans la solution.
          </p>
        </div>

        {/* Pipeline Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-dark-900/60 dark:bg-dark-900/80 bg-slate-100 p-1.5 rounded-2xl border dark:border-slate-800 border-slate-200">
          {pipelineOptions.map((pipe) => (
            <button
              key={pipe.id}
              onClick={() => setActivePipeline(pipe.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                activePipeline === pipe.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/30 scale-102'
                  : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={pipe.desc}
            >
              {pipe.label}
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP INTERACTIVE FLOWCHART (Hidden on mobile screens)       */}
      {/* ============================================================== */}
      <div className="hidden md:block mt-8 space-y-8">
        
        {/* ================= COUCHE 1 : FRONTEND ================= */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider dark:text-cyan-400 text-cyan-600">
            <Layout className="w-4 h-4" />
            <span>Couche 1 : Présentation & Tableau de Bord Client</span>
          </div>

          <div className="flex justify-center">
            <ArchitectureNodeCard
              node={techNodes['react-ts']}
              isActive={activeTechId === 'react-ts'}
              isHighlighted={isHighlighted('react-ts')}
              onHover={() => setActiveTechId('react-ts')}
              onClick={() => setActiveTechId('react-ts')}
            />
          </div>
        </div>

        {/* Connecteur Vertical 1 : HTTPS & SSE */}
        <div className="flex flex-col items-center my-1">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono dark:bg-slate-900 bg-slate-200/80 dark:text-cyan-400 text-cyan-700 border dark:border-cyan-900/40 border-cyan-300 shadow-sm">
            <Zap className="w-3 h-3 animate-pulse text-cyan-500" />
            <span>Flux HTTPS REST & Server-Sent Events (SSE Temps Réel)</span>
          </div>
          <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-500 to-blue-500" />
          <ArrowDown className="w-4 h-4 text-blue-500 -mt-1" />
        </div>

        {/* ================= COUCHE 2 : APPLICATION & CQRS ================= */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider dark:text-blue-400 text-blue-600">
            <Server className="w-4 h-4" />
            <span>Couche 2 : Application Core & Clean Architecture</span>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto items-center">
            <ArchitectureNodeCard
              node={techNodes['dotnet-8']}
              isActive={activeTechId === 'dotnet-8'}
              isHighlighted={isHighlighted('dotnet-8')}
              onHover={() => setActiveTechId('dotnet-8')}
              onClick={() => setActiveTechId('dotnet-8')}
            />

            <div className="relative">
              {/* Connector line between .NET 8 and MediatR */}
              <div className="hidden md:flex items-center absolute -left-5 top-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-0.5 bg-blue-500" />
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 -ml-1" />
              </div>

              <ArchitectureNodeCard
                node={techNodes['mediatr']}
                isActive={activeTechId === 'mediatr'}
                isHighlighted={isHighlighted('mediatr')}
                onHover={() => setActiveTechId('mediatr')}
                onClick={() => setActiveTechId('mediatr')}
              />
            </div>
          </div>
        </div>

        {/* Connecteur Vertical 2 : Dispatcher CQRS vers branches */}
        <div className="flex flex-col items-center my-1">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono dark:bg-slate-900 bg-slate-200/80 dark:text-amber-400 text-amber-700 border dark:border-amber-900/40 border-amber-300 shadow-sm">
            <GitBranch className="w-3 h-3 text-amber-500" />
            <span>Orchestration CQRS / Handlers Découplés</span>
          </div>
          <div className="w-0.5 h-6 bg-gradient-to-b from-amber-500 to-indigo-500" />
          <ArrowDown className="w-4 h-4 text-indigo-500 -mt-1" />
        </div>

        {/* ================= COUCHE 3 : PERSISTANCE & IA (3 BRANCHES) ================= */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider dark:text-purple-400 text-purple-600">
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Couche 3 : Persistance Relationnelle, Extraction OCR & RAG
            </span>
            <span className="text-[11px] text-slate-500 font-sans lowercase">
              3 pipelines spécialisés
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Branche 1: Relational Data */}
            <div className="p-4 rounded-2xl dark:bg-dark-900/60 bg-slate-100/70 border dark:border-slate-800 border-slate-200 flex flex-col justify-between">
              <div className="mb-3">
                <div className="text-[11px] font-mono font-semibold dark:text-rose-400 text-rose-600 uppercase mb-1">
                  1. Stockage & Repli
                </div>
                <p className="text-[11px] dark:text-slate-400 text-slate-600">
                  Gestion relationnelle et sécurité des données
                </p>
              </div>
              <ArchitectureNodeCard
                node={techNodes['sql-server']}
                isActive={activeTechId === 'sql-server'}
                isHighlighted={isHighlighted('sql-server')}
                onHover={() => setActiveTechId('sql-server')}
                onClick={() => setActiveTechId('sql-server')}
              />
            </div>

            {/* Branche 2: Cloud AI OCR */}
            <div className="p-4 rounded-2xl dark:bg-dark-900/60 bg-slate-100/70 border dark:border-slate-800 border-slate-200 flex flex-col justify-between">
              <div className="mb-3">
                <div className="text-[11px] font-mono font-semibold dark:text-emerald-400 text-emerald-600 uppercase mb-1">
                  2. OCR & Documents
                </div>
                <p className="text-[11px] dark:text-slate-400 text-slate-600">
                  Validation de conformité hybride (C# + IA)
                </p>
              </div>
              <ArchitectureNodeCard
                node={techNodes['gemini-flash']}
                isActive={activeTechId === 'gemini-flash'}
                isHighlighted={isHighlighted('gemini-flash')}
                onHover={() => setActiveTechId('gemini-flash')}
                onClick={() => setActiveTechId('gemini-flash')}
              />
            </div>

            {/* Branche 3: Local RAG (ChromaDB + Qwen 3) */}
            <div className="p-4 rounded-2xl dark:bg-dark-900/60 bg-slate-100/70 border dark:border-slate-800 border-slate-200 flex flex-col justify-between">
              <div className="mb-3">
                <div className="text-[11px] font-mono font-semibold dark:text-violet-400 text-violet-600 uppercase mb-1">
                  3. Chatbot RAG Privé
                </div>
                <p className="text-[11px] dark:text-slate-400 text-slate-600">
                  Recherche vectorielle et LLM souverain local
                </p>
              </div>

              <div className="space-y-3">
                <ArchitectureNodeCard
                  node={techNodes['chromadb']}
                  isActive={activeTechId === 'chromadb'}
                  isHighlighted={isHighlighted('chromadb')}
                  onHover={() => setActiveTechId('chromadb')}
                  onClick={() => setActiveTechId('chromadb')}
                />
                
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono dark:text-violet-400 text-violet-600">
                  <ArrowDown className="w-3 h-3" />
                  <span>Contexte sémantique injecté</span>
                </div>

                <ArchitectureNodeCard
                  node={techNodes['ollama-qwen']}
                  isActive={activeTechId === 'ollama-qwen'}
                  isHighlighted={isHighlighted('ollama-qwen')}
                  onHover={() => setActiveTechId('ollama-qwen')}
                  onClick={() => setActiveTechId('ollama-qwen')}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ================= COUCHE 4 : INFRASTRUCTURE & DEVOPS ================= */}
        <div className="mt-8 pt-6 border-t dark:border-slate-800 border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider dark:text-sky-400 text-sky-600">
              <Box className="w-4 h-4" />
              Couche Transverse : DevOps & Versioning
            </span>
            <span className="text-[11px] text-slate-500 font-sans">
              Conteneurisation et reproductibilité
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
            <ArchitectureNodeCard
              node={techNodes['docker']}
              isActive={activeTechId === 'docker'}
              isHighlighted={isHighlighted('docker')}
              onHover={() => setActiveTechId('docker')}
              onClick={() => setActiveTechId('docker')}
            />
            <ArchitectureNodeCard
              node={techNodes['git']}
              isActive={activeTechId === 'git'}
              isHighlighted={isHighlighted('git')}
              onHover={() => setActiveTechId('git')}
              onClick={() => setActiveTechId('git')}
            />
          </div>
        </div>

        {/* ================= LIVE INSPECTOR DETAIL PANEL ================= */}
        <AnimatePresence mode="wait">
          {activeNode && (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r dark:from-dark-900 dark:via-dark-850 dark:to-dark-900 from-slate-50 via-white to-slate-50 border-2 dark:border-cyan-500/40 border-cyan-500/30 shadow-xl relative"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${activeNode.color} text-white shadow-md`}>
                      <activeNode.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-bold dark:text-white text-slate-900">
                          {activeNode.name}
                        </h4>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-md dark:bg-slate-800 bg-slate-200 dark:text-cyan-400 text-cyan-700 font-semibold border dark:border-slate-700 border-slate-300">
                          {activeNode.badge}
                        </span>
                      </div>
                      <p className="text-xs font-mono dark:text-slate-400 text-slate-500">
                        {activeNode.layer}
                      </p>
                    </div>
                  </div>

                  {/* Core required description */}
                  <div className="p-3.5 rounded-xl dark:bg-dark-950/80 bg-cyan-50/70 border dark:border-cyan-900/50 border-cyan-200">
                    <p className="text-sm font-semibold dark:text-cyan-300 text-cyan-900 leading-snug">
                      "{activeNode.tooltip}"
                    </p>
                  </div>

                  {/* HOW and WHY detail */}
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold dark:text-slate-300 text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-cyan-500" />
                      Comment & Pourquoi dans le projet :
                    </span>
                    <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                      {activeNode.howWhy}
                    </p>
                  </div>
                </div>

                {/* Connections sidebar */}
                <div className="md:w-64 pt-4 md:pt-0 md:border-l dark:border-slate-800 border-slate-200 md:pl-6 space-y-2">
                  <span className="text-[11px] font-mono dark:text-slate-400 text-slate-500 uppercase tracking-wider block">
                    Interconnexions directes :
                  </span>
                  <div className="space-y-1.5">
                    {activeNode.connections.map((conn, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-mono dark:text-slate-200 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>{conn}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ============================================================== */}
      {/* MOBILE RESPONSIVE ACCORDION VIEW (< 768px screens)             */}
      {/* ============================================================== */}
      <div className="block md:hidden mt-6 space-y-4">
        
        {/* Layer 1 Mobile Accordion */}
        <MobileAccordionLayer
          layerIndex={1}
          title="1. Frontend & Dashboard"
          subtitle="React & TypeScript"
          icon={Layout}
          isExpanded={expandedMobileLayer === 1}
          onToggle={() => setExpandedMobileLayer(expandedMobileLayer === 1 ? null : 1)}
        >
          <div className="space-y-3 pt-2">
            <MobileNodeDetail node={techNodes['react-ts']} />
          </div>
        </MobileAccordionLayer>

        {/* Layer 2 Mobile Accordion */}
        <MobileAccordionLayer
          layerIndex={2}
          title="2. Backend Core & CQRS"
          subtitle=".NET Core 8 & MediatR"
          icon={Server}
          isExpanded={expandedMobileLayer === 2}
          onToggle={() => setExpandedMobileLayer(expandedMobileLayer === 2 ? null : 2)}
        >
          <div className="space-y-4 pt-2">
            <MobileNodeDetail node={techNodes['dotnet-8']} />
            <div className="flex items-center justify-center gap-1 text-[11px] font-mono text-cyan-500">
              <ArrowDown className="w-3.5 h-3.5" />
              <span>Pipeline CQRS</span>
            </div>
            <MobileNodeDetail node={techNodes['mediatr']} />
          </div>
        </MobileAccordionLayer>

        {/* Layer 3 Mobile Accordion */}
        <MobileAccordionLayer
          layerIndex={3}
          title="3. Données & Intelligence Artificielle"
          subtitle="SQL Server, Gemini 2.5 Flash, ChromaDB, Qwen 3"
          icon={Cpu}
          isExpanded={expandedMobileLayer === 3}
          onToggle={() => setExpandedMobileLayer(expandedMobileLayer === 3 ? null : 3)}
        >
          <div className="space-y-4 pt-2">
            <div className="text-xs font-mono font-bold dark:text-rose-400 text-rose-600 uppercase">
              • Persistance & Repli
            </div>
            <MobileNodeDetail node={techNodes['sql-server']} />

            <div className="text-xs font-mono font-bold dark:text-emerald-400 text-emerald-600 uppercase pt-2">
              • Extraction OCR (Cloud)
            </div>
            <MobileNodeDetail node={techNodes['gemini-flash']} />

            <div className="text-xs font-mono font-bold dark:text-violet-400 text-violet-600 uppercase pt-2">
              • Architecture RAG (Privée & Locale)
            </div>
            <MobileNodeDetail node={techNodes['chromadb']} />
            <div className="flex items-center justify-center gap-1 text-[10px] font-mono text-violet-400">
              <ArrowDown className="w-3 h-3" />
              <span>Injection de vecteurs sémantiques</span>
            </div>
            <MobileNodeDetail node={techNodes['ollama-qwen']} />
          </div>
        </MobileAccordionLayer>

        {/* Layer 4 Mobile Accordion */}
        <MobileAccordionLayer
          layerIndex={4}
          title="4. DevOps & Infrastructure"
          subtitle="Docker & Git"
          icon={Box}
          isExpanded={expandedMobileLayer === 4}
          onToggle={() => setExpandedMobileLayer(expandedMobileLayer === 4 ? null : 4)}
        >
          <div className="space-y-4 pt-2">
            <MobileNodeDetail node={techNodes['docker']} />
            <MobileNodeDetail node={techNodes['git']} />
          </div>
        </MobileAccordionLayer>

      </div>

    </div>
  );
}

// ==============================================================
// SUB-COMPONENTS: Node Card & Tooltip Animation
// ==============================================================

function ArchitectureNodeCard({ node, isActive, isHighlighted, onHover, onClick }) {
  const IconComponent = node.icon;

  return (
    <div className="relative group">
      <motion.button
        type="button"
        onMouseEnter={onHover}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full p-4 rounded-2xl text-left transition-all duration-300 relative border ${
          isActive
            ? `dark:bg-dark-900 bg-white shadow-xl ${node.borderColor} ring-2 ring-cyan-500/50`
            : isHighlighted
            ? 'dark:bg-dark-900/80 bg-white/90 dark:border-slate-800 border-slate-200/90 hover:border-cyan-500/50'
            : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100 dark:bg-dark-950 bg-slate-100 border-transparent'
        }`}
        style={{
          boxShadow: isActive ? `0 0 25px -5px ${node.glowColor}` : undefined
        }}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl bg-gradient-to-tr ${node.color} text-white shadow-sm`}>
              <IconComponent className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-bold text-sm dark:text-white text-slate-900 leading-none">
                {node.name}
              </h5>
              <span className="text-[10px] font-mono dark:text-slate-400 text-slate-500 mt-1 block">
                {node.badge}
              </span>
            </div>
          </div>

          {isActive && (
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          )}
        </div>
      </motion.button>

      {/* Animated Floating Tooltip on Hover */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 rounded-xl dark:bg-dark-950 bg-slate-900 text-white shadow-2xl border dark:border-cyan-500/40 border-slate-700 pointer-events-none z-30 hidden lg:block"
          >
            <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1 flex items-center gap-1">
              <Zap className="w-3 h-3" /> {node.name}
            </div>
            <p className="text-xs text-slate-200 leading-snug">
              {node.tooltip}
            </p>
            {/* Tooltip triangle pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-dark-950" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordionLayer({ layerIndex, title, subtitle, icon: Icon, isExpanded, onToggle, children }) {
  return (
    <div className="rounded-2xl dark:bg-dark-900/90 bg-white border dark:border-slate-800 border-slate-200 overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white">
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h5 className="font-bold text-sm dark:text-white text-slate-900">
              {title}
            </h5>
            <p className="text-[11px] font-mono text-cyan-500">
              {subtitle}
            </p>
          </div>
        </div>

        {isExpanded ? (
          <ChevronUp className="w-4 h-4 dark:text-slate-400 text-slate-500" />
        ) : (
          <ChevronDown className="w-4 h-4 dark:text-slate-400 text-slate-500" />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 border-t dark:border-slate-800 border-slate-100">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileNodeDetail({ node }) {
  const Icon = node.icon;
  return (
    <div className="p-3.5 rounded-xl dark:bg-dark-950 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-2">
      <div className="flex items-center gap-2">
        <div className={`p-1.5 rounded-lg bg-gradient-to-tr ${node.color} text-white`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <div>
          <h6 className="font-bold text-xs dark:text-white text-slate-900">
            {node.name}
          </h6>
          <span className="text-[10px] font-mono text-cyan-500">
            {node.badge}
          </span>
        </div>
      </div>

      <p className="text-xs font-semibold dark:text-cyan-300 text-cyan-800 leading-snug">
        "{node.tooltip}"
      </p>

      <p className="text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
        {node.howWhy}
      </p>
    </div>
  );
}
