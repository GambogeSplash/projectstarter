"use client";

import { motion } from "framer-motion";
import { softSpring } from "@/design-system/motion/transitions";

export function AuthCard({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={softSpring}
            className="
        w-full
        max-w-[400px]
        bg-bg-surface
        rounded-2xl
        p-10
      "
        >
            {children}
        </motion.div>
    );
}
