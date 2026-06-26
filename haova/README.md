# HaoVA Designs - HaoVA Style

A design language built on restraint: only what's necessary, nothing more.

## Scope

Targeted for personal blogs and news websites.

## Philosophy

Minimalism. Every element earns its place. If it doesn't serve a purpose, it doesn't exist.

## Principles

- **Clarity over decoration** — Remove visual noise. Let content breathe.
- **Purposeful whitespace** — Space is not emptiness; it is structure.
- **Consistent hierarchy** — Typography and scale define importance, not color alone.
- **Restrained palette** — Limit colors to what communicates, not what decorates.
- **Functional motion** — Animations guide attention, never demand it.
- **Content-first** — UI recedes. Content leads.

## Visual Language

- Two colors only: white background (`#ffffff`) and black text (`#000000`).
- No accent colors — contrast and spacing carry all the weight.
- Sharp geometry — no excessive border radius.
- Thin, precise strokes when borders are needed.
- High contrast for text; structure through whitespace, not color.

## Typography

- Typeface: **Castledown** (regular 400, heavy 700 — no weights in between).
- Two weights only: 400 for body, 700 for headings.
- Tight line-height for headings (`1.2`); comfortable for body (`1.65`).
- Article title: `line-height: 1.05` — very tight, large size creates enough space between lines naturally.
- Blockquote: `line-height: 1.4` (snug) — slightly tighter than body to feel distinct.
- Code block: `line-height: 1.7` — looser than body for readability between dense lines of code.
- Weight contrast over size contrast where possible.
- Minimal font variants per composition.

### Heading Scale (Rich Text)

- Before changing any heading size, verify all lower levels remain smaller than the one above.
- All rich text headings use `line-height: 1.2` — tight, as size alone provides visual separation.
- Body paragraphs use `line-height: 1.65` — comfortable reading rhythm.
- Mobile cascade:
  - Article title: `2.5rem`
  - `h2`: `1.5rem`
  - `h3`: `1.25rem`
  - `h4`–`h6`: `1rem`
- Desktop cascade uses `clamp()` — each heading scales up with the viewport.

### Rich Text Rules

- Line length: `max-width: 66ch` for body content.
- Paragraph spacing: `margin-bottom: 1rem`.
- Heading top margin is larger than bottom — pulls away from previous block, stays close to its content.
  - `h2`: `margin-top: 3rem`, `margin-bottom: 1rem`.
  - `h3`: `margin-top: 2rem`, `margin-bottom: 0.75rem`.
- Blockquote: left border `2px solid`, generous `margin-block` above and below.
- Inline code: inverted colors (black background, white text), `padding: 0.1em 0.35em`.
- Code block (`pre`): `border: 1px solid` black, white background, no color inversion, `padding: 1.5rem`, scrollable horizontally. `pre code` resets inline code styles — border and monospace font are sufficient distinction.
- Links: underline by default, no underline on hover — underline signals it is a link, removal on hover confirms the interaction.
- List items: `disc`, `margin-bottom: 0.5rem` between items.

### Image Rules

- Images span full content width (`width: 100%`).
- Hero image: `aspect-ratio: 2/1`, `object-fit: cover`.
- Inline images: natural aspect ratio, placed mid-article.
- Captions (`figcaption`): small text, `margin-top: 0.5rem`, no border or decoration.
- No image borders, no rounded corners, no shadows.

## Article Title

- Category above the title — sets context before the reader commits to the headline.
- Title is the anchor — largest element, left-aligned, never centered. `clamp(2.5rem, 5vw, 3.75rem)`.
- `2.5rem` (40px) on mobile is intentional — the reader must immediately know what the article is about. A smaller title fails that purpose.
- Date below the title — least important of the three, the reader cares what before when.
- All three are separate lines — they are different types of metadata, not equals.
- Category and date use the same size (`sm`) and the same font — no mono, no decoration.

## Header

- Site name and nav are intentionally small — the header is chrome, not content.
- Writing is the identity, not the name.
- Readers arrive via links or RSS already knowing where they are; the header does not need to announce itself.

## Footer

- Minimal — site name left, tagline right.
- Same height as the header — `padding-block: 1.5rem` on both.
- Separated from page content by a top border (`1px solid`).
- Same small scale as the header — chrome, not content.
- No links, no social icons, no copyright block unless strictly necessary.

## Form

- All controls use `border: 1px solid` black, no border-radius, no shadows.
- Background is white, text is black — no filled or tinted inputs.
- Focus state: `outline: 2px solid` black, `outline-offset: -1px` — inset, no glow.
- Checkbox and radio excluded from the outline rule — they use the browser's native focus indicator.
- Checkbox and radio use `accent-color` black to stay within the two-color palette.
- Labels are bold, controls use regular weight.
- `select` matches input styling — same border, same padding, same font.
- Controls stack vertically with consistent `gap` between label and input.
- Submit button uses `.btn-primary` — black background, white text, `1px solid` black border.
- Destructive or secondary actions use `.btn-secondary` — transparent background, black text, `1px solid` black border.
- Buttons have no border-radius, no shadows, no icons unless strictly necessary.
- Hover state: `opacity: 0.7` — no color change.
- Button, input, and select share the same height (`2.5rem`) and the same horizontal padding (`1rem`) — explicitly set to override browser inconsistencies. Do not rely on padding alone to equalize form element heights.

## Horizontal Lines

A horizontal line is a hard boundary. It means: something ends here, something else begins.

Use it only when that meaning is needed:

- Between list items that would blur together without it.
- In rich text as a semantic scene break — where the author signals a hard stop.
- As a structural border (header top/bottom, footer top) to separate chrome from content.

Do not use it as decoration. If whitespace alone communicates the separation, the line is not needed.

## Notes

- No gradients.
- No shadows unless strictly necessary for elevation.
- Icons are outline or minimal fill; never decorative.
- Always white background, always black text — no dark mode.
