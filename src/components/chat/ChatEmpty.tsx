/**
 * Chat Empty State - Welcome message when no messages exist
 * Uses design tokens for consistent styling
 */

import { motion } from "motion/react";
import { fadeInUp, softSpring } from "@/design-system/motion/transitions";
import { Stack } from "../ui/stack";
import svgPaths from "../../imports/svg-f6oxiuj9uw";

export function ChatEmpty() {
  const suggestions = [
    "What's my inventory status?",
    "Show me my bestsellers",
    "Any pending customer messages?",
    "Create a product listing",
  ];

  return (
    <motion.div
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={softSpring}
      className="flex flex-col items-center justify-center py-[var(--space-24)]"
    >
      <Stack gap="xl" align="center" className="max-w-[600px]">
        {/* CHIDI Icon */}
        <div className="w-[64px] h-[64px]">
          <svg className="w-full h-full" fill="none" viewBox="0 0 64 64">
            <path d={svgPaths.p1eee60b0} fill="var(--color-accent-secondary)" />
          </svg>
        </div>

        {/* Welcome Text */}
        <Stack gap="sm" align="center">
          <h2 className="text-heading-2">How can I help you today?</h2>
          <p className="text-body text-[var(--color-text-secondary)] text-center">
            I'm your AI business assistant. Ask me anything about your inventory,
            customers, or business operations.
          </p>
        </Stack>

        {/* Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-2)] w-full mt-[var(--space-md)]">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="
                bg-[var(--color-bg-surface)]
                border border-[var(--color-border-default)]
                rounded-[var(--radius-button)]
                p-[var(--space-3)]
                text-body-sm
                text-[var(--color-text-secondary)]
                hover:border-[var(--color-border-strong)]
                hover:text-[var(--color-text-primary)]
                transition-all
                text-left
              "
            >
              {suggestion}
            </button>
          ))}
        </div>
      </Stack>
    </motion.div>
  );
}