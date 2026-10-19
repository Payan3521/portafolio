import type { Localized } from './types';

export interface Project {
  title: string;
  description: Localized;
  /** Opcional: ruta a una imagen en /public (ej. /images/projects/mi-app.png).
   *  Si no la pones, se muestra un degradado bonito con un icono. */
  image?: string;
  /** Icono para el placeholder (ver Icon.astro). Ej: 'code', 'cloud', 'database' */
  icon: string;
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Prospectiva 2050 — Horizonte Quindío',
    description: {
      es: 'Plataforma y repositorio de información del proyecto Horizonte Quindío — Prospectiva 2050. Incluye un sitio público dinámico (se edita sin recompilar), un backoffice con roles para todo el contenido, una bandeja de mensajes con estados de atención y una app de repositorio documental con estadísticas. Es un monorepo con backend NestJS, tres aplicaciones en React y PostgreSQL, desplegado en AWS EC2 con CI/CD a GHCR y Traefik.',
      en: 'Platform and information repository for the Horizonte Quindío — Prospectiva 2050 project. It features a dynamic public site (editable without rebuilding), a role-based backoffice for all content, a message inbox with attention states and a document repository app with statistics. Built as a monorepo with a NestJS backend, three React applications and PostgreSQL, deployed to AWS EC2 with CI/CD to GHCR and Traefik.',
    },
    icon: 'layers',
    tags: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'Traefik'],
    repo: 'https://github.com/Innovacion-EAM/Hq-prospectiva2050',
    demo: 'https://horizontequindio2050.com',
    featured: true,
  },
  {
    title: 'Plataforma web Universidad EAM',
    description: {
      es: 'Sitio web institucional de la Universidad EAM: oferta académica, admisiones, noticias y contenido institucional. Participé en su desarrollo e implementación como parte del equipo del Laboratorio de Innovación.',
      en: 'Universidad EAM institutional website: academic programs, admissions, news and institutional content. I took part in its development and implementation as part of the Innovation Lab team.',
    },
    icon: 'globe',
    tags: ['Frontend', 'UI/UX', 'Web'],
    demo: 'https://www.eam.edu.co',
    featured: true,
  },
  {
    title: 'Rural Adventure',
    description: {
      es: 'Proyecto de software del Laboratorio de Innovación de la EAM orientado al turismo rural y de aventura en el Quindío.',
      en: 'Innovation Lab software project focused on rural and adventure tourism in Quindío.',
    },
    icon: 'map-pin',
    tags: [],
    repo: 'https://github.com/Innovacion-EAM/rural-adventure',
  },
  {
    title: 'ESSeguros — Automatización',
    description: {
      es: 'Automatización de procesos para ESSeguros, desarrollada para un cliente externo vinculado a través del Laboratorio de Innovación de la EAM.',
      en: 'Process automation for ESSeguros, built for an external client engaged through Universidad EAM’s Innovation Lab.',
    },
    icon: 'wrench',
    tags: [],
    repo: 'https://github.com/Innovacion-EAM/esseguros-automatizacion',
  },
  {
    title: 'SOS Pets',
    description: {
      es: 'Plataforma para el rescate y la adopción de mascotas, desarrollada en el Laboratorio de Innovación de la EAM. Su despliegue anterior fue reemplazado por el de Prospectiva 2050.',
      en: 'Pet rescue and adoption platform, built at Universidad EAM’s Innovation Lab. Its previous deployment was replaced by the one for Prospectiva 2050.',
    },
    icon: 'heart',
    tags: [],
    repo: 'https://github.com/Innovacion-EAM/sos-pets',
  },
];
