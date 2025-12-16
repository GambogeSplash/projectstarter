/**
 * AI Service - Narrow, safe, useful
 * 
 * THE AI BOUNDARY:
 * "AI can talk about the system. The system decides what is true."
 * 
 * AI is allowed to:
 * - Summarize
 * - Explain
 * - Clarify
 * 
 * AI is NOT allowed to:
 * - Trigger actions
 * - Change state
 * - Bypass undo
 * - Invent data
 */

export type SummaryInput = {
  lowStockItems: { name: string; stock: number; threshold: number }[];
  ordersToday: number;
  day: number;
};

export type ExplanationInput = {
  itemName: string;
  currentStock: number;
  threshold: number;
  recentOrders?: number;
};

/**
 * Generate daily summary
 * This is the ONLY place AI speaks proactively
 */
export async function generateSummary(input: SummaryInput): Promise<string> {
  const { lowStockItems, ordersToday } = input;

  // Placeholder implementation (swap with real AI later)
  // This trains the mental model and contract

  if (lowStockItems.length === 0 && ordersToday === 0) {
    return "Everything's running smoothly today.";
  }

  const parts: string[] = [];

  // Low stock summary
  if (lowStockItems.length > 0) {
    if (lowStockItems.length === 1) {
      const item = lowStockItems[0];
      parts.push(
        `${item.name} is running low — you have ${item.stock} left and usually keep at least ${item.threshold}.`
      );
    } else {
      parts.push(
        `${lowStockItems.length} items are running low on stock.`
      );
    }
  }

  // Orders summary
  if (ordersToday > 0) {
    parts.push(
      ordersToday === 1
        ? "One new order came in."
        : `${ordersToday} new orders came in.`
    );
  }

  return parts.join(" ");
}

/**
 * Generate explanation for "Why?" questions
 * This helps users understand the system's reasoning
 */
export async function generateExplanation(
  input: ExplanationInput
): Promise<string> {
  const { itemName, currentStock, threshold } = input;

  // Placeholder implementation
  // Real AI would analyze patterns, seasonality, etc.

  const deficit = threshold - currentStock;

  if (deficit <= 1) {
    return `${itemName} is just slightly below your usual threshold. It's been selling steadily.`;
  } else if (deficit <= 3) {
    return `${itemName} has been selling faster than usual. You're ${deficit} units below your normal stock level.`;
  } else {
    return `${itemName} is significantly below your threshold. This might indicate higher demand or a missed restock.`;
  }
}

/**
 * When you're ready to swap in real AI:
 * 
 * 1. Install SDK: npm install openai
 * 2. Add API key to environment
 * 3. Replace placeholder logic:
 * 
 * import OpenAI from 'openai';
 * const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
 * 
 * export async function generateSummary(input: SummaryInput) {
 *   const response = await openai.chat.completions.create({
 *     model: 'gpt-4',
 *     messages: [
 *       {
 *         role: 'system',
 *         content: 'You are CHIDI, a calm business advisor. Summarize business status in 1-2 sentences. Be concise and professional.'
 *       },
 *       {
 *         role: 'user',
 *         content: JSON.stringify(input)
 *       }
 *     ],
 *     temperature: 0.3,
 *   });
 *   return response.choices[0].message.content || '';
 * }
 * 
 * 4. Test with AI ON
 * 5. Test with AI OFF (fallback)
 * 6. Ship with confidence
 */

/**
 * Check if AI is available
 * Used to gracefully degrade if API is down
 */
export function isAIAvailable(): boolean {
  // For now, always true (using placeholder)
  // Later: check API key, connectivity, etc.
  return true;
}

/**
 * Fallback summary (if AI fails)
 * Always have a non-AI path
 */
export function generateFallbackSummary(input: SummaryInput): string {
  const { lowStockItems, ordersToday } = input;

  if (lowStockItems.length === 0 && ordersToday === 0) {
    return "No issues to report.";
  }

  const parts: string[] = [];

  if (lowStockItems.length > 0) {
    parts.push(
      lowStockItems.length === 1
        ? "One item is running low."
        : `${lowStockItems.length} items are running low.`
    );
  }

  if (ordersToday > 0) {
    parts.push(`${ordersToday} new order${ordersToday === 1 ? "" : "s"}.`);
  }

  return parts.join(" ");
}
