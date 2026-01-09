# SellSharp — Frontend (Vite + React + TypeScript)

Simple marketing / SaaS landing UI built with Vite, React and TypeScript. Uses Tailwind CSS utility classes for styling and a small component-based structure.

## Quick start
Prerequisites: Node.js (>=16) and npm or yarn.

Installation:
1. npm install
2. npm run dev
3. Open http://localhost:5173 (or the port shown)

Build:
- npm run build
- npm run preview

## What this project contains
- Vite + React + TypeScript app (entry: src/main.tsx)
- Tailwind-style utility classes used across components (see src/index.css)
- Public/static assets in public/ and src/assets/

## Folder structure (key files)
- src/
    - App.tsx — main app layout that composes all components
    - main.tsx — React entry (createRoot)
    - index.css — global styles (Tailwind utilities expected)
    - assets/ — component images/icons
    - components/
        - Navbar.tsx — top navigation
        - Hero.tsx — hero / hero CTA section
        - Overwork.tsx — feature/section component
        - Tailored.tsx — feature/section component
        - BuildByExpert.tsx — testimonial/cred section
        - Features.tsx — features list / cards
        - CTA.tsx — bottom call-to-action
        - Footer.tsx — footer and trusted logos

## Technologies used
- React (JSX/TSX)
- TypeScript
- Vite (dev server, build)
- Tailwind CSS (utility classes visible in components)
- Static assets served from public/ or src/assets/

## Notes & tips
- Images referenced in components (e.g., /assets/*.png) should be present in public/assets or imported from src/assets.
- Adjust Tailwind config or CSS if utility classes aren’t applying.
- App.tsx composes the site by rendering Navbar → Hero → sections → Footer.

## License
Project skeleton — add your preferred license.
