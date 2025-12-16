# 📐 CHIDI Grid System

**Extracted from Figma Designs**  
**Purpose:** Define consistent layout structure across all screens

---

## 🎯 Design Philosophy

CHIDI uses a **mobile-first, single-column** layout system that prioritizes:
- ✅ Conversation flow (top to bottom)
- ✅ Touch-friendly targets (44px minimum)
- ✅ Focused content (no overwhelming grids)
- ✅ Consistent spacing rhythm (4px base grid)

---

## 📱 Mobile Layout (Primary)

### **Container Widths**

```css
/* From Figma: iPhone 13/14 (390px screen) */
--screen-width: 390px;              /* Full screen */
--content-container: 350px;         /* Main content container */
--content-width: 326px;             /* Text/form content */
--safe-area-horizontal: 20px;       /* Side padding (each side) */
```

**Layout Structure:**
```
┌─────────────── 390px (screen) ──────────────┐
│ ← 20px →  ┌──── 350px ────┐  ← 20px →      │
│           │                │                │
│           │  ┌── 326px ──┐ │  (for text)    │
│           │  │           │ │                │
│           │  └───────────┘ │                │
│           └────────────────┘                │
└─────────────────────────────────────────────┘
```

### **Vertical Safe Areas**

```css
--safe-area-top: 44px;              /* Status bar */
--safe-area-bottom: 84px;           /* Home indicator + nav */
```

**Note:** iOS Safari adds ~84px bottom chrome (home indicator + tab bar)

---

## 🖥️ Responsive Breakpoints

```css
/* Breakpoints */
--breakpoint-mobile: 320px;         /* iPhone SE */
--breakpoint-mobile-lg: 390px;      /* iPhone 13/14 (primary) */
--breakpoint-tablet: 768px;         /* iPad */
--breakpoint-desktop: 1024px;       /* Desktop */
--breakpoint-desktop-lg: 1440px;    /* Large desktop */
```

### **Breakpoint Strategy:**

**Mobile (320px - 767px):** Single column, full width
- Container: 100% - 40px (20px each side)
- Max width: 350px
- Centered

**Tablet (768px - 1023px):** Single column, larger max-width
- Container: 600px max
- Centered
- More breathing room

**Desktop (1024px+):** Optional two-column for specific views
- Primary: 600px (content)
- Secondary: 300px (context/sidebar)
- Total: 900px max
- Centered

---

## 📏 Grid System Rules

### **Base Grid: 4px**

All spacing, sizing, and positioning should align to a **4px grid**.

```css
/* Spacing increments */
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px...
```

**Examples:**
```css
✅ height: 44px;     /* Aligns to 4px grid */
✅ gap: 20px;        /* Aligns to 4px grid */
✅ padding: 16px;    /* Aligns to 4px grid */

❌ height: 43px;     /* Off-grid */
❌ gap: 15px;        /* Off-grid */
❌ padding: 17px;    /* Off-grid */
```

---

## 📦 Component Sizing Standards

### **From Figma Analysis:**

#### **Touch Targets**
```css
--size-touch-minimum: 44px;         /* iOS HIG minimum */
--size-button-height: 44px;         /* Standard button */
--size-input-height: 44px;          /* Input fields */
--size-list-item-min: 60px;         /* List items */
```

#### **Icons**
```css
--size-icon-sm: 12px;               /* Small icons */
--size-icon-md: 16px;               /* Default icons */
--size-icon-lg: 20px;               /* Large icons */
--size-icon-xl: 24px;               /* XL icons */
--size-icon-2xl: 32px;              /* Brand/feature icons */
```

#### **Avatars**
```css
--size-avatar-sm: 20px;             /* Tiny avatar */
--size-avatar-md: 34px;             /* Default avatar */
--size-avatar-lg: 40px;             /* Large avatar */
--size-avatar-xl: 56px;             /* Profile avatar */
```

#### **Brand Logo**
```css
--size-brand-logo: 40px;            /* Width */
--size-brand-logo-height: 39.344px; /* Exact height from Figma */
--size-brand-icon: 29.338px;        /* Icon inside logo */
```

---

## 🎨 Layout Patterns

### **1. Centered Content (Auth Flow)**

```tsx
<div className="min-h-screen flex items-center justify-center px-5">
  <div className="w-full max-w-[350px]">
    {/* Content */}
  </div>
</div>
```

**Breakdown:**
- `min-h-screen`: Full viewport height
- `flex items-center justify-center`: Vertical + horizontal centering
- `px-5`: 20px horizontal padding
- `max-w-[350px]`: Figma container width

---

### **2. Header + Content + Bottom Nav**

```tsx
<div className="min-h-screen flex flex-col">
  {/* Header - fixed */}
  <header className="h-14 px-4">...</header>
  
  {/* Content - scrollable */}
  <main className="flex-1 overflow-y-auto px-5 py-6">
    <div className="max-w-[350px] mx-auto">
      {/* Content */}
    </div>
  </main>
  
  {/* Bottom Nav - fixed */}
  <nav className="h-16 px-4">...</nav>
</div>
```

---

### **3. List/Grid Layout**

```tsx
{/* Single column list */}
<div className="flex flex-col gap-3">
  {items.map(item => (
    <div key={item.id} className="h-[60px]">
      {/* List item */}
    </div>
  ))}
</div>

{/* Two-column grid (tablet+) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {items.map(item => (
    <div key={item.id}>
      {/* Grid item */}
    </div>
  ))}
</div>
```

---

### **4. Card Layout**

```tsx
<div className="bg-[var(--color-bg-surface)] rounded-[12px] p-4">
  {/* Card content */}
</div>
```

**Card Specs:**
- Background: `var(--color-bg-surface)`
- Border radius: `12px` (--radius-lg)
- Padding: `16px` (--space-md)
- Gap between cards: `12px` (--space-sm)

---

## 🔢 Spacing Scale Reference

### **Vertical Rhythm (Figma Patterns)**

**Auth Screens:**
```
Logo (40px)
  ↓ 10px gap (--space-logo-to-text)
Title + Subtitle (title: 24px, gap: 4px, subtitle: 14px)
  ↓ 20px gap (--space-auth-section)
Auth Buttons (44px each, 8px gap between)
  ↓ 16px gap (--space-auth-subsection)
Divider
  ↓ 16px gap
Email Input (44px)
  ↓ 10px gap
Terms Text
```

**Chat Screens:**
```
Header (56px)
  ↓ 12px gap
Message bubbles (gap: 12px between)
  ↓ Auto-scroll
Input area (60px)
```

**List Screens:**
```
Header (56px)
  ↓ 16px gap
List items (60px each, 8px gap between)
```

---

## 🎯 Z-Index Scale

```css
/* Z-index layers */
--z-base: 0;                /* Default layer */
--z-dropdown: 10;           /* Dropdowns */
--z-sticky: 20;             /* Sticky headers */
--z-fixed: 30;              /* Fixed nav */
--z-modal-backdrop: 40;     /* Modal backgrounds */
--z-modal: 50;              /* Modal content */
--z-popover: 60;            /* Popovers/tooltips */
--z-toast: 70;              /* Toast notifications */
```

---

## 📐 Grid System Utilities (Tailwind)

### **Container Classes:**

```tsx
{/* Mobile container (350px max) */}
<div className="w-full max-w-[350px] mx-auto px-5">

{/* Tablet container (600px max) */}
<div className="w-full max-w-[600px] mx-auto px-6">

{/* Desktop container (900px max) */}
<div className="w-full max-w-[900px] mx-auto px-8">
```

### **Responsive Utilities:**

```tsx
{/* Mobile-first responsive spacing */}
<div className="gap-4 md:gap-6 lg:gap-8">

{/* Responsive columns */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

{/* Responsive padding */}
<div className="px-4 md:px-6 lg:px-8">
```

---

## ✅ Grid System Checklist

Before implementing any layout, verify:

- [ ] Uses 4px base grid (all sizes divisible by 4)
- [ ] Container max-width is 350px (mobile)
- [ ] Horizontal padding is 20px (mobile)
- [ ] Touch targets are ≥44px
- [ ] Works on 320px width (iPhone SE)
- [ ] Works on 390px width (iPhone 13/14)
- [ ] Vertical spacing follows Figma patterns
- [ ] Icons use standard sizes (16px, 20px, 24px)
- [ ] Cards use standard padding (16px)
- [ ] Responsive breakpoints are mobile-first

---

## 🚫 Common Mistakes to Avoid

### **DON'T:**
- ❌ Use random max-widths (stick to 350px/600px/900px)
- ❌ Use odd pixel values (3px, 7px, 13px)
- ❌ Mix percentage and pixel widths randomly
- ❌ Create multi-column layouts on mobile
- ❌ Use touch targets smaller than 44px
- ❌ Forget horizontal padding (causes edge-to-edge content)

### **DO:**
- ✅ Use consistent container widths
- ✅ Align to 4px grid
- ✅ Use design tokens for spacing
- ✅ Test on actual devices (iPhone SE, iPhone 13/14)
- ✅ Keep layouts simple (single column default)
- ✅ Add generous padding (20px minimum)

---

## 📱 Device Testing Matrix

| Device | Width | Height | Notes |
|--------|-------|--------|-------|
| iPhone SE | 320px | 568px | Minimum support |
| iPhone 13/14 | 390px | 844px | **Primary target** |
| iPhone 13 Pro Max | 428px | 926px | Large phone |
| iPad Mini | 768px | 1024px | Tablet |
| iPad Pro 11" | 834px | 1194px | Large tablet |
| Desktop | 1440px+ | Variable | Optional |

**Primary Focus:** iPhone 13/14 (390px × 844px)

---

## 🔗 Related Files

- **Spacing Tokens:** `/design-system/tokens/spacing.css`
- **Layout Components:** `/components/layout/*`
- **Container Utilities:** `/styles/globals.css`
- **Responsive Breakpoints:** Tailwind config

---

**Status:** GRID SYSTEM v1.0 ✅  
**Last Updated:** December 15, 2024  
**Maintainer:** Design team

