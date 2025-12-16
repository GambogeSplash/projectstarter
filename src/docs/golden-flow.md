# The Golden Flow

**CHIDI's signature interaction - the one thing that defines everything**

---

## 🎯 What Is The Golden Flow?

The Golden Flow is:
- ✅ The first thing you demo
- ✅ The first thing users remember
- ✅ The story investors repeat
- ✅ The anchor of your case study

**If this flow works, everything else can come later.**

---

## 🔒 The Golden Question (Locked)

> **"Anything I should know today?"**

### **Why This Is Perfect:**

1. **Natural language** - How people actually talk
2. **Non-technical** - No jargon, no learning curve
3. **Low effort** - One sentence
4. **High trust** - CHIDI proves it knows the business
5. **Works every day** - Never gets old

**This question becomes CHIDI's signature moment.**

---

## 📜 The Complete Flow (8 Steps)

### **Step 1: User Opens CHIDI (Calm Entry)**

**System message (once per day):**
```
"Good morning. I'm keeping an eye on your business."
```

**Design intent:**
- Calm, not demanding
- Present, not pushy
- Aware, not anxious

---

### **Step 2: User Asks The Golden Question**

**User types:**
```
"Anything I should know today?"
```

**Critical:**
- No buttons
- No suggestions
- Must work via typing
- Natural conversation

---

### **Step 3: CHIDI Responds With Judgment (Not Data)**

**Assistant message (500ms delay):**
```
"A couple of items are running low."
```

**Why this order matters:**
- Summary first
- No numbers yet
- No overwhelm
- Sets context

---

### **Step 4: Contextual Preview Appears (Evidence)**

**Preview card (800ms delay):**
```
┌─────────────────────────────────┐
│ LOW STOCK                       │
├─────────────────────────────────┤
│ Black Dress (Size M)      3 left│
│ Denim Jacket (Size L)     1 left│
└─────────────────────────────────┘
```

**This proves CHIDI:**
- Knows the business
- Isn't guessing
- Respects attention

---

### **Step 5: System Action Appears (Optional, Calm)**

**System card (1100ms delay):**
```
"Want me to restock these?"

[Restock]  [Ignore for now]
```

**Design rules:**
- Optional (not forced)
- Two choices (not overwhelming)
- Calm language (not urgent)
- No "Edit" yet (keep it tight)

---

### **Step 6: User Clicks "Restock"**

**Immediate system response:**
```
"Restock started. Undo"
```

**This is the trust moment:**
- Undo visible immediately
- 7-second window
- Calm, professional
- No anxiety

---

### **Step 7: Resolution (After Undo Window)**

**If no undo (7 seconds pass):**
```
"Restock completed. I'll let you know if anything else needs attention."
```

**If user clicks undo:**
```
"No changes were made."
```

**Both feel:**
- Calm
- Professional
- Respectful of agency

---

### **Step 8: End In Calm (Not Excitement)**

**No confetti.**  
**No success screen.**  
**No pressure.**

Just:
```
"You're all set."
```

**This is key:**
- CHIDI is professional, not cheerleader
- Calm is the feature
- Trust over excitement

---

## ⚙️ Implementation Details

### **Timing (Critical)**

| Event | Delay | Reason |
|-------|-------|--------|
| Judgment text | 500ms | Feels thoughtful |
| Preview card | 800ms | Natural pacing |
| System action | 1100ms | Not rushed |
| Undo window | 7000ms | Trust window |

**Why timing matters:**
- Too fast = robotic
- Too slow = laggy
- This pacing = thoughtful

---

### **Copy Rules (Ruthless)**

#### **❌ Bad:**
```
"Great news! I've noticed that you might want to consider restocking some items that are running low in your inventory!"
```

#### **✅ Good:**
```
"A couple of items are running low."
```

**Rules:**
- Remove adjectives
- Remove exclamation points
- Remove apologies
- Shorten everything

---

### **Code Structure**

```tsx
// Golden Flow handler
const handleGoldenFlow = () => {
  const lowStock = getLowStockItems();
  const hasIssues = lowStock.length > 0;

  if (!hasIssues) {
    // Empty state (calm reassurance)
    setTimeout(() => {
      setMessages([...messages, {
        role: "system",
        content: "You're all caught up. Everything looks good today.",
      }]);
    }, 800);
    return;
  }

  // Step 3: Judgment
  setTimeout(() => {
    setMessages([...messages, {
      role: "assistant",
      content: "A couple of items are running low.",
    }]);
  }, 500);

  // Step 4: Evidence
  setTimeout(() => {
    setMessages([...messages, {
      role: "assistant",
      preview: { type: "inventory", items: lowStock },
    }]);
  }, 800);

  // Step 5: Action
  setTimeout(() => {
    setMessages([...messages, {
      role: "system",
      content: "Want me to restock these?",
      inlineActions: [
        { id: "confirm_restock_all", label: "Restock" },
        { id: "ignore_for_now", label: "Ignore for now" },
      ],
    }]);
  }, 1100);
};
```

---

## 🎭 Empty State Variant

### **When Nothing Needs Attention:**

**Step 2:** User asks "Anything I should know today?"

**Step 3:** System responds (800ms delay):
```
"You're all caught up. Everything looks good today."
```

**That's it.**

**No:**
- Upsells
- Feature pushes
- "Get started" CTAs
- Fake suggestions

**Why this is powerful:**
- Respects user's time
- Builds trust
- Feels professional
- Reduces anxiety

---

## 📊 What This Achieves

### **Trust:**
- User knows CHIDI is aware
- Even when nothing is wrong
- Calm, not needy

### **Habit:**
- One question works every day
- Natural to ask
- Never feels repetitive

### **Demo:**
- Easy to show
- Easy to remember
- Easy to explain

### **Story:**
- "Just ask CHIDI anything"
- Simple positioning
- Clear value prop

---

## 🧪 Testing The Golden Flow

### **Test Checklist:**

- [ ] Type "Anything I should know today?"
- [ ] See judgment first (500ms)
- [ ] See preview second (800ms)
- [ ] See action third (1100ms)
- [ ] Click "Restock"
- [ ] See "Undo" immediately
- [ ] Wait 7 seconds OR click undo
- [ ] See calm resolution
- [ ] Check: Nothing feels rushed
- [ ] Check: Nothing feels anxious
- [ ] Check: Copy is conversational

---

## 🚫 When To Stop

**You stop working on the Golden Flow when:**

1. ✅ You can demo it without explaining
2. ✅ A non-designer understands it
3. ✅ It feels boring in a good way
4. ✅ Nothing feels missing

**At that point: freeze it.**

---

## 🎯 Variants (Later)

### **Other Questions That Use Same Pattern:**

- "What's urgent?"
- "What do I need to do?"
- "How's today going?"
- "Any issues?"

**All follow same flow:**
1. Judgment
2. Evidence
3. Action (optional)
4. Calm resolution

**But "Anything I should know today?" is the anchor.**

---

## 💎 Key Insights

### **This Is Massive Because:**

1. **Signature Moment**
   - Every product needs one
   - This is CHIDI's

2. **Daily Habit**
   - Works every day
   - Never gets old
   - Natural to ask

3. **Trust Building**
   - Proves awareness
   - Respects time
   - Calm execution

4. **Demo Story**
   - Easy to show
   - Easy to remember
   - Easy to explain

---

## 🔥 Bottom Line

**The Golden Flow is:**
- ✅ Implemented
- ✅ Timed correctly
- ✅ Copy polished
- ✅ Empty states handled
- ✅ Undo integrated
- ✅ Ready to demo

**This is CHIDI's signature.**  
**This is what users remember.**  
**This is what makes it real.** ✨

---

## 📚 Related Documentation

- [Chat Contract](/docs/chidi-chat-contract.md) - Product philosophy
- [Undo Pattern](/docs/undo-pattern.md) - Trust through reversibility
- [Empty States](/docs/empty-states.md) - Calm reassurance

---

**Last updated:** December 2024  
**Status:** Golden Flow Complete 🔒
