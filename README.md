# 🚀 Portafolio / Hoja de vida web

Portafolio personal de **ingeniero de software**: sitio bilingüe (ES/EN), dark mode,
animaciones suaves, SEO y diseño responsive. Construido con **Astro 7** + **Tailwind CSS 4**.

> ℹ️ **Todo el contenido actual es de ejemplo (placeholders).** Sigue la sección
> [Personalizar](#-personalizar-tu-contenido) para poner tu información real.

---

## 🧱 Tecnologías

- [Astro 7](https://astro.build) — framework de sitios rápidos (HTML estático).
- [Tailwind CSS 4](https://tailwindcss.com) — utilidades de estilo.
- TypeScript.
- `@astrojs/sitemap` — genera el sitemap para SEO.
- Cero dependencias de UI: los iconos son SVG inline (no cargan librerías extra).

## 📦 Requisitos

- Node.js **>= 22.22** (probado con Node 24).
- npm >= 9.6.

## 🏃‍♂️ Cómo ejecutar

```bash
npm install       # instalar dependencias
npm run dev       # entorno de desarrollo → http://localhost:4321
npm run build     # compilar para producción (carpeta dist/)
npm run preview   # previsualizar el resultado compilado
```

---

## 📁 Estructura del proyecto

```
src/
├── components/      Componentes de cada sección (Hero, About, Skills, ...)
├── layouts/
│   └── BaseLayout.astro   <head>, SEO, fuentes, navbar, footer y scripts
├── data/            👈 AQUÍ VA TU CONTENIDO (edítalo sin tocar HTML)
│   ├── profile.ts       Datos personales, bio, redes, contacto
│   ├── skills.ts        Grupos de habilidades
│   ├── experience.ts    Experiencia laboral
│   ├── education.ts     Estudios y certificaciones
│   └── projects.ts      Proyectos
├── i18n/
│   ├── ui.ts            Textos de la interfaz (ES / EN)
│   └── utils.ts         Tipos y helpers de idioma
├── pages/
│   ├── index.astro      Redirige al idioma del navegador
│   ├── es/index.astro   Página en español
│   └── en/index.astro   Página en inglés
└── styles/global.css    Tema, colores y estilos base

public/
├── images/profile.svg   👈 Reemplaza por tu foto (ej. profile.jpg)
├── cv/                  👈 Reemplaza por tus CV en PDF
├── favicon.svg          👈 Reemplaza por tu favicon
├── og-image.png         Imagen para compartir en redes (Open Graph)
└── robots.txt
```

---

## ✍️ Personalizar tu contenido

Todos los textos están en español (`es`) e inglés (`en`). Edita los archivos de
`src/data/` y reemplaza los valores de ejemplo por los tuyos.

### 1. Datos personales → `src/data/profile.ts`

Cambia tu nombre, rol, biografía, ubicación, email, teléfono, redes sociales,
la URL del sitio y la ruta de tu foto.

```ts
export const profile = {
  name: 'Tu Nombre',
  role: { es: 'Tu rol en español', en: 'Your role in English' },
  // ...
  photo: '/images/profile.jpg',
  social: {
    github: 'https://github.com/tuusuario',
    // ...
  },
  site: 'https://tudominio.com',
};
```

### 2. Tu foto → `public/images/`

Coloca tu foto (recomendado ~800×1000 px, formato `.jpg` o `.webp`) y apunta
`profile.photo` a ella. El `profile.svg` actual es un placeholder.

### 3. Experiencia, estudios, proyectos y habilidades

- `src/data/experience.ts` — puestos, fechas, logros y tecnologías.
- `src/data/education.ts` — título y certificaciones.
- `src/data/projects.ts` — proyectos. Para una imagen real, añade `image: '/images/projects/mi-app.png'`.
  Si no pones imagen, se muestra un degradado con un icono.
- `src/data/skills.ts` — agrupa tus tecnologías.

### 4. Cambiar el idioma por defecto y los textos de interfaz

- Textos de la interfaz (menú, títulos de sección, formulario): `src/i18n/ui.ts`.
- Idioma por defecto: `src/i18n/utils.ts` (`defaultLang`).

### 5. Colores y tema

Toda la paleta está en `src/styles/global.css`, dentro de `@theme`. Cambia
`--color-accent` y `--color-accent-2` para personalizar el degradado principal.

---

## 📧 Formulario de contacto

El formulario usa [Web3Forms](https://web3forms.com) (gratis, sin backend):

1. Regístrate en web3forms.com y obtén tu **Access Key**.
2. Pégala en `src/components/Contact.astro`, en la constante `WEB3FORMS_KEY`.

> Mientras no configures la clave, el formulario abre el cliente de correo del
> visitante (mailto) como respaldo, así nunca se queda sin funcionar.

---

## 🔎 SEO

- Metadatos, Open Graph y Twitter Cards en `BaseLayout.astro`.
- Datos estructurados JSON-LD (`Person`).
- `hreflang` para ES/EN y sitemap automático.
- Antes de publicar, actualiza `site` en `astro.config.mjs`, `profile.site`,
  `public/robots.txt` y regenera `public/og-image.png` con tu nombre.

---

## ☁️ Despliegue

El sitio es 100% estático; puedes desplegarlo gratis en:

- **Vercel**: importa el repo. Detecta Astro automáticamente.
- **Netlify**: build `npm run build`, carpeta de publicación `dist`.
- **GitHub Pages**: usa el `base`/`site` adecuados en `astro.config.mjs`.

---

## 🧹 Checklist antes de publicar

- [ ] Reemplazar `name`, `role`, `bio`, contacto y redes en `profile.ts`.
- [ ] Añadir tu foto en `public/images/` y actualizar `photo`.
- [ ] Reemplazar los CV en `public/cv/`.
- [ ] Editar experiencia, estudios, proyectos y habilidades.
- [ ] Configurar `WEB3FORMS_KEY`.
- [ ] Poner tu dominio en `astro.config.mjs`, `profile.site` y `robots.txt`.
- [ ] Regenerar `public/og-image.png` con tus datos.
- [ ] Reemplazar `public/favicon.svg`.
