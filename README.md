# LoonAI Documentation

This repository hosts the documentation site for LoonAI, the umbrella for University of Minnesota-administered AI tools.

LoonAI Gateway documentation is now maintained as a dedicated subsection of this site.

## Documentation Stack

The site is built with [VitePress](https://vitepress.dev/) and UMN LATIS packages:

- `@umn-latis/vitepress-theme-umn`
- `@umn-latis/cla-vue-template`

Project layout:

- Source content: `docs/`
- VitePress config: `docs/.vitepress/config.ts`
- Theme entrypoint: `docs/.vitepress/theme/index.ts`
- Custom styles: `docs/.vitepress/theme/custom.css`

## Local Development

Install dependencies:

```bash
npm install
```

Run local docs server:

```bash
npm run dev
```

Build production docs (strict checks):

```bash
npm run check
```

Preview production build locally:

```bash
npm run preview
```

## GitHub Actions

This repository includes two docs workflows:

- `.github/workflows/docs-ci.yml`: build validation for pushes and pull requests
- `.github/workflows/deploy-pages.yml`: deploys docs to GitHub Pages from `main`

To enable deployment in GitHub:

1. Open repository settings.
2. Go to **Pages**.
3. Set **Source** to **GitHub Actions**.

