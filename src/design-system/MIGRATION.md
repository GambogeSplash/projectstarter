# Migration Guide: From Hardcoded Values to Design Tokens

This guide shows how to migrate existing CHIDI components to use the design system tokens.

## 🔄 Quick Reference

### Color Mappings

| Old Hardcoded Value | New Token | Use Case |
|---------------------|-----------|----------|
| `bg-[#131316]` | `bg-[var(--color-bg-app)]` | Main background |
| `bg-[#1b1b1f]` | `bg-[var(--color-bg-surface)]` | Cards, surfaces |
| `bg-[#1f1f24]` | `bg-[var(--color-bg-surface-raised)]` | Elevated elements |
| `bg-[#6060f8]` | `bg-[var(--color-accent-primary)]` | Primary actions |
| `bg-[#33ffcc]` | `bg-[var(--color-accent-secondary)]` | Secondary accent |
| `text-[#ffffff]` | `text-[var(--color-text-primary)]` | Primary text |
| `text-[#5e5e66]` | `text-[var(--color-text-secondary)]` | Secondary text |
| `text-[#83838b]` | `text-[var(--color-text-tertiary)]` | Muted text |
| `border-[#27272d]` | `border-[var(--color-border-default)]` | Default borders |

### Spacing Mappings

| Old Value | New Token | Size |
|-----------|-----------|------|
| `gap-[8px]` | `gap-[var(--space-xs)]` | 8px |
| `gap-[12px]` | `gap-[var(--space-sm)]` | 12px |
| `gap-[16px]` | `gap-[var(--space-md)]` | 16px |
| `gap-[20px]` | `gap-[var(--space-lg)]` | 20px |
| `gap-[24px]` | `gap-[var(--space-xl)]` | 24px |
| `gap-[32px]` | `gap-[var(--space-2xl)]` | 32px |
| `p-[16px]` | `p-[var(--space-card-padding)]` | Card padding |

### Radius Mappings

| Old Value | New Token | Use Case |
|-----------|-----------|----------|
| `rounded-[8px]` | `rounded-[var(--radius-badge)]` | Badges |
| `rounded-[10px]` | `rounded-[var(--radius-button)]` or `rounded-[var(--radius-input)]` | Buttons, inputs |
| `rounded-[14px]` | `rounded-[var(--radius-card)]` | Cards |
| `rounded-[26px]` | `rounded-[var(--radius-pill)]` | Pills |

### Typography Mappings

| Old Code | New Code |
|----------|----------|
| `font-['Inter:Medium'] text-[24px]` | `text-heading-2` |
| `font-['Inter:Regular'] text-[14px]` | `text-body` |
| `font-['Inter:Regular'] text-[13px]` | `text-body-sm` |
| `font-['Inter:Regular'] text-[12px]` | `text-caption` |

## 📝 Example Migration

### Before: Hardcoded Values

```tsx
export function ProductCard() {
  return (
    <div className="bg-[#1b1b1f] rounded-[14px] p-[16px] border border-[#27272d]">
      <div className="flex flex-col gap-[12px]">
        <h3 className="font-['Inter:Medium',sans-serif] text-[15px] text-[#ffffff]">
          Product Name
        </h3>
        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#5e5e66]">
          Description text
        </p>
        <button className="bg-[#6060f8] rounded-[10px] h-[44px] px-[16px] text-[#ffffff] hover:bg-[#5050e8]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
```

### After: Using Design Tokens

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";

export function ProductCard() {
  return (
    <Card padding="md">
      <CardContent>
        <Stack gap="sm">
          <h3 className="text-heading-4">Product Name</h3>
          <p className="text-body-sm text-[var(--color-text-secondary)]">
            Description text
          </p>
          <Button variant="primary" size="md">
            Add to Cart
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
```

### Benefits of Migration

✅ **Consistency** - All products use the same styling  
✅ **Maintainability** - Change tokens once, update everywhere  
✅ **Readability** - Semantic names are easier to understand  
✅ **Themability** - Easy to support light/dark themes  
✅ **Type Safety** - Components have proper TypeScript types  

## 🎯 Component-Specific Migrations

### Migrating Buttons

**Before:**
```tsx
<button className="bg-[#6060f8] rounded-[10px] h-[44px] px-[16px] text-white hover:bg-[#5050e8]">
  Click me
</button>
```

**After:**
```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

### Migrating Cards

**Before:**
```tsx
<div className="bg-[#1b1b1f] rounded-[14px] p-[16px] border border-[#27272d]">
  <div className="mb-[8px]">
    <h3 className="text-[20px] font-semibold text-white">Title</h3>
    <p className="text-[12px] text-[#5e5e66]">Subtitle</p>
  </div>
  <div>Content</div>
</div>
```

**After:**
```tsx
<Card padding="md">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Migrating Inputs

**Before:**
```tsx
<input 
  type="text"
  className="w-full h-[44px] bg-[#1f1f24] border border-[#27272d] rounded-[10px] px-[12px] text-white placeholder:text-[#5e5e66]"
  placeholder="Enter text"
/>
```

**After:**
```tsx
<Input 
  type="text"
  placeholder="Enter text"
/>
```

### Migrating Layout Spacing

**Before:**
```tsx
<div className="flex flex-col gap-[16px]">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**After:**
```tsx
<Stack gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## 🚀 Migration Strategy

### Phase 1: Low-Hanging Fruit
1. Replace all color values with tokens
2. Replace spacing values with tokens
3. Replace radius values with tokens

### Phase 2: Typography
1. Replace font-family declarations
2. Replace font-size declarations
3. Use typography classes

### Phase 3: Components
1. Replace custom buttons with `<Button>`
2. Replace custom cards with `<Card>`
3. Replace custom inputs with `<Input>`

### Phase 4: Layout
1. Use `<Container>` for page layouts
2. Use `<Stack>` for flex layouts
3. Use spacing tokens for margins/padding

## ⚠️ Common Pitfalls

### 1. Mixing Old and New Styles

❌ **Don't mix:**
```tsx
<Button className="bg-[#ff0000]"> {/* Overriding design system */}
```

✅ **Instead:**
```tsx
<Button variant="destructive"> {/* Use design system variants */}
```

### 2. Adding Arbitrary Spacing

❌ **Don't:**
```tsx
<div className="gap-[17px]"> {/* Non-standard spacing */}
```

✅ **Instead:**
```tsx
<div className="gap-[var(--space-md)]"> {/* Use token */}
```

### 3. Hardcoding Typography

❌ **Don't:**
```tsx
<h2 className="text-[22px] font-[550]"> {/* Custom values */}
```

✅ **Instead:**
```tsx
<h2 className="text-heading-3"> {/* Use semantic class */}
```

## 📊 Progress Tracking

Create a checklist for your migration:

- [ ] Replace all background colors with tokens
- [ ] Replace all text colors with tokens
- [ ] Replace all border colors with tokens
- [ ] Replace all spacing values with tokens
- [ ] Replace all radius values with tokens
- [ ] Migrate typography to semantic classes
- [ ] Replace buttons with `<Button>` component
- [ ] Replace cards with `<Card>` component
- [ ] Replace inputs with `<Input>` component
- [ ] Use `<Stack>` for layouts
- [ ] Add motion with design system presets
- [ ] Test all components visually
- [ ] Remove unused CSS

## 🔍 Testing Checklist

After migration, verify:

- [ ] All colors match the original design
- [ ] Spacing is consistent throughout
- [ ] Typography renders correctly
- [ ] Interactive states work (hover, focus, active)
- [ ] Responsive behavior is maintained
- [ ] Accessibility is preserved (focus rings, contrast)
- [ ] Motion feels smooth and intentional
- [ ] No console errors or warnings

## 💡 Pro Tips

1. **Migrate one component at a time** - Don't try to refactor everything at once
2. **Take screenshots before/after** - Ensure visual consistency
3. **Use browser DevTools** - Inspect computed CSS variables
4. **Update tests** - If you have visual regression tests, update them
5. **Document custom cases** - If you need custom values, document why

## 🆘 Need Help?

If you encounter issues during migration:

1. Check the [Design System README](/design-system/README.md)
2. Look at [DesignSystemShowcase.tsx](/components/examples/DesignSystemShowcase.tsx)
3. Compare with existing migrated components
4. Ensure all token CSS files are imported in `globals.css`

## 📚 Additional Resources

- [Design System Documentation](/design-system/README.md)
- [Component Examples](/components/examples/)
- [Motion Transitions](/design-system/motion/transitions.ts)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
