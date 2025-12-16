# Motion Philosophy

## 1. Motion Strategy
- **Motion explains state**, not decoration.
- **Nothing moves without reason**.
- **Motion feels physical**, not cinematic.

## 2. The 5 Rules
1. **Motion is spring-based**. No `ease-in-out`. No fixed durations.
2. **Things move in space, not opacity**. Opacity is supporting (y-axis 4-12px as lead).
3. **Hierarchy controls timing**. Primary first, secondary 40-80ms later.
4. **Touch has weight**. Scale down on press. Faster than hover.
5. **Layout changes animate**. Use `layout` prop.

## 3. Tokens
- **enter/soft**: `y: 8 -> 0`, `opacity: 0 -> 1`
- **press/feedback**: `scale: 1 -> 0.98`
- **transition/layout**: spring based.

## 4. Accessibility
- **Reduced Motion**: Respect user preferences.
  ```tsx
  const prefersReducedMotion = useReducedMotion();
  transition={prefersReducedMotion ? { duration: 0 } : softSpring}
  ```
