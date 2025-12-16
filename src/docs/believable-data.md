# Believable Data System

**Not mocks. Not random arrays. A tiny, consistent, evolving world.**

---

## 🎯 The Goal

CHIDI should feel like:
- ✅ It remembers yesterday
- ✅ Things change because of actions
- ✅ Time passes
- ✅ Cause → Effect → Time

**We achieve this with:**
- In-memory state
- Simple rules
- Zero backend
- Zero AI

---

## 🔒 The Principle (Locked)

### **Fake data must obey cause → effect → time**

**If:**
- Stock is low today
- User restocks
- **Then:** Tomorrow it's no longer low

**If:**
- No orders this morning
- Later there are orders
- **Then:** CHIDI acknowledges the change

**No randomness without reason.**

---

## 📦 The Business State

### **Single Source of Truth:**

`/state/mockBusiness.ts`

```tsx
export type InventoryItem = {
  id: string;
  name: string;
  variant?: string;
  stock: number;
  restockThreshold: number;
};

export type Order = {
  id: string;
  productName: string;
  quantity: number;
  time: string;
};

export type BusinessState = {
  day: number;
  inventory: InventoryItem[];
  orders: Order[];
};
```

**This is your entire fake backend.**

---

## 🏗️ Initial State (Believable)

```tsx
export let businessState: BusinessState = {
  day: 1,
  inventory: [
    {
      id: "dress-black-m",
      name: "Black Dress",
      variant: "Size M",
      stock: 3,
      restockThreshold: 5,
    },
    {
      id: "top-white-s",
      name: "White Top",
      variant: "Size S",
      stock: 8,
      restockThreshold: 5,
    },
    {
      id: "jacket-denim-l",
      name: "Denim Jacket",
      variant: "Size L",
      stock: 1,
      restockThreshold: 4,
    },
    // ... more items
  ],
  orders: [],
};
```

**Notice:**
- Not everything is low
- Thresholds differ
- Feels like a real shop

---

## ⚙️ Helper Functions (Cause → Effect)

### **1. Get Low Stock Items**

```tsx
export function getLowStockItems(): InventoryItem[] {
  return businessState.inventory.filter(
    (item) => item.stock <= item.restockThreshold
  );
}
```

**Used for:**
- Inventory previews
- Golden Flow detection
- Empty state logic

---

### **2. Restock Item**

```tsx
export function restockItem(id: string, amount = 10): void {
  businessState.inventory = businessState.inventory.map((item) =>
    item.id === id 
      ? { ...item, stock: item.stock + amount } 
      : item
  );
}
```

**Cause:** User clicks "Restock"  
**Effect:** Stock increases by 10  
**Result:** Next query shows updated stock

---

### **3. Add Order**

```tsx
export function addOrder(order: Order): void {
  businessState.orders.push(order);

  // Reduce stock when order comes in
  businessState.inventory = businessState.inventory.map((item) =>
    item.name === order.productName
      ? { ...item, stock: Math.max(0, item.stock - order.quantity) }
      : item
  );
}
```

**Cause:** New order arrives  
**Effect:** Stock decreases  
**Result:** Might trigger low stock alert

---

### **4. Advance Time (Critical)**

```tsx
export function nextDay(): void {
  businessState.day += 1;

  // Simulate an order every other day
  if (businessState.day % 2 === 0) {
    addOrder({
      id: crypto.randomUUID(),
      productName: "Black Dress",
      quantity: 1,
      time: "10:24 AM",
    });
  }
}
```

**Why this matters:**
- Time passing makes app feel real
- Some days are quiet
- Some days have activity
- Nothing feels random

---

## 🔗 Connected To Chat

### **Example: Golden Flow**

```tsx
const handleGoldenFlow = () => {
  const lowStock = getLowStockItems();
  const hasIssues = lowStock.length > 0;

  if (!hasIssues) {
    // Empty state
    return "You're all caught up. Everything looks good today.";
  }

  // Show low stock items
  return {
    content: "A couple of items are running low.",
    preview: {
      type: "inventory",
      items: lowStock.map(item => ({
        title: item.name,
        subtitle: item.variant,
        meta: `${item.stock} left`,
      })),
    },
  };
};
```

**Now CHIDI feels aware.**

---

### **Example: Restock Action**

```tsx
if (actionId === "confirm_restock_all") {
  const lowStock = getLowStockItems();
  
  // Actually update the state
  lowStock.forEach(item => restockItem(item.id, 10));

  return {
    role: "system",
    content: "Restock started.",
    undoable: { ... },
  };
}
```

**Cause:** User restocks  
**Effect:** State updates  
**Result:** Next query shows higher stock

---

## ⏰ Time Progression

### **Advance Day Manually (For Demos):**

```tsx
// Add a hidden button or keyboard shortcut
<button onClick={() => {
  nextDay();
  setMessages([...messages, {
    role: "system",
    content: "New day started. I'll keep an eye on things.",
  }]);
}}>
  Next Day (Demo)
</button>
```

**This gives temporal credibility:**
- Day 1: Low stock alert
- User restocks
- Day 2: All caught up
- Day 3: New order comes in, stock drops

---

## 🎭 Example Scenarios

### **Scenario 1: Restock Changes State**

**Initial:**
```tsx
getLowStockItems() → [
  { name: "Black Dress", stock: 3 },
  { name: "Denim Jacket", stock: 1 }
]
```

**User Action:**
```
User: "Anything I should know today?"
CHIDI: Shows 2 low items → User clicks "Restock"
```

**After Restock:**
```tsx
getLowStockItems() → []
// All items now above threshold
```

**Next Query:**
```
User: "Anything I should know today?"
CHIDI: "You're all caught up. Everything looks good today."
```

**This feels real.**

---

### **Scenario 2: Orders Affect Inventory**

**Initial:**
```tsx
inventory: [
  { name: "Black Dress", stock: 13 }
]
```

**Time Passes:**
```tsx
nextDay() // Day becomes even, triggers order
addOrder({
  productName: "Black Dress",
  quantity: 1,
})
```

**Result:**
```tsx
inventory: [
  { name: "Black Dress", stock: 12 }
]

orders: [
  { productName: "Black Dress", quantity: 1, time: "10:24 AM" }
]
```

**CHIDI:**
```
"You have a new order for Black Dress."
```

**This feels connected.**

---

## 🧪 Testing Believability

### **Test 1: Cause → Effect**

1. Check initial low stock count
2. Restock an item
3. Check low stock count again
4. **Expected:** Count decreased by 1

**Pass if:** State actually changed

---

### **Test 2: Time → Change**

1. Note current day
2. Call `nextDay()`
3. Check if orders appeared
4. Check if stock decreased

**Pass if:** World evolved

---

### **Test 3: Empty → Full**

1. Start with no orders
2. Advance time
3. Check orders list
4. **Expected:** Order appeared

**Pass if:** Empty state transitioned naturally

---

### **Test 4: Memory**

1. Restock item
2. Navigate away
3. Come back
4. Check inventory

**Pass if:** Change persisted (in-memory)

---

## 🎯 What This Enables

### **1. Demos Feel Real**

- Not static mocks
- Changes happen
- Time matters
- Cause → Effect

### **2. User Testing Works**

- Can interact meaningfully
- Actions have consequences
- Feel like real app

### **3. No Backend Needed**

- Everything in-memory
- Fast iteration
- Zero infrastructure
- Perfect for prototyping

### **4. Easy To Extend**

```tsx
// Add new data type
export type Customer = {
  id: string;
  name: string;
  messages: Message[];
};

// Add to state
export let businessState = {
  day: 1,
  inventory: [...],
  orders: [...],
  customers: [], // New!
};

// Add helper
export function getUnreadMessages() {
  return businessState.customers
    .flatMap(c => c.messages)
    .filter(m => !m.read);
}
```

---

## 🚫 What To Avoid

### **❌ Random Data:**

```tsx
// BAD
const stock = Math.floor(Math.random() * 20);
```

**Why:** Feels arbitrary, not believable

---

### **❌ Static Mocks:**

```tsx
// BAD
const lowStock = [
  { name: "Item 1", stock: 3 },
  { name: "Item 2", stock: 1 },
]; // Never changes
```

**Why:** Actions don't matter

---

### **❌ Overly Complex:**

```tsx
// BAD - Don't need Redux/Zustand yet
import { configureStore } from '@reduxjs/toolkit';
// ... 200 lines of boilerplate
```

**Why:** Overengineering kills iteration speed

---

## 💡 Key Insight

> **Most products never feel this real in demos.**

**Because:**
- They use static JSON
- Or random data
- Or fully connected backend (slow iteration)

**CHIDI uses:**
- Believable initial state
- Simple rules
- Cause → Effect → Time
- In-memory (fast, flexible)

**This is the sweet spot for prototyping + demos.**

---

## 📈 Future Enhancements

### **Phase 1 (Current):** ✅
- In-memory state
- Basic cause → effect
- Manual time progression
- 5 inventory items
- Order simulation

### **Phase 2 (Later):**
- LocalStorage persistence
- More inventory items
- Customer messages
- Sales data over time
- Realistic timing (not manual)

### **Phase 3 (Production):**
- Real backend
- Real data
- Real-time updates
- Multi-user
- Analytics

**But Phase 1 is enough for now.**

---

## 🔒 Status

**Implementation:** Complete  
**State Management:** In-memory  
**Cause → Effect:** Working  
**Time Progression:** Manual (perfect for demos)  
**Believability:** High

**What you have:**
- ✅ Initial believable state
- ✅ Helper functions
- ✅ Connected to chat
- ✅ Cause → effect logic
- ✅ Time progression
- ✅ Empty state awareness

**This makes CHIDI feel like it has memory and intelligence.**

---

## 📚 Files

| File | Purpose |
|------|---------|
| `/state/mockBusiness.ts` | Business state + helpers |
| `/components/chat/DashboardComplete.tsx` | Connected to state |
| `/docs/believable-data.md` | This document |

---

**Last updated:** December 2024  
**Status:** Believable World Created 🔒
