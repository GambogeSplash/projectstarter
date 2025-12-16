/**
 * System Action Card - Operational signals from CHIDI
 * Shows actionable business events with inline execution options
 */

import { motion } from "motion/react";
import { softSpring } from "@/design-system/motion/transitions";
import { ChatMessage } from "@/types/chat";

interface SystemActionCardProps {
  message: ChatMessage;
  onAction?: (action: string) => void;
  onInlineAction?: (actionId: string) => void;
}

export function SystemActionCard({
  message,
  onAction,
  onInlineAction,
}: SystemActionCardProps) {
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
      {/* Message Content */}
      <div className="text-body text-[var(--color-text-primary)] mb-[var(--space-3)]">
        {message.content}
      </div>

      {/* Inline Actions */}
      {message.inlineActions && message.inlineActions.length > 0 && (
        <div className="flex gap-[var(--space-3)] mb-[var(--space-3)]">
          {message.inlineActions.map((action) => (
            <motion.button
              key={action.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onInlineAction?.(action.id)}
              className="
                px-[var(--space-3)]
                py-[var(--space-2)]
                rounded-[var(--radius-button)]
                border
                border-[var(--color-border-subtle)]
                text-body-sm
                text-[var(--color-text-primary)]
                hover:bg-[var(--color-bg-app)]
                transition-colors
              "
            >
              {action.label}
            </motion.button>
          ))}
        </div>
      )}

      {/* Undo Button */}
      {message.undoable && (
        <button
          onClick={() => onInlineAction?.("undo")}
          className="
            text-body-sm
            text-[var(--color-text-secondary)]
            hover:text-[var(--color-text-primary)]
            underline
            transition-colors
          "
        >
          {message.undoable.undoLabel}
        </button>
      )}

      {/* Primary Action */}
      {message.action && !message.undoable && (
        <button
          onClick={() => onAction?.(message.action!)}
          className="
            text-body-sm
            text-[var(--color-accent-primary)]
            hover:text-[var(--color-accent-primary-hover)]
            transition-colors
          "
        >
          Take action →
        </button>
      )}
    </motion.div>
  );
}