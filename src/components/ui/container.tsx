/**
 * CHIDI Container Component
 * Layout container with consistent max-width and padding
 */

import * as React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = "", maxWidth = "lg", padding = true, children, ...props }, ref) => {
    const maxWidths = {
      sm: "max-w-[640px]",
      md: "max-w-[768px]",
      lg: "max-w-[var(--space-content-max)]", // 720px
      xl: "max-w-[1280px]",
      full: "max-w-full",
    };
    
    const paddingClass = padding ? "px-[var(--space-container-padding)] lg:px-[var(--space-container-padding-lg)]" : "";
    
    return (
      <div
        ref={ref}
        className={`mx-auto w-full ${maxWidths[maxWidth]} ${paddingClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
