# Deploy notes — GitHub Pages + Cloudflare DNS

## GitHub Pages

Repository: `kurtnelle/personalsite` (public).

**Settings → Pages**
- Source: `Deploy from a branch`
- Branch: `main` / `/` (root)
- Custom domain: `shawnklewis.com`
- Enforce HTTPS: **on** (after DNS resolves)

The `CNAME` file in the repo root sets the custom domain.
The `.nojekyll` file skips Jekyll processing (we don't need it).

## Cloudflare DNS

DNS zone: `shawnklewis.com`.

| Type  | Name | Content              | Proxy   | TTL  |
|-------|------|----------------------|---------|------|
| CNAME | @    | kurtnelle.github.io. | Proxied | Auto |
| CNAME | www  | kurtnelle.github.io. | Proxied | Auto |

Notes:
- Cloudflare flattens apex CNAMEs automatically — no need for A records.
- If you prefer DNS-only (grey cloud), GitHub will issue its own Let's Encrypt
  cert and "Enforce HTTPS" works. The proxied path uses Cloudflare's cert.

## Cloudflare SSL/TLS settings

To avoid redirect loops when proxied:

- **SSL/TLS → Overview → Encryption mode**: `Full` (strict if you trust GitHub's cert chain; `Full` is the safe default).
- **SSL/TLS → Edge Certificates**:
  - `Always Use HTTPS`: on
  - `Automatic HTTPS Rewrites`: on

## Page Rules / cache

No special rules needed. If you want longer caching for the assets:

- **Caching → Configuration → Browser Cache TTL**: `4 hours` (or whatever).
  Since JSX is transpiled in-browser, aggressive caching is fine — bump a
  query string in `index.html` if you need to bust it (`src/app.jsx?v=2`).

## Verifying

After DNS propagates (usually < 5 min on Cloudflare):

```powershell
nslookup shawnklewis.com
curl -I https://shawnklewis.com
```

You should get a 200 with `server: cloudflare` (or `GitHub.com` if proxy is grey).
