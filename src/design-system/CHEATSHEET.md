# CHIDI Design System - Quick Reference Cheat Sheet

## 🎨 Colors

```tsx
// Backgrounds
bg-[var(--color-bg-app)]            // #131316 - Main bg
bg-[var(--color-bg-surface)]        // #1b1b1f - Cards
bg-[var(--color-bg-surface-raised)] // #1f1f24 - Elevated

// Accents
bg-[var(--color-accent-primary)]    // #6060f8 - Blue
bg-[var(--color-accent-secondary)]  // #33ffcc - Teal

// Text
text-[var(--color-text-primary)]    // #ffffff
text-[var(--color-text-secondary)]  // #5e5e66
text-[var(--color-text-tertiary)]   // #83838b

// Borders
border-[var(--color-border-default)] // #27272d
```

## 📝 Typography

```tsx
<h1 className="text-display">Hero Text</h1>       // 32px, bold
<h1 className="text-heading-1">Page Title</h1>    // 28px, bold
<h2 className="text-heading-2">Section</h2>       // 24px, semibold
<h3 className="text-heading-3">Subsection</h3>    // 20px, semibold
<h4 className="text-heading-4">Card Title</h4>    // 15px, medium
<p className="text-body">Main content</p>         // 14px
<p className="text-body-sm">Secondary</p>         // 13px
<span className="text-caption">Meta info</span>   // 12px
```

## 📏 Spacing

```tsx
gap-[var(--space-xs)]   // 8px
gap-[var(--space-sm)]   // 12px
gap-[var(--space-md)]   // 16px
gap-[var(--space-lg)]   // 20px
gap-[var(--space-xl)]   // 24px
gap-[var(--space-2xl)]  // 32px

p-[var(--space-card-padding)]     // 16px - Cards
p-[var(--space-card-padding-lg)]  // 24px - Large cards
```

## 🔄 Radius

```tsx
rounded-[var(--radius-button)]  // 10px - Buttons
rounded-[var(--radius-card)]    // 14px - Cards
rounded-[var(--radius-input)]   // 10px - Inputs
rounded-[var(--radius-pill)]    // 9999px - Pills
```

## 🧩 Components

### Button
```tsx
import { Button } from "@/components/ui/button";

<Button variant="primary" size="md">Click</Button>
// variant: primary | secondary | ghost | destructive | outline
// size: sm | md | lg
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

<Card padding="md">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
// padding: none | sm | md | lg
// variant: default | elevated | outline
```

### Input
```tsx
import { Input } from "@/components/ui/input";

<Input type="email" placeholder="Email" error={false} />
```

### Badge
```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="success">In Stock</Badge>
// variant: default | success | warning | error | info | outline
```

### Stack
```tsx
import { Stack } from "@/components/ui/stack";

<Stack gap="md" direction="column">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
// gap: xs | sm | md | lg | xl | 2xl
// direction: row | column
// align: start | center | end | stretch
// justify: start | center | end | between | around
```

### Container
```tsx
import { Container } from "@/components/ui/container";

<Container maxWidth="lg" padding>
  Content
</Container>
// maxWidth: sm | md | lg | xl | full
```

## 🎬 Motion

```tsx
import { motion } from "motion/react";
import { fastSpring, softSpring, fadeInUp } from "@/design-system/motion/transitions";

// Button tap
<motion.button
  whileTap={{ scale: 0.98 }}
  transition={fastSpring}
/>

// Card entrance
<motion.div
  initial={fadeInUp.initial}
  animate={fadeInUp.animate}
  transition={softSpring}
/>

// Available springs:
// - fastSpring (buttons, toggles)
// - softSpring (cards, modals)
// - smoothSpring (page transitions)
// - bounceSpring (success states)

// Available variants:
// - fadeInUp, fadeIn, scaleIn
// - slideInFromRight, slideInFromLeft
```

## 📦 Import Everything

```tsx
// Single import
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Badge,
  Stack,
  Container
} from "@/components/ui";

// Motion
import { fastSpring, fadeInUp } from "@/design-system/motion/transitions";
```

## ✨ Quick Patterns

### Form
```tsx
<Stack gap="md">
  <Input type="email" placeholder="Email" />
  <Input type="password" placeholder="Password" />
  <Button variant="primary" size="md">Submit</Button>
</Stack>
```

### Product Card
```tsx
<Card padding="md">
  <Stack gap="sm">
    <h3 className="text-heading-4">Product Name</h3>
    <p className="text-body-sm text-[var(--color-text-secondary)]">
      Description
    </p>
    <Badge variant="success">In Stock</Badge>
    <Button variant="primary">Add to Cart</Button>
  </Stack>
</Card>
```

### Page Layout
```tsx
<div className="min-h-screen bg-[var(--color-bg-app)]">
  <Container maxWidth="lg" padding>
    <Stack gap="2xl">
      <h1 className="text-heading-1">Page Title</h1>
      <Card padding="lg">
        {/* Content */}
      </Card>
    </Stack>
  </Container>
</div>
```

### Status Badge List
```tsx
<Stack direction="row" gap="sm">
  <Badge variant="success">Active</Badge>
  <Badge variant="warning">Pending</Badge>
  <Badge variant="error">Failed</Badge>
  <Badge variant="info">New</Badge>
</Stack>
```

## 🎯 Common Replacements

| Old | New |
|-----|-----|
| `bg-[#1b1b1f]` | `bg-[var(--color-bg-surface)]` |
| `text-[#5e5e66]` | `text-[var(--color-text-secondary)]` |
| `gap-[16px]` | `gap-[var(--space-md)]` |
| `rounded-[14px]` | `rounded-[var(--radius-card)]` |
| `text-[14px]` | `text-body` |
| Custom button | `<Button variant="primary">` |
| Flex column | `<Stack direction="column">` |

## 🚫 Don't Do

```tsx
❌ <div className="bg-[#ff0000]">        // Random color
❌ <div className="gap-[17px]">          // Non-standard spacing
❌ <div className="text-[22px]">         // Arbitrary font size
❌ <Button className="bg-red-500">      // Override design system
```

## ✅ Do This

```tsx
✅ <div className="bg-[var(--color-accent-destructive)]">
✅ <div className="gap-[var(--space-md)]">
✅ <h2 className="text-heading-3">
✅ <Button variant="destructive">
```

---

**💡 Pro Tip:** Use your IDE's autocomplete! Type `var(--` and see all available tokens.

**📚 Full Docs:** See `/design-system/README.md` for complete documentation.
