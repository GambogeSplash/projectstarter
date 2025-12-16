/**
 * Active Context - Tracks what the user is currently looking at
 * 
 * THE PRINCIPLE:
 * "Pages provide context. Chat provides interpretation and action."
 * 
 * This allows chat to be context-aware without being creepy.
 */

export type ActiveContext =
  | {
      type: "product";
      productId: string;
    }
  | null;

let activeContext: ActiveContext = null;

/**
 * Set the active context (what user is looking at)
 */
export function setActiveContext(context: ActiveContext): void {
  activeContext = context;
  console.log('[Context] Set active context:', context);
}

/**
 * Get the current active context
 */
export function getActiveContext(): ActiveContext {
  return activeContext;
}

/**
 * Clear active context (when user navigates away)
 */
export function clearActiveContext(): void {
  console.log('[Context] Cleared active context');
  activeContext = null;
}

/**
 * Check if a specific product is active
 */
export function isProductActive(productId: string): boolean {
  return activeContext?.type === "product" && activeContext.productId === productId;
}
