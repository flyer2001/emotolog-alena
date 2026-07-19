# TASKS

> Только открытые `[ ]` / `[~]` items. Закрытые → `CHANGELOG.md`.

## Site (alena-emotolog.ru — prod live, noindex до апрува)

- [ ] **Правки Алёны раунд 1** — 12 замечаний по скриншотам, ~26 точечных правок в 14 файлах. Полный разбор → `docs/feedback-v1/report.md`. Скриншоты → `docs/feedback-v1/{1..12}.jpeg`. Ключевые темы: убрать «панические атаки»/«эмоциональное переедание» (мед-диагнозы), убрать все «не» (позитив), убрать негатив в Comparison к терапии/коучингу, `Zoom+Telegram` → `Zoom+Яндекс Телемост`, цена **1500 → 2500₽**, TG-канал усилить визуально + CTA, FAQ сократить до 1 вопроса. 8 точек требуют approve формулировок от Алёны — перечислены в отчёте.
- [ ] **Снять noindex** — после апрува правок Алёной. `site/src/layouts/Layout.astro` → `noindex = false` дефолт.
- [ ] **Смыслы v1** — вытащить позиционирование/tone из `/root/projects/myRep/Marketing/emotolog/` (project-brief, strategy, content-library), draft'нуть tone of voice + 3 ключевых сообщения → `meanings/`. Алена approve.
- [ ] **Конверсионные цели в Метрике** — настроить цели через `ym('reachGoal', ...)`:
  1. **`click_tg_write`** — клик по любой кнопке «Записаться» / «Написать в Telegram» (все CTA ведут на `t.me/alenoch13`)
  2. **`click_vk`** — клик по ВК-ссылке
  3. **`click_tg_channel`** — клик по каналу `t.me/alena_emotolog`
  4. **`form_submit`** — когда добавим форму заявки
  - В Метрике: **Настройки → Цели → Добавить цель → JavaScript-событие** с соответствующим ID
  - В коде: обернуть CTA-ссылки в handler `onclick="ym(110847931,'reachGoal','click_tg_write')"` или через event delegation в Layout
  - Даст: конверсию сайт → лид, воронку по секциям (какой CTA лучше работает), базу для ретаргетинга VK Ads
- [ ] **Google Search Console + Яндекс.Вебмастер** — регистрация alena-emotolog.ru, подтверждение через DNS TXT или meta-tag, добавление sitemap.xml. Дадут: индексация быстрее, ошибки crawl'а, позиции по запросам.
- [ ] **Google Analytics 4 / Google Ads gtag** — если планируется реклама в Google (в РФ ограниченно). Заполнить `PUBLIC_GTAG_ID` в `site/.env`.
- [ ] **Форма заявки** — TG-бот webhook на `/api/lead` (принимает name + phone/tg + текст, шлёт Алене в личку с UTM). Или fallback — прямые CTA на `t.me/alena_emotolog`.
- [ ] **Страница `/metod`** — под запросы «что такое эмотология», «метод эмотологии». Критичный gap — каждый новый визитор ищет «что это».
- [ ] **Страница `/samara`** — под гео-кластер (эмотолог Самара, психолог Самара). Schema.org LocalBusiness.
- [ ] **Страница `/online`** — под «эмотолог онлайн», «психолог онлайн вся Россия».
- [ ] **Блог — 5 стартовых статей** под топ long-tail: «не могу забыть бывшего», «панические атаки», «эмоциональное переедание», «не знаю чего хочу», «выгорание как выйти». Каждая — 1500-3000 слов + внутренние ссылки на pains + CTA.
- [ ] **Landing pages под ads** — `/lp/panika`, `/lp/pereedanie` — отдельные страницы под угол креатива VK Ads.
- [ ] **Регистрация в бизнес-каталогах** — Яндекс.Бизнес (Самара), 2ГИС Самара, Zoon Самара, ProDoctorov Самара, Avito раздел «Услуги психолога» — реальный локальный трафик.
- [ ] **Мобильная визитка** — vCard-страница `/card`, mobile-first, QR-код (позже).
- [ ] **OG-картинка `/og-default.jpg`** — 1200×630 для превью в TG/VK/WhatsApp (сейчас используем `alena.jpeg`, но она вертикальная — плохо для landscape-превью).

## Ops

- [ ] **Создать удалённый GitHub repo** (2026-07-18) — `flyer2001/emotolog-alena` (private). После создания: `git remote add origin git@github-assistant:flyer2001/emotolog-alena.git && git push -u origin main`. SSH host alias `github-assistant` уже настроен (см. `~/.ssh/config` в assistant/myRep).
- [ ] **Изучить существующие материалы** — `/root/projects/myRep/Marketing/emotolog/` (project-brief, strategy, research-data, content-library, campaign-results, analytics-guide, vk-ads-rules). Что переиспользовать в блоге/LP.
