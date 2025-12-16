/**
 * Product Meta - Quiet metadata (category, SKU, connected apps)
 */

import { InventoryItem } from "@/state/mockBusiness";

interface ProductMetaProps {
  product: InventoryItem;
}

function MetaRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <div className="flex justify-between py-[var(--space-3)] border-b border-[var(--color-border-subtle)] last:border-b-0">
      <span className="text-caption text-[var(--color-text-secondary)]">
        {label}
      </span>
      <span className="text-caption text-[var(--color-text-primary)]">
        {value}
      </span>
    </div>
  );
}

export function ProductMeta({ product }: ProductMetaProps) {
  return (
    <div className="
      bg-[var(--color-bg-surface)]
      border
      border-[var(--color-border-subtle)]
      rounded-[var(--radius-card)]
      p-[var(--space-lg)]
      mt-[var(--space-2xl)]
    ">
      <MetaRow label="Category" value={product.category} />
      <MetaRow label="SKU" value={product.sku} />
      <MetaRow
        label="Price"
        value={product.price}
      />
      {product.connectedApps && product.connectedApps.length > 0 && (
        <MetaRow
          label="Connected"
          value={product.connectedApps.join(" · ")}
        />
      )}
      <MetaRow
        label="Last updated"
        value={
          product.lastUpdated
            ? new Date(product.lastUpdated).toLocaleDateString()
            : undefined
        }
      />
    </div>
  );
}
