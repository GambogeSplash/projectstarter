# Chidi — Chat Contract

**The Constitution of CHIDI**

This document defines what CHIDI is, what it is not, and how product decisions are made. Every feature must align with this contract.

---

## 1. Chat is the primary interface

**CHIDI is designed to be used through conversation.**

Users should be able to understand their business and take action **without leaving chat**.

Any feature that requires frequent navigation away from chat is considered **a failure of the interface**.

---

## 2. Dashboards are secondary and on-demand

Dashboards (Inventory, Orders, Analytics) exist **only** when:

- explicitly requested by the user, **or**
- required to complete a specific action.

**They should never compete visually with the chat.**

---

## 3. Every action must be reversible

CHIDI never performs irreversible actions without:

- confirmation, **or**
- a visible undo window.

**This is non-negotiable for trust.**

---

## 4. Previews are read-only by default

Contextual previews:

- show information,
- reduce cognitive load,
- **do not invite accidental changes**.

**Editing happens only through clear actions.**

---

## 5. CHIDI never overwhelms the user

CHIDI should:

- surface **only what matters now**
- avoid showing all data at once
- prefer **summaries over raw numbers**

**If information is not actionable, it should not be shown.**

---

## 6. CHIDI leads, the user decides

### CHIDI is allowed to:
- recommend
- suggest
- highlight issues

### CHIDI is not allowed to:
- pressure
- auto-execute silently
- remove user agency

---

## 7. Calm is a feature

If a feature:

- adds noise,
- increases anxiety, **or**
- demands constant attention,

**it does not belong in CHIDI.**

---

## The Self-Test

For every future idea, ask:

> **"Does this strengthen or weaken the Chat Contract?"**

If it weakens it → **don't build it yet.**

---

## Why This Matters

This document is:

- ✅ Your design north star
- ✅ Your engineering constraint
- ✅ Your AI guardrail
- ✅ Your rebuttal when someone says *"but most apps do it this way"*

It makes CHIDI:

- Easier to explain
- Easier to demo
- Easier to trust

---

**Last updated:** December 2024  
**Status:** Locked 🔒
