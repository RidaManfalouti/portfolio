import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 w-fit shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
            </span>
            <span className="text-xs font-medium text-emerald-800 dark:text-emerald-400">Available for Software Engineering positions</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Rida Manfalouti
          </h1>
          <h2 className="mt-4 text-2xl font-bold text-emerald-700 dark:text-emerald-500 sm:text-3xl">
            Full Stack & Artificial Intelligence Engineer
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Engineering graduate from EMSI Rabat, specializing in modular and high-performance software architectures, enriched by real-world AI integrations.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:bg-neutral-900 dark:border-neutral-800">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-800 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">State Engineering Degree</p>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">EMSI Rabat — Class of 2026</h3>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Freshly graduated in Computer Science and Networks, I combine rigorous software engineering fundamentals with hands-on enterprise internship experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
