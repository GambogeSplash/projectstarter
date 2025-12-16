/**
 * Orders Header - Simple, neutral header
 * 
 * No performance language
 * No "insights"
 * Neutral tone
 */

export function OrdersHeader() {
  return (
    <div className="mb-[var(--space-2xl)]">
      <h1 className="text-[var(--color-text-primary)] mb-[var(--space-1)]">
        Orders
      </h1>
      <p className="text-[var(--color-text-secondary)]">
        A record of recent customer orders.
      </p>
    </div>
  );
}
