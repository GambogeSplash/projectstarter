/**
 * Auth Layout - Shared layout for all auth/onboarding screens
 * Uses design tokens for consistent styling
 */

import { motion } from "motion/react";
import { fadeIn, softSpring } from "@/design-system/motion/transitions";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <motion.main
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={softSpring}
      className="
        min-h-screen
        bg-[var(--color-bg-app)]
        flex
        items-center
        justify-center
        px-[var(--space-md)]
      "
    >
      {children}
    </motion.main>
  );
}
