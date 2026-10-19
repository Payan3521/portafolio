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
    es: 'Desarrollador Full Stack · Estudiante de Ingeniería de Software',
    en: 'Full Stack Developer · Software Engineering Student',
  } satisfies Localized,

  tagline: {
    es: 'Construyo aplicaciones web rápidas, escalables y con una experiencia de usuario impecable de principio a fin.',
    en: 'I build fast, scalable web applications with a flawless user experience from end to end.',
  } satisfies Localized,

  /** Cada elemento es un párrafo. */
  bio: [
    {
      es: 'Soy estudiante de Ingeniería de Software en la Universidad EAM (Armenia, Quindío) y actualmente curso 6.º de 8 semestres. Me apasiona construir productos completos, desde la base de datos y la lógica del servidor hasta la interfaz y la experiencia de usuario.',
      en: 'I am a Software Engineering student at Universidad EAM (Armenia, Quindío), currently in my 6th of 8 semesters. I love building complete products, from the database and server logic all the way to the interface and user experience.',
    },
    {
      es: 'Me desempeño como desarrollador Full Stack: manejo backend, frontend y desarrollo móvil, además de cloud (AWS), DevOps, seguridad e integración de inteligencia artificial. Disfruto el código limpio, el rendimiento y aprender algo nuevo cada día.',
      en: 'I work as a Full Stack developer: I handle backend, frontend and mobile development, plus cloud (AWS), DevOps, security and AI integration. I enjoy clean code, performance and learning something new every day.',
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
    label: { es: 'Formación', en: 'Education' },
    value: { es: '6.º de 8 semestres', en: '6th of 8 semesters' },
    icon: 'graduation-cap',
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
