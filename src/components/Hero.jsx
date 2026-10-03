import React from 'react';
import { ArrowRight, Download, Sparkles, Terminal, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Glows and Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-violet-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Cyber Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-slate-900/90 bg-white/90 border dark:border-slate-700/80 border-slate-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium dark:text-slate-300 text-slate-700">
                Disponible pour un poste d’ingénieur logiciel
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="block dark:text-slate-100 text-slate-900">Rida –</span>
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                  Ingénieur Logiciel
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl dark:text-slate-300 text-slate-800 font-bold mt-1">
                  Full Stack & Intelligence Artificielle
                </span>
              </h1>
            </div>

            {/* Punchy Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl dark:text-slate-300 text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Conception de solutions logicielles robustes, d'architectures modernes et intégration d'Intelligence Artificielle.
            </p>

            {/* Micro Bio Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm dark:text-slate-400 text-slate-600 font-mono">
              <span className="flex items-center gap-1.5 dark:bg-slate-900/60 bg-white px-3 py-1 rounded-lg border dark:border-slate-800 border-slate-200 shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-cyan-500" />
                Clean Architecture & CQRS
              </span>
              <span className="flex items-center gap-1.5 dark:bg-slate-900/60 bg-white px-3 py-1 rounded-lg border dark:border-slate-800 border-slate-200 shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-violet-500" />
                RAG & LLM Agents
              </span>
              <span className="flex items-center gap-1.5 dark:bg-slate-900/60 bg-white px-3 py-1 rounded-lg border dark:border-slate-800 border-slate-200 shadow-sm">
                <Terminal className="w-3.5 h-3.5 text-blue-500" />
                Spring Boot & .NET Core
              </span>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-cyan-600/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5 group"
              >
                <span>Explorer mes projets</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.cvPath}
                download="CV_Rida_MANFALOUTI.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm dark:text-slate-200 text-slate-800 dark:bg-slate-900/80 bg-white hover:bg-slate-50 dark:hover:bg-slate-800/90 border dark:border-slate-700/80 border-slate-300 hover:border-slate-400 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Télécharger le CV</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="p-3 dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:bg-slate-900/80 bg-white hover:bg-slate-50 border dark:border-slate-800 border-slate-200 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-3 dark:text-slate-400 text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 dark:bg-slate-900/80 bg-white hover:bg-slate-50 border dark:border-slate-800 border-slate-200 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Visual Tech Terminal / Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Glow Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 opacity-25 dark:opacity-35 blur-lg transition duration-500 group-hover:opacity-60" />

              {/* IDE Code Card */}
              <div className="relative rounded-2xl dark:bg-dark-900/90 bg-white/95 border dark:border-slate-800 border-slate-200/90 backdrop-blur-xl shadow-2xl p-5 sm:p-6 overflow-hidden">
                {/* Header Window controls */}
                <div className="flex items-center justify-between pb-4 border-b dark:border-slate-800 border-slate-200">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="text-[11px] font-mono dark:text-slate-400 text-slate-500 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                    rida-manfalouti.cs
                  </div>
                </div>

                {/* Code Snapshot */}
                <div className="mt-4 font-mono text-xs sm:text-[13px] leading-relaxed space-y-1.5 dark:text-slate-300 text-slate-800">
                  <p className="dark:text-slate-500 text-slate-400">{"// Architecture & IA Engine"}</p>
                  <p>
                    <span className="dark:text-purple-400 text-purple-600">public class</span> <span className="dark:text-amber-300 text-amber-600 font-semibold">RidaEngineer</span> : <span className="dark:text-cyan-300 text-cyan-700">IFullStackAI</span>
                  </p>
                  <p>{"{"}</p>
                  <p className="pl-4">
                    <span className="dark:text-purple-400 text-purple-600">public string</span> Education <span className="text-slate-400">=&gt;</span> <span className="dark:text-emerald-300 text-emerald-600">"EMSI Rabat (2026)"</span>;
                  </p>
                  <p className="pl-4">
                    <span className="dark:text-purple-400 text-purple-600">public string[]</span> CoreStack <span className="text-slate-400">=&gt;</span> [
                  </p>
                  <p className="pl-8 dark:text-cyan-300 text-cyan-700 font-medium">
                    "Spring Boot", ".NET Core 8", "React", "TypeScript"
                  </p>
                  <p className="pl-4">];</p>
                  <p className="pl-4">
                    <span className="dark:text-purple-400 text-purple-600">public string[]</span> AIExpertise <span className="text-slate-400">=&gt;</span> [
                  </p>
                  <p className="pl-8 dark:text-violet-300 text-violet-600 font-medium">
                    "RAG Pipeline", "Ollama Qwen 3", "Gemini 2.5", "ChromaDB"
                  </p>
                  <p className="pl-4">];</p>
                  <p className="pl-4">
                    <span className="dark:text-purple-400 text-purple-600">public bool</span> ReadyToBuild <span className="text-slate-400">=&gt;</span> <span className="dark:text-amber-400 text-amber-600 font-semibold">true</span>;
                  </p>
                  <p>{"}"}</p>
                </div>

                {/* Floating Metric Badge */}
                <div className="mt-5 pt-4 border-t dark:border-slate-800/80 border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 dark:text-slate-300 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                    <span>Clean Code & CQRS</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold dark:bg-cyan-950 dark:text-cyan-300 bg-cyan-100 text-cyan-800 border dark:border-cyan-800 border-cyan-300">
                    .NET 8 & React
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
