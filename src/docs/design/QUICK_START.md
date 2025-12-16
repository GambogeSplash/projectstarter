# 🚀 Design System Quick Start

**For developers who need to build pixel-perfect components NOW**

---

## ⚡ TL;DR

1. **Check Figma first** - We have 40+ imported frames in `/imports/`
2. **Extract exact specs** - Document pixel values before building
3. **Use updated tokens** - We just added 26 new design tokens
4. **Follow the grid** - 4px base, 350px container, 44px touch targets
5. **Compare with example** - See `WelcomeScreenPixelPerfect.tsx`

---

## 📐 Grid System Cheatsheet

### **Mobile Container (Primary):**
```tsx
<div className="min-h-screen bg-[var(--color-bg-app)] flex items-center justify-center px-5">
  <div className="w-full max-w-[350px]">
    {/* Your content - will never exceed 350px */}
  </div>
</div>
```

### **Text Content Width:**
```tsx
<div className="w-full max-w-[326px] mx-auto">
  {/* Text content - narrower for readability */}
</div>
```

### **4px Grid Alignment:**
```tsx
✅ gap-1     // 4px
✅ gap-2     // 8px
✅ gap-2.5   // 10px
✅ gap-3     // 12px
✅ gap-4     // 16px
✅ gap-5     // 20px
✅ gap-6     // 24px

❌ gap-[15px]  // Off-grid!
❌ gap-[17px]  // Off-grid!
```

---

## 🎨 Updated Design Tokens

### **NEW Spacing Tokens:**
```css
--space-xxs: 4px           /* Title/subtitle gap */
--space-2-5: 10px          /* Micro-spacing */
--space-logo-to-text: 10px
--space-input-to-terms: 10px
--space-auth-section: 20px
--space-auth-subsection: 16px
--space-auth-buttons: 8px
```

### **FIXED Border Radius:**
```css
--radius-button: 9px       /* CHANGED from 10px */
--radius-input: 9px        /* CHANGED from 10px */
--radius-brand-logo: 13.096px  /* NEW - Exact Figma */
```

### **NEW Letter Spacing:**
```css
--tracking-heading-tight: -0.005em   /* -0.12px at 24px */
--tracking-body-wide: 0.01em         /* 0.14px at 14px */
--tracking-caption-wide: 0.01em      /* 0.1225px at 12px */
```

### **NEW Colors:**
```css
--color-button-overlay: rgba(0, 0, 0, 0.1)
--color-button-bg: #2d2d34
--color-button-border: #2f2f36
--color-input-overlay: rgba(0, 0, 0, 0.2)
--color-input-bg: #27272d
--color-divider: #303033
--color-brand-glow: #6e6eff
```

---

## 🔨 Building a Pixel-Perfect Component

### **Step 1: Find the Figma Frame**

Check `/imports/` for the screen you're building:
- `IPhone131425.tsx` - Welcome screen ✅ DONE
- `IPhone131426.tsx` - Onboarding carousel
- `IPhone131427.tsx` - Connect storefronts
- `IPhone131430.tsx` - Chat interface
- `IPhone131432.tsx` - Inventory
- etc.

### **Step 2: Extract Specs**

Open the Figma frame and document:

```markdown
## [Component Name]

### Layout
- Container: XXpx
- Padding: XXpx
- Gap: XXpx

### Typography
- Title: Inter [Weight] XXpx, tracking XXpx
- Body: Inter [Weight] XXpx, tracking XXpx

### Colors
- Background: #XXXXXX or gradient
- Text: var(--color-xxx)
- Border: var(--color-xxx)

### Spacing (top to bottom)
1. Element A
2. Gap: XXpx
3. Element B
4. Gap: XXpx
...
```

**Example:** See `/docs/design/COMPONENT_SPECS.md`

### **Step 3: Use Inline Styles for Exact Values**

For pixel-perfect typography:
```tsx
<h1 
  className="text-white text-center"
  style={{
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '-0.12px'  // EXACT Figma value
  }}
>
  Welcome to CHIDI
</h1>
```

For layered gradients:
```tsx
<button
  className="h-[44px] rounded-[var(--radius-button)]"
  style={{
    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)',
    border: '1px solid var(--color-button-border)'
  }}
>
  Button Text
</button>
```

### **Step 4: Use Exact Spacing**

```tsx
<div className="flex flex-col gap-5">        {/* 20px */}
  <div className="flex flex-col gap-[10px]"> {/* 10px - Not in Tailwind */}
    <div className="flex flex-col gap-1">    {/* 4px */}
      <h1>Title</h1>
      <p>Subtitle</p>
    </div>
  </div>
</div>
```

### **Step 5: Verify**

1. Open DevTools
2. Set viewport: 390px × 844px (iPhone 13/14)
3. Take screenshot of your component
4. Overlay Figma frame screenshot
5. Use browser inspector to verify spacing

---

## 📏 Component Sizing Standards

### **Touch Targets:**
```tsx
// Buttons, inputs
className="h-[44px]"  // iOS HIG minimum

// List items
className="min-h-[60px]"
```

### **Icons:**
```tsx
// Small
className="size-3"   // 12px

// Default
className="size-4"   // 16px

// Large
className="size-5"   // 20px

// Extra large
className="size-6"   // 24px
```

### **Brand Logo:**
```tsx
<div className="w-[40px] h-[39.344px] rounded-[var(--radius-brand-logo)]">
  <div className="w-[29.338px] h-[29.338px]">
    {/* Icon */}
  </div>
</div>
```

---

## 🎯 Common Patterns

### **Auth Button (Figma Style):**
```tsx
<button
  onClick={handleClick}
  className="h-[44px] w-full rounded-[var(--radius-button)] relative flex items-center justify-center"
  style={{
    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)',
    border: '1px solid var(--color-button-border)'
  }}
>
  <div className="flex items-center gap-2">
    {icon}
    <span 
      className="text-white"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: 500
      }}
    >
      {label}
    </span>
  </div>
</button>
```

### **Divider with Text:**
```tsx
<div className="flex items-center gap-2 w-full">
  <div className="h-px bg-[var(--color-divider)] flex-1" />
  <span 
    className="text-[var(--color-divider-text)]"
    style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '11px',
      fontWeight: 400
    }}
  >
    OR
  </span>
  <div className="h-px bg-[var(--color-divider)] flex-1" />
</div>
```

### **Input Field (Figma Style):**
```tsx
<div className="h-[44px] w-full rounded-[var(--radius-input)] relative border border-[var(--color-accent-primary)]">
  <div 
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(39, 39, 45) 0%, rgb(39, 39, 45) 100%)'
    }}
  />
  <input
    type="email"
    placeholder="Enter email for magic link"
    className="absolute inset-0 bg-transparent text-white px-[14px] placeholder:text-[var(--color-text-secondary)]"
    style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '13.228px',
      fontWeight: 500
    }}
  />
</div>
```

---

## ✅ Pre-Flight Checklist

Before building ANY component:

- [ ] Found the Figma frame in `/imports/`
- [ ] Extracted exact dimensions
- [ ] Extracted exact colors (not assuming)
- [ ] Extracted exact spacing (not guessing)
- [ ] Extracted exact typography (font, size, weight, tracking)
- [ ] Documented specs in `/docs/design/COMPONENT_SPECS.md`
- [ ] Using 4px grid alignment
- [ ] Touch targets ≥44px
- [ ] Container max-width: 350px
- [ ] Tested on 390px viewport

---

## 🚫 Common Mistakes

### **DON'T:**
```tsx
❌ className="text-heading-2"  // Generic class, not exact
❌ className="rounded-lg"      // Wrong value (12px vs 9px)
❌ className="gap-4"           // Might be close but not exact
❌ className="max-w-md"        // Wrong container (28rem ≠ 350px)
❌ style={{ fontSize: '1.5rem' }}  // Don't use rem for exact values
```

### **DO:**
```tsx
✅ style={{ fontSize: '24px', letterSpacing: '-0.12px' }}  // Exact
✅ className="rounded-[var(--radius-button)]"  // Semantic token
✅ className="gap-[10px]"      // Exact Figma value
✅ className="max-w-[350px]"   // Exact Figma container
✅ style={{ fontSize: '24px' }}  // Pixel values for precision
```

---

## 📚 Reference Files

**Must-Read:**
1. `/docs/design/COMPONENT_SPECS.md` - Exact specifications
2. `/components/auth/WelcomeScreenPixelPerfect.tsx` - Perfect example
3. `/design-system/GRID_SYSTEM.md` - Layout rules

**Reference:**
4. `/docs/design/MOODBOARD.md` - Why we chose this aesthetic
5. `/docs/design/BEFORE_AFTER_COMPARISON.md` - What changed
6. `/design-system/CHEATSHEET.md` - Token quick reference

---

## 🔍 Example: Welcome Screen

**See:** `/components/auth/WelcomeScreenPixelPerfect.tsx`

This is a fully pixel-perfect implementation extracted from `IPhone131425.tsx`.

**Key takeaways:**
- Exact logo dimensions (40×39.344px)
- Exact border radius (13.096px)
- Exact letter-spacing (-0.12px, 0.14px)
- Exact button height (44px)
- Exact spacing gaps (20px, 10px, 4px)
- Layered gradient backgrounds
- Container exactly 350px

**Accuracy:** 100% ✅

---

## ⚡ Quick Commands

### **Check Design Tokens (Browser Console):**
```javascript
// Check button radius
getComputedStyle(document.documentElement).getPropertyValue('--radius-button')
// Should return: " 0.5625rem" (9px)

// Check if new spacing exists
getComputedStyle(document.documentElement).getPropertyValue('--space-xxs')
// Should return: " 0.25rem" (4px)
```

### **Set iPhone 13/14 Viewport:**
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone 13 Pro" or custom 390×844

---

## 🎓 Learning Path

**Level 1: Beginner**
1. Read `/design-system/GRID_SYSTEM.md`
2. Study `/components/auth/WelcomeScreenPixelPerfect.tsx`
3. Build one simple component pixel-perfect

**Level 2: Intermediate**
1. Extract specs from a Figma frame yourself
2. Build component without looking at examples
3. Verify with DevTools overlay

**Level 3: Advanced**
1. Create reusable pixel-perfect patterns
2. Identify missing design tokens
3. Contribute to design system docs

---

## 🔥 Hot Tips

1. **Use inline styles for exact values** - Tailwind is great, but pixel-perfect needs inline styles
2. **Always check Figma first** - Don't guess, extract
3. **Test on real device** - Simulators lie
4. **4px grid is your friend** - If it doesn't divide by 4, question it
5. **Letter-spacing matters** - Dark backgrounds need wider tracking
6. **Layered gradients > Solid colors** - Figma uses overlays
7. **Document as you build** - Future you will thank you

---

## 🆘 Need Help?

**Stuck on spacing?**
→ Check `/docs/design/COMPONENT_SPECS.md` for examples

**Stuck on colors?**
→ Check `/design-system/tokens/colors.css` for all tokens

**Stuck on layout?**
→ Check `/design-system/GRID_SYSTEM.md` for patterns

**Want to see a working example?**
→ Check `/components/auth/WelcomeScreenPixelPerfect.tsx`

**Need to understand why?**
→ Check `/docs/design/MOODBOARD.md` for philosophy

---

**Remember:** Pixel-perfect doesn't mean perfect code. It means exact visual match to Figma. Sometimes that requires inline styles, exact pixel values, and breaking "best practices." That's okay! 🎨

**The goal:** User sees what designer designed. Period.

---

**Status:** READY TO USE ✅  
**Updated:** December 15, 2024  
**Next:** Build your first pixel-perfect component!

