# CHIDI

**A calm business advisor you talk to — that can also take action for you.**

CHIDI is a conversational business management platform that helps users connect storefronts, manage inventory, handle customer chat, analyze data, and process orders — all through natural conversation.

---

## 🎯 Product Philosophy

> **"Chat is the primary interface. Everything else is secondary."**

CHIDI is not a traditional dashboard tool. It's a conversational operator that:
- Surfaces what matters now
- Executes actions inline
- Shows data without navigation
- Never overwhelms the user

**Read the full philosophy:** [Chat Contract](/docs/chidi-chat-contract.md) 🔒

---

## 🚀 Features

### ✅ **Conversational Interface**
- Natural language interaction
- Context-aware responses
- Persistent conversation history

### ✅ **System Actions**
- Business signals (low stock, pending orders)
- Inline execution (restock, confirm, edit)
- Reversible operations

### ✅ **Contextual Previews**
- Inventory snapshots
- Order summaries
- Sales data
- No navigation required

### ✅ **Business Operations**
- Inventory management
- Order processing
- Customer message handling
- Sales analytics

---

## 🏗️ Architecture

### **Design System**
- Token-based styling (`--color-*`, `--space-*`, `--radius-*`)
- Consistent spacing and typography
- Dark mode optimized
- Mobile responsive

### **Component Structure**
```
/components
├── /app          # App shell, sidebar, layout
├── /auth         # Authentication screens
├── /onboarding   # Onboarding flow
├── /chat         # Chat interface, messages, actions
└── /ui           # Base UI components
```

### **Type System**
```tsx
export type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  action?: ChatAction;
  inlineActions?: InlineAction[];
  preview?: PreviewData;
  timestamp?: Date;
};
```

---

## 📂 Key Documentation

| Document | Purpose |
|----------|---------|
| [Chat Contract](/docs/chidi-chat-contract.md) | Product philosophy and constraints 🔒 |
| [Current Status](/docs/CURRENT_STATUS.md) | **START HERE** - What's done, what's next ⭐ |
| [Design System](/design-system/README.md) | Token system and guidelines |
| [Quick Start](/docs/design/QUICK_START.md) | Developer guide for building pixel-perfect |
| [Cleanup Complete](/docs/CLEANUP_COMPLETE.md) | Recent codebase cleanup (Dec 16) |
| [Figma Audit](/docs/FIGMA_AUDIT_AND_PIXEL_PERFECT_PLAN.md) | Pixel-perfect rebuild plan |

---

## 🎮 Quick Start

### **1. Run the App**
```bash
npm install
npm run dev
```

### **2. Test the Onboarding**
Go through: Welcome → Carousel → Connect → Success → Dashboard

### **3. Try the Chat**
Type in chat:
- `"inventory"` → See contextual preview
- `"restock"` → See system action with inline buttons
- `"sales"` → See sales summary

---

## 🔥 What Makes CHIDI Different

### **Traditional Business Tools:**
- ❌ Dashboard-first
- ❌ Modal overload
- ❌ Navigation complexity
- ❌ Overwhelming data

### **CHIDI:**
- ✅ Conversation-first
- ✅ Inline execution
- ✅ Contextual data
- ✅ Calm, focused experience

---

## 📈 Current Status

### **Completed:**
- ✅ Complete onboarding flow
- ✅ Conversational interface
- ✅ System action cards
- ✅ Inline actions
- ✅ Contextual previews
- ✅ Token-based design system
- ✅ Mobile responsive
- ✅ Type-safe architecture

### **Next Steps:**
- Backend AI integration
- Real inventory data
- Persistent chat history
- Multi-storefront support
- Team collaboration

---

## 🎯 Core Principles

From our [Chat Contract](/docs/chidi-chat-contract.md):

1. **Chat is the primary interface** — Users should never need to leave chat
2. **Dashboards are secondary** — Only shown when explicitly requested
3. **Every action is reversible** — Trust through safety
4. **Previews are read-only** — Editing is intentional
5. **Never overwhelm** — Surface only what matters now
6. **CHIDI leads, user decides** — Recommend, don't pressure
7. **Calm is a feature** — If it adds noise, it doesn't belong

---

## 🏆 Product Positioning

> **CHIDI is primarily a conversational business advisor with the ability to take action.**

**Not:**
- A chatbot with a dashboard
- A dashboard with a chatbot
- An AI analytics tool

**But:**
- An advisor you talk to
- That understands your business
- And can execute when you're ready

---

## 🛠️ Tech Stack

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS v4 (CSS variables)
- **Animation:** Motion (formerly Framer Motion)
- **Icons:** Lucide React
- **State:** React hooks (local state)
- **Type Safety:** Full TypeScript coverage

---

## 📞 Support

For questions about product direction, refer to the [Chat Contract](/docs/chidi-chat-contract.md).

For technical implementation, see [Complete Implementation](/COMPLETE_IMPLEMENTATION.md).

---

**Built with intentional calm.** 🌊