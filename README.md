# group3pms

A simple static website scaffold for the `group3pms` repository.

## Local preview

Open `docs/index.html` in your browser, or run a local server from the repo root:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/docs/`.

## Publish

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml` that deploys the `docs/` folder to GitHub Pages on every push to `main`.
