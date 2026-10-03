import React from 'react';
import { ArrowRight, Download, Terminal, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Glows and Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#00783C]/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#00783C]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#00783C]/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Cyber Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#00783C 1px, transparent 1px), linear-gradient(90deg, #00783C 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Status Pill Badge (Small Title) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00783C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00783C]"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#00783C]">
                Disponible pour un poste d’ingénieur logiciel
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="block dark:text-white text-black">Rida –</span>
                <span className="block dark:text-white text-black">
                  Ingénieur Logiciel
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#00783C] font-bold mt-1">
                  Full Stack & Intelligence Artificielle
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl dark:text-neutral-300 text-neutral-700 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Conception de solutions logicielles robustes, d'architectures modernes et intégration d'Intelligence Artificielle.
            </p>

            {/* Micro Bio Highlights (Small Titles & Tags in #00783C) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm font-mono">
              <span className="flex items-center gap-1.5 dark:bg-black bg-white px-3 py-1.5 rounded-lg border dark:border-neutral-800 border-neutral-200 text-[#00783C] font-semibold shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-[#00783C]" />
                Clean Architecture & CQRS
              </span>
              <span className="flex items-center gap-1.5 dark:bg-black bg-white px-3 py-1.5 rounded-lg border dark:border-neutral-800 border-neutral-200 text-[#00783C] font-semibold shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-[#00783C]" />
                RAG & LLM Agents
              </span>
              <span className="flex items-center gap-1.5 dark:bg-black bg-white px-3 py-1.5 rounded-lg border dark:border-neutral-800 border-neutral-200 text-[#00783C] font-semibold shadow-sm">
                <Terminal className="w-3.5 h-3.5 text-[#00783C]" />
                Spring Boot & .NET Core
              </span>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#00783C] hover:bg-[#006533] shadow-lg shadow-[#00783C]/25 transition-all duration-300 hover:shadow-[#00783C]/40 hover:-translate-y-0.5 group"
              >
                <span>Explorer mes projets</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.cvPath}
                download="CV_Rida_MANFALOUTI.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm dark:text-white text-black dark:bg-black bg-white hover:bg-neutral-100 dark:hover:bg-neutral-900 border dark:border-neutral-700 border-neutral-300 hover:border-[#00783C] hover:text-[#00783C] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#00783C]" />
                <span>Télécharger le CV</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="p-3 dark:text-white text-black hover:text-[#00783C] dark:hover:text-[#00783C] dark:bg-black bg-white hover:bg-neutral-100 dark:hover:bg-neutral-900 border dark:border-neutral-800 border-neutral-200 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-3 dark:text-white text-black hover:text-[#00783C] dark:hover:text-[#00783C] dark:bg-black bg-white hover:bg-neutral-100 dark:hover:bg-neutral-900 border dark:border-neutral-800 border-neutral-200 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm"
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
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00783C] to-emerald-500 opacity-20 blur-lg transition duration-500" />

              {/* IDE Code Card */}
              <div className="relative rounded-2xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 shadow-2xl p-5 sm:p-6 overflow-hidden">
                {/* Header Window controls */}
                <div className="flex items-center justify-between pb-4 border-b dark:border-neutral-800 border-neutral-200">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#00783C] inline-block" />
                  </div>
                  <div className="text-[11px] font-mono font-semibold text-[#00783C] flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00783C]" />
                    rida-manfalouti.cs
                  </div>
                </div>

                {/* Code Snapshot */}
                <div className="mt-4 font-mono text-xs sm:text-[13px] leading-relaxed space-y-1.5 dark:text-white text-black">
                  <p className="text-[#00783C] font-semibold">{"// Architecture & IA Engine"}</p>
                  <p>
                    <span className="text-[#00783C] font-semibold">public class</span> <span className="font-bold dark:text-white text-black">RidaEngineer</span> : <span className="text-[#00783C]">IFullStackAI</span>
                  </p>
                  <p>{"{"}</p>
                  <p className="pl-4">
                    <span className="text-[#00783C] font-semibold">public string</span> Education <span className="text-neutral-400">=&gt;</span> <span className="dark:text-neutral-200 text-neutral-800 font-medium">"EMSI Rabat (2026)"</span>;
                  </p>
                  <p className="pl-4">
                    <span className="text-[#00783C] font-semibold">public string[]</span> CoreStack <span className="text-neutral-400">=&gt;</span> [
                  </p>
                  <p className="pl-8 text-[#00783C] font-medium">
                    "Spring Boot", ".NET Core 8", "React", "TypeScript"
                  </p>
                  <p className="pl-4">];</p>
                  <p className="pl-4">
                    <span className="text-[#00783C] font-semibold">public string[]</span> AIExpertise <span className="text-neutral-400">=&gt;</span> [
                  </p>
                  <p className="pl-8 text-[#00783C] font-medium">
                    "RAG Pipeline", "Ollama Qwen 3", "Gemini 2.5", "ChromaDB"
                  </p>
                  <p className="pl-4">];</p>
                  <p className="pl-4">
                    <span className="text-[#00783C] font-semibold">public bool</span> ReadyToBuild <span className="text-neutral-400">=&gt;</span> <span className="text-[#00783C] font-bold">true</span>;
                  </p>
                  <p>{"}"}</p>
                </div>

                {/* Floating Metric Badge */}
                <div className="mt-5 pt-4 border-t dark:border-neutral-800 border-neutral-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#00783C] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#00783C]" />
                    <span>Clean Code & CQRS</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/30">
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
