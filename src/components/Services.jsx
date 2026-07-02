import services from "../data/services";
import { useLanguage } from "../context/LanguageContext";

function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="font-display text-3xl font-semibold text-deep mb-2">{t.services.heading}</h2>
      <p className="opacity-70 mb-10 max-w-lg">{t.services.sub}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ id, icon: Icon }) => {
          const copy = t.services.items[id];
          return (
            <div
              key={id}
              className="bg-white border border-sage rounded-xl p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="w-8 h-8 text-amber mb-4" strokeWidth={1.75} />
              <h3 className="font-display text-lg font-semibold text-deep mb-2">{copy.tag}</h3>
              <p className="text-sm opacity-75">{copy.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
