import { ClipboardList, HeartPulse, Activity, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const icons = [ClipboardList, HeartPulse, Activity];

function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-deep text-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {t.trust.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title}>
                <Icon className="w-6 h-6 mb-3 text-amber" />
                <p className="font-display text-xl font-semibold mb-1">{item.title}</p>
                <p className="text-sm opacity-75">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Regional trust signal - matters more in KSA/Gulf healthcare than a generic badge */}
        <div className="mt-10 pt-8 border-t border-white/15 flex items-center gap-2 text-sm opacity-80">
          <ShieldCheck className="w-4 h-4 text-amber shrink-0" />
          <span>{t.trust.moh}</span>
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
