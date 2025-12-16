/**
 * Restock Modal - Quick presets + manual override
 * 
 * DESIGN:
 * - Presets reduce thinking (10 / 20 / 50)
 * - Manual override still exists
 * - Optional cost field
 * - One clear primary action
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { InventoryItem, restockItem } from "@/state/mockBusiness";

interface RestockModalProps {
  product: InventoryItem;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function RestockModal({
  product,
  isOpen,
  onClose,
  onSuccess,
}: RestockModalProps) {
  const [quantity, setQuantity] = useState(10);
  const [cost, setCost] = useState("");

  const presets = [10, 20, 50];

  const handleRestock = () => {
    // Update business state
    restockItem(product.id, quantity);

    // Close modal
    onClose();

    // Notify success
    onSuccess();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              bg-black/50
              backdrop-blur-sm
              z-50
            "
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-[var(--space-lg)]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="
                bg-[var(--color-bg-surface)]
                border
                border-[var(--color-border)]
                rounded-[var(--radius-card)]
                w-full
                max-w-md
                p-[var(--space-2xl)]
                shadow-xl
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-[var(--space-xl)]">
                <div>
                  <h2 className="text-[var(--color-text-primary)] mb-[var(--space-1)]">
                    Restock {product.name}
                  </h2>
                  <p className="text-caption text-[var(--color-text-secondary)]">
                    Currently: {product.stock} in stock
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="
                    text-[var(--color-text-secondary)]
                    hover:text-[var(--color-text-primary)]
                    transition-colors
                  "
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Presets */}
              <div className="mb-[var(--space-lg)]">
                <label className="block text-caption text-[var(--color-text-secondary)] mb-[var(--space-3)]">
                  Quick select
                </label>
                <div className="flex gap-[var(--space-3)]">
                  {presets.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setQuantity(preset)}
                      className={`
                        flex-1
                        py-[var(--space-3)]
                        rounded-[var(--radius-button)]
                        border
                        transition-all
                        ${
                          quantity === preset
                            ? "border-[var(--color-accent-primary)] bg-[var(--color-accent-primary-alpha)] text-[var(--color-accent-primary)]"
                            : "border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border)]"
                        }
                      `}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Manual Input */}
              <div className="mb-[var(--space-lg)]">
                <label className="block text-caption text-[var(--color-text-secondary)] mb-[var(--space-3)]">
                  Or enter quantity
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                  min="1"
                  className="
                    w-full
                    px-[var(--space-lg)]
                    py-[var(--space-3)]
                    bg-[var(--color-bg-base)]
                    border
                    border-[var(--color-border-subtle)]
                    rounded-[var(--radius-button)]
                    text-[var(--color-text-primary)]
                    focus:outline-none
                    focus:border-[var(--color-accent-primary)]
                  "
                />
              </div>

              {/* Optional: Cost */}
              <div className="mb-[var(--space-2xl)]">
                <label className="block text-caption text-[var(--color-text-secondary)] mb-[var(--space-3)]">
                  Cost per unit (optional)
                </label>
                <input
                  type="text"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  placeholder="$0.00"
                  className="
                    w-full
                    px-[var(--space-lg)]
                    py-[var(--space-3)]
                    bg-[var(--color-bg-base)]
                    border
                    border-[var(--color-border-subtle)]
                    rounded-[var(--radius-button)]
                    text-[var(--color-text-primary)]
                    placeholder:text-[var(--color-text-tertiary)]
                    focus:outline-none
                    focus:border-[var(--color-accent-primary)]
                  "
                />
              </div>

              {/* New Stock Preview */}
              <div className="
                mb-[var(--space-2xl)]
                p-[var(--space-lg)]
                bg-[var(--color-bg-base)]
                rounded-[var(--radius-button)]
                text-center
              ">
                <span className="text-caption text-[var(--color-text-secondary)]">
                  New stock: {product.stock} + {quantity} ={" "}
                </span>
                <span className="text-body text-[var(--color-text-primary)] font-medium">
                  {product.stock + quantity} units
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-[var(--space-3)]">
                <button
                  onClick={onClose}
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
                >
                  Cancel
                </button>
                <button
                  onClick={handleRestock}
                  disabled={quantity <= 0}
                  className="
                    flex-1
                    px-[var(--space-lg)]
                    py-[var(--space-3)]
                    bg-[var(--color-accent-primary)]
                    text-[var(--color-text-inverse)]
                    rounded-[var(--radius-button)]
                    hover:opacity-90
                    transition-opacity
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  Confirm Restock
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
