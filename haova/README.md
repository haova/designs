# HaoVA Style

A minimalist visual language for personal blogs and news websites. Built on restraint — only what is necessary, nothing more.

## Philosophy

Minimalism. Every element earns its place. If it does not serve a purpose, it does not exist.

UI recedes. Writing is the identity.

## Color

- Two colors only: `#ffffff` background, `#000000` text.
- No accent colors. No tints. No shades.
- No dark mode.
- Contrast and spacing carry all structural weight.

## Typography

- Typeface: **Castledown** only — `400` regular, `700` heavy. No weights in between.
- Body: `400`, `line-height: 1.65`.
- Headings: `700`, `line-height: 1.2`.
- Blockquote: `line-height: 1.4`.
- Article title: `line-height: 1.05`.
- Code block: `line-height: 1.7`.
- Monospace fallback: `"JetBrains Mono", "Fira Code"` — for code only.

## Heading Scale

### Inside rich text

Before changing any heading size, verify all lower levels remain smaller than the level above.

| Level         | Mobile (floor) | Desktop (clamp max) |
| ------------- | -------------- | ------------------- |
| Article title | `2.5rem`       | `3.75rem`           |
| `h2`          | `1.5rem`       | `1.875rem`          |
| `h3`          | `1.25rem`      | `1.375rem`          |
| `h4`–`h6`     | `1rem`         | `1rem`              |

- `2.5rem` on mobile for the article title is intentional — readers must immediately know what the page is about.
- Use `clamp()` for fluid scaling: `clamp(floor, viewport-unit, max)`.

## Layout

- Max container width: `72rem`.
- Rich text line length: `max-width: 66ch`.
- No border-radius. No shadows (unless strictly required for elevation).
- No gradients.

## Article Title Block

Order: category → title → date. All on separate lines.

- **Category** — sets context before the reader commits to the headline. Uppercase, small size.
- **Title** — the anchor. Left-aligned, never centered. `clamp(2.5rem, 5vw, 3.75rem)`.
- **Date** — least important. Readers care _what_ before _when_.
- Category and date use the same size (`sm`) and the same font. No mono, no decoration.

## Rich Text Rules

- Paragraph spacing: `margin-bottom: 1rem`.
- Heading margins: top > bottom — pulls away from the previous block, stays close to its own content.
  - `h2`: `margin-top: 3rem`, `margin-bottom: 1rem`.
  - `h3`: `margin-top: 2rem`, `margin-bottom: 0.75rem`.
- Blockquote: `border-left: 2px solid`, generous `margin-block`.
- Inline code: inverted colors (black background, white text), `padding: 0.1em 0.35em`.
- Code block (`pre`): `border: 1px solid`, white background, no inversion, `padding: 1.5rem`, scrollable. `pre code` resets inline code styles.
- Links: underline by default, no underline on hover.
- List items: `disc`, `margin-bottom: 0.5rem`.
- First child: `margin-top: 0` — no leading gap at the top of the content area.

## Images

- Span full content width: `width: 100%`.
- Hero image: `aspect-ratio: 2/1`, `object-fit: cover`.
- Inline images: natural aspect ratio.
- Caption (`figcaption`): small text, `margin-top: 0.5rem`, no border or decoration.
- No rounded corners. No borders. No shadows.

## Header

- Site name and nav are intentionally small — the header is chrome, not content.
- `padding-block: 1.5rem`. Separated from content by a `border-bottom: 1px solid`.
- Nav links: no underline by default, underline on hover.

## Footer

- Minimal: site name left, tagline right.
- Same height as the header: `padding-block: 1.5rem`.
- Separated from content by a `border-top: 1px solid`.
- No social icons, no links, no copyright block unless strictly necessary.

## Form

- All controls: `border: 1px solid` black, no border-radius, no shadows, white background, black text.
- Focus state: `outline: 2px solid` black, `outline-offset: -1px` — inset, no glow.
- Checkbox and radio: excluded from the outline rule. Use native focus. `accent-color: black`.
- Labels: `700`. Controls: `400`.
- Button, input, and select share the same explicit height (`2.5rem`) and horizontal padding (`1rem`). Do not rely on padding alone — browser defaults are inconsistent.
- `select`: `appearance: none` to remove native arrow and allow padding alignment.
- `textarea`: excluded from fixed height. `resize: vertical`, `min-height: 6rem`.
- Submit: `.btn-primary` — black background, white text.
- Secondary/destructive: `.btn-secondary` — transparent background, black text, black border.
- Hover state: `opacity: 0.7`. No color change.
- No border-radius, no shadows on buttons.

## Horizontal Lines

A horizontal line means: something ends here, something else begins.

Use only when that boundary is necessary:

- Between list items that blur together without it.
- In rich text as a semantic scene break.
- As a structural border (header bottom, footer top).

If whitespace alone communicates the separation, the line is not needed.

## Hover and Interaction

- Hover is functional, not decorative — it confirms interactivity.
- Links: underline → no underline.
- Buttons and controls: `opacity: 0.7`. No color shift, no background change.
- No animations beyond simple transitions. Motion guides attention, never demands it.

## Notes

- Icons: outline or minimal fill only. Never decorative.
- No emoji in UI unless the content itself requires it.
- Always white background, always black text — no exceptions.
