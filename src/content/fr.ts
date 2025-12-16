/**
 * French Copy - Future Implementation
 * 
 * This file is a placeholder for French translation.
 * It maintains the same structure as en.ts.
 * 
 * When ready to translate:
 * 1. Copy structure from en.ts
 * 2. Translate all strings
 * 3. Keep interpolation keys in English ({productName}, {count}, etc.)
 * 4. Test with real French-speaking users
 */

import { type Copy } from "./en";

// Placeholder - will match en.ts structure exactly
export const fr: Copy = {
  chat: {
    greeting: {
      morning: "Bonjour. Je surveille votre entreprise.",
      afternoon: "Bon après-midi. Je surveille votre entreprise.",
      evening: "Bonsoir. Je surveille votre entreprise.",
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
    title: "Inventaire",
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
