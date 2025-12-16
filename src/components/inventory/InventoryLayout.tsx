/**
 * Inventory Layout - Container for inventory pages
 */

export function InventoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-y-auto px-[var(--space-2xl)] py-[var(--space-2xl)]">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
