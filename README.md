# gmark-site

Marketing website for **GMARK — On-premises Hospitality OS** (hotel & restaurant management for India).

Site URL: https://ghanshyamkolse.github.io/gmark-site/

## Structure

```
gmark-site/
├── site/                    # Static landing page (published to GitHub Pages)
│   ├── index.html
│   ├── styles.css
│   └── demo-script.md       # 5-minute demo script (for sales calls)
└── .github/workflows/pages.yml  # Deploys site/ to Pages on push to main
```

## Deploy

Push to `main` → GitHub Actions builds and publishes `site/` to GitHub Pages.
Manual re-run: Actions → "Deploy landing page to GitHub Pages" → Run workflow.

## Notes

- `gmark-site` is public (required for free GitHub Pages); the GMARK application
  source repo (`gmark`) stays private.
- The "Download for Windows" button links to
  `https://github.com/ghanshyamkolse/gmark-site/releases/latest/download/GMARK-Installer.exe`
  — publish the installer as a GitHub Release asset named `GMARK-Installer.exe`
  (built from `dist/installer/GMARK-Installer.exe` in the private `gmark` repo).
- Before go-live: replace the placeholder contact email in `site/index.html`.