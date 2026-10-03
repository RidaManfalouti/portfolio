import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Workflow,
  ArrowDown,
  Info,
  CheckCircle2,
  Zap,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { projectArchitectures } from '../data/projectArchitectures';

export default function ProjectArchitectureModal({ initialProjectId, isOpen, onClose }) {
  const [selectedProjectId, setSelectedProjectId] = useState(initialProjectId || 'doc-ai-validation');
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [expandedMobileLayer, setExpandedMobileLayer] = useState(0);

  // Sync initial project when modal opens
  useEffect(() => {
    if (initialProjectId) {
      setSelectedProjectId(initialProjectId);
    }
  }, [initialProjectId]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const currentArch = projectArchitectures[selectedProjectId] || projectArchitectures['doc-ai-validation'];

  // Default active node to the first node of the first layer
  const defaultNode = currentArch.layers[0]?.nodes[0];
  const activeNode = (activeNodeId ? findNodeById(currentArch, activeNodeId) : defaultNode) || defaultNode;

  function findNodeById(arch, id) {
    for (const layer of arch.layers) {
      const match = layer.nodes.find(n => n.id === id);
      if (match) return match;
    }
    return null;
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl rounded-3xl dark:bg-dark-900 bg-white border dark:border-cyan-500/40 border-cyan-500/30 shadow-2xl p-5 sm:p-8 max-h-[92vh] overflow-y-auto z-10"
        >
          {/* Top Bar with Project Switcher & Close */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b dark:border-slate-800 border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1.5 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-sm">
                  <Workflow className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-500">
                  Explorateur d'Architecture Technique
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold dark:text-white text-slate-900">
                {currentArch.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {currentArch.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full dark:text-slate-400 text-slate-500 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Project Switcher Pills */}
          <div className="py-4 border-b dark:border-slate-800/80 border-slate-200">
            <span className="text-[11px] font-mono dark:text-slate-400 text-slate-500 uppercase tracking-wider block mb-2">
              Changer de projet :
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {Object.values(projectArchitectures).map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    setSelectedProjectId(proj.id);
                    setActiveNodeId(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    selectedProjectId === proj.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/25'
                      : 'dark:bg-dark-950 bg-slate-100 dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white border dark:border-slate-800 border-slate-200'
                  }`}
                >
                  {proj.title}
                </button>
              ))}
            </div>
          </div>

          {/* Pipeline flow summary banner */}
          <div className="mt-4 p-3 rounded-xl dark:bg-cyan-950/40 bg-cyan-50/80 border dark:border-cyan-900/60 border-cyan-200 flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-500 shrink-0" />
            <p className="text-xs font-mono dark:text-cyan-300 text-cyan-900 truncate">
              <span className="font-bold">Flux Global :</span> {currentArch.flowSummary}
            </p>
          </div>

          {/* ============================================================== */}
          {/* DESKTOP FLOWCHART VIEW                                         */}
          {/* ============================================================== */}
          <div className="hidden md:block mt-6 space-y-6">
            {currentArch.layers.map((layer, lIdx) => (
              <div key={lIdx} className="space-y-4">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider dark:text-cyan-400 text-cyan-600 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
                  <span>{layer.name}</span>
                </div>

                {/* Nodes row */}
                <div className={`grid gap-4 ${
                  layer.nodes.length === 1
                    ? 'grid-cols-1 max-w-md mx-auto'
                    : layer.nodes.length === 2
                    ? 'grid-cols-2 max-w-2xl mx-auto'
                    : 'grid-cols-3'
                }`}>
                  {layer.nodes.map((node) => (
                    <ArchitectureNodeCard
                      key={node.id}
                      node={node}
                      isActive={activeNode?.id === node.id}
                      onHover={() => setActiveNodeId(node.id)}
                      onClick={() => setActiveNodeId(node.id)}
                    />
                  ))}
                </div>

                {/* Down connector if not the last layer */}
                {layer.connectorText && (
                  <div className="flex flex-col items-center my-2">
                    <div className="px-3 py-0.5 rounded-full text-[10px] font-mono dark:bg-slate-900 bg-slate-100 dark:text-cyan-400 text-cyan-700 border dark:border-cyan-900/50 border-cyan-300 shadow-sm">
                      {layer.connectorText}
                    </div>
                    <div className="w-0.5 h-5 bg-gradient-to-b from-cyan-500 to-blue-500" />
                    <ArrowDown className="w-3.5 h-3.5 text-blue-500 -mt-1" />
                  </div>
                )}
              </div>
            ))}

            {/* Live Inspector Panel for Selected/Hovered Node */}
            {activeNode && (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-5 rounded-2xl dark:bg-dark-950 bg-slate-50 border-2 dark:border-cyan-500/40 border-cyan-500/30 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-tr ${activeNode.color} text-white shadow-sm`}>
                    <activeNode.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold dark:text-white text-slate-900">
                        {activeNode.name}
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md dark:bg-slate-800 bg-slate-200 dark:text-cyan-400 text-cyan-700 font-semibold">
                        {activeNode.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono dark:text-slate-400 text-slate-500">
                      Rôle : {activeNode.role}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl dark:bg-dark-900 bg-white border dark:border-slate-800 border-slate-200 mb-3">
                  <p className="text-xs sm:text-sm font-semibold dark:text-cyan-300 text-cyan-900 leading-snug">
                    "{activeNode.tooltip}"
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold dark:text-slate-300 text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-cyan-500" /> Comment & Pourquoi dans ce projet :
                  </span>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                    {activeNode.howWhy}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* ============================================================== */}
          {/* MOBILE ACCORDION VIEW (< 768px)                                */}
          {/* ============================================================== */}
          <div className="block md:hidden mt-6 space-y-3">
            {currentArch.layers.map((layer, lIdx) => (
              <div
                key={lIdx}
                className="rounded-2xl dark:bg-dark-950 bg-slate-50 border dark:border-slate-800 border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedMobileLayer(expandedMobileLayer === lIdx ? null : lIdx)}
                  className="w-full p-3.5 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-xs dark:text-white text-slate-900">
                    {layer.name}
                  </span>
                  {expandedMobileLayer === lIdx ? (
                    <ChevronUp className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </button>

                {expandedMobileLayer === lIdx && (
                  <div className="p-3 space-y-3 border-t dark:border-slate-800 border-slate-200">
                    {layer.nodes.map((node) => (
                      <div
                        key={node.id}
                        className="p-3 rounded-xl dark:bg-dark-900 bg-white border dark:border-slate-800 border-slate-200 space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg bg-gradient-to-tr ${node.color} text-white`}>
                            <node.icon className="w-3.5 h-3.5" />
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
                        <p className="text-xs font-semibold dark:text-cyan-300 text-cyan-800">
                          "{node.tooltip}"
                        </p>
                        <p className="text-[11px] dark:text-slate-400 text-slate-600">
                          {node.howWhy}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-4 border-t dark:border-slate-800 border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">
              6 architectures complètes disponibles
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-md"
            >
              Fermer l'explorateur
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ArchitectureNodeCard({ node, isActive, onHover, onClick }) {
  const IconComponent = node.icon;

  return (
    <div className="relative group">
      <motion.button
        type="button"
        onMouseEnter={onHover}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full p-3.5 rounded-2xl text-left transition-all duration-300 relative border ${
          isActive
            ? `dark:bg-dark-950 bg-white shadow-xl ${node.borderColor} ring-2 ring-cyan-500/50`
            : 'dark:bg-dark-950/70 bg-white/90 dark:border-slate-800 border-slate-200 hover:border-cyan-500/40'
        }`}
        style={{
          boxShadow: isActive ? `0 0 20px -5px ${node.glowColor}` : undefined
        }}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl bg-gradient-to-tr ${node.color} text-white shadow-xs`}>
              <IconComponent className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm dark:text-white text-slate-900 leading-none">
                {node.name}
              </h5>
              <span className="text-[10px] font-mono dark:text-slate-400 text-slate-500 mt-1 block">
                {node.role}
              </span>
            </div>
          </div>
          {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
        </div>
      </motion.button>

      {/* Floating Tooltip */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl dark:bg-dark-950 bg-slate-900 text-white shadow-2xl border dark:border-cyan-500/40 border-slate-700 pointer-events-none z-30 hidden lg:block"
          >
            <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1 flex items-center gap-1">
              <Zap className="w-3 h-3" /> {node.name}
            </div>
            <p className="text-xs text-slate-200 leading-snug">
              {node.tooltip}
            </p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-dark-950" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
