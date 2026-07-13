WantAResume

A browser-based resume builder. Fill out your details once, pick a template, and export a polished, print-ready PDF — no account, no server-side storage, everything lives in your browser.

Features


15 resume templates — Alfa, Aston, Bentley, Bugatti, Corvette, Ferrari, Jaguar, Koenigsegg, Lamborghini, Lotus, Maserati, McLaren, Pagani, Porsche, and Rimac. Switch templates at any time without losing your data.
Live editor — Basics, summary, and section forms on one side, with instant PDF preview.
Drag-and-drop sections — Reorder sections and items freely (built on @dnd-kit).
Custom sections — Add your own sections beyond the built-in ones (experience, education, projects, skills, languages, interests, awards, certifications, publications, volunteer work, references).
Design controls — Customize primary/text/background colors, typography (body & heading fonts, size, line height), page format (A4, Letter, or free-form), and skill-level display style (circles, bars, icons, etc.).
Style rules — Fine-grained style overrides that can target the whole document, a section type, or a single section.
Rich text — Section content supports rich text formatting, rendered natively in the exported PDF.
RTL support — Right-to-left layout support for applicable languages.
Google Fonts — Wide selection of web fonts for body and heading text.
Client-side PDF generation — PDFs are rendered with @react-pdf/renderer, entirely in the browser.
Autosaving local storage — Your resume data persists locally between sessions (via Zustand + persist).
Responsive editor — Includes a mobile-friendly layout with bottom navigation.


Tech Stack


Next.js 16 (App Router) + React 19 + TypeScript
Tailwind CSS for styling
Zustand for state management (with persist middleware)
Zod for schema validation
@react-pdf/renderer for PDF generation
react-hook-form for form handling
@dnd-kit for drag-and-drop reordering
motion for animations
Tabler Icons / Phosphor Icons for iconography


Getting Started

Prerequisites


Node.js 18.18+ (or 20+ recommended)
npm


Installation

bashnpm install

Development

bashnpm run dev

Open http://localhost:3000 in your browser.

Production Build

bashnpm run build
npm run start


Templates

Each template lives in its own folder under src/lib/pdf/templates/<name>/<Name>Page.tsx and is registered in src/lib/pdf/templates/index.ts. All templates share common building blocks from src/lib/pdf/templates/shared/ (contact info, rich text, section rendering, RTL handling, page sizing, etc.), so they stay visually distinct while behaving consistently.

To add a new template:


Create a new folder under src/lib/pdf/templates/<name>/ with a <Name>Page.tsx component.
Add the template name to the templateSchema enum in src/lib/schema/templates.ts.
Register the component in src/lib/pdf/templates/index.ts.
Add a preview image at public/templates/jpg/<name>.jpg.


Acknowledgements

Portions of this project (schema shape, PDF template structure, and shared rendering utilities) are ported from Reactive Resume by Amruth Pillai, licensed under MIT.

License

This project is provided as-is for personal use.
