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
    es: 'Desarrollador Full Stack · Estudiante de Ingeniería de Software (7.º/8.º semestre)',
    en: 'Full Stack Developer · Software Engineering Student (7th/8th semester)',
  } satisfies Localized,

  tagline: {
    es: 'Construyo aplicaciones web escalables con código limpio, arquitectura sólida y una cultura de documentación y automatización. Lidero, aprendo de forma continua e integro IA para potenciar soluciones de alto impacto.',
    en: 'I build scalable web apps with clean code, solid architecture, and a strong culture of documentation and automation. I lead, continuously learn, and leverage AI to build high-impact solutions.',
  } satisfies Localized,

  /** Cada elemento es un párrafo. */
  bio: [
    {
      es: 'Estudiante de Ingeniería de Software en la Universidad EAM (Armenia, Quindío), cursando 7.º de 8 semestres. Inicié la carrera en febrero de 2024 y antes obtuve el título técnico en Análisis y Desarrollo de Software por el SENA (media técnica). Me apasiona construir productos completos: desde la base de datos y la lógica del servidor hasta la interfaz y la experiencia de usuario.',
      en: 'Software Engineering student at Universidad EAM (Armenia, Quindío), currently in 7th of 8 semesters. Started in February 2024, previously earned a Technical Degree in Software Analysis and Development from SENA (high school technical program). I love building complete products: from database and server logic to interface and user experience.',
    },
    {
      es: 'Me desempeño como Full Stack: backend, frontend, móvil, cloud (AWS), DevOps, seguridad e integración estratégica de IA. Mis fortalezas: liderazgo técnico, comunicación clara, aprendizaje autodidacta ágil, visión de futuro, documentación exhaustiva y orden. Inglés A2 avanzado (lectura/escritura). Busco oportunidades actualmente.',
      en: 'I work as a Full Stack developer: backend, frontend, mobile, cloud (AWS), DevOps, security, and strategic AI integration. Strengths: technical leadership, clear communication, agile self-learning, future vision, thorough documentation, and organization. English A2 advanced (reading/writing). Open to opportunities.',
    },
  ] satisfies Localized[],

  location: {
    es: 'Armenia, Quindío, Colombia',
    en: 'Armenia, Quindío, Colombia',
  } satisfies Localized,

  availability: {
    es: 'Disponible para trabajo remoto, presencial o híbrido',
    en: 'Open to remote, on-site or hybrid work (from 2026)',
  } satisfies Localized,

  photo: '/images/profile.jpeg',

  /** CV en PDF (colócalos en /public/cv/) */
  resume: {
    es: '/cv/cv-juanpablo-es.pdf',
    en: '/cv/cv-juanpablo-en.pdf',
  } satisfies Localized,

  email: 'pablobedoya3521@gmail.com',
  phone: '+57 301 929 8995',
  whatsapp: '+573019298995',

  /** Enlaces a tus redes / perfiles */
  social: {
    github: 'https://github.com/Payan3521/Payan',
    linkedin: 'https://www.linkedin.com/in/juan-pablo-bedoya-payán-25aa1b427/',
    whatsapp: 'https://wa.me/573019298995',
  },

  /** URL pública del sitio (para SEO) */
  site: 'https://payan3521.github.io/portafolio',
} as const;

export const facts: Fact[] = [
  {
    label: { es: 'Ubicación', en: 'Location' },
    value: { es: 'Armenia, Quindío', en: 'Armenia, Quindío' },
    icon: 'map-pin',
  },
  {
    label: { es: 'Formación', en: 'Education' },
    value: { es: '7.º de 8 semestres', en: '6th of 8 semesters' },
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
