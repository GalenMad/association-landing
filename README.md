# Лендинг Ассоциации ПиВКО

## Разработка

### Setup

Make sure to install the dependencies:

```bash
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

### Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## Выбранный стек

### Описание

Основа: https://content.nuxt.com/templates/landing 

- TypeScript + Nuxt 3 как ось;
- Nuxt Content v3 как слой контента;
- Nuxt UI v3 как библиотека компонентов;
- Tailwind CSS как слой стилей.

### Чем стек хорош

- хороший бойлерплейт с поддержкой сообщества;
- контент рядом с кодом (index.yml, Markdown, YAML) — правки секций и текста без ковыряния компонентов;
- Nuxt умеет prerender — хостится как обычная статика, которую будет видно в поисковике;
- типовые блоки уже собраны и согласованы: hero, features, pricing, FAQ, etc., дизайн не разваливается при добавлении секций;
- Nuxt UI даёт 125+ компонентов и шаблонов с прекрасной доступностью, меньше своего UI-кода, быстрее поддержка;
- документация сильная и общедоступная: Nuxt, Nuxt Content, Tailwind, Nuxt UI имеют нормальные гайды, примеры и ответы на типовые вопросы — не надо изобретать своих костыли и велосипеды.

#### Как можно обогатить его

- добавляешь Nuxt Studio и получаешь админку для Markdown и формы для YAML и JSON, плюс управление медиа;
- удобно расширяется `@nuxt/image`: используешь `<NuxtImg>` и получаешь оптимизацию изображений, responsive sizes, lazy loading и нормальную работу с CDN;

### Документации

- [Nuxt Content v3](https://content.nuxt.com/docs/getting-started)
- [Nuxt UI](https://ui.nuxt.com/docs/getting-started)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Nuxt Studio](https://nuxt.com/modules/studio)

## Дорожная карта

- [ ] всё таки использовать автономные шрифты;
