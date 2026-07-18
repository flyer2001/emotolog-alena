# TASKS

> Только открытые `[ ]` / `[~]` items. Закрытые → `CHANGELOG.md`.

## Site (alena.cashflow-game.ru — placeholder live)

- [ ] **Домашняя страница v1** — заменить заглушку на полноценный лендинг. Дизайн-direction: `assets/refs/ref{1,2,3}.jpg` (палитра ref1 + структура ref3 + mood-board из ref2). Секции: hero+CTA / об Алёне / услуги / кейсы-отзывы / контакты.
- [ ] **Смыслы v1** — вытащить позиционирование/tone из `/root/projects/myRep/Marketing/emotolog/` (project-brief, strategy, content-library), draft'нуть tone of voice + 3 ключевых сообщения → `meanings/`. Алена approve.
- [ ] **SEO базa** — sitemap.xml, robots.txt (разрешить PerplexityBot, ClaudeBot, GPTBot, Google-Extended), Schema.org JSON-LD (Person, LocalBusiness Самара, Service), meta title/description на страницу.
- [ ] **Ключевые слова** — собрать через perplexity + Wordstat, сгруппировать по кластерам (ПА, эмоц.переедание, выгорание, эмотолог Самара). Draft'нуть 2-3 блог-страницы под кластер.
- [ ] **Форма заявки** — TG-бот webhook на `/api/lead` (принимает name + phone/tg + текст, шлёт Алене в личку с UTM). Или fallback — прямые CTA на `t.me/alena_emotolog`.
- [ ] **Аналитика** — Яндекс.Метрика + Google Search Console + Яндекс.Вебмастер: регистрация, счётчик, цели (клик TG/VK, submit формы).
- [ ] **Landing pages под ads** — `/lp/panika`, `/lp/pereedanie` — отдельные страницы под угол креатива VK Ads.
- [ ] **Мобильная визитка** — vCard-страница `/card`, mobile-first, QR-код (позже).
- [ ] **Перенос на alena-emotolog.ru** — прописать DNS, добавить Caddy блок, обновить `site` в astro.config, 301 с alena.cashflow-game.ru (см. `site/README.md`).

## Ops

- [ ] **Создать удалённый GitHub repo** (2026-07-18) — `flyer2001/emotolog-alena` (private). После создания: `git remote add origin git@github-assistant:flyer2001/emotolog-alena.git && git push -u origin main`. SSH host alias `github-assistant` уже настроен (см. `~/.ssh/config` в assistant/myRep).
- [ ] **Изучить существующие материалы** — `/root/projects/myRep/Marketing/emotolog/` (project-brief, strategy, research-data, content-library, campaign-results, analytics-guide, vk-ads-rules). Понять что уже сделано, что переиспользовать.
- [ ] **Определить skope MVP** — creative pack для VK Ads / полный лендинг / визитка — что первое после placeholder.
