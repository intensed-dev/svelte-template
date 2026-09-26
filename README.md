# Svelte Template

A ready-to-use SvelteKit starter for GitHub template repositories.

## Use

Create a new repository from **Use this template**, then install dependencies:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite and start coding.

## Included

- Svelte 5
- SvelteKit
- Vite
- TypeScript checking
- ESLint
- Prettier with Svelte support
- GitHub Actions CI
- Minimal starter page

## Project structure

```
src/
├── app.css
├── app.html
└── routes/
    ├── +layout.svelte
    └── +page.svelte

.github/
└── workflows/
    └── check.yml
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run check` | Run Svelte and TypeScript checks |
| `npm run lint` | Check formatting and ESLint |
| `npm run format` | Format the project |

This repository is intended to be used as a GitHub template. Replace the starter page and project metadata with your own.
