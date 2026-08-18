export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title': 'Joel Perez — Full-Stack Developer (.NET · React · Angular)',
    'meta.description':
      'Full-stack developer specialized in C#/.NET backends, Angular and React frontends, and process automation. Portfolio of enterprise-grade projects: multi-tenant SaaS, CQRS, real-time systems.',

    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.themeToggle': 'Toggle dark mode',

    'hero.role': 'Full-Stack Developer · .NET & React / Angular',
    'hero.headline': 'I build enterprise systems that hold up in production.',
    'hero.intro':
      'Backend specialist in C# / .NET and SQL, with frontend depth in Angular and React. From multi-tenant SaaS architecture to process automation (RPA), I care about the decisions behind the code — not just the code.',
    'hero.viewProjects': 'View projects',
    'hero.downloadCV': 'Download CV',

    'projects.eyebrow': 'Featured projects',
    'projects.title': 'Built like products, documented like engineering',
    'projects.intro':
      'Part of a deliberate portfolio of enterprise-grade projects, each exploring a different architecture with its own stack.',
    'projects.more': 'More from the portfolio',
    'projects.challenge': 'Challenge',
    'projects.solution': 'Solution',
    'projects.stack': 'Stack',
    'projects.highlights': 'Highlights',
    'projects.viewCode': 'View code ↗',
    'projects.liveDemo': 'Live demo ↗',
    'projects.status.shipped': 'Shipped',
    'projects.status.in-development': 'In development',

    'skills.eyebrow': 'Skills',
    'skills.title': "Technology, grouped by what it's for",
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.databases': 'Databases',
    'skills.automation': 'Automation · RPA',
    'skills.cloud': 'Cloud · DevOps',
    'skills.practices': 'Practices',

    'about.eyebrow': 'About',
    'about.title': 'Enterprise mindset, hands-on delivery',
    'about.p1':
      "I'm a full-stack developer based in Barranquilla, Colombia, working professionally since 2022 across enterprise applications, SaaS platforms, and process automation. My core is the .NET ecosystem — C#, ASP.NET, SQL Server — paired with modern frontends in Angular and React.",
    'about.p2':
      'At Atlantic Quantum Innovations I build and maintain enterprise systems end to end: backend services, dynamic Angular frontends, advanced SQL Server work, and RPA pipelines with Selenium, Playwright, and AutoHotkey. Before that, I shipped platforms for tourism services and BPO clients, and delivered custom projects as an independent developer.',
    'about.p3':
      'This portfolio is a deliberate exercise: a set of projects designed like real products, each exploring a different architecture — multi-tenancy, CQRS, microservices, real-time analytics, RAG — with technologies distributed intentionally rather than piled into one repo. I want the code to show how I think, not just what I can type.',
    'about.currently': 'Currently',
    'about.currentlyText':
      'Development Engineer at Atlantic Quantum Innovations · building OrderFlow, a multi-tenant SaaS in .NET 8',
    'about.education': 'Education',
    'about.educationText':
      'Technologist in Systems Analysis & Development — SENA (2020–2023)',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Open to full-stack and backend roles',
    'contact.intro':
      'If my work fits what your team is building, the fastest way to reach me is email — or connect on LinkedIn.',
    'contact.downloadCV': 'Download CV (PDF)',

    'footer.location': 'Barranquilla, Colombia',
    'footer.builtWith': 'Built with Astro + Tailwind CSS · deployed on Vercel',
  },
  es: {
    'meta.title': 'Joel Perez — Desarrollador Full-Stack (.NET · React · Angular)',
    'meta.description':
      'Desarrollador full-stack especializado en backends con C#/.NET, frontends con Angular y React, y automatización de procesos. Portafolio de proyectos de nivel empresarial: SaaS multi-tenant, CQRS, sistemas en tiempo real.',

    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.themeToggle': 'Cambiar modo oscuro',

    'hero.role': 'Desarrollador Full-Stack · .NET & React / Angular',
    'hero.headline': 'Construyo sistemas empresariales que sobreviven a producción.',
    'hero.intro':
      'Especialista en backend con C# / .NET y SQL, con dominio de frontend en Angular y React. Desde arquitecturas SaaS multi-tenant hasta automatización de procesos (RPA), me importan las decisiones detrás del código — no solo el código.',
    'hero.viewProjects': 'Ver proyectos',
    'hero.downloadCV': 'Descargar CV',

    'projects.eyebrow': 'Proyectos destacados',
    'projects.title': 'Construidos como productos, documentados como ingeniería',
    'projects.intro':
      'Parte de un portafolio deliberado de proyectos de nivel empresarial, cada uno explorando una arquitectura distinta con su propio stack.',
    'projects.more': 'Más del portafolio',
    'projects.challenge': 'Reto',
    'projects.solution': 'Solución',
    'projects.stack': 'Stack',
    'projects.highlights': 'Destacados',
    'projects.viewCode': 'Ver código ↗',
    'projects.liveDemo': 'Demo en vivo ↗',
    'projects.status.shipped': 'Completado',
    'projects.status.in-development': 'En desarrollo',

    'skills.eyebrow': 'Habilidades',
    'skills.title': 'Tecnología agrupada por propósito',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.databases': 'Bases de datos',
    'skills.automation': 'Automatización · RPA',
    'skills.cloud': 'Cloud · DevOps',
    'skills.practices': 'Prácticas',

    'about.eyebrow': 'Sobre mí',
    'about.title': 'Visión empresarial, ejecución práctica',
    'about.p1':
      'Soy desarrollador full-stack radicado en Barranquilla, Colombia, con experiencia profesional desde 2022 en aplicaciones empresariales, plataformas SaaS y automatización de procesos. Mi núcleo es el ecosistema .NET — C#, ASP.NET, SQL Server — junto a frontends modernos con Angular y React.',
    'about.p2':
      'En Atlantic Quantum Innovations construyo y mantengo sistemas empresariales de punta a punta: servicios backend, frontends dinámicos en Angular, trabajo avanzado en SQL Server y pipelines RPA con Selenium, Playwright y AutoHotkey. Antes, desarrollé plataformas para servicios turísticos y clientes BPO, y entregué proyectos a medida como desarrollador independiente.',
    'about.p3':
      'Este portafolio es un ejercicio deliberado: un conjunto de proyectos diseñados como productos reales, cada uno explorando una arquitectura distinta — multi-tenancy, CQRS, microservicios, analítica en tiempo real, RAG — con tecnologías distribuidas intencionalmente en lugar de amontonadas en un solo repo. Quiero que el código muestre cómo pienso, no solo lo que sé escribir.',
    'about.currently': 'Actualmente',
    'about.currentlyText':
      'Ingeniero de Desarrollo en Atlantic Quantum Innovations · construyendo OrderFlow, un SaaS multi-tenant en .NET 8',
    'about.education': 'Formación',
    'about.educationText':
      'Tecnólogo en Análisis y Desarrollo de Sistemas de Información — SENA (2020–2023)',

    'contact.eyebrow': 'Contacto',
    'contact.title': 'Abierto a roles full-stack y backend',
    'contact.intro':
      'Si mi trabajo encaja con lo que tu equipo está construyendo, la vía más rápida es el correo — o conecta conmigo en LinkedIn.',
    'contact.downloadCV': 'Descargar CV (PDF)',

    'footer.location': 'Barranquilla, Colombia',
    'footer.builtWith': 'Hecho con Astro + Tailwind CSS · desplegado en Vercel',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Path helper: '/' for en, '/es/' for es */
export function localizedPath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
