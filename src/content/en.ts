/**
 * English Copy - Single Source of Truth
 * 
 * CHIDI LANGUAGE RULES:
 * - Short sentences
 * - Neutral tone
 * - No slang
 * - No idioms
 * - No metaphors
 * - Globally understandable English
 * 
 * BAD: "Looks like things are flying off the shelves!"
 * GOOD: "This item has been selling consistently."
 */

export const en = {
  // Chat Messages
  chat: {
    greeting: {
      morning: "Good morning. I'm keeping an eye on your business.",
      afternoon: "Good afternoon. I'm keeping an eye on your business.",
      evening: "Good evening. I'm keeping an eye on your business.",
    },
    allClear: "You're all caught up. Everything looks good today.",
    lowStockSummary: "A couple of items are running low.",
    restockPrompt: "Want me to restock this?",
    restockStarted: "Restock started.",
    restockComplete: "Restock completed. I'll let you know if anything else needs attention.",
    actionFailed: "I couldn't complete that. Want to try again?",
    noChanges: "No changes were made.",
    contextAwareness: "You're looking at {productName}. I can help if you need anything.",
    helpMessage: "I'm here to help. You can ask me about inventory, orders, or sales.",
  },

  // Inventory
  inventory: {
    title: "Inventory",
    subtitle: "Review and update your products",
    addProduct: "Add Product",
    lowStock: "Low stock",
    inStock: "In stock",
    unitsLeft: "{count} left",
    backToInventory: "Back to Inventory",
    noIssues: "No inventory issues today. All products are sufficiently stocked.",
    askChidi: "Ask CHIDI",
    updateStock: "Update Stock",
  },

  // Orders
  orders: {
    title: "Orders",
    subtitle: "A record of recent customer orders",
    empty: "No orders yet. I'll let you know when something comes in.",
    newOrder: "You received a new order for {productName}.",
    status: {
      delivered: "Delivered",
      pending: "Pending",
      cancelled: "Cancelled",
    },
  },

  // Notifications
  notifications: {
    lowStock: "{productName} is running low",
    newOrder: "New order received",
    actionCompleted: "Action completed",
    details: {
      lowStock: "Only {count} units left",
      newOrder: "Order for {productName}",
      restock: "Added {count} units of {productName}",
    },
  },

  // Settings
  settings: {
    title: "Settings",
    sections: {
      notifications: "Notifications",
      integrations: "Integrations",
      account: "Account",
    },
    notificationSettings: {
      lowStock: {
        label: "Let me know when inventory is running low",
        description: "CHIDI will notify you when products need restocking",
      },
      newOrder: {
        label: "Notify me when a new order comes in",
        description: "Get notified about incoming customer orders",
      },
      actionCompleted: {
        label: "Tell me when actions are completed",
        description: "Confirmation when restocks and tasks finish",
      },
    },
    integrations: {
      connected: "Connected",
      notConnected: "Not connected",
      disconnect: "Disconnect",
    },
    account: {
      businessName: "Business name",
      email: "Email",
      plan: "Plan",
      signOut: "Sign out",
    },
  },

  // Product Detail
  product: {
    category: "Category",
    sku: "SKU",
    price: "Price",
    connectedApps: "Connected apps",
    lastUpdated: "Last updated",
  },

  // Restock Modal
  restock: {
    title: "Update Stock",
    currentStock: "Current stock",
    addUnits: "Add units",
    newStock: "New stock",
    quickOptions: "Quick options",
    confirm: "Confirm Restock",
    cancel: "Cancel",
    optional: "Optional",
    costPerUnit: "Cost per unit",
    preview: "{current} + {adding} = {total} units",
  },

  // Contextual Questions
  questions: {
    whyLow: "{productName} is running low because it has been selling steadily and hasn't been restocked yet. You currently have {current} units, and you usually keep at least {threshold}.",
    shouldRestock: {
      yes: "Yes, {productName} is below your usual threshold. I'd recommend restocking soon.",
      no: "{productName} looks good right now. You have {current} units in stock.",
    },
    selling: "{productName} has been selling consistently. It's one of your steady performers.",
  },

  // Actions
  actions: {
    restock: "Restock",
    notNow: "Not now",
    undo: "Undo",
    ignoreForNow: "Ignore for now",
    editQuantity: "Edit quantity",
    viewInventory: "View inventory",
  },

  // Empty States
  empty: {
    noMessages: "What can I help you with today?",
    noOrders: "No orders yet.",
    noNotifications: "No notifications.",
    noProducts: "No products yet.",
  },

  // Onboarding
  onboarding: {
    welcome: "Welcome to CHIDI",
    continue: "Continue",
    getStarted: "Get started",
    skip: "Skip",
  },

  // Errors
  errors: {
    generic: "Something went wrong. Want to try again?",
    connectionLost: "The connection to {service} was lost. Want to reconnect it?",
    restockFailed: "I couldn't restock this item. Want to try again?",
  },
} as const;

// Type for accessing copy
export type Copy = typeof en;

// Helper function for string interpolation
export function interpolate(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(
    /\{(\w+)\}/g,
    (match, key) => String(values[key]) || match
  );
}
