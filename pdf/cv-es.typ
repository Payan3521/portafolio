// ============================================================
//  CV — Juan Pablo Bedoya Payán (ES)
//  Compilar: typst compile cv-es.typ cv-es.pdf
// ============================================================

// ── Configuración de página ──────────────────────────────
#set page(
  margin: (x: 2.5cm, y: 2cm),
  paper: "a4",
  numbering: "1 / {total}",
  header: [
    #align(center)[
      #text(size: 7.5pt, fill: gray, weight: 500)[JUAN PABLO BEDOYA PAYÁN · FULL STACK DEVELOPER · pablobedoya3521\@gmail.com · +57 301 929 8995 · Armenia, Quindío, Colombia]
    ]
  ],
  footer: [
    #align(center)[
      #text(size: 7pt, fill: gray)[github.com/Payan3521 · linkedin.com/in/juan-pablo-bedoya-payán · wa.me/573019298995]
    ]
  ]
)

// ── Estilos globales ─────────────────────────────────────
#set text(font: "DejaVu Sans", size: 10.5pt)
#set par(justify: true, spacing: 4pt, leading: 1.5em)

// Colores
#let accent = rgb("#8b5cf6")
#let accent2 = rgb("#22d3ee")
#let dark = rgb("#080810")
#let muted = rgb("#99a2bd")
#let soft = rgb("#f8fafc")

// Helpers
#let section-title(title) = {
  v(6pt)
  text(size: 13pt, weight: 700, fill: dark)[upper(title)]
  h(2pt)
  line(length: 100%, stroke: (paint: accent, thickness: 2pt))
  v(10pt)
}

#let bullet-item(title, desc, date: none, location: none) = {
  v(2pt)
  hstack(
    ratio: (1, 1),
    [
      text(weight: 600, size: 10.5pt)[title]
      if date != none { h(4pt) text(size: 9pt, fill: muted)[date] }
      if location != none { h(4pt) text(size: 9pt, fill: muted)[location] }
    ],
    align: right,
  )
  v(1pt)
  indent(12pt)[ text(fill: dark)[desc] ]
  v(4pt)
}

#let level-color = (
  expert: rgb("#10b981"),
  advanced: rgb("#3b82f6"),
  intermediate: rgb("#f59e0b"),
  basic: rgb("#64748b"),
)

#let level-label = (
  expert: "Experto",
  advanced: "Avanzado",
  intermediate: "Intermedio",
  basic: "Básico",
)

#let skill-chip(name, level) = {
  box(
    padding: (x: 6pt, y: 2pt),
    inset: 0pt,
    radius: 4pt,
    fill: level-color.at(level) + 15%,
    stroke: (paint: level-color.at(level), thickness: 0.8pt),
  )[text(size: 8.5pt, weight: 500, fill: level-color.at(level))[name]]
}

#let skill-group(title, skills) = {
  v(6pt)
  text(weight: 600, size: 10pt, fill: dark)[title]
  v(4pt)
  flow(gap: 4pt, ..skills.map(s => skill-chip(s.name, s.level)))
  v(6pt)
}

// ============================================================
//  DOCUMENTO
// ============================================================

// ── HEADER / NOMBRE ──────────────────────────────────────
#align(center)[
  v(-8pt)
  text(size: 28pt, weight: 800, fill: dark)[JUAN PABLO BEDOYA PAYÁN]
  v(2pt)
  text(size: 12pt, weight: 500, fill: accent)[Full Stack Developer · Ingeniería de Software (7.º/8.º semestre)]
  v(2pt)
  text(size: 9pt, fill: muted)[
    pablobedoya3521\@gmail.com · +57 301 929 8995 · Armenia, Quindío, Colombia
    h(4pt) · h(4pt)
    github.com/Payan3521 · linkedin.com/in/juan-pablo-bedoya-payán · wa.me/573019298995
  ]
]

v(10pt)
line(length: 100%, stroke: (paint: accent, thickness: 1.5pt))
v(12pt)

// ── PERFIL ───────────────────────────────────────────────
section-title("Perfil")

Estudiante de Ingeniería de Software en la Universidad EAM (Armenia, Quindío), cursando 7.º de 8 semestres. Inicié la carrera en febrero de 2024 y antes obtuve el título técnico en Análisis y Desarrollo de Software por el SENA (media técnica).

Me desempeño como Full Stack: backend, frontend, móvil, cloud (AWS), DevOps, seguridad e integración de IA. Mis fortalezas: liderazgo técnico, comunicación clara, aprendizaje autodidacta rápido, uso avanzado de IA, visión de futuro, documentación exhaustiva y orden. Inglés A2 avanzado (lectura/escritura). Busco oportunidades a partir de 2026.

v(6pt)

// ── EXPERIENCIA ──────────────────────────────────────────
section-title("Experiencia")

bullet-item(
  "Universidad EAM — Laboratorio de Innovación",
  "Desarrollo full stack de productos propios de la universidad y soluciones para clientes externos. Participación en todo el ciclo: arquitectura, backend, frontend, móvil, cloud (AWS), DevOps, CI/CD, testing y documentación.",
  date: "Mar 2025 – Actualidad",
  location: "Armenia, Quindío (Híbrido/Remoto)"
)

v(2pt)
text(weight: 600, size: 9.5pt)[Logros destacados:]
v(2pt)

bullet-item("", "Lideré el desarrollo end-to-end de Prospectiva 2050 (monorepo NestJS + 3 React apps + PostgreSQL), desplegado en AWS EC2 con CI/CD a GHCR y Traefik.")
bullet-item("", "Construí Emdecob: sitio corporativo Next.js 14 + Tailwind con SEO técnico, blog, gestión de servicios y páginas legales, desplegado en Vercel/AWS.")
bullet-item("", "Colaboré en la plataforma web institucional eam.edu.co (oferta académica, admisiones, noticias).")
bullet-item("", "Automatización de procesos para ESSeguros (cliente externo): integración de APIs, flujos de trabajo y despliegue.")
bullet-item("", "Desarrollé Rural Adventure (turismo rural Quindío) y SOS Pets (plataforma de adopción de mascotas).")

v(4pt)
text(weight: 600, size: 9.5pt, fill: accent)[Stack principal:]
v(2pt)
flow(gap: 4pt,
  skill-chip("TypeScript", "expert"),
  skill-chip("NestJS", "advanced"),
  skill-chip("React", "expert"),
  skill-chip("Next.js", "advanced"),
  skill-chip("PostgreSQL", "advanced"),
  skill-chip("Docker", "expert"),
  skill-chip("AWS", "advanced"),
  skill-chip("GitHub Actions", "expert"),
  skill-chip("Traefik", "advanced"),
  skill-chip("Tailwind CSS", "expert"),
  skill-chip("Prisma", "advanced"),
)

v(10pt)

// ── PROYECTOS DESTACADOS ─────────────────────────────────
section-title("Proyectos Destacados")

bullet-item(
  "Prospectiva 2050 — Horizonte Quindío",
  "Plataforma y repositorio de información: sitio público dinámico (editable sin recompilar), backoffice con roles, bandeja de mensajes con estados, app de repositorio documental con estadísticas. Monorepo: NestJS + 3 React apps + PostgreSQL, AWS EC2, CI/CD GHCR + Traefik.",
  date: "Destacado",
  location: "horizontequindio2050.com"
)

bullet-item(
  "Emdecob — Sitio web corporativo",
  "Sitio completo: servicios (contact center, jurídico, propiedad horizontal, recuperación de cartera), blog con SEO técnico, gestión de contenido sin recompilación, páginas legales. Next.js 14 + TypeScript + Tailwind, Vercel/AWS.",
  date: "Destacado",
  location: "emdecob.com · github.com/Payan3521/emdecob"
)

bullet-item(
  "Plataforma web Universidad EAM",
  "Sitio institucional: oferta académica, admisiones, noticias. Desarrollo e implementación como parte del Laboratorio de Innovación.",
  date: "Colaboración",
  location: "eam.edu.co"
)

v(10pt)

// ── EDUCACIÓN ────────────────────────────────────────────
section-title("Educación")

bullet-item(
  "Universidad EAM",
  "Ingeniería de Software — Cursando 7.º de 8 semestres (iniciado feb 2024). Algoritmos, estructuras de datos, bases de datos, arquitectura, redes, ingeniería de requisitos, metodologías ágiles.",
  date: "2024 – Presente"
)

bullet-item(
  "SENA — Media Técnica",
  "Técnico en Análisis y Desarrollo de Software. Fundamentos de programación, bases de datos relacionales, desarrollo web (HTML, CSS, JavaScript), metodologías ágiles (Scrum), control de versiones (Git) y bases de testing.",
  date: "2022 – 2023"
)

v(10pt)

// ── HABILIDADES TÉCNICAS ─────────────────────────────────
section-title("Habilidades Técnicas")

skill-group("Core Languages", (
  (name: "TypeScript", level: "expert"),
  (name: "JavaScript", level: "expert"),
  (name: "Python", level: "advanced"),
  (name: "SQL", level: "advanced"),
  (name: "Go", level: "intermediate"),
  (name: "Java", level: "intermediate"),
))

skill-group("Frontend", (
  (name: "React", level: "expert"),
  (name: "Next.js", level: "advanced"),
  (name: "Astro", level: "advanced"),
  (name: "Tailwind CSS", level: "expert"),
  (name: "HTML5", level: "expert"),
  (name: "CSS3", level: "expert"),
  (name: "Vue", level: "intermediate"),
  (name: "Angular", level: "basic"),
))

skill-group("Backend", (
  (name: "Node.js", level: "expert"),
  (name: "NestJS", level: "advanced"),
  (name: "Express", level: "expert"),
  (name: "FastAPI", level: "advanced"),
  (name: "REST APIs", level: "expert"),
  (name: "API Design", level: "advanced"),
  (name: "WebSockets", level: "intermediate"),
  (name: "GraphQL", level: "intermediate"),
))

skill-group("Bases de Datos", (
  (name: "PostgreSQL", level: "advanced"),
  (name: "Redis", level: "advanced"),
  (name: "Prisma", level: "advanced"),
  (name: "Drizzle ORM", level: "intermediate"),
  (name: "MongoDB", level: "intermediate"),
))

skill-group("Cloud & DevOps", (
  (name: "AWS EC2", level: "advanced"),
  (name: "AWS S3", level: "advanced"),
  (name: "CloudFront", level: "intermediate"),
  (name: "Docker", level: "expert"),
  (name: "GitHub Actions", level: "expert"),
  (name: "Terraform", level: "intermediate"),
  (name: "Traefik", level: "advanced"),
  (name: "Vercel", level: "advanced"),
  (name: "CI/CD", level: "expert"),
))

skill-group("Desarrollo Móvil", (
  (name: "Kotlin", level: "advanced"),
  (name: "Android", level: "advanced"),
  (name: "React Native", level: "intermediate"),
))

skill-group("Testing & Calidad", (
  (name: "Jest", level: "advanced"),
  (name: "Vitest", level: "advanced"),
  (name: "Playwright", level: "intermediate"),
  (name: "ESLint", level: "expert"),
  (name: "Prettier", level: "expert"),
  (name: "TypeScript Strict", level: "expert"),
))

skill-group("IA & Automatización", (
  (name: "Gemini API", level: "advanced"),
  (name: "OpenAI API", level: "advanced"),
  (name: "Prompt Engineering", level: "expert"),
  (name: "n8n", level: "intermediate"),
  (name: "MCP", level: "intermediate"),
  (name: "OpenCode", level: "advanced"),
))

skill-group("Herramientas & Flujo", (
  (name: "Git", level: "expert"),
  (name: "GitHub", level: "expert"),
  (name: "Linux", level: "advanced"),
  (name: "VS Code", level: "expert"),
  (name: "Postman", level: "advanced"),
  (name: "Figma", level: "intermediate"),
  (name: "Tailscale", level: "intermediate"),
  (name: "DNS Management", level: "intermediate"),
))

v(10pt)

// ── IDIOMAS ──────────────────────────────────────────────
section-title("Idiomas")
bullet-item("Español", "Nativo")
bullet-item("Inglés", "A2 Avanzado — Lectura/escritura fluida, habla/escucha en desarrollo")

v(6pt)
align(center)[ text(size: 8pt, fill: gray, weight: 500)[— Fin del currículum —] ]