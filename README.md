# Svelte Template

A ready-to-use SvelteKit starter for GitHub template repositories and GitHub Pages.

## Use

Create a new repository from **Use this template**, then:

```bash
npm install
npm run dev
```

Start coding in `src/routes`.

## GitHub Pages

The template is already configured for GitHub Pages.

After creating your repository:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`.
4. The included workflow builds and deploys the site automatically.

No repository-specific base path configuration is required: SvelteKit's static adapter uses the correct GitHub Pages deployment environment.

## Included

- Svelte 5
- SvelteKit
- Vite
- Static GitHub Pages adapter
- TypeScript checking
- ESLint
- Prettier with Svelte support
- GitHub Actions CI
- Automatic GitHub Pages deployment
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
    ├── check.yml
    └── deploy.yml
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
