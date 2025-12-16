/**
 * CHIDI Button Component
 * Based on shadcn/ui patterns with CHIDI design tokens
 */

import { motion } from "motion/react";
import { fastSpring } from "@/design-system/motion/transitions";
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-button)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-[var(--color-accent-primary)] text-[var(--color-text-on-accent)] hover:bg-[var(--color-accent-primary-hover)]",
      secondary: "bg-[var(--color-bg-surface-raised)] text-[var(--color-text-primary)] border border-[var(--color-border-strong)] hover:bg-[var(--color-bg-surface-hover)]",
      ghost: "text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface-raised)]",
      destructive: "bg-[var(--color-accent-destructive)] text-[var(--color-text-on-accent)] hover:opacity-90",
      outline: "border border-[var(--color-border-default)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface-raised)]",
    };
    
    const sizes = {
      sm: "h-[34px] px-[var(--space-3)] text-[var(--font-size-base)]",
      md: "h-[44px] px-[var(--space-4)] text-[var(--font-size-md)]",
      lg: "h-[52px] px-[var(--space-6)] text-[var(--font-size-lg)]",
    };
    
    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        transition={fastSpring}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
