# CHANGELOG

Prepend новых записей сверху. Формат: `## YYYY-MM-DD — <тема>`.

## 2026-07-18 — Site scaffold + placeholder live

- **Стек:** Astro 7 + Tailwind CSS 4, static build. Обоснование: SEO/AI-crawler friendly (raw HTML), быстрый итеративный дизайн с Tailwind, я могу генерировать компоненты, deploy = один `npm run build`.
- **Инфра:** Caddy (уже был на VDS) + wildcard DNS `*.cashflow-game.ru → 194.59.245.243` (уже настроен у nameself.com). Новый субдомен без DNS-действий.
- **URL:** `https://alena.cashflow-game.ru` — placeholder «Сайт в разработке», палитра из ref1 (пудра + кремовый + бордо), CTA на TG @alena_emotolog и VK.
- **Pipeline:** `site/*` правится → `npm run build` пишет прямо в `/srv/alena-site/` (Astro `outDir`) → Caddy serve live. Не нужен rsync/deploy step.
- **Caddy:** добавлен блок `alena.cashflow-game.ru` → `/srv/alena-site`, encode zstd+gzip, auto-HTTPS через LE (cert получен).
- **Meta:** `<meta name="robots" content="noindex, nofollow">` на placeholder — чтобы поисковики не индексировали заглушку. Убрать когда будет v1 контент.
- **Downloads → assets/refs/:** 3 дизайн-референса от Sergey (визитка психолога, постер мастермайнда, wellness-лендинг) скачаны с mac-work в `assets/refs/`. Sub-agent описал → рекомендация: база палитра ref1 + структура ref3 + mood-board ref2.
- **Docs:** `site/README.md` с pipeline + инструкцией переноса на alena-emotolog.ru. `TASKS.md` — переработан, добавлена секция Site (9 items).
- **Домен alena-emotolog.ru** — куплен, DNS не прописан. Инструкция переноса в `site/README.md`.

## 2026-07-18 — Проект создан

- `git init` + локальный repo.
- `CLAUDE.md` v1.0 — правила проекта (маркетинг + смыслы + позже site/vcard).
- `TASKS.md` — 2 initial task'а (изучить существующие материалы, определить MVP scope).
- Reference existing: `/root/projects/myRep/Marketing/emotolog/`.
- Remote origin **не** настроен — Sergey привяжет позже.
