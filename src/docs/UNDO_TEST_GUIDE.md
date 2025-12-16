# 🧪 Undo Pattern - Test Guide

**How to test the undo pattern to ensure it works perfectly**

---

## 🎯 What to Test

The undo pattern should feel:
- ✅ Immediate (no delay)
- ✅ Calm (not stressful)
- ✅ Optional (not forced)
- ✅ Professional (like Stripe/Linear)

---

## 📋 Test Checklist

### **Test 1: Basic Undo Flow**

1. ✅ Go through onboarding to Dashboard
2. ✅ Type "restock" in chat
3. ✅ See system action card with buttons
4. ✅ Click "Restock" button
5. ✅ **Check:** "Undo" appears immediately
6. ✅ **Check:** Message says "Restock started."
7. ✅ **Check:** Undo button is visible and clickable
8. ✅ Click "Undo"
9. ✅ **Check:** See "Restock cancelled. No changes were made."
10. ✅ **Check:** Original action card is gone

**Expected time:** ~5 seconds to complete

---

### **Test 2: Auto-Resolution**

1. ✅ Type "restock" in chat
2. ✅ Click "Restock" button
3. ✅ See "Restock started. Undo"
4. ✅ **DO NOT click Undo**
5. ✅ Wait 7 seconds
6. ✅ **Check:** Undo message disappears
7. ✅ **Check:** See "Restock completed successfully."
8. ✅ **Check:** Transition feels smooth (no jumping)

**Expected time:** 7 seconds to auto-resolve

---

### **Test 3: Visual Design**

Check that the Undo button is:
- ✅ Understated (not bright red)
- ✅ Underlined (clear it's clickable)
- ✅ Secondary text color (not shouty)
- ✅ Smooth hover state
- ✅ No aggressive animations

**CSS to verify:**
```tsx
text-body-sm
text-[var(--color-text-secondary)]
hover:text-[var(--color-text-primary)]
underline
transition-colors
```

---

### **Test 4: Copy Quality**

Verify the messaging is conversational:
- ✅ "Restock started." (not "Restocking in progress...")
- ✅ "Undo" (not "Cancel" or "Revert Action")
- ✅ "Restock cancelled." (not "Action has been undone")
- ✅ "No changes were made." (reassurance)

**Avoid:**
- ❌ Technical jargon
- ❌ Urgent language
- ❌ ALL CAPS
- ❌ Exclamation marks!!!

---

### **Test 5: Multiple Actions**

1. ✅ Type "restock"
2. ✅ Click "Restock"
3. ✅ Immediately type another message
4. ✅ **Check:** Undo still visible
5. ✅ **Check:** New message appears below
6. ✅ **Check:** No layout shift
7. ✅ **Check:** Can still click Undo

---

### **Test 6: Mobile Responsiveness**

1. ✅ Resize window to mobile width
2. ✅ Type "restock"
3. ✅ Click "Restock"
4. ✅ **Check:** Undo button still visible
5. ✅ **Check:** Text doesn't overflow
6. ✅ **Check:** Touch target is big enough
7. ✅ **Check:** No horizontal scrolling

---

### **Test 7: Stress Test**

1. ✅ Type "restock"
2. ✅ Click "Restock" 
3. ✅ Immediately click "Undo"
4. ✅ Type "restock" again
5. ✅ Click "Restock" again
6. ✅ Let it auto-resolve
7. ✅ **Check:** No errors in console
8. ✅ **Check:** State management works correctly

---

## 🚫 What Should NOT Happen

### **Anti-Patterns:**
- ❌ Modal appears for undo
- ❌ Page navigates away
- ❌ Countdown timer (adds stress)
- ❌ Progress bar (unnecessary)
- ❌ Sound effects
- ❌ Toast notification
- ❌ Multiple undo buttons
- ❌ Undo disappears instantly

---

## 🎯 Success Criteria

**The pattern works if:**

1. **Immediate:** Undo appears < 100ms after action
2. **Clear:** User knows exactly what happened
3. **Calm:** No stress or anxiety
4. **Reliable:** Works every time
5. **Smooth:** No layout shifts or jumping
6. **Professional:** Feels like Stripe/Linear

---

## 🐛 Common Issues & Fixes

### **Issue: Undo doesn't appear**
**Fix:** Check that `undoable` field is set in message

### **Issue: Auto-resolution doesn't work**
**Fix:** Verify setTimeout is clearing correctly

### **Issue: Multiple undos appear**
**Fix:** Ensure only one undoable message at a time

### **Issue: Layout jumps when undo appears**
**Fix:** Use consistent message container heights

### **Issue: Undo still visible after timeout**
**Fix:** Check that message is being removed from state

---

## 📊 Timing Specifications

| Event | Timing | Note |
|-------|--------|------|
| Undo appears | Immediate | < 100ms |
| Undo window | 7 seconds | Sweet spot |
| Auto-resolution | At 7s | Smooth transition |
| Undo click → Cancel | Immediate | < 100ms |

**Why 7 seconds?**
- Too short (3s) = stress
- Too long (15s) = clutter
- 7s = confidence without pressure

---

## 🎨 Visual Checklist

When checking the UI:

- [ ] Undo button is subtle (not bright)
- [ ] Button is clickable (clear hover state)
- [ ] Text is readable (good contrast)
- [ ] Layout is stable (no jumping)
- [ ] Spacing feels natural (not cramped)
- [ ] Colors match design tokens
- [ ] Motion is smooth (not jarring)

---

## 🔍 Code Review Checklist

When reviewing the implementation:

- [ ] `undoable` type is properly defined
- [ ] SystemActionCard renders undo button
- [ ] setTimeout clears after 7 seconds
- [ ] State updates correctly on undo
- [ ] No memory leaks (setTimeout is cleaned up)
- [ ] Message IDs are unique
- [ ] Error handling exists
- [ ] TypeScript types are correct

---

## 🚀 Performance Check

Run these checks:

1. **Console:** No errors or warnings
2. **Network:** No unnecessary requests
3. **Memory:** No leaks (check DevTools)
4. **Re-renders:** Minimal (use React DevTools)
5. **Animation:** 60fps (no jank)

---

## ✅ Final Acceptance

**Ship the pattern if:**

1. ✅ All 7 tests pass
2. ✅ No console errors
3. ✅ Feels professional
4. ✅ User testing shows confidence
5. ✅ Code review approved
6. ✅ Matches design spec
7. ✅ Mobile works perfectly

---

## 📈 Metrics to Track (Future)

Once in production, track:

- % of actions undone (baseline behavior)
- Time to undo (are users clicking immediately?)
- Auto-resolution rate (how many let it complete?)
- Error rate (any failures?)
- User feedback (does it feel safe?)

---

## 🎁 What Success Looks Like

**Users should:**
- ✅ Feel confident taking actions
- ✅ Know they can always undo
- ✅ Trust CHIDI with important operations
- ✅ Never feel anxious about clicking
- ✅ Understand what happened

**CHIDI should:**
- ✅ Feel professional
- ✅ Feel trustworthy
- ✅ Feel calm
- ✅ Match enterprise tools
- ✅ Signal quality

---

**Test this pattern thoroughly. Trust is everything.** 🔒
