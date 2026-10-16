import type { UIKey } from '../i18n/ui';

export interface SkillGroup {
  /** Clave de traducción para el título del grupo */
  titleKey: UIKey;
  icon: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    titleKey: 'skills.group.languages',
    icon: 'code',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
  },
  {
    titleKey: 'skills.group.frontend',
    icon: 'layout',
    items: ['React', 'Astro', 'Next.js', 'Tailwind CSS', 'Vue', 'HTML5 / CSS3'],
  },
  {
    titleKey: 'skills.group.backend',
    icon: 'server',
    items: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'GraphQL', 'REST'],
  },
  {
    titleKey: 'skills.group.databases',
    icon: 'database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma'],
  },
  {
    titleKey: 'skills.group.devops',
    icon: 'cloud',
    items: ['Docker', 'AWS', 'GitHub Actions', 'CI/CD', 'Kubernetes', 'Vercel'],
  },
  {
    titleKey: 'skills.group.tools',
    icon: 'wrench',
    items: ['Git', 'Linux', 'Figma', 'Jest', 'Vite', 'Postman'],
  },
];
