/**
 * Inventory Card - Individual product card
 * Visual, scannable, touch-friendly
 */

"use client";

import { motion } from "motion/react";
import { softSpring } from "@/design-system/motion/transitions";
import { InventoryItem } from "@/state/mockBusiness";
import { setActiveContext } from "@/state/activeContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface InventoryCardProps {
  product: InventoryItem;
  onProductClick?: (productId: string) => void;
}

export function InventoryCard({ product, onProductClick }: InventoryCardProps) {
  const isLow = product.stock <= product.restockThreshold;

  function handleClick() {
    // Set active context so chat knows what user is looking at
    setActiveContext({
      type: "product",
      productId: product.id,
    });

    // Navigate to product detail via callback
    onProductClick?.(product.id);
  }

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      transition={softSpring}
      onClick={handleClick}
      className="
        bg-[var(--color-bg-surface)]
        border
        border-[var(--color-border-subtle)]
        rounded-[var(--radius-card)]
        overflow-hidden
        cursor-pointer
        hover:border-[var(--color-border)]
        transition-colors
      "
    >
      {/* Product Image */}
      <div className="aspect-square bg-[var(--color-bg-base)] relative">
        {product.image ? (
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--color-text-tertiary)]">
            No image
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-[var(--space-lg)]">
        <div className="text-body text-[var(--color-text-primary)] mb-[var(--space-1)]">
          {product.name}
        </div>

        {product.variant && (
          <div className="text-caption text-[var(--color-text-secondary)] mb-[var(--space-2)]">
            {product.variant}
          </div>
        )}

        <div className="text-caption text-[var(--color-text-secondary)] mb-[var(--space-2)]">
          {product.price}
        </div>

        {/* Stock Status */}
        {isLow ? (
          <div className="text-caption text-[var(--color-accent-danger)]">
            Low stock · {product.stock} left
          </div>
        ) : (
          <div className="text-caption text-[var(--color-text-secondary)]">
            {product.stock} in stock
          </div>
        )}
      </div>
    </motion.div>
  );
}