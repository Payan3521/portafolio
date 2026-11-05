// ============================================================
//  CV — Juan Pablo Bedoya Payán (ES)
//  Compilar: typst compile cv-es.typ cv-es.pdf
// ============================================================

#set page(
  paper: "a4",
  margin: (x: 2.1cm, top: 1.5cm, bottom: 1.5cm),
  footer: [
    #set text(size: 7.5pt, fill: rgb("#94a3b8"))
    #grid(
      columns: (1fr, auto, 1fr),
      align: (left, center, right),
      [Juan Pablo Bedoya Payán],
      context counter(page).display(),
      [payan3521.github.io/portafolio],
    )
  ],
)

#set text(font: "DejaVu Sans", size: 10pt, fill: rgb("#1e293b"))
#set par(spacing: 5pt, leading: 1.55em)
#show link: set text(fill: rgb("#7c3aed"))

#let accent = rgb("#7c3aed")
#let ink = rgb("#0f172a")
#let muted = rgb("#64748b")
#let line-color = rgb("#e2e8f0")

// ── Helpers ──────────────────────────────────────────────
#let section(title) = block(sticky: true, {
  v(9pt)
  text(size: 10pt, weight: 700, fill: accent, tracking: 1.4pt)[#upper(title)]
  v(2pt)
  line(length: 100%, stroke: (paint: line-color, thickness: 1pt))
  v(6pt)
})

#let entry(title, body, date: "", subtitle: none) = {
  v(4pt)
  block(sticky: true, {
    grid(
      columns: (1fr, auto),
      column-gutter: 14pt,
      text(size: 10.5pt, weight: 700, fill: ink)[#title],
      text(size: 8.5pt, weight: 500, fill: muted)[#date],
    )
    if subtitle != none {
      v(1.5pt)
      text(size: 9pt, fill: muted)[#subtitle]
    }
    v(3pt)
  })
  body
  v(5pt)
}

#let bullets(items) = {
  for item in items {
    grid(
      columns: (9pt, 1fr),
      column-gutter: 5pt,
      text(size: 9pt, fill: accent)[•],
      text(size: 9.5pt)[#item],
    )
    v(2.5pt)
  }
}

#let level-color = (
  expert: rgb("#059669"),
  advanced: rgb("#2563eb"),
  intermediate: rgb("#d97706"),
  basic: rgb("#64748b"),
)

#let chip(name, level) = box(
  inset: (x: 5pt, y: 2pt),
  radius: 3pt,
  fill: level-color.at(level).lighten(91%),
  stroke: (paint: level-color.at(level).lighten(45%), thickness: 0.6pt),
  text(size: 7.5pt, weight: 500, fill: level-color.at(level))[#name],
)

#let skill-group(title, skills) = {
  grid(
    columns: (3.6cm, 1fr),
    column-gutter: 10pt,
    align: (left + top, left + top),
    text(size: 8.5pt, weight: 600, fill: ink)[#title],
    grid(
      columns: 4,
      column-gutter: 4pt,
      row-gutter: 4pt,
      ..skills.map(s => chip(s.name, s.level)),
    ),
  )
  v(3pt)
}

// ============================================================
//  DOCUMENTO
// ============================================================

// ── ENCABEZADO ───────────────────────────────────────────
#align(center)[
  #text(size: 27pt, weight: 800, fill: ink, tracking: 0.3pt)[Juan Pablo Bedoya Payán]
  #v(6pt)
  #text(size: 11.5pt, weight: 500, fill: accent)[Full Stack Developer · Ingeniería de Software (7.º/8.º semestre)]
  #v(9pt)
  #text(size: 9pt, fill: muted)[
    #link("mailto:pablobedoya3521@gmail.com")[pablobedoya3521\@gmail.com]  ·  +57 301 929 8995  ·  Armenia, Quindío, Colombia
  ]
  #v(2pt)
  #text(size: 9pt, fill: muted)[
    #link("https://github.com/Payan3521")[github.com/Payan3521]  ·  #link("https://www.linkedin.com/in/juan-pablo-bedoya-pay%C3%A1n-25aa1b427/")[LinkedIn]  ·  #link("https://wa.me/573019298995")[WhatsApp]  ·  #link("https://payan3521.github.io/portafolio/")[payan3521.github.io/portafolio]
  ]
]

#v(10pt)
#line(length: 100%, stroke: (paint: accent, thickness: 1.5pt))

// ── PERFIL ───────────────────────────────────────────────
#section("Perfil")

Estudiante de Ingeniería de Software en la Universidad EAM (7.º de 8 semestres) y técnico en Análisis y Desarrollo de Software del SENA. Desarrollador Full Stack con experiencia en backend, frontend, móvil, cloud (AWS), DevOps e IA. Fortalezas: liderazgo técnico, comunicación clara, aprendizaje autónomo y documentación. Inglés B2. Disponible desde 2026.

// ── EXPERIENCIA ──────────────────────────────────────────
#section("Experiencia")

#entry(
  "Universidad EAM — Laboratorio de Innovación",
  [
    Desarrollo full stack de productos propios de la universidad y soluciones para clientes externos, en todo el ciclo: arquitectura, backend, frontend, móvil, cloud (AWS), DevOps, CI/CD, testing y documentación.

    #v(3pt)
    #text(size: 9.5pt, weight: 600, fill: ink)[Logros destacados]
    #v(2pt)
    #bullets((
      [Lideré Prospectiva 2050 (monorepo NestJS + 3 apps React + PostgreSQL), desplegado en AWS EC2 con CI/CD a GHCR y Traefik.],
      [Construí Emdecob: sitio corporativo en Next.js 14 y Tailwind, con SEO técnico, blog y páginas legales.],
      [Desarrollé Destino Salento, plataforma de turismo para Salento y el Valle de Cocora, y colaboré en eam.edu.co.],
      [Automaticé procesos para ESSeguros e integré APIs; desarrollé Rural Adventure y SOS Pets.],
    ))

    #v(4pt)
    #text(size: 9.5pt, weight: 600, fill: ink)[Stack principal]
    #v(3pt)
    #grid(
      columns: 4,
      column-gutter: 4pt,
      row-gutter: 4pt,
      chip("TypeScript", "expert"),
      chip("NestJS", "advanced"),
      chip("React", "expert"),
      chip("Next.js", "advanced"),
      chip("PostgreSQL", "advanced"),
      chip("Docker", "expert"),
      chip("AWS", "advanced"),
      chip("GitHub Actions", "expert"),
      chip("Traefik", "advanced"),
      chip("Tailwind CSS", "expert"),
      chip("Prisma", "advanced"),
    )
  ],
  date: "Mar 2025 – Actualidad",
  subtitle: "Armenia, Quindío · Híbrido / Remoto",
)

// ── PROYECTOS DESTACADOS ─────────────────────────────────
#section("Proyectos Destacados")

#entry(
  "Prospectiva 2050 — Horizonte Quindío",
  [Plataforma y repositorio de información con sitio público dinámico, backoffice con roles, bandeja de mensajes y repositorio documental. Monorepo NestJS + 3 apps React + PostgreSQL, AWS EC2, CI/CD y Traefik.],
  date: "Destacado",
  subtitle: link("https://horizontequindio2050.com")[horizontequindio2050.com],
)

#entry(
  "Emdecob — Sitio web corporativo",
  [Sitio corporativo con páginas de servicios, blog con SEO técnico, gestión de contenido y páginas legales. Next.js 14, TypeScript y Tailwind; desplegado en Vercel/AWS.],
  date: "Destacado",
  subtitle: [#link("https://emdecob.com")[emdecob.com]  ·  #link("https://github.com/Payan3521/emdecob")[github.com/Payan3521/emdecob]],
)

#entry(
  "Destino Salento — Plataforma de turismo",
  [Plataforma de turismo y experiencias para Salento y el Valle de Cocora: tours cafeteros, rutas ecológicas, reservas y contenido local. Next.js y TypeScript, desplegada en producción.],
  date: "Destacado",
  subtitle: [#link("https://destinosalento.com")[destinosalento.com]  ·  #link("https://github.com/Innovacion-EAM/destino-salento-v2")[github.com/Innovacion-EAM/destino-salento-v2]],
)

#entry(
  "Plataforma web Universidad EAM",
  [Sitio institucional con oferta académica, admisiones y noticias. Desarrollo e implementación como parte del Laboratorio de Innovación.],
  date: "Colaboración",
  subtitle: link("https://www.eam.edu.co")[eam.edu.co],
)

// ── EDUCACIÓN ────────────────────────────────────────────
#section("Educación")

#entry(
  "Universidad EAM",
  [Ingeniería de Software — 7.º de 8 semestres (desde febrero de 2024). Algoritmos, estructuras de datos, bases de datos, arquitectura, redes y metodologías ágiles.],
  date: "2024 – Presente",
)

#entry(
  "SENA — Media Técnica",
  [Técnico en Análisis y Desarrollo de Software. Programación, bases de datos relacionales, desarrollo web, Scrum, Git y fundamentos de testing.],
  date: "2022 – 2023",
)

// ── HABILIDADES TÉCNICAS ─────────────────────────────────
#section("Habilidades Técnicas")

#skill-group("Lenguajes", (
  (name: "TypeScript", level: "expert"),
  (name: "JavaScript", level: "expert"),
  (name: "Python", level: "advanced"),
  (name: "SQL", level: "advanced"),
  (name: "Go", level: "intermediate"),
  (name: "Java", level: "intermediate"),
  (name: "Kotlin", level: "advanced"),
))

#skill-group("Frontend", (
  (name: "React", level: "expert"),
  (name: "Next.js", level: "advanced"),
  (name: "Astro", level: "advanced"),
  (name: "Tailwind CSS", level: "expert"),
  (name: "HTML5", level: "expert"),
  (name: "CSS3", level: "expert"),
  (name: "Vue", level: "intermediate"),
  (name: "Angular", level: "basic"),
  (name: "React Native", level: "intermediate"),
))

#skill-group("Backend & Datos", (
  (name: "Node.js", level: "expert"),
  (name: "NestJS", level: "advanced"),
  (name: "Express", level: "expert"),
  (name: "FastAPI", level: "advanced"),
  (name: "REST APIs", level: "expert"),
  (name: "Diseño de APIs", level: "advanced"),
  (name: "WebSockets", level: "intermediate"),
  (name: "GraphQL", level: "intermediate"),
  (name: "PostgreSQL", level: "advanced"),
  (name: "Redis", level: "advanced"),
  (name: "Prisma", level: "advanced"),
  (name: "Drizzle ORM", level: "intermediate"),
  (name: "MongoDB", level: "intermediate"),
))

#skill-group("Cloud & DevOps", (
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

#skill-group("Testing & Calidad", (
  (name: "Jest", level: "advanced"),
  (name: "Vitest", level: "advanced"),
  (name: "Playwright", level: "intermediate"),
  (name: "ESLint", level: "expert"),
  (name: "Prettier", level: "expert"),
  (name: "TypeScript Strict", level: "expert"),
))

#skill-group("IA & Automatización", (
  (name: "Gemini API", level: "advanced"),
  (name: "OpenAI API", level: "advanced"),
  (name: "Prompt Engineering", level: "expert"),
  (name: "n8n", level: "intermediate"),
  (name: "MCP", level: "intermediate"),
  (name: "OpenCode", level: "advanced"),
))

#skill-group("Herramientas", (
  (name: "Git", level: "expert"),
  (name: "GitHub", level: "expert"),
  (name: "Linux", level: "advanced"),
  (name: "VS Code", level: "expert"),
  (name: "Postman", level: "advanced"),
  (name: "Figma", level: "intermediate"),
  (name: "Android", level: "advanced"),
  (name: "Tailscale", level: "intermediate"),
  (name: "DNS", level: "intermediate"),
))

// ── IDIOMAS ──────────────────────────────────────────────
#section("Idiomas")
#text(weight: 600, fill: ink)[Español:] Nativo  ·  #text(weight: 600, fill: ink)[Inglés:] B2 — Intermedio alto (lectura y escritura fluidas)
