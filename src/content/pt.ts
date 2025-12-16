/**
 * Portuguese Copy - Future Implementation
 * 
 * This file is a placeholder for Portuguese (Brazilian) translation.
 * It maintains the same structure as en.ts.
 * 
 * When ready to translate:
 * 1. Copy structure from en.ts
 * 2. Translate all strings
 * 3. Keep interpolation keys in English ({productName}, {count}, etc.)
 * 4. Test with real Portuguese-speaking users
 */

import { type Copy } from "./en";

// Placeholder - will match en.ts structure exactly
export const pt: Copy = {
  chat: {
    greeting: {
      morning: "Bom dia. Estou de olho no seu negócio.",
      afternoon: "Boa tarde. Estou de olho no seu negócio.",
      evening: "Boa noite. Estou de olho no seu negócio.",
    },
    // ... rest will be added when needed
    allClear: "",
    lowStockSummary: "",
    restockPrompt: "",
    restockStarted: "",
    restockComplete: "",
    actionFailed: "",
    noChanges: "",
    contextAwareness: "",
    helpMessage: "",
  },
  inventory: {
    title: "Inventário",
    subtitle: "",
    addProduct: "",
    lowStock: "",
    inStock: "",
    unitsLeft: "",
    backToInventory: "",
    noIssues: "",
    askChidi: "",
    updateStock: "",
  },
  // ... rest matches en.ts structure
} as any; // Type assertion for now - will be properly typed when translated
