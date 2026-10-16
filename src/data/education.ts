import type { Localized } from './types';

export interface EducationItem {
  institution: string;
  degree: Localized;
  start: string;
  end: string | null;
  description: Localized;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export const education: EducationItem[] = [
  {
    institution: 'Universidad Nacional de Colombia',
    degree: { es: 'Ingeniería de Sistemas', en: 'B.Sc. in Computer Science' },
    start: '2015',
    end: '2020',
    description: {
      es: 'Graduado con honores. Trabajo de grado sobre sistemas distribuidos y computación en la nube.',
      en: 'Graduated with honors. Thesis on distributed systems and cloud computing.',
    },
  },
  {
    institution: 'Platzi / Coursera',
    degree: { es: 'Especialización en Arquitectura de Software', en: 'Software Architecture Specialization' },
    start: '2021',
    end: '2021',
    description: {
      es: 'Formación avanzada en patrones de diseño, arquitectura de microservicios y escalabilidad.',
      en: 'Advanced training in design patterns, microservices architecture and scalability.',
    },
  },
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    url: 'https://aws.amazon.com/certification/',
  },
  {
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    year: '2022',
    url: 'https://www.scrum.org/',
  },
  {
    name: 'Meta Front-End Developer',
    issuer: 'Meta / Coursera',
    year: '2021',
    url: 'https://www.coursera.org/',
  },
];
