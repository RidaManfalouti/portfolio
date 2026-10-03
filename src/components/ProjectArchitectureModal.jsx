import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Workflow,
  ArrowDown,
  Info,
  Zap,
  ChevronDown,
  ChevronUp,
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl rounded-3xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 shadow-2xl p-5 sm:p-8 max-h-[92vh] overflow-y-auto z-10"
        >
          {/* Top Bar with Project Switcher & Close */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b dark:border-neutral-800 border-neutral-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1.5 rounded-lg bg-[#00783C] text-white shadow-sm">
                  <Workflow className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00783C]">
                  Explorateur d'Architecture Technique
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold dark:text-white text-black">
                {currentArch.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#00783C] font-semibold mt-0.5">
                {currentArch.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full dark:text-neutral-400 text-neutral-600 hover:text-[#00783C] transition-colors shrink-0"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Project Switcher Pills */}
          <div className="py-4 border-b dark:border-neutral-800 border-neutral-200">
            <span className="text-[11px] font-mono text-[#00783C] font-semibold uppercase tracking-wider block mb-2">
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
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedProjectId === proj.id
                      ? 'bg-[#00783C] text-white shadow-md shadow-[#00783C]/25'
                      : 'dark:bg-black bg-neutral-100 dark:text-neutral-300 text-neutral-700 hover:text-black dark:hover:text-white border dark:border-neutral-800 border-neutral-200 hover:border-[#00783C]'
                  }`}
                >
                  {proj.title}
                </button>
              ))}
            </div>
          </div>

          {/* Pipeline flow summary banner */}
          <div className="mt-4 p-3 rounded-xl bg-[#00783C]/10 border border-[#00783C]/30 flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#00783C] shrink-0" />
            <p className="text-xs font-mono text-[#00783C] font-semibold truncate">
              <span className="font-bold">Flux Global :</span> {currentArch.flowSummary}
            </p>
          </div>

          {/* DESKTOP FLOWCHART VIEW */}
          <div className="hidden md:block mt-6 space-y-6">
            {currentArch.layers.map((layer, lIdx) => (
              <div key={lIdx} className="space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00783C] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00783C] inline-block" />
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
                    <div className="px-3 py-0.5 rounded-full text-[10px] font-mono bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/30 font-semibold shadow-sm">
                      {layer.connectorText}
                    </div>
                    <div className="w-0.5 h-5 bg-[#00783C]" />
                    <ArrowDown className="w-3.5 h-3.5 text-[#00783C] -mt-1" />
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
                className="mt-6 p-5 rounded-2xl dark:bg-black bg-white border-2 border-[#00783C] shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-[#00783C] text-white shadow-sm">
                    <activeNode.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold dark:text-white text-black">
                        {activeNode.name}
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#00783C]/10 text-[#00783C] font-semibold border border-[#00783C]/20">
                        {activeNode.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#00783C] font-semibold">
                      Rôle : {activeNode.role}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl dark:bg-neutral-900 bg-neutral-50 border dark:border-neutral-800 border-neutral-200 mb-3">
                  <p className="text-xs sm:text-sm font-semibold text-[#00783C] leading-snug">
                    "{activeNode.tooltip}"
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#00783C] uppercase tracking-wide flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#00783C]" /> Comment & Pourquoi dans ce projet :
                  </span>
                  <p className="text-xs sm:text-sm dark:text-neutral-300 text-neutral-700 leading-relaxed">
                    {activeNode.howWhy}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* MOBILE ACCORDION VIEW (< 768px) */}
          <div className="block md:hidden mt-6 space-y-3">
            {currentArch.layers.map((layer, lIdx) => (
              <div
                key={lIdx}
                className="rounded-2xl dark:bg-black bg-neutral-50 border dark:border-neutral-800 border-neutral-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedMobileLayer(expandedMobileLayer === lIdx ? null : lIdx)}
                  className="w-full p-3.5 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-xs text-[#00783C]">
                    {layer.name}
                  </span>
                  {expandedMobileLayer === lIdx ? (
                    <ChevronUp className="w-4 h-4 text-[#00783C]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#00783C]" />
                  )}
                </button>

                {expandedMobileLayer === lIdx && (
                  <div className="p-3 space-y-3 border-t dark:border-neutral-800 border-neutral-200">
                    {layer.nodes.map((node) => (
                      <div
                        key={node.id}
                        className="p-3 rounded-xl dark:bg-neutral-900 bg-white border dark:border-neutral-800 border-neutral-200 space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-[#00783C] text-white">
                            <node.icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <h6 className="font-bold text-xs dark:text-white text-black">
                              {node.name}
                            </h6>
                            <span className="text-[10px] font-mono text-[#00783C] font-semibold">
                              {node.badge}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs font-semibold text-[#00783C]">
                          "{node.tooltip}"
                        </p>
                        <p className="text-[11px] dark:text-neutral-300 text-neutral-700">
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
          <div className="mt-8 pt-4 border-t dark:border-neutral-800 border-neutral-200 flex items-center justify-between">
            <span className="text-xs text-[#00783C] font-mono font-semibold">
              6 architectures complètes disponibles
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-[#00783C] hover:bg-[#006533] transition-all shadow-md"
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
            ? `dark:bg-black bg-white shadow-xl border-[#00783C] ring-2 ring-[#00783C]/50`
            : 'dark:bg-black bg-white dark:border-neutral-800 border-neutral-200 hover:border-[#00783C]'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#00783C] text-white shadow-xs">
              <IconComponent className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm dark:text-white text-black leading-none">
                {node.name}
              </h5>
              <span className="text-[10px] font-mono text-[#00783C] font-semibold mt-1 block">
                {node.role}
              </span>
            </div>
          </div>
          {isActive && <span className="w-2 h-2 rounded-full bg-[#00783C] animate-ping" />}
        </div>
      </motion.button>

      {/* Floating Tooltip */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl dark:bg-black bg-white dark:text-white text-black shadow-2xl border border-[#00783C] pointer-events-none z-30 hidden lg:block"
          >
            <div className="text-[11px] font-mono text-[#00783C] font-semibold mb-1 flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#00783C]" /> {node.name}
            </div>
            <p className="text-xs dark:text-neutral-300 text-neutral-700 leading-snug">
              {node.tooltip}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
