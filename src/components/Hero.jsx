import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t, dir } = useLanguage();
  const h = t.hero;

  return (
    <section className="max-w-6xl mx-auto px-6 pt-14 pb-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-amber mb-4">
          {h.eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight font-semibold text-deep">
          {h.titleA} <em className="not-italic text-amber">{h.titleEm}</em>{h.titleB}
        </h1>
        <p className="mt-5 text-base md:text-lg opacity-80 max-w-md">
          {h.sub}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#appointment"
            className="bg-amber hover:bg-amber-dark text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2"
          >
            {h.ctaPrimary}
            <ArrowUpRight
              className="w-4 h-4"
              style={{ transform: dir === "rtl" ? "scaleX(-1)" : undefined }}
            />
          </a>
          <a
            href="#services"
            className="border border-sage px-6 py-3 rounded-md font-medium hover:bg-sage-2"
          >
            {h.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="bg-white border border-sage rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs uppercase tracking-widest opacity-60">{h.snapshot}</span>
          <span className="font-mono text-xs px-2 py-1 rounded bg-sage-2 text-deep">{h.live}</span>
        </div>
        <svg viewBox="0 0 400 100" className="w-full h-20" aria-hidden="true">
          <path
            className="pulse-path animate-draw"
            d="M0,50 L100,50 L120,20 L140,80 L160,50 L400,50"
            fill="none"
            stroke="#0F3B36"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="grid grid-cols-3 gap-3 mt-4">
          <Stat value="72" label={h.statBpm} />
          <Stat value="48h" label={h.statLab} />
          <Stat value="1" label={h.statRecord} />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-sage-2 rounded-lg p-3 text-center">
      <p className="font-display text-2xl font-semibold text-deep">{value}</p>
      <p className="font-mono text-[10px] uppercase tracking-wide opacity-60">{label}</p>
    </div>
  );
}

export default Hero;
