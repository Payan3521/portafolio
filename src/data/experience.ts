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
    company: 'Universidad EAM — Laboratorio de Innovación',
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    start: 'Mar 2026',
    end: null,
    location: { es: 'Remoto', en: 'Remote' },
    description: {
      es: 'Desarrollo de software en el Laboratorio de Innovación de la Universidad EAM. Construyo productos propios de la universidad y soluciones para clientes externos vinculados a través del área de innovación, participando en el ciclo completo de cada proyecto: arquitectura, backend, frontend, despliegue y soporte.',
      en: 'Software development at Universidad EAM’s Innovation Lab. I build the university’s own products and solutions for external clients engaged through the innovation area, taking part in the full lifecycle of each project: architecture, backend, frontend, deployment and support.',
    },
    achievements: [
      {
        es: 'Desarrollé de punta a punta varios proyectos de software, desde el diseño de la arquitectura y las APIs hasta la interfaz y el despliegue en producción.',
        en: 'Built several software projects end to end, from architecture and API design through to the interface and production deployment.',
      },
      {
        es: 'Implementé Prospectiva 2050 (monorepo con backend NestJS, tres apps en React y PostgreSQL), desplegado en AWS EC2 con CI/CD a GHCR.',
        en: 'Implemented Prospectiva 2050 (a monorepo with a NestJS backend, three React apps and PostgreSQL), deployed to AWS EC2 with CI/CD to GHCR.',
      },
      {
        es: 'Colaboré en el desarrollo de la plataforma web institucional de la Universidad EAM (eam.edu.co).',
        en: 'Contributed to the development of Universidad EAM’s institutional website (eam.edu.co).',
      },
    ],
    tech: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'Docker', 'AWS', 'GitHub Actions', 'Traefik'],
  },
];
