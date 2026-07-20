# HaoVA Dashboard Style

A personal visual language for management dashboards and internal tools. Minimalism as discipline — not aesthetic poverty, but the refusal to add anything that does not earn its place.

## Philosophy

Minimalism does not stop at blogs. A dashboard built on restraint is easier to read, faster to scan, and harder to misunderstand.

The interface recedes. Data is the identity.

Features exist because they are needed, not because dashboards are expected to have them. Every control, every column, every status indicator must justify itself.

Minimalism serves usability — not the other way around. The user knows the product; the interface should get out of the way, not explain itself. Neatness and convenience outrank purity.

## Views

| File            | View            | Purpose                                                                 |
| --------------- | --------------- | ----------------------------------------------------------------------- |
| `index.html`    | Showcase        | Displays the design system — palette, type scale, components.           |
| `analytic.html` | Analytics board | Live, read-only metrics display. No user interaction — no buttons, links, or hover states. Designed for small screens (~1024×600): fixed-viewport grid, no scrolling. Data ticks via `scripts/analytic.js`. |

## Color

- Base: `#000000` background, `#ffffff` text.
- Primary accent: `#ccff00` — used for active states, key actions, highlights, and focus indicators.
- Borders and dividers: `rgba(255, 255, 255, 0.12)`.
- Muted text: `rgba(255, 255, 255, 0.5)` — for secondary labels, timestamps, placeholders.
- Danger: `#ff4444`. Success: `#44ff88`. Warning: `#ffcc00`.
- No gradients. No tints beyond the defined palette.
- Dark only — no light mode.

## Typography

- Typeface: **DoMo Sans** only (variable font).
- Body: `400`, `line-height: 1.6`.
- Headings: `700`, `line-height: 1.2`.
- Data values (numbers, stats): `700`, tabular-nums where alignment matters.
- Monospace fallback: `"JetBrains Mono", "Fira Code"` — for code, IDs, and raw values only.

## Heading Scale

| Level  | Mobile (floor) | Desktop (clamp max) |
| ------ | -------------- | ------------------- |
| `h1`   | `1.75rem`      | `2.25rem`           |
| `h2`   | `1.375rem`     | `1.625rem`          |
| `h3`   | `1.125rem`     | `1.25rem`           |
| `h4`–`h6` | `1rem`      | `1rem`              |

- Dashboard headings are navigational anchors, not editorial statements — keep them compact.
- Use `clamp()` for fluid scaling.

## Layout

- Max container width: `80rem`.
- Sidebar width: `14rem` fixed. Collapses to icon-only at `4rem` on narrow viewports.
- Content area: fluid, fills remaining space.
- Spacing unit: `0.25rem` (4px base). All spacing values are multiples of this unit.
- No border-radius on structural elements. Small components (badges, tags) may use `border-radius: 3px`.
- No shadows. Elevation is communicated by borders and layering, not shadow depth.

## Shell

- **Sidebar**: left-aligned, full height, `border-right: 1px solid`. Contains nav, section groupings, and user info at the bottom.
- **Topbar**: `height: 3.5rem`, `border-bottom: 1px solid`, `padding-inline: 1.5rem`. Contains page title, breadcrumbs, and top-right actions.
- **Content area**: `padding: 1.5rem`. Scrollable independently of the shell.

## Navigation

- Nav items: no underline, `padding: 0.625rem 1rem`, full-width clickable area.
- Active item: `#ccff00` text, `background: rgba(204, 255, 0, 0.08)`, left border `2px solid #ccff00`.
- Hover: `background: rgba(255, 255, 255, 0.05)`. No color shift on text.
- Section labels: uppercase, `0.6875rem`, muted, `letter-spacing: 0.08em`. Not clickable.
- Icons: 20px, stroke-based, aligned to text baseline.

## Cards and Panels

- Background: `rgba(255, 255, 255, 0.04)`.
- Border: `1px solid rgba(255, 255, 255, 0.12)`.
- Padding: `1.25rem`.
- No border-radius. No shadows.
- Card header: label top-left, optional action top-right. `border-bottom: 1px solid` separates header from body.
- Stat card: large value (`2rem`, `700`), small label below (`0.75rem`, muted).

## Tables

- Full width within container.
- Header row: `700`, muted text, `border-bottom: 1px solid`, `padding-block: 0.625rem`.
- Body rows: `padding-block: 0.75rem`, `border-bottom: 1px solid rgba(255,255,255,0.06)`.
- Hover row: `background: rgba(255, 255, 255, 0.03)`.
- Numeric columns: right-aligned, tabular-nums.
- No zebra striping. Borders carry the structure.

## Form

- All controls: `border: 1px solid rgba(255,255,255,0.2)`, no border-radius, `background: rgba(255,255,255,0.05)`, white text.
- Focus state: `outline: 2px solid #ccff00`, `outline-offset: -1px` — inset, no glow.
- Placeholder: muted (`rgba(255,255,255,0.35)`).
- Checkbox and radio: `accent-color: #ccff00`.
- Labels: `700`. Controls: `400`.
- Button, input, and select share the same explicit height (`2.5rem`) and horizontal padding (`1rem`).
- `select`: `appearance: none`, custom chevron icon.
- `textarea`: `resize: vertical`, `min-height: 6rem`.
- Submit / primary action: `.btn-primary` — `#ccff00` background, `#000000` text, `700`.
- Secondary: `.btn-secondary` — transparent background, white text, `border: 1px solid rgba(255,255,255,0.2)`.
- Danger: `.btn-danger` — `#ff4444` background, white text.
- Hover: `opacity: 0.85`. No color change.
- Disabled: `opacity: 0.35`, `cursor: not-allowed`.

## Status and Badges

- Inline status badges: `padding: 0.2em 0.55em`, `border-radius: 3px`, `font-size: 0.75rem`, `700`.
- Active / success: `#44ff88` text, `rgba(68,255,136,0.12)` background.
- Warning: `#ffcc00` text, `rgba(255,204,0,0.12)` background.
- Danger / error: `#ff4444` text, `rgba(255,68,68,0.12)` background.
- Neutral / inactive: muted text, `rgba(255,255,255,0.08)` background.

## Data Visualization

- Primary chart color: `#ccff00`.
- Secondary colors follow the status palette: `#44ff88`, `#ffcc00`, `#ff4444`.
- Grid lines: `rgba(255,255,255,0.06)`. Axis labels: muted.
- No filled backgrounds on chart areas — outlines and points only, unless area fill aids comprehension.
- Tooltips: `#000000` background, `border: 1px solid rgba(255,255,255,0.2)`, `padding: 0.5rem 0.75rem`.

## Horizontal Lines

Use only when a boundary is necessary:

- Between sections that would otherwise blur together.
- As structural borders (topbar, sidebar, card header).

If spacing alone communicates the separation, the line is not needed.

## Hover and Interaction

- Hover confirms interactivity — it is functional, not decorative.
- Buttons and controls: `opacity: 0.85`. No color shift.
- Rows and list items: `background: rgba(255,255,255,0.03)`.
- Transitions: `150ms ease` for opacity and background. No motion beyond this.

## Notes

- Icons: outline or minimal fill only. 20px default, 16px for dense contexts. Never decorative.
- No emoji in UI.
- Always `#000000` background, always `#ffffff` text — no exceptions outside the defined status palette.
- `#ccff00` is reserved for primary actions and active states only — do not use it for decoration.
