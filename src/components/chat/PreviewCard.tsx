/**
 * Preview Card - Contextual data surfaces inside chat
 * Shows inventory, orders, sales data without navigation
 */

import { motion } from "motion/react";
import { softSpring } from "@/design-system/motion/transitions";
import { PreviewData } from "@/types/chat";

interface PreviewCardProps {
  preview: PreviewData;
}

export function PreviewCard({ preview }: PreviewCardProps) {
  const getPreviewTitle = () => {
    switch (preview.type) {
      case "inventory":
        return "Low Stock";
      case "orders":
        return "Recent Orders";
      case "sales":
        return "Sales Summary";
      default:
        return "Preview";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={softSpring}
      className="
        mx-auto
        max-w-xl
        w-full
        bg-[var(--color-bg-surface)]
        border
        border-[var(--color-border-subtle)]
        rounded-[var(--radius-card)]
        p-[var(--space-lg)]
      "
    >
      {/* Preview Header */}
      <div className="
        mb-[var(--space-3)]
        text-caption
        text-[var(--color-text-secondary)]
        uppercase
        tracking-wider
      ">
        {getPreviewTitle()}
      </div>

      {/* Preview Items */}
      <div className="space-y-[var(--space-3)]">
        {preview.items.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              py-[var(--space-2)]
              border-b
              border-[var(--color-border-subtle)]
              last:border-b-0
              last:pb-0
            "
          >
            <div className="flex-1">
              <div className="text-body-sm text-[var(--color-text-primary)]">
                {item.title}
              </div>
              {item.subtitle && (
                <div className="text-caption text-[var(--color-text-secondary)]">
                  {item.subtitle}
                </div>
              )}
            </div>

            {item.meta && (
              <div className="text-caption text-[var(--color-text-secondary)] ml-[var(--space-3)]">
                {item.meta}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
