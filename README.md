# Meridian Health — Landing Page

A responsive healthcare landing page built with React + Tailwind CSS.

## Structure

```
src/
  App.jsx              # composes all sections
  index.js / index.css # entry point + Tailwind setup
  components/
    Navbar.jsx
    Hero.jsx            # hero + animated "vitals" signature element
    Services.jsx        # reads from data/services.js
    TrustStrip.jsx
    Appointment.jsx      # section wrapper
    AppointmentForm.jsx  # form logic, ready to wire to a real API
    Footer.jsx
  data/
    services.js         # content separated from markup
```

## Run locally

```
npm install
npm start
```

## Localization (English / Arabic, RTL)

- `src/context/LanguageContext.jsx` — holds current language, sets `dir`/`lang` on `<html>`, persists choice to `localStorage`
- `src/data/translations.js` — all display strings for both languages in one place
- Layout uses Tailwind's logical-property utilities (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`, `text-start`) instead of `left`/`right`-specific ones, so the layout mirrors automatically when `dir="rtl"` — no separate RTL stylesheet needed
- Arabic text renders in **IBM Plex Sans Arabic** (falls back to **Noto Kufi Arabic**) instead of forcing the Latin display font onto Arabic copy
- Numbers/phone/email stay LTR even inside RTL layout (`dir="ltr"` on those specific elements) — matches how Arabic readers expect digits and Latin-script contact details to display

**Note:** the Arabic copy in `translations.js` was AI-drafted to be accurate and natural, but for anything patient-facing in a real deployment, have a native speaker proof it before shipping.

## Saudi/Gulf-market frontend considerations added

- **RTL Arabic toggle** in the navbar — a top-level requirement for any KSA-facing product
- **WhatsApp floating button** (`WhatsAppButton.jsx`) — WhatsApp Business is the default contact channel for most Saudi consumers, more so than email or a contact form alone
- **+966 phone prefix** built into the appointment form's phone field, so users don't have to type their own country code
- **Sun–Thu business hours** in the footer, reflecting the standard Saudi work week (Friday–Saturday weekend) instead of a Mon–Fri default
- **MOH-alignment trust line** in the trust strip — a small compliance-flavored statement matters more in Gulf healthcare contexts than a generic "trusted by thousands" badge

## Roadmap

- **Phase 1 (done):** hero, services, trust strip, appointment inquiry form, EN/AR + RTL
- **Phase 2:** wire `AppointmentForm.jsx` to a real backend or scheduling service (EmailJS, Calendly embed, or a small Node/Express API + DB); connect the WhatsApp number to a real Business account
- **Phase 3:** claims/analytics dashboard — reuse the `Hero.jsx` vitals-card pattern with real data from the KSA Healthcare Claims Reconciliation project (Recharts for trend lines, a table for AR/AP-style reconciliation status); consider a Hijri/Gregorian date toggle if the dashboard shows dated records, since both calendars are used in day-to-day KSA administration
