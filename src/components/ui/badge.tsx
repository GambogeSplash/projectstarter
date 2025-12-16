/**
 * CHIDI Badge Component
 * Based on shadcn/ui patterns with CHIDI design tokens
 */

import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "info" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-[var(--radius-badge)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--font-size-xs)] font-medium transition-colors";
    
    const variants = {
      default: "bg-[var(--color-bg-surface-raised)] text-[var(--color-text-primary)] border border-[var(--color-border-default)]",
      success: "bg-[var(--color-status-success)]/10 text-[var(--color-status-success)] border border-[var(--color-status-success)]/20",
      warning: "bg-[var(--color-status-warning)]/10 text-[var(--color-status-warning)] border border-[var(--color-status-warning)]/20",
      error: "bg-[var(--color-status-error)]/10 text-[var(--color-status-error)] border border-[var(--color-status-error)]/20",
      info: "bg-[var(--color-status-info)]/10 text-[var(--color-status-info)] border border-[var(--color-status-info)]/20",
      outline: "border border-[var(--color-border-default)] text-[var(--color-text-secondary)]",
    };
    
    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
