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
    institution: 'Universidad EAM',
    degree: { es: 'Ingeniería de Software', en: 'Software Engineering' },
    start: '2023',
    end: null,
    description: {
      es: 'Actualmente cursando 6.º de 8 semestres. Formación en desarrollo de software, algoritmos, estructuras de datos, bases de datos, arquitectura y redes.',
      en: 'Currently in the 6th of 8 semesters. Coursework in software development, algorithms, data structures, databases, architecture and networking.',
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
