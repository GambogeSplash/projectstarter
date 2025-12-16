/**
 * Product Hero - Product image, name, and stock status
 */

import { InventoryItem } from "@/state/mockBusiness";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ProductHeroProps {
  product: InventoryItem;
}

export function ProductHero({ product }: ProductHeroProps) {
  const isLow = product.stock <= product.restockThreshold;

  return (
    <div className="mb-[var(--space-2xl)]">
      {/* Product Image */}
      <div className="aspect-square rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-bg-base)] mb-[var(--space-lg)]">
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

      {/* Product Name */}
      <h1 className="text-[var(--color-text-primary)] mb-[var(--space-2)]">
        {product.name}
      </h1>

      {/* Variant */}
      {product.variant && (
        <p className="text-body text-[var(--color-text-secondary)] mb-[var(--space-2)]">
          {product.variant}
        </p>
      )}

      {/* Stock Status */}
      <p className="text-body text-[var(--color-text-secondary)]">
        {product.stock} units ·{" "}
        <span
          className={
            isLow
              ? "text-[var(--color-accent-danger)]"
              : "text-[var(--color-text-secondary)]"
          }
        >
          {isLow ? "Low stock" : "In stock"}
        </span>
      </p>
    </div>
  );
}
