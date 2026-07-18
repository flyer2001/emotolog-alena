# site — alena-emotolog

Astro + Tailwind CSS 4. Static build. Live on Caddy (VDS).

## URLs

- **Prod:** https://alena.cashflow-game.ru
- **Target (после переноса DNS):** https://alena-emotolog.ru

## Стек

- **Astro** — SSG, весь контент в raw HTML (SEO + AI-crawler friendly)
- **Tailwind CSS 4** — utility styling через `@tailwindcss/vite`
- **Caddy** — reverse proxy + auto-HTTPS (Let's Encrypt), edge на VDS

## Pipeline

```
edit .astro / .css / .md
  ↓
npm run build          # → /srv/alena-site/
  ↓
Caddy serves /srv/alena-site/ на alena.cashflow-game.ru
```

**Deploy = один `npm run build`.** `outDir` в `astro.config.mjs` = `/srv/alena-site/`, туда пишет напрямую. Caddy читает live.

## Локально править

```bash
cd site
npm install          # once
npm run dev          # http://localhost:4321, live reload
```

Или прямо на VDS через IDE (mac-work → ssh remote в /root/projects/emotolog-alena/site) — правишь `.astro`, потом `npm run build` — сразу на проде.

## Структура

```
site/
├── astro.config.mjs      # outDir=/srv/alena-site, tailwind vite plugin
├── src/
│   ├── pages/            # роуты (index.astro = /)
│   ├── styles/global.css # @import "tailwindcss"
│   └── components/       # Astro components (появятся)
├── public/               # статика (favicon, картинки)
└── package.json
```

## Caddy config

`/etc/caddy/Caddyfile`:

```caddy
alena.cashflow-game.ru {
    root * /srv/alena-site
    file_server
    encode zstd gzip
}
```

Wildcard DNS `*.cashflow-game.ru → 194.59.245.243` уже настроен у регистратора (nameself.com), новые subdomain'ы не требуют DNS-действий.

## Перенос на alena-emotolog.ru (позже)

1. Прописать A-запись `alena-emotolog.ru → 194.59.245.243` (и `www.alena-emotolog.ru`) у регистратора домена
2. Дождаться DNS propagation (5 минут — 48 часов)
3. Добавить блок в `/etc/caddy/Caddyfile`:
   ```caddy
   alena-emotolog.ru, www.alena-emotolog.ru {
       root * /srv/alena-site
       file_server
       encode zstd gzip
       redir https://alena-emotolog.ru{uri} permanent  # www→apex
   }
   ```
4. `systemctl reload caddy` — cert возьмётся автоматически через ACME
5. В `astro.config.mjs` сменить `site` на новый домен
6. Настроить 301 redirect с `alena.cashflow-game.ru` → `alena-emotolog.ru` для SEO
