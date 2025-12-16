/**
 * Integration Item - Selectable integration card
 * For connecting storefronts (WhatsApp, Instagram, Shopify)
 */

import { motion } from "motion/react";
import { fastSpring } from "@/design-system/motion/transitions";
import { Check } from "lucide-react";

interface IntegrationItemProps {
  name: string;
  description: string;
  icon?: React.ReactNode;
  selected: boolean;
  onToggle: () => void;
}

export function IntegrationItem({
  name,
  description,
  icon,
  selected,
  onToggle,
}: IntegrationItemProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={fastSpring}
      onClick={onToggle}
      className={`
        w-full
        text-left
        rounded-[var(--radius-card)]
        border
        p-[var(--space-md)]
        bg-[var(--color-bg-surface)]
        flex
        items-start
        gap-[var(--space-3)]
        transition-colors
        ${
          selected
            ? "border-[var(--color-accent-primary)]"
            : "border-[var(--color-border-default)] hover:border-[var(--color-border-strong)]"
        }
      `}
    >
      {icon && <div className="shrink-0 mt-1">{icon}</div>}
      
      <div className="flex-1">
        <div className="text-label mb-[var(--space-1)]">
          {name}
        </div>
        <div className="text-body-sm text-[var(--color-text-secondary)]">
          {description}
        </div>
      </div>

      {selected && (
        <div className="shrink-0">
          <div className="w-5 h-5 rounded-full bg-[var(--color-accent-primary)] flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
        </div>
      )}
    </motion.button>
  );
}
