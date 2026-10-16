import type { Localized } from './types';

export interface ExperienceItem {
  company: string;
  role: Localized;
  /** Año/mes de inicio y fin (usa null si sigue en curso) */
  start: string;
  end: string | null;
  location: Localized;
  description: Localized;
  achievements: Localized[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'TechNova Solutions',
    role: { es: 'Ingeniero de Software Senior', en: 'Senior Software Engineer' },
    start: '2023',
    end: null,
    location: { es: 'Remoto', en: 'Remote' },
    description: {
      es: 'Lidero el desarrollo de la plataforma principal de la empresa, una aplicación SaaS usada por más de 50.000 usuarios.',
      en: 'I lead development of the company’s core platform, a SaaS application used by more than 50,000 users.',
    },
    achievements: [
      {
        es: 'Reduje el tiempo de carga inicial en un 45% mediante code-splitting y optimización de consultas.',
        en: 'Reduced initial load time by 45% through code-splitting and query optimization.',
      },
      {
        es: 'Mentoricé a 4 desarrolladores junior y establecí guías de revisión de código.',
        en: 'Mentored 4 junior developers and established code review guidelines.',
      },
      {
        es: 'Diseñé la arquitectura de microservicios que hoy soporta 1M+ de peticiones diarias.',
        en: 'Designed the microservices architecture now handling 1M+ daily requests.',
      },
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    company: 'DataFlow Labs',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    start: '2021',
    end: '2023',
    location: { es: 'Híbrido — Medellín', en: 'Hybrid — Medellín' },
    description: {
      es: 'Desarrollé dashboards analíticos en tiempo real y APIs para clientes empresariales del sector financiero.',
      en: 'Built real-time analytics dashboards and APIs for enterprise clients in the financial sector.',
    },
    achievements: [
      {
        es: 'Implementé un sistema de reportes que ahorró ~20 horas de trabajo manual por semana.',
        en: 'Implemented a reporting system that saved ~20 hours of manual work per week.',
      },
      {
        es: 'Aumenté la cobertura de pruebas del 40% al 90%.',
        en: 'Increased test coverage from 40% to 90%.',
      },
    ],
    tech: ['Vue', 'Python', 'FastAPI', 'MongoDB', 'Redis'],
  },
  {
    company: 'Studio Creativo Pixel',
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    start: '2019',
    end: '2021',
    location: { es: 'Presencial — Bogotá', en: 'On-site — Bogotá' },
    description: {
      es: 'Construí sitios y aplicaciones web para clientes de diversos sectores, con foco en diseño y rendimiento.',
      en: 'Built websites and web apps for clients across many industries, focused on design and performance.',
    },
    achievements: [
      {
        es: 'Entregué más de 25 proyectos en producción con una puntuación media de 95 en Lighthouse.',
        en: 'Shipped 25+ production projects with an average Lighthouse score of 95.',
      },
    ],
    tech: ['JavaScript', 'React', 'SASS', 'Figma'],
  },
];
