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
    start: '2024',
    end: null,
    description: {
      es: 'Cursando 7.º de 8 semestres (iniciado febrero 2024). Formación en algoritmos, estructuras de datos, bases de datos, arquitectura de software, redes, ingeniería de requisitos y metodologías ágiles.',
      en: 'Currently in 7th of 8 semesters (started February 2024). Coursework in algorithms, data structures, databases, software architecture, networking, requirements engineering, and agile methodologies.',
    },
  },
  {
    institution: 'SENA — Media Técnica',
    degree: { es: 'Técnico en Análisis y Desarrollo de Software', en: 'Technical Degree in Software Analysis and Development' },
    start: '2022',
    end: '2023',
    description: {
      es: 'Formación técnica durante bachillerato: fundamentos de programación, bases de datos relacionales, desarrollo web (HTML, CSS, JavaScript), metodologías ágiles (Scrum), control de versiones (Git) y bases de testing.',
      en: 'Technical training during high school: programming fundamentals, relational databases, web development (HTML, CSS, JavaScript), agile methodologies (Scrum), version control (Git), and testing basics.',
    },
  },
];

export const certifications: Certification[] = [];