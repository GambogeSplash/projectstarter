# 📐 CHIDI - Component Specifications

**Extracted from Figma Frames**  
**Purpose:** Pixel-perfect specifications for every component

---

## 📱 Welcome Screen

**Figma Reference:** `IPhone131425.tsx` (iPhone 13 & 14 - 25)  
**Route:** `/` (Login/Welcome)

### Layout Structure

**Container:**
```
- Screen size: 390px × 844px (iPhone 13/14)
- Content container: 350px width
- Horizontal centering: left-1/2 translate-x-[-50%]
- Vertical centering: top-[calc(50%-34.72px)]
- Content width: 326px (centered within 350px container)
```

**Hierarchy (Top to Bottom):**
1. Logo (40px × 39.344px)
2. Gap: 10px
3. Text block (title + subtitle)
4. Gap: 20px
5. Auth buttons section
6. Gap: 16px
7. Divider with "OR"
8. Gap: 16px
9. Email input
10. Gap: 10.211px
11. Terms text

### Logo / Brand Mark

**Dimensions:**
```css
width: 40px
height: 39.344px
background: #6060f8 (var(--color-accent-primary))
border-radius: 13.096px
border: 0.935px solid #6e6eff
```

**Icon Inside:**
```css
size: 29.338px × 29.338px
position: centered (left-1/2 top-1/2 translate)
color: white
```

**Token Suggestion:**
```css
--size-brand-logo: 40px;
--radius-brand: 13.096px;
--border-brand-glow: 0.935px;
```

### Typography Specifications

**Title: "Welcome to CHIDI"**
```css
font-family: 'Inter', sans-serif
font-weight: 600 (Semi Bold)
font-size: 24px
line-height: normal
letter-spacing: -0.12px
text-align: center
color: #ffffff (var(--color-text-primary))
width: 100%
```

**Subtitle: "Your AI business assistant..."**
```css
font-family: 'Inter', sans-serif
font-weight: 400 (Regular)
font-size: 14px
line-height: normal
letter-spacing: 0.14px
text-align: center
color: #5e5e66 (var(--color-text-secondary))
white-space: nowrap
```

**Gap between title and subtitle:**
```css
gap: 4px
```

### Auth Button Specifications

**Button Container:**
```css
display: flex
flex-direction: column
gap: 8px
width: 100%
```

**Individual Button:**
```css
height: 44px
border-radius: 9px
background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%),
            linear-gradient(90deg, rgb(45,45,52) 0%, rgb(45,45,52) 100%)
border: 1px solid #2f2f36
```

**Button Content (Centered):**
```css
display: flex
gap: 8px
align-items: center
position: absolute
left: 50%
top: 50%
transform: translate(-50%, -50%)
```

**Button Icon:**
```css
/* Google icon */
width: 13.9824px
height: 13.9824px

/* Shopify icon */
width: 14.508px
height: 16.546px
```

**Button Text:**
```css
font-family: 'Inter', sans-serif
font-weight: 500 (Medium)
font-size: 14px
color: #ffffff
white-space: nowrap
```

**Buttons:**
1. "Continue with Google"
2. "Continue with Shopify"

**Token Suggestion:**
```css
--height-button: 44px;
--radius-button: 9px;
--gap-button-icon: 8px;
--gap-buttons: 8px;
```

### Divider with "OR"

**Container:**
```css
display: flex
gap: 8px
align-items: center
width: 100%
```

**Lines:**
```css
background: #303033
height: 1px
width: 157px
flex-shrink: 0
```

**"OR" Text:**
```css
font-family: 'Inter', sans-serif
font-weight: 400 (Regular)
font-size: 11px
color: #424246
white-space: nowrap
```

**Token Suggestion:**
```css
--color-divider: #303033;
--text-divider-or: 11px;
```

### Email Input Field

**Dimensions:**
```css
height: 44px
border-radius: 9px
width: 100%
```

**Background:**
```css
background: linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%),
            linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%),
            linear-gradient(90deg, rgb(39,39,45) 0%, rgb(39,39,45) 100%)
```

**Border:**
```css
border: 1.021px solid #6060f8 (focused state)
border-radius: 9px
```

**Placeholder:**
```css
font-family: 'Inter', sans-serif
font-weight: 500 (Medium)
font-size: 13.228px
color: #5e5e66
position: absolute
left: 14px
top: calc(50% - 7.77px)
```

**Text:** "Enter email for magic link"

**Token Suggestion:**
```css
--height-input: 44px;
--radius-input: 9px;
--padding-input-x: 14px;
--border-input-focus: 1.021px;
```

### Terms & Privacy Text

**Dimensions:**
```css
width: 360.727px
text-align: center
```

**Typography:**
```css
font-family: 'Inter', sans-serif
font-weight: 400 (Regular)
font-size: 12.253px
line-height: 1.6
letter-spacing: 0.1225px
color: #5e5e66
```

**Text:** "By continuing, you agree to CHIDI's Terms & Privacy Policy"

### Spacing Summary

**Vertical Rhythm (Top to Bottom):**
```
Logo
↓ 10px gap
Text block (title + 4px gap + subtitle)
↓ 20px gap
Auth buttons section (2 buttons with 8px gap)
↓ 16px gap
Divider
↓ 16px gap
Email input
↓ 10.211px gap
Terms text
```

**Spacing Tokens Needed:**
```css
/* Already have */
--space-xs: 8px ✅
--space-sm: 12px ✅
--space-md: 16px ✅
--space-lg: 20px ✅

/* Need to add */
--space-xxs: 4px ❌
--space-2xs: 10px ❌
--space-input-gap: 10.211px ❌
```

---

## 🎨 Status Bar (iOS)

**Figma Reference:** `IPhone131425.tsx` - Status Bar component

### Layout

**Container:**
```css
position: absolute
top: 0
left: 0
width: 390px
height: 44px (approx)
padding: 21px 16px 19px 16px
background: rgba(0, 0, 0, 0.1)
display: flex
justify-content: space-between
align-items: center
gap: 154px
```

### Time Display

**Typography:**
```css
font-family: 'SF Pro', sans-serif
font-weight: 590 (Semi Bold)
font-size: 17px
line-height: 22px
text-align: center
color: white
font-variation-settings: 'wdth' 100
```

**Text:** "9:41" (Apple's default time)

### Icons (Right Side)

**Signal Icons:**
- Cellular: 19.2px × 12.226px
- WiFi: 17.142px × 12.328px
- Battery: 27.328px × 13px

**Gap between icons:** 7px

**Note:** Status bar should be hidden in PWA/fullscreen mode

---

## 🧭 Bottom Navigation Bar (iOS Safari)

**Figma Reference:** `IPhone131425.tsx` - Tabs Mode Compact

### Layout

**Container:**
```css
position: absolute
bottom: 36px
left: calc(50% + 6px)
transform: translateX(-50%)
display: flex
gap: 10px
align-items: center
```

### Tab Buttons

**Individual Button:**
```css
width: 48px
height: 48px
border-radius: 24px
background: rgba(21, 21, 21, 0.8)
backdrop-filter: blur(md)
border: 1px solid rgba(255, 255, 255, 0.12)
box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.1)
```

**Icon:**
```css
font-family: 'SF Compact', sans-serif
font-weight: 350.524 (Light)
font-size: 23px
color: white
text-align: center
```

**Icons Used:**
- Left: "􀯶" (SF Symbol)
- Right: "􀍠" (SF Symbol)

### Search/URL Bar (Center)

**Container:**
```css
width: 218px
height: 48px
border-radius: 24px
background: rgba(21, 21, 21, 0.8)
backdrop-filter: blur(md)
border: 1px solid rgba(255, 255, 255, 0.12)
box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.1)
position: relative
```

**URL Text:**
```css
font-family: 'SF Pro Text', sans-serif
font-weight: 400 (Regular)
font-size: 15px
letter-spacing: 0.15px
color: white
text-align: center
position: absolute
left: 50%
top: 50%
transform: translate(-50%, -50%)
```

**Text:** "chat.chidi.app"

**Icons (Left & Right):**
- Left (lock icon): 15px × 18px
- Right (reload icon): 14.757px × 17.982px

**Note:** This is iOS Safari UI, not part of the app itself.

---

## 🎯 Design Token Updates Needed

Based on Welcome Screen extraction:

### Add to `/design-system/tokens/spacing.css`:

```css
/* Micro spacing */
--space-xxs: 4px;        /* Title/subtitle gap */
--space-2xs: 10px;       /* Logo to text, input to terms */

/* Component-specific */
--space-auth-buttons: 8px;
--space-section-to-divider: 16px;
```

### Add to `/design-system/tokens/radius.css`:

```css
/* Component-specific radius */
--radius-brand-logo: 13.096px;  /* Slightly larger than --radius-md */
--radius-button: 9px;           /* Between --radius-sm and --radius-md */
--radius-input: 9px;
--radius-tab-button: 24px;      /* Same as --radius-xl */
```

### Add to `/design-system/tokens/typography.css`:

```css
/* Letter spacing tokens */
--tracking-tight: -0.12px;      /* Large headings */
--tracking-normal: 0px;
--tracking-wide: 0.14px;        /* Body text on dark bg */
--tracking-wider: 0.1225px;     /* Small text */

/* Component-specific text sizes */
--text-auth-title: 24px;
--text-auth-subtitle: 14px;
--text-button: 14px;
--text-input-placeholder: 13.228px;
--text-terms: 12.253px;
--text-divider: 11px;
```

### Add to `/design-system/tokens/shadows.css`:

```css
/* iOS-style shadows */
--shadow-tab-button: 0px 2px 40px 0px rgba(0, 0, 0, 0.1);

/* Backdrop blur */
--backdrop-blur-ios: blur(16px);  /* Safari backdrop-filter */
```

### Add to `/design-system/tokens/colors.css`:

```css
/* Button backgrounds (layered gradients) */
--color-button-bg-overlay: rgba(0, 0, 0, 0.1);
--color-button-bg-base: rgb(45, 45, 52);
--color-button-border: #2f2f36;

/* Input backgrounds */
--color-input-bg-overlay: rgba(0, 0, 0, 0.2);
--color-input-bg-base: rgb(39, 39, 45);

/* Divider */
--color-divider: #303033;
--color-divider-text: #424246;

/* Brand glow */
--color-brand-border-glow: #6e6eff;  /* Lighter than primary */
```

---

## ✅ Implementation Checklist

- [ ] Update all spacing tokens
- [ ] Update all radius tokens
- [ ] Update all typography tokens
- [ ] Add missing shadow tokens
- [ ] Add missing color tokens
- [ ] Rebuild Welcome screen with exact specs
- [ ] Test on iPhone 13/14 (390px width)
- [ ] Verify with DevTools overlay
- [ ] Document any deviations

---

**Next Component:** Onboarding Carousel (`IPhone131426.tsx`)

