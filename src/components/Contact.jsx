import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Check, Copy, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

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
  const { t, isRtl } = useLanguage();

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
      const defaultSubject = isRtl ? 'تواصل عبر معرض الأعمال' : 'Prise de contact via Portfolio';
      const greeting = isRtl ? 'مرحباً رضا،' : 'Bonjour Rida,';
      const fromText = isRtl ? 'من :' : 'De :';
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formState.subject || defaultSubject
      )}&body=${encodeURIComponent(
        `${greeting}\n\n${formState.message}\n\n${fromText} ${formState.name} (${formState.email})`
      )}`;
      window.open(mailtoLink, '_blank');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden dark:bg-black bg-white">
      {/* Background Lighting */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00783C]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto space-y-4 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/30">
            <MessageSquare className="w-3.5 h-3.5 text-[#00783C]" />
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-black tracking-tight">
            {t.contact.title}
          </h2>
          <p className="dark:text-neutral-300 text-neutral-700 text-sm sm:text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Details & Links (5 cols) */}
          <div className={`lg:col-span-5 space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '150ms' }}>
            
            {/* Info Card */}
            <div className="rounded-2xl p-6 glass-card border dark:border-neutral-800 border-neutral-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#00783C]">{t.contact.directContact}</h3>
              
              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-4 rounded-xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 flex items-center justify-between group shadow-xs">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse truncate mr-2 rtl:mr-0 rtl:ml-2">
                    <div className="p-2.5 rounded-xl bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/20 shrink-0">
                      <Mail className="w-4 h-4 text-[#00783C]" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-mono font-semibold text-[#00783C] uppercase">{t.contact.email}</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium dark:text-white text-black hover:text-[#00783C] transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-neutral-500 hover:text-[#00783C] dark:bg-neutral-900 bg-neutral-100 transition-colors shrink-0"
                    title={isRtl ? 'نسخ البريد الإلكتروني' : "Copier l'adresse email"}
                    aria-label={isRtl ? 'نسخ البريد الإلكتروني' : "Copier l'email"}
                  >
                    {copied ? <Check className="w-4 h-4 text-[#00783C]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 flex items-center space-x-3 rtl:space-x-reverse shadow-xs">
                  <div className="p-2.5 rounded-xl bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/20 shrink-0">
                    <MapPin className="w-4 h-4 text-[#00783C]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono font-semibold text-[#00783C] uppercase">{t.contact.location}</p>
                    <p className="text-xs sm:text-sm font-medium dark:text-white text-black">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-200 flex items-center space-x-3 rtl:space-x-reverse shadow-xs">
                  <div className="p-2.5 rounded-xl bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/20 shrink-0">
                    <Phone className="w-4 h-4 text-[#00783C]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono font-semibold text-[#00783C] uppercase">{t.contact.phone}</p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-medium dark:text-white text-black hover:text-[#00783C] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social networks block */}
              <div className="pt-2 border-t dark:border-neutral-800 border-neutral-200">
                <p className="text-xs text-[#00783C] font-mono font-semibold mb-3">{t.contact.networks}</p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl dark:bg-black bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-900 border dark:border-neutral-800 border-neutral-200 text-xs font-semibold dark:text-white text-black hover:text-[#00783C] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl dark:bg-black bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-900 border dark:border-neutral-800 border-neutral-200 text-xs font-semibold dark:text-white text-black hover:text-[#00783C] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Minimalist Contact Form (7 cols) */}
          <div className={`lg:col-span-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            <div className="rounded-2xl p-6 sm:p-8 glass-card border dark:border-neutral-800 border-neutral-200 shadow-xl">
              
              {status.submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#00783C]/10 text-[#00783C] border border-[#00783C]/30 flex items-center justify-center">
                    <Check className="w-7 h-7 text-[#00783C]" />
                  </div>
                  <h4 className="text-xl font-bold dark:text-white text-black">{t.contact.successTitle}</h4>
                  <p className="text-sm dark:text-neutral-300 text-neutral-700 max-w-md mx-auto">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setStatus({ submitted: false, loading: false })}
                    className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-[#00783C] hover:bg-[#006533] rounded-xl transition-colors"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono font-semibold text-[#00783C]">
                        {t.contact.nameLabel} <span className="text-[#00783C]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-300 focus:border-[#00783C] focus:ring-1 focus:ring-[#00783C] text-sm dark:text-white text-black placeholder-neutral-400 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono font-semibold text-[#00783C]">
                        {t.contact.emailLabel} <span className="text-[#00783C]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-300 focus:border-[#00783C] focus:ring-1 focus:ring-[#00783C] text-sm dark:text-white text-black placeholder-neutral-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono font-semibold text-[#00783C]">
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder={t.contact.subjectPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-300 focus:border-[#00783C] focus:ring-1 focus:ring-[#00783C] text-sm dark:text-white text-black placeholder-neutral-400 outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-semibold text-[#00783C]">
                      {t.contact.messageLabel} <span className="text-[#00783C]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl dark:bg-black bg-white border dark:border-neutral-800 border-neutral-300 focus:border-[#00783C] focus:ring-1 focus:ring-[#00783C] text-sm dark:text-white text-black placeholder-neutral-400 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-[#00783C] hover:bg-[#006533] shadow-lg shadow-[#00783C]/20 hover:shadow-[#00783C]/35 transition-all duration-300 disabled:opacity-50"
                  >
                    {status.loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                        <span>{t.contact.sendBtn}</span>
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
