import { useState } from "react";
import services from "../data/services";
import { useLanguage } from "../context/LanguageContext";

function AppointmentForm() {
  const { t } = useLanguage();
  const a = t.appointment;
  const initialForm = { name: "", email: "", phone: "", service: services[0].id, message: "" };
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus("sending");

    // PHASE 2 TODO: replace with a real request, e.g.:
    // await fetch("/api/appointments", { method: "POST", body: JSON.stringify(form) })
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="bg-white border border-sage rounded-xl p-8 text-center">
        <p className="font-display text-xl font-semibold text-deep mb-2">{a.sentTitle}</p>
        <p className="text-sm opacity-75">{a.sentDesc(form.email)}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-sage rounded-xl p-6 md:p-8 grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label={a.labels.name}>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full border border-sage rounded-md px-3 py-2"
            placeholder={a.placeholders.name}
          />
        </Field>
        <Field label={a.labels.email}>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full border border-sage rounded-md px-3 py-2"
            placeholder={a.placeholders.email}
            dir="ltr"
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label={a.labels.phone}>
          {/* Fixed +966 prefix - matches how Saudi users expect phone fields to behave */}
          <div className="mt-1 flex border border-sage rounded-md overflow-hidden" dir="ltr">
            <span className="px-3 py-2 bg-sage-2 text-sm font-mono text-deep border-e border-sage shrink-0">
              +966
            </span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 outline-none"
              placeholder="5X XXX XXXX"
              inputMode="numeric"
            />
          </div>
        </Field>
        <Field label={a.labels.service}>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="mt-1 w-full border border-sage rounded-md px-3 py-2 bg-white"
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {t.services.items[s.id].tag}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={a.labels.message}>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 w-full border border-sage rounded-md px-3 py-2"
          placeholder={a.placeholders.message}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-amber hover:bg-amber-dark text-white px-6 py-3 rounded-md font-medium justify-self-start disabled:opacity-60"
      >
        {status === "sending" ? a.sending : a.submit}
      </button>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="text-sm font-medium">
      {label}
      {children}
    </label>
  );
}

export default AppointmentForm;
