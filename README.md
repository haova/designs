# HaoVA Designs

A collection of visual languages for web design.

Each design lives in its own directory and is governed by its own ruleset — documented in that directory's `README.md`. The ruleset defines the constraints: color, type, spacing, motion, and the reasoning behind each decision.

Rules are not restrictions. They are the grammar of a style. Once a grammar is established, it can generate an unlimited number of valid compositions — all coherent, all recognizably belonging to the same school of thought. That is the point: not to produce a single design, but to produce a way of designing.

A style without rules is just an aesthetic. A style with rules is a discipline.

## Standard

Every project in this collection follows the same structural foundation. The standard does not dictate visual decisions — each style governs those — but it governs how code is organized, named, and layered. Consistency at this level makes styles legible and portable.

Only use HTML, CSS, and JavaScript features that are [baseline widely available](https://web.dev/baseline) — supported across all major browsers without flags or prefixes. Progressive enhancements are allowed when the fallback experience remains acceptable.

### File structure

```
<style>/
├── fonts/              # Font files for self-hosted @font-face declarations
├── styles/
│   ├── reset.css       # Browser normalization only — no visual decisions, shared across all styles
│   ├── style.css       # Everything that applies to all pages: tokens, base, typography, layout, shared components
│   ├── index.css       # Showcase-only styles (palette, type scale, stat grid) — loaded only by index.html
│   └── <view>.css      # Styles exclusive to one UI view — never duplicates what style.css already defines
├── scripts/            # JavaScript files — only present if the style requires interaction or animation
├── images/             # Raster images (.jpg, .png, .webp)
├── videos/             # Video files
├── audios/             # Audio files
├── index.html          # Showcase page — displays the design system (palette, type scale, components)
├── <view>.html         # UI views that simulate real pages (e.g. dashboard, article)
└── README.md           # Style ruleset and design decisions
```

Each style is self-contained. No shared assets live outside a style's directory.

### HTML structure

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page title — Style name</title>
    <link rel="stylesheet" href="styles/reset.css" />
    <link rel="stylesheet" href="styles/style.css" />
    <!-- view-specific sheet last, if needed -->
    <link rel="stylesheet" href="styles/view.css" />
  </head>
  <body>
    ...

    <!-- scripts last, only if required by the style -->
    <script src="scripts/main.js"></script>
  </body>
</html>
```

Rules:

- `lang` is always set.
- `<title>` follows the format: `Page title — Style name`.
- Stylesheet order is fixed: reset → style → view.
- No inline styles. No `style` attributes.
- No JavaScript unless the style explicitly requires it (e.g. Y2K animations).
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`, `<section>`, `<article>`.
- Every `<img>` must have an `alt` attribute. Use `alt=""` for decorative images.
- `id` is only used for form labels (`for`/`id` pairing) and anchor links. Never for styling.
- Do not use `<br>` to create spacing. Spacing belongs in CSS.
- Use `<button>` for actions, `<a>` for navigation. Never substitute one for the other.

### CSS layer order

`style.css` is divided into these sections, in this order, separated by a comment:

```
/* Fonts */       — @font-face declarations
/* Tokens */      — :root custom properties
/* Base */        — html, body defaults
/* Typography */  — heading scale, p, a, code, small
/* Layout */      — .container, .content, grid/flex wrappers
/* Components */  — reusable UI patterns: .btn, .card, .form-group, etc.
/* Showcase */    — index.html-only display helpers: .palette, .type-scale, etc.
```

View-specific sheets (e.g. `dashboard.css`) follow the same section pattern but contain only what is unique to that view.

### CSS naming

Class names follow [BEM](https://getbem.com/) (Block Element Modifier):

```
.block               — standalone component
.block__element      — child of a block
.block--modifier     — variant of a block or element
```

Examples from haova/:

```css
.article-item            /* block */
.article-item__title     /* element */
.article-item__meta      /* element */
.btn                     /* block */
.btn--primary            /* modifier */
.sidebar__link           /* element */
.sidebar__link--active   /* element + modifier */
```

Rules:

- All lowercase, hyphen-separated within a segment. No camelCase, no underscores.
- `__` separates block from element. `--` separates block/element from modifier.
- Elements are always direct members of their block — no chaining (`.block__element__sub` is wrong; use `.block__sub` instead).
- No utility classes (no `.flex`, `.mt-4`, `.text-sm`). Every class has semantic meaning.
- Avoid deep nesting in selectors. Max two levels (`.rich-text a`, `.form__radio-group label`).

### CSS tokens

All design decisions live in `:root` custom properties in `style.css`. No magic numbers elsewhere.

Token categories and naming convention:

```css
:root {
  /* Color — role-based names, not value-based */
  --color-bg: ...;
  --color-text: ...;
  --color-border: ...;
  /* add more as the style requires: --color-accent, --color-surface, etc. */

  /* Typography */
  --font-sans: ...;
  --font-mono: ...;
  /* add more as the style requires: --font-display, --font-serif, etc. */

  /* Type scale — names are fixed, values are style-defined */
  --text-xs: ...;
  --text-sm: ...;
  --text-base: ...;
  --text-lg: ...;
  --text-xl: ...;
  --text-2xl: ...;
  --text-3xl: ...;
  --text-4xl: ...;

  /* Weight */
  --weight-regular: ...;
  --weight-bold: ...;

  /* Line height */
  --leading-tight: ...;
  --leading-snug: ...;
  --leading-normal: ...;

  /* Spacing — use a consistent scale, values are style-defined */
  --space-1: ...;
  --space-2: ...;
  --space-3: ...;
  --space-4: ...;
  --space-6: ...;
  --space-8: ...;
  --space-12: ...;
  --space-16: ...;
  --space-24: ...;

  /* Border radius */
  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;
  --radius-full: ...;

  /* Shadow */
  --shadow-sm: ...;
  --shadow-md: ...;
  --shadow-lg: ...;

  /* Transition */
  --duration-fast: ...;
  --duration-base: ...;
  --duration-slow: ...;
  --ease-default: ...;

  /* Z-index */
  --z-base: ...;
  --z-dropdown: ...;
  --z-sticky: ...;
  --z-modal: ...;
  --z-toast: ...;

  /* Layout */
  --max-width: ...;
  --content-width: ...;
}
```

Rules:

- Token names describe role, not value. `--color-accent`, not `--color-blue`. `--color-bg`, not `--color-white`.
- Token names above are the standard set. Each style defines its own values. Styles may add tokens but should follow the same naming convention.
- Spacing tokens follow a consistent scale — no arbitrary values. The scale steps and unit are defined per style.

### JavaScript

JavaScript is optional. Most styles require none. It is only introduced when the visual language genuinely depends on it (e.g. animation loops, interactive state that CSS cannot handle).

Rules:

- One file per concern. No catch-all `main.js`.
- `<script>` tags go at the end of `<body>`, or in `<head>` with `defer`.
- No inline event handlers (`onclick`, `onload`, etc.). All listeners are registered in JS files.
- No framework, no build step. Vanilla JS only.
- Do not use JavaScript to do what CSS can do.

### Reset

`reset.css` is shared and stable. It is not modified per style. It is intentionally neutral — no opinionated visual decisions.

The reset is based on [Josh W. Comeau's Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) with deliberate differences noted below.

#### Rule-by-rule reasoning

**`*, *::before, *::after { box-sizing: border-box }`**
Browser default is `content-box`: `width: 100%` excludes padding and border, causing overflow when padding is added. `border-box` makes dimensions predictable — padding and border are absorbed inside the declared size, not added on top.

**`*:not(dialog) { margin: 0 }`**
HTML elements carry built-in margins (`<p>`, `<h1>`–`<h6>`, `<body>`, etc.) designed for unstyled documents. In a design system, all spacing is explicit. `<dialog>` is excluded to preserve its `margin: auto` centering behavior.

_Why not `padding: 0`:_ Browser `padding` defaults are rarer and more purposeful (e.g. `<fieldset>`, `<summary>`). Zeroing padding globally causes more harm than it prevents. Padding is reset per-component in `style.css` only where needed.

**`@media (prefers-reduced-motion: no-preference) { html { interpolate-size: allow-keywords } }`**
Historically, animating `height: 0` → `height: auto` required JavaScript to measure pixel values. `interpolate-size: allow-keywords` enables CSS to interpolate between absolute values and intrinsic keywords (`auto`, `min-content`, `max-content`, etc.) natively. Wrapped in `prefers-reduced-motion` because it exists to enable animation — users who opt out of motion should not receive it implicitly. Currently Chrome/Edge only; graceful fallback (no animation) is acceptable.

**`html { -webkit-text-size-adjust: 100% }`**
iOS Safari auto-scales font sizes when the device rotates to landscape, overriding explicit `font-size` declarations. `100%` disables this behavior. Has no effect on desktop browsers. _(Added over Josh — this collection targets static HTML files viewed on mobile without a framework layer to compensate.)_

**`html { tab-size: 4 }`**
Browser default tab width in `<pre>` and `<code>` blocks is 8 spaces, which is unusually wide. `4` matches common code editor convention. _(Added over Josh — styles that render code blocks benefit from consistent indentation width.)_

**`body { line-height: 1.5 }`**
Browser default is approximately `1.2`, which is too tight for body text. WCAG 1.4.12 requires that users can set line-height to 1.5 without loss of content — building it in by default satisfies this without requiring user overrides. Individual components (headings, captions) override as needed.

**`body { -webkit-font-smoothing: antialiased }`**
macOS browsers default to subpixel antialiasing, which renders colored fringes around letterforms on high-DPI displays. Standard antialiasing produces cleaner, thinner strokes on retina screens. No effect on Windows, Linux, or mobile. `-moz-osx-font-smoothing: grayscale` is omitted — Firefox dropped support in v114 (2023).

**`img, picture, video, canvas, svg { display: block; max-width: 100% }`**
Two separate problems. `display: block`: images are inline by default, creating a ~4px gap below them from line-height descender space — invisible in unstyled documents, disruptive in layouts. `max-width: 100%`: replaced elements render at their intrinsic size (e.g. an 1800px photo stays 1800px), overflowing their container.

**`input, button, textarea, select { font: inherit }`**
Form controls do not inherit the document's font — they default to system UI fonts at browser-chosen sizes (often 13.333px monospace). This breaks visual consistency and can trigger iOS Safari's auto-zoom behavior (triggered when `font-size` < 16px on inputs). `font: inherit` corrects both with one declaration.

**`p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word }`**
Without a soft wrap opportunity (space or hyphen), long words and URLs overflow their container horizontally, adding scrollbars or overlapping adjacent elements. `break-word` forces a hard wrap at the container boundary when no soft opportunity exists. Readability impact is minor; layout integrity is preserved.

**`p { text-wrap: pretty }`**
Default line-breaking can leave a single word (orphan) on the last line of a paragraph. `pretty` uses a lookahead algorithm that considers multiple lines at once to avoid this. Progressive enhancement — graceful no-op in unsupported browsers.

**`h1, h2, h3, h4, h5, h6 { text-wrap: balance }`**
Default wrapping distributes text greedily: first lines are filled before later ones, producing uneven line lengths in multi-line headings. `balance` equalizes line lengths across the heading for a more deliberate appearance — especially important at responsive sizes where headings often reflow. Progressive enhancement.

#### What is intentionally excluded

Rules such as `list-style`, `a` color/decoration, `button` appearance, and `table` border behavior are visual decisions, not normalizations. They belong in each style's `style.css` because different design systems have different defaults for these elements.

Josh's `#root, #__next { isolation: isolate }` is also excluded — it addresses z-index stacking in JavaScript framework roots, which are absent from this collection's static HTML files.

### Fonts

- Use self-hosted files or Google Fonts CDN — either is acceptable.
- Self-hosted: provide `.woff2` as primary format, `.ttf` as fallback. All `@font-face` blocks include `font-display: swap`. Font files live in `fonts/` within the style directory.
- Google Fonts: use the `<link>` preconnect + stylesheet pattern in `<head>`.

## Starting a new style

Copy the `base/` directory and rename it. It contains:

- `styles/reset.css` — do not modify
- `styles/style.css` — token skeleton with empty values, fill in to define the style
- `index.html` — boilerplate HTML, ready to use
- `README.md` — template ruleset to document the style's decisions

Then add the new style to the table below.

## Dashboard component checklist

For dashboard styles, ensure the following components are present:

- **Shell** — sidebar, topbar, content area. The fixed layout frame of the entire app.
- **Navigation** — sidebar links with active state and section groupings.
- **Typography scale** — compact heading hierarchy, uppercase section label, body, mono.
- **Color palette** — background, text, accent, border, muted, success, warning, danger.
- **Buttons** — primary, secondary, danger, disabled state.
- **Badges** — success, warning, danger, neutral. Used inline to communicate status.
- **Stat cards** — large value with small label. Summary metrics at a glance.
- **Cards / Panels** — surface with border, header separated from body.
- **Table** — uppercase muted header, row hover, right-aligned numeric columns, badge status.
- **Form** — input, select, textarea, checkbox, radio, file input.
- **Dialog** — confirm, form, danger variants. Use native `<dialog>` with backdrop.
- **Dropdown** — button-triggered floating menu, auto-repositions near viewport edges.
- **Toast** — temporary corner notification, variants follow the status palette.

## Styles

| Directory                              | Style           | Core idea                                               |
| -------------------------------------- | --------------- | ------------------------------------------------------- |
| [`haova/`](haova/)                     | HaoVA Style     | Two colors, one typeface, no decoration. Content leads. |
| [`haova-dashboard/`](haova-dashboard/) | HaoVA Dashboard | Minimalism applied to data-driven interfaces.           |
| [`minimalism/`](minimalism/)           | Minimalism      | Every element must justify its existence.               |
| [`brutalism/`](brutalism/)             | Brutalism       | Structure is visible. Nothing is hidden.                |
