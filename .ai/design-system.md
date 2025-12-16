# DESIGN SYSTEM CONTEXT

## Structure
-   **Core Components**: `src/design-system/components` (Brand-defining, heavy usage)
    -   Examples: `Card`, `Button`, `Text`
-   **UI Primitives**: `src/components/ui` (Radix-wrapped, functional)
    -   Examples: `Sheet`, `Dialog`, `Dropdown`

## Usage Rules
-   **Imports**: Always check `src/design-system/index.ts` first.
-   **Shadcn**: We do NOT use standard Shadcn styles. We wrap Radix primitives with our own Framer Motion transitions.
-   **Icons**: Use SVGs or lucide-react (if added later).
