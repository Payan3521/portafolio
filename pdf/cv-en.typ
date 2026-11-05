// ============================================================
//  CV — Juan Pablo Bedoya Payán (EN)
//  Compile: typst compile cv-en.typ cv-en.pdf
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
//  DOCUMENT
// ============================================================

// ── HEADER ───────────────────────────────────────────────
#align(center)[
  #text(size: 27pt, weight: 800, fill: ink, tracking: 0.3pt)[Juan Pablo Bedoya Payán]
  #v(6pt)
  #text(size: 11.5pt, weight: 500, fill: accent)[Full Stack Developer · Software Engineering Student (7th/8th semester)]
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

// ── PROFILE ──────────────────────────────────────────────
#section("Profile")

Software Engineering student at Universidad EAM (7th of 8 semesters) and Technical Degree in Software Analysis and Development from SENA. Full Stack developer with experience in backend, frontend, mobile, cloud (AWS), DevOps and AI integration. Strengths: technical leadership, clear communication, self-learning and documentation. English B2. Available from 2026.

// ── EXPERIENCE ───────────────────────────────────────────
#section("Experience")

#entry(
  "Universidad EAM — Innovation Lab",
  [
    Full stack development of university-owned products and solutions for external clients, across the entire lifecycle: architecture, backend, frontend, mobile, cloud (AWS), DevOps, CI/CD, testing and documentation.

    #v(3pt)
    #text(size: 9.5pt, weight: 600, fill: ink)[Key achievements]
    #v(2pt)
    #bullets((
      [Led Prospectiva 2050 (monorepo NestJS + 3 React apps + PostgreSQL), deployed on AWS EC2 with CI/CD to GHCR and Traefik.],
      [Built Emdecob: corporate site in Next.js 14 and Tailwind, with technical SEO, blog and legal pages.],
      [Built Destino Salento, a tourism platform for Salento and the Cocora Valley, and contributed to eam.edu.co.],
      [Automated processes for ESSeguros and integrated APIs; developed Rural Adventure and SOS Pets.],
    ))

    #v(4pt)
    #text(size: 9.5pt, weight: 600, fill: ink)[Core stack]
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
  date: "Mar 2025 – Present",
  subtitle: "Armenia, Quindío · Hybrid / Remote",
)

// ── FEATURED PROJECTS ────────────────────────────────────
#section("Featured Projects")

#entry(
  "Prospectiva 2050 — Horizonte Quindío",
  [Platform and information repository with a dynamic public site, role-based backoffice, message inbox and document repository. Monorepo NestJS + 3 React apps + PostgreSQL, AWS EC2, CI/CD and Traefik.],
  date: "Featured",
  subtitle: link("https://horizontequindio2050.com")[horizontequindio2050.com],
)

#entry(
  "Emdecob — Corporate Website",
  [Corporate site with service pages, technical SEO blog, content management and legal pages. Next.js 14, TypeScript and Tailwind; deployed on Vercel/AWS.],
  date: "Featured",
  subtitle: [#link("https://emdecob.com")[emdecob.com]  ·  #link("https://github.com/Payan3521/emdecob")[github.com/Payan3521/emdecob]],
)

#entry(
  "Destino Salento — Tourism Platform",
  [Tourism and experience platform for Salento and the Cocora Valley: coffee tours, ecological routes, bookings and local content. Next.js and TypeScript, deployed to production.],
  date: "Featured",
  subtitle: [#link("https://destinosalento.com")[destinosalento.com]  ·  #link("https://github.com/Innovacion-EAM/destino-salento-v2")[github.com/Innovacion-EAM/destino-salento-v2]],
)

#entry(
  "Universidad EAM Web Platform",
  [Institutional website with academic programs, admissions and news. Development and implementation as part of the Innovation Lab.],
  date: "Collaboration",
  subtitle: link("https://www.eam.edu.co")[eam.edu.co],
)

// ── EDUCATION ────────────────────────────────────────────
#section("Education")

#entry(
  "Universidad EAM",
  [Software Engineering — 7th of 8 semesters (since February 2024). Algorithms, data structures, databases, architecture, networking and agile methodologies.],
  date: "2024 – Present",
)

#entry(
  "SENA — Technical High School",
  [Technical Degree in Software Analysis and Development. Programming, relational databases, web development, Scrum, Git and testing fundamentals.],
  date: "2022 – 2023",
)

// ── TECHNICAL SKILLS ─────────────────────────────────────
#section("Technical Skills")

#skill-group("Languages", (
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

#skill-group("Backend & Data", (
  (name: "Node.js", level: "expert"),
  (name: "NestJS", level: "advanced"),
  (name: "Express", level: "expert"),
  (name: "FastAPI", level: "advanced"),
  (name: "REST APIs", level: "expert"),
  (name: "API Design", level: "advanced"),
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

#skill-group("Testing & Quality", (
  (name: "Jest", level: "advanced"),
  (name: "Vitest", level: "advanced"),
  (name: "Playwright", level: "intermediate"),
  (name: "ESLint", level: "expert"),
  (name: "Prettier", level: "expert"),
  (name: "TypeScript Strict", level: "expert"),
))

#skill-group("AI & Automation", (
  (name: "Gemini API", level: "advanced"),
  (name: "OpenAI API", level: "advanced"),
  (name: "Prompt Engineering", level: "expert"),
  (name: "n8n", level: "intermediate"),
  (name: "MCP", level: "intermediate"),
  (name: "OpenCode", level: "advanced"),
))

#skill-group("Tools", (
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

// ── LANGUAGES ────────────────────────────────────────────
#section("Languages")
#text(weight: 600, fill: ink)[Spanish:] Native  ·  #text(weight: 600, fill: ink)[English:] B2 — Upper intermediate (fluent reading and writing)
