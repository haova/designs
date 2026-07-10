# DoMo Sans — Type Specimen

A local preview tool for the DoMo Sans variable font, benchmarked against Lexend. Not a design style — a utility page for inspecting glyph shapes and weight range before adopting the typeface elsewhere.

## Structure

Follows the repository's standard file layout (see [`styles/README.md`](../../styles/README.md)) and borrows its chrome — header, footer, sticky control bar, layout tokens — from the [HaoVA Style](../../styles/haova-reader/README.md) ruleset: two colors only, no border-radius, no shadows, borders carry structure.

| File          | Purpose                                                          |
| ------------- | ----------------------------------------------------------------- |
| `index.html`  | Specimen page — display sample, glyph grid, paragraph comparison. |

## Fonts in use

- **Chrome (UI text)** — Castledown, same as HaoVA Style, self-hosted in `fonts/`.
- **Specimen content** — DoMo Sans (`wght` 100–1000, `opsz` 9–40) and Lexend (`wght` 100–900), both variable, self-hosted in `fonts/`.
- **`Tofu`** — a synthetic font with an empty character map, embedded as a data URI in `css/style.css`. Placed last in the specimen font stacks so any missing glyph or unintended fallback renders as a visible tofu box instead of silently falling back to a system font.

## Weight control

A single sticky slider (`100`–`900`, default `400`) drives `font-variation-settings: "wght"` on both DoMo Sans and Lexend simultaneously via a CSS custom property (`--weight`), so the two typefaces stay in sync while comparing.

## Glyph grid

Each Vietnamese character (uppercase, lowercase, all six tone marks per vowel, numerals, punctuation) is rendered large in both typefaces stacked in the same bordered cell — DoMo Sans on top, Lexend below — placed edge to edge for direct letterform comparison.
