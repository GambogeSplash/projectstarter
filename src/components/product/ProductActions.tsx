/**
 * Product Actions - Primary actions (Restock, Ask CHIDI)
 */

"use client";

import { useState } from "react";
import { InventoryItem } from "@/state/mockBusiness";
import { RestockModal } from "./RestockModal";

interface ProductActionsProps {
  product: InventoryItem;
  onBackToInventory?: () => void;
  onAskChidi?: () => void;
}

export function ProductActions({ product, onBackToInventory, onAskChidi }: ProductActionsProps) {
  const isLow = product.stock <= product.restockThreshold;
  const [showRestockModal, setShowRestockModal] = useState(false);

  const handleRestockSuccess = () => {
    // Close modal and optionally refresh
    setShowRestockModal(false);
    // The component will re-render because businessState changed
  };

  const handleAskChidi = () => {
    // User wants to ask CHIDI about this product
    // Context is already set, just navigate to chat
    if (onAskChidi) {
      onAskChidi();
    }
  };

  return (
    <>
      <div className="flex gap-[var(--space-3)] mb-[var(--space-2xl)]">
        {/* Primary: Restock (if low) */}
        {isLow && (
          <button
            className="
              flex-1
              px-[var(--space-lg)]
              py-[var(--space-3)]
              bg-[var(--color-accent-primary)]
              text-[var(--color-text-inverse)]
              rounded-[var(--radius-button)]
              hover:opacity-90
              transition-opacity
            "
            onClick={() => setShowRestockModal(true)}
          >
            Update Stock
          </button>
        )}

        {/* Secondary: Ask CHIDI */}
        <button
          className="
            flex-1
            px-[var(--space-lg)]
            py-[var(--space-3)]
            bg-[var(--color-bg-surface)]
            border
            border-[var(--color-border-subtle)]
            text-[var(--color-text-primary)]
            rounded-[var(--radius-button)]
            hover:bg-[var(--color-bg-hover)]
            transition-colors
          "
          onClick={handleAskChidi}
        >
          Ask CHIDI
        </button>
      </div>

      {/* Restock Modal */}
      <RestockModal
        product={product}
        isOpen={showRestockModal}
        onClose={() => setShowRestockModal(false)}
        onSuccess={handleRestockSuccess}
      />
    </>
  );
}