# Clínica Ginecológica — Landing page

Landing page de una sola página para **Clínica Ginecológica** (Minatitlán, Veracruz): más de 30
años cuidando la salud de la mujer con especialistas certificados y tecnología de vanguardia.

- **Producción:** https://clinica-ginecologica-three.vercel.app
- **Stack:** Next.js (App Router) · Tailwind CSS v4 · TypeScript · lucide-react
- **Design System:** proyecto de claude.ai/design `56f8dc3f` — tokens y componentes portados a
  `src/app/globals.css` y `src/components/`

## Estructura

| Ruta | Contenido |
| --- | --- |
| `src/app/layout.tsx` | Metadatos SEO, Open Graph (WhatsApp), favicons, JSON-LD `MedicalClinic`, fuentes |
| `src/app/page.tsx` | Secciones: hero, beneficios, servicios, unidad especializada, especialistas, misión/visión/valores, FAQ, contacto, cierre |
| `src/lib/data.ts` | Contenido editable: datos de contacto, servicios, especialistas, unidad, FAQ |
| `src/components/` | Componentes del Design System (Button, ServiceCard, NavBar, etc.) |
| `docs/` | Documentos de referencia: información oficial de la clínica y descubrimiento de contenido |
| `public/images/` | Fotografías de servicios y Open Graph |
| `public/logo/` | Logotipo y símbolo oficiales (SVG/PNG) |

## Contenido

Los textos provienen de `docs/informacion-oficial-clinica.md` (información oficial entregada por la
clínica el 27 de julio de 2026) y `docs/contenido-landing-clinica-ginecologica.md` (descubrimiento).
Para actualizar teléfonos, servicios, especialistas o preguntas frecuentes basta editar
`src/lib/data.ts`.

## Desarrollo

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de producción
```

## Despliegue

Cada push a `main` despliega automáticamente a producción mediante la integración nativa de
Vercel con GitHub (los PRs generan previews). GitHub Actions (`.github/workflows/deploy.yml`)
ejecuta lint + build como CI.
