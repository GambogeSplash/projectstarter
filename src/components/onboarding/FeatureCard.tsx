/**
 * Feature Card - Core carousel content for onboarding
 * Displays feature title, description, and optional visual
 */

import { motion } from "motion/react";
import { fadeInUp, softSpring } from "@/design-system/motion/transitions";
import { Stack } from "../ui/stack";

interface FeatureCardProps {
  title: string;
  description: string;
  visual?: React.ReactNode;
}

export function FeatureCard({ title, description, visual }: FeatureCardProps) {
  return (
    <motion.div
      key={title}
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      exit={{ opacity: 0, y: -12 }}
      transition={softSpring}
      className="
        bg-[var(--color-bg-surface)]
        rounded-[var(--radius-card)]
        p-[var(--space-card-padding-lg)]
        text-center
        w-full
        max-w-md
      "
    >
      <Stack gap="md" align="center">
        {visual && <div className="mb-[var(--space-md)]">{visual}</div>}

        <h2 className="text-heading-2">{title}</h2>

        <p className="text-body text-[var(--color-text-secondary)]">
          {description}
        </p>
      </Stack>
    </motion.div>
  );
}
