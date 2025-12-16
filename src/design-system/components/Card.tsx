"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { enterSoft, softSpring } from "@/design-system";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <motion.div
            layout
            className={cn("bg-bg-surface rounded-xl p-8 border border-white/5", className)}
            {...enterSoft}
            transition={softSpring}
            {...props}
        >
            {children}
        </motion.div>
    );
}
