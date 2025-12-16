/**
 * CHIDI Input Component
 * Based on shadcn/ui patterns with CHIDI design tokens
 */

import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type, error = false, ...props }, ref) => {
    const baseStyles = "w-full rounded-[var(--radius-input)] bg-[var(--color-bg-surface-raised)] border text-[var(--color-text-primary)] px-[var(--space-3)] h-[44px] transition-colors placeholder:text-[var(--color-text-secondary)] focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50";
    
    const stateStyles = error
      ? "border-[var(--color-accent-destructive)] focus-visible:ring-[var(--color-accent-destructive)]"
      : "border-[var(--color-border-default)] focus-visible:ring-[var(--color-accent-primary)]";
    
    return (
      <input
        type={type}
        className={`${baseStyles} ${stateStyles} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
