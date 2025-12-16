/**
 * Auth Button - OAuth and authentication buttons
 * Uses design tokens and motion presets
 */

import { motion } from "motion/react";
import { fastSpring } from "@/design-system/motion/transitions";
import { ReactNode } from "react";

interface AuthButtonProps {
  icon?: ReactNode;
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export function AuthButton({ icon, label, onClick, variant = "secondary" }: AuthButtonProps) {
  const variantStyles = {
    primary: "bg-[var(--color-accent-primary)] text-[var(--color-text-on-accent)] hover:bg-[var(--color-accent-primary-hover)]",
    secondary: "bg-[var(--color-bg-surface-raised)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-bg-surface-hover)]"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={fastSpring}
      onClick={onClick}
      className={`
        h-[44px]
        w-full
        rounded-[var(--radius-button)]
        flex
        items-center
        justify-center
        gap-[var(--space-2)]
        transition-colors
        ${variantStyles[variant]}
      `}
    >
      {icon && <div className="shrink-0">{icon}</div>}
      <span className="text-button">{label}</span>
    </motion.button>
  );
}
