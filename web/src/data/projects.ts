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
  status?: Localized;
}

export const projects: Project[] = [
  {
    title: 'Prospectiva 2050 — Horizonte Quindío',
    description: {
      es: 'Plataforma y repositorio de información del proyecto Horizonte Quindío — Prospectiva 2050. Incluye un sitio público dinámico (se edita sin recompilar), un backoffice con roles para todo el contenido, una bandeja de mensajes con estados de atención y una app de repositorio documental con estadísticas. Es un monorepo con backend NestJS, tres aplicaciones en React y PostgreSQL, desplegado en AWS EC2 con CI/CD a GHCR y Traefik.',
      en: 'Platform and information repository for the Horizonte Quindío — Prospectiva 2050 project. It features a dynamic public site (editable without rebuilding), a role-based backoffice for all content, a message inbox with attention states and a document repository app with statistics. Built as a monorepo with a NestJS backend, three React applications and PostgreSQL, deployed to AWS EC2 with CI/CD to GHCR and Traefik.',
    },
    image: '/images/projects/prospectiva2050.png',
    icon: 'layers',
    tags: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'Traefik'],
    repo: 'https://github.com/Innovacion-EAM/Hq-prospectiva2050',
    demo: 'https://horizontequindio2050.com',
    featured: true,
  },
  {
    title: 'Emdecob — Sitio web corporativo',
    description: {
      es: 'Sitio web corporativo completo para Emdecob: páginas de servicios (contact center, jurídico, propiedad horizontal, recuperación de cartera), blog con SEO técnico, gestión de contenido sin recompilación, páginas legales (privacidad, cookies), y arquitectura escalable. Construido con Next.js 14, TypeScript, Tailwind CSS y desplegado en Vercel/AWS.',
      en: 'Complete corporate website for Emdecob: service pages (contact center, legal, property management, debt recovery), blog with technical SEO, content management without rebuild, legal pages (privacy, cookies), and scalable architecture. Built with Next.js 14, TypeScript, Tailwind CSS and deployed on Vercel/AWS.',
    },
    image: '/images/projects/emdecob.jpg',
    icon: 'globe',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO', 'Content Management', 'Vercel'],
    repo: 'https://github.com/Payan3521/emdecob',
    demo: 'https://emdecob.com',
    featured: true,
  },
  {
    title: 'Plataforma web Universidad EAM',
    description: {
      es: 'Sitio web institucional de la Universidad EAM: oferta académica, admisiones, noticias y contenido institucional. Participé en su desarrollo e implementación como parte del equipo del Laboratorio de Innovación.',
      en: 'Universidad EAM institutional website: academic programs, admissions, news and institutional content. I took part in its development and implementation as part of the Innovation Lab team.',
    },
    image: '/images/projects/eam-web.svg',
    icon: 'globe',
    tags: ['Frontend', 'UI/UX', 'Web', 'TypeScript'],
    demo: 'https://www.eam.edu.co',
    featured: true,
  },
  {
    title: 'Rural Adventure',
    description: {
      es: 'Proyecto de software del Laboratorio de Innovación de la EAM orientado al turismo rural y de aventura en el Quindío.',
      en: 'Innovation Lab software project focused on rural and adventure tourism in Quindío.',
    },
    image: '/images/projects/rural-adventure.png',
    icon: 'map-pin',
    tags: ['React', 'TypeScript', 'Maps'],
    repo: 'https://github.com/Innovacion-EAM/rural-adventure',
  },
  {
    title: 'ESSeguros — Automatización',
    description: {
      es: 'Automatización de procesos para ESSeguros, desarrollada para un cliente externo vinculado a través del Laboratorio de Innovación de la EAM.',
      en: 'Process automation for ESSeguros, built for an external client engaged through Universidad EAM\'s Innovation Lab.',
    },
    image: '/images/projects/esseguros.svg',
    icon: 'wrench',
    tags: ['Automation', 'TypeScript', 'Node.js'],
    repo: 'https://github.com/Innovacion-EAM/esseguros-automatizacion',
  },
  {
    title: 'SOS Pets',
    description: {
      es: 'Plataforma para el rescate y la adopción de mascotas, desarrollada en el Laboratorio de Innovación de la EAM. Su despliegue anterior fue reemplazado por el de Prospectiva 2050.',
      en: 'Pet rescue and adoption platform, built at Universidad EAM\'s Innovation Lab. Its previous deployment was replaced by the one for Prospectiva 2050.',
    },
    image: '/images/projects/sos-pets.svg',
    icon: 'heart',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    repo: 'https://github.com/Innovacion-EAM/sos-pets',
  },
  {
    title: 'Branding Toolkit',
    description: {
      es: 'Herramienta para generación automatizada de brand guidelines, paletas de colores, tipografía y assets de marca. En fase activa de desarrollo; disponible la próxima semana.',
      en: 'Automated tool for generating brand guidelines, color palettes, typography, and brand assets. In active development; launching next week.',
    },
    status: {
      es: 'En desarrollo · Próxima semana',
      en: 'In Development · Next week',
    },
    image: '/images/projects/branding-toolkit.svg',
    icon: 'sparkles',
    tags: ['TypeScript', 'Canvas', 'SVG', 'Design Systems'],
    featured: false,
  },
  {
    title: 'Destino Salento',
    description: {
      es: 'Plataforma de turismo y experiencias para Salento, Quindío. En fase activa de desarrollo; disponible la próxima semana.',
      en: 'Tourism and experience platform for Salento, Quindío. In active development; launching next week.',
    },
    status: {
      es: 'En desarrollo · Próxima semana',
      en: 'In Development · Next week',
    },
    image: '/images/projects/destino-salento.svg',
    icon: 'map-pin',
    tags: ['Next.js', 'Maps', 'Booking', 'TypeScript'],
    featured: false,
  },
];