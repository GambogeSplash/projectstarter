# PROJEECT SYSTEM CONTEXT

This project uses a "Forever Base" philosophy.
We build software that feels like software, not generic websites.

## Core Rules
1. **Token-First**: Do not invent colors, spacing, or radius. Use `src/design-system/tokens`.
2. **Motion-Led**: Motion explains state. It is not decoration.
3. **Mobile-First**: Design for small screens and touch first.
4. **No Magic Numbers**: If you need a value, add it to the system or use an existing token.

## Do not:
- add inline px values
- add duration-based easing
- animate large lists
- introduce new colors without tokens

## Tech Stack
-   **Framework**: Next.js 15 (App Router)
-   **Styling**: Tailwind CSS (Token-aware)
-   **Animation**: Framer Motion
-   **Testing**: Vitest + Playwright
-   **Validation**: Husky + Lint-staged
