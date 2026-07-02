import { createContext, useContext, useEffect, useState } from "react";
import translations from "../data/translations";

const LanguageContext = createContext(null);

const RTL_LANGS = ["ar"];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("meridian-lang") || "en");

  const dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("meridian-lang", lang);
  }, [lang, dir]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));

  const value = { lang, dir, toggleLang, t: translations[lang] };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
