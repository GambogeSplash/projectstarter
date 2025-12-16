"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { pressFeedback, fastSpring } from "@/design-system";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none transition-colors cursor-pointer min-h-[44px] touch-manipulation";

    const variants = {
        primary: "bg-accent-brand text-bg-primary hover:bg-accent-brand/90",
        secondary: "bg-bg-surface text-text-primary hover:bg-bg-surface/80 border border-white/10",
        outline: "border border-white/20 text-text-primary hover:bg-white/5",
        ghost: "text-text-primary hover:bg-white/5",
    };

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-lg",
    };

    return (
        <motion.button
            {...pressFeedback}
            transition={fastSpring}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}
