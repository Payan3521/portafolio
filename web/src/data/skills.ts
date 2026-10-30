import type { UIKey } from '../i18n/ui';

export interface SkillGroup {
  /** Clave de traducción para el título del grupo */
  titleKey: UIKey;
  icon: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'basic';
  category: 'core' | 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'testing' | 'ai' | 'tools';
}

export const skillGroups: SkillGroup[] = [
  {
    titleKey: 'skills.group.core',
    icon: 'code',
    items: [
      { name: 'TypeScript', level: 'expert', category: 'core' },
      { name: 'JavaScript', level: 'expert', category: 'core' },
      { name: 'Python', level: 'advanced', category: 'core' },
      { name: 'SQL', level: 'advanced', category: 'core' },
      { name: 'Go', level: 'intermediate', category: 'core' },
      { name: 'Java', level: 'intermediate', category: 'core' },
    ],
  },
  {
    titleKey: 'skills.group.frontend',
    icon: 'layout',
    items: [
      { name: 'React', level: 'expert', category: 'frontend' },
      { name: 'Next.js', level: 'advanced', category: 'frontend' },
      { name: 'Astro', level: 'advanced', category: 'frontend' },
      { name: 'Tailwind CSS', level: 'expert', category: 'frontend' },
      { name: 'HTML5', level: 'expert', category: 'frontend' },
      { name: 'CSS3', level: 'expert', category: 'frontend' },
      { name: 'Vue', level: 'intermediate', category: 'frontend' },
      { name: 'Angular', level: 'basic', category: 'frontend' },
    ],
  },
  {
    titleKey: 'skills.group.backend',
    icon: 'server',
    items: [
      { name: 'Node.js', level: 'expert', category: 'backend' },
      { name: 'NestJS', level: 'advanced', category: 'backend' },
      { name: 'Express', level: 'expert', category: 'backend' },
      { name: 'FastAPI', level: 'advanced', category: 'backend' },
      { name: 'REST APIs', level: 'expert', category: 'backend' },
      { name: 'API Design', level: 'advanced', category: 'backend' },
      { name: 'WebSockets', level: 'intermediate', category: 'backend' },
      { name: 'GraphQL', level: 'intermediate', category: 'backend' },
    ],
  },
  {
    titleKey: 'skills.group.databases',
    icon: 'database',
    items: [
      { name: 'PostgreSQL', level: 'advanced', category: 'database' },
      { name: 'Redis', level: 'advanced', category: 'database' },
      { name: 'Prisma', level: 'advanced', category: 'database' },
      { name: 'Drizzle ORM', level: 'intermediate', category: 'database' },
      { name: 'MongoDB', level: 'intermediate', category: 'database' },
    ],
  },
  {
    titleKey: 'skills.group.cloud',
    icon: 'cloud',
    items: [
      { name: 'AWS EC2', level: 'advanced', category: 'cloud' },
      { name: 'AWS S3', level: 'advanced', category: 'cloud' },
      { name: 'CloudFront', level: 'intermediate', category: 'cloud' },
      { name: 'Docker', level: 'expert', category: 'cloud' },
      { name: 'GitHub Actions', level: 'expert', category: 'cloud' },
      { name: 'Terraform', level: 'intermediate', category: 'cloud' },
      { name: 'Traefik', level: 'advanced', category: 'cloud' },
      { name: 'Vercel', level: 'advanced', category: 'cloud' },
      { name: 'CI/CD', level: 'expert', category: 'cloud' },
    ],
  },
  {
    titleKey: 'skills.group.mobile',
    icon: 'smartphone',
    items: [
      { name: 'Kotlin', level: 'advanced', category: 'mobile' },
      { name: 'Android', level: 'advanced', category: 'mobile' },
      { name: 'React Native', level: 'intermediate', category: 'mobile' },
    ],
  },
  {
    titleKey: 'skills.group.testing',
    icon: 'check',
    items: [
      { name: 'Jest', level: 'advanced', category: 'testing' },
      { name: 'Vitest', level: 'advanced', category: 'testing' },
      { name: 'Playwright', level: 'intermediate', category: 'testing' },
      { name: 'ESLint', level: 'expert', category: 'testing' },
      { name: 'Prettier', level: 'expert', category: 'testing' },
      { name: 'TypeScript Strict', level: 'expert', category: 'testing' },
    ],
  },
  {
    titleKey: 'skills.group.ai',
    icon: 'sparkles',
    items: [
      { name: 'Gemini API', level: 'advanced', category: 'ai' },
      { name: 'OpenAI API', level: 'advanced', category: 'ai' },
      { name: 'Prompt Engineering', level: 'expert', category: 'ai' },
      { name: 'n8n', level: 'intermediate', category: 'ai' },
      { name: 'MCP', level: 'intermediate', category: 'ai' },
      { name: 'OpenCode', level: 'advanced', category: 'ai' },
    ],
  },
  {
    titleKey: 'skills.group.tools',
    icon: 'wrench',
    items: [
      { name: 'Git', level: 'expert', category: 'tools' },
      { name: 'GitHub', level: 'expert', category: 'tools' },
      { name: 'Linux', level: 'advanced', category: 'tools' },
      { name: 'VS Code', level: 'expert', category: 'tools' },
      { name: 'Postman', level: 'advanced', category: 'tools' },
      { name: 'Figma', level: 'intermediate', category: 'tools' },
      { name: 'Tailscale', level: 'intermediate', category: 'tools' },
      { name: 'DNS Management', level: 'intermediate', category: 'tools' },
    ],
  },
];