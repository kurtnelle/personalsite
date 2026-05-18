# shawnklewis.com

Personal site for Shawn Kurtnelle Lewis — augmented software engineer / systems architect.

Static, zero-build. JSX is transpiled in the browser via Babel-standalone, so the source ships as-is.

## Files

```
index.html         Markup + script tags
styles.css         All styling (dark default, light theme via [data-theme])
tweaks-panel.jsx   Optional design-tweaks overlay (hidden in prod)
src/data.jsx       All content (constants per section)
src/app.jsx        Section components + mount
CNAME              GitHub Pages custom domain
.nojekyll          Tells GitHub Pages not to run Jekyll
```

## Local preview

```powershell
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy

Hosted on **GitHub Pages** from `main` branch root.
Domain **shawnklewis.com** is fronted by **Cloudflare** (proxied) with a CNAME
pointing at `kurtnelle.github.io`.

See [DEPLOY.md](DEPLOY.md) for one-time setup notes.
