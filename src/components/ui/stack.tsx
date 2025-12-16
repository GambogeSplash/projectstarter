/**
 * CHIDI Stack Component
 * Flexbox layout utility for consistent spacing
 */

import * as React from "react";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ 
    className = "", 
    direction = "column", 
    gap = "md", 
    align = "stretch", 
    justify = "start",
    children, 
    ...props 
  }, ref) => {
    const directions = {
      row: "flex-row",
      column: "flex-col",
    };
    
    const gaps = {
      xs: "gap-[var(--space-xs)]",   // 8px
      sm: "gap-[var(--space-sm)]",   // 12px
      md: "gap-[var(--space-md)]",   // 16px
      lg: "gap-[var(--space-lg)]",   // 20px
      xl: "gap-[var(--space-xl)]",   // 24px
      "2xl": "gap-[var(--space-2xl)]", // 32px
    };
    
    const alignments = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    };
    
    const justifications = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    };
    
    return (
      <div
        ref={ref}
        className={`flex ${directions[direction]} ${gaps[gap]} ${alignments[align]} ${justifications[justify]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = "Stack";

export { Stack };
