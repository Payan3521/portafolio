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
    title: 'TaskFlow',
    description: {
      es: 'Aplicación de gestión de tareas en tiempo real con tableros colaborativos, notificaciones y modo offline.',
      en: 'Real-time task management app with collaborative boards, notifications and offline mode.',
    },
    icon: 'layout',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO'],
    repo: 'https://github.com/tuusuario/taskflow',
    demo: 'https://taskflow.example.com',
    featured: true,
  },
  {
    title: 'ShopAPI',
    description: {
      es: 'API REST de e-commerce con autenticación JWT, pasarela de pagos y panel de administración.',
      en: 'E-commerce REST API with JWT auth, payment gateway and admin dashboard.',
    },
    icon: 'server',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Stripe'],
    repo: 'https://github.com/tuusuario/shopapi',
    featured: true,
  },
  {
    title: 'DevMetrics',
    description: {
      es: 'Dashboard que analiza métricas de repositorios de GitHub y visualiza la salud del código.',
      en: 'Dashboard that analyzes GitHub repository metrics and visualizes code health.',
    },
    icon: 'database',
    tags: ['Astro', 'Go', 'Redis', 'Chart.js'],
    repo: 'https://github.com/tuusuario/devmetrics',
    demo: 'https://devmetrics.example.com',
  },
  {
    title: 'CloudNotes',
    description: {
      es: 'App de notas con sincronización cifrada, búsqueda full-text y exportación a Markdown.',
      en: 'Notes app with encrypted sync, full-text search and Markdown export.',
    },
    icon: 'cloud',
    tags: ['Next.js', 'Prisma', 'tRPC', 'Tailwind'],
    repo: 'https://github.com/tuusuario/cloudnotes',
  },
];
