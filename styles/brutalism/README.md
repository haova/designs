# Brutalism Style

A visual language of raw structure. Nothing is hidden. Everything is exposed.

## The Core Idea

Brutalism in web design borrows from brutalist architecture: honesty of materials. A wall is a wall. A border is a border. Structure is not concealed behind decoration — it is the design.

Where minimalism removes until nothing is unnecessary, brutalism exposes until nothing is hidden.

## Philosophy

- Structure is visible. Grids, borders, and boxes are shown, not implied.
- Decoration is rejected. Shadows, gradients, and rounded corners exist to make structure _look_ softer. Remove them.
- Weight is intentional. Heavy type and thick strokes signal hierarchy without subtlety.
- Rawness is valid. An unpolished edge is not a mistake — it is a choice.

## Color

- Base: black (`#000000`) and white (`#ffffff`) carry all structure.
- One utility color is allowed — vivid, not pastel. It marks the single most important interactive element per view.
- No gradients. No tints. Color is either fully on or fully off.

## Typography

- Typeface: heavy sans-serif or slab serif. Weight and presence over elegance.
- Two weights: regular (`400`) and bold (`700`). Bold dominates.
- Headings: oversized. Let them break the grid if the content demands it.
- Body: `line-height: 1.6`. Dense but readable.
- Headings: `line-height: 1.0`–`1.1`. Tight — weight creates separation, not space.
- Uppercase labels: common. Tracking (`letter-spacing`) used aggressively on small labels.
- Monospace: acceptable for body text in technical contexts — it reinforces the raw aesthetic.

## Borders and Boxes

Borders define territory. In brutalism they are thick and explicit.

- Default border: `2px solid #000000`. Never `1px` — too soft.
- Cards, inputs, buttons, sections: all bordered. No border-radius anywhere.
- Boxes may have offset shadows (solid, not blurred): `4px 4px 0 #000000` — creates depth without softness.
- Nested borders are acceptable. Structure inside structure is honest.

## Layout

- Grid is visible in the structure — columns and rows feel deliberate and mechanical.
- Content width: `60ch`–`72ch` for body text.
- Asymmetry is allowed when it serves hierarchy, not when it serves chaos.
- Large whitespace and tight whitespace may coexist — contrast in space is contrast in hierarchy.

## Heading Scale

| Level         | Size                           | Notes                              |
| ------------- | ------------------------------ | ---------------------------------- |
| Article title | `clamp(3rem, 6vw, 5rem)`       | Dominant. Intentionally oversized. |
| `h2`          | `clamp(1.75rem, 3vw, 2.25rem)` | Heavy section break.               |
| `h3`          | `clamp(1.25rem, 2vw, 1.5rem)`  | Sub-section.                       |
| `h4`–`h6`     | `1rem`                         | Bold, uppercase optional.          |

## Components

### Buttons

- Border: `2px solid`. No radius.
- Offset shadow: `4px 4px 0` — shifts on hover to `2px 2px 0`, simulating a press.
- Primary: black background, white text.
- Secondary: white background, black text, black border.
- No opacity hover. Physical feedback instead: shadow shrinks, button shifts.

### Forms

- Inputs: `border: 2px solid`, no radius. Large padding.
- Focus: `outline: 3px solid` accent color, `outline-offset: 2px` — explicit, visible.
- Labels: bold, uppercase, small tracking.
- Error states: red border, red label. Direct.

### Navigation

- Site name: large, bold, all caps or heavy weight.
- Nav links: bold, all caps, no underline by default, underline on hover.
- Header: thick bottom border. Footer: thick top border.

## Interaction

- Hover feedback is physical, not optical. Shadow shrinks, element shifts — not fades.
- No smooth opacity transitions. State changes are binary or near-binary.
- Motion is minimal. If used: `100ms`, sharp easing (`ease-in` or `linear`).

## Images

- No rounded corners. No shadows. Images are hard-edged.
- Hero images may have a thick border frame.
- Captions: bold, uppercase, small.

## Horizontal Lines

- Use `border` not `hr` where possible — `2px solid` matches the design's weight.
- Lines separate territories. Use them wherever a boundary is structural.
- Decorative use is still rejected — but structural use is more common than in minimalism.

## What Brutalism Is Not

- It is not ugly for the sake of ugly.
- It is not inaccessible — contrast ratios still apply, focus states still required.
- It is not chaos — structure is visible, not absent.
- It is not retro or nostalgic — it is honest about what the web is made of.
