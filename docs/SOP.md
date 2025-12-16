# Design -> Code SOP

**Mobile-first • Dark mode • Motion-led**

This is the internal standard operating procedure for building software that feels like software, not screens.

## Phase 0: Project Ignition (Before Figma)
**Goal:** Avoid pretty but unshippable design.

- [ ] **Product Intent Written**: 1 page max.
- [ ] **Emotion Defined**: e.g. Calm, Focus, Trust.
- [ ] **Interaction Principle Chosen**: e.g. Spatial, Soft.
- [ ] **Tech Stack Locked**: Next.js (App Router), TypeScript, Tailwind, Framer Motion.
- [ ] **Rule**: ❌ No Figma until this exists.

## Phase 1: Figma Setup (System Before Screens)
**Goal:** Create a shared language with code.

- [ ] **Create Variables**: Color, Spacing, Radius, Type.
- [ ] **Naming**: Use slashes (e.g., `bg/primary`). Match repo tokens.
- [ ] **Rule**: ❌ No hardcoded values.

## Phase 2: Component-First Design
**Goal:** Design pieces, not pages.

- [ ] **Design Base Components**: Card, Button, List item, Sheet/modal, Input.
- [ ] **Requirements**: Uses variables, has pressed/active state, has motion intent label.
- [ ] **Rule**: ❌ No full flows yet.

## Phase 3: First Flow (Mobile)
**Goal:** Prove the system works.

- [ ] **Pick ONE Flow**: (e.g., Home -> Detail).
- [ ] **Focus**: Hierarchy, Spacing rhythm, Calm density, Affordances.
- [ ] **Output**: Figma screen + Motion notes.

## Phase 4: Token Sync (Figma -> Code)
**Goal:** Eliminate translation errors.

- [ ] **Export/Mirror Tokens**: Update CSS variables in repo.
- [ ] **Verify**: Check Tailwind uses these tokens.
- [ ] **Rule**: ❌ No inline px in code.

## Phase 5: Component Implementation (AI-Assisted)
**Goal:** Speed without losing taste.

- [ ] **Workflow**: Sreenshot component -> Prompt AI to use existing system/tokens/presets -> Review visually -> Adjust manually.
- [ ] **Rule**: AI writes bulk, you art-direct.

## Phase 6: Motion Pass (Mandatory)
**Goal:** Make it feel alive.

- [ ] **Apply**: Layout animations, Enter presets, Press feedback.
- [ ] **Test**: Tap speed, Perceived weight, Flow continuity.
- [ ] **Rule**: ❌ No motion without purpose.

## Phase 7: Responsiveness
**Goal:** Adapt, not redesign.

- [ ] **Prompt**: "Make this responsive. Preserve hierarchy. Mobile remains primary."
- [ ] **Review**: Spacing scale, Content priority, Reachability.

## Phase 8: Critique + Refinement
**Goal:** Improve without flattening.

- [ ] **Prompt**: "Critique as a senior product designer. Focus on clarity and trust."
- [ ] **Limit**: 1-2 changes only. Avoid over-iteration.

## Phase 9: System Hardening
**Goal:** Prepare for scale.

- [ ] **Refactor**: Extract reused components.
- [ ] **Document**: Motion usage.
- [ ] **Rule**: ❌ Don’t optimize too early.

## Phase 10: Ship + Document
**Goal:** Turn work into leverage.

- [ ] **Deliverables**: Working app, Figma link, System overview, Motion philosophy, Metrics.

## Phase 11: Accessibility & Performance
**Goal:** Quietly separate cool apps from real products.

- [ ] **Contrast**: Muted text must be readable (avoid `opacity: 0.5`, use `var(--text-muted)`).
- [ ] **Tap Targets**: Mobile = minimum 44px height + generous padding.
- [ ] **Focus**: Visible focus states for all tappable elements (`ring-2`).
- [ ] **Motion**: Respect `prefers-reduced-motion`.
- [ ] **Performance**: Animate `transform`/`opacity` only. Lazy load images.

## Phase 12: Signature Interaction
**Goal:** Build the moment people remember.

- [ ] **Define**: The core repeated action (e.g., checking a signal).
- [ ] **Emotion**: Clarity, Trust, Intelligence.
- [ ] **Interaction**: Press -> Dim -> Expand -> Reveal.
- [ ] **Code**: `layout` prop, staggered reveals, backdrop dimming.
- [ ] **Test**: Does it feel calm? Does it explain state?


---

## The Golden Rules
1. **Design systems are about decisions, not components.**
2. **Motion is UX, not flair.**
3. **AI accelerates taste, it doesn’t replace it.**
4. **If Figma and Code disagree, fix the system.**
5. **Ship something real.**
