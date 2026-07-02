import { HeartPulse, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-sage py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm opacity-75">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-5 h-5 text-deep" />
          <span className="font-display font-semibold text-deep">{t.nav.brand}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2" dir="ltr">
            <Phone className="w-4 h-4" /> +966 00 000 0000
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> hello@meridianhealth.example
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {t.footer.address}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> {t.footer.hours}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
