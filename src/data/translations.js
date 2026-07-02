const translations = {
  en: {
    nav: {
      brand: "Meridian Health",
      services: "Services",
      about: "About",
      cta: "Request an appointment",
    },
    hero: {
      eyebrow: "Now booking new patients",
      titleA: "Care that keeps up with your",
      titleEm: "records",
      titleB: ", not just your visits.",
      sub: "One team for checkups, diagnostics, and ongoing care — with your history in one place every time you walk in.",
      ctaPrimary: "Request an appointment",
      ctaSecondary: "See services",
      snapshot: "Patient snapshot",
      live: "Live",
      statBpm: "bpm avg",
      statLab: "lab turnaround",
      statRecord: "care record",
    },
    services: {
      heading: "What we treat",
      sub: "Three ways we work with you, depending on what stage of care you're in.",
      items: {
        general: { tag: "General Care", desc: "Routine checkups, screenings, and same-week appointments with your primary physician." },
        diagnostics: { tag: "Diagnostics", desc: "Lab work and imaging with results delivered to your patient portal, usually within 48 hours." },
        chronic: { tag: "Chronic Care", desc: "Ongoing management plans for long-term conditions, coordinated across your full care team." },
      },
    },
    trust: {
      items: [
        { title: "One record, every visit", desc: "No repeating your history at every appointment — your team shares it already." },
        { title: "Same-week availability", desc: "Most requests get a confirmed slot within 3 working days." },
        { title: "Results you can read", desc: "Plain-language summaries alongside every lab and diagnostic result." },
      ],
      moh: "Aligned with Saudi MOH care-coordination standards",
    },
    appointment: {
      heading: "Request an appointment",
      sub: "Send your details and we'll confirm a time within one business day.",
      labels: { name: "Full name", email: "Email", phone: "Phone", service: "Service", message: "What's this about?" },
      placeholders: { name: "Your name", email: "you@example.com", message: "Briefly describe what you'd like to be seen for" },
      submit: "Send request",
      sending: "Sending…",
      sentTitle: "Request received",
      sentDesc: (email) => `We'll reach out at ${email} to confirm your slot.`,
    },
    footer: {
      hours: "Sun – Thu, 9:00 AM – 5:00 PM",
      address: "KAEC, Saudi Arabia",
      whatsapp: "Chat on WhatsApp",
    },
  },

  ar: {
    nav: {
      brand: "ميريديان هيلث",
      services: "خدماتنا",
      about: "من نحن",
      cta: "احجز موعدًا",
    },
    hero: {
      eyebrow: "نستقبل مرضى جدد الآن",
      titleA: "رعاية تواكب",
      titleEm: "سجلك الطبي",
      titleB: "، لا تقتصر على زيارتك فقط.",
      sub: "فريق واحد للفحوصات والتحاليل والرعاية المستمرة — وسجلك الطبي في مكان واحد في كل زيارة.",
      ctaPrimary: "احجز موعدًا",
      ctaSecondary: "استعرض الخدمات",
      snapshot: "لمحة عن المريض",
      live: "مباشر",
      statBpm: "متوسط النبض",
      statLab: "مدة نتائج التحاليل",
      statRecord: "سجل طبي واحد",
    },
    services: {
      heading: "ما الذي نعالجه",
      sub: "ثلاث طرق للتعامل معك، بحسب مرحلة الرعاية التي تحتاجها.",
      items: {
        general: { tag: "الرعاية العامة", desc: "فحوصات دورية وكشف مبكر ومواعيد خلال نفس الأسبوع مع طبيبك المعالج." },
        diagnostics: { tag: "التحاليل والأشعة", desc: "تحاليل مخبرية وأشعة مع نتائج تصل إلى بوابتك الطبية عادة خلال 48 ساعة." },
        chronic: { tag: "الأمراض المزمنة", desc: "خطط متابعة مستمرة للحالات طويلة الأمد، بتنسيق كامل بين فريق رعايتك." },
      },
    },
    trust: {
      items: [
        { title: "سجل واحد، في كل زيارة", desc: "لا داعي لتكرار تاريخك الطبي في كل موعد — فريقك يشاركه بالفعل." },
        { title: "مواعيد خلال نفس الأسبوع", desc: "تُؤكَّد معظم الطلبات خلال 3 أيام عمل." },
        { title: "نتائج يسهل فهمها", desc: "ملخصات بلغة واضحة مرفقة مع كل نتيجة تحليل أو أشعة." },
      ],
      moh: "متوافق مع معايير تنسيق الرعاية الصحية بوزارة الصحة السعودية",
    },
    appointment: {
      heading: "احجز موعدًا",
      sub: "أرسل بياناتك وسنؤكد لك الموعد خلال يوم عمل واحد.",
      labels: { name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "رقم الجوال", service: "الخدمة", message: "ما سبب الزيارة؟" },
      placeholders: { name: "اسمك", email: "you@example.com", message: "صف باختصار سبب رغبتك في الزيارة" },
      submit: "إرسال الطلب",
      sending: "جارٍ الإرسال…",
      sentTitle: "تم استلام طلبك",
      sentDesc: (email) => `سنتواصل معك على ${email} لتأكيد موعدك.`,
    },
    footer: {
      hours: "الأحد – الخميس، 9:00 صباحًا – 5:00 مساءً",
      address: "مدينة الملك عبدالله الاقتصادية، المملكة العربية السعودية",
      whatsapp: "تواصل عبر واتساب",
    },
  },
};

export default translations;
