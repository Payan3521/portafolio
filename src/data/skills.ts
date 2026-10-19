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
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Kotlin', 'SQL'],
  },
  {
    titleKey: 'skills.group.frontend',
    icon: 'layout',
    items: ['React', 'Angular', 'Vue', 'Next.js', 'Astro', 'HTML5', 'CSS3'],
  },
  {
    titleKey: 'skills.group.backend',
    icon: 'server',
    items: [
      'Spring Boot',
      'Flask',
      'Django',
      'FastAPI',
      'NestJS',
      'ASP.NET',
      'Express',
      'REST APIs',
      'API Design',
      'WebSockets',
    ],
  },
  {
    titleKey: 'skills.group.mobile',
    icon: 'smartphone',
    items: ['Kotlin', 'Android'],
  },
  {
    titleKey: 'skills.group.databases',
    icon: 'database',
    items: ['PostgreSQL', 'Redis', 'SQL'],
  },
  {
    titleKey: 'skills.group.cloud',
    icon: 'cloud',
    items: ['AWS EC2', 'AWS S3', 'CloudFront', 'CloudWatch', 'Serverless', 'Vercel', 'Render', 'Supabase'],
  },
  {
    titleKey: 'skills.group.devops',
    icon: 'terminal',
    items: ['Docker', 'Terraform', 'GitHub Actions', 'GHCR', 'CI/CD', 'Tailscale', 'DNS'],
  },
  {
    titleKey: 'skills.group.security',
    icon: 'shield',
    items: ['OAuth 2.0', 'JWT', 'CORS', 'Cookies', 'SSL / TLS'],
  },
  {
    titleKey: 'skills.group.ai',
    icon: 'sparkles',
    items: ['Gemini API', 'OpenCode', 'MCP', 'Chatbots', 'n8n'],
  },
  {
    titleKey: 'skills.group.tools',
    icon: 'wrench',
    items: ['Git', 'Linux', 'Postman'],
  },
];
