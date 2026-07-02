import AppointmentForm from "./AppointmentForm";
import { useLanguage } from "../context/LanguageContext";

function Appointment() {
  const { t } = useLanguage();

  return (
    <section id="appointment" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="font-display text-3xl font-semibold text-deep mb-2">{t.appointment.heading}</h2>
      <p className="opacity-70 mb-8">{t.appointment.sub}</p>
      <AppointmentForm />
    </section>
  );
}

export default Appointment;
