/**
 * Inventory Grid - Grid of inventory cards
 */

import { InventoryItem } from "@/state/mockBusiness";
import { InventoryCard } from "./InventoryCard";

interface InventoryGridProps {
  items: InventoryItem[];
  onProductClick?: (productId: string) => void;
}

export function InventoryGrid({ items, onProductClick }: InventoryGridProps) {
  if (items.length === 0) {
    return (
      <div className="
        py-[var(--space-4xl)]
        text-center
        text-[var(--color-text-secondary)]
      ">
        No products yet. Add your first product to get started.
      </div>
    );
  }

  return (
    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-[var(--space-xl)]
    ">
      {items.map((item) => (
        <InventoryCard 
          key={item.id} 
          product={item}
          onProductClick={onProductClick}
        />
      ))}
    </div>
  );
}