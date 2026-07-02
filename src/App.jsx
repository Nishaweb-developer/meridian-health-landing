import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TrustStrip from "./components/TrustStrip";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function AppShell() {
  const { lang } = useLanguage();

  return (
    // font-arabic swaps the whole page to an Arabic-optimized typeface when lang === "ar"
    <div className={`min-h-screen w-full ${lang === "ar" ? "font-arabic" : ""}`}>
      <Navbar />
      <Hero />
      <Services />
      <TrustStrip />
      <Appointment />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

export default App;
