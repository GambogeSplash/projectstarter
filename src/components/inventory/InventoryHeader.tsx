/**
 * Inventory Header - Title and Add Product CTA
 */

export function InventoryHeader() {
  return (
    <div className="flex justify-between items-start mb-[var(--space-2xl)]">
      <div>
        <h1 className="text-[var(--color-text-primary)] mb-[var(--space-2)]">
          Inventory
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Review and update your products
        </p>
      </div>

      <button
        className="
          px-[var(--space-lg)]
          py-[var(--space-3)]
          bg-[var(--color-bg-surface)]
          border
          border-[var(--color-border-subtle)]
          rounded-[var(--radius-button)]
          text-[var(--color-text-primary)]
          hover:bg-[var(--color-bg-hover)]
          transition-colors
        "
      >
        + Add Product
      </button>
    </div>
  );
}
