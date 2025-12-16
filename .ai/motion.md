# MOTION CONTEXT

## Philosophy
"Motion explains state."

## Physics
We refrain from using duration-based easing curves (cubic-bezier).
We use **Spring Physics** for natural interaction.

## Presets (`src/design-system/motion`)
-   **`softSpring`**: for UI transitions (enter/exit, layout).
    -   Stiffness: 300, Damping: 32
-   **`fastSpring`**: for micro-interactions (hover, tap).
    -   Stiffness: 400, Damping: 30

## Rules
-   **Enter**: Use `enterSoft` preset (`y: 8 -> 0`, `opacity: 0 -> 1`).
-   **Feedback**: Always use `pressFeedback` (`scale: 0.98`) on interactive elements.
-   **Layout**: Use `layout` prop for expanding/moving lists.
