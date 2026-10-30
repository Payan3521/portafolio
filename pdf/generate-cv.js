const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const cvData = {
  es: {
    lang: 'es',
    title: 'Curriculum Vitae — Juan Pablo Bedoya Payán',
    name: 'JUAN PABLO BEDOYA PAYÁN',
    role: 'Desarrollador Full Stack · Estudiante de Ingeniería de Software (7.º semestre)',
    location: 'Armenia, Quindío, Colombia',
    phone: '+57 301 929 8995',
    email: 'pablobedoya3521@gmail.com',
    portfolio: 'payan3521.github.io/portafolio',
    portfolioUrl: 'https://payan3521.github.io/portafolio/es/',
    github: 'github.com/Payan3521',
    githubUrl: 'https://github.com/Payan3521',
    linkedin: 'linkedin.com/in/juan-pablo-bedoya-payán',
    linkedinUrl: 'https://www.linkedin.com/in/juan-pablo-bedoya-payán-25aa1b427/',
    
    sections: {
      profile: 'Perfil Profesional',
      experience: 'Experiencia Laboral',
      projects: 'Portafolio de Proyectos',
      education: 'Formación Académica',
      skills: 'Habilidades Técnicas',
      languages: 'Idiomas',
    },

    bio: [
      'Estudiante de Ingeniería de Software en la Universidad EAM (Armenia, Quindío), cursando 7.º de 8 semestres. Inicié la carrera en febrero de 2024 y previamente obtuve el título de Técnico en Análisis y Desarrollo de Software por el SENA (media técnica). Apasionado por construir productos de software completos: desde el modelado relacional y la arquitectura del servidor hasta interfaces de usuario reactivas, accesibles y optimizadas.',
      'Me desempeño como Desarrollador Full Stack con dominio en TypeScript, NestJS, React, Next.js, bases de datos SQL/NoSQL, contenedores (Docker), despliegue en la nube (AWS EC2, S3), CI/CD con GitHub Actions y seguridad. Destaco por liderazgo técnico, aprendizaje autodidacta ágil, documentación exhaustiva y aplicación estratégica de Inteligencia Artificial para acelerar el desarrollo.',
    ],

    experience: [
      {
        company: 'Universidad EAM — Laboratorio de Innovación',
        role: 'Desarrollador de Software Full Stack',
        period: 'Marzo 2025 — Actualidad',
        location: 'Armenia, Quindío (Híbrido / Remoto)',
        summary: 'Desarrollo de productos de software estratégicos para la institución y soluciones digitales para clientes externos vinculados al ecosistema de innovación. Participación activa en todo el ciclo de vida: arquitectura de software, backend, frontend, cloud (AWS), CI/CD, testing y documentación técnica.',
        achievements: [
          'Lideré el desarrollo end-to-end de <strong>Prospectiva 2050</strong> (monorepo con backend NestJS, 3 aplicaciones React y PostgreSQL), con arquitectura multicapa, roles de acceso, repositorio documental dinámico y despliegue en AWS EC2 con GHCR y Traefik.',
          'Construí el sitio corporativo completo de <strong>Emdecob</strong> con Next.js 14, TypeScript y Tailwind CSS, incluyendo SEO técnico avanzado, CMS ligero sin recompilación y páginas de servicios legales y financieros, desplegado en Vercel/AWS.',
          'Colaboré en el desarrollo de la plataforma web institucional <strong>eam.edu.co</strong> (oferta académica, admisiones, noticias y servicios estudiantiles).',
          'Implementé flujos de automatización para <strong>ESSeguros</strong> (cliente externo): orquestación de procesos, integración de APIs REST y despliegue continuo.',
          'Desarrollé la plataforma de turismo <strong>Rural Adventure</strong> y la plataforma de adopción y rescate de mascotas <strong>SOS Pets</strong>.',
        ],
        stack: ['TypeScript', 'NestJS', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS EC2', 'GitHub Actions', 'Traefik', 'Tailwind CSS', 'Prisma'],
      },
    ],

    projects: [
      {
        name: 'Prospectiva 2050 — Horizonte Quindío',
        badge: 'Destacado · Producción',
        url: 'https://horizontequindio2050.com',
        urlLabel: 'horizontequindio2050.com',
        repo: 'https://github.com/Innovacion-EAM/Hq-prospectiva2050',
        description: 'Monorepo con backend NestJS, 3 frontends en React, PostgreSQL y AWS. Repositorio documental dinámico, autenticación con roles, buzón de atención y despliegue con Traefik.',
        stack: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'AWS', 'Traefik'],
      },
      {
        name: 'Emdecob — Sitio Corporativo',
        badge: 'Destacado · Producción',
        url: 'https://emdecob.com',
        urlLabel: 'emdecob.com',
        repo: 'https://github.com/Payan3521/emdecob',
        description: 'Sitio corporativo de alto rendimiento: catálogo de servicios (contact center, jurídico), blog con SEO técnico, gestión sin recompilación y páginas legales en Next.js 14.',
        stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'SEO', 'Vercel / AWS'],
      },
      {
        name: 'Plataforma Web Universidad EAM',
        badge: 'Institucional',
        url: 'https://www.eam.edu.co',
        urlLabel: 'eam.edu.co',
        description: 'Sitio web institucional de la Universidad EAM: programas académicos, admisiones, noticias e información institucional. Desarrollo frontend y UI/UX colaborativo en el Lab.',
        stack: ['Frontend', 'UI/UX', 'TypeScript', 'Web'],
      },
      {
        name: 'SOS Pets — Rescate Animal',
        badge: 'Comunitario',
        repo: 'https://github.com/Innovacion-EAM/sos-pets',
        description: 'Plataforma comunitaria de reporte, geolocalización y adopción responsable de mascotas rescatadas en el Quindío con filtros avanzados y gestión de estados de atención.',
        stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
      },
      {
        name: 'Rural Adventure — Turismo Quindío',
        badge: 'Turismo',
        repo: 'https://github.com/Innovacion-EAM/rural-adventure',
        description: 'Proyecto de software del Laboratorio de Innovación orientado al turismo rural, reservas y aventura en el Quindío con rutas interactivas y mapeo de destinos.',
        stack: ['React', 'TypeScript', 'Maps', 'APIs'],
      },
      {
        name: 'ESSeguros — Automatización',
        badge: 'Cliente Externo',
        repo: 'https://github.com/Innovacion-EAM/esseguros-automatizacion',
        description: 'Automatización de flujos y procesos de negocio para cliente corporativo externo vinculado a través del Lab de la EAM: integración de APIs, orquestación y despliegue.',
        stack: ['Automation', 'TypeScript', 'Node.js', 'APIs'],
      },
      {
        name: 'Branding Toolkit',
        badge: 'En desarrollo · Próxima semana',
        description: 'Herramienta para generación automatizada de brand guidelines, paletas de colores accesibles, tipografía y design tokens exportables en Canvas y SVG. En fase activa de desarrollo.',
        stack: ['TypeScript', 'Canvas', 'SVG', 'Design Systems'],
      },
      {
        name: 'Destino Salento',
        badge: 'En desarrollo · Próxima semana',
        description: 'Plataforma de turismo y experiencias locales para Salento y el Valle de Cocora: catálogo de tours cafeteros, rutas ecológicas y sistema de reservas. En fase activa de desarrollo.',
        stack: ['Next.js', 'Maps', 'Booking', 'TypeScript'],
      },
    ],

    education: [
      {
        institution: 'Universidad EAM',
        degree: 'Ingeniería de Software',
        period: '2024 — Presente (Cursando 7.º semestre de 8)',
        location: 'Armenia, Quindío',
        details: 'Énfasis en arquitectura de software distribuido, bases de datos relacionales y no relacionales, estructuras de datos, seguridad informática, redes y metodologías ágiles (Scrum).',
      },
      {
        institution: 'SENA (Servicio Nacional de Aprendizaje)',
        degree: 'Técnico en Análisis y Desarrollo de Software (Media Técnica)',
        period: '2022 — 2023',
        location: 'Armenia, Quindío',
        details: 'Programación estructurada y orientada a objetos, diseño relacional de bases de datos, desarrollo frontend (HTML5, CSS3, JavaScript), control de versiones con Git y bases de testing.',
      },
    ],

    skills: [
      { category: 'Lenguajes', items: ['TypeScript (Avanzado)', 'JavaScript (Avanzado)', 'SQL', 'Python', 'Go (Básico)', 'Java (Básico)'] },
      { category: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'HTML5 / CSS3 Semántico', 'Vite', 'Responsive Design'] },
      { category: 'Backend & APIs', items: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'RESTful APIs', 'Microservicios', 'WebSockets', 'Autenticación JWT'] },
      { category: 'Bases de Datos & ORMs', items: ['PostgreSQL', 'Redis', 'Prisma ORM', 'Drizzle ORM', 'MongoDB'] },
      { category: 'Cloud, DevOps & Herramientas', items: ['Docker', 'AWS (EC2, S3)', 'GitHub Actions (CI/CD)', 'Traefik', 'Linux / Bash', 'Git / GitHub', 'Vercel'] },
      { category: 'IA & Automatización', items: ['Gemini API', 'OpenAI API', 'Prompt Engineering', 'n8n', 'MCP (Model Context Protocol)'] },
    ],

    languagesList: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'A2 Avanzado (Lectura técnica y escritura fluida, escucha y habla en desarrollo continuo)' },
    ],
  },

  en: {
    lang: 'en',
    title: 'Curriculum Vitae — Juan Pablo Bedoya Payán',
    name: 'JUAN PABLO BEDOYA PAYÁN',
    role: 'Full Stack Developer · Software Engineering Student (7th semester)',
    location: 'Armenia, Quindío, Colombia',
    phone: '+57 301 929 8995',
    email: 'pablobedoya3521@gmail.com',
    portfolio: 'payan3521.github.io/portafolio',
    portfolioUrl: 'https://payan3521.github.io/portafolio/en/',
    github: 'github.com/Payan3521',
    githubUrl: 'https://github.com/Payan3521',
    linkedin: 'linkedin.com/in/juan-pablo-bedoya-payán',
    linkedinUrl: 'https://www.linkedin.com/in/juan-pablo-bedoya-payán-25aa1b427/',

    sections: {
      profile: 'Professional Summary',
      experience: 'Work Experience',
      projects: 'Projects Portfolio',
      education: 'Education',
      skills: 'Technical Skills',
      languages: 'Languages',
    },

    bio: [
      'Software Engineering student at Universidad EAM (Armenia, Colombia), currently in 7th of 8 semesters. Started in February 2024 and previously earned a Technical Degree in Software Analysis and Development from SENA. Passionate about engineering complete software products: from database design and server architecture to reactive, high-performance user interfaces.',
      'Experienced Full Stack Developer proficient in TypeScript, NestJS, React, Next.js, relational/non-relational databases, containerization (Docker), cloud deployment (AWS EC2, S3), CI/CD pipelines with GitHub Actions, and system security. Known for strong technical leadership, rapid self-learning, thorough documentation, and effective use of AI tools to accelerate delivery.',
    ],

    experience: [
      {
        company: 'Universidad EAM — Innovation Lab',
        role: 'Full Stack Software Developer',
        period: 'March 2025 — Present',
        location: 'Armenia, Quindío (Hybrid / Remote)',
        summary: 'Developing strategic institutional software products and bespoke solutions for external clients through the university innovation ecosystem. Active involvement across the full lifecycle: software architecture, backend, frontend, cloud infrastructure (AWS), CI/CD, testing, and technical documentation.',
        achievements: [
          'Led end-to-end development of <strong>Prospectiva 2050</strong> (monorepo with NestJS backend, 3 React apps, and PostgreSQL), featuring multi-tier architecture, role-based access, dynamic content repository, and containerized AWS EC2 deployment via GHCR and Traefik.',
          'Built the corporate website for <strong>Emdecob</strong> using Next.js 14, TypeScript, and Tailwind CSS, featuring advanced technical SEO, headless content management, and service portals, deployed on Vercel/AWS.',
          'Contributed to the institutional platform <strong>eam.edu.co</strong> (academic programs, admissions, news, and student services).',
          'Engineered automation workflows for <strong>ESSeguros</strong> (external client): process orchestration, REST API integrations, and continuous deployment.',
          'Developed <strong>Rural Adventure</strong> (tourism portal) and <strong>SOS Pets</strong> (pet rescue and adoption platform).',
        ],
        stack: ['TypeScript', 'NestJS', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS EC2', 'GitHub Actions', 'Traefik', 'Tailwind CSS', 'Prisma'],
      },
    ],

    projects: [
      {
        name: 'Prospectiva 2050 — Horizonte Quindío',
        badge: 'Featured · Production',
        url: 'https://horizontequindio2050.com',
        urlLabel: 'horizontequindio2050.com',
        repo: 'https://github.com/Innovacion-EAM/Hq-prospectiva2050',
        description: 'Territorial foresight repository monorepo. NestJS backend, 3 React apps, PostgreSQL, JWT role access, citizen inbox, and AWS containerized deployment.',
        stack: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'AWS', 'Traefik'],
      },
      {
        name: 'Emdecob — Corporate Website',
        badge: 'Featured · Production',
        url: 'https://emdecob.com',
        urlLabel: 'emdecob.com',
        repo: 'https://github.com/Payan3521/emdecob',
        description: 'High-performance corporate site showcasing legal and contact center services. Technical SEO, zero-rebuild content management, and privacy compliance in Next.js 14.',
        stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'SEO', 'Vercel / AWS'],
      },
      {
        name: 'Universidad EAM Web Platform',
        badge: 'Institutional',
        url: 'https://www.eam.edu.co',
        urlLabel: 'eam.edu.co',
        description: 'Institutional web platform for Universidad EAM: academic programs, admissions, news and student services. Collaborative frontend and UI/UX development.',
        stack: ['Frontend', 'UI/UX', 'TypeScript', 'Web'],
      },
      {
        name: 'SOS Pets — Pet Rescue Platform',
        badge: 'Community',
        repo: 'https://github.com/Innovacion-EAM/sos-pets',
        description: 'Community platform for reporting, locating, and adopting rescue animals in Quindío, featuring category filtering and real-time status management.',
        stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
      },
      {
        name: 'Rural Adventure — Quindío Tourism',
        badge: 'Tourism',
        repo: 'https://github.com/Innovacion-EAM/rural-adventure',
        description: 'Innovation Lab software project focused on rural tourism, adventure experiences and route mapping in Quindío.',
        stack: ['React', 'TypeScript', 'Maps', 'APIs'],
      },
      {
        name: 'ESSeguros — Process Automation',
        badge: 'External Client',
        repo: 'https://github.com/Innovacion-EAM/esseguros-automatizacion',
        description: 'Business process automation and workflow orchestration for corporate client engaged through Universidad EAM Innovation Lab.',
        stack: ['Automation', 'TypeScript', 'Node.js', 'APIs'],
      },
      {
        name: 'Branding Toolkit',
        badge: 'In Development · Launching Next Week',
        description: 'Automated generator for brand guidelines, accessible palettes, typography, and design tokens exportable via Canvas & SVG. Currently in active development.',
        stack: ['TypeScript', 'Canvas', 'SVG', 'Design Systems'],
      },
      {
        name: 'Destino Salento',
        badge: 'In Development · Launching Next Week',
        description: 'Tourism & booking experience platform for Salento and Cocora Valley: coffee tours, trekking routes, and booking system. Currently in active development.',
        stack: ['Next.js', 'Maps', 'Booking', 'TypeScript'],
      },
    ],

    education: [
      {
        institution: 'Universidad EAM',
        degree: 'B.S. in Software Engineering',
        period: '2024 — Present (7th of 8 semesters)',
        location: 'Armenia, Quindío, Colombia',
        details: 'Curriculum focused on software architecture, distributed systems, relational and NoSQL databases, data structures & algorithms, system security, and agile methodologies (Scrum).',
      },
      {
        institution: 'SENA (National Learning Service)',
        degree: 'Technical Degree in Software Analysis and Development',
        period: '2022 — 2023',
        location: 'Armenia, Quindío, Colombia',
        details: 'Structured and object-oriented programming, relational database modeling, frontend web development (HTML5, CSS3, JavaScript), Git version control, and unit testing fundamentals.',
      },
    ],

    skills: [
      { category: 'Core Languages', items: ['TypeScript (Advanced)', 'JavaScript (Advanced)', 'SQL', 'Python', 'Go (Basic)', 'Java (Basic)'] },
      { category: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Semantic HTML5 / CSS3', 'Vite', 'Responsive Design'] },
      { category: 'Backend & APIs', items: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'RESTful APIs', 'Microservices', 'WebSockets', 'JWT Authentication'] },
      { category: 'Databases & ORMs', items: ['PostgreSQL', 'Redis', 'Prisma ORM', 'Drizzle ORM', 'MongoDB'] },
      { category: 'Cloud, DevOps & Tooling', items: ['Docker', 'AWS (EC2, S3)', 'GitHub Actions (CI/CD)', 'Traefik', 'Linux / Bash', 'Git / GitHub', 'Vercel'] },
      { category: 'AI & Automation', items: ['Gemini API', 'OpenAI API', 'Prompt Engineering', 'n8n', 'MCP (Model Context Protocol)'] },
    ],

    languagesList: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'A2 Advanced (Fluent technical reading & writing; speaking and listening in continuous improvement)' },
    ],
  },
};

function renderHTML(data) {
  return `<!DOCTYPE html>
<html lang="${data.lang}">
<head>
  <meta charset="UTF-8">
  <title>${data.title}</title>
  <style>
    @page {
      size: A4;
      margin: 11mm 13mm 11mm 13mm;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 8.8pt;
      line-height: 1.4;
      color: #1e293b;
      background: #ffffff;
      -webkit-font-smoothing: antialiased;
    }
    a {
      color: #4f46e5;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }

    /* HEADER */
    .header {
      border-bottom: 2px solid #6366f1;
      padding-bottom: 8px;
      margin-bottom: 10px;
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
    }
    .name {
      font-size: 19pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .role {
      font-size: 10pt;
      font-weight: 600;
      color: #6366f1;
      margin-top: 1px;
    }
    .contact-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      margin-top: 6px;
      font-size: 8.2pt;
      color: #475569;
    }
    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }

    /* SECTION */
    .section {
      margin-bottom: 9px;
      page-break-inside: auto;
    }
    .section-title {
      font-size: 9.8pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 7px;
      margin-bottom: 5px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 2px;
    }
    .section-title::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 11px;
      background: #6366f1;
      border-radius: 2px;
    }

    /* BIO */
    .bio-text {
      font-size: 8.6pt;
      color: #334155;
      text-align: justify;
      margin-bottom: 3px;
    }

    /* EXPERIENCE & EDUCATION */
    .item-card {
      margin-bottom: 7px;
      page-break-inside: avoid;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 8px;
    }
    .item-title {
      font-size: 9.3pt;
      font-weight: 700;
      color: #0f172a;
    }
    .item-company {
      font-weight: 600;
      color: #4338ca;
    }
    .item-badge {
      font-size: 8pt;
      font-weight: 600;
      color: #475569;
      background: #f1f5f9;
      padding: 1px 6px;
      border-radius: 4px;
      white-space: nowrap;
    }
    .item-location {
      font-size: 7.8pt;
      color: #64748b;
      margin-top: 1px;
    }
    .item-summary {
      font-size: 8.5pt;
      color: #334155;
      margin-top: 2px;
      text-align: justify;
    }

    /* ACHIEVEMENTS */
    .achievements-list {
      list-style: none;
      margin-top: 3px;
      padding-left: 0;
    }
    .achievements-list li {
      position: relative;
      padding-left: 12px;
      font-size: 8.4pt;
      color: #334155;
      margin-bottom: 2px;
      text-align: justify;
    }
    .achievements-list li::before {
      content: "▪";
      position: absolute;
      left: 1px;
      color: #6366f1;
      font-size: 7.5pt;
    }

    /* CHIPS */
    .chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 3.5px;
      margin-top: 3px;
    }
    .chip {
      font-size: 7.2pt;
      font-weight: 600;
      background: #eef2ff;
      color: #4338ca;
      padding: 1px 5px;
      border-radius: 3px;
      border: 1px solid #c7d2fe;
    }

    /* PROJECTS 2-COLUMN GRID */
    .project-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .project-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 5px;
      padding: 6px 8px;
      page-break-inside: avoid;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 4px;
    }
    .project-name {
      font-size: 8.7pt;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.25;
    }
    .project-badge {
      font-size: 6.8pt;
      font-weight: 700;
      background: #e0e7ff;
      color: #3730a3;
      padding: 1px 5px;
      border-radius: 3px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .project-badge.upcoming {
      background: #fef3c7;
      color: #92400e;
    }
    .project-links {
      font-size: 7.5pt;
      margin-top: 2px;
    }
    .project-desc {
      font-size: 8pt;
      color: #475569;
      margin-top: 3px;
      flex: 1;
      text-align: justify;
    }

    /* SKILLS TABLE / GRID */
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3px;
    }
    .skill-category {
      display: flex;
      align-items: baseline;
      gap: 6px;
      font-size: 8.3pt;
    }
    .skill-cat-name {
      font-weight: 700;
      color: #0f172a;
      width: 170px;
      flex-shrink: 0;
      font-size: 8.2pt;
    }
    .skill-cat-items {
      color: #334155;
      flex: 1;
      font-size: 8.2pt;
    }

    /* LANGUAGES */
    .lang-row {
      display: flex;
      gap: 16px;
      font-size: 8.3pt;
    }
    .lang-item strong {
      color: #0f172a;
    }
    .lang-item span {
      color: #475569;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="header-top">
      <div>
        <h1 class="name">${data.name}</h1>
        <div class="role">${data.role}</div>
      </div>
    </div>
    <div class="contact-grid">
      <div class="contact-item">📍 ${data.location}</div>
      <div class="contact-item">✉️ <a href="mailto:${data.email}">${data.email}</a></div>
      <div class="contact-item">📱 <a href="https://wa.me/573019298995">${data.phone}</a></div>
      <div class="contact-item">🌐 <a href="${data.portfolioUrl}">${data.portfolio}</a></div>
      <div class="contact-item">💻 <a href="${data.githubUrl}">${data.github}</a></div>
      <div class="contact-item">💼 <a href="${data.linkedinUrl}">linkedin.com/in/juan-pablo-bedoya</a></div>
    </div>
  </header>

  <!-- PERFIL -->
  <section class="section">
    <h2 class="section-title">${data.sections.profile}</h2>
    ${data.bio.map(p => `<p class="bio-text">${p}</p>`).join('')}
  </section>

  <!-- EXPERIENCIA -->
  <section class="section">
    <h2 class="section-title">${data.sections.experience}</h2>
    ${data.experience.map(job => `
      <div class="item-card">
        <div class="item-header">
          <div class="item-title">${job.role} · <span class="item-company">${job.company}</span></div>
          <div class="item-badge">${job.period}</div>
        </div>
        <div class="item-location">📍 ${job.location}</div>
        <p class="item-summary">${job.summary}</p>
        <ul class="achievements-list">
          ${job.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
        <div class="chips-row">
          ${job.stack.map(s => `<span class="chip">${s}</span>`).join('')}
        </div>
      </div>
    `).join('')}
  </section>

  <!-- PROYECTOS (TODOS LOS 8 PROYECTOS EN GRID 2 COLUMNAS) -->
  <section class="section">
    <h2 class="section-title">${data.sections.projects}</h2>
    <div class="project-grid">
      ${data.projects.map(proj => {
        const isUpcoming = proj.badge.includes('desarrollo') || proj.badge.includes('Development');
        return `
        <div class="project-card">
          <div>
            <div class="project-header">
              <span class="project-name">${proj.name}</span>
              <span class="project-badge ${isUpcoming ? 'upcoming' : ''}">${proj.badge}</span>
            </div>
            <div class="project-links">
              ${proj.url ? `<a href="${proj.url}" target="_blank">🔗 ${proj.urlLabel}</a>` : ''}
              ${proj.url && proj.repo ? ' · ' : ''}
              ${proj.repo ? `<a href="${proj.repo}" target="_blank">💻 GitHub</a>` : ''}
            </div>
            <p class="project-desc">${proj.description}</p>
          </div>
          <div class="chips-row">
            ${proj.stack.map(s => `<span class="chip">${s}</span>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>
  </section>

  <!-- FORMACIÓN ACADÉMICA -->
  <section class="section">
    <h2 class="section-title">${data.sections.education}</h2>
    ${data.education.map(edu => `
      <div class="item-card" style="margin-bottom: 5px;">
        <div class="item-header">
          <div class="item-title">${edu.degree} · <span class="item-company">${edu.institution}</span></div>
          <div class="item-badge">${edu.period}</div>
        </div>
        <div class="item-location">📍 ${edu.location}</div>
        <p class="item-summary">${edu.details}</p>
      </div>
    `).join('')}
  </section>

  <!-- HABILIDADES TÉCNICAS -->
  <section class="section">
    <h2 class="section-title">${data.sections.skills}</h2>
    <div class="skills-grid">
      ${data.skills.map(cat => `
        <div class="skill-category">
          <span class="skill-cat-name">${cat.category}:</span>
          <span class="skill-cat-items">${cat.items.join(' · ')}</span>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- IDIOMAS -->
  <section class="section" style="margin-bottom:0;">
    <h2 class="section-title">${data.sections.languages}</h2>
    <div class="lang-row">
      ${data.languagesList.map(l => `
        <div class="lang-item">
          <strong>${l.name}:</strong> <span>${l.level}</span>
        </div>
      `).join('')}
    </div>
  </section>

</body>
</html>`;
}

function build() {
  const rootDir = path.resolve(__dirname, '..');
  const tempDir = '/tmp';
  const outPublic = path.join(rootDir, 'web/public/cv');
  const outPdfDir = path.join(rootDir, 'pdf');

  fs.mkdirSync(outPublic, { recursive: true });
  fs.mkdirSync(outPdfDir, { recursive: true });

  for (const lang of ['es', 'en']) {
    const html = renderHTML(cvData[lang]);
    const htmlPath = path.join(tempDir, `cv-${lang}.html`);
    const pdfPath = path.join(tempDir, `cv-juanpablo-${lang}.pdf`);
    
    fs.writeFileSync(htmlPath, html, 'utf8');
    fs.writeFileSync(path.join(outPdfDir, `cv-${lang}.html`), html, 'utf8');

    console.log(`Compilando CV (${lang.toUpperCase()})...`);
    
    const cmd = `chromium --headless --disable-gpu --no-sandbox --user-data-dir=/tmp/chromium-cv-profile --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${htmlPath}" 2>/dev/null`;
    execSync(cmd);

    // Copiar a web/public/cv/
    const targetPublic = path.join(outPublic, `cv-juanpablo-${lang}.pdf`);
    fs.copyFileSync(pdfPath, targetPublic);

    // Copiar a pdf/
    const targetPdfDir = path.join(outPdfDir, `cv-${lang}.pdf`);
    fs.copyFileSync(pdfPath, targetPdfDir);

    const size = fs.statSync(targetPublic).size;
    console.log(`✓ Generado: ${targetPublic} (${(size / 1024).toFixed(1)} KB)`);
  }

  console.log('¡Ambas hojas de vida en PDF generadas exitosamente con todos los proyectos!');
}

build();
