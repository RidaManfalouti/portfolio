import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_language');
      if (saved && (saved === 'fr' || saved === 'en' || saved === 'ar')) {
        return saved;
      }
    }
    return 'fr'; // French default
  });

  const isRtl = language === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    if (language === 'ar') {
      root.dir = 'rtl';
      root.classList.add('rtl');
    } else {
      root.dir = 'ltr';
      root.classList.remove('rtl');
    }
    localStorage.setItem('portfolio_language', language);
  }, [language]);

  const t = translations[language] || translations.fr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
