# 🚀 Portafolio — Juan Pablo Bedoya Payán

> **Full Stack Developer · Software Engineering Student (7.º/8.º semestre)**  
> Construyo aplicaciones web escalables con código limpio, arquitectura sólida y una cultura de documentación y automatización. Lidero, aprendo de forma continua e integro IA para potenciar soluciones de alto impacto.

[![Website](https://img.shields.io/badge/🌐_Sitio_Web-payan3521.github.io/portafolio-8b5cf6?style=for-the-badge)](https://payan3521.github.io/portafolio/)
[![CV Español](https://img.shields.io/badge/📄_CV_ES-PDF-22d3ee?style=for-the-badge)](pdf/cv-es.pdf)
[![CV English](https://img.shields.io/badge/📄_CV_EN-PDF-22d3ee?style=for-the-badge)](pdf/cv-en.pdf)
[![Stack](https://img.shields.io/badge/Stack-TypeScript%20·%20React%20·%20Node%20·%20AWS%20·%20Docker-080810?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/Payan3521)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📁 Estructura del repositorio

```
portafolio/
├── 🌐 web/                 # Sitio web (Astro 7 + Tailwind 4)
│   ├── src/                # Componentes, layouts, datos, estilos
│   ├── public/             # Assets estáticos (imágenes, CVs servidos en /cv/)
│   ├── dist/               # Build de producción (generado, no commitear)
│   ├── package.json
│   └── astro.config.mjs
├── 📄 pdf/                 # PDFs fuente (master copies)
│   ├── cv-es.pdf           # Hoja de vida en español
│   └── cv-en.pdf           # Resume in English
└── 📋 README.md            # Este archivo
```

---

## ✨ Características del sitio web

| Feature | Descripción |
|---------|-------------|
| 🌍 **Bilingüe** | Español / Inglés con detección automática de idioma del navegador |
| 🌙 **Dark Mode** | Tema oscuro moderno con acentos cian → violeta |
| ⚡ **Rendimiento** | HTML estático, 0 JS innecesario, fuentes optimizadas, lazy loading |
| 🎬 **Animaciones** | Scroll reveal, progress bar, parallax blobs, hover effects |
| 🔍 **SEO completo** | Meta tags, Open Graph, Twitter Cards, JSON-LD (Person), hreflang, sitemap.xml |
| ♿ **Accesibilidad** | Semántica HTML5, skip links, focus-visible, prefers-reduced-motion |
| 📱 **Responsive** | Mobile-first, breakpoints sm/md/lg/xl |
| 📬 **Contacto** | Formulario Web3Forms + fallback mailto (sin backend) |
| 📄 **CV descargable** | Un clic para descargar PDF en el idioma actual |

---

## 🛠️ Stack tecnológico

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | Astro 7, Tailwind CSS 4, TypeScript, React (islands) |
| **Backend/Full Stack** | Node.js, NestJS, Express, FastAPI, REST APIs, API Design |
| **Bases de datos** | PostgreSQL, Redis, Prisma, Drizzle ORM |
| **Cloud & DevOps** | AWS (EC2, S3, CloudFront), Docker, GitHub Actions, Terraform, Traefik, Tailscale |
| **Móvil** | Kotlin, Android, React Native (básico) |
| **IA & Automatización** | Gemini API, OpenAI, Prompt Engineering, n8n, MCP, OpenCode |
| **Testing/Calidad** | Jest, Vitest, Playwright, ESLint, Prettier, TypeScript strict |

---

## 🏃‍♂️ Desarrollo local

```bash
# 1. Entrar al proyecto web
cd web

# 2. Instalar dependencias
npm install

# 3. Desarrollo (http://localhost:4321)
npm run dev

# 4. Build de producción (genera web/dist/)
npm run build

# 5. Previsualizar build
npm run preview
```

> **Requisitos:** Node.js ≥ 22, npm ≥ 9

---

## ☁️ Despliegue

El sitio es **100% estático** (`web/dist/`). Despliegue gratuito en:

| Plataforma | Comando build | Carpeta salida |
|------------|---------------|----------------|
| **Vercel** | `npm run build` | `dist` (auto-detecta Astro) |
| **Netlify** | `npm run build` | `dist` |
| **GitHub Pages** | `npm run build` | `dist` (configurar `site`/`base` en `astro.config.mjs`) |
| **Cloudflare Pages** | `npm run build` | `dist` |
| **Render** | `npm run build` | `dist` |
| **AWS S3 + CloudFront** | `npm run build` | `dist` |

---

## 📄 CVs (PDF)

Los PDFs maestros viven en `/pdf/`:
- **`pdf/cv-es.pdf`** — Hoja de vida en español
- **`pdf/cv-en.pdf`** — Resume in English

> Estos mismos archivos se copian a `web/public/cv/` para servirse en la web (`/cv/cv-juanpablo-es.pdf`).

### Regenerar los PDFs
1. Edita tu CV en tu editor preferido (Typst, LaTeX, Word, Figma, Canva, etc.)
2. Exporta a PDF
3. Reemplaza los archivos en `pdf/`
4. Copia a `web/public/cv/` (o ejecuta `npm run sync-cv` si añades el script)
5. Haz commit y despliega

---

## ✍️ Personalizar el contenido

Todos los textos editables están en **`web/src/data/`**:

| Archivo | Qué contiene |
|---------|--------------|
| `profile.ts` | Nombre, rol, bio, ubicación, email, teléfono, redes, foto, URLs de CV |
| `experience.ts` | Experiencia laboral (empresa, rol, fechas, logros, tech stack) |
| `education.ts` | Estudios y certificaciones |
| `projects.ts` | Proyectos (título, descripción, imagen, tags, repo, demo) |
| `skills.ts` | Grupos de habilidades con niveles (experto/avanzado/intermedio/básico) |

Los textos de interfaz (menús, botones, labels) están en **`web/src/i18n/ui.ts`** (ES/EN).

---

## 🎨 Tema y colores

Edita `web/src/styles/global.css` → sección `@theme`:

```css
@theme {
  --color-bg: #080810;        /* Fondo principal */
  --color-accent: #8b5cf6;    /* Violeta (primario) */
  --color-accent-2: #22d3ee;  /* Cian (secundario) */
  --font-sans: "Inter", ...;
  --font-mono: "JetBrains Mono", ...;
}
```

---

## ✅ Checklist antes de publicar

- [x] Reemplazar datos personales en `web/src/data/profile.ts`
- [ ] Añadir foto real en `web/public/images/profile.jpg` (≈800×1000px)
- [x] Actualizar experiencia en `web/src/data/experience.ts`
- [x] Actualizar estudios en `web/src/data/education.ts`
- [x] Actualizar proyectos en `web/src/data/projects.ts`
- [x] Actualizar habilidades en `web/src/data/skills.ts`
- [ ] **Regenerar PDFs** y ponerlos en `pdf/` + `web/public/cv/`
- [ ] Configurar `WEB3FORMS_KEY` en `web/src/components/Contact.astro`
- [ ] Poner tu dominio en `web/astro.config.mjs` (`site`) y `web/src/data/profile.ts` (`site`)
- [ ] Actualizar `web/public/robots.txt` con tu dominio
- [ ] Regenerar `web/public/og-image.png` (1200×630px) con tu branding
- [ ] Reemplazar `web/public/favicon.svg`
- [ ] Build y test: `cd web && npm run build && npm run preview`

---

## 📄 Licencia

MIT License — si te sirve de base para tu portafolio, ¡adelante!  
Un ⭐ en el repo se agradece si te fue útil.

---

## 🤝 Conectemos

[![GitHub](https://img.shields.io/badge/GitHub-Payan3521-181717?style=flat-square&logo=github)](https://github.com/Payan3521)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Juan%20Pablo%20Bedoya%20Payán-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/juan-pablo-bedoya-payán-25aa1b427/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-3019298995-25D366?style=flat-square&logo=whatsapp)](https://wa.me/573019298995)
[![Email](https://img.shields.io/badge/Email-pablobedoya3521%40gmail.com-8b5cf6?style=flat-square&logo=gmail)](mailto:pablobedoya3521@gmail.com)

---

> **Hecho con ❤️ y Astro** — *Building software with attention to detail.*