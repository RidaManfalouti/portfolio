import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Check, Copy, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ submitted: false, loading: false });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true });

    setTimeout(() => {
      setStatus({ submitted: true, loading: false });
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formState.subject || 'Prise de contact via Portfolio'
      )}&body=${encodeURIComponent(
        `Bonjour Rida,\n\n${formState.message}\n\nDe : ${formState.name} (${formState.email})`
      )}`;
      window.open(mailtoLink, '_blank');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden dark:bg-dark-950/70 bg-slate-50/70">
      {/* Background Lighting */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-violet-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto space-y-4 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase dark:bg-blue-950/80 bg-blue-50 dark:text-cyan-400 text-cyan-700 border dark:border-blue-800/60 border-blue-200">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-500" />
            Entrons en contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Discutons de vos projets
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            Vous avez un projet innovant, une opportunité de poste ou souhaitez échanger autour d'architectures Full Stack et d'IA ? Envoyez-moi un message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Details & Links (5 cols) */}
          <div className={`lg:col-span-5 space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '150ms' }}>
            
            {/* Info Card */}
            <div className="rounded-2xl p-6 glass-card border dark:border-slate-800/90 border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold dark:text-white text-slate-900">Coordonnées Directes</h3>
              
              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-4 rounded-xl dark:bg-dark-900/80 bg-white border dark:border-slate-800/80 border-slate-200 flex items-center justify-between group shadow-xs">
                  <div className="flex items-center space-x-3 truncate mr-2">
                    <div className="p-2.5 rounded-xl dark:bg-cyan-950 bg-cyan-50 dark:text-cyan-400 text-cyan-600 border dark:border-cyan-800/50 border-cyan-200 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-mono dark:text-slate-400 text-slate-500 uppercase">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium dark:text-slate-200 text-slate-800 hover:text-cyan-500 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 dark:bg-slate-800/60 bg-slate-100 dark:hover:bg-slate-700/80 hover:bg-slate-200 transition-colors shrink-0"
                    title="Copier l'adresse email"
                    aria-label="Copier l'email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl dark:bg-dark-900/80 bg-white border dark:border-slate-800/80 border-slate-200 flex items-center space-x-3 shadow-xs">
                  <div className="p-2.5 rounded-xl dark:bg-blue-950 bg-blue-50 dark:text-blue-400 text-blue-600 border dark:border-blue-800/50 border-blue-200 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono dark:text-slate-400 text-slate-500 uppercase">Localisation</p>
                    <p className="text-xs sm:text-sm font-medium dark:text-slate-200 text-slate-800">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl dark:bg-dark-900/80 bg-white border dark:border-slate-800/80 border-slate-200 flex items-center space-x-3 shadow-xs">
                  <div className="p-2.5 rounded-xl dark:bg-violet-950 bg-violet-50 dark:text-violet-400 text-violet-600 border dark:border-violet-800/50 border-violet-200 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono dark:text-slate-400 text-slate-500 uppercase">Téléphone</p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-medium dark:text-slate-200 text-slate-800 hover:text-violet-500 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social networks block */}
              <div className="pt-2 border-t dark:border-slate-800/60 border-slate-200">
                <p className="text-xs dark:text-slate-400 text-slate-500 font-mono mb-3">Réseaux professionnels :</p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl dark:bg-slate-900 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 border dark:border-slate-800 border-slate-200 text-xs font-semibold dark:text-slate-300 text-slate-700 hover:text-cyan-500 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl dark:bg-slate-900 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 border dark:border-slate-800 border-slate-200 text-xs font-semibold dark:text-slate-300 text-slate-700 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Minimalist Contact Form (7 cols) */}
          <div className={`lg:col-span-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            <div className="rounded-2xl p-6 sm:p-8 glass-card border dark:border-slate-800/90 border-slate-200 shadow-xl">
              
              {status.submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full dark:bg-emerald-950 bg-emerald-50 text-emerald-500 border dark:border-emerald-800/60 border-emerald-200 flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold dark:text-white text-slate-900">Message préparé avec succès !</h4>
                  <p className="text-sm dark:text-slate-300 text-slate-600 max-w-md mx-auto">
                    Votre client de messagerie s'est ouvert pour transmettre le message directement à Rida.
                  </p>
                  <button
                    onClick={() => setStatus({ submitted: false, loading: false })}
                    className="mt-4 px-5 py-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 dark:bg-cyan-950/60 bg-cyan-50 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 rounded-xl border dark:border-cyan-800/50 border-cyan-200 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono font-medium dark:text-slate-300 text-slate-700">
                        Votre nom <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="ex: Jean Dupont"
                        className="w-full px-3.5 py-2.5 rounded-xl dark:bg-dark-900/90 bg-white border dark:border-slate-800 border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm dark:text-slate-100 text-slate-900 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono font-medium dark:text-slate-300 text-slate-700">
                        Votre email <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jean.dupont@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl dark:bg-dark-900/90 bg-white border dark:border-slate-800 border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm dark:text-slate-100 text-slate-900 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono font-medium dark:text-slate-300 text-slate-700">
                      Sujet
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunité de poste / Collaboration projet"
                      className="w-full px-3.5 py-2.5 rounded-xl dark:bg-dark-900/90 bg-white border dark:border-slate-800 border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm dark:text-slate-100 text-slate-900 placeholder-slate-400 outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-medium dark:text-slate-300 text-slate-700">
                      Message <span className="text-cyan-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Décrivez votre besoin, projet ou offre..."
                      className="w-full px-3.5 py-2.5 rounded-xl dark:bg-dark-900/90 bg-white border dark:border-slate-800 border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm dark:text-slate-100 text-slate-900 placeholder-slate-400 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-cyan-600/20 hover:shadow-cyan-500/35 transition-all duration-300 disabled:opacity-50"
                  >
                    {status.loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
