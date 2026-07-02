import { Stethoscope, Activity, HeartPulse } from "lucide-react";

// Only structural data lives here (id + icon).
// Display text (tag, description) comes from translations.js so it can be localized.
const services = [
  { id: "general", icon: Stethoscope },
  { id: "diagnostics", icon: Activity },
  { id: "chronic", icon: HeartPulse },
];

export default services;
