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
  logo?: string;
}

export const experience: ExperienceItem[] = [
  {
    company: 'Universidad EAM — Laboratorio de Innovación',
    logo: '/images/logo-innovacion.png',
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    start: 'Mar 2025',
    end: null,
    location: { es: 'Armenia, Quindío (Híbrido/Remoto)', en: 'Armenia, Quindío (Hybrid/Remote)' },
    description: {
      es: 'Desarrollo full stack de productos propios de la universidad y soluciones para clientes externos vinculados a través del área de innovación. Participación en todo el ciclo de vida: arquitectura, backend, frontend, móvil, cloud (AWS), DevOps, CI/CD, testing y documentación técnica.',
      en: 'Full stack development of university-owned products and solutions for external clients engaged through the innovation area. Participation in the full lifecycle: architecture, backend, frontend, mobile, cloud (AWS), DevOps, CI/CD, testing, and technical documentation.',
    },
    achievements: [
      {
        es: 'Lideré el desarrollo end-to-end de Prospectiva 2050 (monorepo con backend NestJS, tres apps en React y PostgreSQL), desplegado en AWS EC2 con CI/CD a GHCR y Traefik.',
        en: 'Led end-to-end development of Prospectiva 2050 (monorepo with NestJS backend, three React apps and PostgreSQL), deployed on AWS EC2 with CI/CD to GHCR and Traefik.',
      },
      {
        es: 'Construí Emdecob: sitio corporativo Next.js 14 + Tailwind con SEO técnico, blog, gestión de servicios y páginas legales, desplegado en Vercel/AWS.',
        en: 'Built Emdecob: corporate site with Next.js 14 + Tailwind, technical SEO, blog, service management and legal pages, deployed on Vercel/AWS.',
      },
      {
        es: 'Colaboré en la plataforma web institucional eam.edu.co (oferta académica, admisiones, noticias).',
        en: 'Contributed to the institutional website eam.edu.co (academic programs, admissions, news).',
      },
      {
        es: 'Automatización de procesos para ESSeguros (cliente externo): integración de APIs, flujos de trabajo y despliegue.',
        en: 'Process automation for ESSeguros (external client): API integrations, workflows, and deployment.',
      },
      {
        es: 'Desarrollé Rural Adventure (turismo rural Quindío) y SOS Pets (plataforma de adopción de mascotas).',
        en: 'Developed Rural Adventure (rural tourism in Quindío) and SOS Pets (pet adoption platform).',
      },
    ],
    tech: ['TypeScript', 'NestJS', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'GitHub Actions', 'Traefik', 'Tailwind CSS', 'Prisma'],
  },
];