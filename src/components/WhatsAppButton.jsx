import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Update this number to a real WhatsApp Business number before going live.
const WHATSAPP_NUMBER = "9660000000000";

function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.footer.whatsapp}
      className="fixed bottom-6 end-6 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:opacity-90"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-medium">{t.footer.whatsapp}</span>
    </a>
  );
}

export default WhatsAppButton;
