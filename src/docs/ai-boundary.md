# The AI Boundary

**How CHIDI uses AI without losing control**

---

## 🎯 The Core Principle

> **"AI can talk about the system. The system decides what is true."**

This keeps CHIDI reliable.

---

## 🔒 What AI Is Allowed To Do

### **✅ AI Can:**

1. **Summarize**
   - Daily business status
   - What changed
   - What matters

2. **Explain**
   - Why something is low
   - Why something matters
   - Context and patterns

3. **Clarify**
   - Answer "why?" questions
   - Provide context
   - Make data understandable

---

## 🚫 What AI Is NOT Allowed To Do

### **❌ AI Cannot:**

1. **Trigger actions**
   - No "AI decided to restock"
   - System controls all operations

2. **Change state**
   - No mutating business data
   - State is source of truth

3. **Bypass undo**
   - All actions go through undo pattern
   - AI doesn't get special privileges

4. **Invent data**
   - AI narrates facts
   - System provides facts

---

## 🏗️ The Architecture

### **Two Layers:**

```
┌─────────────────────────────────────┐
│         AI Layer (Narrator)         │
│  - Summarizes                       │
│  - Explains                         │
│  - Clarifies                        │
│  - Uses natural language            │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│      System Layer (Operator)        │
│  - Owns state                       │
│  - Triggers actions                 │
│  - Provides facts                   │
│  - Controls undo                    │
└─────────────────────────────────────┘
```

**AI talks about what the system knows.**  
**The system is the source of truth.**

---

## 📜 The Job: Daily Summarization

### **What AI Does:**

**Input (from system):**
```tsx
{
  lowStockItems: [
    { name: "Black Dress", stock: 3, threshold: 5 },
    { name: "Denim Jacket", stock: 1, threshold: 4 }
  ],
  ordersToday: 2,
  day: 1
}
```

**Output (AI-generated):**
```
"A couple of items are running low on stock. 2 new orders came in today."
```

**Then system shows evidence:**
- Preview card with low stock items
- System action card with restock option

---

## 🎨 The Flow

### **Golden Flow with AI:**

**1. User asks:**
```
"Anything I should know today?"
```

**2. System gathers facts:**
```tsx
const lowStock = getLowStockItems();
const orders = getTodaysOrders();
```

**3. AI narrates:**
```tsx
const summary = await generateSummary({
  lowStockItems: lowStock,
  ordersToday: orders.length,
  day: businessState.day,
});

// Returns: "A couple of items are running low on stock."
```

**4. System provides evidence:**
```tsx
<PreviewCard items={lowStock} />
```

**5. System offers action:**
```tsx
<SystemActionCard 
  content="Want me to restock these?"
  inlineActions={[...]}
/>
```

**6. User acts → System executes → Undo pattern**

---

## 💻 Implementation

### **File: `/services/ai.ts`**

```tsx
export async function generateSummary(input: SummaryInput) {
  // Placeholder (swap with real AI later)
  return `${input.lowStockItems.length} items are running low on stock.`;
}

export async function generateExplanation(input: ExplanationInput) {
  // Placeholder (swap with real AI later)
  return `${input.itemName} has been selling steadily.`;
}
```

---

### **Wired into Golden Flow:**

```tsx
const handleGoldenFlow = async () => {
  const lowStock = getLowStockItems();

  // AI speaks first
  const summary = await generateSummary({
    lowStockItems: lowStock,
    ordersToday: businessState.orders.length,
    day: businessState.day,
  });

  setMessages([
    { role: "assistant", content: summary },  // AI narrates
    { role: "assistant", preview: lowStock }, // System shows evidence
    { role: "system", inlineActions: [...] }, // System offers action
  ]);
};
```

---

## 🔄 Graceful Degradation

### **Always Have Fallback:**

```tsx
try {
  if (isAIAvailable()) {
    summary = await generateSummary(input);
  } else {
    summary = generateFallbackSummary(input);
  }
} catch (error) {
  // Graceful fallback
  summary = "A couple of items are running low.";
}
```

**Why this matters:**
- API might be down
- Rate limits
- Network issues
- Cost control

**CHIDI always works, with or without AI.**

---

## 🎯 Where AI Appears

### **Current Implementation:**

**1. Golden Flow Summary** ✅
- User: "Anything I should know today?"
- AI: Generates natural summary
- System: Provides evidence + actions

**2. (Future) "Why?" Explanations**
- User: "Why is this low?"
- AI: Explains based on facts
- System: Shows supporting data

---

### **Where AI Does NOT Appear:**

**❌ System messages**
- These are operational
- No AI interpretation needed

**❌ Action triggers**
- User clicks "Restock"
- System executes (no AI involved)

**❌ Empty states**
- These are calm reassurance
- Simple, direct copy

**❌ Undo messages**
- "No changes were made"
- Clear, factual, no AI needed

---

## 🧪 How to Test

### **Test 1: AI ON**
1. Type "Anything I should know today?"
2. See AI-generated summary
3. Summary should feel natural
4. System evidence follows

### **Test 2: AI OFF (Fallback)**
1. Disable AI (set `isAIAvailable()` to false)
2. Type "Anything I should know today?"
3. See fallback summary
4. Should still work perfectly

### **Test 3: AI Fails**
1. Make `generateSummary` throw error
2. Type "Anything I should know today?"
3. Catch error → use hardcoded fallback
4. User never sees error

---

## 🔍 When You Know This Is Right

### **✅ Success Criteria:**

1. **Golden Flow sounds more natural**
   - "A couple of items are running low"
   - vs. "2 items below threshold"

2. **System behaves the same**
   - AI doesn't change logic
   - Actions still go through undo
   - State still controlled by system

3. **Nothing breaks if AI is removed**
   - Fallback works
   - No dependencies on AI
   - Graceful degradation

4. **You can demo with AI ON or OFF**
   - Both modes work
   - Quality degrades gracefully
   - Core experience intact

**If AI feels "cool but unnecessary" → you did it right.**

---

## 🚀 Swapping in Real AI

### **When Ready:**

**1. Install SDK:**
```bash
npm install openai
```

**2. Add API Key:**
```env
OPENAI_API_KEY=sk-...
```

**3. Update `/services/ai.ts`:**
```tsx
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSummary(input: SummaryInput) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: `You are CHIDI, a calm business advisor. 
                  Summarize business status in 1-2 sentences. 
                  Be concise and professional. 
                  Never suggest actions - only narrate facts.`
      },
      {
        role: 'user',
        content: JSON.stringify(input)
      }
    ],
    temperature: 0.3, // Low = consistent
    max_tokens: 100,  // Short summaries
  });

  return response.choices[0].message.content || generateFallbackSummary(input);
}
```

**4. Test:**
- AI ON → natural summaries
- AI OFF → fallback works
- Errors → graceful degradation

**5. Ship with confidence**

---

## 📊 What This Enables

### **Now:**
- ✅ Natural daily summaries
- ✅ System still in control
- ✅ AI as narrator only

### **Soon:**
- "Why?" explanations
- Pattern recognition
- Contextual insights

### **Later:**
- Trend analysis
- Predictive summaries
- Multi-business patterns

**But always:** AI narrates, system operates.

---

## 🎁 Key Insights

### **1. AI is Narrow**
- One job: summarize + explain
- Not freeform chatbot
- Not agent
- Not decision-maker

### **2. AI is Safe**
- Can't change state
- Can't trigger actions
- Can't bypass undo
- Can't invent data

### **3. AI is Useful**
- Makes summaries natural
- Explains patterns
- Improves UX
- But not required

### **4. AI is Swappable**
- Contract is clear
- Interface is simple
- Fallback always works
- Easy to upgrade

---

## 🔒 Chat Contract Alignment

### **Principle 1: Chat is primary** ✅
- AI makes conversation more natural
- Still chat-first

### **Principle 3: Reversible actions** ✅
- AI doesn't trigger actions
- System controls undo

### **Principle 5: Never overwhelms** ✅
- AI summarizes (reduces info)
- Doesn't add noise

### **Principle 6: CHIDI leads, user decides** ✅
- AI narrates
- System offers
- User decides

### **Principle 7: Calm is a feature** ✅
- AI tone is calm
- No urgency
- Professional

**100% alignment maintained.** ✅

---

## 📚 Files

| File | Purpose |
|------|---------|
| `/services/ai.ts` | AI service (placeholder + real) |
| `/components/chat/DashboardComplete.tsx` | Wired into Golden Flow |
| `/docs/ai-boundary.md` | This document |

---

## ✅ Status

**Implementation:** Complete (placeholder)  
**Integration:** Wired into Golden Flow  
**Fallback:** Working  
**Ready for:** Real AI swap

**The boundary is clear:**
- AI narrates
- System operates
- Trust maintained

---

**Last updated:** December 2024  
**Status:** AI Boundary Locked 🔒
