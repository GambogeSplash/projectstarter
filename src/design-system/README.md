# CHIDI Design System

A comprehensive design token system and component library for the CHIDI business management platform.

## 📐 Architecture

```
/design-system
├── /tokens              # Design tokens (CSS variables)
│   ├── colors.css       # Color palette
│   ├── typography.css   # Type scale & font definitions
│   ├── spacing.css      # Spacing scale
│   ├── radius.css       # Border radius values
│   └── shadows.css      # Shadow & glow effects
└── /motion              # Animation presets
    └── transitions.ts   # Spring configs & variants
```

## 🎨 Design Tokens

### Colors

All colors are defined as CSS custom properties and can be used directly:

```tsx
// Background colors
bg-[var(--color-bg-app)]           // #131316 - Main background
bg-[var(--color-bg-surface)]       // #1b1b1f - Cards, surfaces
bg-[var(--color-bg-surface-raised)] // #1f1f24 - Elevated surfaces
bg-[var(--color-bg-surface-hover)]  // #27272d - Hover states

// Accent colors
bg-[var(--color-accent-primary)]    // #6060f8 - Primary blue
bg-[var(--color-accent-secondary)]  // #33ffcc - Teal accent
bg-[var(--color-accent-destructive)] // #cd0404 - Error red

// Text colors
text-[var(--color-text-primary)]    // #ffffff - Primary text
text-[var(--color-text-secondary)]  // #5e5e66 - Secondary text
text-[var(--color-text-tertiary)]   // #83838b - Muted text

// Border colors
border-[var(--color-border-default)] // #27272d
border-[var(--color-border-accent)]  // #6060f8
```

### Typography

Use semantic typography classes for consistent text styling:

```tsx
<h1 className="text-heading-1">Large Heading</h1>
<h2 className="text-heading-2">Medium Heading</h2>
<h3 className="text-heading-3">Small Heading</h3>
<p className="text-body">Body text with optimal readability</p>
<p className="text-body-sm">Smaller body text</p>
<span className="text-caption">Captions and meta info</span>
<label className="text-label">Form labels</label>
<button className="text-button">Button text</button>
```

#### Font Scale

| Class | Size | Weight | Line Height | Use Case |
|-------|------|--------|-------------|----------|
| `text-display` | 32px | 700 | 1.25 | Hero sections |
| `text-heading-1` | 28px | 700 | 1.25 | Page titles |
| `text-heading-2` | 24px | 600 | 1.375 | Section headers |
| `text-heading-3` | 20px | 600 | 1.375 | Subsections |
| `text-heading-4` | 15px | 500 | 1.5 | Card titles |
| `text-body` | 14px | 400 | 1.6 | Main content |
| `text-body-sm` | 13px | 400 | 1.6 | Secondary content |
| `text-caption` | 12px | 400 | 1.5 | Metadata, timestamps |
| `text-label` | 13px | 500 | 1.5 | Form labels |
| `text-button` | 14px | 500 | 1.5 | Button labels |

### Spacing

Use semantic spacing tokens for consistent layouts:

```tsx
// Spacing scale (use with Tailwind utilities)
gap-[var(--space-xs)]     // 8px
gap-[var(--space-sm)]     // 12px
gap-[var(--space-md)]     // 16px
gap-[var(--space-lg)]     // 20px
gap-[var(--space-xl)]     // 24px
gap-[var(--space-2xl)]    // 32px

// Component-specific spacing
p-[var(--space-card-padding)]      // 16px - Card padding
p-[var(--space-card-padding-lg)]   // 24px - Large card padding
gap-[var(--space-section-gap)]     // 24px - Between sections
gap-[var(--space-element-gap)]     // 16px - Between elements
```

### Border Radius

Consistent rounding for all UI elements:

```tsx
rounded-[var(--radius-button)]  // 10px - Buttons
rounded-[var(--radius-card)]    // 14px - Cards
rounded-[var(--radius-input)]   // 10px - Inputs
rounded-[var(--radius-badge)]   // 8px - Badges
rounded-[var(--radius-pill)]    // 9999px - Pills
rounded-[var(--radius-modal)]   // 16px - Modals
```

### Shadows

Depth and glow effects:

```tsx
shadow-[var(--shadow-sm)]           // Subtle elevation
shadow-[var(--shadow-md)]           // Medium elevation
shadow-[var(--shadow-lg)]           // High elevation
shadow-[var(--shadow-glow-primary)] // Primary accent glow
shadow-[var(--focus-ring)]          // Focus indicator
```

## 🎬 Motion

Import motion presets for consistent animations:

```tsx
import { fastSpring, softSpring, fadeInUp } from "@/design-system/motion/transitions";

// Button tap feedback
<motion.button
  whileTap={{ scale: 0.98 }}
  transition={fastSpring}
>
  Click me
</motion.button>

// Card entrance
<motion.div
  initial={fadeInUp.initial}
  animate={fadeInUp.animate}
  transition={softSpring}
>
  Content
</motion.div>
```

### Available Transitions

| Preset | Use Case | Config |
|--------|----------|--------|
| `fastSpring` | Button feedback, toggles | Stiff, quick |
| `softSpring` | Card entrances, modals | Gentle, smooth |
| `smoothSpring` | Page transitions | Slow, fluid |
| `bounceSpring` | Success states | Playful |
| `easeOut` | Linear animations | Tween-based |

### Animation Variants

```tsx
import { fadeInUp, fadeIn, scaleIn, slideInFromRight } from "@/design-system/motion/transitions";

// Fade in from bottom
<motion.div variants={fadeInUp} />

// Fade in only
<motion.div variants={fadeIn} />

// Scale in
<motion.div variants={scaleIn} />

// Slide from right (mobile sidebar)
<motion.div variants={slideInFromRight} />
```

## 🧩 Components

Reusable UI components following shadcn/ui patterns with CHIDI design tokens.

### Button

```tsx
import { Button } from "@/components/ui/button";

// Variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

<Card variant="default" padding="md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

### Input

```tsx
import { Input } from "@/components/ui/input";

<Input
  type="email"
  placeholder="Enter email"
  error={false}
/>
```

### Badge

```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="success">In Stock</Badge>
<Badge variant="warning">Low Stock</Badge>
<Badge variant="error">Out of Stock</Badge>
<Badge variant="info">New</Badge>
```

## ✨ Best Practices

### 1. Always Use Tokens

❌ **Don't:**
```tsx
<div className="bg-[#1b1b1f] rounded-[14px] p-4">
```

✅ **Do:**
```tsx
<div className="bg-[var(--color-bg-surface)] rounded-[var(--radius-card)] p-[var(--space-card-padding)]">
```

### 2. Use Semantic Typography Classes

❌ **Don't:**
```tsx
<h2 className="text-[24px] font-semibold">Heading</h2>
```

✅ **Do:**
```tsx
<h2 className="text-heading-2">Heading</h2>
```

### 3. Consistent Spacing

❌ **Don't:**
```tsx
<div className="gap-[17px]">
```

✅ **Do:**
```tsx
<div className="gap-[var(--space-md)]"> {/* 16px */}
```

### 4. Motion with Purpose

❌ **Don't:**
```tsx
<motion.div
  whileHover={{ rotate: 360, scale: 2 }}
  transition={{ duration: 2 }}
>
```

✅ **Do:**
```tsx
<motion.button
  whileTap={{ scale: 0.98 }}
  transition={fastSpring}
>
```

### 5. Component Composition

❌ **Don't:**
```tsx
<button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
  Click
</button>
```

✅ **Do:**
```tsx
<Button variant="primary" size="md">
  Click
</Button>
```

## 🎯 Design Principles

1. **Consistency** - Use tokens, not arbitrary values
2. **Clarity** - Semantic naming over cryptic abbreviations
3. **Accessibility** - Proper contrast, focus states, keyboard navigation
4. **Performance** - CSS variables for runtime theming, minimal JS
5. **Composability** - Small, reusable components
6. **Motion** - Intentional, calm animations that enhance UX

## 🔄 Migration Guide

To migrate existing components to use the design system:

1. **Replace hardcoded colors:**
   ```diff
   - bg-[#1b1b1f]
   + bg-[var(--color-bg-surface)]
   ```

2. **Replace hardcoded spacing:**
   ```diff
   - gap-[16px]
   + gap-[var(--space-md)]
   ```

3. **Use typography classes:**
   ```diff
   - <h2 className="font-['Inter:Semibold'] text-[24px]">
   + <h2 className="text-heading-2">
   ```

4. **Use component library:**
   ```diff
   - <button className="bg-[#6060f8] rounded-[10px] px-4 py-2">
   + <Button variant="primary" size="md">
   ```

## 📦 What's Included

- ✅ Complete color system (backgrounds, accents, text, borders)
- ✅ Typography scale with semantic classes
- ✅ Spacing scale for consistent layouts
- ✅ Border radius tokens
- ✅ Shadow and glow effects
- ✅ Motion presets and animation variants
- ✅ Button component with variants
- ✅ Card component system
- ✅ Input component with error states
- ✅ Badge component with status variants
- ✅ shadcn/ui compatibility layer
- ✅ Comprehensive documentation

## 🚀 Next Steps

1. Migrate existing components to use tokens
2. Add more UI components (Switch, Select, Dialog, etc.)
3. Create layout components (Container, Grid, Stack)
4. Add dark/light theme toggle support
5. Create Storybook documentation
