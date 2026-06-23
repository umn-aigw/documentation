# LoonAI Gateway Documentation

This repository hosts the documentation site for the University of Minnesota LoonAI Gateway.

## Documentation Site

The site is built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), with UMN-inspired custom styling.

- Source content: `docs/`
- Site config: `mkdocs.yml`
- Theme overrides: `docs/assets/stylesheets/umn.css`
- GitHub Pages workflow: `.github/workflows/deploy-docs.yml`

## Local Development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open the local preview URL shown in the terminal (usually `http://127.0.0.1:8000`).

## Deployment

The documentation automatically builds and deploys to GitHub Pages on every push to `main` via GitHub Actions.

To enable it in GitHub:

1. Go to repository settings.
2. Open **Pages**.
3. Set **Source** to **GitHub Actions**.

