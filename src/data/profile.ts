import type { Localized, Fact, SpokenLanguage } from './types';

/**
 * ─────────────────────────────────────────────────────────────
 *  PERFIL  ·  aquí va TU información personal
 * ─────────────────────────────────────────────────────────────
 *  Todos los textos están en español (es) e inglés (en).
 *  Reemplaza los valores por los tuyos. No cambies las claves.
 */
export const profile = {
  name: 'Juan Pablo Bedoya Payán',
  initials: 'JP',

  role: {
    es: 'Ingeniero de Software Full Stack',
    en: 'Full Stack Software Engineer',
  } satisfies Localized,

  tagline: {
    es: 'Construyo aplicaciones web rápidas, escalables y con una experiencia de usuario impecable de principio a fin.',
    en: 'I build fast, scalable web applications with a flawless user experience from end to end.',
  } satisfies Localized,

  /** Cada elemento es un párrafo. */
  bio: [
    {
      es: 'Soy ingeniero de software con más de 5 años de experiencia diseñando y desarrollando productos digitales. Me muevo con comodidad entre el frontend y el backend, y disfruto convertir ideas complejas en interfaces simples y agradables.',
      en: 'I am a software engineer with over 5 years of experience designing and building digital products. I move comfortably between frontend and backend, and I love turning complex ideas into simple and delightful interfaces.',
    },
    {
      es: 'Me apasionan el código limpio, las buenas prácticas, el rendimiento y la accesibilidad. Trabajo bien en equipo, aprendo rápido y me tomo en serio cada detalle, desde la arquitectura hasta el último píxel.',
      en: 'I am passionate about clean code, best practices, performance and accessibility. I work well in teams, learn fast and take every detail seriously, from architecture down to the last pixel.',
    },
  ] satisfies Localized[],

  location: {
    es: 'Armenia, Quindío, Colombia',
    en: 'Armenia, Quindío, Colombia',
  } satisfies Localized,

  availability: {
    es: 'Disponible para trabajo remoto, presencial o híbrido',
    en: 'Open to remote, on-site or hybrid work',
  } satisfies Localized,

  yearsExperience: 5,

  photo: '/images/profile.svg',

  /** CV en PDF (colócalos en /public/cv/) */
  resume: {
    es: '/cv/cv-juanpablo-es.pdf',
    en: '/cv/cv-juanpablo-en.pdf',
  } satisfies Localized,

  email: 'juanpablo.bedoya@example.com',
  phone: '+57 300 000 0000',

  /** Enlaces a tus redes / perfiles */
  social: {
    github: 'https://github.com/juanpablobedoya',
    linkedin: 'https://linkedin.com/in/juanpablobedoya',
    twitter: 'https://twitter.com/jpbedoya',
  },

  /** URL pública del sitio (para SEO) */
  site: 'https://tunombre.dev',
} as const;

export const facts: Fact[] = [
  {
    label: { es: 'Ubicación', en: 'Location' },
    value: { es: 'Armenia, Quindío', en: 'Armenia, Quindío' },
    icon: 'map-pin',
  },
  {
    label: { es: 'Experiencia', en: 'Experience' },
    value: { es: '+5 años', en: '5+ years' },
    icon: 'briefcase',
  },
  {
    label: { es: 'Disponibilidad', en: 'Availability' },
    value: { es: 'Remoto · Presencial · Híbrido', en: 'Remote · On-site · Hybrid' },
    icon: 'globe',
  },
  {
    label: { es: 'Enfoque', en: 'Focus' },
    value: { es: 'Full Stack', en: 'Full Stack' },
    icon: 'layers',
  },
];

export const spokenLanguages: SpokenLanguage[] = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2 — Intermedio alto', en: 'B2 — Upper intermediate' } },
];
