import { useState } from "react";
import { HeartPulse, Menu, X, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-paper/85 border-b border-sage">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-6 h-6 text-deep" strokeWidth={2.25} />
          <span className="font-display text-xl font-semibold text-deep">{t.nav.brand}</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:opacity-70">{t.nav.services}</a>
          <a href="#about" className="hover:opacity-70">{t.nav.about}</a>
          <LangToggle lang={lang} toggleLang={toggleLang} />
          <a href="#appointment" className="bg-deep text-white px-4 py-2 rounded-md hover:opacity-90">
            {t.nav.cta}
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#services" onClick={() => setOpen(false)}>{t.nav.services}</a>
          <a href="#about" onClick={() => setOpen(false)}>{t.nav.about}</a>
          <LangToggle lang={lang} toggleLang={toggleLang} />
          <a href="#appointment" onClick={() => setOpen(false)} className="bg-deep text-white px-4 py-2 rounded-md text-center">
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}

function LangToggle({ lang, toggleLang }) {
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 border border-sage rounded-md px-3 py-1.5 text-xs font-mono hover:bg-sage-2"
      aria-label="Switch language"
    >
      <Languages className="w-3.5 h-3.5" />
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}

export default Navbar;
