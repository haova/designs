# Minimalism Style

A principle-driven visual language. Not a fixed set of rules — a way of deciding.

## The One Rule

**Every element must justify its existence.**

If removing it does not break the design, remove it.

## Philosophy

Minimalism is not a look. It is a method of reduction. The result varies; the process does not.

- Add nothing by default. Add only when the absence creates a problem.
- Each decision answers one question: _what does this do for the reader?_
- When two solutions work equally well, choose the simpler one.

## Color

Use as few colors as the content requires — not as many as the brand allows.

- Start with one: the text color.
- Add a second only when contrast or hierarchy genuinely requires it.
- Add a third only when the first two cannot carry the meaning.
- Never add color for decoration.

Recommended starting point: black text, white background. Deviate only with purpose.

## Typography

- One typeface per composition. Two at most, only when they serve different roles (body vs. code).
- As few weights as possible. Usually two: regular and bold. Never more than three.
- Size and weight do the work of hierarchy. Color and decoration do not.
- Line-height serves reading, not aesthetics.
  - Body: `1.5`–`1.7`.
  - Headings: `1.1`–`1.25` — tight, because size already provides separation.
- Letter-spacing: only for uppercase labels at small sizes. Never for body text.

## Spacing

Space is structure. It communicates relationship and hierarchy without adding elements.

- Related items are close. Unrelated items are distant.
- Before adding a divider, try adding space. If space works, the divider is not needed.
- Pick a base spacing unit and multiply it. Inconsistent spacing creates noise.

## Layout

- Body text width: `60ch`–`75ch`. Beyond that, the eye loses its line.
- Left-align body text. Centered text is for short labels and headings only.
- Use columns when the content is genuinely multi-column — not for decoration.

## Components

Each component has one job. If a component needs an explanation, simplify it.

### Buttons

- One primary action per view. Visually dominant.
- Secondary actions: same size, less visual weight.
- No icons unless the icon replaces a word the user already knows.
- State change via the minimum viable signal: opacity, border, or text. Not animation sequences.

### Forms

- One input per question. Labels always visible above the input — no placeholder-only labels.
- Focus state must be visible. It is functional, not decorative.
- Error states: inline, specific, adjacent to the field.

### Navigation

- Show only destinations the user is likely to need.
- Active state: unambiguous. Hover state: minimal.

## Interaction and Motion

- Motion communicates state change or spatial relationship. Nothing else.
- Duration: `100ms`–`200ms` for responses, `200ms`–`300ms` for transitions.
- No motion for elements that are not interactive.

## Images

- Every image must carry meaning the text cannot.
- Remove decorative images that add no information.
- Captions only when the image cannot speak for itself.

## The Test

Before any design decision:

1. What does this do for the reader or user?
2. Can it be removed without creating a problem?
3. Is there a simpler way to achieve the same result?

If (1) is unclear, or (2) is yes, act accordingly.

## What This Style Is Not

- It is not black-and-white only.
- It is not flat design.
- It is not sparse for the sake of appearing minimal.
- It is not a fixed component library.

It is a decision-making discipline. The output looks different every time. The reasoning does not.
