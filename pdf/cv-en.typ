// ============================================================
//  CV — Juan Pablo Bedoya Payán (EN)
//  Compile: typst compile cv-en.typ cv-en.pdf
// ============================================================

// ── Page Setup ───────────────────────────────────────────
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

// ── Global Styles ────────────────────────────────────────
#set text(font: "DejaVu Sans", size: 10.5pt)
#set par(justify: true, spacing: 4pt, leading: 1.5em)

// Colors
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
  expert: "Expert",
  advanced: "Advanced",
  intermediate: "Intermediate",
  basic: "Basic",
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
//  DOCUMENT
// ============================================================

// ── HEADER / NAME ────────────────────────────────────────
#align(center)[
  v(-8pt)
  text(size: 28pt, weight: 800, fill: dark)[JUAN PABLO BEDOYA PAYÁN]
  v(2pt)
  text(size: 12pt, weight: 500, fill: accent)[Full Stack Developer · Software Engineering Student (7th/8th semester)]
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

// ── PROFILE ──────────────────────────────────────────────
section-title("Profile")

Software Engineering student at Universidad EAM (Armenia, Quindío), currently in 7th of 8 semesters. Started in February 2024, previously earned a Technical Degree in Software Analysis and Development from SENA (high school technical program).

I work as a Full Stack developer: backend, frontend, mobile, cloud (AWS), DevOps, security, and AI integration. Strengths: technical leadership, clear communication, fast self-learning, advanced AI usage, future vision, thorough documentation, and organization. English A2 advanced (reading/writing). Seeking opportunities from 2026 onward.

v(6pt)

// ── EXPERIENCE ───────────────────────────────────────────
section-title("Experience")

bullet-item(
  "Universidad EAM — Innovation Lab",
  "Full stack development of university-owned products and solutions for external clients. Full lifecycle participation: architecture, backend, frontend, mobile, cloud (AWS), DevOps, CI/CD, testing, and technical documentation.",
  date: "Mar 2025 – Present",
  location: "Armenia, Quindío (Hybrid/Remote)"
)

v(2pt)
text(weight: 600, size: 9.5pt)[Key Achievements:]
v(2pt)

bullet-item("", "Led end-to-end development of Prospectiva 2050 (monorepo: NestJS backend + 3 React apps + PostgreSQL), deployed on AWS EC2 with CI/CD to GHCR and Traefik.")
bullet-item("", "Built Emdecob: corporate site with Next.js 14 + Tailwind, technical SEO, blog, service management and legal pages, deployed on Vercel/AWS.")
bullet-item("", "Contributed to institutional website eam.edu.co (academic programs, admissions, news).")
bullet-item("", "Process automation for ESSeguros (external client): API integrations, workflows, and deployment.")
bullet-item("", "Developed Rural Adventure (rural tourism in Quindío) and SOS Pets (pet adoption platform).")

v(4pt)
text(weight: 600, size: 9.5pt, fill: accent)[Core Stack:]
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

// ── FEATURED PROJECTS ────────────────────────────────────
section-title("Featured Projects")

bullet-item(
  "Prospectiva 2050 — Horizonte Quindío",
  "Platform and information repository: dynamic public site (editable without rebuild), role-based backoffice, message inbox with attention states, document repository app with statistics. Monorepo: NestJS + 3 React apps + PostgreSQL, AWS EC2, CI/CD GHCR + Traefik.",
  date: "Featured",
  location: "horizontequindio2050.com"
)

bullet-item(
  "Emdecob — Corporate Website",
  "Complete corporate site: service pages (contact center, legal, property management, debt recovery), blog with technical SEO, content management without rebuild, legal pages. Next.js 14 + TypeScript + Tailwind, Vercel/AWS.",
  date: "Featured",
  location: "emdecob.com · github.com/Payan3521/emdecob"
)

bullet-item(
  "Universidad EAM Web Platform",
  "Institutional website: academic programs, admissions, news. Development and implementation as part of the Innovation Lab team.",
  date: "Collaboration",
  location: "eam.edu.co"
)

v(10pt)

// ── EDUCATION ────────────────────────────────────────────
section-title("Education")

bullet-item(
  "Universidad EAM",
  "Software Engineering — Currently in 7th of 8 semesters (started Feb 2024). Algorithms, data structures, databases, software architecture, networking, requirements engineering, agile methodologies.",
  date: "2024 – Present"
)

bullet-item(
  "SENA — Technical High School",
  "Technical Degree in Software Analysis and Development. Programming fundamentals, relational databases, web development (HTML, CSS, JS), Scrum, Git, testing basics.",
  date: "2022 – 2023"
)

v(10pt)

// ── TECHNICAL SKILLS ─────────────────────────────────────
section-title("Technical Skills")

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

skill-group("Databases", (
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

skill-group("Mobile Development", (
  (name: "Kotlin", level: "advanced"),
  (name: "Android", level: "advanced"),
  (name: "React Native", level: "intermediate"),
))

skill-group("Testing & Quality", (
  (name: "Jest", level: "advanced"),
  (name: "Vitest", level: "advanced"),
  (name: "Playwright", level: "intermediate"),
  (name: "ESLint", level: "expert"),
  (name: "Prettier", level: "expert"),
  (name: "TypeScript Strict", level: "expert"),
))

skill-group("AI & Automation", (
  (name: "Gemini API", level: "advanced"),
  (name: "OpenAI API", level: "advanced"),
  (name: "Prompt Engineering", level: "expert"),
  (name: "n8n", level: "intermediate"),
  (name: "MCP", level: "intermediate"),
  (name: "OpenCode", level: "advanced"),
))

skill-group("Tools & Workflow", (
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

// ── LANGUAGES ────────────────────────────────────────────
section-title("Languages")
bullet-item("Spanish", "Native")
bullet-item("English", "A2 Advanced — Fluent reading/writing, speaking/listening in development")

v(6pt)
align(center)[ text(size: 8pt, fill: gray, weight: 500)[— End of résumé —] ]